<template>
  <div id="show">
    <el-container>

      <el-main id="main">
        <div id="chooser"><!--选择器-->

          <div style="margin-top: 20px;margin-bottom: 20px">
            <span class="h">分类:</span>

              <el-checkbox style="margin-right: 20px" :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
            <el-checkbox-group v-model="types" style="display: inline;">
              <el-checkbox @change="handleCheckedLabelChange" v-for="type in all_label" :key="type" :label="type"></el-checkbox>
            </el-checkbox-group>
          </div>
        </div>

        <div ><!--搜索结果展示-->
          <search-item v-for="showInfo in showInfopage" :key="showInfo.id" v-bind="showInfo"></search-item>
          <el-pagination
              style="margin-top: 25px"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage1"
              page-size="25"
              layout="total, prev, pager, next"
              :total="showInfos.length">
          </el-pagination>
        </div>
      </el-main><!--搜索内容-->

      <el-aside id="aside">
        <recommend-item v-for="iteminfo in recommends" :key="iteminfo.id" v-bind="iteminfo"> </recommend-item>
      </el-aside><!--推荐卡片-->
    </el-container>

  </div>
</template>

<script>
import SearchItem from "../../components/searchItem";
import RecommendItem from "../../components/recommendItem";
export default
{
  name:"Search",
  components: {RecommendItem, SearchItem},
  data()
  {
    return{
      checkAll: true,
      isIndeterminate: false,
      showInfos:[],
      city:'全国',
      search_type:'演出',
      currentPage1:1,
      timing:'全部',
      types:[]
    }
  },
  created:function()
  {
    this.Search()
    this.types=this.all_label
  },
  beforeRouteUpdate(to, from, next) {
    console.info("==当前路由id==" + this.$route.params.id);
    if (this.$route.params.id) {
      console.info("加载页面数据");
    }
    next();
},
  computed:{
    showInfopage:function () {
      let shows=this.showInfos.filter(show=>{
        return !show.labels.every(label=>{
          return this.types.indexOf(label)===-1
        })
      })

      return shows.slice((this.currentPage1-1)*25,Math.min(this.currentPage1*25-1,this.showInfos.length))
    },
    all_label:function () {//有问题,
      let labels=[]
      for (let index = 0; index < this.showInfos.length; index++) {
        labels.push(this.showInfos[index].labels)
      }
      labels=labels.reduce((a,b)=>[...a,...b])
      let label_set=new Set(labels)
      return Array.from(label_set)
    },
    recommends:function () {
      return this.showInfos
    }
  },
  methods:
  {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleCheckAllChange(val) {
      this.types = val ? this.all_label : [];
      this.isIndeterminate = false;
    },
    handleCheckedLabelChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.all_label.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.all_label.length;
    },
    async Search()
    {
      //const url = '/Search/'+this.$route.params.id
      this.showInfos=[{
        "showId": 1,
        "name": "觉醒年代",
        "image": null,
        "avgRate": 6,
        "labels": [
          "主旋律",
          "献礼"
        ]
      },
        {
          "showId": 2,
          "name": "Fast&Furious",
          "image": null,
          "avgRate": 8,
          "labels": [
            "主旋律",
            "献礼"
          ]
        }]
      /**await axios.get(url).then(
        (response) =>
        {

          if(response.status === 200)//原来是两个等于号，我给改了..
          {
            this.showInfos = response.data.value.shows
            this.goodsInfo = response.data.value.goods
            console.log(response.data.value)
            console.log(this.showInfo[0].avgRate)
          }
          else if(response.status === 404)
          {
            console.log("无匹配结果")
          }
        }
      )
      .catch(
        (err)=>
        {
          console.log(err)
        }
      )**/
    }
  }
}

</script>

<style>
#chooser{
  border: 1px solid #EBEEF5;
  margin-bottom: 20px;
  text-align: left;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 18px;
}

#main{
  padding-left: 100px;
}

.h{
margin-right: 10px;
}

#aside{
  border: 1px #DCDFE6;
  display: inline;
  margin-top: 20px;
}
</style>