<template>
	<div class="header-wrap">
		<img id="logo" src="../assets/logo.png"/>
		<ul>
			<router-link to="/" tag="li">业务概况</router-link>
		</ul>
	</div>
</template>
<script>
	export default{
		name: 'Header'
	}
</script>
<style>
	.header-wrap{
		position: relative;
		height: 60px;
		border-bottom: 1px solid #ffffff;
		color: #ffffff;
	}
	.header-wrap > ul{
		padding-top: 10px;
	}
	#logo{
		position: absolute;
		top: 10px;
		left: 15px;
		width: 40px;
		height: 40px;
	}
	ul{
		margin-left: 100px;
	}
	li{
		display: inline-block;
		padding: 5px 10px;
	}
</style>