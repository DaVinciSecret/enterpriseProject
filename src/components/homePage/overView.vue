<template>
	<el-container>
	  <div class="demo-input-size" style="text-align:left;border-bottom:1px solid #E4E7ED">
	    <el-row>
		  <el-col :span="4">
		    <el-input size="medium" v-model="input" placeholder="请输入内容"></el-input>
		  </el-col>
		  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
		  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
		  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
		  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
		  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
		</el-row>
		<el-row>
		  <el-col :span="24">
		  	<el-checkbox-group v-model="checkList">
		      <el-checkbox size="small" label="复选框 A"></el-checkbox>
		      <el-checkbox size="small" label="复选框 B"></el-checkbox>
		      <el-checkbox size="small" label="复选框 C"></el-checkbox>
		      <el-checkbox size="small" label="禁用" disabled></el-checkbox>
		      <el-checkbox size="small" label="选中且禁用" disabled></el-checkbox>
		    </el-checkbox-group>
		  </el-col>
		</el-row>
		<el-row>
		  <el-col :span="24">
		     <el-checkbox size="small" v-model="checked3" label="备选项1" border></el-checkbox>
		     <el-checkbox size="small" v-model="checked3" label="备选项1" border></el-checkbox>
		     <el-checkbox size="small" v-model="checked3" label="备选项1" border></el-checkbox>
		     <el-checkbox size="small" v-model="checked3" label="备选项1" border></el-checkbox>
		  </el-col>
		</el-row>  
	  </div>
	  <el-row style="border-bottom:1px solid #E4E7ED">
	  	<div id="myChart" :style="{width: '1200px', height: '300px'}"></div>
	  </el-row>
	  <el-footer style="height:auto;">
	  	<el-row :gutter="20">
		  <el-col :span="8" style="height:150px;line-height:150px;font-size:20px;">
		    <div class="grid-content bg-purple">
		    	<span>onLine:</span><span>124314</span>
		    </div>
		  </el-col>
		  <el-col :span="8" style="height:150px;line-height:150px;font-size:20px;border-left:1px solid #E4E7ED">
		    <div class="grid-content bg-purple">
		    	<span>兑换量:</span><span>526</span>
		    </div>
		  </el-col>
		  <el-col :span="8" style="height:150px;line-height:150px;font-size:20px;border-left:1px solid #E4E7ED">
		    <div class="grid-content bg-purple">
		    	<span>提现量:</span><span>128</span>
		    </div>
		  </el-col>
		</el-row>
	  </el-footer>
	</el-container>
</template>

<script>
	export default {
	  name: 'overView',
	  data:function(){
	  	return {
          checkList: ['选中且禁用','复选框 A'],
          checked3:[],
          input:'',
          data:[],
		  now : +new Date(1997, 9, 3),
		  oneDay : 24 * 3600 * 1000,
		  value: Math.random() * 1000
	  	}
	  },
	  mounted:function(){
	  	//生成随机数据
  		for (var i = 0; i < 1000; i++) {
		    this.data.push(this.randomData());
		}
	  	this.drawLine();
	  },
	  methods:{
	  	    //随机数据
	        randomData(){
			    this.now = new Date(+this.now + this.oneDay);
			    this.value = this.value + Math.random() * 21 - 10;
			    return {
			        name: this.now.toString(),
			        value: [
			            [this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'),
			            Math.round(this.value)
			        ]
			    }
			},
			//绘制图表
		   drawLine(){
	        // 基于准备好的dom，初始化echarts实例
	        var myChart = this.$echarts.init(document.getElementById('myChart'))
	        // 配置数据
			var option = {
				backgroundColor: '#2c343c',
				
			    title: {
			        text: '动态兑换趋势·模拟数据',
			        textStyle: {
						fontFamily: 'Arial, Verdana, sans...',
						fontSize: 20,
						fontStyle: 'normal',
						fontWeight: 'normal',
						color:'#fff'
					},
			    },
			     grid: {
					zlevel: 0,
					z: 0,
					x: 60,
					y: 40,
					x2: 60,
					y2: 40,
					backgroundColor: 'rgba(0,0,0,0)',
					borderWidth: 1,
					borderColor: '#ccc',
				},
			    tooltip: {
			        trigger: 'axis',
			        formatter: function (params) {
			            params = params[0];
			            var date = new Date(params.name);
			            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
			        },
			        axisPointer: {
			            animation: false
			        }
			    },
			    xAxis: {
			        type: 'time',
			        splitLine: {
			            show: false
			        },
			        axisLine: {
	                    lineStyle: {
	                        type: 'solid',
	                        color: '#fff',//左边线的颜色
	                        width:'1'//坐标线的宽度
	                    }
	                },
	                axisLabel: {
	                    textStyle: {
	                        color: '#fff',//坐标值得具体的颜色
	 
	                    }
	                }
			    },
			    yAxis: {
			        type: 'value',
			        boundaryGap: [0, '100%'],
			        splitLine: {
			            show: false
			        },
		            axisLine: {
	                    lineStyle: {
	                       type: 'solid',
	                       color:'#aaa',
	                       width:'1'
	                    }
	                },
	                axisLabel: {
	                    textStyle: {
	                       color: '#aaa'
	                    }
	                }
			    },
			    series: [{
			        name: '模拟数据',
			        type: 'line',
			        showSymbol: false,
			        hoverAnimation: false,
			        itemStyle : {  
                        normal : {  
                            lineStyle:{  
                                color:'#0fa'  
                            }  
                        }  
                    },  
			        data: this.data
			    }]
			};
			setInterval(()=>{
			    for (var i = 0; i < 5; i++) {
			        this.data.shift();
			        this.data.push(this.randomData());
			    }

			    myChart.setOption({
			        series: [{
			            data: this.data
			        }]
			    });
			}, 1000);
			myChart.setOption(option);
	    }
	  }

	}
</script>

<style>
.el-row {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
   .grid-content {
    border-radius: 4px;
    min-height: 32px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
