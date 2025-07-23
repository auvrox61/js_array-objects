let user=[
    {name : "James", age : "22"},
    {name : "McAteer", age : "20"},
    {name : "Hamza", age : "27"},
    {name : "Costacurta", age : "25"},
    {name : "Chhetri", age : "45"}
];

let sorted=user.sort((a,b)=>(a.age-b.age));

console.log(sorted);