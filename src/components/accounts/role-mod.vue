<template>
    <div v-el:main>
        <table class="table table-bordered">
            <tr>
                <td width="150px">名称:</td>
                <td>
                    <xeditable v-ref:name
                               v-bind:xeditable="{type:'text'}"
                               v-bind:value="role.name"
                    ></xeditable>
                </td>
            </tr>
            <tr>
                <td>简述:</td>
                <td>
                    <xeditable v-ref:description
                               v-bind:xeditable="{type:'text'}"
                               v-bind:value="role.description"
                    ></xeditable>
                </td>
            </tr>
        </table>
    </div>
    <div class="btn-group">
        <button class="btn btn-success  btn-sm" v-on:click="enter_btn">确定</button>
        <button class="btn btn-danger btn-sm" v-on:click="cancel_btn">取消</button>
    </div>
</template>

<script>

    import {roleMod} from 'store/modules/role/getters'
    import {toggleHideBtn, toggleMod, modRole, postRole} from 'store/modules/role/actions'
    import xeditable from 'components/accounts/xeditable.vue'
    import roleService from 'services/accounts/roleService'
    import {types} from 'store/modules/role/store'
    export default{
        vuex: {
            getters: {
                role: roleMod
            },
            actions: {
                toggleHideBtn,
                toggleMod,
                modRole,
                postRole,
                cancel_role: ({dispatch, state}, role_id) => {
                    dispatch(types.DELETE_ITEM, role_id);
                }
            }
        },
        components: {
            xeditable
        },

        init(){
            let $vm = this;
            $vm.cache = {};

        },
        beforeDestroy(){
            let $vm = this;
            $vm.cache = {};
        },
        ready(){
            let $vm = this;
            $vm.cache.role = {};
            $vm.$refs.name.$on('save', function (value) {
                $vm.cache.role.name = value;
            });
            $vm.$refs.description.$on('save', function (value) {
                $vm.cache.role.description = value;
            });
        },
        methods: {
            enter_btn(){
                let $vm = this;
                if (!$vm.role.id) {
                    let data = {};
                    for (let key in $vm.cache.role) {
                        data[key] = $vm.cache.role[key]
                    }
                    this.postRole(data).then((res)=> {
                        this.toggleHideBtn();
                        this.toggleMod(res.id);
                    });
                } else {
                    let data = {};
                    for (let key in $vm.cache.role) {
                        data[key] = $vm.cache.role[key]
                    }
                    data.id = $vm.role.id;
                    this.modRole(data).then((res)=> {
                        this.toggleHideBtn();
                        this.toggleMod(this.role.id);
                    });
                }
            },
            cancel_btn(){
                let $vm = this;
                if (!$vm.role.id) {
                    this.toggleHideBtn();
                    $vm.cancel_role($vm.role.id);
                } else {
                    this.toggleHideBtn();
                    this.toggleMod(this.role.id);
                }
            }
        }
    }
</script>