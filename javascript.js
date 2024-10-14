// Variable declaration -> var,let and const

// var zubarirName_change = "zubair"
// var zubarirName_change ="hasan"
// alert(zubarirName_change)

// let zubarirName_change = "zubair"
// alert(zubarirName_change)

// const zubarirName_change = "zubair"
// alert(zubarirName_change)

// Hoisting
// var zubarirName_change = "zubair"
// zubarirName_change ="hasan"
// alert(zubarirName_change)


// temperal dead zone

// alert(zubarirName_change)
// var zubarirName_change = "zubair"


// alert(zubarirName_change)
// const zubarirName_change = "zubair"

// alert(zubarirName_change)
// let zubarirName_change = "zubair"


// Data types -> string,integer,float, boolean, symbols, and Bigint

"dfghjki12.0+09876"
20
30
4.5
0.5

// let firstname = "zubair &&I(---=r325465441"
// alert(firstname)

// let age = 20;
// alert(age)

// let pointingValue = 12.65;
// alert(pointingValue)

// let myname = "zubair";
// let anothername = "hasan";

// alert(myname == anothername)

// let symbols = ".,;?:"

// var bigints = BigInt(66419946984651651654654)
// console.log(bigints);

// var conversions = Number(bigints)
// console.log(conversions);

// var bigconcept =  BigInt(5456465450262)
// console.log(bigconcept)

// Operators -> Arithmetic operator, Assignment Operator, Logical Operator, Conditional Operator, and Bitwise operator


// 1. Arithmetic Operator -> +,-,*,/ and %

// alert(5+5)
// alert(5-5)
// alert(5*5)
// alert(5/5)
// alert(14%5)


// 2. Assignment operator -> =

// let myname = "prem"
// var age = 10
// alert(age)

// 3. Logical Operator -> && || !

// alert((5==5)&&(6=="6"))
// alert((5==5)||(6=="6"))
// alert(!((5==5)&&(6=="6")))



// 4. Conditional Operator -> >,<,>=,<=,==,===,!==

// alert(5>5)
// alert(5<5)
// alert(5>=5)
// alert(5<=5)
// alert(5==="5")
// alert(5!==6)
// const myname = Number(prompt("enter your the firstnumber"))
// const secondnumber = Number(prompt("enter your secondnumber"))
// let additions = myname+secondnumber
// alert(additions)
// alert("Result:"+(myname-secondnumber))
// alert(myname*secondnumber)
// alert(myname/secondnumber)
// alert(myname%secondnumber)

// let email = prompt("enter your email");
// let password = prompt("enter your password");
// if (email == "prem@gmail.com" & password == 123) {
//     alert("your logged in successfully");
// }
// else{
//     alert("your email and password is wrong")
// }

// if-else if statement


// let mysalary = Number(prompt("enter your salary"));

// if (mysalary >=30000  && mysalary <=60000) {
//     alert("eligible for 3 lakshs")
// } 
// else if (mysalary >60000  && mysalary <=100000) {
//     alert("eligible for 6 lakshs")
// } 
// else if (mysalary >100000  && mysalary <=500000) {
//     alert("upto 15 lakhs eligible")
// } 
// else {
//     alert("not eligible. please contact customer care.")
// }


// let mysalary = Number(prompt("enter your salary"));

// switch (true) {
//     case (mysalary >= 30000 && mysalary <= 60000):
//         alert("eligible for 3 lakshs")
//         break;
//     case (mysalary > 60000 && mysalary <= 100000):
//         alert("eligible for 6 lakshs")
//         break;
//     case (mysalary > 100000 && mysalary <= 500000):
//         alert("upto 15 lakhs eligible")
//         break;
//     default:
//         alert("not eligible. please contact customer care.")
//         break;
// }

// let havingamount = Number(prompt("enter your having amount"));

// switch (true) {
//     case havingamount == 50:
//         alert("kushka")
//         break;
//     case havingamount == 150:
//         alert("chicken biriyani")
//         break;
//     case havingamount == 200:
//         alert("grills")
//         break;
//     default:
//         alert("get out of my shop.")
//         break;
// }


// if (havingamount == 50) {
//     alert("kushka")  
// }
// else if(havingamount == 150){
//     alert("chicken biriyani")
// }
// else if(havingamount == 200){
//     alert("grills")
// }
// else {
//     alert("get out of my shop.")
// }
// for, for of and for in, while and do-while statements



// for
// let myname = prompt("enter your name")
// alert(myname.length)
// for (let index = 0; index < myname.length; index++) {
//    console.log(myname[index]);
    
// }
// for (const index of myname) {
//     console.log(index);  
// }

// calculator
// let whattable = Number(prompt("enter your table"))
// for (let index = 1; index <= 10; index++) {
//     console.log(index*whattable); 
// }


// validations

// let emails = prompt("enter your email id")
// if (emails == "" || emails == undefined || emails == null) {
//     alert("please fill the details")
// } else {
//     alert("entered data successfully.")
// }

// let password = prompt("enter your password")

// if (password == "" || password == undefined || password == null) {
//     alert("please fill the details") 
// } else {
//     alert("entered data successfully.")  
// }

// for - in 

// let mydetails = {
//     myname:"prasanth",
//     myage:20
// }

// for (const key in mydetails) {
//     console.log(mydetails[key]);
// }
//     if (mydetails.myname == "prasanth" && mydetails.myage == 20) {
//         alert("myname")
//     } else {
//         alert("error")
//     }

// while
// let i = 0
//  do{
//     console.log(i);
//     i++  
// }while (i<0)

// Array -> methods .
// var zubairname = ["zubair","hasan"]
// console.log(zubairname);
// const zubairname = []
// zubairname[0]="zubair";
// zubairname[1] = "hasan";
// console.log(zubairname);



// var zubairname = ["zubair","hasan",1,2,102.25,true,'fb',false]
// var zubairname1 = [10,2,3,5,6,8]

// console.log(zubairname);
// console.log(zubairname.join('.'));
// console.log(zubairname.sort());
// console.log(zubairname.reverse());
// zubairname.push('prem')
// zubairname.unshift('ak')
// zubairname.splice(3,5,"lakshmi")
// zubairname[3] ="lakshmi"
// zubairname.pop()
// zubairname.shift()

// console.log(zubairname1.concat(zubairname));
// multi-dimension array.
// var multidimension = [['zubair','asan','lakshmi','ak','prem'],[5,2,2,3,6,5]]
// console.log(multidimension.flat());

// charat,indexof,match,replace, and trim.

// var sorts = ["ddd",10,2,5,6,"dddddddd"];
// sorts.push('lakshmi')
// console.log(sorts);


// let myname = "zubair";
// for (let index = 0; index < myname.length; index++) {
//    console.log(myname[index]);  
// }
// console.log(myname.charAt(5));
// console.log(myname.indexOf('a'))
// console.log(myname.indexOf('u'));
// console.log(myname.match('a'));
// console.log(myname.replace('a',''));
// console.log(myname.trim())
// console.log(myname.toLocaleLowerCase());
// console.log(myname.toLocaleUpperCase());


// Timing Events -> setTimeOut, and setInterval



// setInterval(() => {
    // let Todaysdata = new Date();
    // console.log(Todaysdata);
    // let tagcall = document.getElementById("time");
    // console.log(tagcall);
    // tagcall.innerHTML = Todaysdata
    
// }, 1000);

// setInterval(() => {
    // let todaysdatetime = new Date()   
    // let tagusingidmethod = document.getElementById("time");
    //         todaysdatetime.setHours(22)
    //     todaysdatetime.setMinutes(50)
    //     todaysdatetime.setSeconds(40)
    //     todaysdatetime.setDate(5)
    // tagusingidmethod.innerHTML = todaysdatetime.getHours()+":"+todaysdatetime.getMinutes()+":"+todaysdatetime.getSeconds()+(todaysdatetime.getHours() >=12 ? "PM":"AM")
    // if (todaysdatetime.getHours() >=12) {
    //     tagusingidmethod.innerHTML = todaysdatetime.getHours()+":"+todaysdatetime.getMinutes()+":"+todaysdatetime.getSeconds()+"PM"
   
    // } else {
    //     todaysdatetime.setHours(22)
    //     todaysdatetime.setMinutes(50)
    //     todaysdatetime.setSeconds(40)
    //     todaysdatetime.setDate(5)
    //     console.log(todaysdatetime.getDate()+'-'+(todaysdatetime.getMonth() == 9 ? 10 : 9) +'-'+todaysdatetime.getFullYear());
        
    //     tagusingidmethod.innerHTML = todaysdatetime.getHours()+":"+todaysdatetime.getMinutes()+":"+todaysdatetime.getSeconds()+"AM"
        
    // }
     
// }, 1000);


// Function
// function hasan() {
//     let myname = "hasan";
//     return myname
    // alert(myname) 
    // let anotehrename = 10;
    // alert(anotehrename)
// }
// hasan()
// let excution =hasan();
// alert(excution);
// function hasan(dd,ddd) {
//     alert(ddd)
//     alert(dd)
// }
// hasan(10,"hasan")
// let myname = "hasan"
// function hasan(dd) {
//     alert(dd)
// }
// hasan(myname)


// DOM -> Document Object  Moduling or Maninpulation


// let tagcall = document.getElementsByClassName("time")[0];
// tagcall.innerHTML = "Hasan"


// CRUD - Create Read Update Delete Process.

let inputtagcalling = document.getElementById("inputtag");
let buttoncalling = document.getElementById("button");
let datadisplaycalling = document.getElementById("displaydata");


buttoncalling.addEventListener("click",function task(){
    console.log(inputtagcalling.value);
    let newdivcreate = document.createElement("div");
    console.log(newdivcreate);
    datadisplaycalling.appendChild(newdivcreate);

    let newinputtag = document.createElement("input");
    newinputtag.value= inputtagcalling.value;
    newinputtag.setAttribute("readonly","readonly")
    newdivcreate.appendChild(newinputtag)



    let editbutton = document.createElement("button");
    editbutton.innerHTML="Edit"
    newdivcreate.appendChild(editbutton)


    editbutton.addEventListener("click",function task(){

        newinputtag.removeAttribute("readonly","readonly")

    })

    
    let savebutton = document.createElement("button");
    savebutton.innerHTML="Save"
    newdivcreate.appendChild(savebutton)


    savebutton.addEventListener("click",function task(){

        newinputtag.setAttribute("readonly","readonly")

    })



    let deletbutton = document.createElement("button");
    deletbutton.innerHTML="Delete"
    newdivcreate.appendChild(deletbutton)


    deletbutton.addEventListener("click",function task(){
        newdivcreate.style.display="none"
    })
})
