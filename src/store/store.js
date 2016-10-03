import Vue from 'vue'
import Vuex from 'vuex'
import {role} from 'store/modules/role/store'
import createLogger from 'store/middlewares/logger'

// Vue.use(Vuex);

Vue.config.debug = true;

let debug = true;
if (__PROD__) {
    debug = false;
}

export default new Vuex.Store({
    modules: {
        role
    },
    strict: debug,
    middlewares: debug ? [createLogger()] : []
})
