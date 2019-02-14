<template>
	<div>
		<p>This is user</p>

		<button @click='home' class="btn btn-info">Go to Home</button>
		<hr>
		<router-view/>
	</div>
</template>
<script type="text/javascript">
	export default{
		methods:{
			home(){
				// this.$router.push({ name: 'home' })
				this.$router.push( '/')
			}
		}
	}
</script>
