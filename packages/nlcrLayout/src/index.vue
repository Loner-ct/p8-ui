<template>
  <div id="normal-layout">
    <div id="normal-header" v-show="headerVisible">
      <slot name="north"></slot>
    </div>
    <div id="normal-main" :class="headerVisible?'':'fullHeight'">
      <el-row>
        <el-col
          :xs="layout.left.xs"
          :sm="layout.left.sm"
          :md="layout.left.md"
          :lg="layout.left.lg"
          :xl="layout.left.xl"
        >
          <div id="normal-left">
            <VuePerfectScrollbar class="scroll-area" v-if="leftUsePerfectScrollbar">
              <slot name="left"></slot>
            </VuePerfectScrollbar>
            <slot v-else name="left"></slot>
          </div>
        </el-col>
        <el-col
          :xs="layout.center.xs"
          :sm="layout.center.sm"
          :md="layout.center.md"
          :lg="layout.center.lg"
          :xl="layout.center.xl"
        >
          <div id="splitBtn" @click="splitClick">
            <i class="p8" :class="{ 'icon-left': expandWest, 'icon-right': !expandWest}"></i>
          </div>
          <div id="normal-center">
            <slot name="center"></slot>
          </div>
        </el-col>
        <el-col
          :xs="layout.right.xs"
          :sm="layout.right.sm"
          :md="layout.right.md"
          :lg="layout.right.lg"
          :xl="layout.right.xl"
        >
          <div id="normal-right">
            <slot name="right"></slot>
          </div>
        </el-col>
      </el-row>
      <slot name="drawer-panel"></slot>
    </div>
  </div>
</template>
<script>
import { Row, Col } from 'element-ui'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import { deepClone } from 'packages/formGenerator/utils'

export default {
  name: 'P8NlcrLayout',
  componentName: 'P8NlcrLayout',
  props: {
    headerVisible: {
      type: Boolean,
      default: true
    },
    normalLayout: {
      type: Object,
      default: function () {
        return {
          left: {
            xs: 8, sm: 7, md: 6, lg: 5, xl: 4
          },
          center: {
            xs: 8, sm: 10, md: 12, lg: 14, xl: 16
          },
          right: {
            xs: 8, sm: 7, md: 6, lg: 5, xl: 4
          }
        }
      }
    },
    leftUsePerfectScrollbar: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      expandWest: true, // 默认展开west
      oldNormalLayout: deepClone(this.normalLayout),
      layout: deepClone(this.normalLayout)
    }
  },
  computed: {},
  watch: {},
  mounted () { },
  methods: {
    splitClick () {
      if (this.expandWest) {
        this.layout.left = {
          xs: 0, sm: 0, md: 0, lg: 0, xl: 0
        }
        this.layout.right = {
          xs: 24 * this.oldNormalLayout.center.xs,
          sm: 24 - this.oldNormalLayout.center.sm,
          md: 24 - this.oldNormalLayout.center.md,
          lg: 24 - this.oldNormalLayout.center.lg,
          xl: 24 - this.oldNormalLayout.center.xl
        }
      } else {
        this.$set(this.layout, 'left', this.oldNormalLayout.left)
        this.$set(this.layout, 'right', this.oldNormalLayout.right)
      }
      this.expandWest = !this.expandWest
    }
  },
  components: {
    'el-row': Row,
    'el-col': Col,
    VuePerfectScrollbar
  }
}
</script>
