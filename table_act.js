function ClickChangeColor(element){
    class_name = $(element).attr("class");
    if (class_name.match("blank")){
	$(element).toggleClass("selecting");
    }
}
function MouseOverChangeColor(element){
    $(element).addClass("mouse_over");
}
function MouseOutChangeColor(element){
    $(element).removeClass("mouse_over");
}
