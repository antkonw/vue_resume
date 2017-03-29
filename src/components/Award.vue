<template>
    <div class="award">
      <div class="title">
        <mu-icon value="star" color="#1d3653" /> 
        <span>荣誉奖项</span>
      </div>
      <mu-float-button icon="add" mini class="demo-float-button awardBtn" @click="openAward" />
      <mu-dialog :open="awardDialog" title="工作经验" @close="closeAward">
          <mu-row gutter>
            <mu-col width="100" table="100" desktop="100">
              <mu-text-field hintText="所获得的奖项"  multiLine :rows="1" :rowsMax="5" fullWidth v-model="awardContent" />
            </mu-col>
          </mu-row>
        <mu-flat-button slot="actions" @click="closeAward" primary label="关闭" />
        <mu-flat-button slot="actions" primary label="确定" @click="awardData" />
      </mu-dialog>

      <div class="award-content">
          <div v-if="awardEmpty" class="empty">请添加荣誉奖项</div>
          <div v-for="(item,index) in awards" v-else class="list">
              <mu-row gutter>
                <mu-col width="100" table="100" desktop="90">
                   <span class="content-font"> • {{item}}</span>
                </mu-col>
                <mu-col width="100" table="100" desktop="10">
                  <a href="javascript:;" class="deleteBtn" @click="deleteAward(index)">
                    <mu-icon value="delete" color="#fff" />
                  </a>
                </mu-col>
              </mu-row>
          </div>
      </div>
    </div>
</template>
<style></style>
<script>
  export default {
  data () {
    return {
      awardDialog:false,
      awardContent:"",
      awards:[],
      awardEmpty:true
    }
  },
  methods: {
    openAward () {
      this.awardDialog = true
    },
    closeAward () {
      this.awardDialog = false
    },
    awardData(){
      this.awards.push(this.awardContent);
      this.awardContent = "";
      this.awardDialog = false;
      this.awardEmpty = false;
    },
    deleteAward(index){
      this.awards.splice(index,1);
      if(this.awards.length==0){
          this.awardEmpty = true;
      }
    },
  }
}
</script>