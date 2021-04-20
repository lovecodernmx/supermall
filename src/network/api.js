import axios from 'axios'

// 获取用户
export const login = function (user, password) {
        return axios.post('/api/login', {
                user,
                password
        }).then(res => {
                return res.data
        }).catch(err => {
                console.log("api登录错误", err)
        })
};
// 获取所有日记
export const get_diary = function (user) {
        return axios.post('/api/diary', {
                user
        }).then(res => {
                return res.data
        }).catch(err => {
                console.log("api登录错误", err)
        })
};
//获取日记异步另一种写法
//例子POST
export const get_diary_async = (data) => {
        return axios.request({
                url: '/api/diary',
                data: data,
                method: 'POST'
        })
}

// 获取所有留言信息
export const get_message = function () {
        return axios.post('/api/message').then(res => {
                return res.data
        }).catch(err => {
                console.log("api登录错误", err)
        })
};
// 获取文章详细信息
export const get_details = function (id) {
        return axios.post('/api/get/details', {
                id
        }).then(res => {
                return res.data
        }).catch(err => {
                console.log("api登录错误", err)
        })
};
// 获取用户所有上传的文件信息
export const get_photo_list = function (user) {
        return axios.post('/api/get/photo/list', {
                user
        }).then(res => {
                return res.data
        }).catch(err => {
                console.log("api登录错误", err)
        })
};
// 发送邮件
export const send_email = function (accept) {
        return axios.post('/api/send/email', {
                accept
        }).then(res => {
                return res
        }).catch(err => {
                console.log("api登录错误", err)
        })
};
// 搜索日记
export const diary_search = function (search) {
        return axios.post('/api/diary/search', {
                search
        }).then(res => {
                return res
        }).catch(err => {
                console.log("api登录错误", err)
        })
};
