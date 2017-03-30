function  test1(){
    //通过window弹出提示框
    window.alert('我是提示框');
}

function  test2(){
    //打开新窗口
    window.open('JavaScriptNode3_3_1.html');
}
function  test3(){
    //关闭窗口
    window.close();
}
function  test4(){
    //弹出一个对话框   第二个参数是输入框的默认值
    var r =  prompt('请输入你的名字','hahaha');
    console.log(r);
}
function  test5(){
    //弹出一个确认框
    var r =  confirm('你确定？');
    console.log(r);
}
function  test6(){
    //地址栏跳转
    location.href = 'JavaScriptNode3_3_1.html';
}
function  test7(){
    //延时定时器
   // var id = window.setTimeout('fun()',time);
    // var id = window.setTimeout(fun ,time);单引号和括号要同时存在或者消失
   // fun()是定时执行的方法
   // time为毫秒
    var id = window.setTimeout('test6()',1000);
}
function  test8(){
    //周期定时器
    // var id = window.setInterval('fun()',time);
    var id = window.setInterval('showTime()',1000);
}
function  showTime(){
    var sp = document.getElementById('tm');
    sp.innerHTML = new Date();
}