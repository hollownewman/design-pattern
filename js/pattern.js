//设计模式P34
var ShowMessage = function(txt){
    this.content=txt;
}
ShowMessage.prototype.show = function(){
  console.log("弹出窗口");
}
var showM= new ShowMessage("不能超过20字符");


var ShowPassword = function(txt){
    this.content=txt;
}
ShowPassword.prototype.show = function(){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  console.log("弹出窗口1");
}
var showP= new ShowPassword("密码不20字符");
//showM.showDig();

//P37
var PopFactory = function(name){
  switch(name){
    case 'alert':
    return new ShowMessage();
    case 'confirm':
    return new ShowPassword();
  }
}

PopFactory("confirm").show();
  
//P42

var Demo = function(){
  console.log(this);
  if(!(this instanceof Demo)){
    return new Demo();
  }
}
Demo.prototype.show = function(){
  console.log("show");
}
var d = Demo();
d.show();
