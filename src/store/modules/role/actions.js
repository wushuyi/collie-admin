import roleService from 'services/accounts/roleService'
import {types} from './store'

/**
 *
 * @param dispatch
 * @param state
 */
export const fetchRole = ({dispatch, state}, data=null) => {
    roleService.fetch(data).then((res)=> {
        if (res.status === 'success') {
            dispatch(types.GET_INFO, res.data.page_info);
            for (let index in res.data.role_list) {
                res.data.role_list[index].ismod = false;
            }
            dispatch(types.GET_LIST, res.data.role_list);
        }
    });
};

/**
 *
 * @param dispatch
 * @param state
 */
export const toggleHideBtn = ({dispatch, state}) => {
    dispatch(types.TOGGLE_HIDEBTN, !state.role.hideBtn);
};

/**
 *
 * @param dispatch
 * @param state
 * @param role_id
 */
export const toggleMod = ({dispatch, state}, role_id) => {
    dispatch(types.TOGGLE_MOD, role_id);
};

/**
 *
 * @param dispatch
 * @param state
 * @param role_id
 */
export const deleteRole = ({dispatch, state}, role_id) => {
    roleService.del({id: role_id}).then(function (res) {
        if (res.status == 'success') {
            dispatch(types.DELETE_ITEM, role_id);
        }
    });
};

/**
 *
 * @param dispatch
 * @param state
 * @param data
 * @returns {Promise}
 */
export const modRole = ({dispatch, state}, data) => {
    return new Promise((resolve, reject) => {
        roleService.mod(data).then(function (res) {
            if (res.status == 'success') {
                dispatch(types.MOD_ITEM, res.data);
                resolve(res.data);
            }
        });
    });
};

/**
 *
 * @param dispatch
 * @param state
 * @param role
 */
export const addRole = ({dispatch, state}, role) => {
    dispatch(types.ADD_ITEM, role);
};

/**
 *
 * @param dispatch
 * @param state
 * @param data
 * @returns {Promise}
 */
export const postRole = ({dispatch, state}, data) => {
    return new Promise((resolve, reject) => {
        roleService.add(data).then(function (res) {
            if (res.status == 'success') {
                dispatch(types.NEW_ITEM, res.data);
                resolve(res.data);
            }
        });
    });
};

/**
 *
 * @param dispatch
 * @param state
 * @param data
 */
export const search = ({dispatch, state}, data) => {
    dispatch(types.SET_SEARCH, data);
};
