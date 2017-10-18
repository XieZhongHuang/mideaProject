<template>
	<div :style="note" class="home">
		<img src="src/assets/img/login-logo.png" alt="" class="logo">
		<form action="" class="login-form"></form>
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
	            <a>
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
	import $ from 'jquery'
	export default {
		data () {
	      return {       
	        note: {
	            backgroundImage: 'url(' + require('../../assets/img/login-bj.jpg') + ')',
	           	backgroundRepeat: "no-repeat",
	            backgroundSize: "100% 100%",
	            backgroundPosition: "center top",
	            backgroundAttachment: "fixed"
	        }
	      }
	    }
	}
</script>