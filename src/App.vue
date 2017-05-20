<template>
    <div>
        <topbar></topbar>
        <router-view></router-view>
    </div>
</template>

<script>
import topbar from './component/topbar.vue'

export default {
 data() {
  return {
   message: 'Hello LinXiaoBao'
  }
 },
 components: {
    topbar: topbar
 }
}
</script>