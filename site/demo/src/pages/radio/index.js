import { Block } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'
import { RadioGroup, Radio, Image, CellGroup, Cell } from 'taro-vantui'

import DemoBlock from '../../components/demo-block/index'
import './index.scss'

export default class Index extends React.Component {
  constructor() {
    super()
  }

  state = {
    radio1: '1',
    radio2: '2',
    radio3: '1',
    radio4: '1',
    radio5: '1',
    radioSize: '1',
    radioLabel: '1',
    radioShape: '1',
    icon: {
      normal:
        'https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png',
      active:
        'https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png',
    },
  }

  onChange = (event) => {
    const { key } = event.currentTarget.dataset
    this.setState({ [key]: event.detail })
  }

  onClick = (event) => {
    const { key, name } = event.currentTarget.dataset
    this.setState({
      [key]: name,
    })
  }

  render() {
    const {
      radio1,
      radio2,
      radioShape,
      radio3,
      radioSize,
      radio4,
      icon,
      radioLabel,
      radio5,
    } = this.state

    return (
      <Block>
        <DemoBlock title="基本用法" padding>
          <RadioGroup
            value={radio1}
            onChange={(e) => {
              this.onChange({
                detail: e.detail,
                currentTarget: {
                  dataset: { key: 'radio1' },
                },
                target: {
                  dataset: { key: 'radio1' },
                },
              })
            }}
          >
            <Radio name="1" className="demo-radio">
              单选框 1
            </Radio>
            <Radio name="2">单选框 2</Radio>
          </RadioGroup>
        </DemoBlock>
        <DemoBlock title="水平排列" padding>
          <RadioGroup
            value={radio1}
            onChange={(e) => {
              this.onChange({
                detail: e.detail,
                currentTarget: {
                  dataset: { key: 'radio1' },
                },
                target: {
                  dataset: { key: 'radio1' },
                },
              })
            }}
            direction="horizontal"
          >
            <Radio name="1">单选框 1</Radio>
            <Radio name="2">单选框 2</Radio>
          </RadioGroup>
        </DemoBlock>
        <DemoBlock title="禁用状态" padding>
          <RadioGroup
            disabled
            value={radio2}
            onChange={(e) => {
              this.onChange({
                detail: e.detail,
                currentTarget: {
                  dataset: { key: 'radio2' },
                },
                target: {
                  dataset: { key: 'radio2' },
                },
              })
            }}
          >
            <Radio name="1" className="demo-radio">
              单选框 1
            </Radio>
            <Radio name="2">单选框 2</Radio>
          </RadioGroup>
        </DemoBlock>
        <DemoBlock title="自定义形状" padding>
          <RadioGroup
            value={radioShape}
            onChange={(e) => {
              this.onChange({
                detail: e.detail,
                currentTarget: {
                  dataset: { key: 'radioShape' },
                },
                target: {
                  dataset: { key: 'radioShape' },
                },
              })
            }}
          >
            <Radio name="1" shape="square" className="demo-radio">
              单选框
            </Radio>
            <Radio name="2" shape="square">
              单选框
            </Radio>
          </RadioGroup>
        </DemoBlock>
        <DemoBlock title="自定义颜色" padding>
          <RadioGroup
            value={radio3}
            onChange={(e) => {
              this.onChange({
                detail: e.detail,
                currentTarget: {
                  dataset: { key: 'radio3' },
                },
                target: {
                  dataset: { key: 'radio3' },
                },
              })
            }}
          >
            <Radio name="1" className="demo-radio" checkedColor="#07c160">
              单选框
            </Radio>
            <Radio name="2" checkedColor="#07c160">
              单选框
            </Radio>
          </RadioGroup>
        </DemoBlock>
        <DemoBlock title="自定义大小" padding>
          <RadioGroup
            value={radioSize}
            onChange={(e) => {
              this.onChange({
                detail: e.detail,
                currentTarget: {
                  dataset: { key: 'radioSize' },
                },
                target: {
                  dataset: { key: 'radioSize' },
                },
              })
            }}
          >
            <Radio name="1" iconSize="24px" className="demo-radio">
              单选框
            </Radio>
            <Radio name="2" iconSize="24px">
              单选框
            </Radio>
          </RadioGroup>
        </DemoBlock>
        <DemoBlock title="自定义图标" padding>
          <RadioGroup
            value={radio4}
            onChange={(e) => {
              this.onChange({
                detail: e.detail,
                currentTarget: {
                  dataset: { key: 'radio4' },
                },
                target: {
                  dataset: { key: 'radio4' },
                },
              })
            }}
          >
            <Radio
              useIconSlot
              name="1"
              renderIcon={
                <Block>
                  <Image
                    src={radio4 === '1' ? icon.active : icon.normal}
                    className="icon"
                    mode="widthFix"
                  ></Image>
                </Block>
              }
            >
              自定义图标
            </Radio>
            <Radio
              useIconSlot
              name="2"
              renderIcon={
                <Block>
                  <Image
                    src={radio4 === '2' ? icon.active : icon.normal}
                    className="icon"
                    mode="widthFix"
                  ></Image>
                </Block>
              }
            >
              自定义图标
            </Radio>
          </RadioGroup>
        </DemoBlock>
        <DemoBlock title="禁用文本点击" padding>
          <RadioGroup
            value={radioLabel}
            onChange={(e) => {
              this.onChange({
                detail: e.detail,
                currentTarget: {
                  dataset: { key: 'radioLabel' },
                },
                target: {
                  dataset: { key: 'radioLabel' },
                },
              })
            }}
          >
            <Radio labelDisabled name="1" className="demo-radio">
              单选框 1
            </Radio>
            <Radio labelDisabled name="2">
              单选框 2
            </Radio>
          </RadioGroup>
        </DemoBlock>
        <DemoBlock title="与 Cell 组件一起使用">
          <RadioGroup value={radio5}>
            <CellGroup>
              <Cell
                title="单选框 1"
                clickable
                onClick={(e) => {
                  this.onClick({
                    detail: e.detail,
                    currentTarget: {
                      dataset: { name: '1', key: 'radio5' },
                    },
                    target: {
                      dataset: { name: '1', key: 'radio5' },
                    },
                  })
                }}
                renderRightIcon={
                  <Block>
                    <Radio value={radio5} name="1"></Radio>
                  </Block>
                }
              ></Cell>
              <Cell
                title="单选框 2"
                clickable
                onClick={(e) => {
                  this.onClick({
                    detail: e.detail,
                    currentTarget: {
                      dataset: { name: '2', key: 'radio5' },
                    },
                    target: {
                      dataset: { name: '2', key: 'radio5' },
                    },
                  })
                }}
                renderRightIcon={
                  <Block>
                    <Radio value={radio5} name="2"></Radio>
                  </Block>
                }
              ></Cell>
            </CellGroup>
          </RadioGroup>
        </DemoBlock>
      </Block>
    )
  }
}
