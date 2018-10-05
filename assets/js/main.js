function textLoading () {
  var text = 'A:给我1000块'+ '</br>' + 'B:拿去,1024，给你凑了个整',
      showText = document.getElementById('showText'),
      i = 0;
  timer = setInterval (function () {
    showText.innerHTML = text.substring(0,i);
    i++;
    if (showText.innerHTML === text) {
      clearInterval(timer);
    }
  },120)
}
textLoading();

function showMore () {
  var more = document.getElementsByClassName('more-item')
  for(var i = 0; i < more.length; i++){
    more[i].index = i;
    more[i].onclick = function () {
      var i = this.index;
      var item = more[i].parentNode
      var box = item.parentNode;
      box.style.overflowY = 'scroll';
      item.style.display = 'none';

    }
  }
}
showMore();