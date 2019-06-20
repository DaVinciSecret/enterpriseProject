<template>
	<div>
	<el-row>
	  <el-col :span="12" align="left">
	  	<label style="font-size:18px;font-weight:bold;">成员列表</label>
	  	<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
	  	  <i class="el-icon-warning-outline" style="font-size:18px;margin-left:5px;font-weight:bold;"></i>
	  	</el-tooltip>
	  </el-col>
	  <el-col :span="12" align="right">
	  	<el-button size="large" type="danger">导出成员</el-button>
	  </el-col>
	</el-row>
	<el-row :gutter="10" style="margin-top:30px;">
	 <el-col :span="10" align="right">
	 	<el-select v-model="typeValue" placeholder="请选择类型" size="medium">
	      <el-option
	        v-for="item in typeArr"
	        :key="item.value"
	        :label="item.label"
	        :value="item.value">
	      </el-option>
	    </el-select>
	 </el-col>
	 <el-col :span="4" align="right">
	 	<el-select v-model="partmentValue" placeholder="请选择部门" size="medium">
	      <el-option
	        v-for="item in partmentArr"
	        :key="item.value"
	        :label="item.label"
	        :value="item.value">
	      </el-option>
	    </el-select>
	 </el-col>
	 <el-col :span="4" align="right">
	 	<el-select v-model="addressValue" placeholder="请选择地址" size="medium">
	      <el-option
	        v-for="item in addressArr"
	        :key="item.value"
	        :label="item.label"
	        :value="item.value">
	      </el-option>
	    </el-select>
	 </el-col>
	  <el-col :span="6" align="right">
	  	<el-input placeholder="请输入成员名称" v-model="seachContent" class="input-with-select" size="medium" style="width:240px;">
	    <el-button slot="append" icon="el-icon-search" size="medium"></el-button>
	    </el-input>
	  </el-col>
	</el-row>

	<el-row style="margin-top:10px;">
	<el-table
	border
    :data="tableData"
    style="width: 100%"
	@selection-change="handleSelectionChange"
    >
     <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="日期"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
     <el-table-column
      label="类型"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-user"></i>
        <span style="margin-left: 10px">{{ scope.row.type }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="姓名"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column
      label="电话"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-user"></i>
        <span style="margin-left: 10px">{{ scope.row.phone }}</span>
      </template>
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
  </el-row>
  <el-row>
  	<el-col :span="8" align="left">
  	  <el-button type="danger" size="small">批量删除</el-button>
  	</el-col>
  </el-row>
  <el-row>
  <el-col :span="24">
  	<el-pagination
  	 	:page-size="4"
		:pager-count="11"
    	layout="prev, pager, next"
    	:total="10">
  	</el-pagination>
  	</el-col>
  </el-row>
  </div>
</template>

<script>
export default{
	name:'personType',
	data:function(){
		return {
		    tableData: [{
	          date: '2016-05-02',
	          type: 'type1',
	          name: '王小虎',
	          phone: '18649389291',
	          address: '上海市普陀区金沙江路 1518 弄'
	        }, {
	          date: '2016-05-04',
	          type: 'type1',
	          name: '王小马',
	          phone: '18649389291',
	          address: '上海市普陀区金沙江路 1517 弄'
	        }, {
	          date: '2016-05-01',
	          type: 'type2',
	          name: '王小侠',
	          phone: '18649389291',
	          address: '上海市普陀区金沙江路 1519 弄'
	        }, {
	          date: '2016-05-03',
	          type: 'type3',
	          name: '王小二',
	          phone: '18649389291',
	          address: '上海市普陀区金沙江路 1516 弄'
	        }],
	        seachContent:"",
	        typeArr:[],
	        addressArr:[],
	        partmentArr:[],
	        typeValue:"",
	        partmentValue:"",
	        addressValue:""
		}
	},
	methods:{
	  handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
	}

}
</script>

<style>

<style>