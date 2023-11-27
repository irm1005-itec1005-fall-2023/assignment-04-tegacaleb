inititialise();



function showBox() {



  var box = document.getElementById('hiddenBox');

  box.style.display = 'block';





  var button = document.getElementById('triggerButton');

  button.parentNode.removeChild(button);

}

let itemArray = [];

let itemForm = document.getElementById("itemforma");

let itemList = document.getElementById("itemresults");

let itemInput = document.getElementById("textInput");



itemForm.addEventListener("submit", handleSubmitForm);



function handleSubmitForm(event) {





  event.preventDefault();





  itemArray.push(itemInput.value);





  itemForm.reset();



  renderData();

}



function renderData() {



  console.log("Render Data", itemArray);





  itemList.innerHTML = "";



  for (let i=0; i < itemArray.length ; i++ ){

    let tempListItem = document.createElement("li");



    tempListItem.textContent = itemArray[i];



    let tempButton = document.createElement("button");



    tempButton.textContent = "FINISHED";



    tempButton.dataset.super = i;



    tempButton.classList.add("finished-button");



    tempButton.addEventListener("click", function(event){

      console.log("You clicked me");



      console.log("You clicked on", event.target.dataset.super);





      itemArray.splice(event.target.dataset.super, 1);



      renderData();



      console.log(typeCount[i].type + " - " + typeCount[i].count)



    });



    tempListItem.appendChild(tempButton);



    itemList.appendChild(tempListItem);



  }

}
