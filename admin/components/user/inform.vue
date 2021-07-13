<template>
    <div>
        <!-- 面包屑导航区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>发布通知</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 主体内容 -->
    <el-card>
        <el-row :gutter="20">
            <el-col :span="6">
                <el-input placeholder="查询内容">
                     <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </el-col>
            <el-col :span="4">
          <el-button type="primary" @click="sendDialogVisible = true" >发布通知</el-button>
          <!-- @click="addDialogVisible = true" -->
        </el-col>
        </el-row>
        <el-table :data="noticelist" border stripe>
            <el-table-column type="index" label="#"></el-table-column>
            <el-table-column  label="编号"></el-table-column>
            <el-table-column  label="内容"></el-table-column>
            <el-table-column  label="对象">
                <el-tag type="danger" size="mini">商家</el-tag>
              <el-tag type="success" size="mini">用户</el-tag>
            </el-table-column>
            <el-table-column  label="操作"></el-table-column>
        </el-table>
         <el-pagination
         background
         layout="total, sizes, prev, pager, next, jumper"
         :page-sizes="[2, 5, 10, 15]"
         :total="1000">
      </el-pagination>
    </el-card>
    <el-dialog title="发布通知" width="70%" :visible.sync="sendDialogVisible"
    >
    <el-form
    label-width="125px"
    >
       <el-form-item label="通知内容" >
          <el-input ></el-input>
        </el-form-item>
        <el-form-item label="发布对象">
            <el-cascader
            :options="userstatus"
            ></el-cascader>
        </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="sendDialogVisible = false">取 消</el-button>
            <el-button type="primary" >确 定</el-button>
            <!-- @click="addUser" -->
        </span>

    </el-dialog>

    </div>
</template>
<script>
export default {
  data () {
    return {
      noticelist: [],
      sendDialogVisible: false,
      userstatus: [
        // eslint-disable-next-line no-undef

        {
          value: '商家',
          label: '商家'
        },
        {
          value: '用户',
          label: '用户'
        }

      ],
      queryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 10
      }
    }
  }

}
</script>
 <style lang="less" scoped>

 </style>
