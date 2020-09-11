<template>
  <div>
    <h2>comp3</h2>
    <slot :foo="foo"></slot>
  </div>
</template>

<script>
export default {
    data () {
        return {
            foo: 'comp3 foo'
        }
    }
}

</script>
<style>
</style>