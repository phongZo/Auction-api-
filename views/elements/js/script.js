var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);


let cart=document.querySelectorAll(".add-cart")
for(let i=0;i>cart.length;i++)
{
    console.log("myloop")
}