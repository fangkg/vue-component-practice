<template>
  <div @click="$emit('some-event', 'some msg from child1!')">
    <h3>child1</h3>
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
    name: 'child1',
    data(){
        return {
            msgChild1: 'child1'
        }
    },
    props: {
        msg: {
            type: String,
            default: ''
        }
    },
    mounted() {
        this.$bus.$on('event-from-child2', msg => {
            console.log('child1:', msg)
        })
        this.$parent.$on('event-via-parent', val => {
            console.log('child1-val:', val)
        })
    }
}

</script>
<style>
</style>