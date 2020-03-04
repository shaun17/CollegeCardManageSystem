<template>
    <div>
        <p>父组件传来的值是：{{parentMsg}}</p>
        <button @click="toChild">点我</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                msg: '我是子组件'
            }
        },
        props: {
            parentMsg: String
        },
        methods: {
            toChild() {
                this.$emit("listenOnParent", this.msg)
            }
        }
    }
</script>