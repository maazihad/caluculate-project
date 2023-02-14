document.getElementById('btn-kitkat').addEventListener('click', function (e) {

   const quantity = getInputValue('kitkat-quantity', 200);
   setInnerText('kitKat', quantity);
   total();

});
document.getElementById('btn-rose').addEventListener('click', function (e) {

   const quantity = getInputValue('rose-quantity', 100);
   setInnerText('rose', quantity);
   total();

});
document.getElementById('btn-diary').addEventListener('click', function (e) {
   const quantity = getInputValue('diary-quantity', 100);
   setInnerText('diary', quantity);
   total();
});



// এখানে সব জায়গায় সেট করার জন্য একটা ফাংশন ক্রিয়েট করা হয়েছে

function getInputValue(id, prices) {
   const quant = document.getElementById(id).value;
   return parseInt(quant * prices);

}

function setInnerText(id, value) {
   document.getElementById(id).innerText = value;
}
function getElementValue(id) {
   const element = document.getElementById(id).innerText;
   return parseInt(element);
}

function total() {
   const kitkat = getElementValue('kitKat');
   const rose = getElementValue('rose');
   const diary = getElementValue('diary');
   const totalSum = kitkat + rose + diary;
   setInnerText('total', totalSum);
}

document.getElementById('apply-btn').addEventListener('click', function () {


   const promoCode = document.getElementById('promo-code').value;
   const promoInt = parseInt(promoCode);
   if (promoInt === 101) {
      const total = document.getElementById('total').innerText;
      const totalCost = total - ((total / 100) * 10);
      setInnerText('all-cost', totalCost);

   } else {
      alert('wrong promo code');
   }


});