/*
Implement this function directly in the onKeyUp of the input, passing as parameter (this)
EX: <input style="text-align: right;" onkeyup="format(this)"/>
*/

function format(input){
  let count = 0;
  let inputValue = input.value.split("").filter(e => e != ".");   // Transforms the value of the input into an Array, removing the points(if any).
  let reverseValue = inputValue.reverse();  // It invert the array to add the separator prioritizing the right side.
  let formattedValue = [];
    
  // Scrolls through the elements of the array and every 3 elements adds a point.
  reverseValue.forEach(e => { 
    count++;
    formattedValue.push(e);
    if(count % 3 == 0  && inputValue.length > count ) {
      formattedValue.push(".");
  	}
  });
  
  formattedValue = formattedValue.reverse(); // Inverts the array to the normal position.
  input.value = formattedValue.join("");  

}
