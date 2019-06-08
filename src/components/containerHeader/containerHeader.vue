<template>
    <div style="color:#fff;">
      <el-button @click="turnCheck" style="font-size:1em;float:left;margin-top:12px;font-weight:bold;background:transparent;border-color:#fff;color:#fff;" size="small" :class="checkicon" plain></el-button>
      <el-dropdown  @command="userLogin">
        <i class="el-icon-setting" style="margin-right: 15px;color:#fff;font-size:1em;"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>消息中心</el-dropdown-item>
          <el-dropdown-item>权限管理</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span v-text="item.name"></span>
    </div>
</template>

<script>
  export default {
    name:'containerHeader',
    data() {
      const item = {
        date: '2016-05-02',
        name: '川枫·流',
        address: '长安胡同里'
      };
      return {
        item,
        isCollapse:true,
        checkicon:"el-icon-d-arrow-right"
      }
    },
    methods:{
      turnCheck:function(){
        this.isCollapse = !this.isCollapse;
        this.checkicon = this.isCollapse ? "el-icon-d-arrow-right":"el-icon-d-arrow-left";
        this.$emit("slideChange",this.isCollapse);
        console.log(this.isCollapse);
      },
      userLogin:function() {
        const h = this.$createElement;
        this.$msgbox({
          title: '用户登录',
          message: h('div', null, [
            h('p', null, [h('span', null, '账户：'),h('input', null,)]),
            h('p', null, [h('span', null, '密码：'),h('input', null,)]),
          ]),
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 3000);
            } else {
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message: 'action: ' + action
          });
        });
      }
    },
    components:{
    }
  };
</script>

<style scope>
 .el-header {
    color: #333;
    line-height: 60px;
  }
</style>
