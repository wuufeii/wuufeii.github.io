// import diary2018 from '../blog/2018/1.json'
/*日志展示*/
let indexNum = 0 //首页展示的文章条数
let allBlog = [] //所有日志
let allSign = [] //所有标签
let allSignStr = '' //所有标签（字符串）
let timer = null

const blog2020 = function (data) {
  showDiary(data)
}
const blog2018 = function (data) {
  showDiary(data)
}

function showDiary(data) {
  let url = window.location.href
  let dom = document.getElementsByClassName('diary')[0]
  let isDetail = url.split('?detail=').length > 1
  let isType = url.split('?type=').length > 1
  let isHome = url.split('?').length === 1
  let isSign = url.split('?sign=').length>1
  data.forEach((item, index) => {
    getSignType(item)

    item.itemId = `${item.time}(${index})`
    allBlog.push({
      time: item.time,
      itemId: item.itemId,
      title: item.title,
      sign: item.sign,
      content: item.content.slice(0, 160) + '...'
    })
    let content = isDetail ? item.content : item.content.slice(0, 160) + '...'
    let itemId = ''
    if (isDetail) {
      /*===========详情页显示的内容============*/
      itemId = url.split('?detail=')[1]
      if (itemId === item.itemId) {
        getLogDetail(item, content, dom)
      }

    }
    if (isHome) {
      /*首页显示的内容*/
      if (indexNum < 5) {
        let newDom = getLogList(item, content)
        dom && dom.appendChild(newDom)
      }
    }
    indexNum++
  })
  if (isType) {
    /*===========同类标签页显示的内容============*/
    url = url.split('?type=')[1]
    timer = setTimeout(() => {
      getLogByTime(url, dom)
      clearTimeout((timer))
    }, 1)
  }
  if (isSign) {
    /*===========标签分类============*/
    timer = setTimeout(() => {
      getSignPage(dom)
      clearTimeout((timer))
    }, 1)
  }
}

/*日志列表*/
function getLogList(item, content) {
  let newDom = document.createElement('div')
  let domStr = `<div class="diary-item"><div class="title">${item.title}</div><div class="sign"><span class="iconfont icon-riqi time">${item.time}</span>`
  item.sign.forEach(inner => {
    domStr += `<a href="./blog.html?type=${inner}" class="iconfont icon-biaoqian tag">${inner}</a>`
  })
  domStr += `</div><pre class="content showDiary">${content}</pre><a class="btn" href="./blog.html?detail=${item.itemId}">阅读更多</a></div>`
  newDom.innerHTML = domStr
  return newDom
}

/*日志详情*/
function getLogDetail(item, content, dom) {
  let newDom = document.createElement('div')
  let domStr = `<div class="diary-item diary-detail-item"><div class="title">${item.title}</div><div class="sign"><span class="iconfont icon-riqi time">${item.time}</span>`
  item.sign.forEach(inner => {
    domStr += `<a href="./blog.html?type=${inner}" class="iconfont icon-biaoqian tag">${inner}</a>`
  })
  domStr += `</div><pre class="content showDiary">${content}</pre>`
  let currentBlog = [...allBlog]
  setTimeout(() => {
    domStr += '<div class="next-blog">'
    let len = currentBlog.length
    if (len > 1) {
      domStr += `<span>上一篇：<a class="before-btn" href="./blog.html?detail=${currentBlog[len - 2].itemId}">${currentBlog[len - 2].title}</a></span>`
    }
    if (len < allBlog.length) {
      domStr += `<span>下一篇：<a class="after-btn" href="./blog.html?detail=${allBlog[len].itemId}">${allBlog[len].title}</a></span>`
    }
    domStr += '</div></div>'
    newDom.innerHTML = domStr
    dom.appendChild(newDom)
  }, 1)
}

/*统计标签*/
function getSignType(item) {
  if (allSign.length === 0) {
    item.sign.forEach(innerSign => {
      allSign.push({
        sign: innerSign,
        num: 1
      })
      allSignStr += `${innerSign};`
    })
  } else {
    item.sign.forEach(innerSign => {
      if (allSignStr.indexOf(innerSign) > -1) {
        allSign.forEach(sign => {
          if (sign.sign === innerSign) {
            sign.num++
          }
        })
      } else {
        allSignStr += `${innerSign};`
        allSign.push({
          sign: innerSign,
          num: 1
        })
      }
    })
  }
}


/*日志按时间轴排列*/
function getLogByTime(url, dom) {
  let newDom = document.createElement('div')
  let title = ''
  let signNum = 0
  if (url==='all') {
    title = ` 文章总览 -&nbsp;`
  } else {
    title = ` 标签( ${url} ) -&nbsp;`
  }
  let domStr = `<div class="diary-list"><div class="title"><span>${title}</span><span class="sign-num">${signNum}</span>篇</div>`
  let currentYear = ''
  allBlog.forEach(item => {
    if(url==='all') {
      let itemYear = item.time.split('-')[0]
      if (currentYear === itemYear) {
        domStr += `<div class="text"><span>${item.time}</span><a href="./blog.html?detail=${item.itemId}">${item.title}</a></div>`
      } else {
        currentYear = itemYear
        domStr += `<div class="year"><span>${itemYear}</span></div><div class="text"><span>${item.time}</span><a href="./blog.html?detail=${item.itemId}">${item.title}</a></div>`
      }
    } else {
      item.sign.forEach(inner => {
        if (url === inner) {
          signNum++
          let itemYear = item.time.split('-')[0]
          if (currentYear === itemYear) {
            domStr += `<div class="text"><span>${item.time}</span><a href="./blog.html?detail=${item.itemId}">${item.title}</a></div>`
          } else {
            currentYear = itemYear
            domStr += `<div class="year"><span>${itemYear}</span></div><div class="text"><span>${item.time}</span><a href="./blog.html?detail=${item.itemId}">${item.title}</a></div>`
          }
        }
      })
    }
  })
  domStr += '</div>'
  newDom.innerHTML = domStr
  dom.appendChild(newDom)
  if(url!=='all') {
    document.getElementsByClassName('sign-num')[0].innerHTML = signNum
  }else {
    document.getElementsByClassName('sign-num')[0].innerHTML = allBlog.length
  }
}

/*标签页*/
function getSignPage(dom) {
  console.log(allSign)
  let newDom = document.createElement('div')
  let domStr = `<div class="diary-sign"><div class="title">标签 - ${allSign.length}</div><div class="sign-item">`
  allSign.forEach(item => {
    let m = item.num
    let cls = m<2? 'sign-xs': m<3?'sign-sm':m<4?'sign-md':m<5?'sign-lg':'sign-xl'
    domStr+=`<a href="./blog.html?type=${item.sign}" class="${cls}">${item.sign}</a>`
  })
  domStr += '</div></div>'
  newDom.innerHTML = domStr
  dom.appendChild(newDom)
}
