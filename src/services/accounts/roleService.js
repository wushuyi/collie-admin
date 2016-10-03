/**
 * Created by wushuyi on 2016/9/25 0025.
 */
import {rootPath, errHandler} from 'services/config'
import request from 'superagent'

/**
 *
 */
class RoleService {
    /**
     *
     * @param url
     * @param body
     * @param query
     * @param method
     * @returns {Promise}
     */
    xhr({url, body = null, query = null, method = 'get'}) {
        return new Promise((resolve, reject) => {
            request[method.toLowerCase()](rootPath + url)
            // 跨域允许带上 cookie（http://visionmedia.github.io/superagent/#cors）
            //     .withCredentials()
                .send(body)
                .query(query)
                .end((err, re) => {
                    if (err)
                        return errHandler(err);

                    if (!re.body)
                        return resolve(null);

                    if (re.body._code)
                        return errHandler(re.body._msg);

                    resolve(re.body)
                })
        })
    }

    /**
     * 查询权限
     * @returns {*}
     */
    fetch(data = null) {
        let url = '/accounts/role/';
        return this.xhr({url, query: data, method: 'get'})
    }

    /**
     * 新增权限
     * @returns {Promise}
     */
    add(data) {
        let url = '/accounts/role/';
        return this.xhr({url, body: data, method: 'post'})
    }

    /**
     * 修改权限
     * @returns {Promise}
     */
    mod(data) {
        let url = '/accounts/role/';
        return this.xhr({url, body: data, method: 'put'})
    }

    /**
     * 删除权限
     * @returns {Promise}
     */
    del(data) {
        let url = '/accounts/role/';
        return this.xhr({url, body: data, method: 'delete'})
    }
}

export default new RoleService()
