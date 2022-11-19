> 关于 Promise 的一些探索以及总结

#### Promise 异步

```javascript
Promise.resolve(20).then((res) => {
  console.log(res)
})
console.log('acb') // 结果   acb  20
```

#### then 回调中的返回值

```javascript
function promise() {
  return new Promise((resolve, reject) => {
    console.log('开始执行')
    setTimeout(() => {
      resolve(Promise.resolve(20))
    }, 2000)
  })
}

promise()
  .then((res) => {
    console.log('两秒后执行')
    console.log(res)
    return res + 1
    //整个then相当于返回Promise.resolve(res+1)
    //如果是返回一个Promise同理 resolve了一个Promise
    //那么会先解开这个Promise 再下一步
  })
  .then((res2) => {
    console.log(res2)
  })

// 结果：
// 开始执行
// 两秒后执行
// 20
// 21
```

#### 多个 Promise 问题

> 先声明 4 个 promise

```javascript
function promise1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Promise.resolve('promise1---3s'))
    }, 3000)
  })
}

function promise2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Promise.resolve('promise2--2s'))
    }, 2000)
  })
}

function promise3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('promise3 发生reject')
    }, 500)
  })
}

function promise4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('promise4--1s')
    }, 1000)
  })
}
```

顺序执行问题

```javascript
// 顺序执行  ok 正常工作
async function order() {
  for (let promise of [promise4, promise1, promise2]) {
    console.log(promise)
    console.log(await promise())
  }
}

order().catch((err) => {
  console.log('发生err，err信息', err)
})
//结果
// [Function: promise4]
// promise4--1s
// [Function: promise1]
// promise1---3s
// [Function: promise2]
// promise2--2s
```

顺序执行的 promise 列表里有 reject 的 promise

```javascript
// 顺序执行 兼容列表里面有拒绝发生错误的情况  问题：若有一个发生拒绝 那么其后面执行的promise都会被阻断
async function order() {
  for (let promise of [promise3, promise1, promise2]) {
    console.log(promise)
    console.log(await promise().catch((err) => Promise.reject(err)))
  }
}

order().catch((err) => {
  console.log('发生err，err信息', err)
})
```

HTML

```html
<!DOCTYPE html> <!-- ❗️注释 1 -->
<html> <!-- ❗️注释 2 -->

<head> <!-- ❗️注释 3 -->
  <meta charset="UTF-8"> <!-- ❗️注释 4 -->
  <title>前端一万小时</title> <!-- ❗️注释 5 -->
</head> <!-- ❗️注释 6 -->

<body> <!-- ❗️注释 7 -->
  <img src="HTML 图片" alt="HTML 首页图"> <!-- ❗️注释 8 -->

  <!-- 以下我们来写这个页面 --> <!-- ❗️注释 9 -->
  <h1>① HTML 基础</h1> <!-- ❗️注释 10 -->
  <p>本知识学习用时：2 小时……</p> <!-- ❗️注释 11 -->
  <p>前言：学习前端我们有个比喻：先打地基……<br> <!-- ❗️注释 12 -->
    那接下来的系列文章，我们开始我们的……
  </p> <!-- ❗️注释 13 -->
  <h2>1 认识 HTML</h2>
  <p>在《Oli's 前端一万小时》之……</p>
</body> <!-- ❗️注释 14 -->

</html>
```
