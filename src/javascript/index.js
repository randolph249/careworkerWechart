var Parent=function(name){
  this.name=name
};
Parent.prototype.sayName=function(){
  var a;
  return this.name
};

var Child=function(name){
  Parent.call(this);
};
Child.prototype.sayName=function(){
  return 'I \'m a child,And my name is:'+this.name;
};
