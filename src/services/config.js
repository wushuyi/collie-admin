/**
 * Created by wushuyi on 2016/9/25 0025.
 */

export const rootPath = 'http://local.wushuyi.com:5000/api';

export const errHandler = (e) => {
    console.error('[ XHR:Failed ] 详情请看控制台');
    console.error(e)
};
