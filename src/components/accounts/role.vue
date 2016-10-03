<template>
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>
            权限管理
        </h1>
        <ol class="breadcrumb">
            <li><i class="fa fa-dashboard"></i> 控制台</li>
            <li>账号系统</li>
            <li class="active">权限管理</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content">

        <!-- Default box -->
        <div class="box" v-el:table>
            <div class="box-header with-border">
                <role_search></role_search>
            </div>
            <div class="box-body">
                <table class="table table-bordered" style="width: 100%;">
                    <tbody>
                    <tr>
                        <th>名称</th>
                        <th>简介</th>
                        <th width="110px">操作</th>
                    </tr>
                    <template v-for="item in roleList">
                        <role_item v-bind:role="item"></role_item>
                    </template>
                    </tbody>
                </table>
            </div>
            <!-- /.box-body -->
            <div class="box-footer">
                <role_pages></role_pages>
            </div>
            <!-- /.box-footer-->
        </div>
        <!-- /.box -->

    </section>
    <!-- /.content -->
</template>

<script>
    import {fetchRole, addRole} from 'store/modules/role/actions'
    import {roleList, hideBtn, searchData} from 'store/modules/role/getters'
    import role_item from 'components/accounts/role-item.vue'
    import role_pages from 'components/accounts/role-pages.vue'
    import role_search from 'components/accounts/role-search.vue'

    export default{
        vuex: {
            getters: {
                roleList,
                hideBtn,
                searchData
            },
            actions: {
                fetchRole
            }
        },
        components: {
            role_item,
            role_pages,
            role_search
        },
        route: {
            data(){
                this.fetchRole(this.searchData);
            }
        },
        ready(){
            if (this.hideBtn) {
                $(this.$els.table).addClass('editor');
            }
        },
        watch: {
            /**
             *
             * @param value
             * @param oldValue
             */
            hideBtn (value, oldValue) {
                if (value) {
                    $(this.$els.table).addClass('editor');
                } else {
                    $(this.$els.table).removeClass('editor');
                }
            },
            /**
             *
             * @param value
             * @param oldValue
             */
            searchData (value, oldValue) {
                this.fetchRole(value);
            }
        }
    }
</script>

<style>
    .editor .editor-hidden {
        visibility: hidden;
    }
</style>