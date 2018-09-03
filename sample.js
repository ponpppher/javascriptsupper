function scope_test01(x){
    return x + 6;
}

console.log(scope_test01(4));

// これは動かん
//console.log(scope_test01(x));

let x = 3;

function scope_test02(){
    console.log(x);

// undifined
//    console.log(y);
};

scope_test02();

let y = 3;