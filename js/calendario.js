function maxDays(mm, yyyy){
var mDay;
	if((mm == 3) || (mm == 5) || (mm == 8) || (mm == 10)){
		mDay = 30;
  	}
  	else{
  		mDay = 31
  		if(mm == 1){
   			if (yyyy/4 - parseInt(yyyy/4) != 0){
   				mDay = 28
   			}
		   	else{
   				mDay = 29
  			}
		}
  }
return mDay;
}

function writeCalendar(){

var now = new Date
var dd = now.getDate()
var mm = now.getMonth()
var dow = now.getDay()
var yyyy = now.getFullYear()
var arrM = new Array("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro")
var arrY = new Array()
// Monta array do ano
	for (ii=0;ii<=5;ii++){
		arrY[ii] = yyyy - 2 + ii
	}
var arrD = new Array("Dom", "Seg","Ter","Qua","Qui","Sex","Sab")

var text = ""
text = "<form name=calForm>"
text += "<div id=calendar_wrap>"
text += "<table>"
text += "<tr><td>"
text += "<table><tr>"
text += "<td align=left>"
text += "<select name=selMonth onChange='changeCal()'>"
// Monta combo do mês
	for (ii=0;ii<=11;ii++){
		if (ii==mm){
			text += "<option value= " + ii + " Selected>" + arrM[ii] + "</option>"
		}
		else{
			text += "<option value= " + ii + ">" + arrM[ii] + "</option>"
		}
	}
text += "</select>"
text += "</td>"
text += "<td align=right>"

// monta combo do ano
text += "<select name=selYear onChange='changeCal()'>"
	for (ii=0;ii<=5;ii++){
		if (ii==2){
			text += "<option value= " + arrY[ii] + " Selected>" + arrY[ii] + "</option>"
		}
		else{
			text += "<option value= " + arrY[ii] + ">" + arrY[ii] + "</option>"
		}
	}
text += "</select>"
text += "</td>"
text += "</tr></table>"
text += "</td></tr>"
text += "<tr><td>"
text += "<table> "
text += "<tr>"
	for (ii=0;ii<=6;ii++){
		text += "<td align=center>" + arrD[ii] + "</td>"
	}
text += "</tr>"
aa = 0
	for (kk=0;kk<=5;kk++){
		text += "<tr>"
		for (ii=0;ii<=6;ii++){
			text += "<td align=center><span id=sp" + aa + " onClick='changeBg(this.id)'>"+aa+"</span></td>"
			aa += 1
		}
		text += "</tr>"
	}
text += "</table>"
text += "</td></tr>"
text += "</table>"
text += "</div>"
text += "</form>"
document.write(text);
changeCal();
}

function changeCal(){

var now = new Date
var dd = now.getDate()
var mm = now.getMonth()
var dow = now.getDay()
var yyyy = now.getFullYear()
var currM = parseInt(document.calForm.selMonth.value)
var prevM
	if (currM!=0){
		prevM = currM - 1
	}
	else{
		prevM = 11
	}
var currY = parseInt(document.calForm.selYear.value)
var mmyyyy = new Date()
mmyyyy.setFullYear(currY)
mmyyyy.setMonth(currM)
mmyyyy.setDate(1)

var day1 = mmyyyy.getDay()
	if (day1 == 0){
		day1 = 7
	}
	
var arrN = new Array(41)

var aa
	for (ii=0;ii<day1;ii++){
		arrN[ii] = maxDays((prevM),currY) - day1 + ii + 1
	}
	
	aa = 1
	for (ii=day1;ii<=day1+maxDays(currM,currY)-1;ii++){
		arrN[ii] = aa
		aa += 1
	}
	
	aa = 1
	for (ii=day1+maxDays(currM,currY);ii<=41;ii++){
		arrN[ii] = aa
		aa += 1
	}
var dCount = 0

for (ii = 0; ii <= 41; ii++) {
			 var element = document.getElementById("sp" + ii);
				if (((ii < 7) && (arrN[ii] > 20)) || ((ii > 27) && (arrN[ii] < 20))) {

							element.innerHTML = arrN[ii]
							element.className = "c3"


				}

				else {

			element.innerHTML = arrN[ii]
			if ((dCount == 0) || (dCount == 6)) {
				element.className = "c2"
			}
			else{
				element.className = "c1"
			}
			
		if ((arrN[ii]==dd)&&(mm==currM)&&(yyyy==currY)){
				element.className="c4"
			}
				
			
		}
	dCount += 1
		if (dCount>6){
			dCount=0
		}
	}
}
//  End -->




