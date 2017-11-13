<template>
	<div class="home">
		<img src="src/assets/img/login-bj.jpg" alt="" class="backImg">
		<img src="src/assets/img/login-logo.png" alt="" class="logo">
		<div class="login-box">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
			  <el-form-item>
			  	<h3 class="title">LOGIN</h3>
			  </el-form-item>
			  <el-form-item prop="name">
			    <el-input v-model="ruleForm.name" placeholder="username" 
			    icon="fa-user-circle">
			    </el-input>
			  </el-form-item>
			  <el-form-item prop="region">
			    <el-input v-model="ruleForm.region" type="password" 
			    	placeholder="password" icon="fa-lock">
			    </el-input>
			  </el-form-item>
			  <p class="forget">
			  	<input type="checkbox">
			  	Remember Password
			  </p>
			  <p class="forget">
			  	<a>Forget Password?</a>
			  </p>
			  <p class='submit'>
			    <el-button type="primary" class='btn' @click="submitForm('ruleForm')">login</el-button>
			  </p>
			</el-form>
		</div>
		<div class="discription">
			<h2>
				Pink Shoes<br>
	            2013 Collection
            </h2>	
        	<p>
	        	Nunc non fermentum nunc. Sed ut ante<br>
	            eget leo tempor consequat sit amet eu orci.<br>
	            Donec dignissim dolor eget..
	        </p>
		</div>
		<div class="footer">
			<p>
				© 2014 Midea- All rights reserved
			</p>
	        <div class="right">
	            <a @click='shows'>
	                <span class="left">English</span>
	                <i class="el-icon-caret-bottom"></i>
	            </a>
	            <ul class="dropdown-menu">
	                <li>
	                	English
	                </li>
	                <li>
	                	Bahasa
	                </li>
	                <li>
	                	PUBLIC.Spanish
	                </li>
	            </ul>
			</div>
		</div>
	</div>
</template>
<script>
	import './login.scss'
	import { mapGetters, mapActions } from 'vuex'
	// import axios from '../../axios/http.js'
	import $ from 'jquery'
	export default {
		data () {
	      return {       
	        ruleForm: {
	          name: '',
	          region: '',
	        },
	        rules: {
	          name: [
	            { required: true, message: 'username is required', trigger: 'blur' }
	          ],
	          region: [
	            { required: true, message: 'password is required', trigger: 'change' }
	          ]
	        }
	      };
	    },
	    methods: {
			submitForm(formName) {
		        // this.$refs[formName].validate((valid) => {
		        //   if (valid) {
		        //   	this.$store.dispatch('login', {username: this.name, password: this.region});
		        //   } else {
		        //     console.log('error submit!!');
		        //     return false;
		        //   }
		        // });
		        var data = {
		        	username:this.ruleForm.name,
		        	password:this.ruleForm.region
		        }
		        this.axios.login(data).then((response)=>{
		        	console.log(response);
		        })
		    },
		    shows(){

		    }
		}
	}
</script>