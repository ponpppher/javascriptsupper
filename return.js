function add(i, j){
    const sum = i + j;
    return sum;
}

console.log(add(5,5));


function isOverTen(i){
    if (i >= 10){
        return true;
    }else{
        return false;
    }
};

console.log(isOverTen(10));
console.log(isOverTen(8));

function divide(i, j){
    if (j === 0){
        return "error"
    }else{
        return i / j;
    }
};

console.log(divide(2, 5));
console.log(divide(2, 0));

function showResult(i, j, conputeFunc){
    const result = conputeFunc(i,j)
    if (result ==="error"){
        return result;
    }else{
        return `${result * 100}パーセントやで`
    }
}

console.log(showResult(2,3, divide));


function add (i,j){
    tmp=i + j;
    if (tmp < 50){
        return "50より小さい";
    }else{
        return "50より大きい";
    }
        
}

console.log(add(1,1));
console.log(add(25,30));