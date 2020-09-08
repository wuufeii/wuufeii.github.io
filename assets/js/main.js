/*文字逐个展示*/
function textLoading () {
  const text = 'A:给我1000块'+ '</br>' + 'B:拿去,1024，给你凑了个整';
  let showText = document.getElementById('showText');
  let i = 0;
  let timer = setInterval (function () {
    showText.innerHTML = text.substring(0,i);
    i++;
    if (showText.innerHTML === text) {
      clearInterval(timer);
    }
  },120)
}
textLoading();

/*显示更多*/
function showMore () {
  let more = document.getElementsByClassName('more-item')
  for(let i = 0; i < more.length; i++){
    more[i].index = i;
    more[i].onclick = function () {
      let i = this.index;
      let item = more[i].parentNode;
      let box = item.parentNode;
      box.style.overflowY = 'scroll';
      item.style.display = 'none';

    }
  }
}
showMore();

/*案例图标轮播*/
function  showImage() {
  let content = document.getElementsByClassName('img-item')
  for(let i = 0;i<content.length;i++) {
    let img = content[i].getElementsByTagName('img')
    for(let j = 0;j<img.length-1;j++) {
    let j=0
      setInterval(() => {
        j++
        if(j===img.length) {
          img[j-1].style.display='none'
          img[0].style.display='inline-block'
          j=0
        } else {
          img[j].style.display='inline-block'
          img[j-1].style.display='none'
        }
      },3000)
    }

  }

}
showImage()

/*日期*/
function getDate() {
  let date = new Date()
  let year = date.getFullYear()
  let dom = document.getElementsByClassName('copyright')[0]
  dom.innerHTML = `&copy; 2018-${year} WuuFeii 邬飞`
}
getDate()