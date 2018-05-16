<template>
	<div class="validate-input-wrap">
		<el-input v-model="currentValue" @change="onChange" @input="onInput" @blur="onBlur"></el-input>
		<div class="msg"></div>
	</div>
</template>
<script>
	export default{
		name: 'ElValidateInput',
		props: [/*'rules', 'trigger',*/ 'value'],
		data(){
			return {
				currentValue: this.value
			}
		},
		methods: {
			validate(){

			},
			onInput(value){
				console.log('---onInput---');
				this.currentValue = value;
				this.$emit('input', value);
			},
			onChange(value){
				console.log('---onchange---');
				this.currentValue = value;
				this.$emit('change', value);
			},
			onBlur(event){
				console.log('---onBlur---');
				this.$emit('change', event);
			}
		},
		created(){
			// switch(){}
		}
	}
</script>