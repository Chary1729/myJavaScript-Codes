class TestMeetings
{
let meetings=0;
let meetingsDone=0;
addMeeting(meets) 
{
    this.meetings=this.meetings+meets
}
doneMeet(meets)
{
    this.meetingsDone=this.meetingsDone+meets
}
summaryMeet()
{
    console.log(`My on Meetings are ${this.meetings}`)
}
}
myobject= new TestMeetings()
myobject.addMeeting(5)
myobject.doneMeet(4)
myobject.summaryMeet()
