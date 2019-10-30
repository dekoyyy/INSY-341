function toLetterGrade(grade) {
    // declaring variable
    var  gradeLength = grade.length; 
    var letterGrade = []; 
    var i = 0;
    // loop, goes on until i is bigger than the number of entries in the arrow 
    
    for (i = 0; i < gradeLength; i++) { 
        if (grade[i] >= 85) {
            
            letterGrade[i] = "A";
            
        } else if (grade[i] >= 80) {
            
            letterGrade[i] = "A-";
            
        } else if (grade[i] >= 75) {
            
            letterGrade[i] = "B+";
            
        } else if (grade[i] >= 70) {
            
            letterGrade[i] = "B";
            
        } else if (grade[i] >= 65) {
            
            letterGrade[i] = "B-";
            
        } else if (grade[i] >= 60) { 
            
            letterGrade[i] = "C+";
            
        } else if (grade[i] >= 55) {
            
            letterGrade[i] = "C";
            
        } else if (grade[i] >=  50) {
            
            letterGrade[i] = "D";
            
        } else {
            
            letterGrade[i] = "F";
            
        }
    }
    return letterGrade;
}


function toGradePoints(letter) {
    // declaring variables + initializing 
    
    var letterLength = letter.length; 
    var gradePoint = []; 
    var i = 0; 
    
    // loop, goes on until i is bigger than the number of entries in the arrow 
    for (i = 0; i < letterLength; i++) {
        
        if (letter[i] == "A") {
            gradePoint[i] = 4.0 ;
            
        } 
        else if (letter[i] == "A-") { 
            gradePoint[i] = 3.7 ;
            
         } 
         else if (letter[i] == "B+") { 
            gradePoint[i] = 3.3 ;
            
         } 
         else if (letter[i] == "B") { 
            gradePoint[i] = 3.0 ;
            
         } 
         else if (letter[i] == "B-") { 
            gradePoint[i] = 2.7 ;

         } 
         else if (letter[i] == "C+") { 
            gradePoint[i] = 2.3 ;
            
         } 
         else if (letter[i] == "C") { 
            gradePoint[i] = 2.0 ;
            
         } 
         else if (letter[i] == "D") { 
            gradePoint[i] = 1.0 ;
            
         } 
         else if (letter[i] == "F") { 
            gradePoint[i] = 0 ;
            
         } 
         else {
             gradePoint[i] = "undefined" ;
         }
    }
    
    return gradePoint;
}

function middle(word) {
    var wordLength = word.length; 
    var middleCharacter ; 
    var position ;
    var arr = [];
    
    // if word has even number of letters
    // dividing the length by 2 gives the index of the second 
    // letter +/- 1 so we can get the two middle ones
    if (wordLength % 2 == 0) {
        position = wordLength / 2; 
        middleCharacter = word.slice(position -1 , position + 1);
    }   
    // if word has odd even number of letters
    // turn word into array and take middle index 
    // middle index is found by dividing by 2 and rounding down
     else if (wordLength % 2 == 1) {
       position = Math.floor(wordLength / 2 ) ; 
       arr = word.split("");
       middleCharacter = arr[position];
    } 
    return middleCharacter;
}


function pig(string) { 
    var words; 
    var numberOfWords;
    var pigTranslation = ""; 
    var i = 0;
    var backToString;
    var firstLetter;
    var translationPart1;
    var translationPart2;
    var pigAy = "ay";

    // creating an array out of the string
    words = string.split(" ");
    
    // getting number of words 
    numberOfWords = words.length;
    
    // iterate through each word to change it into pig language
    for (i = 0; i < numberOfWords; i++) {
        
        // convert each word from array back to string
        backToString = words[i].toString();
        
        // store first letter of string
        firstLetter = backToString.charAt(0); 
        
        // remove first letter from string
        translationPart1 = backToString.substr(1, backToString.length - 1);
        
        // add first letter to the end of the string + add ay at the end
        translationPart2 = translationPart1 + firstLetter + pigAy;
        
        
        // concatenate all words and add spaces to create a phrase
    pigTranslation = pigTranslation + translationPart2 + " " ;
    }
    
    // Capitalizing first letter and putting everything else in lowercase
    pigTranslation = pigTranslation.toLowerCase();
    pigTranslation = pigTranslation.replace(pigTranslation.charAt(0), pigTranslation.charAt(0).toUpperCase());
    return pigTranslation; 
}

function largestString(array) {
    var arrayLength = array.length; 
    var i = 0;
    var LargestString ="";
    var largestStringLength;
    var currentString ="";
    var currentStringLength;
    
    // cycle through array
    for (i = 0; i < arrayLength; i++) {
        currentString = array[i].toString();
        currentStringLength = currentString.length;
        
        if (LargestString.indexOf(" ") == -1) {
            largestStringLength = LargestString.length;
            
        } 
        else {
            largestStringLength = LargestString.indexOf(" ") ;
            
        }
                
        // compare string lengths and return the largest one
        // no need for if i = 0 condition as largest string is already set to 0 length 
        if (currentStringLength > largestStringLength) {
            LargestString = currentString;
            
        } 
        else if (currentStringLength < largestStringLength) {
            LargestString = LargestString;
            
        } 
        else if (currentStringLength == largestStringLength) {
            LargestString = LargestString   + " and " + currentString;
            
        }
    }
    return LargestString;
}
    

function max2(a,b) {
    var maxNumber; 
    maxNumber = Math.max(a,b) ;
    return maxNumber; 
} 

function min3(a, b, c) {
    var minNumber; 
    minNumber = Math.min(a,b,c);
    return minNumber; 
    
} 

function largest(array) {
    var arrayLength; 
    var i = 0; 
    var largestNumber;
    var currentNumber; 
    
    // cycle through array 
    arrayLength = array.length;
    for (i = 0; i < arrayLength; i++) {
        
        // set current number 
        currentNumber = array[i];
    
         
        if (i == 0) {
        // set largest number to the first one encountered
            largestNumber = currentNumber; 
            
        } 
        else {
            // compare numbers and return the largest one 
            largestNumber = Math.max(largestNumber, currentNumber);
        }
        
    } 
    return  largestNumber;
}

function isEven(number) {
    var even = "";
    
    // if remainder is 0 when dividing by 2, number is even
    if (number % 2 == 0) {
        even = "True"; 
        
    // if remainder is 1 when dividing by 2, number is odd
    } 
    else if (number % 2 == 1) { 
        even = "False";
        
    }
    return even; 
}

function cumulative(number) { 
    var cumulativeNumber;
    
    // formula for sum_1^n from calculus
    // could be done with a loop, but that's the simplest way
    cumulativeNumber = ((number + 1) * number) / 2;
    
    return cumulativeNumber;
    
}

function cumulativeFiltered(int) {
    var i = 0;
    var cumulativeNumberFiltered = 0;
    
    // cycling through loop until i is as big as int
    for (i = 0; i <= int; i++) {
        
        // if i is a multiple of 3, add i to cumulativeNumberFiltered
        if (i % 3 == 0) { 
        cumulativeNumberFiltered = i + cumulativeNumberFiltered;
        
        // if i is a multiple of 5, add i to cumulativeNumberFiltered
        }
        else if (i % 5 == 0) {
        cumulativeNumberFiltered = i + cumulativeNumberFiltered;
        
        } 
        else { 
        cumulativeNumberFiltered = cumulativeNumberFiltered;
        
        }
    }
    return cumulativeNumberFiltered;
}

function reachSingle(int) {
    // ex : num is 4567 
    // 1. 4*5*6*7 = 840
    // 2. 8*4*0 = 0
    // n = 2 
    
    var i = 0;
    var intToString = "";
    var intToArray;
    var arrayLength;
    var digitLength;
    var digit ;
    var n = 0;
    
    
    // converting int to array so we can multiply each digit
    intToString = int.toString();
    intToArray = intToString.split("");
    arrayLength = intToArray.length;
    
    // loops until the int is one digit long 
    // n is the number of cycles of multiplication 
    for (n = 0; arrayLength > 1; n++) {
        
            // cycling through array
            for (i = 0; i < arrayLength; i++) {
        
                // initializing digit if it's the first digit
                if (i == 0) {
                    digit = intToArray[i]; 
            
                // multiplying every digit together
                }
                else {
                digit = digit * intToArray[i];
                
                }
            
        } 
        // converting digit into intToString so we can get it through the loop again until it's equal to one digit
        intToString = digit.toString();
        intToArray = intToString.split("");
        arrayLength = intToArray.length;
    }  
    return n;
} 