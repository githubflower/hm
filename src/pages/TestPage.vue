<template>
	<div class="wrap">
		<!-- <addr-selection></addr-selection> -->
		<el-validate-input v-model="testname"></el-validate-input>
		<el-button @click="onSubmit">submit</el-button>
		<!-- <el-input v-model="elname"></el-input> -->
	</div>
</template>
<script>
	// import AddrSelection from '../components/AddrSelection.vue'
	// import ValidateInput from '../components/ValidateInput.vue'
	import ElValidateInput from '../components/ElValidateInput.vue'
	export default{
		name: 'TestPage',
		components: {
			ElValidateInput
		},
		data(){
			return {
				testname: 'JimGreen'
				// elname: 'Hanmeimei'
			}
		},
		methods: {
			onSubmit(){
				console.log("this.testname " + this.testname);
				// console.log("this.elname " + this.elname);
				debugger;
			}
		}
	}
</script>