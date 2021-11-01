var checkButton = document.getElementById("checkPalindrome");

function isPalindrome(str) {
  'use strict';

  str = str.replace(/[^a-z0-9]+/gi, "").toLowerCase();
  var reversedStr = str.split("").reverse().join("");
  console.log(reversedStr);
  document.getElementById("res").innerHTML = "Inversed is (" + reversedStr + ")";

  return str === reversedStr;

}

checkButton.addEventListener("click", function () {
  'use strict';

  var value = document.getElementById("inputPalindrome").value;
  var notification = document.getElementById("notification");

  if (isPalindrome(value)) {
    alert("True Palindrome")
    notification.innerHTML = "Yay! You've got a palindrome";
    notification.className = "alert alert-success";
  } else {
    alert("False Palindrome")
    notification.innerHTML = "Ops! Not a palindrome";
    notification.className = "alert alert-danger";
  }
});