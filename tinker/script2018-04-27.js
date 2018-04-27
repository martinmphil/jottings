var double = x => x * 2;

var a = R.map(double, [1, 2, 3]);

console.log(a);

// grabbing a value from within an arg array
function fn ([x,y,...args] = []){
  console.log(y);
}

fn ([1,2,3]); //2
