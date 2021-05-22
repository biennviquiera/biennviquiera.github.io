//event listener
alert(document.querySelectorAll(".drum").length);

for (i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".set button")[i].addEventListener("click", function () {
    alert("you clicked a drum");
  });

}
