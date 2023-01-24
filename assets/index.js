let $row = $(".row");
let $container = $(".container");
let $currentDay = $("#currentDay");

let today = moment().format("dddd, MMMM Do");
console.log(today);

$currentDay.text(today);

let hours = [];



for (let i = 9; i < 18; i++) {
    hours.push(i)
    $container.append(`<div class="row">
    <td class="hour">`+i+`</td>
    <textarea class="col-8" id = "`+i+`" area-time="`+i+`"></textarea>
    <button class="saveBtn" data-time="`+i+`"> Save</button>
  </div>`)
    let hour = moment().format("H");

    let test = parseInt($(this).attr("id"));

    // console.log works but addclass doesn't - trying to sort for a couple of hours with no luck
    if (i > hour) {
        $("textarea").addClass("future"); 
        console.log("future" + i);
    } else if (i == hour) {
        // $("textarea").removeClass("future");
        $("textarea").addClass("present");
        console.log("present" + i);
    } else {
        // $("textarea").removeClass("future");
        $("textarea").removeClass("present");
        $("textarea").addClass("past");
        console.log("past" + i);
}}

for (let i = 0; i < 10; i++) {
    let getInput = localStorage.getItem(i);
    let textVariable = $("textarea").eq(i);
    textVariable.val(getInput);
    
}


// when click save button, the corresponding textarea saves to local storage
$(".saveBtn").click(function(){
    let buttonClicked = $(this).attr("data-time");      
    let indexNumber = buttonClicked - 9;
    console.log(indexNumber);
    let textInput = $("textarea").eq(indexNumber).val();
    console.log(textInput);
    localStorage.setItem(indexNumber, textInput);
});





// localStorage.setItem("9", "insert text")
// .getItem


