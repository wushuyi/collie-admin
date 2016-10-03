<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-6">
                <div class="form-group">
                    <label>名称</label>
                    <input v-model="name" type="text" class="form-control" placeholder="名称">
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-group">
                    <label>描述</label>
                    <input v-model="description" type="text" class="form-control" placeholder="描述">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-4 col-sm-push-8">
                <div v-on:click="searcg_btn" class="btn btn-info pull-right editor-hidden">搜索</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {roleInfo, searchData} from 'store/modules/role/getters'
    import {search, addRole, toggleHideBtn} from 'store/modules/role/actions'
    import _ from 'lodash'
    export default{
        vuex: {
            getters: {
                searchData
            },
            actions: {
                search
            }
        },
        data(){
            let data = {
                description: '',
                name: ''
            };
            return data;
        },
        methods: {
            searcg_btn(){
                let $vm = this;
                let data = {
                    page: 1,
                    search_name : $vm.name,
                    search_description : $vm.description
                };
                data = _.merge({}, $vm.searchData, data);
                $vm.search(data);
            }
        }
    }
</script>