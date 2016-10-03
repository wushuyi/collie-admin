<template>
    <tr data-id="{{ role.id }}">
        <td>{{ role.name }}</td>
        <td>{{ role.description }}</td>
        <td>
            <div class="btn-group editor-hidden">
                <button v-on:click="more_btn" class="btn btn-primary btn-sm">详情</button>
                <button v-on:click="delete_btn" class="btn btn-danger btn-sm">删除</button>
            </div>

        </td>
    </tr>

    <tr v-if="role.ismod">
        <td colspan="3">
            <rolemod_component></rolemod_component>
        </td>
    </tr>
</template>
<script>

    import {toggleHideBtn, deleteRole, toggleMod} from 'store/modules/role/actions'
    import rolemod_component from 'components/accounts/role-mod.vue'

    export default{
        vuex: {
            actions: {
                toggleHideBtn,
                deleteRole,
                toggleMod
            }
        },
        props: ['role'],
        components: {
            rolemod_component
        },
        methods: {
            more_btn(){
                this.toggleMod(this.role.id);
                this.toggleHideBtn();
            },
            delete_btn(){
                this.deleteRole(this.role.id);
            }
        }
    }
</script>