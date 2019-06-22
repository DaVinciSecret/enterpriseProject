<template>
<div>
  <el-row>
    <el-col :span="12" align="left">
      <label style="font-size:18px;font-weight:bold;">账户信息</label>
      <el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
        <i class="el-icon-warning-outline" style="font-size:18px;margin-left:5px;font-weight:bold;"></i>
      </el-tooltip>
    </el-col>
    <el-col :span="12" align="right">
      <el-button size="large" type="danger">导出</el-button>
      <el-button size="large" type="primary">新增账户</el-button>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <el-table
      :data="tableData"
      style="width:100%;">
      <el-table-column
        prop="date"
        label="日期"
        width="150">
      </el-table-column>
      <el-table-column label="账户信息">
        <el-table-column
          prop="name"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column label="地址">
          <el-table-column
            prop="zip"
            label="余额"
            width="120">
          </el-table-column>
          <el-table-column
            prop="level"
            label="级别"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            width="300">
          </el-table-column>
          <el-table-column
            prop="zip"
            label="邮编"
            width="120">
          </el-table-column>
        </el-table-column>
      </el-table-column>
      <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
    </el-col>
  </el-row>
  <el-row>
    <el-pagination
    background
    layout="prev, pager, next"
    :total="1000"
    @current-change= "handleChange"
    @prev-click="handlePrev"
    @next-click="hanleNext"
    >
    </el-pagination>
  </el-row>
</div>
</template>

<script>
  export default {
    name:"accountList",
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          level:3
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          level:2
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          level:'vip'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          level:2
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          level:5
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          level:5
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          level:1
        }]
      }
    },
    methods:{
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      //当前页码
      handleChange:function(val){
        console.log("点击当前"+val)
      },
      //上一页
      handlePrev:function(val){
        console.log("点击上一页"+val)
      },
      hanleNext:function(val){
        console.log("点击下一页"+val)
      },
    }
  }
</script>