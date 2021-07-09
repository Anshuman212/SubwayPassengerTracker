// let firstBatch=5
// let count =firstBatch //declaration of a variable
// console.log(count) //log the variable to the console and print it
// let myAge =20
// console.log(myAge)

//1.create two variables ,myAge and humanDogRatio
//2. Multiply them together and store in myDogAge
//3. log myDogAge to the console
// let myAge=19;
// let humanDogRatio=7
// let myDogAge=myAge*humanDogRatio
// console.log(myDogAge)

//Js starts from the start and uses latest value 
//hence few variables can be reassigned

//1.)create a variable bonusPoints,Initialize to fifty
//1.)increase it to 100 dec to 25 and then increase to 78
// let bonusPoints =50
// bonusPoints=bonusPoints+50
// console.log(bonusPoints)
// bonusPoints=bonusPoints-75
// console.log(bonusPoints)
// bonusPoints=bonusPoints+53
// console.log(bonusPoints)


//1.)create a function that logs the number 42 to the console
// call/invoke the funtion
// function logs(){
  //   console.log(42)
  // }
  //to call/invoke a function just write it's name
  // logs()
// let lap1=34
// let lap2=35
// let lap3=36
// //create the function that logs the sum of the above variables]
// function mysum(){
  //  let lapsum = lap1+lap2+lap3
  //   console.log(lapsum) -or- console.log(lap1+lap2+lap3)
// }
// mysum() // calling the lapsum function
// let lapComplete =0
// //create a function that increments the lapComplete variable with one
// //run it three times
// function incLap(){
  // lapComplete = lapComplete + 1
  // }
  // incLap()
  // incLap()
  // incLap()
  // console.log(lapComplete)

  //----------------Working with strings--------------
  //  let username ="User" //-or- can use single quote 'string'
  //  let message ="You have three new messages"
  //  //concating two strings in js we use + operator
  //  console.log(message+ ", " + username + "!")
  //  let messageToUser =message+ ", " + username + "!!"
  //  console.log(messageToUser)
  //-----challenge------
  //1. Create two variables ,name and greeting .The name variable should store your name
  //the greeting should store e.g. "Hi, my name is "
  //2. Create a third variable ,myGreetings, that concats the two strings
  //3. Log myGreeting to the console
  //--solutiion--
  // let name = "myName"
  // let greeting = "Hi, my name is "
  // let myGreetings = greeting + name
  // console.log(myGreetings)
  //=================
  //In a wrestling game between a string and a number string wins
      //-----String number challenge------
  // console.log(4 + 5) // 9
  // console.log("2" + "3") // 23
  // console.log("5" + 1) // 51
  // console.log(100 + "100") // 100100
  //------------------------
  // let welcomeEl=document.getElementById("welcome-el")
  // let name ="myName"
  // let greeting = " MY Greeting is  "
  // welcomeEl.innerText=greeting + name
  //Add an emoji to the end 😀😀
  //write the code below line 84
  //Hint : count = count + 1
  // name = name + "😀😀"
  // welcomeEl.innerText = greeting + name
  //--or--
  //using only welcomeEl.innerText
  // welcomeEl.innerText  +="😀😀"
  //----------counter------------
  //initialise the count as 0
  // listen for the clicks on the increment button..in the HTML define an attribute on click..
  //increment the count variable when the button is clicked
  // change the count-el in the HTML to reflect the new count
  
  //grab the save-el para and store in a variable saveEl
let saveEl = document.getElementById("save-el")

  let count = 0
   //taking the html element we use document.getElementById("count-el")
   let countEl=document.getElementById("count-el") //passing arguments using ""
   //the document is of data type objeect
  function increment() {
    console.log("clicked")
    count = count + 1 //--or count+=1
    //modifying we use innerText=ner value...group both getting and modifying by using '.'
    //change the count-el in the HTML to reflect the new count
    countEl.textContent= count
   console.log(count) //passing argument to the function log() 
  
}
  //.textContent is a good alternative of innerText it shows everything whereas innerText only shows human readable things
 
//document.getElementById("count-el") is also referred to as working with
//The DOM(Document Object Model) aka how you use js to modify a website

//1. Create a function save() which logs out the count when it's called

function save()
{
  //2. Create a variable that contains both count and the dash seperator ,i.e. "12-"
  //3.  render thr variables in the saveEl using innerText
  //NB: Make sure to not to delete the exisiting content of the para

let CountnOper= count +" - "
  saveEl.textContent+=CountnOper

  console.log(count)
   countEl.textContent  = 0
  count = 0
} 