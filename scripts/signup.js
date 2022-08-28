

let users=JSON.parse(localStorage.getItem('user'))||[];
    
class User{
    constructor(){
        
    }

    signup(a,b,c,d,e,f){
        this.email=a;
        this.password=b;
        this.gender=c;
        this.birth_date=d;
        this.height=e;
        this.weight=f;
        users.push(this)
    
    }
}
let getdata=()=>{

let e=document.getElementById('email').value;
let pass=document.getElementById('pass').value;
let confirm_pass=document.getElementById('confirm_pass').value;
let male=document.getElementById('male');
let female=document.getElementById('female');
let date=document.getElementById('date').value;
let month=document.getElementById('month').value;
let year=document.getElementById('year').value;
let foot=document.getElementById('foot').value;
let inch=document.getElementById('inch').value;
let cm=document.getElementById('cm').value;
let wt=document.getElementById('wt').value;
let unit=document.getElementById('units').value;

let password;
let email;
if(e.length>0){
    email=e;
}else{
    alert('Enter email')
    return
}

if(pass===confirm_pass){
    password=pass;
    
}else{
    alert('Enter password again')
    return
}

let gender;
if(male.checked==true&&female.checked==true){
    alert('Select only one gender')
    return
}else if(male.checked==true){
    gender='Male'
}else if(female.checked==true){
    gender='Female'
}else{
    alert('Select gender')
    return
}

let birth_date;
if(year===""){
    alert('Enter birth details')
    return
}else {
    birth_date=date+" "+month+" "+year
}

let height;

if(cm.length===0){
    height=foot+" foot"+" "+inch+' inch'
}else{
    height=cm+" cm"
}
let weight;
if(wt.length==0){
    alert('Enter weight')
    return
}else{
weight=wt+" "+unit
}
// if(email.length===0||password.length===0||gender.length===0||year.length===0||foot.length===0||cm.length==0||wt.length===0){
//    return
// }else{
    let x=new User();
x.signup(email,password,gender,birth_date,height,weight)
console.log(users)
window.location.href="login.html"
alert("signup successfull")
localStorage.setItem("user",JSON.stringify(users))
// }





// function formingdataobj(a,b,c,d,e,f){
//     this.email=a;
//     this.password=b;
//     this.gender=c;
//     this.birth_date=d;
//     this.height=e;
//     this.weight=f;
// }

// let data=new formingdataobj(email,password,gender,birth_date,height,weight)
// // console.log(data)
// alert('Sign Up successful')
// users.push(data);
// localStorage.setItem("user",JSON.stringify(users))
// window.location.href='login.html'
}