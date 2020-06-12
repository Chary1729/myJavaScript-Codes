let GradeCalc = function(CurrentMarks,TotalMarks)
{
    let Percentage= (CurrentMarks/TotalMarks)*100
    let Grade=""
    if(Percentage>=90)
    {
        // console.log(`Your Grade is :A`)
        Grade="A"
    }
    else if(Percentage>=70)
    {
        // console.log("Your Grade is :B")
        Grade="B"
    }
    else if(Percentage>=50)
    {
        // console.log("Your Grade is :c")
        Grade="C"
    }
    else
    {
        // console.log("You Are Fail")
        Grade="D"
    }
    return Grade
    
}
// GradeCalc(75,100)
console.log(GradeCalc(75,100))
// fucntion(5,6)
// printf("the value is %d" fucntion(5,6));