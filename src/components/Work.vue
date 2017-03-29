<template>
<div class="work">
  <div class="title">
    <mu-icon value="work" color="#1d3653" /> 
    <span>工作经验</span>
  </div>
  <mu-float-button icon="add" mini class="demo-float-button educationBtn" @click="openWork" />
  <mu-dialog :open="workDialog" title="工作经验" @close="closeWork">
      <mu-row gutter>
        <mu-col width="50" table="30" desktop="20">
          <mu-date-picker mode="landscape" hintText="开始时间" fullWidth v-model="work.startTime" />
        </mu-col>
        <mu-col width="50" table="30" desktop="20">
          <mu-date-picker mode="landscape" hintText="结束时间" fullWidth v-model="work.endTime"   />
        </mu-col>
        <mu-col width="50" table="30" desktop="35">
          <mu-text-field hintText="工作单位" fullWidth v-model="work.department" />
        </mu-col>
        <mu-col width="50" table="30" desktop="25">
          <mu-text-field hintText="职位" fullWidth v-model="work.position" />
        </mu-col>
      </mu-row>
      <mu-row gutter>
        <mu-col width="100" table="100" desktop="100">
          <mu-text-field hintText="输入工作经验实例"  multiLine :rows="1" :rowsMax="5" fullWidth v-model="work.content" />
        </mu-col>
      </mu-row>
    <mu-flat-button slot="actions" @click="closeWork" primary label="关闭" />
    <mu-flat-button slot="actions" primary label="确定" @click="wordData" />
  </mu-dialog>

  <div class="work-content">
      <div v-if="workEmpty" class="empty">请添加工作经验情况</div>
      <div v-for="(item,index) in works" v-else class="list">
          <mu-row gutter>
            <mu-col width="100" table="30" desktop="30">
                <span class="title-font">{{item.startTime}}</span>
                <span class="title-font">--</span>
                <span class="title-font">{{item.endTime}}</span>
              </mu-col>
              <mu-col width="50" table="30" desktop="30">
                <span class="title-font">{{item.department}}</span>
              </mu-col>
              <mu-col width="50" table="30" desktop="30">
                <span class="title-font">{{item.position}}</span>
              </mu-col>
              <mu-col width="50" table="5" desktop="10">
                <a href="javascript:;" class="deleteBtn" @click="deleteWork(index)">
                    <mu-icon value="delete" color="#fff" />
                </a>
              </mu-col>
            </mu-row>
            <mu-row gutter>
            <mu-col width="100" table="100" desktop="100">
              <span class="content-font">{{item.content}}</span>
            </mu-col>
        </mu-row>
      </div>
  </div>
</div>
</template>
<style></style>
<script>
  export default{
    data () {
      return {
        workDialog:false,     
        workEmpty:true,
        work:{
          startTime:"",
          endTime:"",
          department:"",
          position:"",
          content:"",
        },
        works:[],
      }
    },
    methods: {
        openWork () { 
          this.workDialog = true
        },
        closeWork () {
          this.workDialog = false
        },
        wordData(){
          this.works.push(this.work);
          this.work = {
            startTime:"",
            endTime:"",
            department:"",
            position:"",
            content:"",
          };
          this.workDialog = false;
          this.workEmpty = false;
        },
        deleteWork(index){
          this.works.splice(index,1);
          if(this.works.length==0){
              this.workEmpty = true;
          }
        },
    },
  }
</script>