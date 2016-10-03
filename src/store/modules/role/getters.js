/**
 *
 * @param state
 * @returns {Array|*|List}
 */
export const roleList = state => {
    return state.role.list
};

/**
 *
 * @param state
 * @returns {watch.hideBtn|watch.'hideBtn'|boolean|*}
 */
export const hideBtn = state => {
    return state.role.hideBtn;
};

/**
 *
 * @param state
 * @returns {T}
 */
export const roleMod = state => {
    return state.role.list.find((obj) => {
        if (obj.ismod) {
            return true;
        }
    });
};

/**
 *
 * @param state
 * @param role_id
 * @returns {T}
 */
export const getRole = (state, role_id) => {
    return state.role.list.find((obj) => {
        if (obj.id == role_id) {
            return true;
        }
    });
};

/**
 *
 * @param state
 * @returns {state.info|{}|console.info|*}
 */
export const roleInfo = state => {
    return state.role.info
};

/**
 *
 * @param state
 * @returns {*|state.search|{}|string|string|Symbol}
 */
export const searchData = state => {
    return state.role.search
};