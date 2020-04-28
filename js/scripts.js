var hundreds = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
var tens = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
var ones = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]

function romanCalculator(input) {
  var romanNumeral = "";
  while (input >= 1000) {
    romanNumeral += "M"
    input = input - 1000;
  }

  if (input >= 100) {
    var output = Math.floor(input / 100);   //  rounds down so the latter digits don't infere with tens | 821 -> 8--
    output = output - 1;        // this is factoring that arrays start from position 0, rather than 1
    romanNumeral += hundreds[output]
    input = input - Math.floor(input/100)*100; // rounding down to closest hundreds, 821 -> 800, substracts from the input, turns 821 -> 21
  }

  if (input >= 10) {
    var output = Math.floor(input / 10);
    output = output - 1;
    romanNumeral += tens[output]
    input = input - Math.floor(input/10)*10;
  }

  if (input >= 1) {
    var output = input - 1;
    romanNumeral += ones[output]
  }
  return romanNumeral;
}

$(document).ready(function() {
  $("form#numbers").submit(function(event) {
    event.preventDefault();
    var input = $("input#englishnumber").val();
    var romanFinalAnswer = romanCalculator(input);
    $(".finalresult").append(romanFinalAnswer)
  })
})
