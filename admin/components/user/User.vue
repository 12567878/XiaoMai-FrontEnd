<template>
<div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
        <el-row :gutter="20">
            <el-col :span="6">
        <el-input placeholder="请输入内容" >
            <el-button slot="append" icon="el-icon-search" ></el-button>
            <!-- @click="getUserList" -->

        </el-input>
            </el-col>
         <el-col :span="4">
          <el-button type="primary" @click="addDialogVisible = true" >添加用户</el-button>
          <!-- @click="addDialogVisible = true" -->
        </el-col>
        </el-row>
        <!-- 用户列表 -->
        <el-table :data="userlist" border stripe>
            <el-table-column type="index" label="#"></el-table-column>
            <el-table-column  label="姓名"></el-table-column>
            <el-table-column  label="电话"></el-table-column>
            <el-table-column  label="id"></el-table-column>
            <el-table-column  label="状态">
              <el-tag type="danger" size="mini">不合法</el-tag>
              <el-tag type="success" size="mini">合法</el-tag>
            </el-table-column>
            <el-table-column  label="身份">
              <el-tag type="danger" size="mini">商家</el-tag>
              <el-tag type="success" size="mini">用户</el-tag>

            </el-table-column>
            <el-table-column label="操作">
                <template>
                    <el-button
                    type="primary"
                    icon="el-icon-edit"
                    size="mini"
                    circle
                    ></el-button>
                    <el-button
                    type="danger"
                    icon="el-icon-delete"
                    size="mini"
                    circle
                    ></el-button>
                    <!--  @click="removeUserById(scope.row.id)" -->
                    <el-button
                    type="warning"
                    icon="el-icon-setting"
                    size="mini"
                    circle
                    ></el-button>
                    <!--  @click="showSetRole(scope.row)" -->
                </template>

            </el-table-column>

        </el-table>
        <!-- 分页 -->
        <el-pagination
         background
         layout="total, sizes, prev, pager, next, jumper"
         :page-sizes="[2, 5, 10, 15]"
         :total="1000">
      </el-pagination>

    </el-card>
    <el-dialog title="添加用户" width="50%" @close="addDialogClosed" :visible.sync="addDialogVisible">
        <el-form
           label-width="100px"
        >
        <el-form-item label="用户名" >
          <el-input ></el-input>
        </el-form-item>
        <el-form-item label="密码" >
          <el-input ></el-input>
        </el-form-item>
        <el-form-item label="邮箱" >
          <el-input ></el-input>
        </el-form-item>
        <el-form-item label="电话号" >
          <el-input ></el-input>
        </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="addDialogVisible = false">取 消</el-button>
            <el-button type="primary" >确 定</el-button>
            <!-- @click="addUser" -->
        </span>

    </el-dialog>
    <!-- 修改用户的对话框 -->
    <el-dialog
      title="修改用户信息"
      :visible.sync="editDialogVisible"
      width="50%"

    >
    <!-- @close="editDialogClosed" -->
    <el-form
           label-width="100px"
        >
        <el-form-item label="用户名" >
          <el-input disabled></el-input>
        </el-form-item>
        <el-form-item label="密码" >
          <el-input ></el-input>
        </el-form-item>
        <el-form-item label="邮箱" >
          <el-input ></el-input>
        </el-form-item>
        <el-form-item label="电话号" >
          <el-input ></el-input>
        </el-form-item>
        </el-form>

    </el-dialog>

</div>

</template>
<script>
export default {
  data () {
    return {
      // 用户列表
      queryInfo: {
        query: '',
        // 当前页数
        pagenum: 1,
        // 每页显示多少数据
        pagesize: 5
      },
      addDialogVisible: false,
      // 修改用户
      editDialogVisible: false,
      userlist: []

    }
  },
  method:
  {
    handleSizeChange (newsize) {
      this.queryInfo.pagesize = newsize
    },
    // 获取用户列表
    async getUserlist () {
      /* const { data: res } = await this.$http.get('users', {
        params: this.queryInfo
      }) */

    }

    /* async deleteUser (id) {
      const confirmResult = await this.$confirm(
        '此操作将永久删除该用户, 是否继续?',
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }
      ).catch(err => err)
      if (confirmResult !== 'confirm') {
        return this.$message.info('取消删除')// 取消删除用户操作
      }
      const { data: res } = await this.$http.delete('users/' + id)
      if (res.meta.status !== 200) return this.$message.error('删除用户失败！')
      this.$message.success('删除用户成功！')// 完成删除用户操作
    } */

  }

}
</script>
<style lang="less" scoped>

</style>
