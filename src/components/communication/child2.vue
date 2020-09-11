<template>
  <div>
    <h3>child2</h3>
    <!-- 深层次组件传值 -->
    <p>{{$attrs.msg}}</p>
    <p>{{$attrs.gmsg}}</p>
    <p>{{bar}}</p>
    <button @click="sendMsgViaEventBus">child2按钮</button>
  </div>
</template>

<script>
export default {
    inject: ['bar'],
    // 别名
    // inject: {
    //     bar1: 'bar'
    // },
    // 设置默认值
    // inject: {
    //     bar2: {
    //         from: 'bar',
    //         default: 'fffff'
    //     }
    // },
    name: 'child2',
    methods: {
        sendMsgViaEventBus() {
            this.$bus.$emit('event-from-child2', 'msg from child2')
            this.$parent.$emit('event-via-parent', 'msg from $parent child2')
            this.$emit('foo')
        }
    }
}

</script>
<style>
</style>