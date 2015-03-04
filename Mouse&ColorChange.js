var count_today = 0;
var count_tomorrow = 0;
function ClickChangeColor(element){
    switch(element.style.backgroundColor){
    case "rgb(153, 255, 102)": case "": case "rgb(255, 255, 255)":
        element.style.backgroundColor = "#FFA500";
        break;
    case "rgb(255, 165, 0)":
        element.style.backgroundColor = "#FFFFFF";
        break;
          default:
        alert("ÎÞ·¨Ñ¡Ôñ");
        break;
    }
}
function MouseoverChangeColor(element){
    var tmp_col = element.style.backgroundColor;
    if (tmp_col == "" || tmp_col == "rgb(255, 255, 255)")
        element.style.backgroundColor = "#99FF66";
}
function MouseoutChangeColor(element){
    var tmp_col = element.style.backgroundColor;
    if (tmp_col == "rgb(153, 255, 102)")
        element.style.backgroundColor = "#FFFFFF";
}
