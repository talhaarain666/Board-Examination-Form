
function chk() {
    var nameOfstdnt = document.getElementById("NAME");
    var nameOfFather = document.getElementById("FATHERNAME");
    var dateOfBirth = document.getElementById("DATEOFBIRTH");
    var natioNality = document.getElementById("NATIONALITY");
    var maleFemale = document.getElementById("MALEFEMALE");
    var reliGion = document.getElementById("RELIGION");
    var rAddress = document.getElementById("ADDRESS");
    var cNic = document.getElementById("CNIC");
    var conTact = document.getElementById("CONTACT");
    var identiFication = document.getElementById("IDENTIFICATION");
    var poST = document.getElementById("POST");




    var fir = document.getElementById("one");
    var sec = document.getElementById("two");
    var thi = document.getElementById("three");
    var fou = document.getElementById("four");
    var fiv = document.getElementById("five");
    var six = document.getElementById("six");
    var sev = document.getElementById("seven");
    var eig = document.getElementById("eight");
    var nin = document.getElementById("nine");
    var ten = document.getElementById("ten");
    var ele = document.getElementById("eleven");


    fir.value = nameOfstdnt.value;
    sec.value = nameOfFather.value;
    thi.value = dateOfBirth.value;
    fou.value = natioNality.value;
    fiv.value = maleFemale.value;
    six.value = reliGion.value;
    sev.value = rAddress.value;
    eig.value = cNic.value;
    nin.value = conTact.value;
    ten.value = identiFication.value;
    ele.value = poST.value;



    var ab = document.getElementById("formdata");
    ab.style.display="block";
    
    
    
    var maind = document.getElementById("maindiv");
    maind.style.display="none";




// getting values
var checkbox1 = document.getElementById("btncheck1");
var checkbox2 = document.getElementById("btncheck2");
var checkbox3 = document.getElementById("btncheck3");
var checkbox4 = document.getElementById("btncheck4");
var checkbox5 = document.getElementById("btncheck5");
var checkbox6 = document.getElementById("btncheck6");
// getting location of submit values
var box1 = document.getElementById("chkbtn1");
var box2 = document.getElementById("chkbtn2");
var box3 = document.getElementById("chkbtn3");
var box4 = document.getElementById("chkbtn4");
var box5 = document.getElementById("chkbtn5");
var box6 = document.getElementById("chkbtn6");
// Tickmark Value
var tick = document.getElementById("tickmark");
if (checkbox1.checked == true){
    box1.innerHTML = tick.innerHTML;
}
if (checkbox2.checked == true){
    box2.innerHTML = tick.innerHTML;
}
if (checkbox3.checked == true){
    box3.innerHTML = tick.innerHTML;
}
if (checkbox4.checked == true){
    box4.innerHTML = tick.innerHTML;
}
if (checkbox5.checked == true){
    box5.innerHTML = tick.innerHTML;
}
if (checkbox6.checked == true){
    box6.innerHTML = tick.innerHTML;
}



}
