var checkVowel = document.getElementById("checkVowel");

function vowel_count(str1) {
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;

  for (var x = 0; x < str1.length; x++) {
    if (vowel_list.indexOf(str1[x]) !== -1) {
      vcount += 1;
    }

  }
  return vcount;
}


let elParameter = document.getElementById('inputParam');
checkVowel.addEventListener("click", function () {
  let elParameter_val = elParameter.value
  console.log("Vowel count : " + vowel_count(elParameter_val) + " for " + elParameter_val);
  alert("Vowel count : " + vowel_count(elParameter_val) + "\nfor " + elParameter_val);
  document.getElementById("res").innerHTML = "Amount of Vowel : " + vowel_count(elParameter_val);
})