current=60
total=70
let marks= function(current,total)
{
    let mypercent=(current/total)*100
    let myGrade=''
    if(mypercent>=90)
    {
      myGrade='A'
    }
    else if(mypercent>=70)
    {
       myGrade='B'
    }
    else if(mypercent>=50)
    {
        myGrade='C'
    }
    else
    {
        myGrade='D'
    }
    return `Your Grade is: ${myGrade} and the Percentage is ${mypercent}`
    
}
let mymarks=prompt("Enter your marks")
let totalMarks=prompt("Enter your TotalMarks")
let yourResult=marks(mymarks,totalMarks)
console.log(yourResult);
cons