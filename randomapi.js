let myObject=
{
    id:"36111273",
    Name:"uday Kumar",
    Company:"Cognizant Technology Solutions",
    Locality:"Chennai",
    myfunction:function()  
    {
     return `employee who's id is ${this.id} and Named ${myObject.Name} is working in Company
     ${myObject.Company} in the Locality ${myObject.Locality}`    
    }
    
}
// let myfunction=function(myObject) 
// {
//    return `employee who's id is ${this.id} and Named ${myObject.Name} is working in Company
//    ${myObject.Company} in the Locality ${myObject.Locality}`    
// }
console.log(myObject.myfunction())