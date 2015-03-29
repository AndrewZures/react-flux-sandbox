var group  = [1,2,3,4,5];

var hello = (num) => {
  return num + 3;
};

var hi = (num, hello) => {
  return hello(num);
};

var result = group.map(k => hi(k, hello));
result.map(v => console.log(v));
