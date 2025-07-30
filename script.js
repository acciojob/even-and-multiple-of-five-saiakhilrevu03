function checkNumber(num) {
  //your code here
	if(num%5===0 && num%2===0){
		return true;
	}
	return false;
}
 
const num = parseInt(prompt("Enter a number."));
alert(checkNumber(num));
