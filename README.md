# vue-component-practice

# 使用独立可复用组件构建大型应用，任意类型的应用界面都可以抽象为一个组件树。组件化能提高开发效率，方便重复使用，简化调试步骤，提升项目可维护性，便于多人协同开发。

# 组件通信
1、父给子传值 props

2、子传父 $emit('add', data)

3、事件总线 Bus事件派发、监听和回调管理

4、vuex 创建唯一的全局数据管理者store,通过它管理数据并通知组件状态变更。

5、兄弟组件之间通信可通过共同祖辈搭桥  $parent/$root

    this.$parent.$on('foo', handle);

    this.$parent.$emit('foo');

5、父组件可以通过$children访问子组件实现父子通信 $children不能保证子元素顺序

    this.$children[0].xxx = 'xxx';

6、$attrs/$listeners 包含了父作用域中不作为prop被识别且获取的特性绑定(class、style除外)。当一个组件没有声明任何prop时，这里会包含所有父作用域的绑定(class、style除外)，并可以通过v-bind="$attrs"传入内部组件 在创建高级别组件时非常有用。

7、refs 获取子节点引用 this.$refs.helloRef

8、provide/inject 实现祖先和后代之间的传值

    // ancestor

    provide() {

        return { foo: 'foo' }

    }

    // descendant

    inject: ['foo']

# 插槽 vue实现的内容分发API,用于复合组件开发。<slot>
1、匿名插槽 

    <slot></slot>

    // 使用 默认插槽用default做参数

    <template v-slot:default></template>

2、具名插槽 将内容分发到子组件指定位置  

    <slot name="content"></slot> 

    // 使用 具名插槽用插槽名做参数

    <template v-slot:content>内容</template>

3、作用域插槽 分发内容要用到子组件中的数据

    // v-slot的值指定为作用域上下文对象

    <template v-slot:default="slotProps">

        来自子组件数据：{{slotProps.foo}}
        
    </template>


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).