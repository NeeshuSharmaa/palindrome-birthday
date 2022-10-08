function reverseStr(str) {
  var listOfChars = str.split("");
  var reverseListOfChars = listOfChars.reverse;
  var reversedStr = reverseListOfChars.join("");
  return reversedStr;
}
function isPalindrome(str) {
  var reverse = reverseStr(str);
  return str === reverse;
}

function convertDateToString(date) {
  var dateStr = { day: "", month: "", year: "" };
  if (dateStr.day < 10) {
    dateStr.day = "0" + dateStr.day;
  } else {
    dateStr.day = date.day.toString();
  }

  if (date.month < 10) {
    dateStr.month = "0" + date.month;
  } else {
    dateStr.month = date.day.toStrig();
  }
  dateStr.year = date.year.toSring();

  return dateStr;
}

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

function checkPalindromeForAllDateFormats(date) {
  var listofPalindromes = getAllDateFormats(date);

  var isPalindrome = false;
  for (var i = 0; i < listofPalindromes.length; i++) {
    if (isPalindrome(listofPalindromes[i])) {
      isPalindrome = true;
      break;
    }
  }
  return isPalindrome;
}

var date = {
  day: 5,
  month: 9,
  year: 2020
};
console.log(getAllDateFormats(date));
