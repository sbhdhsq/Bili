// 云函数入口文件
const cloud = require('wx-server-sdk')

//初始化云环境（修改自己的id）
cloud.init({
  env: 'hgq-2gnlfuzl793ace52'
})

//引用网络请求库axios
const axios= require('axios')


//定义接口地址
const URL = 'https://api.bilibili.com/x/web-interface/popular?ps=20&pn=1'



exports.main = async (event, context) => {
  //使用axios发送异步get请求
  const {
    data
  } =await axios.get(URL)
  console.log('######' + data.data.list.length)
  //返回结果
  return data.data.list
}