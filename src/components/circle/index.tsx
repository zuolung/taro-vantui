import Taro, { createSelectorQuery } from '@tarojs/taro'
import { useState, useRef, useEffect, useCallback } from 'react'
import { View, Canvas, CoverView } from '@tarojs/components'

import { CircleProps } from '../../../types/circle'
import { getSystemInfoSync } from '../common/utils.js'
import { isObj } from '../common/validator.js'
// import { canIUseCanvas2d } from '../common/version.js'
import { adaptor } from './canvas.js'

function format(rate: number) {
  return Math.min(Math.max(rate, 0), 100)
}
const PERIMETER = 2 * Math.PI
const BEGIN_ANGLE = -Math.PI / 2
const STEP = 1
let CIRCLE_INDEX = 0

export default function Index(props: CircleProps) {
  const [state, setState] = useState({
    ready: false,
    hoverColor: '',
    unitag: 'van-circle',
  })

  const ref: any = useRef({
    inited: false,
    currentValue: undefined,
    interval: undefined,
  })

  const {
    text,
    lineCap = 'round',
    value = 0,
    speed = 50,
    size = 100,
    fill,
    layerColor = '#ffffff',
    color = '#1989fa',
    type = '',
    strokeWidth = 4,
    clockwise = true,
    style,
    className,
    children,
    ...others
  } = props

  useEffect(() => {
    setState((state) => {
      return {
        ...state,
        // unitag: process.env.TARO_ENV === 'h5' ? `van-circle_uni_${CIRCLE_INDEX++}` : 'van-circle',
        unitag: `van-circle_uni_${CIRCLE_INDEX++}`,
      }
    })
  }, [])

  Taro.useReady(() => {
    // taro h5 nativeProps问题还未修复 hack处理
    Taro.nextTick(() => {
      if (process.env.TARO_ENV === 'h5') {
        const taroCanvas = document.querySelector(`.${state.unitag}`)
        const canvas = taroCanvas?.children?.[0]

        canvas?.setAttribute('width', String(size))
        canvas?.setAttribute('height', String(size))
      }

      setState((state) => {
        return {
          ...state,
          ready: true,
        }
      })
    })
  })

  const getContext = useCallback(() => {
    console.log('getContext')
    if (type === '') {
      const ctx = Taro.createCanvasContext(state.unitag)
      return Promise.resolve(ctx)
    }
    const dpr = getSystemInfoSync().pixelRatio
    return new Promise((resolve: any) => {
      createSelectorQuery()
        .select(`.${state.unitag}`)
        .node()
        .exec((res: any) => {
          const canvas = res[0].node
          const ctx = canvas.getContext(type)
          if (!ref.current.inited) {
            ref.current.inited = true
            canvas.width = size * dpr
            canvas.height = size * dpr
            ctx.scale(dpr, dpr)
          }
          resolve(adaptor(ctx))
        })
    })
  }, [size, type, state.unitag])

  const setHoverColor = function () {
    console.log('setHoverColor')
    if (isObj(color)) {
      const _color = color as Record<string, string>
      return getContext().then((context: any) => {
        const LinearColor = context.createLinearGradient(size, 0, 0, 0)
        Object.keys(color)
          .sort((a, b) => parseFloat(a) - parseFloat(b))
          .map((key: any) =>
            LinearColor.addColorStop(parseFloat(key) / 100, _color[key]),
          )
        setState((state) => {
          return {
            ...state,
            hoverColor: LinearColor,
          }
        })
      })
    }
    setState((state: any) => {
      return {
        ...state,
        hoverColor: color,
      }
    })
    return Promise.resolve()
  }
  const presetCanvas = useCallback(
    (
      context: any,
      strokeStyle: any,
      beginAngle: any,
      endAngle: any,
      fill?: any,
    ) => {
      const position = size / 2
      const radius = position - strokeWidth / 2
      context.setStrokeStyle(strokeStyle)
      context.setLineWidth(strokeWidth)
      context.setLineCap(lineCap)
      context.beginPath()
      context.arc(position, position, radius, beginAngle, endAngle, !clockwise)
      context.stroke()
      if (fill) {
        context.setFillStyle(fill)
        context.fill()
      }
    },
    [clockwise, lineCap, size, strokeWidth],
  )
  const renderLayerCircle = useCallback(
    (context: any) => {
      presetCanvas(context, layerColor, 0, PERIMETER, fill)
    },
    [fill, layerColor, presetCanvas],
  )
  const renderHoverCircle = useCallback(
    (context: any, formatValue: any) => {
      // 结束角度
      const progress = PERIMETER * (formatValue / 100)
      const endAngle = clockwise
        ? BEGIN_ANGLE + progress
        : 3 * Math.PI - (BEGIN_ANGLE + progress)
      presetCanvas(context, state.hoverColor, BEGIN_ANGLE, endAngle)
    },
    [clockwise, presetCanvas, state.hoverColor],
  )
  const drawCircle = useCallback(
    (currentValue: any) => {
      console.log('drawCircle')
      getContext().then((context: any) => {
        context.clearRect(0, 0, size, size)
        renderLayerCircle(context)
        const formatValue = format(currentValue)
        if (formatValue !== 0) {
          renderHoverCircle(context, formatValue)
        }
        context.draw()
      })
    },
    [getContext, renderHoverCircle, renderLayerCircle, size],
  )
  const clearMockInterval = function () {
    if (ref.current.interval) {
      clearTimeout(ref.current.interval)
      ref.current.interval = null
    }
  }
  const reRender = useCallback(() => {
    console.log('reRender')
    if (speed <= 0 || speed > 1000) {
      drawCircle(value)
      return
    }
    clearMockInterval()
    ref.current.currentValue = ref.current.currentValue || 0
    const run = () => {
      ref.current.interval = setTimeout(() => {
        if (ref.current.currentValue !== value) {
          if (Math.abs(ref.current.currentValue - value) < STEP) {
            ref.current.currentValue = value
          } else if (ref.current.currentValue < value) {
            ref.current.currentValue += STEP
          } else {
            ref.current.currentValue -= STEP
          }
          drawCircle(ref.current.currentValue)
          run()
        } else {
          clearMockInterval()
        }
      }, 1000 / speed)
    }
    run()
  }, [drawCircle, speed, value])

  useEffect(() => {
    if (state.ready) {
      reRender()
    }
  }, [reRender, state.ready, value])

  useEffect(() => {
    if (state.ready) {
      drawCircle(ref.current.currentValue)
    }
    // eslint-disable-next-line
  }, [state.ready, size])

  useEffect(() => {
    if (state.ready) {
      setHoverColor().then(() => {
        drawCircle(ref.current.currentValue)
      })
    }
    // eslint-disable-next-line
  }, [state.ready, color])

  useEffect(() => {
    // if (process.env.TARO_ENV !== 'h5') {
    //   if (state.ready) {
    //     ref.current.currentValue = value
    //     setHoverColor().then(() => {
    //       // if (process.env.TARO_ENV === 'h5') {
    //       // reRender()
    //       // } else {
    //       //   drawCircle(ref.current.currentValue)
    //       // }
    //       drawCircle(ref.current.currentValue)
    //     })
    //   }
    // }

    return () => {
      clearMockInterval()
    }
    /* eslint-disable-next-line */
  }, [state.ready])

  return (
    <View className={`van-circle ${className}`} style={style} {...others}>
      <Canvas
        // eslint-disable-next-line
        // @ts-ignore
        width={size}
        height={size}
        nativeProps={{ width: size, height: size }}
        className={`van-circle__canvas ${state.unitag}`}
        type={type}
        style={'width: ' + `${size}px` + ';height:' + `${size}px`}
        id={state.unitag}
        canvasId={state.unitag}
      ></Canvas>
      {!text ? (
        <View className="van-circle__text">{children}</View>
      ) : (
        <CoverView className="van-circle__text">{text}</CoverView>
      )}
    </View>
  )
}
