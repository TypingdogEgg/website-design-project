// 该文件用于写所有接口请求函数

import requests from "./ajax";
// import mockRequests from "./ajaxMock";

// 通常使用params传递参数 参数会展示在url上
// export const getUserList = () => requests({
//     url: 'users/getusers',
//     method: 'get',
// })

// // 请求添加用户数据
// // 通常会使用data传递参数 参数存储在请求的body里
// export const adduserlist = (data) => requests({
//     url: '/users/adduser',
//     method: 'post',
//     data
// })

// // 请求修改用户数据
// export const updateUserList = (data) => requests({
//     url: '/users/updateuser',
//     method: 'post',
//     data
// })

// // 请求删除用户数据 根据id删除
// export const deleteUserList = (data) => requests({
//     url: '/users/deleteuser',
//     method: 'delete',
//     data
// })

// 注册 邮箱、用户名、密码
export const register = (data) => requests({
    url:'/users/register',
    method:'post',
    data
})

// 登录 邮箱、密码
export const login = (data) => requests({
    url: '/users/login',
    method: 'post',
    data
})

// 获取新闻数据列表
export const getNewsList = ()=>requests({
    url:'/allnews',
    method:'get'
})
// 根据id获取新闻数据列表
export const getNews = (id)=>requests({
    url:`/getnews/?id=${id}`,
    method:'get',
})

// 请求参展嘉宾数据
export const getGuests = ()=>requests({
    url:'/allguests',
    method:'get'
})

// 请求展商数据
export const getExhibitors = () => requests({
    url: '/allexhibitors',
    method: 'get'
})

//根据展商id获取展品数据
export const getProducts = (id) => requests({
    url: `/getproducts/?id=${id}`,
    method: 'get'
})