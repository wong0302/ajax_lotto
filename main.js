document.addEventListener("DOMContentLoaded", init);

let pages = [];
//let uri = "https://davidst.edumedia.ca/mad9014/nums.php?digits=6&max=42";

function init() {

    pages = document.querySelectorAll(".page");
    console.log(pages);

    document.querySelector("#btnSend").addEventListener("click", function () {
        pages[0].classList.toggle("active");
        pages[1].classList.toggle("active");
    });

    document.querySelector("#btnBack").addEventListener("click", function () {
        pages[0].classList.toggle("active");
        pages[1].classList.toggle("active");
    });
}

//let digits = document.getElementById("digits").value;
//let max = document.getElementById("max").value;
//let req = new Request(uri, {
//    method: "POST",
//    mode: "cors",
//    body: form
//});
//
//function getNumbers() {
//    console.log(digits);
//    console.log(max);
//}
//
////In a FormData object:
//let form = new FormData();
//form.append("digits", digits);
//form.append("max", max);
//
//
//fetch(req)
//    .then(function (response) {
//        return response.json();
//    })
//    .then(function (data) {
//        //data is our JSON object back from our request
//        console.log(data);
//        console.log(number);
//        let ul = document.querySelector(".numberList");
//        ul.innerHTML = "";
//
//        let output = document.getElementById("output");
//        output.textContent = jsonData;
//    })
//    .catch(function (err) {
//        console.log("ERROR", err.message);
//    });
