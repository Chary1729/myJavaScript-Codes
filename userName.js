let userEmail=""
let passWord=""
let UserCheck= function(usermail) 
{
    if(usermail.includes('@') && usermail.includes(123) && usermail.length>=6)
    {
     console.log("UserEmail Conditions Met")
    }
    else
    {
        console.log("UserEmail Conditions Not Met")
    }
}
let passCheck=function(pass)
{
    if(pass.includes(123) && pass.includes('@!#$%^') && pass.length>6)
    {
        console.log("Hey your password is Strong Password")
    }
    else
    {
        console.log("WEak Password")
    }
}
UserCheck("uday123@gmail.com")
passCheck("123@!adfiud@!#$%^")
