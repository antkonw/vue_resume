<template>
  <div class="demo-grid">
    <mu-row gutter>
      <mu-col width="100" tablet="30" desktop="25" class="resume-left">
          <!-- 头像 -->
          <header-img></header-img>
          <!-- 个人基本信息 -->
          <div class="baseInfo">
              <mu-text-field hintText="输入年龄" type="type" icon="face" fullWidth :underlineShow="false" />
              <mu-text-field hintText="输入住址" type="type" icon="place" fullWidth :underlineShow="false"/>
              <mu-text-field hintText="输入电话号码" type="type" icon="phone" fullWidth :underlineShow="false"/>
              <mu-text-field hintText="输入邮箱" type="type" icon="mail" fullWidth :underlineShow="false"/>
          </div>

          <!-- 技能 -->
          <skills></skills>
          <!-- 兴趣爱好 -->
          <interest></interest>
      </mu-col>

      <mu-col width="100" tablet="30" desktop="75" class="resume-right">
          <div>
              <mu-text-field hintText="请输入姓名"  :underlineShow="false" class="nameInput" />
              <div class="ambition">
                <mu-text-field hintText="请输入求职志向" :underlineShow="false" />
              </div>
          </div>
          <!-- 教育背景 -->
          <education></education>
          <!-- 工作经验 -->
          <work></work> 
          <!-- 奖项荣誉 -->
          <award></award>
          <!-- 自我评价 -->
          <assessment></assessment>
          <mu-float-button icon="camera" mini class="demo-float-button createPic" @click="createImg" />
          <!-- 简历预览 -->
          <div v-if="readResume">
            <div class="shadow"></div>
            <div class="resume">
                <mu-card>
                    <mu-card-media title="恭喜你，简历成功生成" subTitle="">
                      <img :src="resumeImg" />
                    </mu-card-media>
                    <mu-card-actions>
                      <a :href="url" target="_blank" download class="generatePic">下载简历</a>
                      <mu-flat-button label="关闭预览" @click="closeResume" />
                    </mu-card-actions>
                  </mu-card>
            </div>
          </div>

      </mu-col>
    </mu-row>
  </div>
</template> 
<script>
import HeaderImg from './HeaderImg';
import Skills from './Skills';
import Interest from './Interest';
import Education from './Education';
import Work from './Work';
import Award from './Award';
import Assessment from './Assessment';
import Html2canvas from '../../static/js/html2canvas';

export default{
  data(){
      return{
        url:"",
        resumeImg:"../../static/img/headerImg.jpg",
        readResume:false
      }
  },
  methods:{
    createImg(){
        console.log("生成图片中");
        var height = document.getElementById("app").offsetHeight;
        var width = document.getElementById("app").offsetWidth;
        var canvas = document.querySelector("canvas");
        var ctx = canvas.getContext("2d");
        var _this = this;
        // canvas.width = width;
        // canvas.height = height;
        // Html2canvas(document.querySelector("#app"), {canvas: canvas}).then(function(canvas) {
        //     // console.log('简历已经生成');
        //     var img = canvas.toDataURL();
        //     console.log(img);
        // });
        Html2canvas(document.querySelector("#app"), {
            onrendered: function(canvas){
                // document.body.appendChild(canvas);
                var img = canvas.toDataURL();
                // console.log(img); //在console中会输出图片的路径，然后复制在浏览器一粘贴，就可以看到。
                _this.url = img;
                _this.resumeImg = img;
                _this.readResume = true;
            },
        });
    },
    closeResume(){
      this.readResume = false;
    },
  },
  components:{
    Skills,
    Interest,
    Education,
    Work,
    Award,
    Assessment,
    HeaderImg
  }
}
</script>