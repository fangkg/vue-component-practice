<template>
  <div>
    <h2>组件通信</h2>
    <!-- props 自定义事件 -->
    <Child1 msg="some msg from parent!" @some-event="onSomeEvent"></Child1>
    <!-- 事件总线 -->
    <Child2 ref="child2Ref" msg='msg from index'></Child2>
    <Parent gmsg="msg from grandPa" @foo="onFoo"></Parent>
  </div>
</template>

<script>
import Child1 from '@/components/communication/child1.vue'
import Child2 from '@/components/communication/child2.vue'
import Parent from '@/components/communication/parent.vue'

export default {
    provide() {
        return {
            bar: 'bar'
        }
    },
    components: {
        Child1,
        Child2,
        Parent
    },
    methods: {
        onSomeEvent(msg) {
            console.log('communication:', msg)
        },
        onFoo() {
            console.log('foo 事件！')
        }
    },
    mounted() {
        console.log('children:', this.$children)
        this.$children[1].sendMsgViaEventBus()
        this.$refs.child2Ref.sendMsgViaEventBus()
        // $children只有自定义组件 不能保证组件顺序
        // refs还可以引用dom
    }
}

</script>
<style>
</style>