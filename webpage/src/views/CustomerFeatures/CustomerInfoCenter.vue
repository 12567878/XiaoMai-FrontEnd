<template>
  <div id = "info">
    <h3 id="title">信息管理</h3>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data()
  {
    return{
      id:sessionStorage.getItem('cusId'),
      userName:'',
      address:'',
      regDate:'',
      phoneNumber:'',
      image:'',
      newAddress:'',
      newPhone:'',
      newImage:''
    }
  },
  created: function()
  {
    this.getInfo()
  },
  methods:
  {
    async getInfo()
    {
      const url = '/PersonalCenter'
      await axios.post(url,{id:this.id.toString(),userType:'CUSTOMER'}).then(
        (response) =>
        {
          this.userName = response.data.UserName
          this.address = response.data.Address
          this.regDate = response.data.RegDate
          this.phoneNumber = response.data.phoneNumber
          this.image = response.data.image
        }
      ).catch(
        (err) =>
        {
          this.$message.error("未知错误！")
          console.log(err)
        }
      )
    },
    async updateInfo()
    {
      const url = '/UserManage/UpdatePersonalInfo?tokenValue='
      +sessionStorage.getItem(this.id.toString())+
      '&address='+this.newAddress+'&phone_number='+this.newPhone+'&photo='+this.newImage
      await axios.put()
    }
  }

}
</script>

<style>
#title{
  color:
}
</style>