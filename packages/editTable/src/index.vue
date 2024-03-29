<template>
  <list-layout :headerVisible="addRow">
    <template #north>
      <el-button type="primary" :disabled="disabled" round @click="add">新建</el-button>
    </template>
    <template #center>
      <div class="common-table" :style="{height: flexHeight }">
        <el-table ref="table" height="100%" :data="tableData">
          <template v-for="(item,index) in columns">
            <!-- 列表自定义列 -->
            <el-table-column v-if="item.scopedSlots && item.scopedSlots.customRender == 'custom'" :key="index" :label="item.title" :prop="item.dataIndex" :type="item.type" :width="item.width" :min-width="item.minWidth" :align="item.align">
              <template slot-scope="scope">
                <slot :name="scope.column.property" :scope="scope" :data="tableData"></slot>
              </template>
            </el-table-column>

            <el-table-column
              v-else
              :prop="item.dataIndex"
              :label="item.title"
              :width="item.width"
              :key="index"
              :type="item.type"
              :align="(item.type === 'index' && !(item.align))? 'center':item.align"
              v-bind="item.columnConfig"
            ></el-table-column>
          </template>
          <el-table-column
            v-if="addRow"
            prop="detele"
            label="删除"
            :width="60"
            align="center"
          >
            <template slot-scope="scope">
              <i class="el-icon-delete" :class="{'is-disabled': disabled}" @click="remove(scope)"></i>
            </template>
          </el-table-column>

        </el-table>
      </div>
    </template>
  </list-layout>

</template>
<script>
  import { Button, Table, TableColumn } from 'element-ui'
  import ListLayout from 'packages/listLayout/src'
  export default {
    name: 'P8EditTable',
    componentName: 'P8EditTable',
    components: {
      'el-button': Button,
      'el-table': Table,
      'el-table-column': TableColumn,
      ListLayout
    },
    props: {
      columns: {
        type: Array,
        default: () => []
      },
      addRow: {
        type: Boolean,
        default: false
      },
      /**
       * disabled: 禁用: 传参为true: 新建按钮和行删除按钮禁用, 剩余编辑的单元格在当前页面做禁用处理
       */
      disabled: {
        type: Boolean,
        default: false
      },
      api: {
        type: String,
        default: ''
      },
      params: {
        type: Object,
        default: () => {
          return {}
        }
      },
      renderHeight: {
        type: String,
        default: '100%'
      },
      data: {
        type: Array,
        default: () => []
      },
      needParams: {
        type: Boolean,
        default: false
      },
      deleteCheck: {
        type: Function,
        default: function (row) { return true }
      },
      deleteErrorInfo: {
        type: String,
        default: 'error'
      }
    },
    data () {
      return {
        flexHeight: this.renderHeight,
        tableData: []
      }
    },
    computed: {
      columnDataIndex () {
        let columnsObj = {}
        this.columns.map(item => {
          columnsObj[item.dataIndex] = item.default
        })
        return columnsObj
      },
      changeParams () {
        return this.params
      }
    },
    watch: {
      changeParams (val, oldVal) {
        let _this = this
        this.$api[this.api](val).then(res => {
          _this.tableData = res
          _this.$emit('save-param-data', _this.tableData)
        })
      },
      data: {
        handler (val, oldVal) {
          this.tableData = val.map((item, index) => {
            return { ...this.tableData[index], ...item }
          })
          this.$emit('save-param-data', this.tableData)
        },
        deep: true
      }
    },
    mounted () {
      window.addEventListener('resize', this._initTableSize)
      let _this = this
      if (this.api) {
        if (this.needParams) {
          if (Object.keys(this.params).length) {
            this.$api[this.api](this.params).then(res => {
              _this.tableData = res
            })
          }
        } else {
          this.$api[this.api](this.params).then(res => {
            _this.tableData = res
          })
        }
      }
    },
    methods: {
      _initTableSize () {
        const vm = this
        let timer = null
        // 这里增加一个延迟保证不会触发频次不会太高,减少开销
        if (timer) return
        timer = setTimeout(() => {
          vm.flexHeight = '100%'
          timer = null
        }, 300)
      },
      add () {
        this.tableData.push({ ...this.columnDataIndex })
        this.$emit('save-param-data', this.tableData)
      },
      remove (scope) {
        if (this.disabled) {
          return
        }
        if (!this.deleteCheck(scope)) {
          this.$message(this.deleteErrorInfo)
          return
        }
        let index = this.tableData.indexOf(scope.row)
        this.tableData.splice(index, 1)
        this.$emit('save-param-data', this.tableData)
      }
    }
  }
</script>
