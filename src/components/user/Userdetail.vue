<template>
	<div>
		<h2>some user detail</h2>
		<p>Loaded ID: {{ $route.params.id}}</p>
		<router-link tag="button"
		            :to="{name: 'useredit' ,params:{id: $route.params.id},
                query: { locale: 'en' , q: 100} }"
		            class="btn btn-secondary">Edit</router-link>
	</div>
</template>
