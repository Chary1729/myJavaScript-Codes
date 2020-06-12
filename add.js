let myadd=function() 
{
 let myop1=document.getElementById("op1").value
 let myop2=document.getElementById("op2").value
 var a=parseInt(myop1)
 var b=parseInt(myop2)
 
 let add=a+b
document.getElementById("someID").innerHTML=add
// alert(`Addition value is:${add}`)
// console.log(add)
}
// myadd(5,6)
let mysub=function() 
{
 let myop1=document.getElementById("op1").value
 let myop2=document.getElementById("op2").value
 var a=parseInt(myop1)
 var b=parseInt(myop2)
 
 let sub=a-b
document.getElementById("myid").innerHTML=sub
// alert(`Addition value is:${add}`)
// console.log(add)
}
