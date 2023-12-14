const item = document.querySelector("#item");
const toDobox = document.querySelector(".to-do-box");

item.addEventListener("keyup", itemfun);

function itemfun(val) {
  if (val.key == "Enter") {
    //Enter press er sathe kivabe this kaj korse??
    additem(this.value); //  ekhane this kake refer korse??
    // document.querySelector(".value").innerHTML = this.value
    this.value = ""; // Empty the input bar
  }
}

const additem = (e) => {
  //creating listItems dynamically
  const listItem = document.createElement("li");
  listItem.innerHTML = `${e}
    <i class="fa-solid fa-rectangle-xmark"></i>`;

  //cross also create dynamically
  listItem.addEventListener("click", function () {
    this.classList.toggle("done");
  });

  listItem.querySelector("i").addEventListener("click", function () {
    listItem.remove();
  });

  toDobox.appendChild(listItem); // Creating lisItems are append with catching HTML listItems
};

// এখানে হল না কেন?

// listItem.addEventListener(
//     "click",
//     function(){
//         this.classList.toggle("done")
//     }
// )
