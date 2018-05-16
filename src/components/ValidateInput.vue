<template>
	<div class="validate-input-wrap">
		<!-- v-model="currentValue"  -->
		<input type="text" 
			:value="currentValue"
			@input="onInput"
			@change="onChange"
			@blur="onBlur"/>
		<div class="msg"></div>
	</div>
</template>
<script>
	export default{
		name: 'ValidateInput',
		props: [/*'rules', 'trigger',*/ 'value'],
		data(){
			return {
				currentValue: this.value
			}
		},
		methods: {
			validate(){

			},
			onInput(event){
				let v = event.target.value;
				console.log('---onInput---');
				this.currentValue = v;
				this.$emit('input', v);
			},
			onChange(event){
				let v = event.target.value;
				console.log('---onchange---');
				this.currentValue = v;
				this.$emit('change', v);
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