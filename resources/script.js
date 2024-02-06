var overley_ = document.querySelector(".overlay");
var popup_ = document.querySelector(".pop-container");
var adbtn_ = document.querySelector(".addnew");

adbtn_.addEventListener("click", function () {
  overley_.style.display = "block";
  popup_.style.display = "block";
});
var can_btn = document.querySelector(".popTwo-btn");
can_btn.addEventListener("click", function (event) {
  event.preventDefault();
  overley_.style.display = "none";
  popup_.style.display = "none";
});

// selecting container for add
var container_ = document.querySelector(".container");
var addbtn = document.getElementById("add-btn");

addbtn.addEventListener("click", function (event) {
  event.preventDefault();
  var title_ = document.getElementById("book-input");
  var author_ = document.getElementById("auther-input");
  var description_ = document.getElementById("description-input");
  var formdata = document.getElementById("form-rel");
  if (title_.value == 0 || author_.value == 0 || description_.value == 0) {
    overley_.style.display = "none";
    popup_.style.display = "none";
    alert("Some Fields are Missing Please Enter All Fields");
    formdata.reset()
    return;
  }

  var div_ = document.createElement("div");
  div_.setAttribute("class", "book-container");
  div_.innerHTML = `<h1>${title_.value}</h1> 
  <h5>${author_.value}</h5> 
  <p>${description_.value}</p> 
  <button class="del-btn" onclick="deleteBook(event)"> Delete </button>`;
  container_.append(div_);
  overley_.style.display = "none";
  popup_.style.display = "none";
  formdata.reset();
});
function deleteBook(event) {
  event.target.parentElement.remove();
}
