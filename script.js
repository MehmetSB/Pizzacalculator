/* Mehmet Batur
Applicatieontwikkelaar */
var smallprice = 3
var mediumprice = 5
var largeprice = 8

var small = prompt("Hoeveel small pizza's (20cm) wilt u bestellen ?")
var medium = prompt("Hoeveel medium pizza's (25cm) wilt u bestellen ?")
var large = prompt("Hoeveel large pizza's (30) wilt u bestellen ?")


var smalltotal = small * smallprice;
var mediumtotal = medium * mediumprice;
var largetotal = large * largeprice;
var totalprice = smalltotal + mediumtotal + largetotal;




document.write("U heeft gekozen voor small pizza's € " + smalltotal +'<br>');
document.write("U heeft gekozen voor medium pizza's € " + mediumtotal + '<br>');
document.write("U heeft gekozen voor large pizza's € " + largetotal + '<br>');
document.write('<br>')
document.write(" Het totale bedrag is: € " + totalprice)
