// var input = $("input#number").val();
var input = 2899;
var romanNumeral = "";
var hundreds = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
var tens = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
var ones = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]


while (input >= 1000) {
  romanNumeral += "M"
  input = input - 1000;
}

console.log(romanNumeral);

if (input >= 100) {
  var output = Math.floor(input / 100);   //  output is to find the position in the array, based on the input
  output = output - 1;        // this is factoring that arrays start from position 0, rather than 1
  romanNumeral += hundreds[output]
  input = input - Math.floor(input/100)*100;
  console.log(input)
}
console.log(romanNumeral)

if (input >= 10) {
  var output = Math.floor(input / 10);   //  this was input = input / 100
  output = output - 1;        // this was output = input - 1;
  romanNumeral += tens[output]
  input = input - Math.floor(input/10)*10;
  console.log(input)
}

console.log(romanNumeral)

if (input >= 1) {
  var output = input - 1;
  romanNumeral += ones[output]
}

console.log(romanNumeral)

// -----------------------------------------------------

// $(document).ready(function() {
  //   $("form#numbers").submit(function(event) {
    //     var input = $("input#number").val();
    //
    //   })
    // })



    // use an array?
    // save and commit
    // at step 6
    // convert hundreds into arrays



    // push stuff into a new array's position?
