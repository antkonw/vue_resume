<template>
<div class="skills">
  <div class="title">
    <span class="">技能特点</span>
    <a href="javascrpt:;" class="add addBtn" @click="openSkills">
      <mu-icon value="add" color="#fff" />
    </a>
  </div>

  <div>
    <mu-dialog :open="skillsDialog" title="技能特点" @close="closeSkills">
      <mu-text-field label="掌握的技术" labelFloat fullWidth v-model="skill.name"/>
      <mu-row gutter>
        <mu-col width="60" table="60" desktop="80">
          <mu-slider v-model="skill.value" class="demo-slider" :min=0 :max=100 :step="5" />
        </mu-col>
        <mu-col width="60" table="60" desktop="20">
            <span>{{skill.value}}</span>
            <span>/</span>
            <span>100</span>
        </mu-col>
      </mu-row>
      
      <mu-flat-button slot="actions" @click="closeSkills" primary label="取消"/>
      <mu-flat-button slot="actions" primary label="确定" @click="skillData" />
    </mu-dialog>
  </div>

  <div class="skill-item">
      <div v-if="skillEmpty" class="empty">请先添加技能特点</div>
      <div v-for="(item,index) in skills" class="list" v-else>
        <p>
          <span>{{item.name}}</span>
          <a href="javascript:;" class="delete" @click="deleteSkill(index)">
            <mu-icon value="delete" />
          </a>
        </p>
        <mu-linear-progress mode="determinate" :value="item.value"/>
      </div>
  </div>
</div>
</template>
<style></style>
<script>
export default {
  data () {
    return {
      value: 20,
      skillsDialog:false, 
      skill:{
        name:"",
        value:0
      },
      skills:[], 
      skillEmpty:true,   
    }
  },
  methods: {
    openSkills () { 
      this.skillsDialog = true
    },
    closeSkills () {
      this.skillsDialog = false
    },
    skillData(){
        this.skills.push(this.skill);
        this.skill={
          name:"",
          value:0
        };
        this.skillsDialog = false;
        this.skillEmpty = false;
        console.log(this.skills)
    },
    deleteSkill(index){
      this.skills.splice(index,1);
      if(this.interests==0){
          this.interestEmpty = true;
      }
    }
  }
}
</script>