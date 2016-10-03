/**
 * Created by wushuyi on 2016/9/25 0025.
 */

export default {

    '/accounts/user': {
        name: 'user',
        component (resolve) {
            require(['views/welcome'], resolve)
        }
    },
    '/accounts/role': {
        name: 'role',
        component (resolve) {
            require(['components/accounts/role'], resolve)
        }
    }

}
