<template>
	<div>
		<p>This is useredit page</p>
		<p>locale: {{$route.query.locale}}</p>
		<p>analytics: {{ $route.query.q}}</p>
		<router-view/>
	</div>
</template>
