
// canvas设置
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var emojiArray = ["✌", "😂", "😝", "😁", "😱", "👉", "🙌", "🍻", "🔥", "🌈", "☀", "🎈", "🌹", "💄", "🎀", "⚽", "🎾", "🏁", "😡", "👿", "🐻", "🐶", "🐬", "🐟", "🍀", "👀", "🚗", "🍎", "💝", "💙", "👌", "❤", "😍", "😉", "😓", "😳", "💪", "💩", "🍸", "🔑", "💖", "🌟", "🎉", "🌺", "🎶", "👠", "🏈", "⚾", "🏆", "👽", "💀", "🐵", "🐮", "🐩", "🐎", "💣", "👃", "👂", "🍓", "💘", "💜", "👊", "💋", "😘", "😜", "😵", "🙏", "👋", "🚽", "💃", "💎", "🚀", "🌙", "🎁", "⛄", "🌊", "⛵", "🏀", "🎱", "💰", "👶", "👸", "🐰", "🐷", "🐍", "🐫", "🔫", "👄", "🚲", "🍉", "💛", "💚"]
var xPositions = [window.innerWidth / 2, window.innerWidth / 4, window.innerWidth / 4 * 3, window.innerWidth / 8, window.innerWidth / 8 * 7];
var yPositions = [0, 0, 0, 0, 0];
var arrayOfCurrentEmojis = [];

var emojiDrops = function() {
     ctx.font = '30px serif';
     for (var i = 0; i < xPositions.length; i++) {
          arrayOfCurrentEmojis.push(emojiArray[Math.floor((Math.random() * emojiArray.length - 1) + 1)]);
          ctx.fillText(arrayOfCurrentEmojis[i], xPositions[i], yPositions[i]);

          // 这将使每个表情都以随机速度移动，因此看起来更舒畅
          yPositions[i] += Math.floor((Math.random() * 5) + 2);

          // 如果任何表情达到最后，它将返回到顶部
          for (var k = 0; k < yPositions.length; k++) {
               if (yPositions[k] >= window.innerHeight) {
                    yPositions[k] = 0;
               }
          }
     }
};

// 初始化
function draw() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
     emojiDrops();
     window.requestAnimationFrame(draw);
}
draw();

// 屏幕点击事件
document.getElementById("canvas").addEventListener("click", function(event) {
     xPositions.push(event.pageX);
     yPositions.push(event.pageY);
}, false);

//文字初始化
var myText, myTitle;
function init() {
     $(".container").show();
     $("#text").hide();
     var myheight = $("#typing").offsetHeight;
     myTitle = $("#title").text();
     $("#title").css("height", myheight);
     $("#title").text("");
     typeIt();
}

//文字逐个遍历
var t, i = 0,j=0;
function typeIt() {
     $('#title').append(myTitle.charAt(i));
     if (i < myTitle.length - 1) {
          i++
          t = setTimeout("typeIt()", 150);
     } else {
          clearTimeout(t);
          $("#text").fadeIn("slow");
     }
}

$(document).ready(function () {
     init();
     var music = document.getElementById("music");
     music.play(); 

     // 文字动画
     setTimeout(function(){
          $('#title').beatText({isAuth:true,beatHeight:"1em",isRotate:false,upTime:100,downTime:100});
     },2250)

});