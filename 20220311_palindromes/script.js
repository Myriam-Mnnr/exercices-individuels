//Check if date is valid 
function isValideDate(date) {

    //Check the pattern (expression rationnelle + test)
    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(date))
        return false;

    //Turn array of strings to array of numbers 
    let array = date.split('/');
    let day = Number(array[0]);
    let month = Number(array[1]);
    let year = Number(array[2]);

    //Check the ranges of month and year 
    if (year < 999 || year > 9999 || month == 0 || month > 12) {
        return false;
    }

    //Check the range of day 
    if (maxDaysInMonth(day, month, year) == false) {
        return false;
    }

    return true;
}


function maxDaysInMonth(day, month, year) {
    var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    //Leap years 
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthDays[1] = 29;

    //Check the range of the day
    if (day > 0 && day <= monthDays[month - 1]) {
        return true;
    } else {
        return false;
    }
}


console.log(isValideDate("11/03/2022"));



//Check if date is palindrome 
function isPalindrome(date) {
    if (isValideDate(date) == false) {
        return "Date non valide";
    }

    let array = date.split('');
    newArray= array.filter(string => string!== "/");
    let firstArray = newArray.join(''); 
    let secondArray = newArray.reverse().join(''); 

    if(firstArray == secondArray){
        return true; 
    } else {
        return false; 
    }
}

console.log(isPalindrome("11/02/2011")); 


//Turns a date to a string  
function dateToString(date) {
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = String(date.getFullYear());
    return dd + '/' + mm + '/' + yyyy; 
}


//Get future palindromes 
function getNextPalindromes(x){
    let date = new Date(); 
    let dateString; 
    let palindrome = []; 

    while(palindrome.length < x){
        dateString = dateToString(date);
        if(isPalindrome(dateString) == true){ 
            palindrome.push(dateString); 
        }
        date.setDate(date.getDate()+1); 
    }

    return palindrome; 
}

console.log(getNextPalindromes(8)); 

