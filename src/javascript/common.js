'use strict';
var moduleA={
  set:function(name){
      if(name==='xianqing'){
        return false;
      }


      return true;
  },
  get:function(){}
};

var animal=function(){

}

var dog=new animal();
exports.setName=function(name){

  moduleA.set(name);
  return dog;
};
exports.getName=function(name){
  return moduleA.get(name);
};
