var checkVowel = document.getElementById("checkVowel");
function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}

let inputInsert = document.getElementById("inputParam");
inputInsert.addEventListener('input', function () {
    console.log(vowel_count(inputInsert.value))
})


checkVowel.addEventListener("click", function() {
    
   
    document.getElementById("res").innerHTML = "Amount of Vowel Count is " + vowel_count(inputInsert.value)  ;
})