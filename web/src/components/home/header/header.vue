<template>
	<div class="top">
		<div class="logo"><img src="src/assets/img/logo.png" alt=""></div>
		<div class="serch">
			<el-select v-model="select" filterable placeholder="Customer Name">
			    <el-option
			      v-for="item in options"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			</el-select>
		  	<el-input
			  placeholder=""
			  icon="search"
			  v-model="input"
			  :on-icon-click="handleIconClick">
			</el-input>
		</div>
		<ul class="topright">
	    	<li><i class="el-icon-fa-bell-o"></i></li>
	    	<li class="lb">
	    		<span>{{this.$store.state.header.lang}}</span><i class="el-icon-caret-bottom"></i>
	    		<ul class="fork">
	    			<li v-for='(value,index) in languages' @click='changelang(value)' :key="index">{{value}}</li>
	    		</ul>
	    	</li>
	    	<li class="lb">
                <span>I364.ASP Installer Service User</span>
                <i class="el-icon-caret-bottom"></i>
                <ul class="fork">
	    			<li>I364.ASP Installer Service User</li>
	    			<li>I364.ASP Plus Service User</li>
	    		</ul>
	    	</li>
	    	<li class="lbr">
	    		<span>EX_FITBDG</span><i class="el-icon-caret-bottom"></i>
	    		<ul class="fork">
	    			<li><i class="el-icon-fa-key"></i>Reset Password</li>
	    			<li><i class="el-icon-fa-share"></i>Logout</li>
	    			<li><i class="el-icon-fa-phone"></i>Contact US</li>
	    		</ul>
	    	</li>
	    	<li>
	    		<el-upload
				  class="avatar-uploader portrait"
				  action="https://jsonplaceholder.typicode.com/posts/"
				  :show-file-list="false"
				  :on-success="handleAvatarSuccess"
				  :before-upload="beforeAvatarUpload">
				  <img v-if="imageUrl" :src="imageUrl" class="avatar">
				</el-upload>
	    	</li>
	    </ul>
	</div>
	
</template>
<script>
import './header.scss'
import $ from 'jquery'
export default{
	data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        languages:['English','Bahasa'],
        input:'',
        imageUrl:'./src/assets/img/profile-widget-avatar.jpg',
        options: [{
          value: '选项1',
          label: 'Customer Name'
        }, {
          value: '选项2',
          label: 'Service Request'
        }, {
          value: '选项3',
          label: 'Serial Number'
        }],
        select: ''
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleIconClick(ev) {
	    console.log(ev);
	  },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      changelang(value){
      	this.$store.dispatch('changLang',value);
      }
	}
}
$(function(){
	console.log($('.topright')[0]);
	var res = true;
	$('.topright').on('click','.lb',function(){
		console.log(666);
		if(res == true){
			$(this).find('.fork')[0].style.display='block';
			res = false;
		}else if(res == false){
			$(this).find('.fork')[0].style.display='none';
			res = true;
		}
	});
	$('.lbr').click(function(){
		if(res == true){
			$(this).find('.fork')[0].style.display='block';
			res = false;
		}else if(res == false){
			$(this).find('.fork')[0].style.display='none';
			res = true;
		}
	});
	$('.fork').on('click','li',function(){
		$(this).closest('.fork').removeAttr('style');
		$(this).closest('.fork')[0].style.display='none';
		$(this).closest('.lb').find('span').text($(this).text());
	});
})
</script>