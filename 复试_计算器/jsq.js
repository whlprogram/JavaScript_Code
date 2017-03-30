var str = "";
var str_fir = ""; //第一个数
var yunSuanFu = ""; //运算符
var str_sec = "";  //第二个数
//关闭按钮off
function  fun_off(){
    window.close();
}
//0-9按钮
function fun_0(){
	var txt =  document.getElementById('text_1');
	txt.value += "0";
}
function fun_1(){
	var txt =  document.getElementById('text_1');
	txt.value += "1";
}
function fun_2(){
	var txt =  document.getElementById('text_1');
	txt.value += "2";
}
function fun_3(){
	var txt =  document.getElementById('text_1');
	txt.value += "3";
}
function fun_4(){
	var txt =  document.getElementById('text_1');
	txt.value += "4";
}
function fun_5(){
	var txt =  document.getElementById('text_1');
	txt.value += "5";
}
function fun_6(){
	var txt =  document.getElementById('text_1');
	txt.value += "6";
}
function fun_7(){
	var txt =  document.getElementById('text_1');
	txt.value += "7";
}
function fun_8(){
	var txt =  document.getElementById('text_1');
	txt.value += "8";
}
function fun_9(){
	var txt =  document.getElementById('text_1');
	txt.value += "9";
}
function fun_(){ //小数点
	var txt =  document.getElementById('text_1');
	txt.value += ".";
}

function fun_add(){
	var txt =  document.getElementsByName('text_1');
	console.log("txt: "+txt);
	console.log("txt.value: "+txt.value);
	str_fir = txt.value;
	console.log("str_fir: "+str_fir);
	txt.value = '';
	yunSuanFu = "+";
}
function  dengyu(str_fir,str_sec){
	console.log(str_fir);
	var txt =  document.getElementsByName('text_1');
	if(yunSuanFu == ""){
		txt.value = 0;
	}else if(yunSuanFu == "+"){
		txt.value = parseFloat(str_fir) + parseFloat(str_sec);
	}else if(yunSuanFu == "-"){
		txt.value = parseFloat(str_fir) - parseFloat(str_sec);
	}else if(yunSuanFu == "*"){
		txt.value = parseFloat(str_fir) * parseFloat(str_sec);
	}else if(yunSuanFu == "/"){
		txt.value = parseFloat(str_fir) / parseFloat(str_sec);
    }
}
function fun_text(){
	var   str= '012.345 ';
	var   x   =   str-0;
	console.log(x);
	x   =   x*1;
	console.log(x);
}