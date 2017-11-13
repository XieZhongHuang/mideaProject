<template>
	<div class="main">
		<headerComponent></headerComponent>
	    <div class="subfield">
	      <MenuComponent></MenuComponent>
	      <router-view class="viewer"></router-view>
	    </div>
	</div>
</template>
<script>
	import './home.scss'
	import MenuComponent from './menu/menu1.vue'
 	import headerComponent from './header/header.vue'
	export default {
		components:{
			MenuComponent,
      		headerComponent
		}
	}
</script>