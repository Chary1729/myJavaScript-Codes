let myobject=
{
    "Name":"somedonkey",
    "email":"somedonkey@gmail.com",
    "phone":"Moneyhiests",
    "Address":""
}
console.log(myobject.Name)
let mycalling=function (object)
 {
   return `your Name is: ${object.Name} and your email id is:${object.email}` 
}
console.log(mycalling(myobject))
