<template>
	<div class="wrap">
		<addr-selection></addr-selection>
	</div>
</template>
<script>
	import AddrSelection from '../components/AddrSelection.vue'
	export default{
		name: 'TestPage',
		components: {
			AddrSelection
		},
		data(){
			return {}
		}
	}
</script>