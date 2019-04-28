function gt() {
  var side1 = document.getElementById("hypotenus").value;
  var side2 = document.getElementById("adjacent").value;
  var side3 = document.getElementById("opposite").value;

  var length1 = parseInt(side1);
  var length2 = parseInt(side2);
  var length3 = parseInt(side3);

if ((length1 + length2) <= length3 || (length1 + length3) <= length2 || (length2 + length3) <= length1) {
  alert("A triangle cannot be formed");
}
else if (length1 === length2 && length1 === length3 && length2 === length3){
  alert("This is an equilateral triangle");
}
  else if (length1 === length2 || length1 === length3 || length2 === length3) {
    alert("This is an isosceles triangle");
  }
  else { (length1 !== length2 && length1 !== length3 && length2 !== length3 )
    alert("This is a scalene triangle");
  }
}
