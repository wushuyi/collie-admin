<template>
    <div class="wrapper">
        <main-header></main-header>
        <main-sidebar></main-sidebar>
        <content-wrapper></content-wrapper>
        <main-footer></main-footer>
    </div>
</template>
<script>
    import $ from 'jquery'
    import mainHeader from 'components/base/main-header.vue'
    import mainSidebar from 'components/base/main-sidebar.vue'
    import mainFooter from 'components/base/main-footer.vue'
    import contentWrapper from 'components/base/content-wrapper.vue'
    import store from 'store/store'

    export default {
        store,
        // 路由会自动将该组件挂载到 #app 上
        // el: () => '#app',
        components: {
            mainHeader,
            mainSidebar,
            mainFooter,
            contentWrapper
        },
        init(){
            $(document.body).addClass('hold-transition skin-blue sidebar-mini');
        },
        // 顶级变量必须设置默认值方能引入 observer
        beforeDestroy(){
            $(document.body).removeClass('hold-transition skin-blue sidebar-mini');
        },
        data () {
            return {
                // userService, // 实现 userService 挂载 data 的可追踪
                userData: null // 须与 userService.data【手动】同步
            }
        }
    }
</script>
