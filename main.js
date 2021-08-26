// -----------------------------1
// function Name(){
//     console.log("keren");
// }
// window.setInterval(() =>{Name()},4000)
// -----------------------------2
// function FamName(){
//     alert("hailu")
// }
// window.setInterval(()=>{FamName()},3000)
// -----------------------------3
// function FullName(){
//     document.write("keren hailu")
// }
// window.setInterval(()=>{FullName()},2000)
// -----------------------------4
// var counter = 0
// function EvertSecond(){
//     console.log("keren hailu"+counter);
//     counter ++
// }
// window.setInterval(()=>{EvertSecond()
// }
// ,1000)
// -----------------------------5
// function p(){
//     document.write(`<p>keren hailu</p>`)
// }
// window.setInterval(()=>{p()},2000)
// -----------------------------6
// function idPlassP(){
//     document.write(`<p id="keren">hailu</p>`)
// }
// window.setInterval(()=>{idPlassP()},2000)
// -----------------------------7
// function divPlassId(){
//     document.write(`<div id="div">kerennn</div>`)
// }
// window.setInterval(()=>{divPlassId()},2000)
// -----------------------------8
// function Atop(){
//     document.write(`<div><p id="atop">keren hailuuu</p></div>`)
// }
// window.setInterval(()=>{Atop()},2000)
// -----------------------------9

// function END7() {
//   var counter = 0;

//   var stop = window.setInterval(() => {document.write("keren! " + counter++)
//   if (counter == 7) {
//     window.clearInterval(stop);
//   }
// }, 2000);
// }
// END7();
// -----------------------------10
// function NameLog(){
//     console.log("keren");
// }
// window.setTimeout(()=>{NameLog()},4000)
// -----------------------------11
// function NameAlert(){
//     alert("hailu")
// }
// window.setTimeout(()=>{NameAlert()},3000)
// -----------------------------12
// function FullNameWindow(){
//     document.write("keren hailu")
// }
// window.setTimeout(()=>{FullNameWindow()},2000)
// -----------------------------13
// function alertJump(){
//     alert("keren hailu")
// }
// window.setTimeout(()=>{alertJump()},2000)
// -----------------------------14
//  var size=0;
//  var stop;
// document.getElementById("bigBox");
// document.getElementById("BoxPlay").onclick=()=>{
// var divBgBox=document.getElementById("BgBox")
// stop =window.setInterval(()=>{
//     divBgBox.style.left=`${size++}px`
// },50)
// }
// document.getElementById("BoxStop").onclick=()=>{
//     window.clearInterval(stop)
// }
// -----------------------------14
// (אותה תשןבה אבל מקןצרת)
// bigBox;
// var size = 0;
// var width = 0;
// var hight = 0;
// var stop;
// BoxPlay.onclick = () => {
//   var divBgBox = BgBox;
//   stop = window.setInterval(() => {
//     divBgBox.style.left = `${size++}px`;
//     if (size > 270) {
//         window.clearInterval(stop);
//       stop = window.setInterval(stop);

//       divBgBox.style.bottom = `${size--}px`;
//       if (size < 0) {
//         window.clearInterval(stop);
//         stop = window.setInterval(stop);
//       }
//     }
//     window.setInterval(stop);
//   }, 50);
// };
// BoxStop.onclick = () => {
//   window.clearInterval(stop);
// };
// ------------------------------------
// bigBox;
// var size = 0;
// var width = 0;
// var hight = 0;
// var stop;
// BoxPlay.onclick = () => {
//   var divBgBox = BgBox;
//   stop = window.setInterval(() => {
//     divBgBox.style.left = `${size++}px`;
//     if (size > 270) {
//         window.clearInterval(stop);
//       window.setInterval(()=>{
//         divBgBox.style.bottom = `${size--}px`;
//       },50);
//       if (size <270) {
//         window.clearInterval(stop);
//         window.setInterval(()=>{
//         divBgBox.style.right = `${size++}px`;
//       },50);
//     }if (size < 270) {
//         window.clearInterval(stop);
//         window.setInterval(()=>{
//             divBgBox.style.bottom = `${size++}px`;
//   }, 50);
// }}
// },50)
// }
// BoxStop.onclick = () => {
//   window.clearInterval(stop);
// },50
// ;

// ------------------------------------box
// var move = 0;

// function moveBox() {
//     intervalId = setInterval(() => {
//         boxDiv.style.left = `${move++}px`
//         if (move > 150) {
//             clearMove();
//             move = 0;
//             intervalId = setInterval(() => {
//                 boxDiv.style.top = `${move++}px`
//                 if (move > 150) {
//                     clearMove();
//                     move = 150;
//                     intervalId = setInterval(() => {
//                         boxDiv.style.left = `${move--}px`
//                         if (move < 0) {
//                             clearMove();
//                             move = 150;
//                             intervalId = setInterval(() => {
//                                 boxDiv.style.top = `${move--}px`
//                                 if (move < 0) {
//                                     clearMove();
//                                 }
//                             })
//                         }
//                     }, 3)
//                 }
//             }, 3)
//         }
//     }, 3)
// }
// moveBox();

// ------------------------------------box

// -----------------------------------------16

// var text="hello timers"
// var i=(text.length)-1
// var a=0;
// function helloTime(){
// document.write(text[a])
// console.log(text[a]);
//  a++
// }
//  var stopWord =window.setInterval(()=>{
//     helloTime();
//     if (a>i) {
//        window.clearInterval(stopWord)
//     }
// },1000)

// -----------------------------------------17
// הצגת שעוןןןןןן -----------;
// window.setInterval(()=>{
//     var dateObject = new Date();
//     divTime.innerHTML =`${dateObject.getHours()}: ${dateObject.getMinutes()} :${dateObject.getSeconds()}`;
// },1000)

// -----------------------animation---------------------
// ------------------------------------------------1
// var move = 0;
// btnLeft.onclick = () => {
//   window.setInterval(() => {
//     moveLeft.style.left = `${move++}px`;
//   }, 50);
// };
//   if (move>8) {
//       window.clearInterval(()=>{
//     moveLeft.style.left = `${move++}px`;
//   })
//   }
// ------------------------------------------------3
// document.getElementById("pic");
// const images = [
//   "https://cdn.pixabay.com/photo/2021/08/22/12/24/mountains-6564997__340.jpg",
//   "https://cdn.pixabay.com/photo/2021/08/05/07/55/daffodils-6523446__340.jpg",
//   "https://cdn.pixabay.com/photo/2021/08/09/00/00/bellflower-6532224__340.jpg",
// ];
// var index=0;
// function TwoSecond(){
//     pic.src = images[index];
//     pic.src=(images[index++] ); 
// }

// window.setInterval(()=>{
//     TwoSecond()
//     if(index==images.length){
//         index=0; 
//     }
// },2000)
// ------------------------------------------------4
// document.getElementById("pic");
// const images = [
//   "https://cdn.pixabay.com/photo/2021/08/22/12/24/mountains-6564997__340.jpg",
//   "https://cdn.pixabay.com/photo/2021/08/05/07/55/daffodils-6523446__340.jpg",
//   "https://cdn.pixabay.com/photo/2021/08/09/00/00/bellflower-6532224__340.jpg",
// ];
// let index = 0;
// document.getElementById("pic").src = images[index];
// document.getElementById("nextPic").onclick = () => {
//   document.getElementById("pic").src = images[index];
//   index++;
//   images[index].style.left=`${move++}px`

//   if (index == images.length) {
//     index = 0;
//   }
// };
// document.getElementById("previousPic").onclick = () => {
//   document.getElementById("pic").src = images[index];
//   index--;
//   if (index < 0) {
//     index = images.length - 1;
//   }
// };

// --------------------------------------------9
// var move=0
// var a =window.setInterval(()=>{
//     title.style.left=`${move++}px`
// if (move>10) {
//     window.clearInterval(()=>{
//         a()
//     })

// }
// },50)
