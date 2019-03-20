let unique = () =>
{
   var a = [2,5,5,7,3,9,8,9];
   return [...new Set(a)];
}

document.getElementById("unique").innerHTML = "Original Array = [2,5,5,7,3,9,8,9] <br /> and Unique Array = " + unique();

