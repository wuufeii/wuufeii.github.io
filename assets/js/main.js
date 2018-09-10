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