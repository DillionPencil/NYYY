function Judge(tel,alerttxt){
    var flag = true;
    if (tel.value.length != 11)
	flag = false;
    else
	for (var i = 0 ; i < 11 ; ++i)
	    if (tel.value[i] < '0' || tel.value[i] > '9'){
		flag = false;
		break;
	    }
    if (flag)
	return flag;
    else{
	alert(alerttxt);
	return flag;
    }
}
function JudgeTel(thisform){
    with (thisform){
	if (Judge(tel , "�绰��ʽ����ȷ��") == false){
	    tel.focus();
	    return false;
	}
    }
}
