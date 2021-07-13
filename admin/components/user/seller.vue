<template>
    <div>
        <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片 -->
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
        <el-table :data="sellerList" border stripe>
            <el-table-column type="index" label="#"></el-table-column>
            <el-table-column  label="商家姓名" prop="sellerName"></el-table-column>
            <el-table-column  label="商家电话" prop="phoneNumber"></el-table-column>
            <el-table-column  label="商家id" prop="id"></el-table-column>
            <el-table-column  label="注册时间" prop="regDate">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                    type="danger"
                    icon="el-icon-delete"
                    size="mini"
                    circle
                    @click="setDisableSellerAccount(scope.row.id)"

                    ></el-button>
                    <!--  @click="removeUserById(scope.row.id)" -->
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

    </div>
</template>
<script>
import axios from 'axios'
export default {

  data () {
    return {
      sellerList: []
    }
  },
  methods: {
    async getSellerlist () {
      const url = '/DisableSellerAccount'
      await axios.get(url)
        .then((res) => {
          this.sellerList = res.data.value
          console.log(res)
          console.log(this.userlist)
        })
        .catch((err) => {
          console.error(err)
        })
    },
    async setDisableSellerAccount (id) {
      const url = '/DisableSellerAccount/' + id
      await axios.put(url)
        .then(res => {
          console.log(res)
          console.log(id)
          this.$message.success('封禁商家账号成功！')
          window.location.reload()
        })
        .catch(err => {
          console.error(err)
          this.$message.success('封禁商家账号失败！')
        })
    }
  },

  created: function () {
    this.getSellerlist()
  }
}
</script>
<style lang="less" scoped>

</style>
