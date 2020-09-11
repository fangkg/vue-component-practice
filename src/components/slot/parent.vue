<template>
  <div>
    <h2>parent</h2>
    <Comp1>parent子组件1</Comp1>
    <Comp2>
        <!-- 默认插槽用default做参数 -->
        <template v-slot:default>匿名插槽..</template>
        <!-- 具名插槽用插槽名做参数 -->
        <template v-slot:content>具名插槽</template>
    </Comp2>
    <Comp3>
        <template v-slot:default="slotProps">
            来自子组件数据:{{slotProps.foo}}
        </template>
    </Comp3>
  </div>
</template>

<script>
import Comp1 from '@/components/slot/comp1.vue'
import Comp2 from '@/components/slot/comp2.vue'
import Comp3 from '@/components/slot/comp3.vue'

export default {
    components: {
        Comp1,
        Comp2,
        Comp3
    }
}

</script>
<style>
</style>