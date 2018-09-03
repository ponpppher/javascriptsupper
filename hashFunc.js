const dicMember = {position:{ceo:"noro",aiTeacher:"nakao",railsTeacher:"shibata"}}


console.log(dicMember["position"]["ceo"]);
console.log(dicMember.position.ceo);

const blogs=[
    {title:"it's hot today.",
     content:"ganbaruzoi"},
     {title:"今日の仕事終われば",
    content:"明日から両行"},
    {title:"asunantoka",
    content:"do programming"}

]

console.log(blogs[0]['title'])

let letdicMember = {ceo:'noro',aiTeacher:'nakao',railsTeacher:'shibatt'}

letdicMember['menter']='matsumoto';

console.log(letdicMember)


let test=[{subject:"math",points:70},{subject:"english",points:50},{subject:"society",points:80}]

test.push({subject:"science",points:100});

console.log(test[3].points);