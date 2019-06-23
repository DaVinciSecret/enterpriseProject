<template>
<div>
<el-row>
	  <el-col :span="12" align="left" style="margin-bottom:20px;">
	  	<label style="font-size:18px;font-weight:bold;">编辑商品</label>
	  	<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
	  	  <i class="el-icon-warning-outline" style="font-size:18px;margin-left:5px;font-weight:bold;"></i>
	  	</el-tooltip>
	  </el-col>
	</el-row>

	<el-row style="border-top:2px solid #e1e1e1;padding-top:20px;">
	<el-col :span="16" align="left">
		<el-form ref="form" :model="form" label-width="120px">
		  <el-form-item label="商品图片">
		    <el-col :span="8">
		    	<el-upload
				  action="https://jsonplaceholder.typicode.com/posts/"
				  list-type="picture-card"
				  :on-preview="handlePictureCardPreview"
				  :on-remove="handleRemove">
				  <i class="el-icon-plus"></i>
				</el-upload>
				<el-dialog :visible.sync="dialogVisible">
				  <img width="100%" :src="dialogImageUrl" alt="">
				</el-dialog>
		    </el-col>
		    <el-col :span="16">
		    	<el-form-item label="商品名称" style="margin-bottom:30px;">
				  <el-input v-model="form.name" size="medium" style="width:300px;"></el-input>
				</el-form-item>
				<el-form-item label="商品类型">
				  <el-select v-model="form.region" placeholder="请选择活动区域" size="medium" style="width:300px;">
				  <el-option label="类型一" value="shanghai"></el-option>
				  <el-option label="类型二" value="beijing"></el-option>
				  </el-select>
				</el-form-item>
		    </el-col>
		  </el-form-item>
		  <el-form-item label="到期时间">
		    <el-col :span="9">
		      <el-date-picker style="width:260px;" type="date" placeholder="选择日期" v-model="form.date1" size="medium"></el-date-picker>
		    </el-col>
		    <el-col :span="4" align="center"><span>--</span></el-col>
		    <el-col :span="9">
		      <el-time-picker style="width:260px;" placeholder="选择时间" v-model="form.date2"  size="medium"></el-time-picker>
		    </el-col>
		  </el-form-item>
		  <el-form-item label="即时配送">
		    <el-switch v-model="form.delivery"></el-switch>
		  </el-form-item>
		  <el-form-item label="商品性质">
		    <el-checkbox-group v-model="form.type">
		      <el-checkbox label="属性加成" name="type"></el-checkbox>
		      <el-checkbox label="等级加成" name="type"></el-checkbox>
		      <el-checkbox label="装备强化" name="type"></el-checkbox>
		      <el-checkbox label="神器" name="type"></el-checkbox>
		    </el-checkbox-group>
		  </el-form-item>
		  <el-form-item label="特殊资源">
		    <el-radio-group v-model="form.resource">
		      <el-radio label="活动获取"></el-radio>
		      <el-radio label="充值获取"></el-radio>
		    </el-radio-group>
		  </el-form-item>
		  <el-form-item label="商品描述">
		    <el-input type="textarea" v-model="form.desc"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="onSubmit">立即创建</el-button>
		    <el-button>取消</el-button>
		  </el-form-item>
		</el-form>
	</el-col>
	</el-row>
	</div>
</template>

<script>
export default{
	name:"productEdit",
	data:function(){
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
	        dialogImageUrl: '',
        	dialogVisible: false
		}
	},
	methods:{
	  onSubmit() {
        console.log('submit!');
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
	}
}
</script>

<style>

</style>