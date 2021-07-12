// おみくじを作る
// 比較演算子  ==  >  <   >=  <=  !=
// 大吉  中吉  小吉  凶  大凶
process.stdin.resume();
process.stdin.setEncoding('utf8');
var omikuji =parseInt(Math.random()*10)+1

//console.log(omikuji);
if (omikuji==1)    {
    console.log("大吉");
}else if(omikuji==2){
    console.log("中吉");
}else if(omikuji<=4){
    console.log("小吉");
}else if(omikuji<=7){
    console.log("凶");
}else{
    console.log("大凶");
}
