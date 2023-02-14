function setInnerText(id, value) {
   document.getElementById(id).innerText = value;
}
function getInputValue(id) {
   const value = document.getElementById(id).value;
   return value;
}
document.getElementById('hit').addEventListener('click', function (e) {

   setInnerText('p-1', "Bangladesh");
   setInnerText('p-2', "China");
   setInnerText('p-3', "Srilanka");
   setInnerText('p-4', "Afghanistan");
   setInnerText('p-5', "Bhutan");
   const inputValue = getInputValue('input-field');
   console.log(inputValue);
})




