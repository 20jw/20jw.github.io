var ver = "1.0"    

var os5V = "Automatyzazja strony";
var os6V = "Preferowane memy";
var os7V = "Podejście do tworzenia memów";
var os8V = "Kłótnie";
var os9V = "Polityczność";
var os10V = "Zwracanie na siebie uwagi";


	
	window.onload = function() {
        var c = document.createElement("canvas")
        var ctx = c.getContext("2d")
        c.width = 1580;
        c.height = 780;
        ctx.fillStyle = "#EEEEEE"
        ctx.fillRect(0,0,1580,780);


		//Wartości
		
        img = document.getElementById("img-equality")
        ctx.drawImage(img, 20, 170, 100, 100);
		
        img = document.getElementById("img-wealth")
        ctx.drawImage(img, 680, 170, 100, 100)
		
        img = document.getElementById("img-might")
        ctx.drawImage(img, 20, 290, 100, 100)
		
        img = document.getElementById("img-peace")
        ctx.drawImage(img, 680, 290, 100, 100)
		
        img = document.getElementById("img-liberty")
        ctx.drawImage(img, 20, 410, 100, 100)
		
        img = document.getElementById("img-authority")
        ctx.drawImage(img, 680, 410, 100, 100)
		
        img = document.getElementById("img-tradition")
        ctx.drawImage(img, 20, 530, 100, 100)
		
        img = document.getElementById("img-progress")
        ctx.drawImage(img, 680, 530, 100, 100)

        img = document.getElementById("img-os5lewo")
        ctx.drawImage(img, 20, 650, 100, 100)
		
        img = document.getElementById("img-os5prawo")
        ctx.drawImage(img, 680, 650, 100, 100)

        img = document.getElementById("img-os6lewo")
        ctx.drawImage(img, 800, 170, 100, 100)
		
        img = document.getElementById("img-os6prawo")
        ctx.drawImage(img, 1460, 170, 100, 100)

        img = document.getElementById("img-os7lewo")
        ctx.drawImage(img, 800, 290, 100, 100)
		
        img = document.getElementById("img-os7prawo")
        ctx.drawImage(img, 1460, 290, 100, 100)

        img = document.getElementById("img-os8lewo")
        ctx.drawImage(img, 800, 410, 100, 100)
		
        img = document.getElementById("img-os8prawo")
        ctx.drawImage(img, 1460, 410, 100, 100)

        img = document.getElementById("img-os9lewo")
        ctx.drawImage(img, 800, 530, 100, 100)
		
        img = document.getElementById("img-os9prawo")
        ctx.drawImage(img, 1460, 530, 100, 100)

        img = document.getElementById("img-os10lewo")
        ctx.drawImage(img, 800, 650, 100, 100)
		
        img = document.getElementById("img-os10prawo")
        ctx.drawImage(img, 1460, 650, 100, 100)

		//Tło baru
        ctx.fillStyle="#222222"
        ctx.fillRect(120, 180, 560, 80)
        ctx.fillRect(120, 300, 560, 80)
        ctx.fillRect(120, 420, 560, 80)
        ctx.fillRect(120, 540, 560, 80)
        ctx.fillRect(120, 660, 560, 80)
		ctx.fillRect(900, 180, 560, 80)
        ctx.fillRect(900, 300, 560, 80)
        ctx.fillRect(900, 420, 560, 80)
        ctx.fillRect(900, 540, 560, 80)
        ctx.fillRect(900, 660, 560, 80)
		
		
		//Wypełnianie jprdl ale to jest popierdolone nie chce mi sie tego robic zapierdolcie mnie kurwa ~olele 
		
        ctx.fillStyle="#f44336"
        ctx.fillRect(120, 184, 5.6*equality-2, 72)
        ctx.fillStyle="#00897b"
        ctx.fillRect(682-5.6*wealth, 184, 5.6*wealth-2, 72)
        ctx.fillStyle="#ff9800"
        ctx.fillRect(120, 304, 5.6*might-2, 72)
        ctx.fillStyle="#03a9f4"
        ctx.fillRect(682-5.6*peace, 304, 5.6*peace-2, 72)
        ctx.fillStyle="#ffeb3b"
        ctx.fillRect(120, 424, 5.6*liberty-2, 72)
        ctx.fillStyle="#3f51b5"
        ctx.fillRect(682-5.6*authority, 424, 5.6*authority-2, 72)
        ctx.fillStyle="#8bc34a"
        ctx.fillRect(120, 544, 5.6*tradition-2, 72)
        ctx.fillStyle="#9c27b0"
        ctx.fillRect(682-5.6*progress, 544, 5.6*progress-2, 72)
		
		ctx.fillStyle=$(".os5lewo").css("background-color")
		ctx.fillRect(120, 664, 5.6*os5lewo-2, 72)
        ctx.fillStyle=$(".os5prawo").css("background-color")
        ctx.fillRect(682-5.6*os5prawo, 664, 5.6*os5prawo-2, 72)

		ctx.fillStyle=$(".os6lewo").css("background-color")
		ctx.fillRect(900, 184, 5.6*os6lewo-2, 72)
        ctx.fillStyle=$(".os6prawo").css("background-color")
        ctx.fillRect(1462-5.6*os6prawo, 184, 5.6*os6prawo-2, 72)
		
		ctx.fillStyle=$(".os7lewo").css("background-color")
		ctx.fillRect(900, 304, 5.6*os7lewo-2, 72)
        ctx.fillStyle=$(".os7prawo").css("background-color")
        ctx.fillRect(1462-5.6*os7prawo, 304, 5.6*os7prawo-2, 72)		
		
		ctx.fillStyle=$(".os8lewo").css("background-color")
		ctx.fillRect(900, 424, 5.6*os8lewo-2, 72)
        ctx.fillStyle=$(".os8prawo").css("background-color")
        ctx.fillRect(1462-5.6*os8prawo, 424, 5.6*os8prawo-2, 72)		
		
		ctx.fillStyle=$(".os9lewo").css("background-color")
		ctx.fillRect(900, 544, 5.6*os9lewo-2, 72)
        ctx.fillStyle=$(".os9prawo").css("background-color")
        ctx.fillRect(1462-5.6*os9prawo, 544, 5.6*os9prawo-2, 72)		
		
		ctx.fillStyle=$(".os10lewo").css("background-color")
		ctx.fillRect(900, 664, 5.6*os10lewo-2, 72)
        ctx.fillStyle=$(".os10prawo").css("background-color")
        ctx.fillRect(1462-5.6*os10prawo, 664, 5.6*os10prawo-2, 72)		
		
		
		
		
		ctx.fillStyle="#222222"
        ctx.font="700 60px Montserrat"
        ctx.textAlign="left"
        ctx.fillText("20Jejowych-Wartości", 20, 65)
		ctx.font="900 26px Roboto"
        ctx.fillText("Użytkownik z najbliższym wynikiem:", 20, 95)
		ctx.font="26px Roboto"
        ctx.fillText(ideology, 20, 125)
		


		ctx.font="35px Montserrat"
		ctx.textAlign="right"
		var a = new Date();
		ctx.fillText("Wykonano " + a.getDate() + "." + (a.getMonth()+1) + "." + a.getFullYear(), 1560, 55)
		
        ctx.font="50px Montserrat"
        ctx.textAlign="left"
        if (equality  > 30) {ctx.fillText(equality + "%", 130, 237.5)}
        if (might     > 30) {ctx.fillText(might + "%", 130, 357.5)}
        if (liberty   > 30) {ctx.fillText(liberty + "%", 130, 477.5)}
        if (tradition > 30) {ctx.fillText(tradition + "%", 130, 597.5)}
        if (os5lewo > 30) {ctx.fillText(os5lewo + "%", 130, 717.5)}

        if (os6lewo > 30) {ctx.fillText(os6lewo + "%", 910, 237.5)}
        if (os7lewo > 30) {ctx.fillText(os7lewo + "%", 910, 357.5)}
        if (os8lewo > 30) {ctx.fillText(os8lewo + "%", 910, 477.5)}
        if (os9lewo > 30) {ctx.fillText(os9lewo + "%", 910, 597.5)}
        if (os10lewo > 30) {ctx.fillText(os10lewo + "%", 910, 717.5)}


        ctx.textAlign="right"
        if (wealth    > 30) {ctx.fillText(wealth + "%", 670, 237.5)}
        if (peace     > 30) {ctx.fillText(peace + "%", 670, 357.5)}
        if (authority > 30) {ctx.fillText(authority + "%", 670, 477.5)}
        if (progress  > 30) {ctx.fillText(progress + "%", 670, 597.5)}
        if (os5prawo  > 30) {ctx.fillText(os5prawo + "%", 670, 717.5)}
        
		if (os6prawo  > 30) {ctx.fillText(os6prawo + "%", 1450, 237.5)}
		if (os7prawo  > 30) {ctx.fillText(os7prawo + "%", 1450, 357.5)}
		if (os8prawo  > 30) {ctx.fillText(os8prawo + "%", 1450, 477.5)}
		if (os9prawo  > 30) {ctx.fillText(os9prawo + "%", 1450, 597.5)}
		if (os10prawo  > 30) {ctx.fillText(os10prawo + "%", 1450, 717.5)}



		//Podpisy
        ctx.font="300 26px Roboto"
        ctx.textAlign="center"
        ctx.fillText("Styl pisania: " + document.getElementById("pis").innerHTML, 400, 175)
        ctx.fillText("Strony z memami: " + document.getElementById("memy-label").innerHTML, 400, 295)
        ctx.fillText("Zarządzanie stroną: " + document.getElementById("zarz").innerHTML, 400, 415)
        ctx.fillText("Tradycje: " + document.getElementById("tra").innerHTML, 400, 535)
        ctx.fillText(os5V + ": " + document.getElementById("os5").innerHTML, 400, 655)
        ctx.fillText(os6V + ": " + document.getElementById("os6").innerHTML, 1200, 175)
        ctx.fillText(os7V + ": " + document.getElementById("os7").innerHTML, 1200, 295)
        ctx.fillText(os8V + ": " + document.getElementById("os8").innerHTML, 1200, 415)
        ctx.fillText(os9V + ": " + document.getElementById("os9").innerHTML, 1200, 535)
        ctx.fillText(os10V + ": " + document.getElementById("os10").innerHTML, 1200, 655)


        document.getElementById("banner").src = c.toDataURL();
	}
