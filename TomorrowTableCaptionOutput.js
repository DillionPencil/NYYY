var d=new Date()
var weekday=new Array(7)
weekday[0]="������";
weekday[1]="����һ";
weekday[2]="���ڶ�";
weekday[3]="������";
weekday[4]="������";
weekday[5]="������";
weekday[6]="������";
weekday[7]="������";
document.write(weekday[d.getDay() + 1]);
