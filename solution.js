const obj = {
  value: 42,
  getValue:function(){
    return this.value;
  }
};

const getValue1 = ()=> obj.getValue();
console.log(getValue1());

const getValue = obj.getValue.bind(obj);
console.log(getValue());
console.log(obj.getValue());
