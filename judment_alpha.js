function get_achievement(points){
    let data = points;
    let total = function(data){
        let sum = 0;
        data.forEach(function(elm){
            sum += elm;
        })
        return sum;
    }
    let total_result = total(data)
    let max_points = 500;
    let judge_range=[0.8,0.6,0.4].map((value) => value * max_points);
    let rank = ['A', 'B', 'C', 'D']
    let result_rank;
    switch(true) {
        case total_result > judge_range[0]:
            result_rank = rank[0];
            break;
        case total_result > judge_range[1]:
            result_rank = rank[1];
            break;
        case total_result > judge_range[2]:
            result_rank = rank[2];
            break;
        default:
            result_rank = rank[3];
            break;
    }
    return result_rank;
}

function get_pass_or_failture(points){
    let data = points;
    let result = data.some(function(value){
        return value < 60
    })
    if (result){
        return "不合格です。";
    }else{
        return "合格です。";
    }
}

function judgement(points){
    let achievement = get_achievement(points)
    let pass_or_failture = get_pass_or_failture(points)
    
    console.log(`あなたの成績は${achievement},${pass_or_failture}`);
}
let points =[60,60,60,8,70,80]
judgement(points)