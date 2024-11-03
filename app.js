// CH # STRING METHODS


// Question# 01

var firstname=prompt("Enter first name")
var secondname=prompt("Enter second name")
var fullname=(firstname+secondname)
document.write(`User Complete Name is ${fullname}`)


// Question# 02

var input_mobileName=prompt("Input your favorite mobile phone model.")
document.write(`My favourite mobile phone is: ${input_mobileName}</br>Length of string: ${input_mobileName.length}</br><hr>`)

// Question# 03

var country="Pakistani"
document.write(`String: ${country}</br>index of "n": ${country.indexOf("n")}</br><hr>`)

// Question# 04

var greet="Hello world"
document.write(`String: ${greet}</br>Last index of "l": ${greet.lastIndexOf("l")}</br><hr>`)

// Question# 05

var countryName="Pakistani"
document.write(`String: ${countryName}</br>Character at index  "3": ${countryName[3]}</br><hr>`)


// Question# 06

var fullname=(firstname.concat(secondname))
alert(fullname)

// Question# 07

var city="Hyderabad"
document.write(`City: ${city}</br>`)
var replace=city.replace("Hyder","Islam")

document.write(`After replacement: ${replace}</br><hr>`)

// Question# 08

var message="“Ali and Sami are best friends. They play cricket and football together.”"
document.write(`Message: ${message}</br>`)
var replacement=message.replaceAll("and","&")

document.write(`After replacement: ${replacement}</br><hr>`)

// Question# 09

var val="472"
document.write(`Value: ${val}</br>`)
document.write(`Type : ${typeof(val)}</br>`)
var to_int=parseInt(val)
document.write(`Value: ${parseInt(to_int)}</br>`)
document.write(`Type : ${typeof(to_int)}</br><hr>`)

// Question# 10

var case1=prompt("Input word to Convert in capital letter")
document.write(`User input : ${case1}</br>`)
document.write(`Upper case : ${case1.toUpperCase()}</br> <hr>`)

// Question# 11

var case2=prompt("Input something and  convert it into title case")
document.write(`User input : ${case2}</br>`)
document.write(`Title case : ${case2.slice(0,1).toUpperCase()+case2.slice(1).toLowerCase()}</br><hr>`)

// Question# 12

var num = 35.36 ;
document.write(`Number: ${num}</br>`)

var string=num.toString()
document.write(`Result: ${string.replace(".","")}</br><hr>`)



// Question# 13

var userInput=prompt("Enter username")
var found = false; 


for (var i = 0; i < userInput.length; i++) {
    if (userInput[i].charCodeAt() === 33|| userInput[i].charCodeAt() == 44 || userInput[i].charCodeAt() === 46 || userInput[i].charCodeAt() === 64) {
        found = true;
      
        break; 
    }
}

if (found) {
  alert("Please enter a valid username");
} else {
    alert("Your username "+userInput+" registered");
}


// Question# 14

var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var bakery = prompt("Welcome to Imran's Bakery. What do you want to order, sir/ma'am?");

var found = false; 
var itemIndex; 


for (var i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === bakery.toLowerCase()) {
        found = true;
        itemIndex = i;
        break; 
    }
}

if (found) {
    alert(bakery + " is available at index " + itemIndex + " in our bakery.");
} else {
    alert("We are sorry, " + bakery + " is not available in our bakery.");
}


// Question# 15

var pass = prompt("Enter password");

var isValid = false;

if (pass.length >= 6) {
    if (!(pass[0].charCodeAt() >= 48 && pass[0].charCodeAt() <= 57)) {
        var hasLetter = false;
        var hasNumber = false;

        for (var i = 0; i < pass.length; i++) {
            var charCode = pass[i].charCodeAt();
            if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
                hasLetter = true;
            }
            if (charCode >= 48 && charCode <= 57) {
                hasNumber = true;
            }
        }

        isValid = hasLetter && hasNumber;
    }
}

if (isValid) {
    alert("Password: " + pass);
} else {
    alert("Please enter a valid password");
}

// Question# 16

var universityName = "University of Karachi";

var universityArray = universityName.split("");
for(var i=0;i<universityArray.length;i++){
document.write( universityArray[i]+"</br><hr>"  )
}

// Question# 17

var userinput=prompt("Enter word")

document.write(`User Input: ${userinput}</br>`)
var lastword=userinput[userinput.length-1];

document.write(`Last character of  Input: ${lastword}</br><hr>`)


// Question# 18

var sentence="The quick brown fox jumps over the lazy dog"
var tolower_sent=sentence.toLowerCase()
var count=0;
var words=tolower_sent.split(" ")
for(var i=0;i<sentence.length;i++){
    if(words[i]==="the"){
        count++

    }
}
document.write(`Text: ${sentence}</br>`)

document.write(`There are ${count} occurrences of word “the” </br><hr>`)
