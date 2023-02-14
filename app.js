document.getElementById("add-btn").addEventListener("click", function (e) {

   const value = document.getElementById("input-field").value;
   const container = document.getElementById('parent-container');
   const li = document.createElement('li');
   li.innerText = value;
   li.classList.add('new-li');
   container.appendChild(li);
   const allListItem = document.getElementsByClassName('new-li');
   for (const item of allListItem) {
      item.addEventListener('click', function (e) {
         e.target.parentNode.removeChild(e.target);

      });
   }
});