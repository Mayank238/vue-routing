<template>
  <div id="app">
      <p>hello</p>
      <app-header></app-header>
      <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
 export default{
 	components: {
 		'app-header': Header
 	}
 }
</script>
