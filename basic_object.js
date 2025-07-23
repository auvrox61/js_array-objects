let info={
    name : "Khandaker Musabbir Ashad",
    age : 21,
    uni : "IUT",
    country : "Bangladesh"
};

info.city="Dhaka";
info.birthplace="Rangpur";
delete info.age;

for(let key in info){
    console.log(key+":"+info[key]);
}