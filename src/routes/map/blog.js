/**
 * Created by wushuyi on 2016/9/25 0025.
 */

export default {

    '/blog/post': {
        name: 'post',
        component (resolve) {
            require(['views/welcome'], resolve)
        }
    },
    '/blog/tag': {
        name: 'tag',
        component (resolve) {
            require(['views/welcome'], resolve)
        }
    },
    '/blog/comment': {
        name: 'comment',
        component (resolve) {
            require(['views/welcome'], resolve)
        }
    }

}