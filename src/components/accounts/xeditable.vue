<template>
    <a href="#" v-el:editable>{{ value }}</a>
</template>

<script>
    import 'assets/libs/x-editable/1.5.1/bootstrap3-editable/js/bootstrap-editable.js'

    export default{
        props: ['xeditable', 'value'],
        init(){
            this.cache = {};
        },
        ready(){
            let $vm = this;
            $vm.cache.$editable = $($vm.$els.editable).editable($vm.xeditable);
            $vm.cache.$editable.on('save', function (e, res) {
                $vm.$emit('save', res.newValue);
            });
        },
        beforeDestroy(){
            let $vm = this;
            $vm.cache.$editable.data('editable').destroy();
        }
    }
</script>

<style>
    @import url("../../assets/libs/x-editable/1.5.1/bootstrap3-editable/css/bootstrap-editable.css");
</style>