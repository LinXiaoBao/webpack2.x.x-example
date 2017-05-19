<template>
 <div>
  <p>{{message}}</p >
  <router-link :to="{name: 'pageA'}">
   <button>去pageA</button>
  </router-link>

  <router-link :to="{name: 'pageB'}">
   <button>去pageB</button>
  </router-link>

  <router-view></router-view>
 </div>
</template>

<script>
export default {
 data() {
  return {
   message: 'Hello LinXiaoBao'
  }
 }
}
</script>