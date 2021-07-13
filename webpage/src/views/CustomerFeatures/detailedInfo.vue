<template>
<div style="margin-left: 80px;margin-right: 80px">
  <el-container>

    <el-main id="main">
      <!--'data:image/png;base64,'+showInfos.image-->
      <span>
        <el-image style="height: 400px;width: 300px;display: inline;float: left;margin-right: 30px"
            src="https://img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i1/2251059038/O1CN01xa1cRk2GdSKY5JaLC_!!2251059038.png_q60.jpg"
            >
        <div slot="placeholder" class="image-slot">
          加载中<span class="dot">...</span>
        </div>
        <div slot="error" class="image-slot">
          <i class="el-icon-picture-outline"></i>
        </div>
      </el-image>
      </span>
      <span id="description" style="display: inline;">
        <div id="title">{{name}}</div>
        <div>
          <i class="el-icon-star-off icon"></i>平均评分:{{avgRate}}
        </div>
        <div style="margin-bottom: 20px">
          <i class="el-icon-collection-tag icon"></i>标签:
          <span v-for="label in labels" :key="label">{{' '+label+' '}}</span>
        </div>
        <div>
          {{'介绍: '+introduction}}
        </div>
      </span>
    </el-main>

      <el-aside id="aside"><!--推荐卡片-->
        <recommend-item v-for="iteminfo in recommends" :key="iteminfo.id" v-bind="iteminfo"> </recommend-item>
        <recommend-item v-for="good in goods" :key="good.name" v-bind="good"></recommend-item>
      </el-aside>
  </el-container>
  <el-divider></el-divider>

      <el-collapse accordion style="margin: 15px 0 15px 0"><!--此处需要更改成对seller和slot进行一定运算-->
        <el-collapse-item v-for="seller in sellers" :key="seller">
          <div slot="title" style="margin-left: 10px;font-size: 20px;font-weight: bold">{{seller}}</div>
          <div v-for="slot in slots" :key="slot.timeStart" style="text-align: left;font-size: 20px;margin-left: 10px">
            {{slot.timeStart+'--'+slot.timeEnd}}<el-button type="primary" plain style="float: right">购买</el-button>
          </div>
        </el-collapse-item>
      </el-collapse>
    <el-divider></el-divider>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" style="display: block" @select="handleSelect">
      <el-menu-item index="2" >注意事项</el-menu-item>
      <el-menu-item index="3">评价</el-menu-item>
    </el-menu>
      <div v-if="activeIndex==='2'" class="text">
        <div>请勿吸烟</div>
        <div>请勿携带非本影院出售的食品饮料入场。</div>
        <div>观看影片时，请关掉手机。</div>
        <div>观众凭票进场，并请遵守《观众须知》观赏节目</div>
        <div>保持票面清洁，勿折叠，勿刻划，勿暴晒或接近高温物体</div>
      </div>
      <div v-if="activeIndex==='3'" style="text-align: left">
        <el-card v-for="comment in comments" :key="comment.commentId" shadow="hover">
          <div slot="header" class="clearfix">
            <span style="margin-right: 15px">{{'用户: '+comment.customerName+" "}}</span>
            <span>{{'发布时间: '+comment.time}}</span>
          </div>
          <el-rate
              v-model="comment.rate"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}">
          </el-rate>
          <div style="margin: 10px 0 10px 0">{{comment.content}}</div>
        </el-card>
      </div>

</div>
</template>

<script>
import RecommendItem from "@/components/recommendItem";
export default {
  name: "detailedInfo",
  components: {RecommendItem},
  data() {
    return{
      activeIndex:"2",
      showInfos:[{//改成获取所有信息
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
        }],

      name:'觉醒年代',
      introduction: "",
      slots: [
        {
          "id": 1,
          "sellerId": 1,
          "place": "test",
          "day": "2021/7/7",
          "timeStart": "9:00",
          "timeEnd": "12:00"
        }
      ],
      goods: [{
        name:'兔子',
        image: null,
        avgRate: 6,
        labels: [
        "主旋律",
        "献礼"
        ]
      }],
      comments: [
        {
          "commentId": 2,
          "customerName": "test",
          "customerId": 1,
          "rate": 0,
          "content": "string",
          "time": "2021/6/11 14:34:47"
        },
        {
          "commentId": 1,
          "customerName": "test",
          "customerId": 1,
          "rate": 0,
          "content": "string",
          "time": "2021/6/11 10:10:24"
        }
      ],
      labels: [
        "主旋律",
        "献礼"
      ]
    }
  },
  computed:{
    recommends:function () {
      return this.showInfos//改为获取其中随机几项
    },
    sellers:function () {
      return ['四平电影院']
    }
  },
  methods:{
    handleSelect(key) {
      this.activeIndex=key;
      console.log(this.activeIndex)
      console.log(this.activeIndex===2)
      console.log(key);
    }
  }

}
</script>

<style scoped>

.text{
  font-size: 15px;
  line-height: 1.9;
  text-align: left;
  color: #606266;
  margin: 20px;
}

#photo{
  height: 400px;
  width: 300px;
  display: inline;
  float: left
}

#description{
  line-height: 1.9;
  text-align: left;
  font-size: 20px;
  display: inline;
}

#title{
  display: block;
  font-weight: bold;
  font-size: 25px;
  text-decoration: none;
  color: black;
  margin-bottom: 12px;
  text-align: left;
}

#main{
  text-align: left;
}

.slots{
  text-align: left;
}
</style>