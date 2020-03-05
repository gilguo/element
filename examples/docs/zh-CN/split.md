## Split 面板分割

用于将一片区域，分割为可以拖拽调整宽度或高度的两部分区域。

### 左右分割

:::demo Split 左右分割用法。
```html
<template>
  <div class="demo-split">
    <el-split v-model="split1">
      <div slot="left" class="demo-split-pane">
        Left Pane
      </div>
      <div slot="right" class="demo-split-pane">
        Right Pane
      </div>
    </el-split>
  </div>
</template>
<script>
export default {
  data () {
    return {
      split1: 0.5
    }
  }
}
</script>
```
:::

### 上下分割

:::demo Split 上下分割用法。
```html
<template>
  <div class="demo-split">
    <el-split v-model="split2" mode="vertical">
      <div slot="top" class="demo-split-pane">
        Top Pane
      </div>
      <div slot="bottom" class="demo-split-pane">
        Bottom Pane
      </div>
    </el-split>
  </div>
</template>
<script>
export default {
  data () {
    return {
      split2: 0.5
    }
  }
}
</script>
```
:::

### 嵌套使用

Split 组件提供了嵌套使用。

:::demo split 嵌套使用。
```html
<template>
  <div class="demo-split">
    <el-split v-model="split3">
      <div slot="left" class="demo-split-pane no-padding">
        <el-split v-model="split4" mode="vertical">
          <div slot="top" class="demo-split-pane">
            Top Pane
          </div>
          <div slot="bottom" class="demo-split-pane">
            Bottom Pane
          </div>
        </el-split>
      </div>
      <div slot="right" class="demo-split-pane">
        Right Pane
      </div>
    </el-split>
  </div>
</template>
<script>
export default {
  data () {
    return {
      split3: 0.5,
      split4: 0.5
    }
  }
}
</script>
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value     | 面板位置 | number/string | 可以是0~1代表百分比，或具体数值的像素，可用v-model双向绑定 | — |
| mode | 类型 | string | horizontal/vertical | horizontal |
| min | 最小阈值 | number/string | - | 40px |
| max | 最大阈值 | number/string | - | 40px |

### Slot

| Name | Description |
|------|--------|
| left | mode为horizontal时可用，左边面板 |
| right | mode为horizontal时可用，右边面板 |
| top | mode为vertical时可用，上边面板 |
| bottom | mode为vertical时可用，下边面板 |
| trigger | 自定义分割拖拽节点 |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| on-move-start | 拖拽开始 | — |
| on-moving | 拖拽中 | event |
| on-move-end | 拖拽结束 | — |
