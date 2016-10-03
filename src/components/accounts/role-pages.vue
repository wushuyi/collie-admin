<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-4">
                <p>显示第 {{ item_start }} 至 {{ item_end }} 项结果，共 {{
                    pageInfo.total }} 项</p>
            </div>
            <div class="col-md-4">
                <nav>
                    <ul class="pager editor-hidden">
                        <li class="previous" v-if='pageInfo.has_prev'>
                            <a v-on:click.prevent="prev_page" href="#">&larr; 上一页</a>
                        </li>
                        <li class="previous disabled" v-else>
                            <a v-on:click.prevent href="#">&larr; 上一页</a></li>
                        <li class="next" v-if='pageInfo.has_next'>
                            <a v-on:click.prevent="next_page" href="#">下一页 &rarr;</a>
                        </li>
                        <li class="next disabled" v-else="">
                            <a v-on:click.prevent href="#">下一页 &rarr;</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="col-md-4">
                <button class="btn btn-info pull-right editor-hidden" v-on:click="add_btn">添加</button>
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
                pageInfo: roleInfo,
                searchData,
            },
            actions: {
                search,
                addRole,
                toggleHideBtn
            }
        },
        computed: {
            item_start () {
                let vm = this;
                let num = (vm.pageInfo.page - 1) * vm.pageInfo.per_page;
                return num
            },
            item_end () {
                let vm = this;
                let num = (vm.pageInfo.page) * vm.pageInfo.per_page;
                if (num > vm.pageInfo.total) {
                    num = vm.pageInfo.total;
                }
                return num;
            }
        },
        methods: {
            add_btn(){
                this.toggleHideBtn();
                this.addRole({
                    "id": "",
                    "description": "",
                    "name": "",
                    "ismod": true
                });
            },
            prev_page(){
                let data = {page: this.pageInfo.page - 1};
                data = _.merge({}, this.searchData, data);
                this.search(data);
            },
            next_page(){
                let data = {page: this.pageInfo.page + 1};
                data = _.merge({}, this.searchData, data);
                this.search(data);
            }
        }
    }
</script>