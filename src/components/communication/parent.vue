<template>
  <div>
    <h2>parent组件</h2>
    <Child2 v-bind="$attrs" v-on="$listeners"></Child2>
  </div>
</template>

<script>
import Child2 from '@/components/communication/child2.vue'
export default {
    components: {
        Child2
    }
}

</script>
<style>
</style>