## Split

One area can be divided into two areas that can be dragged to adjust width or height.

### Left And Right

:::demo Split Left and right usage.
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

### Top And Bottom

:::demo Split Top and bottom usage.
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

### Nest

:::demo split Can be used nested.
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
| Attribute      | Description          | Type      | Accepted Values                           | Default |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value     | The panel position | number/string | which can be 0~1 represents the percentage, or the pixel of the specific value, available for v-model two-way binding. | — |
| mode | Type | string | horizontal/vertical | horizontal |
| min | Minimum threshold. | number/string | - | 40px |
| max | Maximum threshold. | number/string | - | 40px |

### Slot

| Name | Description |
|------|--------|
| left | Available when mode is horizontal, left panel. |
| right | Available when mode is horizontal, right panel. |
| top | Available when mode is vertical, top panel. |
| bottom | Available when mode is vertical, bottom panel. |
| trigger | Custom split drag node. |

### Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| on-move-start | Dragging start | — |
| on-moving | Dragging | event |
| on-move-end | Dragging end | — |
