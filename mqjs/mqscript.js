
function onClick(element) {
    document.getElementById("captionone").innerHTML = element.querySelector(".modal-image").alt;
    document.getElementById("img01").src = element.querySelector(".modal-image").src; // Stark Julian !!! 8h+ fuer diese Zeile.
    document.getElementById("qhead").innerHTML = "Frage:";
    // document.getElementById("qhead").innerHTML = element.querySelector(".captions h4").innerHTML;
    document.getElementById("captiontwo").innerHTML = element.querySelector(".captions p").innerHTML;
    document.getElementById("modal01").style.display = "block";
}


function hintnowone() {
    document.getElementById("hintaddone").style.display = "flex";    
}
function hintnowtwo() {
    document.getElementById("hintaddtwo").style.display = "flex";    
}
const hints = ["Suche in der Nähe einer Zahnarztpraxis",
                    "Der Zweitname des Namensgebers der Straße lautet Friedrich", 
                    "Du suchst einen Wasserspender",
                    "Hausnummer 28",
                    "Wo hält man Mittagsschlaf?",
                    "Suche nach einem `großen` Parkplatz und sieh dich um!",
                    "Suche zwischen Burgern und Torten",
                    "Der Hinweis liegt im Bild - oben", 
                    "Zum Einkaufen ist´s nicht weit",
                    "50.805178 - 8.765285",
                    "An Markttagen ist das Parken von 06:00 - 14:00 Uhr verboten",
                    "Das Motiv befindet sich an einer der äußeren Spielfeldgrenzen",
                    "Suche in der Nähe von Motiv 3",
                    "Der Hinweis liegt im Bild",
                    "In unmittelbarer Näher eines Gotteshauses",
                    "Kein anderes Motiv kann in dieser Straße gefunden werden",
                    "In diesem Straßenabschnitt hat man einen guten Blick aufs Schloß",
                    "Suche im unteren linken Eck des Spielfeldes"]
    const choices = ["Motiv 1","Motiv 2","Motiv 3","Motiv 4","Motiv 5","Motiv 6",
                    "Motiv 7","Motiv 8","Motiv 9","Motiv 10","Motiv 11","Motiv 12",
                    "Motiv 13","Motiv 14","Motiv 15","Motiv 16","Motiv 17","Motiv 18"]
function showHintone() {
    let i = 0;
    var inputOne = document.getElementById("locationhintone").value; 
    while (inputOne != choices[i]) {
        i++;
    };
    document.getElementById("hinthintone").innerHTML = hints[i];
    document.getElementById("actualhintone").style.display = "flex";  
}         
 function showHinttwo() {
    var i = 0;
    var counter = 0;
    var inputTwo = document.getElementById("locationhinttwo").value; 
    while (inputTwo != choices[i]) {
        counter++;
        i++;
    };
    document.getElementById("hinthinttwo").innerHTML = hints[counter];
    document.getElementById("actualhinttwo").style.display = "flex";                
}       

function connectone() {
    let eingabe = document.getElementById("pwone").value;
    document.getElementById("resultone").innerHTML = "&#x1F" + eingabe;
}
function connecttwo(){
    let eingabe = document.getElementById("pwtwo").value;
    document.getElementById("resulttwo").innerHTML = "&#x1F" + eingabe;
}
function connectthree(){
    let eingabe = document.getElementById("pwthree").value;
    document.getElementById("resultthree").innerHTML = "&#x1F" + eingabe;
}
// function connectfour(){
//     let eingabe = document.getElementById("pwfour").value;
//     document.getElementById("resultfour").innerHTML = "&#x1F" + eingabe;
// }
function cracklock(){
    const checkList = ["492", "397", "535"];
    // const checkList = ["139", "239", "752", "141"];
    var inputOne = document.getElementById("pwone").value;
    var inputTwo = document.getElementById("pwtwo").value;
    var inputThree = document.getElementById("pwthree").value;
    // var inputFour = document.getElementById("pwfour").value;
    if (inputOne == checkList[0] && inputTwo == checkList[1] &&inputThree == checkList[2]){
        document.getElementById("test").style.display = "flex";
        document.getElementById("leveloneone").style.display ="flex";
        // document.location.href="II-Liet-Lestearredlib.html#unlock";
    }
}

function qcheck(){
    let eing = document.getElementById("questcheck").value; 
    if (eing.toUpperCase() === "APO"){
        document.getElementById("check").style.display = "flex";
    } 
}

function mcheck(){
    const checkList = ["2","5","0", "6","2","1", "5","7"];
    let inOne = document.getElementById("mcheck1").value;
    let inTwo = document.getElementById("mcheck2").value;
    let inThree = document.getElementById("mcheck3").value;
    let inFour = document.getElementById("mcheck4").value;
    let inFive = document.getElementById("mcheck5").value;
    let inSix = document.getElementById("mcheck6").value;
    let inSeven = document.getElementById("mcheck7").value;
    let inEight = document.getElementById("mcheck8").value;

    if (inOne === checkList[0] && inTwo == checkList[1] && inThree == checkList[2]){
        document.getElementById("feedbackone").innerHTML = "&#9989";
        document.getElementById("resone").innerHTML = " 480";
    }
    if (inFour === checkList[3] && inFive == checkList[4] && inSix == checkList[5]){
        document.getElementById("feedbacktwo").innerHTML = "&#9989";
        document.getElementById("restwo").innerHTML = " 90";
    }
    if (inSeven === checkList[6] && inEight == checkList[7]){
        document.getElementById("feedbackthree").innerHTML = "&#9989";
        document.getElementById("resthree").innerHTML = " 20";
    }
    // if (document.getElementById("resone").innerHTML === "480" && document.getElementById("restwo").innerHTML === "90" && document.getElementById("resthree").innerHTML === "20") {
    //     console.log("yay")
    //     document.getElementById("follow").style.display = "flex"; 
    //     // document.getElementById("follow").innerHTML = "und folge den Anweisungen"<br> "der Bandansage."; 
    // }
}
