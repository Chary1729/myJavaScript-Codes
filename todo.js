myarray=[]
myarray.push("Eating")
myarray.push("Sleeping")
myarray.push("Eating")
for(let i=0;i<myarray.length;i++)
{
    console.log(`Hey you are ${myarray[i]} at : ${i+1} pm `)

}
myarray.forEach(function(item,index)
 {
    console.log(`Hey you are ${item} at : ${index+1} pm`)
    
});