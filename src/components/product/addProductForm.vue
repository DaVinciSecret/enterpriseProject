<template>
	<el-dialog
	  title="提示"
	  :visible.sync="dialogVisible"
	  width="30%"
	  :before-close="handleClose">
	  <span>这是一段信息</span>
	  <el-form :model="form">
	    <el-form-item label="商品名称" :label-width="formLabelWidth">
	      <el-input v-model="form.name" autocomplete="off" size="medium" style="width:250px;"></el-input>
	    </el-form-item>
	    <el-form-item label="商品类型" :label-width="formLabelWidth">
	      <el-select v-model="form.region" placeholder="请选择活动区域" style="width:250px;">
	        <el-option label="类型一" value="shanghai"></el-option>
	        <el-option label="类型二" value="beijing"></el-option>
	      </el-select>
	    </el-form-item>
	  </el-form>
	  <span slot="footer" class="dialog-footer">
	    <el-button @click="handleClose">取 消</el-button>
	    <el-button type="primary" @click="handleClose">确 定</el-button>
	  </span>
	</el-dialog>
</template>

<script>
	export default {
		name:'addProductForm',
		data() {
	      return {
	        form: {
	          name: '',
	          region: '',
	          date1: '',
	          date2: '',
	          delivery: false,
	          type: [],
	          resource: '',
	          desc: ''
	        },
	        formLabelWidth: '100px'
	      };
	    },
	    methods: {
	      handleClose(done) {
	        this.$confirm('确认关闭？')
	          .then(_ => {
	          	this.$emit('flagChange',false);
	            //done();
	          })
	          .catch(_ => {});
	      }
	    },
	    props:['dialogVisible']
	};
</script>

<style>

</style>