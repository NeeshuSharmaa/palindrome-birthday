//gives STRING in reversed order
function reverseStr(str) {
    var listOfChars = str.split("");
    var reverseListOfChars = listOfChars.reverse();
    var reversedStr = reverseListOfChars.join("");
    return reversedStr;
  }
  
  //check for palindrome by using reverse fxn, returns BOOLEAN VALUE
  function isPalindrome(str) {
    var reverse = reverseStr(str);
    if (str === reverse) {
      return true;
    } else {
      return false;
    }
  }
  
  //gives a DICTIONARY of day, month, year that are in string
  function convertDateToString(date) {
    var dateStr = { day: "", month: "", year: "" };
    if (date.day < 10) {
      dateStr.day = "0" + date.day;
    } else {
      dateStr.day = date.day.toString();
    }
  
    if (date.month < 10) {
      dateStr.month = "0" + date.month;
    } else {
      dateStr.month = date.month.toString();
    }
    dateStr.year = date.year.toString();
  
    return dateStr;
  }
  
  // gives an ARRAY having all date formats
  function getAllDateFormats(date) {
    var dateStr = convertDateToString(date);
  
    var ddmmyyyy = dateStr.year + dateStr.day + dateStr.month;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;
    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
  }
  
  //check palindrome for all formats- returns BOOLEAN VALUE
  function checkPalindromeForAllDateFormats(date) {
    var listofPalindromes = getAllDateFormats(date);
  
    var initial = false;
  
    for (var i = 0; i < listofPalindromes.length; i++) {
      if (isPalindrome(listofPalindromes[i])) {
        initial = true;
        break;
      }
    }
    return initial;
  }
  
  
  
  // check for leap year. returns BOOLEAN VALUE
  function isLeapYear(year) {
    if (year % 400 === 0) {
      return true;
    }
    if (year % 100 === 0) {
      return false;
    }
    if (year % 4 === 0) {
      return true;
    }
    return false;
  }
  
  // gives DICTIONARY of next date by incrementing 1 (also uses leap year fxn)
  function getNextDate(date) {
    var day = date.day + 1; // increment the day  => 32
    var month = date.month;
    var year = date.year;
  
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 0 - 11
  
      // check for february
    if (month === 2) {
      // check for leap year
      if (isLeapYear(year)) {
        // 2020 => true
        if (day > 29) {
          // false
          day = 1;
          month++; // increment the month
        }
      } else {
        if (day > 28) {
          day = 1;
          month++; // increment the month
        }
      }
    }
     // check for other months
    else {
      //  check if the day exceeds the max days in month
      if (day > daysInMonth[month - 1]) {
        day = 1;
        month++; // increment the month
      }
    }
  
     // increment the year if month is greater than 12
    if (month > 12) {
      month = 1;
      year++;
    }
  
    return {
      day: day,
      month: month,
      year: year
    };
  }
  
  // returns an ARRAY of no. of days to palindrome & next palindrome date
  // uses isPalindrome, getNextDate fxn
  function getNextPalindromeDate(date) {
    var ctr = 0;
    var nextDate = getNextDate(date);
  
    while (1) {
      ctr++;
      var isPalindrome = checkPalindromeForAllDateFormats(nextDate);
      if (isPalindrome) {
        break;
      }
      nextDate = getNextDate(nextDate);
    }
    return [ctr, nextDate];
  }
  
  var dateInput = document.querySelector("#bday-input");
  var checkBtn = document.querySelector("#check-btn");
  var output = document.querySelector(".output");
  
  function clickEventHandler() {
    var bdayDate = dateInput.value;
  
    if (bdayDate !== "") {
      var arrayOfDate = bdayDate.split("-");
      var date = {
        day: Number(arrayOfDate[2]),
        month: Number(arrayOfDate[1]),
        year: Number(arrayOfDate[0])
      };
      var isPalindrome = checkPalindromeForAllDateFormats(date);
  
      if (isPalindrome) {
        output.innerText = "Yuhuuu! your birthday is a palindrome, Congratssii!! (❁´◡`❁)";
      } else {
        var [ctr, nextDate] = getNextPalindromeDate(date);
        output.innerText = `Oucch! The next palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}. You missed by ${ctr} days (¬‿¬) `;
      }
    }
  }
  
  checkBtn.addEventListener("click", clickEventHandler);
  
  