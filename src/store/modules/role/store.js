let nameKV = {
    'GET_LIST': 'GET_LIST',
    'GET_INFO': 'GET_INFO',
    'TOGGLE_HIDEBTN': 'TOGGLE_HIDEBTN',
    'TOGGLE_MOD': 'TOGGLE_MOD',
    'DELETE_ITEM': 'DELETE_ITEM',
    'MOD_ITEM': 'MOD_ITEM',
    'ADD_ITEM': 'ADD_ITEM',
    'SET_SEARCH': "SET_SEARCH",
    'NEW_ITEM':'NEW_ITEM'
};

for (let key in nameKV) {
    nameKV[key] = 'ROLE_' + nameKV[key];
}

export const types = nameKV;

const state = {
    info: {},
    list: [],
    search: {},
    hideBtn: false,
};

// mutations
const mutations = {
    [types.GET_LIST](state, list) {
        state.list = list;
    },
    [types.GET_INFO](state, info) {
        state.info = info;
    },
    [types.TOGGLE_HIDEBTN](state, bool) {
        state.hideBtn = bool;
    },
    [types.TOGGLE_MOD](state, role_id){
        let index;
        for (index in state.list) {
            if (state.list[index].id == role_id) {
                break;
            }
        }
        state.list[index].ismod = !state.list[index].ismod;
    },
    [types.DELETE_ITEM](state, role_id){
        let index = state.list.findIndex((obj) => {
            if (obj.id == role_id) {
                return true;
            }
        });
        console.log(index);
        if (index > -1) {
            return state.list.splice(index, 1);
        }
    },
    [types.MOD_ITEM](state, data){
        let item = state.list.find((obj) => {
            if (obj.id == data.id) {
                return true;
            }
        });
        for (let key in data) {
            item[key] = data[key];
        }
    },
    [types.NEW_ITEM](state, data){
        let item = state.list.find((obj) => {
            if (obj.id == '') {
                return true;
            }
        });
        for (let key in data) {
            item[key] = data[key];
        }
    },
    [types.ADD_ITEM](state, role) {
        state.list.push(role);
    },
    [types.SET_SEARCH](state, data) {
        state.search = data;
    },
};

export const role = {
    state,
    mutations
};


