var date = new Date()
var day = (date.getDay() + 1) % 7;
var weekday = new Array(7)
weekday[0] = "星期日"
weekday[1] = "星期一"
weekday[2] = "星期二"
weekday[3] = "星期三"
weekday[4] = "星期四"
weekday[5] = "星期五"
weekday[6] = "星期六"

document.write("<table class=\"time_table\" border=\"1px\" cellspacing=\"0\">");
document.write("<caption>")
document.write(weekday[day])
document.write("</caption>")

function format_time(hour, minute){
    var hour_str = hour.toString()
    var minute_str = minute.toString()
    if (hour < 10)
	hour_str = "0" + hour_str
    if (minute < 10)
	minute_str = "0" + minute_str
    return hour_str + ":" + minute_str
}

function print_time_range(st_time, millisec){
    var st_hour = st_time.getHours()
    var st_minute = st_time.getMinutes()
    st_time.setTime(millisec + 1800000)
    var en_hour = st_time.getHours()
    var en_minute = st_time.getMinutes()
    st_time_str = format_time(st_hour, st_minute)
    en_time_str = format_time(en_hour, en_minute)
    return st_time_str + "~" + en_time_str
}

document.write("<tr class=\"table_title_line\"><td>Time Range</td><td>207 Piano A</td><td>207 Piano B</td>")

var st_time = new Date()
var millisec

if (day == 0 || day == 6){
    st_time.setHours(9, 0, 0, 0)
}
else{
    st_time.setHours(13, 0, 0, 0)
}
millisec = st_time.getTime()

while (st_time.getHours() != 22 || st_time.getMinutes() != 30){
    document.write("<tr class=\"data_line\">")
    document.write("<td class=\"time_range\">" + print_time_range(st_time, millisec) + "</td>")
    for (var i = 0 ; i < 2 ; ++i){
	document.write("<td class=\"blank\" onclick=\"ClickChangeColor(this)\" onmouseover=\"MouseOverChangeColor(this)\" onmouseout=\"MouseOutChangeColor(this)\"><span></span></td>")
    }
    document.write("</tr>")
    millisec += 1800000
    st_time.setTime(millisec);
    if ((st_time.getHours() == 13 || st_time.getHours() == 18) && st_time.getMinutes() == 0){
	document.write("<tr class =\"blank_line\"><td colspan=3></td></tr>")
    }
	
}
