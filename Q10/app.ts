// <======= Q10 ==========>
var character:any=prompt("Enter the uppercase or lowercase alphabet. ")
if(character >= "a" || character >= "z" && character >= "A" || character >= "Z"  ){
console.log(character,"character is lowercase alphabet.")
}
else{
console.log(character,"character is uppercase alphabet.")
}
// <========== Q11 ==================>
var week:any=prompt("Enter the Week")
var NewWeek:number=parseInt(week)
var totalDays:number=NewWeek*7;
console.log("Number of Weeks ",NewWeek,"total week days is",totalDays) 