<template>
	<div class="education">
	    <div class="title">
	        <mu-icon value="school" color="#1d3653" /> 
	    <span>教育背景</span>
	    </div>
	    <mu-float-button icon="add" mini class="demo-float-button educationBtn" @click="openEducation" />
	      <mu-dialog :open="educationDialog" title="教育背景" @close="closeEducation">
	          <mu-row gutter>
	            <mu-col width="50" table="30" desktop="20">
	              <mu-date-picker mode="landscape" hintText="开始时间" fullWidth v-model="edu.startTime" />
	            </mu-col>
	            <mu-col width="50" table="30" desktop="20">
	              <mu-date-picker mode="landscape" hintText="结束时间" fullWidth v-model="edu.endTime" />
	            </mu-col>
	            <mu-col width="50" table="30" desktop="35">
	              <mu-text-field hintText="毕业学校" fullWidth v-model="edu.school" />
	            </mu-col>
	            <mu-col width="50" table="30" desktop="25">
	              <mu-text-field hintText="专业技能" fullWidth v-model="edu.professional" />
	            </mu-col>
	          </mu-row>
	          <mu-row gutter>
	            <mu-col width="100" table="100" desktop="100">
	              <mu-text-field hintText="输入教育背景详情"  multiLine :rows="1" :rowsMax="5" fullWidth v-model="edu.content" />
	            </mu-col>
	          </mu-row>
	        <mu-flat-button slot="actions" @click="closeEducation" primary label="关闭"/>
	        <mu-flat-button slot="actions" primary  label="确定" @click="eduData" />
	      </mu-dialog>

	      <div class="education-content lists">
	          <div v-if="empty" class="empty">请添加教育背景</div>
	          <div v-for="(item,index) in edus" class="list" v-else>
	              <mu-row gutter>
	                  <mu-col width="50" table="30" desktop="30">
	                    <span class="title-font">{{item.startTime}}</span>
	                    <span class="title-font">--</span>
	                    <span class="title-font">{{item.endTime}}</span>
	                  </mu-col>
	                  <mu-col width="50" table="30" desktop="30">
	                    <span class="title-font">{{item.school}}</span>
	                  </mu-col>
	                  <mu-col width="50" table="30" desktop="30">
	                    <span class="title-font">{{item.professional}}</span>
	                  </mu-col>
	                  <mu-col width="50" table="5" desktop="10">
	                    <a href="javascript:;" class="deleteBtn" @click="deleteData(index)">
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
		data(){
			return {
		      	educationDialog:false,
		      	empty:true,
		     	edu:{
			        startTime:"",
			        endTime:"",
			        school:"",
			        professional:"",
			        content:"",
		      	},
		      	edus:[],
		    }
		},
		methods: {
		    openEducation () {
		      this.educationDialog = true
		    },
		    closeEducation () {
		      this.educationDialog = false
		    },
		    eduData(){
		      this.edus.push(this.edu);
		      this.edu = {
		        startTime:"",
		        endTime:"",
		        school:"",
		        professional:"",
		        content:"",
		      };
		      this.educationDialog = false;
		      this.empty = false;
		    },
		    deleteData(index){
		      this.edus.splice(index,1);
		      if(this.edus.length==0){
		          this.empty = true;
		      }
		    },
		},
	}
</script>








