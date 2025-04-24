console.log("one two three");
document.body.appendChild(document.getElementById("smokewed"));
document.getElementById("smokewed").style.transform = "translate(550px,-390px)";
document.body.style.cursor = "wait";
var database = firebase.database();
var THETEAMWEARESEARCHING = localStorage.getItem("THETEAMWEARESEARCHING");
var currentseason = 53;
function removeElementsByClass(className) {
    let elements = document.getElementsByClassName(className);
    while(elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}
var count = 0;
removeElementsByClass("divv");
removeElementsByClass("divFart");
let typewriterTimeouts = [];
function killAllTimeouts() {
    let id = window.setTimeout(() => {}, 0);
    while (id--) {
      window.clearTimeout(id);
    }
  }
function cancelTyping() {
  // Stop all timeouts set by the typewriter
  typewriterTimeouts.forEach(clearTimeout);
  typewriterTimeouts = [];
}

function typeWriter(element, text, delay = 100, callback) {
  cancelTyping(); // Start clean each time

  element.textContent = "";
  let i = 0;

  function type() {
    // If element is removed, stop typing
    if (!document.body.contains(element)) return;

    if (i < text.length) {
      element.textContent += text.charAt(i);
      const timeout = setTimeout(type, delay);
      typewriterTimeouts.push(timeout);
      i++;
    } else {
      if (callback) callback();
    }
  }

  type();
}

document.getElementById("h3").innerHTML = " ";
document.getElementById(".form-wrapper").style.opacity = "0";
document.getElementById(".BanFileExplorer").style.height = "750px";
if(localStorage.getItem("NOFACEITACCOUNT")!= 1){
document.getElementById(".BanFileExplorer").style.transform = "translateY(-350px)";
}
document.getElementById("h3").style.transform = "translate(600px,-40px)";
document.getElementById("h3").style.position = "absolute";
document.getElementById(".BanFileExplorer").prepend(document.getElementById("h3"));
document.getElementById("srchBtn").style.visibility = "hidden";
document.getElementById("rtrnBtn").style.visibility = "visible";
document.getElementById("rtrnBtn").style.transform = "translate(-650px,-375px)";
document.body.appendChild(document.getElementById("rtrnBtn"));

var rtrnBtn = document.getElementById("rtrnBtn");
var lastbooleaniswear = false;
var ffws = 0;
var ffws1 = 0;
var dividerclicked = false;
var defaultimage = "https://atomicrecall.github.io/Cipher/images/DEFAULTT.jpg";
//setup image_links
var loadGears = "https://atomicrecall.github.io/Cipher/images/gears.gif";
var loadingimage = document.createElement("img");
loadingimage.src = loadGears;
loadingimage.style.width = "600px";
loadingimage.style.height = "200px";
loadingimage.style.transform = "translate(450px,250px)";
loadingimage.style.position = "absolute";
loadingimage.id = "removemeplss";
loadingimage.classList.add("removemeplss");
document.getElementById(".BanFileExplorer").appendChild(loadingimage);
var stoporgosearch = true;
var stopButtong = document.createElement("button");
stopButtong.classList.add("removemeplss");
stopButtong.id = "stopbutton";
stopButtong.style.fontSize = "20px";
stopButtong.style.fontWeight = "bold";
stopButtong.innerHTML = 'USE THE MATCHES ALREADY FOUND:  <img id="buttonnn" src = "https://atomicrecall.github.io/Cipher/images/STOP.jpg" class = "removemeplss"/>';
document.getElementById(".BanFileExplorer").appendChild(stopButtong);

stopButtong.addEventListener('click',()=>{
    //console.log("BUTTON CLICKED FDSFDSFDS");
    removeElementsByClass("removemeplss");
    var finializing = document.createElement("div");
    finializing.id = "finalizing";
    finializing.innerHTML = "FINALIZING......";
    finializing.style.color = "wheat";
    finializing.style.fontSize = "45px";
    finializing.style.transform = "translate(550px,250px)";
    finializing.style.position = "absolute";
    finializing.classList.add("removemeplss");
    document.getElementById(".BanFileExplorer").appendChild(finializing);

    stoporgosearch = false;

});


var loadingbar = document.createElement("div");
loadingbar.innerHTML = "Now Searching: "
loadingbar.id = "loadingbar";
loadingbar.classList.add("divvv");
var finishedbar = document.createElement("div");
finishedbar.innerHTML = "Found Matches: ";
finishedbar.id = "finishedbar";
finishedbar.classList.add("divvv");
var finishedcounter = document.createElement("div");
finishedcounter.id = "finishedcounter";
finishedcounter.style.position = "absolute";
finishedcounter.style.color = "white";
finishedcounter.style.fontSize = "35px";
finishedcounter.style.transform = "translate(285px,-15px)";
finishedcounter.classList.add("divvv");
var finishedmatchesrealcounter = 0;
var finishtext = document.createElement("div");
finishtext.id = "finishedtext";
finishtext.classList.add("divvv");
finishedbar.appendChild(finishtext);
//document.getElementById(".BanFileExplorer").appendChild(loadingbar);
document.getElementById(".BanFileExplorer").appendChild(finishedbar);
document.getElementById(".BanFileExplorer").appendChild(finishedcounter);

var firstMatchID;

//ancient = 0;
//anubis = 1;
//Inferno = 2;
//Overpass(D2) = 3;
//Mirage = 4;
//Nuke = 5;
//Verigo = 6;
var image_links = new Array(7);
image_links[0] = "https://assets.faceit-cdn.net/third_party/games/ce652bd4-0abb-4c90-9936-1133965ca38b/assets/votables/5b844241-5b15-45bf-a304-ad6df63b5ce5_1695819190976.jpeg";
image_links[1] = "https://assets.faceit-cdn.net/third_party/games/ce652bd4-0abb-4c90-9936-1133965ca38b/assets/votables/31f01daf-e531-43cf-b949-c094ebc9b3ea_1695819235255.jpeg";
image_links[2] = "https://assets.faceit-cdn.net/third_party/games/ce652bd4-0abb-4c90-9936-1133965ca38b/assets/votables/993380de-bb5b-4aa1-ada9-a0c1741dc475_1695819220797.jpeg";
image_links[3] = "https://assets.faceit-cdn.net/third_party/games/ce652bd4-0abb-4c90-9936-1133965ca38b/assets/votables/7c17caa9-64a6-4496-8a0b-885e0f038d79_1695819126962.jpeg";
image_links[4] = "https://assets.faceit-cdn.net/third_party/games/ce652bd4-0abb-4c90-9936-1133965ca38b/assets/votables/7fb7d725-e44d-4e3c-b557-e1d19b260ab8_1695819144685.jpeg";
image_links[5] = "https://assets.faceit-cdn.net/third_party/games/ce652bd4-0abb-4c90-9936-1133965ca38b/assets/votables/7197a969-81e4-4fef-8764-55f46c7cec6e_1695819158849.jpeg";
image_links[6] = "https://assets.faceit-cdn.net/third_party/games/ce652bd4-0abb-4c90-9936-1133965ca38b/assets/votables/3bf25224-baee-44c2-bcd4-f1f72d0bbc76_1695819180008.jpeg";
image_links[7] = "https://overgear.com/guides/wp-content/uploads/2025/02/cs2-all-maps.webp";

//ancient = 0;
//anubis = 1;
//Inferno = 2;
//Overpass(D2) = 3;
//Mirage = 4;
//Nuke = 5;
//Verigo = 6;
//Train = 7;
var bans = new Array(8).fill(0);

//ancient = 0;
//anubis = 1;
//Inferno = 2;
//Overpass(D2) = 3;
//Mirage = 4;
//Nuke = 5;
//Verigo = 6;
//Train = 7;
var picks = new Array(8).fill(0);

//ancient = 0;
//anubis = 1;
//Inferno = 2;
//Overpass(D2) = 3;
//Mirage = 4;
//Nuke = 5;
//Verigo = 6;
//Train = 7;
var played = new Array(8).fill(0);

//ancient = 0;
//anubis = 1;
//Inferno = 2;
//Overpass(D2) = 3;
//Mirage = 4;
//Nuke = 5;
//Verigo = 6;
//Train = 7;
var L = new Array(8).fill(0);

//ancient = 0;
//anubis = 1;
//Inferno = 2;
//Overpass(D2) = 3;
//Mirage = 4;
//Nuke = 5;
//Verigo = 6;
//Train = 7;
var W = new Array(8).fill(0);
var picksnbans = [];
document.getElementById('h3').style.opacity = 1;
document.getElementById('h3').onmouseover = function(){
    document.getElementById("h3").style.filter = "drop-shadow(.5px 0.5px 3px white)";
}
document.getElementById('h3').onmouseout = function(){
    document.getElementById("h3").style.filter = "drop-shadow(.5px 0.5px 0.75px black)";
}
// Main function to fetch team and leader data
fetch(`https://open.faceit.com/data/v4/teams/${THETEAMWEARESEARCHING}`, {
    headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer 29645383-3447-4a8d-90b8-76fcf5904c45'
    }
}).then((res) => {
    if (!res.ok) {
        if (res.status == 404) {
            console.warn(`Team not found (404), continuing...`);
            return Promise.resolve(); // Resolve to continue without error
        }
        throw new Error("Couldn't fetch the data");
    }
    return res.json();
})
.then((datan) => {
   // console.log(datan);
    localStorage.setItem("LeaderID", datan.leader);
    document.getElementById("h3").innerHTML = datan.name.toUpperCase();
    cancelTyping();
    killAllTimeouts();
    document.getElementById("h1").innerHTML = " ";
    document.getElementById("poop").innerHTML = " ";
   
    document.getElementById("h3").style.cursor= "pointer";
    document.getElementById("h1").textContent= " ";
    typeWriter(document.getElementById("h1"), datan.name+"'s Cipher awaits, ", 100, () => {
        document.getElementById("poop").style.visibility = "visible";
        
            typeWriter(document.getElementById("poop"), String(localStorage.getItem("faceit-name"))+".", 100);
    
        
    });
    document.getElementById("h3").onclick = function(){
        let faceitlinkk = datan.faceit_url.replace("{lang}", '');
        window.open(faceitlinkk);
    }

    const teamPfp = document.createElement("img");
    teamPfp.id = "teamPfp";
    const teamBackground = document.createElement("img");
    teamBackground.id = "teamBackground";
    teamBackground.position = "absolute";
    teamBackground.opacity = 0;
    teamBackground.style.height = "280px";
    teamBackground.style.width = "1245px";
    let teambackgrounddiv = document.createElement("div");
    teambackgrounddiv.classList.add("divv");
    teambackgrounddiv.appendChild(teamBackground);
    teambackgrounddiv.id = "teambackgrounddiv";
    teambackgrounddiv.position = "absolute";
    if (datan.avatar != undefined){
        teamPfp.src = datan.avatar;
        document.getElementById('h3').prepend(teamPfp);
    }
    else{
        teamPfp.src = "https://atomicrecall.github.io/Cipher/images/DEFAULTT.jpg";
        document.getElementById('h3').prepend(teamPfp);
    }
    
    if (datan.cover_image != undefined){

        teamBackground.src = datan.cover_image;
       
    }
    else if(datan.cover_image == undefined || datan.cover_image == null || datan.cover_image === ""){
        
        teamBackground.src = "data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='29' height='50.115' patternTransform='scale(1) rotate(90)'><rect x='0' y='0' width='100%' height='100%' fill='%23161616'/><path d='M14.498 16.858L0 8.488.002-8.257l14.5-8.374L29-8.26l-.002 16.745zm0 50.06L0 58.548l.002-16.745 14.5-8.373L29 41.8l-.002 16.744zM28.996 41.8l-14.498-8.37.002-16.744L29 8.312l14.498 8.37-.002 16.745zm-29 0l-14.498-8.37.002-16.744L0 8.312l14.498 8.37-.002 16.745z'%20 stroke-width='1' stroke='%23303030' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>";
    }

    document.getElementById(".BanFileExplorer").prepend(teambackgrounddiv);

    return GetLeaguePickBans(datan.leader, 0);  // Start fetching match history
    
})
.then(() => {

    picksnbans.sort((a, b) => b.finished - a.finished);
    
    //console.log("Matches sorted:");
    //console.log(picksnbans);

    removeElementsByClass("removemeplss");
    removeElementsByClass("divvv");
    
    document.getElementById("h3").style.opacity = 1;
   
    printToWebsite(picksnbans, false);
    document.body.style.cursor = "not-allowed";
    
})
.catch((error) => {
    console.error('Error:', error);
});

let lastClickTime = 0;
const clickDelay = 500; // 500ms delay
let shouldnotwork = false;
function fetchLast5Players(matchid, rcursivecall,count, callback){

    const now = Date.now();
    if (now - lastClickTime < clickDelay) return;
    lastClickTime = now;
    if (callback) callback();

var loadGears = "https://atomicrecall.github.io/Cipher/images/gears.gif";
var loadingimage = document.createElement("img");
loadingimage.src = loadGears;
loadingimage.style.width = "600px";
loadingimage.style.height = "200px";
loadingimage.style.transform = "translate(-1000px,30px)";
loadingimage.style.position = "absolute";
loadingimage.id = "removemeplsss";
loadingimage.classList.add("removemepls");
document.getElementById("teambackgrounddiv").appendChild(loadingimage);
    //console.log("feetching last 5 players for "+matchid);
     return fetch(`https://open.faceit.com/data/v4/matches/${matchid}/stats`, {
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer 29645383-3447-4a8d-90b8-76fcf5904c45'
        }
    })
    .then((res) => {
        if (res.status === 404) {
            console.warn(`Match ${matchid} not found (404), continuing...`);
            return Promise.resolve();
        } else if (!res.ok) {
            throw new Error("Couldn't fetch that data");
        }
        return res.json();
    })
    .then((datan12) => {
        //console.log("HEHEHE");
        //console.log(datan12);
        if (datan12 == undefined || datan12 == null || datan12 == ""){
            //console.log("MATCH WAS NOT REAL "+matchid);
            return;
        }
        else {
            document.getElementById("removemeplsss").remove();
            //console.log("MATCH WAS REAL NO WAY");
            doitonlyonce = false;
            let damatchstats = datan12.rounds[0];
        let teams = damatchstats.teams;
        let tm1 = teams[0];
        let tm2 = teams[1];
        let players = [];
        if (tm1.team_id == localStorage.getItem("THETEAMWEARESEARCHING")){
            players = tm1.players;
            //console.log(tm1);
        }
        else{
            players = tm2.players;
            //console.log(tm2);
        }
        let bigplayerdivider = document.createElement("div");
        bigplayerdivider.id = "WHOLEPLAYERDIVIDER";
        if (rcursivecall){
            bigplayerdivider.style.pointerEvents = "auto";
        }
        else{
            
        }
        //console.log("POOPIE POOP");
        //console.log(datan12);
        //console.log(players);
        
        var amountcreated = 0;
        for (const player of players){
            let playerdivider = document.createElement("div");
            playerdivider.id = "PLAYERDIVIDER";

            bigplayerdivider.appendChild(playerdivider);
            bigplayerdivider.style.pointerEvents = "auto";
            document.getElementById("teambackgrounddiv").appendChild(bigplayerdivider);

            if (player.nickname === "floridiot"){
                player.nickname = "malders";
            }
  


            GetPlayerInfo(player.nickname, player.player_id, playerdivider, () => {

                amountcreated++;
                
                
            if (amountcreated >= 5){
                amountcreated = 0;
                if(document.getElementById("allInfo") && document.getElementById("allInfo").style.opacity === "0"){
                    document.getElementById("EncompassingDivider").style.opacity = "1";

                }
                
                setTimeout(() => {
                    
                    if(document.getElementById("allInfo").style.opacity === "0"){
                        if(document.getElementById("WHOLEPLAYERDIVIDER")){  
                            document.getElementById("WHOLEPLAYERDIVIDER").style.height = "50px";
                            document.getElementById("WHOLEPLAYERDIVIDER").style.transform = "translate(0px,-60px)";
                            document.getElementById("WHOLEPLAYERDIVIDER").style.gridAutoColumns = "min-content"; 
                            document.getElementById("WHOLEPLAYERDIVIDER").style.gap = "60px";
                    }
                        
                        for (var stuff of document.querySelectorAll("#PLAYERDIVIDER")){
                            if (stuff.querySelector(".TEAMPFP").src === "https://atomicrecall.github.io/Cipher/images/gears.gif"){
                                setTimeout(()=>{
                                    if(stuff.querySelector(".TEAMPFPNAME")){
                                        //stuff.querySelector(".TEAMPFPNAME").style.opacity = "0";
                                        stuff.querySelector(".TEAMPFPNAME").style.fontSize = "11px";
                                        stuff.querySelector(".TEAMPFPNAME").style.transform = "translate(10px,0px)";
                                    }
                                    
                                   // stuff.querySelector(".TEAMPFP").style.opacity = "0";
                                    stuff.querySelector(".TEAMPFP").style.height = "30px";
                                    stuff.querySelector(".TEAMPFP").style.margin = "0px";
                                    stuff.querySelector(".TEAMPFP").style.transform = "translate(10px,5px)";
                                    stuff.querySelector(".TEAMPFP").style.width = "30px";
                                },3000);
                            }
                            else{
                                if(stuff.querySelector(".TEAMPFPNAME")){
                                    stuff.querySelector(".TEAMPFPNAME").style.opacity = "1";
                                    stuff.querySelector(".TEAMPFPNAME").style.fontSize = "11px";
                                    stuff.querySelector(".TEAMPFPNAME").style.transform = "translate(10px,0px)";
                                }
                                
                                stuff.querySelector(".TEAMPFP").style.opacity = "1";
                                stuff.style.transform = "translateX(390px)";
                                stuff.querySelector(".TEAMPFP").style.height = "30px";
                                stuff.querySelector(".TEAMPFP").style.margin = "0px";
                                stuff.querySelector(".TEAMPFP").style.transform = "translate(10px,5px)";
                                stuff.querySelector(".TEAMPFP").style.width = "30px";
                            }

                        }
                    }
                }, 3000);
                document.body.style.cursor = "auto";
                
            }
            });
            
        }
        
    }
        
        

    });
}
let counterrrr = 0;
function GetPlayerInfo(nick , iddd, div, callback){
    
    let pfp = document.createElement("img");
    pfp.src = "https://atomicrecall.github.io/Cipher/images/gears.gif";
    pfp.classList.add("TEAMPFP");
    pfp.classList.add("LOADING");
    pfp.style.pointerEvents = "none";
    pfp.style.width = "120px";
    pfp.style.height = "75px";
    if (div.classList.item(0) === "PLAYERDIVIDERR"){
        pfp.style.transform = "translate(10px,5px)";
    }
    div.appendChild(pfp);

    fetch('https://open.faceit.com/data/v4/players?nickname='+nick+'&game=cs2', {
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer 29645383-3447-4a8d-90b8-76fcf5904c45'
        }
        }).then((res) => {
            if(!res.ok){
                
                pfp.id = "TEAMPFP"+counterrrr;
                let name = document.createElement("div");
                name.id = "TEAMPFPNAME"+counterrrr;
                name.innerHTML = nick;
                pfp.src = "https://atomicrecall.github.io/Cipher/images/DEFAULTT.jpg";
                name.classList.add("TEAMPFPNAME");
                div.appendChild(name);
                if (div.classList.item(0) === "PLAYERDIVIDERR"){

                    pfp.style.width = "50px";
                    pfp.style.height = "50px";
                    pfp.style.margin = "0px";
                    //pfp.style.transform = "translate(5px,-65px)";
                    div.style.transform = "translate(0px,5px)";
                    name.style.fontSize = "12px";
                    name.style.transform = "translate(10px,-71px)";
                    div.style.backgroundColor = "#344A60";
                    div.style.filter = "drop-shadow(0px 0px 3px black)";
                    

                    if ( document.getElementById(nick) && document.getElementById(nick).querySelector("#fishking") ){
                   
                            document.getElementById(nick).querySelector("#fishking").style.opacity = "1";
                        
                        
                        //document.querySelectorAll("#fishking").forEach(el =>{el.style.opacity = "1"});
                    }
                    if ( document.getElementById(nick) && document.getElementById(nick).querySelector("#INFOLOL") ){
                   
                        document.getElementById(nick).querySelector("#INFOLOL").style.opacity = "1";
                       // console.log(document.getElementById(nick))
                    
                    //document.querySelectorAll("#fishking").forEach(el =>{el.style.opacity = "1"});
                }

                  
                }
                else if(dividerclicked){
                    div.style.transform = "translateX(390px)";
                    pfp.style.width = "30px";
                    pfp.style.height = "30px";
                    pfp.style.margin = "0px";
                    pfp.style.transform = "translate(10px,5px)";
                    name.style.fontSize = "11px";
                    name.style.transform = "translate(10px)";
                    pfp.style.opacity = "1";
                    name.style.opacity = "1";

                }
                else{
                    
                    pfp.style.width = "75px";
                    pfp.style.height = "75px";

                }
                pfp.classList.remove("LOADING");
                //throw new Error("couldnt fetcht");

            }
            
            return res.json();
        })
        .then((data) =>{
           // console.log("GET DOWN NOW!");
            //get information like profile picture, flag, and nickname
           // console.log(data);
            
            

            
            pfp.id = "TEAMPFP"+counterrrr;
            let name = document.createElement("div");
            name.id = "TEAMPFPNAME"+counterrrr;
            name.classList.add("TEAMPFPNAME");
            counterrrr++;
            
            let captain = document.createElement("img");
            captain.src = "https://atomicrecall.github.io/Cipher/images/CAPTAIN.png";
            captain.id = "captainforthatonethingy";

            //name.innerHTML = data.nickname;
            div.appendChild(name);
            switch(data.avatar){
                case undefined:
                    pfp.src = "https://atomicrecall.github.io/Cipher/images/DEFAULTT.jpg"
                    break;
                case null:
                    pfp.src = "https://atomicrecall.github.io/Cipher/images/DEFAULTT.jpg"
                    break;
                case "":
                    pfp.src = "https://atomicrecall.github.io/Cipher/images/DEFAULTT.jpg"
                    break;
                default:
                    pfp.src = data.avatar;
                    break;
            }
            pfp.classList.remove("LOADING");

            switch(data.nickname){
                case undefined:
                    name.innerHTML = " ";
                    break;
                case null:
                    name.innerHTML = " ";
                    break;
                case "":
                    name.innerHTML = " ";
                    break;
                default:
                    name.innerHTML = data.nickname;
                    break;
            }
            pfp.style.pointerEvents = "auto";
            if (document.getElementById("mtches") && document.getElementById("mtches").querySelectorAll(".gamediv").clicked) {
                return; // Stop function if clicked
            }
            let pic2 = document.createElement("img");
            let name2 = document.createElement("div");

            if (div.classList.item(0) === "PLAYERDIVIDERR"){
                pfp.style.width = "50px";
                pfp.style.height = "50px";
                pfp.style.margin = "0px";
                //pfp.style.transform = "translate(5px,-65px)";
                div.style.transform = "translate(0px,5px)";
                name.style.fontSize = "12px";
                name.style.transform = "translate(10px,-71px)";
                div.style.backgroundColor = "#344A60";
                div.style.filter = "drop-shadow(0px 0px 3px black)";

                if ( document.getElementById(nick)){
                    if(document.getElementById(nick).querySelector("#fishking")){
                        document.getElementById(nick).querySelector("#fishking").style.opacity = "1";

                    }
                }
                if ( document.getElementById(nick) && document.getElementById(nick).querySelector("#INFOLOL") ){
                   
                    document.getElementById(nick).querySelector("#INFOLOL").style.opacity = "1";
                    
                
                //document.querySelectorAll("#fishking").forEach(el =>{el.style.opacity = "1"});
                }

            }
            else if(dividerclicked){
                div.style.transform = "translateX(390px)";
                pfp.style.width = "30px";
                pfp.style.height = "30px";
                pfp.style.margin = "0px";
                pfp.style.transform = "translate(10px,5px)";
                name.style.fontSize = "11px";
                name.style.transform = "translate(10px)";

            }
            else{
                pfp.style.width = "75px";
                pfp.style.height = "75px";
            }
            
            let clicks = 0;
            pfp.onmouseover = function(){
                if (clicks <= 0){
                pfp.style.filter = "drop-shadow(.5px 0.5px 3px white)";
                name.style.filter = "drop-shadow(.5px 0.5px 3px white)";
                captain.style.filter = "drop-shadow(.5px 0.5px 3px white)";
                }
                

            }
            pfp.onmouseout = function(){
                if(clicks <= 0){
                    pfp.style.filter = "drop-shadow(.5px 0.5px 0.75px black)";
                    name.style.filter = "drop-shadow(.5px 0.5px 3px black)";
                    captain.style.filter = "";
                }
                


            }
            
            pfp.onclick = function(){



                //TODO: DELETE HIGHLIGHTED PLAYER DIVIDER AND DO THE UPDATEDPLAYERSTATS.PNG



                if(dividerclicked){
                    clicks++;
                    
                }
                if(document.getElementById("PlayerStatsInfo")){
                    document.getElementById("PlayerStatsInfo").remove();
                }
                console.log("PICTURE CLICKED");
               
                if(dividerclicked && clicks === 1){
                   // console.log("HOVER OVER WHILE DIVIDER CLICKED");
                        //console.log(picksnbans);

                    /*
                    console.log("GET DOWN");
                     console.log(JSON.parse(localStorage.getItem("plyrStats")));
                    for (const players of JSON.parse(localStorage.getItem("plyrStats"))){
                        console.log(players.nickname);
                        console.log("//");
                        console.log(name.innerHTML);
                        if (players.nickname === name.innerHTML){
                            console.log(players);
                        }
                    }
                        */
                    pfp.style.filter = "drop-shadow(.5px 0.5px 10px orange)";
                    name.style.filter = "drop-shadow(.5px 0.5px 1px orange)";
                    captain.style.filter = "drop-shadow(.5px 0.5px 1px orange)";
                    pic2.src = pfp.src;
                    pic2.id = "DUPLICATEPIC";
                    pic2.style.position = "absolute";
                    pic2.style.width = "75px";
                    pic2.style.height = "75px";
                    pic2.style.transform = "translate(400px,180px)";
                    name2.id = "DUPLICATENAME";
                    name2.style.position = "absolute";
                    name2.innerHTML = name.innerHTML;
                    name2.style.webkitFilter = "drop-shadow(black 1px 1px 0.1px)";
                    name2.style.transform = "translate(400px,260px)";
                    name2.style.color = "white";
                    document.getElementById("quickInfo").prepend(pic2);
                    document.getElementById("quickInfo").prepend(name2);
                    /*
                    for (const match of picksnbans){
                        console.log("UMM???");
                        if (match.vote_type == matchid){
                           console.log(match);
                            
                            for (const player of match.PlayerStats){
                                for (const play of player){
                                    if (play.nickname === name.innerHTML){
                                        console.log("PLAYER STATS:");
                                        console.log(play.player_stats);
                                        let stats = play.player_stats;
                                        let overallDivider = document.createElement("div");
                                        overallDivider.id = "OverallDivider";
                                        overallDivider.style.transform = "translate(10px, 350px)";
                                        overallDivider.style.width = "490px";
                                        overallDivider.style.height = "140px";
                                        overallDivider.style.position = "absolute";
                                        let playerStatsInfo = document.createElement("div");
                                        playerStatsInfo.id = "PlayerStatsInfo";
                                        playerStatsInfo.style.position = "absolute";
                                        playerStatsInfo.style.color = "white";
                                        
                                        playerStatsInfo.innerHTML+="Kills: "+stats.Kills+"<br>";
                                        playerStatsInfo.innerHTML+="Deaths: "+stats.Deaths+"<br>";
                                        playerStatsInfo.innerHTML+="Assists: "+stats.Assists+"<br>";
                                        playerStatsInfo.innerHTML+="ADR: "+stats.ADR+"<br>";
                                        playerStatsInfo.innerHTML+="MVPs: "+stats.MVPs+"<br>";
                                        playerStatsInfo.innerHTML+="Headshots: "+stats.Headshots+"<br>";
                                        console.log(playerStatsInfo.innerHTML);
                                        let buttondivider = document.createElement("div");
                                        buttondivider.id = "dabuttondivider";
                                        console.log("DONE NOW ADDING:");
                                        overallDivider.appendChild(playerStatsInfo);
                                        document.getElementById("quickInfo").prepend(overallDivider);
                                    }
                                }
                            }
                            
                        }
                            
                    }
                    */
                    
                        
                }

                if (dividerclicked && clicks === 2){
                    clicks = 0;
                    if(document.getElementById("quickInfo") && document.getElementById("quickInfo")){
                    document.getElementById("quickInfo").removeChild(pic2);
                    document.getElementById("quickInfo").removeChild(name2);
                    if(document.getElementById("OverallDivider")){
                        document.getElementById("quickInfo").removeChild(document.getElementById("OverallDivider"));
                    }
                    pfp.style.filter = "drop-shadow(.5px 0.5px 0.75px black)";
                    name.style.filter = "drop-shadow(.5px 0.5px 3px black)";
                    captain.style.filter = "";
                    }
                }
                else if (!dividerclicked){
                    window.open("https://www.faceit.com/en/players/"+nick);
                }
                
            }
            
            
            if(div.classList.item(0) !== "PLAYERDIVIDERR"){
                if (iddd === localStorage.getItem("LeaderID")){
                    div.appendChild(captain);
                    //localStorage.removeItem("LeaderID");
                }
            }
            
            

            
            
            
        });

        if(callback){
            setTimeout(() => {
                // Do something...
                callback(); // call when done
            }, 10);
        }
        

}
// Function to recursively fetch match history for the leader
function GetLeaguePickBans(leaderid, offset) {

    if (stoporgosearch){
        return fetch(`https://open.faceit.com/data/v4/players/${leaderid}/history?game=cs2&offset=${offset}&limit=100`, {
            headers: {
                'accept': 'application/json',
                'Authorization': 'Bearer 29645383-3447-4a8d-90b8-76fcf5904c45'
            }
        }).then((res) => {
            if (!res.ok) {
                if (res.status == 404) {
                    //update the loading bar saying like not found or error idk lmfao
                    loadingbar.innerHTML+=`Match not found (404), continuing...`;
                    console.warn(`Match history not found (404), continuing...`);
                    return Promise.resolve(); // Resolve to continue without error
                }
                throw new Error("Couldn't fetch that data");
            }
            return res.json();
        })
        .then((data) => {
    
            let allMatches = data.items;
          
           if (!allMatches || allMatches.length === 0 || offset >= 600) return Promise.resolve(); // End if no more matches
    
            console.log(`Fetched ${allMatches.length} matches`);
            //console.log(allMatches);
            // Process each match and filter

            let matchPromises = allMatches.map((match) => {
                //update the loading bar here.
                var dating = new Date(match.finished_at*1000);
                //loadingbar.innerHTML+=match.competition_name+" - "+dating.getMonth()+"/"+dating.getDate()+" - "+dating.getHours()+":"+dating.getMinutes()+"<br>";
                //console.log(match.teams);
                if (match.competition_name.includes("ESEA") && !match.competition_name.includes("Qualifier")) {
                    let teamsinmatch = match.teams;
                   // console.log(teamsinmatch);
                    let tm1 = teamsinmatch.faction1;
                    let tm2 = teamsinmatch.faction2;
                    if (tm1.team_id !== localStorage.getItem("THETEAMWEARESEARCHING") &&
                        tm2.team_id !== localStorage.getItem("THETEAMWEARESEARCHING")) {
                            stoporgosearch = false;
                                console.log("Team not found.");
                                return Promise.resolve(); // Exit early
                            /*
                            var isplayerinteam = false;

                        for (let players of tm1.players){
                            if(players.player_id === leaderid){

                                isplayerinteam = true;
                            }
                        }
                        if(!isplayerinteam){
                            for (let players of tm2.players){
                                if(players.player_id === leaderid){
                                    isplayerinteam = true;
                                }
                            }
                            if (!isplayerinteam){
                                stoporgosearch = false;
                                console.log("Team not found.");
                                return Promise.resolve(); // Exit early
                            }
                        }
                        else{

                        }
                        */
                        
                    }
                    finishedmatchesrealcounter++;
                    finishedtext.innerHTML+=match.competition_name+" - "+(dating.getMonth()+1)+"/"+dating.getDate()+" - "+((dating.getHours() < 10) ? 0+dating.getHours().toString() : dating.getHours())+":"+((dating.getMinutes() < 10) ? 0+dating.getMinutes().toString() : dating.getMinutes())+"<br>";
                    finishedcounter.innerHTML = finishedmatchesrealcounter;
                  
                    


                            
                    
                    
                    return fetchMatchData(match.match_id, leaderid, count); // Fetch only non-S48 ESEA matches
                }

                return Promise.resolve();
            });
    
            // If not S48, fetch the next batch of matches (recursive call)
            return Promise.all(matchPromises).then(() => GetLeaguePickBans(leaderid, offset + 100));
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    
}






function fetchMatchData(matchid,leaderid,count) {
    
    return fetch(`https://open.faceit.com/data/v4/matches/${matchid}`, {
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer 29645383-3447-4a8d-90b8-76fcf5904c45'
        }
    })
    .then((res) => {
        if (res.status === 404) {
            console.warn(`Match ${matchid} not found (404), continuing...`);
            return Promise.resolve();
        } else if (!res.ok) {
            throw new Error("Couldn't fetch that data");
        }
        return res.json();
    })
    .then((datan12) => {
        //console.log("OOOOO LOOK AT ME");
        //console.log(datan12);
        
        let t1pfp = datan12.teams.faction1.avatar;

        let t2pfp = datan12.teams.faction2.avatar;
     
        
        let errthang = datan12;
        //let compnamee = datan12.competition_name.substring(4);
        let season = errthang.competition_name.substring(6, 8);
        let division = datan12.competition_name.substring(12);
        if (division.includes("Main")){
            division = "Main";
        }
        else if (division.includes("Advanced")){
            division = "Advanced";
        }
        else if (division.includes("Open")){
            //console.log(division);
            division = "Open";
        }
        else if (division.includes("Intermediate")){
            division = "Intermediate";
        }
        else if (division.includes("ECL")){
            division = "ECL";
        }
       // console.log("WE FOUND COMPETITION ID "+datan12.competition_id+" FOR S"+season+" "+division);
        let poopcockvagina = database.ref("championshipIDS/Season "+season+"/Regular Season"+"/"+division).on('value', function(snapshot){
            var data = snapshot.val();
            //console.log(data);  
            if (data === null){
                const wherefoldergoes = database.ref("championshipIDS/Season "+season+"/Regular Season");
                wherefoldergoes.update({ [division]: datan12.competition_id }) // Creates the path without overwriting existing data
                .then(() => console.log("Path created:", wherefoldergoes))
                .catch(error => console.error("Error creating path:", error));
            }
            });
            
        //console.log("Found competition id "+datan12.competition_id+" for "+compnamee);
        let compname = errthang.competition_name;

        let faceitlink = errthang.faceit_url.replace("{lang}", '');
        
        let bostof = errthang.best_of;
        //console.log(errthang)
        let fac1 = errthang.teams.faction1.name;
        let fac2 = errthang.teams.faction2.name;

        let finishedat = errthang.finished_at;
       // console.log(errthang.teams.faction1.leader);
        let winnerid = "fartcock";
        let winner = datan12.detailed_results[0].winner;
        let fac1wins = 0;
        let fac2wins = 0;
       // console.log("GET DOWN!!");
       //console.log(fac1+" vs "+fac2);
        for (const winor of datan12.detailed_results){
           // console.log(winor.winner);

            //check the winner of every winor, count the amount of times fac1 wins and count the amount of times fac2 wins, whichever one is bigger is the winner
            if (winor.winner === "faction1"){
                //console.log("faction 1 won one map")
                fac1wins++;
            }
            else if(winor.winner === "faction2") {
                //console.log("faction 2 won one map");
                fac2wins++;
            }
        }
        if(fac1wins > fac2wins){
            winner = fac1;
            winnerid = datan12.teams.faction1.faction_id;
        }
        else{
            winner = fac2;
            winnerid = datan12.teams.faction2.faction_id;
        }
        return fetch(`https://open.faceit.com/data/v4/matches/${matchid}/stats`, {
            headers: {
                'accept': 'application/json',
                'Authorization': 'Bearer 29645383-3447-4a8d-90b8-76fcf5904c45'
            }
        })
        .then((res) => {
            if (res.status === 404) {
                console.warn(`Match ${matchid} not found (404), continuing...`);
                return Promise.resolve();
            } else if (!res.ok) {
                throw new Error("Couldn't fetch that data");
            }
            return res.json();
        })
        .then((datan123) => {
            
            //console.log("UM WHAT THE CHEESE?");
            //console.log(datan123);
            let playerStats = [];
            let detailedscr = datan123.rounds;
            let scoree = null;
            var counter = 0;
            for (const round of detailedscr){
                counter++;
                
                //find the team that we are looking at, and send all player stats from that game to picksnbanz
                let teams = round.teams;
                  if (!playerStats["GAME" + counter]) {
                    playerStats["GAME" + counter] = [];
                  }

                for (const team of teams){
                    //console.log(team);
                    if (!playerStats["GAME"+counter][team.team_stats.Team]){
                        playerStats["GAME"+counter][team.team_stats.Team] = [];
                    }
                    var players = team.players;
                    playerStats["GAME" + counter][team.team_stats.Team].push(players);
                
                }
            }
            
            let temp = datan123.rounds[0].teams;
            let tem1id = temp[0].team_id;
            let tem2id = temp[1].team_id;
            if (datan123.rounds.length > 1){
                scoree = fac1wins+" / "+fac2wins;
            }
            else{
                scoree = datan123.rounds[0].round_stats.Score;
            }
            
            return fetch(`https://cipher-virid.vercel.app/api/proxy2?endpoint=${matchid}/history`,{
                method: 'GET',
                headers:{
                    'Access-Control-Allow-Origin' : '*',
                    'Access-Control-Allow-Headers' : '*',
                }
            })
                
                
            /*
            return fetch(`https://api.faceit.com/democracy/v1/match/${matchid}/history`,{
                method: 'GET'
            })
                */
               
                
            .then((response) => {
                if (response.status === 404) {
                    console.warn(`Match ${matchid} not found, continuing...`);
                    return Promise.resolve();
                } else if (!response.ok) {
                    throw new Error("Couldn't fetch that data");
                }
                return response.json();
            })
            .then((data) => {
                let picksnbanz = [];
                
                let payload = data.payload;
                //console.log("AAAAAAAAAA");
                //console.log(payload);
                picksnbanz.push(payload.tickets[2]);

                for (let d = 0; d < picksnbanz[0].entities.length; d++) {
                   // console.log(picksnbanz[0].entities[d].selected_by);
                    switch (picksnbanz[0].entities[d].selected_by) {
                        case "faction1":
                            picksnbanz[0].entities[d].selected_by = fac1;
                            break;
                        case "faction2":
                            picksnbanz[0].entities[d].selected_by = fac2;
                            break;
                        default:
                            break;
                    }
                }
                let fart = [];
                let result = [];
                let team1 = [];
                let team2 = [];
                let NOCAP = true;
                let shart = [];

                team1.push(t1pfp);
                team1.push(fac1);
                team1.push(tem1id);
                team2.push(t2pfp);
                team2.push(fac2);
                team2.push(tem2id);
                shart.push(team1);
                shart.push(team2);
                picksnbanz[0]['detailed_score'] = fart;
                picksnbanz[0]['detailed_results'] = result;
                picksnbanz[0].vote_type = payload.match_id;
                picksnbanz[0].entity_type = bostof;
                picksnbanz[0]['season'] = season;
                picksnbanz[0]['compname'] = compname
                picksnbanz[0]['finished'] = finishedat;
                picksnbanz[0]['score'] = scoree;
                picksnbanz[0]['winner'] = winner;
                picksnbanz[0]['winnerID'] = winnerid;
                picksnbanz[0].entities[picksnbanz[0].entities.length - 1].selected_by = picksnbanz[0].entities[picksnbanz[0].entities.length - 2].selected_by;
                picksnbanz[0]['teams'] = shart;
                picksnbanz[0]['link'] = faceitlink;
                picksnbanz[0]['PlayerStats'] = playerStats;
                picksnbanz[0]['division'] = division;

                for (const allTeams of detailedscr){
                    //check each team, once you found the captain, send a variable to the specific team the captain is on, we will use the variable for other stuff later
                    for (const players of allTeams.teams[0].players){
                        if (players.player_id === leaderid){
                            team1.push("CAP");
                            //console.log(team1);
                           // THETEAMWEARESEARCHING = team1[2];
                            NOCAP = false;
                            break;
                        }
                        else{
                            
                        }
                    }
                    for (const players of allTeams.teams[1].players){
                        if (players.player_id === leaderid){
                            team2.push("CAP");
                           // THETEAMWEARESEARCHING = team2[2];
                            //console.log(team2);
                            NOCAP = false;
                            break;
                        }
                        else{
                            NOCAP = true;
                            continue;
                        }
                    }
                    
                    if (NOCAP == true){
                        team2.push("NO CAPTAIN FOUND");
                    }
                
                    (allTeams.round_stats.Winner == allTeams.teams[0].team_id) ? result.push(allTeams.teams[0].team_id): result.push(allTeams.teams[1].team_id);
                    (allTeams.round_stats.Winner == allTeams.teams[0].team_id) ? result.push(allTeams.round_stats.Map) : result.push(allTeams.round_stats.Map);
                    fart.push(allTeams.round_stats.Score);
                }

                // Update global array
                picksnbans.push(picksnbanz[0]);
                //console.log(picksnbans);
            });
        });
    })
    .catch((error) => {
        console.warn('Error:', error);
    });
    
}


function createCover(dapicksanddabans, d,info,quickInfoDivider){
 
                    quickInfoDivider.innerHTML = dapicksanddabans[d].compname;
                        //function that calculates info for current highlighted game (you can get the matchid by getting the vote_type from)
                    //dapicksanddabans[d] returns the correct ban information for that hightlighted map.
                    //we want the pick ban process, so take the array that's in picksandbans[d] and display what the info is ex. Spin da Block banned de_vertigo
                    //                                                                                                           PIG Gaming banned de_nuke
                    //                                                                                                           PIG Gaming banned de_inferno
                    //                                                                                                           Spin da Block banned de_mirage
                    //                                                                                                           Spind da Block banned de_dust2
                    //                                                                                                           PIG Gaming banned de_ancient
                    //                                                                                                           Left over but picked by PIG Gaming
                    let somanymapss = document.createElement('div');
                    somanymapss.id = "cvr";
                    somanymapss.style.width = "600px";
                    let counter = 0;
                    for (const p of dapicksanddabans[d].entities){
                        counter = counter+1;
                        if (p.status == "pick"){
                            let bigimage = document.createElement('img');
                            bigimage.id = "image";
                            bigimage.classList.add("cvr");

                            if(dapicksanddabans[d].entity_type >= 2){
                                bigimage.style.height = "300px";
                                bigimage.style.width = "167px";
                                switch (p.guid){
                                    case "de_train":
                                        bigimage.src = image_links[7];
                                        break;
                                    case "de_ancient":
                                        bigimage.src = image_links[0];
                                        break;
                                    case "de_anubis":
                                        bigimage.src = image_links[1];
                                        break;
                                    case "de_inferno":
                                        bigimage.src = image_links[2];
                                        break;
                                    case "de_dust2":
                                        bigimage.src = image_links[3];
                                        break;
                                    case "de_mirage":
                                        bigimage.src = image_links[4];
                                        break;
                                    case "de_nuke":
                                        bigimage.src = image_links[5];
                                        break;
                                    case "de_vertigo":
                                        bigimage.src = image_links[6];
                                        break;
                                    default:
                                        bigimage.src = "data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='29' height='50.115' patternTransform='scale(1) rotate(90)'><rect x='0' y='0' width='100%' height='100%' fill='%23161616'/><path d='M14.498 16.858L0 8.488.002-8.257l14.5-8.374L29-8.26l-.002 16.745zm0 50.06L0 58.548l.002-16.745 14.5-8.373L29 41.8l-.002 16.744zM28.996 41.8l-14.498-8.37.002-16.744L29 8.312l14.498 8.37-.002 16.745zm-29 0l-14.498-8.37.002-16.744L0 8.312l14.498 8.37-.002 16.745z'%20 stroke-width='1' stroke='%23303030' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>";
                                        break;
                                }
                                if(dapicksanddabans[d].entity_type > 3){
                                    bigimage.classList.remove("cvr");
                                    bigimage.classList.add("dvr");
                                    bigimage.style.width = "100px";
                                }
                            }
                            else{
                                bigimage.classList.remove("cvr");
                                bigimage.classList.add("pvr");
                                bigimage.style.height = "300px";
                                bigimage.style.width = "500px";
                                switch (p.guid){
                                    case "de_train":
                                        bigimage.src = image_links[7];
                                        break;
                                    case "de_ancient":
                                        bigimage.src = image_links[0];
                                        break;
                                    case "de_anubis":
                                        bigimage.src = image_links[1];
                                        break;
                                    case "de_inferno":
                                        bigimage.src = image_links[2];
                                        break;
                                    case "de_dust2":
                                        bigimage.src = image_links[3];
                                        break;
                                    case "de_mirage":
                                        bigimage.src = image_links[4];
                                        break;
                                    case "de_nuke":
                                        bigimage.src = image_links[5];
                                        break;
                                    case "de_vertigo":
                                        bigimage.src = image_links[6];
                                        break;
                                    default:
                                        bigimage.src = "data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='29' height='50.115' patternTransform='scale(1) rotate(90)'><rect x='0' y='0' width='100%' height='100%' fill='%23161616'/><path d='M14.498 16.858L0 8.488.002-8.257l14.5-8.374L29-8.26l-.002 16.745zm0 50.06L0 58.548l.002-16.745 14.5-8.373L29 41.8l-.002 16.744zM28.996 41.8l-14.498-8.37.002-16.744L29 8.312l14.498 8.37-.002 16.745zm-29 0l-14.498-8.37.002-16.744L0 8.312l14.498 8.37-.002 16.745z'%20 stroke-width='1' stroke='%23303030' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>";
                                        break;
                                }
                            }
                            somanymapss.appendChild(bigimage);
                        }
                        let final = (counter == 7) ? "(LEFT OVER) "+p.selected_by+" "+(p.status=="drop" ? '<span class="red"> banned' : '<span class="green"> picked')+"</span> "+p.guid+".<br/>": p.selected_by+" "+(p.status=="drop" ? '<span class="red"> banned' : '<span class="green"> picked')+"</span> "+p.guid+".<br/>";
                        info.innerHTML+=final;


                    }

                    let tm1pfp = document.createElement("img");
                    tm1pfp.id = "tm1pfp";
                    let fjksdhfksdj = dapicksanddabans[d].teams[0];
                    let tm1nme = document.createElement("div");
                    tm1nme.innerHTML = fjksdhfksdj[1];
                    tm1nme.id = "tm1nme";
                    tm1nme.style.position = "absolute";
                    tm1nme.style.fontSize = "25px";
                    tm1nme.style.transform = "translate(50px,-250px)";
                    tm1nme.style.color = "#ffffff";
                    
                    tm1nme.style.textShadow = "0px 0px 2px "+(( fjksdhfksdj[2] == dapicksanddabans[d].winnerID) ? "green" : "red");
                    checkImageExists(fjksdhfksdj[0], function(exists) {
                        if (exists) {
                            tm1pfp.src = fjksdhfksdj[0];
                        } else {
                            tm1pfp.src = defaultimage// Use fallback URL if the image doesn't exist
                        }
                    });

                    // Creating the second image element
                    let tm2pfp = document.createElement("img");
                    tm2pfp.id = "tm2pfp";
                    let fsdfesfsdf = dapicksanddabans[d].teams[1];
                    let tm2nme = document.createElement("div");
                    tm2nme.innerHTML = fsdfesfsdf[1];
                    tm2nme.id = "tm2nme";
                    tm2nme.style.position = "absolute";
                    tm2nme.style.fontSize = "25px";
                    tm2nme.style.transform = "translate(290px,-250px)";
                    
                    tm2nme.style.color = "#ffffff";
                    
                    tm2nme.style.textShadow = "0px 0px 2px "+(( fsdfesfsdf[2] == dapicksanddabans[d].winnerID) ? "green" : "red");


                    checkImageExists(fsdfesfsdf[0], function(exists) {
                        if (exists) {
                            tm2pfp.src = fsdfesfsdf[0];
                        } else {
                            tm2pfp.src = defaultimage; // Use fallback URL if the image doesn't exist
                        }
                    });


                    //display score here?
                    let VS = document.createElement("div");
                    VS.id = "VS";
                    VS.innerHTML = "VS";

                    tm1pfp.onmouseover = function(){
                        tm1pfp.style.filter = "drop-shadow(.1px 0px 5px white)";
                        tm1pfp.style.cursor = "pointer";
                        tm1nme.style.filter = "drop-shadow(.1px 0px 5px white)";
                        tm1nme.style.cursor = "pointer";
                    }
                    tm1pfp.onmouseout = function(){
                        tm1pfp.style.filter = "";
                        tm1pfp.style.cursor = "default";
                        tm1nme.style.filter = "";
                        tm1nme.style.cursor = "default";
                    }
                    tm1pfp.onclick = function(){
                        
                        window.open("https://www.faceit.com/en/teams/"+fjksdhfksdj[2]);
                    }

                    tm2pfp.onmouseover = function(){
                        tm2pfp.style.filter = "drop-shadow(.1px 0px 5px white)";
                        tm2pfp.style.cursor = "pointer";
                        tm2nme.style.filter = "drop-shadow(.1px 0px 5px white)";
                        tm2nme.style.cursor = "pointer";
                    }
                    tm2pfp.onmouseout = function(){
                        tm2pfp.style.filter = "";
                        tm2pfp.style.cursor = "default";
                        tm2nme.style.filter = "";
                        tm2nme.style.cursor = "default";
                    }
                    tm2pfp.onclick = function(){
                      
                        window.open("https://www.faceit.com/en/teams/"+fsdfesfsdf[2]);
                    }
                    somanymapss.appendChild(tm1pfp);
                    somanymapss.appendChild(tm1nme);
                    somanymapss.appendChild(tm2pfp);
                    somanymapss.appendChild(tm2nme);
                    somanymapss.appendChild(VS);
                    quickInfoDivider.appendChild(somanymapss);
                    quickInfoDivider.appendChild(info);

                    let omfgsomanycounters = 0;
                    for (const stuff of dapicksanddabans[d].detailed_results){
                        if(omfgsomanycounters % 2==0){
                            //console.log(dapicksanddabans[d].detailed_score[omfgsomanycounters/2] +" -  -  - "+dapicksanddabans[d].detailed_score[omfgsomanycounters/2].length);
                           // console.log("THETEAMWEARESEARCHING = "+THETEAMWEARESEARCHING+" THE WINNING TEAM IS "+dapicksanddabans[d].detailed_results[omfgsomanycounters]);
                            //console.log(dapicksanddabans[d]);
                            if (dapicksanddabans[d].detailed_results[omfgsomanycounters] === THETEAMWEARESEARCHING){
                                let somanyscore = document.createElement("div");
                                somanyscore.classList.add("scoreinthescore");
                                somanyscore.id =  ((omfgsomanycounters/2)+1);
                                somanyscore.style.color = 'green';
                                somanyscore.style.width = "150px";
                                somanyscore.style.height = "75px";
                                somanyscore.innerHTML = `<span id = txtt style= "padding-left:${dapicksanddabans[d].detailed_score[omfgsomanycounters/2].length >= 7 ? 24 : 33.5}px; padding-right:${dapicksanddabans[d].detailed_score[omfgsomanycounters/2].length >= 7 ? 27 : 32}px;">`+dapicksanddabans[d].detailed_score[omfgsomanycounters/2]+"</span>";
                                //somanyscoree.push(dapicksanddabans[d].detailed_results[omfgsomanycounters+1]);
                               //console.log(dapicksanddabans[d]);
                                switch(dapicksanddabans[d].detailed_results[omfgsomanycounters+1]){
                                    case "de_mirage":
                                        var mapimg = document.createElement("img");
                                        mapimg.id = "imgg";
                                        mapimg.src = image_links[4];
                                        somanyscore.appendChild(mapimg);
                                        for (const entity of dapicksanddabans[d].entities){
                                            if (entity.guid === "de_mirage" && entity.status === "pick"){
                                               // console.log(entity.selected_by +"////// OUR TEAM = "+document.getElementById("tm1nme").innerHTML +" FUCKING OR .//// "+document.getElementById("tm2nme").innerHTML);
                                                let P = document.createElement("div");
                                                P.innerHTML = "P";
                                                P.id = "P";
                                                somanyscore.appendChild(P);
                                                if (entity.selected_by === document.getElementById("tm1nme").innerHTML){

                                                    P.style.transform = "translate(17px,-48px)";
                                                }
                                                else if (entity.selected_by === document.getElementById("tm2nme").innerHTML){
                                                    
                                                    P.style.transform = "translate(118px,-48px)";
                                                }
                                            }
                                        }
                                        break;
                                    case "de_dust2":
                                        var mapimg = document.createElement("img");
                                        mapimg.id = "imgg";
                                        mapimg.src = image_links[3];
                                        somanyscore.appendChild(mapimg);
                                        for (const entity of dapicksanddabans[d].entities){
                                            if (entity.guid === "de_dust2" && entity.status === "pick"){
                                                let P = document.createElement("div");
                                                P.innerHTML = "P";
                                                P.id = "P";
                                                somanyscore.appendChild(P);
                                                if (entity.selected_by === document.getElementById("tm1nme").innerHTML){

                                                    P.style.transform = "translate(17px,-48px)";
                                                }
                                                else if (entity.selected_by === document.getElementById("tm2nme").innerHTML){
                                                    
                                                    P.style.transform = "translate(118px,-48px)";
                                                }
                                            }
                                        }
                                        break;
                                    case "de_train":
                                        var mapimg = document.createElement("img");
                                        mapimg.id = "imgg";
                                        mapimg.src = image_links[7];
                                        somanyscore.appendChild(mapimg);
                                        for (const entity of dapicksanddabans[d].entities){
                                            if (entity.guid === "de_train" && entity.status === "pick"){
                                                let P = document.createElement("div");
                                                P.innerHTML = "P";
                                                P.id = "P";
                                                somanyscore.appendChild(P);
                                                if (entity.selected_by === document.getElementById("tm1nme").innerHTML){

                                                    P.style.transform = "translate(17px,-48px)";
                                                }
                                                else if (entity.selected_by === document.getElementById("tm2nme").innerHTML){
                                                    
                                                    P.style.transform = "translate(118px,-48px)";
                                                }
                                            }
                                        }
                                        break;
                                    case "de_inferno":
                                        var mapimg = document.createElement("img");
                                        mapimg.id = "imgg";
                                        mapimg.src = image_links[2];
                                        somanyscore.appendChild(mapimg);
                                        for (const entity of dapicksanddabans[d].entities){
                                            if (entity.guid === "de_inferno" && entity.status === "pick"){
                                                let P = document.createElement("div");
                                                P.innerHTML = "P";
                                                P.id = "P";
                                                somanyscore.appendChild(P);
                                                if (entity.selected_by === document.getElementById("tm1nme").innerHTML){

                                                    P.style.transform = "translate(17px,-48px)";
                                                }
                                                else if (entity.selected_by === document.getElementById("tm2nme").innerHTML){
                                                    
                                                    P.style.transform = "translate(118px,-48px)";
                                                }
                                            }
                                        }
                                        break;
                                    case "de_anubis":
                                        var mapimg = document.createElement("img");
                                        mapimg.id = "imgg";
                                        mapimg.src = image_links[1];
                                        somanyscore.appendChild(mapimg);
                                        for (const entity of dapicksanddabans[d].entities){
                                            if (entity.guid === "de_anubis" && entity.status === "pick"){
                                                let P = document.createElement("div");
                                                P.innerHTML = "P";
                                                P.id = "P";
                                                somanyscore.appendChild(P);
                                                if (entity.selected_by === document.getElementById("tm1nme").innerHTML){

                                                    P.style.transform = "translate(17px,-48px)";
                                                }
                                                else if (entity.selected_by === document.getElementById("tm2nme").innerHTML){
                                                    
                                                    P.style.transform = "translate(118px,-48px)";
                                                }
                                            }
                                        }
                                        break;
                                    case "de_ancient":
                                        var mapimg = document.createElement("img");
                                        mapimg.id = "imgg";
                                        mapimg.src = image_links[0];
                                        somanyscore.appendChild(mapimg);
                                        for (const entity of dapicksanddabans[d].entities){
                                            if (entity.guid === "de_ancient" && entity.status === "pick"){
                                                let P = document.createElement("div");
                                                P.innerHTML = "P";
                                                P.id = "P";
                                                somanyscore.appendChild(P);
                                                if (entity.selected_by === document.getElementById("tm1nme").innerHTML){

                                                    P.style.transform = "translate(17px,-48px)";
                                                }
                                                else if (entity.selected_by === document.getElementById("tm2nme").innerHTML){
                                                    
                                                    P.style.transform = "translate(118px,-48px)";
                                                }
                                            }
                                        }
                                        break;
                                    case "de_nuke":
                                        var mapimg = document.createElement("img");
                                        mapimg.id = "imgg";
                                        mapimg.src = image_links[5];
                                        somanyscore.appendChild(mapimg);
                                        for (const entity of dapicksanddabans[d].entities){
                                            if (entity.guid === "de_nuke" && entity.status === "pick"){
                                                let P = document.createElement("div");
                                                P.innerHTML = "P";
                                                P.id = "P";
                                                somanyscore.appendChild(P);
                                                if (entity.selected_by === document.getElementById("tm1nme").innerHTML){

                                                    P.style.transform = "translate(17px,-48px)";
                                                }
                                                else if (entity.selected_by === document.getElementById("tm2nme").innerHTML){
                                                    
                                                    P.style.transform = "translate(118px,-48px)";
                                                }
                                            }
                                        }
                                        break;
                                    case "de_vertigo":
                                        var mapimg = document.createElement("img");
                                        mapimg.id = "imgg";
                                        mapimg.src = image_links[6];
                                        somanyscore.appendChild(mapimg);
                                        for (const entity of dapicksanddabans[d].entities){
                                            if (entity.guid === "de_vertigo" && entity.status === "pick"){
                                                let P = document.createElement("div");
                                                P.innerHTML = "P";
                                                P.id = "P";
                                                somanyscore.appendChild(P);
                                                if (entity.selected_by === document.getElementById("tm1nme").innerHTML){

                                                    P.style.transform = "translate(17px,-48px)";
                                                }
                                                else if (entity.selected_by === document.getElementById("tm2nme").innerHTML){
                                                    
                                                    P.style.transform = "translate(118px,-48px)";
                                                }
                                            }
                                        }
                                        break;

                                }
                                let t1cpy = document.createElement("img");
                                t1cpy.id = "tm1copy";
                                t1cpy.style.zIndex = "1";
                                t1cpy.style.height = "20px";
                                t1cpy.style.width = "20px";
                                checkImageExists(fjksdhfksdj[0], function(exists) {
                                    if (exists) {
                                        
                                        t1cpy.src = fjksdhfksdj[0];
                                    } else {
                                        t1cpy.src = defaultimage; // Use fallback URL if the image doesn't exist
                                    }
                                });
                                
                               // t1cpy.src = tm1pfp.src;
                                let t2cpy = document.createElement("img");
                                t2cpy.id = "tm2copy";
                                t2cpy.style.height = "20px";
                                t2cpy.style.width = "20px";
                         
                                checkImageExists(fsdfesfsdf[0], function(exists) {
                                    if (exists) {
                                        
                                        t2cpy.src = fsdfesfsdf[0];
                                    } else {
                                        t2cpy.src = defaultimage; // Use fallback URL if the image doesn't exist
                                    }
                                });
                                //t2cpy.src = document.getElementById("tm2pfp").src;
                                //console.log(t1cpy);
                                //console.log(t2cpy);
                               // console.log(tm2pfp);
                                somanyscore.appendChild(t1cpy);
                                somanyscore.prepend(t2cpy);
                                quickInfoDivider.appendChild(somanyscore);
                                //dascore.style.color = 'green';
                                //dascore.style.webkitFilter = "drop-shadow(0px 0px 2pxrgb(38, 255, 0))";
                                
                                
                            }
                            else {
                                let somanyscoree = document.createElement("div");
                                somanyscoree.classList.add("scoreinthescore");
                                somanyscoree.id = ((omfgsomanycounters/2)+1);
                                somanyscoree.style.color = 'red';
                                somanyscoree.style.width = "150px";
                                somanyscoree.style.height = "75px";

                                somanyscoree.innerHTML = `<span id = txtt style= "padding-left:${dapicksanddabans[d].detailed_score[omfgsomanycounters/2].length >= 7 ? 24 : 33.5}px; padding-right:${dapicksanddabans[d].detailed_score[omfgsomanycounters/2].length >= 7 ? 27 : 32}px;">`+dapicksanddabans[d].detailed_score[omfgsomanycounters/2]+"</span>";
                                //somanyscoree.push(dapicksanddabans[d].detailed_results[omfgsomanycounters+1]);

                                switch(dapicksanddabans[d].detailed_results[omfgsomanycounters+1]){
                                    case "de_mirage":
                                        var mapimg = document.createElement("img");
                                        mapimg.id = "imgg";
                                        mapimg.src = image_links[4];
                                        somanyscoree.appendChild(mapimg);
                                        for (const entity of dapicksanddabans[d].entities){
                                            if (entity.guid === "de_mirage" && entity.status === "pick"){
                                               // console.log(entity.selected_by +"////// OUR TEAM = "+document.getElementById("tm1nme").innerHTML +" FUCKING OR .//// "+document.getElementById("tm2nme").innerHTML);
                                                let P = document.createElement("div");
                                                P.innerHTML = "P";
                                                P.id = "P";
                                                somanyscoree.appendChild(P);
                                                if (entity.selected_by === document.getElementById("tm1nme").innerHTML){

                                                    P.style.transform = "translate(17px,-48px)";
                                                }
                                                else if (entity.selected_by === document.getElementById("tm2nme").innerHTML){
                                                    
                                                    P.style.transform = "translate(118px,-48px)";
                                                }
                                            }
                                        }
                                        break;
                                    case "de_dust2":
                                        var mapimg = document.createElement("img");
                                        mapimg.id = "imgg";
                                        mapimg.src = image_links[3];
                                        somanyscoree.appendChild(mapimg);
                                        for (const entity of dapicksanddabans[d].entities){
                                            if (entity.guid === "de_dust2" && entity.status === "pick"){
                                                let P = document.createElement("div");
                                                P.innerHTML = "P";
                                                P.id = "P";
                                                somanyscoree.appendChild(P);
                                                if (entity.selected_by === document.getElementById("tm1nme").innerHTML){

                                                    P.style.transform = "translate(17px,-48px)";
                                                }
                                                else if (entity.selected_by === document.getElementById("tm2nme").innerHTML){
                                                    
                                                    P.style.transform = "translate(118px,-48px)";
                                                }
                                            }
                                        }
                                        break;
                                    case "de_train":
                                        var mapimg = document.createElement("img");
                                        mapimg.id = "imgg";
                                        mapimg.src = image_links[7];
                                        somanyscoree.appendChild(mapimg);
                                        for (const entity of dapicksanddabans[d].entities){
                                            if (entity.guid === "de_train" && entity.status === "pick"){
                                                let P = document.createElement("div");
                                                P.innerHTML = "P";
                                                P.id = "P";
                                                somanyscoree.appendChild(P);
                                                if (entity.selected_by === document.getElementById("tm1nme").innerHTML){

                                                    P.style.transform = "translate(17px,-48px)";
                                                }
                                                else if (entity.selected_by === document.getElementById("tm2nme").innerHTML){
                                                    
                                                    P.style.transform = "translate(118px,-48px)";
                                                }
                                            }
                                        }
                                        break;
                                    case "de_inferno":
                                        var mapimg = document.createElement("img");
                                        mapimg.id = "imgg";
                                        mapimg.src = image_links[2];
                                        somanyscoree.appendChild(mapimg);
                                        for (const entity of dapicksanddabans[d].entities){
                                            if (entity.guid === "de_inferno" && entity.status === "pick"){
                                                let P = document.createElement("div");
                                                P.innerHTML = "P";
                                                P.id = "P";
                                                somanyscoree.appendChild(P);
                                                if (entity.selected_by === document.getElementById("tm1nme").innerHTML){

                                                    P.style.transform = "translate(17px,-48px)";
                                                }
                                                else if (entity.selected_by === document.getElementById("tm2nme").innerHTML){
                                                    
                                                    P.style.transform = "translate(118px,-48px)";
                                                }
                                            }
                                        }
                                        break;
                                    case "de_anubis":
                                        var mapimg = document.createElement("img");
                                        mapimg.id = "imgg";
                                        mapimg.src = image_links[1];
                                        somanyscoree.appendChild(mapimg);
                                        for (const entity of dapicksanddabans[d].entities){
                                            if (entity.guid === "de_anubis" && entity.status === "pick"){
                                                let P = document.createElement("div");
                                                P.innerHTML = "P";
                                                P.id = "P";
                                                somanyscoree.appendChild(P);
                                                if (entity.selected_by === document.getElementById("tm1nme").innerHTML){

                                                    P.style.transform = "translate(17px,-48px)";
                                                }
                                                else if (entity.selected_by === document.getElementById("tm2nme").innerHTML){
                                                    
                                                    P.style.transform = "translate(118px,-48px)";
                                                }
                                            }
                                        }
                                        break;
                                    case "de_ancient":
                                        var mapimg = document.createElement("img");
                                        mapimg.id = "imgg";
                                        mapimg.src = image_links[0];
                                        somanyscoree.appendChild(mapimg);
                                        for (const entity of dapicksanddabans[d].entities){
                                            if (entity.guid === "de_ancient" && entity.status === "pick"){
                                                let P = document.createElement("div");
                                                P.innerHTML = "P";
                                                P.id = "P";
                                                somanyscoree.appendChild(P);
                                                if (entity.selected_by === document.getElementById("tm1nme").innerHTML){

                                                    P.style.transform = "translate(17px,-48px)";
                                                }
                                                else if (entity.selected_by === document.getElementById("tm2nme").innerHTML){
                                                    
                                                    P.style.transform = "translate(118px,-48px)";
                                                }
                                            }
                                        }
                                        break;
                                    case "de_nuke":
                                        var mapimg = document.createElement("img");
                                        mapimg.id = "imgg";
                                        mapimg.src = image_links[5];
                                        somanyscoree.appendChild(mapimg);
                                        for (const entity of dapicksanddabans[d].entities){
                                            if (entity.guid === "de_nuke" && entity.status === "pick"){
                                                let P = document.createElement("div");
                                                P.innerHTML = "P";
                                                P.id = "P";
                                                somanyscoree.appendChild(P);
                                                if (entity.selected_by === document.getElementById("tm1nme").innerHTML){

                                                    P.style.transform = "translate(17px,-48px)";
                                                }
                                                else if (entity.selected_by === document.getElementById("tm2nme").innerHTML){
                                                    
                                                    P.style.transform = "translate(118px,-48px)";
                                                }
                                            }
                                        }
                                        break;
                                    case "de_vertigo":
                                        var mapimg = document.createElement("img");
                                        mapimg.id = "imgg";
                                        mapimg.src = image_links[6];
                                        somanyscoree.appendChild(mapimg);
                                        for (const entity of dapicksanddabans[d].entities){
                                            if (entity.guid === "de_vertigo" && entity.status === "pick"){
                                                let P = document.createElement("div");
                                                P.innerHTML = "P";
                                                P.id = "P";
                                                somanyscoree.appendChild(P);
                                                if (entity.selected_by === document.getElementById("tm1nme").innerHTML){

                                                    P.style.transform = "translate(17px,-48px)";
                                                }
                                                else if (entity.selected_by === document.getElementById("tm2nme").innerHTML){
                                                    
                                                    P.style.transform = "translate(118px,-48px)";
                                                }
                                            }
                                        }
                                        break;

                                }
                                let t1cpy = document.createElement("img");
                                t1cpy.id = "tm1copy";
                                t1cpy.style.height = "20px";
                                t1cpy.style.width = "20px";
                                t1cpy.src = fjksdhfksdj[0]; 
                               // t1cpy.src = tm1pfp.src;
                                let t2cpy = document.createElement("img");
                                t2cpy.id = "tm2copy";
                                t2cpy.style.height = "20px";
                                t2cpy.style.width = "20px";
                                checkImageExists(fsdfesfsdf[0], function(exists) {
                                    if (exists) {
                                        
                                        t2cpy.src = fsdfesfsdf[0];
                                    } else {
                                        t2cpy.src = defaultimage; // Use fallback URL if the image doesn't exist
                                    }
                                });
                               // t2cpy.src = fsdfesfsdf[0];

                               // t2cpy.src = tm2pfp.src;
                                //console.log(t1cpy);
                              //  console.log(tm2pfp);
                                //console.log(t2cpy);
                                somanyscoree.appendChild(t1cpy);
                                somanyscoree.prepend(t2cpy);
                                quickInfoDivider.appendChild(somanyscoree);
                                //dascore.style.color = 'red';
                                //dascore.style.webkitFilter = "drop-shadow(0px 0px 2px #ff0000)";
                                
                            }

                        }
                        else {

                        }
                        omfgsomanycounters++;
                    }
}

var moreclicks = 0;
var doitonlyonce = true;
let wins = 0;
let loss = 0;
function printToWebsite(dapicksanddabans, something){
    document.body.style.cursor = "auto";
    document.getElementById("teambackgrounddiv").style.opacity = "1";

    
    let recorddiv = document.createElement("div");
    recorddiv.style.display = "grid";
    recorddiv.style.gridAutoFlow = "column";
    recorddiv.style.color = "white";
    recorddiv.style.transform = "translate(-25px,-80px)";
    recorddiv.style.filter = "drop-shadow(.1px .1px 5px black)";
    recorddiv.style.fontSize = "30px";
    recorddiv.style.position = "absolute";
    recorddiv.id = "RECORDDD";
    recorddiv.style.transition = ".5s"
    recorddiv.style.padding = "20px";
    let matchesDivider = document.createElement('div');
    matchesDivider.id = "mtches";
    matchesDivider.style.overflow = "auto";
    matchesDivider.style.overflowX = "hidden";
    let quickInfoDivider = document.createElement('div');
    quickInfoDivider.id = "quickInfo";
    quickInfoDivider.innerHTML = "PLEASE HOVER OVER A GAME:";
    let allInfoDivider = document.createElement('div');
    allInfoDivider.id = "allInfo";


    let coun = 0;
    let ssnNumCounter = 0;
    let tempor = (dapicksanddabans[0]) ? dapicksanddabans[0].season : currentseason;
 
    for (let d = 0; d < dapicksanddabans.length; d++){
        // find the team you are looking at, look through both teams in dapicksanddabans[d] and make "the team we are looking at" be that team's ID
        let name = "";
       // console.log(dapicksanddabans[d].teams);
        for(let t = 0; t < dapicksanddabans[d].teams.length; t++){
            for (const INTERLINKED of dapicksanddabans[d].teams[t]){
                //console.log(INTERLINKED);
                if (INTERLINKED.toUpperCase() === "CAP"){
                  //  console.log("CAP FOUND");
                    let poopfart = dapicksanddabans[d].teams[t];
                    if(THETEAMWEARESEARCHING != poopfart[2]){
                       // console.log("changing the team we are serching to "+poopfart[2]);
                        //THETEAMWEARESEARCHING = poopfart[2];

                    }
                     name = poopfart[1].toUpperCase();
                }
            }
        }
        if (doitonlyonce) {
            doitonlyonce = false;
            fetchLast5Players(dapicksanddabans[d].vote_type, false, count, () => {
                if (document.getElementById("teambackgrounddiv").children.length >= 1) {
                    //console.log("FETCHLAST5PLAYERS WORKED!");
                   
                    firstMatchID = dapicksanddabans[d].vote_type;
                } else {
                    //console.log("dat did nottt workkk");
                    //doitonlyonce = true;
                }
            });
        }
        let gamediv = document.createElement('div');
        gamediv.id = "game"+d;
        gamediv.classList.add("gamediv");
        gamediv.style.height = "150px";
        gamediv.style.width = "250px"
        gamediv.style.paddingTop = "5px";
        gamediv.style.paddingBottom = "5px";
        gamediv.style.transform = "translateX(20px)";
        gamediv.style.cursor = "pointer";
        let score = document.createElement('div');
        score.innerHTML = dapicksanddabans[d].score;
        score.id = "score"+d;
        score.classList.add("scr");
        //update the actual picks and bans here
        //go through dapickanddabans.entities
        //1. check if it's our team
        //2. if our team, check the guid
        //3. then, check the status  and choose accordingly either update bans variable or update picks variable
       // console.log(dapicksanddabans[d]);
       // console.log("The winner of the above game is "+dapicksanddabans[d].winnerID);

        
        /*
        for (const team in dapicksanddabans[d].teams){
            console.log(team);
            for (const thinginteam in team){
                console.log("INTERLINKED");
                console.log(thinginteam);
                if (thinginteam === "CAP"){
                    
                }
            }
        }

        
        
       console.log("The team we are looking at is "+THETEAMWEARESEARCHING);
       console.log(dapicksanddabans[d].winnerID+" == "+THETEAMWEARESEARCHING);
       */

        if (coun == 0){
            ssnNumCounter++;
            let SeasonDivider = document.createElement('div');
            SeasonDivider.id = "ssnNum"+ssnNumCounter;
            SeasonDivider.classList.add("ssnNum");
            SeasonDivider.style.width = "240px";
            dapicksanddabans[d].season == "ea" ? SeasonDivider.innerHTML = "----------- Qualifier" : SeasonDivider.innerHTML = "------- Season "+dapicksanddabans[d].season+" "+dapicksanddabans[d].division;
            SeasonDivider.style.fontSize = "20px";
            SeasonDivider.style.transform = "translateX(20px)";
            matchesDivider.append(SeasonDivider);
            let record = document.createElement("div");
            //console.log(dapicksanddabans[d]);
            //console.log(ssnNumCounter);
            if ((dapicksanddabans[d-1] && !something) ){
                let ssnsnsn;
                dapicksanddabans[d-1].season == "ea" ? ssnsnsn = "----------- Qualifier" : ssnsnsn = "------- Season "+dapicksanddabans[d-1].season+" "+dapicksanddabans[d-1].division;
                
                record.style.filter = "drop-shadow(black 1px 1px 1px)";
      
                record.innerHTML = "| S"+(Number(ssnsnsn.substring(15,17)))+'<span style="color: wheat;">'+ssnsnsn.substring(17)+'</span>'+": "+'<span style="color: green;">'+wins+'</span>'+' / '+'<span style="color: red;">'+loss+'</span>'+" | ";
                recorddiv.appendChild(record);
                
                wins = 0;
                loss = 0;
                document.getElementById("teambackgrounddiv").appendChild(recorddiv);
            }
            
            coun = coun + 1;
        }

        coun = coun + 1;
        if((d+1) < dapicksanddabans.length){ 

            if(dapicksanddabans[d+1].season < tempor){
                coun = 0;
                tempor = dapicksanddabans[d+1].season;
            }
        }
       // console.log(dapicksanddabans[d].winnerID\)
        if(dapicksanddabans[d].winnerID === THETEAMWEARESEARCHING){
            score.style.color = 'chartreuse';
            score.style.webkitFilter = "drop-shadow(0px 0px 10px #1eff00)";
            wins++;

        }
        else{
            score.style.color = 'maroon';
            score.style.webkitFilter = "drop-shadow(0px 0px 5px #ff0000)";
            loss++;

            
        }

       

        let somanymaps = document.createElement('div');
        somanymaps.id = "cvr";
        let c12 = 0;
        for (let j = 0; j < dapicksanddabans[d].detailed_results.length; j++){
            if (j % 2 == 0){
                //this means j is even idk about 0?
               // console.log(dapicksanddabans[d].detailed_results);
                switch(dapicksanddabans[d].detailed_results[j]){
                    case THETEAMWEARESEARCHING:
                        //console.log("we won "+dapicksanddabans[d].detailed_results[j+1]);
                        switch(String(dapicksanddabans[d].detailed_results[j+1])){
                            case "de_train":
                                played[7]= played[7]+1;
                                W[7] = W[7]+1;
                                break;
                            case "de_ancient":
                                played[0]= played[0]+1;
                                W[0] = W[0]+1;
                                break;
                            case "de_anubis":
                                played[1]= played[1]+1;
                                W[1] = W[1]+1;
                                break;
                            case "de_inferno":
                                played[2]= played[2]+1;
                                W[2] = W[2]+1;
                                break;
                            case "de_dust2":
                                played[3]= played[3]+1;
                                W[3] = W[3]+1;
                                break;
                            case "de_mirage":
                                played[4]= played[4]+1;
                                W[4] = W[4]+1;
                                break;
                            case "de_nuke":
                                played[5]= played[5]+1;
                                W[5] = W[5]+1;
                                break;
                            case "de_vertigo":
                                played[6]= played[6]+1;
                                W[6] = W[6]+1;
                                break;
                            default:
                                break;
                        }
                        break;
                    default:
                       // console.log("we lost "+dapicksanddabans[d].detailed_results[j+1]);
                        switch(String(dapicksanddabans[d].detailed_results[j+1])){
                            case "de_train":
                                played[7]= played[7]+1;
                                L[7] = L[7]+1;
                                break;
                            case "de_ancient":
                                played[0]= played[0]+1;
                                L[0] = L[0]+1;
                                break;
                            case "de_anubis":
                                played[1]= played[1]+1;
                                L[1] = L[1]+1;
                                break;
                            case "de_inferno":
                                played[2]= played[2]+1;
                                L[2] = L[2]+1;
                                break;
                            case "de_dust2":
                                played[3]= played[3]+1;
                                L[3] = L[3]+1;
                                break;
                            case "de_mirage":
                                played[4]= played[4]+1;
                                L[4] = L[4]+1;
                                break;
                            case "de_nuke":
                                played[5]= played[5]+1;
                                L[5] = L[5]+1;
                                break;
                            case "de_vertigo":
                                played[6]= played[6]+1;
                                L[6] = L[6]+1;
                                break;
                            default:
                                break;
                        }
                        break;
                }
            }
        }
        for (const game of dapicksanddabans[d].entities){

            if (game.status == "pick"){
             //   console.log(game.selected_by.toUpperCase()+" - "+name);
                if(game.selected_by.toUpperCase() === name){
                //    console.log("wE PICKED "+game.guid);
                    switch(String(game.guid)){
                        case "de_train":
                            picks[7]= picks[7]+1;
                            break;
                        case "de_ancient":
                                picks[0]= picks[0]+1;
                                break;
                            case "de_anubis":
                                picks[1]= picks[1]+1;
                                break;
                            case "de_inferno":
                                picks[2]= picks[2]+1;
                                break;
                            case "de_dust2":
                                picks[3]= picks[3]+1;
                                break;
                            case "de_mirage":
                                picks[4]= picks[4]+1;
                                break;
                            case "de_nuke":
                                picks[5]= picks[5]+1;
                                break;
                            case "de_vertigo":
                                picks[6]= picks[6]+1;
                                break;
                            default:
                                break;
                    }
                }
                    let image = document.createElement('img');
                    image.id = "image"+c12;
                    image.classList.add("cvr");
                    
                    c12 = c12 + 1;
                    if(dapicksanddabans[d].entity_type > 2){
                        switch (String(game.guid)){
                            case "de_train":
                                //console.log("TRAIN");
                                image.src = image_links[7];
                                break;
                            case "de_ancient":
                                image.src = image_links[0];
                                break;
                            case "de_anubis":
                                image.src = image_links[1];
                                break;
                            case "de_inferno":
                                image.src = image_links[2];
                                break;
                            case "de_dust2":
                                image.src = image_links[3];
                                break;
                            case "de_mirage":
                                image.src = image_links[4];
                                break;
                            case "de_nuke":
                                image.src = image_links[5];
                                break;
                            case "de_vertigo":
                                image.src = image_links[6];
                                break;
                            default:
                                image.src = "data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='29' height='50.115' patternTransform='scale(1) rotate(90)'><rect x='0' y='0' width='100%' height='100%' fill='%23161616'/><path d='M14.498 16.858L0 8.488.002-8.257l14.5-8.374L29-8.26l-.002 16.745zm0 50.06L0 58.548l.002-16.745 14.5-8.373L29 41.8l-.002 16.744zM28.996 41.8l-14.498-8.37.002-16.744L29 8.312l14.498 8.37-.002 16.745zm-29 0l-14.498-8.37.002-16.744L0 8.312l14.498 8.37-.002 16.745z'%20 stroke-width='1' stroke='%23303030' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>";
                                break;
                        }
                        if(dapicksanddabans[d].entity_type > 3){
                            image.classList.remove("cvr");
                            image.classList.add("dvr");
                        }
                    }
                    else{
                        image.classList.remove("cvr");
                        image.classList.add("pvr");
                        switch (String(game.guid)){
                            case "de_train":
                                image.src = image_links[7];
                                break;
                            case "de_ancient":
                                image.src = image_links[0];
                                break;
                            case "de_anubis":
                                image.src = image_links[1];
                                break;
                            case "de_inferno":
                                image.src = image_links[2];
                                break;
                            case "de_dust2":
                                image.src = image_links[3];
                                break;
                            case "de_mirage":
                                image.src = image_links[4];
                                break;
                            case "de_nuke":
                                image.src = image_links[5];
                                break;
                            case "de_vertigo":
                                image.src = image_links[6];
                                break;
                            default:
                                image.src = "data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='29' height='50.115' patternTransform='scale(1) rotate(90)'><rect x='0' y='0' width='100%' height='100%' fill='%23161616'/><path d='M14.498 16.858L0 8.488.002-8.257l14.5-8.374L29-8.26l-.002 16.745zm0 50.06L0 58.548l.002-16.745 14.5-8.373L29 41.8l-.002 16.744zM28.996 41.8l-14.498-8.37.002-16.744L29 8.312l14.498 8.37-.002 16.745zm-29 0l-14.498-8.37.002-16.744L0 8.312l14.498 8.37-.002 16.745z'%20 stroke-width='1' stroke='%23303030' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>";
                                break;
                        }
                    }

                    somanymaps.appendChild(image);
            }
            else if (game.status == "drop"){
                if(game.selected_by.toUpperCase() === name){
                   // console.log("WE BANNED "+game.guid);
                    switch(String(game.guid)){
                        case "de_train":
                            bans[7]= bans[7]+1;
                            break;
                        case "de_ancient":
                                bans[0]= bans[0]+1;
                                break;
                            case "de_anubis":
                                bans[1]= bans[1]+1;
                                break;
                            case "de_inferno":
                                bans[2]= bans[2]+1;
                                break;
                            case "de_dust2":
                                bans[3]= bans[3]+1;
                                break;
                            case "de_mirage":
                                bans[4]= bans[4]+1;
                                break;
                            case "de_nuke":
                                bans[5]= bans[5]+1;
                                break;
                            case "de_vertigo":
                                bans[6]= bans[6]+1;
                                break;
                            default:
                                break;
                    }
                }
                else {

                }
            }
            
            
            
        }


        gamediv.appendChild(somanymaps);
        gamediv.appendChild(score);


       matchesDivider.appendChild(gamediv);
       

    }

    //organize the info from the global arrays initalized above
    for(let y = 0; y <= 7; y++){

        switch(y){
            
            //anc
            case 0:
                let DAancient = document.createElement("div");
                DAancient.id = "ancient";
                let ancimage = document.createElement("img");
                ancimage.id = "ancientimage";
                ancimage.src = image_links[0];
                ancimage.style.width = "230px";
                ancimage.style.height = "130px";
                ancimage.style.position = "absolute";
                let mapidentifier = document.createElement("div");
                mapidentifier.id = "de_ancient";
                mapidentifier.style.fontSize = "25px";
                mapidentifier.innerHTML = "Ancient";
                let ancbans = document.createElement("div");
                ancbans.innerHTML = '<span class="redd">Banned '+'</span><span class="white">'+bans[0]+((bans[0] > 1|| bans[0] == 0) ? " times" : " time")+".";
                let ancpics = document.createElement("div");
                ancpics.innerHTML = '<span class="greenn">Picked '+'</span><span class="white">'+picks[0]+((picks[0] > 1|| picks[0] == 0) ? " times" : " time")+".";
                let ancW = document.createElement("div");
                ancW.classList.add("winnerdiv");
                ancW.innerHTML = '<span class="greenn1">'+W[0]+'</span><span class = "white"> // </span> <span class="redd1">'+L[0];
                
                allInfoDivider.appendChild(ancimage);
                DAancient.appendChild(mapidentifier);
                DAancient.appendChild(ancpics);
                DAancient.appendChild(ancbans);
                DAancient.appendChild(ancW);
                //DAancient.appendChild(ancimage);
                allInfoDivider.appendChild(DAancient);
               // console.log("Banned ancient "+bans[0]+" times");
               // console.log("Played ancient "+played[0]+" times");
                break;
            //anu
            case 1:
                let DAanubis = document.createElement("div");
                DAanubis.id = "anubis";
                let anuimage = document.createElement("img");
                anuimage.id = "anubisimage";
                anuimage.src = image_links[1];
                anuimage.style.width = "230px";
                anuimage.style.height = "130px";
                anuimage.style.position = "absolute";
                let mapidentifier1 = document.createElement("div");
                mapidentifier1.style.fontSize = "25px";
                mapidentifier1.innerHTML = "Anubis";
                mapidentifier1.id = "de_anubis"
                let anubans = document.createElement("div");
                anubans.innerHTML = '<span class="redd">Banned '+'</span><span class="white">'+bans[1]+((bans[1] > 1|| bans[1] == 0) ? " times" : " time")+".";
                let anupics = document.createElement("div");
                anupics.innerHTML = '<span class="greenn">Picked '+'</span><span class="white">'+picks[1]+((picks[1] > 1|| picks[1] == 0) ? " times" : " time")+".";
                let anuplay = document.createElement("div");
                anuplay.innerHTML = '<span class="greenn">Played '+'</span><span class="white">'+played[1]+((played[1] > 1|| played[1] == 0) ? " times" : " time")+".";
                let anuW = document.createElement("div");
                anuW.classList.add("winnerdiv");
                anuW.innerHTML = '<span class="greenn1">'+W[1]+'</span><span class = "white"> // </span> <span class="redd1">'+L[1];
                allInfoDivider.appendChild(anuimage);
                DAanubis.appendChild(mapidentifier1);
                DAanubis.appendChild(anupics);
                DAanubis.appendChild(anubans);
                DAanubis.appendChild(anuW);
                allInfoDivider.appendChild(DAanubis);
              //  console.log("Banned anubis "+bans[1]+" times");
              //  console.log("Played anubis "+played[1]+" times");
                break;
            //inf
            case 2:
                let DAinf = document.createElement("div");
                DAinf.id = "inferno";
                let infimage = document.createElement("img");
               infimage.id = "infimage";
                infimage.src = image_links[2];
                infimage.style.width = "230px";
                infimage.style.height = "130px";
               infimage.style.position = "absolute";
                let mapidentifier2 = document.createElement("div");
                mapidentifier2.style.fontSize = "25px";
                mapidentifier2.innerHTML = "Inferno";
                mapidentifier2.id = "de_inferno";
                let infbans = document.createElement("div");
                infbans.innerHTML = '<span class="redd">Banned '+'</span><span class="white">'+bans[2]+((bans[2] > 1|| bans[2] == 0) ? " times" : " time")+".";
                let infpics = document.createElement("div");
                infpics.innerHTML = '<span class="greenn">Picked '+'</span><span class="white">'+picks[2]+((picks[2] > 1|| picks[2] == 0) ? " times" : " time")+".";
                let infplay = document.createElement("div");
                infplay.innerHTML = '<span class="greenn">Played '+'</span><span class="white">'+played[2]+((played[2] > 1|| played[2] == 0) ? " times" : " time")+".";
                let infW = document.createElement("div");
                infW.classList.add("winnerdiv");
                infW.innerHTML = '<span class="greenn1">'+W[2]+'</span><span class = "white"> // </span> <span class="redd1">'+L[2];
                allInfoDivider.appendChild(infimage);
                DAinf.appendChild(mapidentifier2);
                DAinf.appendChild(infpics);
                DAinf.appendChild(infbans);

                DAinf.appendChild(infW);
                allInfoDivider.appendChild(DAinf);
              //  console.log("Banned inferno "+bans[2]+" times");
             //   console.log("Played inferno "+played[2]+" times");
                break; 
            //d2
            case 3:
                let DAd2 = document.createElement("div");
                DAd2.id = "dust2";
                let d2image = document.createElement("img");
                d2image.id = "d2image";
                d2image.src = image_links[3];
                d2image.style.width = "230px";
                d2image.style.height = "130px";
                d2image.style.position = "absolute";
                let mapidentifier3 = document.createElement("div");
                mapidentifier3.style.fontSize = "25px";
                mapidentifier3.innerHTML = "Dust II";
                mapidentifier3.id = "de_dust2";
                let d2bans = document.createElement("div");
                d2bans.innerHTML = '<span class="redd">Banned '+'</span><span class="white">'+bans[3]+((bans[3] > 1|| bans[3] == 0) ? " times" : " time")+".";
                let d2pics = document.createElement("div");
                d2pics.innerHTML = '<span class="greenn">Picked '+'</span><span class="white">'+picks[3]+((picks[3] > 1|| picks[3] == 0) ? " times" : " time")+".";
                let d2play = document.createElement("div");
                d2play.innerHTML = '<span class="greenn">Played '+'</span><span class="white">'+played[3]+((played[3] > 1|| played[3] == 0) ? " times" : " time")+".";
                let d2W = document.createElement("div");
                d2W.classList.add("winnerdiv");
                d2W.innerHTML = '<span class="greenn1">'+W[3]+'</span><span class = "white"> // </span> <span class="redd1">'+L[3];
                allInfoDivider.appendChild(d2image);
                DAd2.appendChild(mapidentifier3);
                DAd2.appendChild(d2pics);
                DAd2.appendChild(d2bans);

                DAd2.appendChild(d2W);
                allInfoDivider.appendChild(DAd2);
              //  console.log("Banned dust 2 "+bans[3]+" times");
             //   console.log("Played dust 2 "+played[3]+" times");
                break; 
            //mir
            case 4:
                let DAmir = document.createElement("div");
                DAmir.id = "mirage";
                let mirimage = document.createElement("img");
                mirimage.id = "mirimage";
                mirimage.src = image_links[4];
                mirimage.style.width = "230px";
                mirimage.style.height = "130px";
                mirimage.style.position = "absolute";
                let movementdivider = document.createElement("div");
                let mapidentifier4 = document.createElement("div");
                mapidentifier4.style.fontSize = "25px";
                mapidentifier4.innerHTML = "Mirage";
                mapidentifier4.id = "de_mirage";
                let mirbans = document.createElement("div");
                mirbans.innerHTML = '<span class="redd">Banned '+'</span><span class="white">'+bans[4]+((bans[4] > 1|| bans[4] == 0) ? " times" : " time")+".";
                let mirpics = document.createElement("div");
                mirpics.innerHTML = '<span class="greenn">Picked '+'</span><span class="white">'+picks[4]+((picks[4] > 1|| picks[4] == 0) ? " times" : " time")+".";
                let mirplay = document.createElement("div");
                mirplay.innerHTML = '<span class="greenn">Played '+'</span><span class="white">'+played[4]+((played[4] > 1|| played[4] == 0) ? " times" : " time")+".";
                let mirW = document.createElement("div");
                mirW.classList.add("winnerdiv");
                mirW.innerHTML = '<span class="greenn1">'+W[4]+'</span><span class = "white"> // </span> <span class="redd1">'+L[4];
                allInfoDivider.appendChild(mirimage);
                movementdivider.appendChild(mapidentifier4);
                movementdivider.appendChild(mirpics);
                movementdivider.appendChild(mirbans);

                movementdivider.appendChild(mirW);
                DAmir.appendChild(movementdivider);
                //movementdivider.style.transform = "translate(250px, -495px)";
                allInfoDivider.appendChild(DAmir);
             //   console.log("Banned mirage "+bans[4]+" times");
            //    console.log("Played mirage "+played[4]+" times");
                break; 
            //nuk 
            case 5:
                let DAnuk = document.createElement("div");
                DAnuk.id = "nuke";
                let nukimage = document.createElement("img");
                nukimage.id = "nukimage";
                nukimage.src = image_links[5];
                nukimage.style.width = "230px";
                nukimage.style.height = "130px";
                nukimage.style.position = "absolute";
                let movementdivider1 = document.createElement("div");
                let mapidentifier5 = document.createElement("div");
                mapidentifier5.style.fontSize = "25px";
                mapidentifier5.innerHTML = "Nuke";
                mapidentifier5.id = "de_nuke";
                let nubans = document.createElement("div");
                nubans.innerHTML = '<span class="redd">Banned '+'</span><span class="white">'+bans[5]+((bans[5] > 1|| bans[5] == 0) ? " times" : " time")+".";
                let nupics = document.createElement("div");
                nupics.innerHTML = '<span class="greenn">Picked '+'</span><span class="white">'+picks[5]+((picks[5] > 1|| picks[5] == 0) ? " times" : " time")+".";
                let nuplay = document.createElement("div");
                nuplay.innerHTML = '<span class="greenn">Played '+'</span><span class="white">'+played[5]+((played[5] > 1|| played[5] == 0) ? " times" : " time")+".";
                let nuW = document.createElement("div");
                nuW.classList.add("winnerdiv");
                nuW.innerHTML = '<span class="greenn1">'+W[5]+'</span><span class = "white"> // </span> <span class="redd1">'+L[5];
                allInfoDivider.appendChild(nukimage);
                movementdivider1.appendChild(mapidentifier5);
                movementdivider1.appendChild(nupics);
                movementdivider1.appendChild(nubans);

                movementdivider1.appendChild(nuW);
                //movementdivider1.style.transform = "translate(250px, -495px)";
                DAnuk.appendChild(movementdivider1);
                allInfoDivider.appendChild(DAnuk);
             //   console.log("Banned nuke "+bans[5]+" times");
              //  console.log("Played nuke "+played[5]+" times");
                break; 
            //ver    
            case 6:
                let DAver = document.createElement("div");
                DAver.id = "vertigoo";
                let verimage = document.createElement("img");
                verimage.id = "verimage";
                verimage.src = image_links[6];
                verimage.style.width = "230px";
                verimage.style.height = "130px";
                verimage.style.position = "absolute";
                let movementdivider2 = document.createElement("div");
                let mapidentifier6 = document.createElement("div");
                mapidentifier6.style.fontSize = "25px";
                mapidentifier6.innerHTML = "Vertigo";
                mapidentifier6.id = "de_vertigo";
                let verbans = document.createElement("div");
                verbans.innerHTML = '<span class="redd">Banned '+'</span><span class="white">'+bans[6]+((bans[6] > 1|| bans[6] == 0) ? " times" : " time")+".";
                let verpics = document.createElement("div");
                verpics.innerHTML = '<span class="greenn">Picked '+'</span><span class="white">'+picks[6]+((picks[6] > 1|| picks[6] == 0) ? " times" : " time")+".";
                let verplay = document.createElement("div");
                verplay.innerHTML = '<span class="greenn">Played '+'</span><span class="white">'+played[6]+((played[6] > 1|| played[6] == 0) ? " times" : " time")+".";
                let verW = document.createElement("div");
                verW.classList.add("winnerdiv");
                verW.innerHTML = '<span class="greenn1">'+W[6]+'</span><span class = "white"> // </span> <span class="redd1">'+L[6];
                allInfoDivider.appendChild(verimage);
                movementdivider2.appendChild(mapidentifier6);
                movementdivider2.appendChild(verpics);
                movementdivider2.appendChild(verbans);
                movementdivider2.appendChild(verW);
                //movementdivider2.style.transform = "translate(250px, -495px)";
                DAver.appendChild(movementdivider2);
                allInfoDivider.appendChild(DAver);
              //  console.log("Banned vertigo "+bans[6]+" times");
              //  console.log("Played vertigo "+played[6]+" times");
                break; 
                
            case 7:
                let DAtrain = document.createElement("div");
                DAtrain.id = "trainn";
                let trainimage = document.createElement("img");
                trainimage.id = "trainimage";
                trainimage.src = image_links[7];
                trainimage.style.width = "230px";
                trainimage.style.height = "130px";
                trainimage.style.position = "absolute";
                let movementdivider3 = document.createElement("div");
                let mapidentifier7 = document.createElement("div");
                mapidentifier7.style.fontSize = "25px";
                mapidentifier7.innerHTML = "Train";
                mapidentifier7.id = "de_train";
                let trainbans = document.createElement("div");
                trainbans.innerHTML = '<span class="redd">Banned '+'</span><span class="white">'+bans[7]+((bans[7] > 1|| bans[7] == 0) ? " times" : " time")+".";
                let trainpics = document.createElement("div");
                trainpics.innerHTML = '<span class="greenn">Picked '+'</span><span class="white">'+picks[7]+((picks[7] > 1|| picks[7] == 0) ? " times" : " time")+".";
                let trainplay = document.createElement("div");
                trainplay.innerHTML = '<span class="greenn">Played '+'</span><span class="white">'+played[7]+((played[7] > 1|| played[7] == 0) ? " times" : " time")+".";
                let trainW = document.createElement("div");
                trainW.classList.add("winnerdiv");
                trainW.innerHTML = '<span class="greenn1">'+W[7]+'</span><span class = "white"> // </span> <span class="redd1">'+L[7];
                allInfoDivider.appendChild(trainimage);
                movementdivider3.appendChild(mapidentifier7);
                movementdivider3.appendChild(trainpics);
                movementdivider3.appendChild(trainbans);
                movementdivider3.appendChild(trainW);
                //movementdivider2.style.transform = "translate(250px, -495px)";
                DAtrain.appendChild(movementdivider3);
                allInfoDivider.appendChild(DAtrain);
              //  console.log("Banned vertigo "+bans[6]+" times");
              //  console.log("Played vertigo "+played[6]+" times");
                break;     
                
            default:
                break;

        }
    }
   
    let endingdivider = document.createElement("div");
    endingdivider.innerHTML = "----------------------------------------------";
    endingdivider.id = "endingdivider";
    endingdivider.style.width = "240px";
    endingdivider.style.fontSize = "20px";
    endingdivider.style.transform = "translateX(20px)";
    endingdivider.style.color = "white";
    matchesDivider.appendChild(endingdivider);
    //console.log(dapicksanddabans[dapicksanddabans.length-1].season);
    //console.log(wins+" // "+loss);
    let record = document.createElement("div");
    record.style.filter = "drop-shadow(black 1px 1px 1px)";
    record.innerHTML = "| S"+((dapicksanddabans[dapicksanddabans.length-1].season) ? dapicksanddabans[dapicksanddabans.length-1].season :currentseason)+'<span style="color: wheat;">'+" "+dapicksanddabans[dapicksanddabans.length-1].division+'</span>'+": "+'<span style="color: green;">'+wins+'</span>'+' / '+'<span style="color: red;">'+loss+'</span>'+" | ";
    if(document.getElementById("RECORDDD") && !something){document.getElementById("RECORDDD").appendChild(record)};
    if(something){
        document.getElementById(".BanFileExplorer").insertBefore(matchesDivider, document.getElementById(".BanFileExplorer").firstChild);
        document.getElementById(".BanFileExplorer").insertBefore(quickInfoDivider, document.getElementById(".BanFileExplorer").firstChild);
        document.getElementById(".BanFileExplorer").insertBefore(allInfoDivider, document.getElementById(".BanFileExplorer").firstChild);
    }
    else{
        document.getElementById(".BanFileExplorer").appendChild(matchesDivider);
        document.getElementById(".BanFileExplorer").appendChild(quickInfoDivider);
        document.getElementById(".BanFileExplorer").appendChild(allInfoDivider);
    }
    
    const childdddrr = matchesDivider.childNodes;
    var overallButtonDivider = document.createElement("div");
    overallButtonDivider.style.transform = "translate(250px,-470px)";
    overallButtonDivider.style.height = "0px";
    if(!something){
       // console.log(childdddrr);
        for(const childs of childdddrr){
         if (childs.id.includes("ssnNum")){
             createToggle(overallButtonDivider);
            }
        }

        document.getElementById(".BanFileExplorer").append(overallButtonDivider);


        var bool = true;
        document.querySelectorAll("#label").forEach(el=>{if(Number(el.innerHTML.substring(1)) < 52)bool=false;});
        if (THEFINALCOUNTERISWEAR === 1 || bool){
                //console.log(THEFINALCOUNTERISWEAR +"= WHAT THE BALLS")
                if (document.getElementById("vertigoo") && document.getElementById("verimage")) { // Ensure they exist
                    setTimeout(() => {
                        document.getElementById("vertigoo").style.opacity = "0";
                        document.getElementById("verimage").style.opacity = "0";
                        document.getElementById("trainn").style.transform = "translate(470px,20px)";
                        document.getElementById("trainimage").style.transform = "translate(470px,20px)";
                    }, 10);
                    //console.log("Elements hidden");
                } else {
                   // console.log("vertigoo or verimage not found!");
                }

            }
            else{
                /*
                setTimeout(() => {
                    if(document.getElementById("trainn") && document.getElementById("trainimage")){
                        document.getElementById("trainn").style.display = "none";
                        document.getElementById("trainimage").style.display = "none";
                    }
                }, 10);
                */
            }
    }
    

    let info = document.createElement("div");
    info.id = "BANINFOMAN";
    info.style.fontSize = "20px";
    info.style.webkitFilter = "drop-shadow(1px 1px 0.1px black)";
    let shouldbeoff = false;
    for (let d = 0; d < matchesDivider.children.length-1; d++){
        if (!shouldbeoff){
        if(document.getElementById("game"+d)){


            document.getElementById("game"+d).onclick = function(){

                document.querySelectorAll("#buttonspan").forEach(el =>{el.style.opacity = "1"});


                moreclicks++;
                //console.log("divider clicked "+moreclicks+" clicks");
                dividerclicked = !dividerclicked;
                shouldbeoff = !shouldbeoff;
                

                if (document.getElementById("EncompassingDivider")){
                    document.getElementById("EncompassingDivider").remove();
                }
                if (document.getElementById("WHOLEPLAYERDIVIDER")){
                    document.getElementById("WHOLEPLAYERDIVIDER").remove();
                }

                if (document.getElementById("quickInfo").querySelectorAll('.scoreinthescore').length === 1){
                    document.querySelectorAll(".scoreinthescore").forEach(el=>{el.style.filter = ""})
        
                }
                document.querySelectorAll('.gamediv').forEach(element =>{
                        element.style.filter = "none";
                });

                
                let reverseclick = false;
     
                if(dividerclicked && moreclicks > 0){
                    document.body.style.cursor = "not-allowed";
                    if(document.getElementById("graphdiv")){
                        document.getElementById("graphdiv").style.opacity = "0";
                    }
                    document.getElementById("quickInfo").style.transform = "translate(260px,50px)";
                    document.getElementById("teambackgrounddiv").style.height = "50px";
                    document.getElementById("teambackgrounddiv").querySelector("#teamBackground").style.height = "50px";
                    if(document.getElementById("h3").querySelector("#teamPfp")){
                        document.getElementById("h3").querySelector("#teamPfp").style.height = "30px";
                        document.getElementById("h3").querySelector("#teamPfp").style.width = "30px";
                }
                document.getElementById("h3").style.transform = "translate(300px,-40px)";

                    document.getElementById("allInfo").style.transition = ".3s";

                    //create LeaderBoard
                    createpicturesonce = true;
                    createLeaderBoard(dapicksanddabans[d],true);
                    document.getElementById("damageInfo").onclick = function(){
                        document.querySelectorAll(".buttonz").forEach(el=>{el.classList.remove("selected")});
                        document.getElementById("damageInfo").classList.add('selected');
                        damageInfo(dapicksanddabans[d],true);
                    };
                    document.getElementById("ClutchInfo").onclick = function(){
                        document.querySelectorAll(".buttonz").forEach(el=>{el.classList.remove("selected")});
                        document.getElementById("ClutchInfo").classList.add("selected");
                        ClutchInfo(dapicksanddabans[d],true);
                    };
                    document.getElementById("EntryInfo").onclick = function(){
                        document.querySelectorAll(".buttonz").forEach(el=>{el.classList.remove("selected")});
                        document.getElementById("EntryInfo").classList.add("selected");
                        EntryInfo(dapicksanddabans[d],true);
                    };
                    document.getElementById("UtilityInfo").onclick = function(){
                        document.querySelectorAll(".buttonz").forEach(el=>{el.classList.remove("selected")});
                        document.getElementById("UtilityInfo").classList.add("selected");
                        UtilityInfo(dapicksanddabans[d],true);
                    };
                    
                    if(document.getElementById("allInfo")){
                        document.getElementById("allInfo").style.opacity = "0";
                    }
                    if(document.getElementById("graphdiv")){
                        document.getElementById("graphdiv").style.transform = "translate(1500px, 290px)";
                    }

                    document.getElementById("game"+d).style.webkitFilter = "drop-shadow(0px 0px 10px orange)";
                
                    if (document.getElementById("RECORDDD")){
                        document.getElementById("RECORDDD").style.transform = "translate(-25px,-80px)";

                    }


                    let scores = document.getElementsByClassName("scoreinthescore");
                    if(document.getElementById("quickInfo").querySelectorAll(".scoreinthescore").length === 1){
                        document.getElementById("quickInfo").querySelector(".scoreinthescore").style.filter = "drop-shadow(1px 1px 5px orange)";
                    }
                    for (const score of scores){
                        var scoreclicked = false;
                        score.style.transform = "translate(360px,-472px)";
                        score.style.pointerEvents = "auto";
                        score.onmouseover = function(){
                            if (document.getElementById("quickInfo").querySelectorAll('.scoreinthescore').length === 1){
                                return;
                            }
                            if(!scoreclicked){
                                //if no scores are clicked
                                score.style.filter = "drop-shadow(1px 1px 3px white)";
                            }

                        }
                        score.onmouseout = function(){
                            if (document.getElementById("quickInfo").querySelectorAll('.scoreinthescore').length === 1){
                                return;
                            }
                            if(!scoreclicked){
                                //if no scores are clicked, run this
                                score.style.filter = "";
                            }
                        }
                        score.onclick = function(){
                            if (document.getElementById("quickInfo").querySelectorAll('.scoreinthescore').length === 1){
                                return;
                            }
                            document.getElementById("ButtonsDivider").querySelectorAll(".buttonz").forEach(el =>{el.classList.remove("selected")});;
                            document.getElementById("quickInfo").querySelectorAll('.scoreinthescore').forEach(el =>{el.style.filter = ""});
                            scoreclicked = !scoreclicked;
                            if(scoreclicked){

                                score.style.filter = "drop-shadow(1px 1px 5px orange)";
                                //console.log(score);
                                var teamcounttt = 0;
                                var allteamnames = document.querySelectorAll("#TeamNameDoc");
                                for (const teamname of allteamnames){
                                    teamcounttt++;
                                    //console.log(score.querySelector("#imgg").src);
                                    var imgag = score.querySelector("#imgg").src;
                                    teamname.style.backgroundImage  = `url(${imgag})`;
                                    teamname.style.backgroundColor = "white";

                                    teamname.style.backgroundPosition = "-50px,-120px";
                                    //we know the color of the text corresponds to the color that the home team should be
                                    //get the team id from local storage, if (dapicksanddabans[d].teams[teamcounttt-1][0]=localStorage.getItem("THETEAMWEARESEARCHING")),
                                    //make the teamname color the color of the score, however we must know what color to make the other score, meaning we need another if,
                                    //if the score color is red, the other color is green, vise versa
                                    //console.log(dapicksanddabans[d].teams[teamcounttt-1][2]);
                                    if (dapicksanddabans[d].teams[teamcounttt-1] && dapicksanddabans[d].teams[teamcounttt-1][2] === localStorage.getItem("THETEAMWEARESEARCHING")  ){
                                        teamname.querySelector("#actualname").style.color = score.style.color;
                                    } 
                                    else{   
                                        (score.style.color === "red") ? teamname.querySelector("#actualname").style.color = "green" : teamname.querySelector("#actualname").style.color = "red"; 
                                    }
                                    //console.log(teamcounttt);
                                    if ( dapicksanddabans[d].teams[teamcounttt-1]){
                                        teamname.querySelector("#actualname").innerHTML =  dapicksanddabans[d].teams[teamcounttt-1][1]+   `<span class = "${teamname.querySelector("#actualname").style.color}2">`+" "+(teamcounttt === 1 ? dapicksanddabans[d].detailed_score[Number(score.id)-1].substring(0,2)+"</span>" : dapicksanddabans[d].detailed_score[Number(score.id)-1].substring(4))+"</span>";

                                    }
                                   // console.log(dapicksanddabans[d]);
                                    //console.log("THIS IS GAME "+(Number(score.id)));
                                    //console.log(dapicksanddabans[d].PlayerStats["GAME1"]);

                                    //maybe use a function named updateLeaderboard so that it doesnt have to do the api call for finding the picture, and only updates the information
                                    
                                }
                                 if (document.querySelectorAll("#fishking")){
                                    document.querySelectorAll("#fishking").forEach(el=>{el.remove()});
                                }
                    
                                overallLeaderboard(dapicksanddabans[d].PlayerStats["GAME"+(Number(score.id))],false,false,false,true);

                                document.getElementById("damageInfo").onclick = function(){
                                    document.querySelectorAll(".buttonz").forEach(el=>{ el.classList.remove("selected")});
                                    document.getElementById("damageInfo").classList.add("selected");
                                    damageInfo(dapicksanddabans[d].PlayerStats["GAME"+(Number(score.id))],false,false);
                                };
                                document.getElementById("ClutchInfo").onclick = function(){
                                    document.querySelectorAll(".buttonz").forEach(el=>{ el.classList.remove("selected")});
                                    document.getElementById("ClutchInfo").classList.add("selected");
                                    ClutchInfo(dapicksanddabans[d].PlayerStats["GAME"+(Number(score.id))],false,false);
                                };
                                document.getElementById("EntryInfo").onclick = function(){
                                    document.querySelectorAll(".buttonz").forEach(el=>{ el.classList.remove("selected")});
                                    document.getElementById("EntryInfo").classList.add("selected");
                                    EntryInfo(dapicksanddabans[d].PlayerStats["GAME"+(Number(score.id))],false,false);
                                };
                                document.getElementById("UtilityInfo").onclick = function(){
                                    document.querySelectorAll(".buttonz").forEach(el=>{ el.classList.remove("selected")});
                                    document.getElementById("UtilityInfo").classList.add("selected");
                                    UtilityInfo(dapicksanddabans[d].PlayerStats["GAME"+(Number(score.id))],false,false);
                                };
                            }
                           else if (!scoreclicked){

                            score.style.filter = "drop-shadow(1px 1px 5px white)";
                                //if no scores are clicked, the onclick will do this
                                var allteamnames = document.querySelectorAll("#TeamNameDoc");
                                var teamcounttt = 0;
                                for (var teamname of allteamnames){
                                   // console.log(teamname);
                                    teamcounttt++;
                                    teamname.style.backgroundImage = "";
                                    teamname.style.backgroundColor = "black";
                                    if(teamname.querySelector("#actualname").innerHTML.includes(dapicksanddabans[d].winner) ){
                                        teamname.querySelector("#actualname").style.color = "green";
                                    }
                                    else{
                                        teamname.querySelector("#actualname").style.color = "red";
                                    }
                                    if ( dapicksanddabans[d].teams[teamcounttt-1]){
                                        teamname.querySelector("#actualname").innerHTML =  dapicksanddabans[d].teams[teamcounttt-1][1]+   `<span class = "${teamname.querySelector("#actualname").style.color}2">`+" "+(teamcounttt === 1 ? dapicksanddabans[d].score.substring(0,2) : dapicksanddabans[d].score.substring(4));
                                    }
                                    

                                }
                                var allInfos = document.querySelectorAll(".infothing");
                                for (var infos of allInfos){
                                    // infos.style.transform = "translate(85px,0px)";
                                        infos.remove();
                                        
                                    } 
                                if (document.querySelectorAll("#fishking")){
                                    document.querySelectorAll("#fishking").forEach(el=>{el.remove()});
                                }

                                overallLeaderboard(dapicksanddabans[d],true,true,false,true);

                                document.getElementById("damageInfo").onclick = function(){
                                    document.querySelectorAll(".buttonz").forEach(el=>{el.classList.remove("selected")});
                                    document.getElementById("damageInfo").classList.add("selected");
                                    damageInfo(dapicksanddabans[d],true,true);
                                };
                                document.getElementById("ClutchInfo").onclick = function(){
                                    document.querySelectorAll(".buttonz").forEach(el=>{el.classList.remove("selected")});
                                    document.getElementById("ClutchInfo").classList.add("selected");
                                    ClutchInfo(dapicksanddabans[d],true,true);
                                };
                                document.getElementById("EntryInfo").onclick = function(){
                                    document.querySelectorAll(".buttonz").forEach(el=>{el.classList.remove("selected")});
                                    document.getElementById("EntryInfo").classList.add("selected");
                                    EntryInfo(dapicksanddabans[d],true,true);
                                };
                                document.getElementById("UtilityInfo").onclick = function(){
                                    document.querySelectorAll(".buttonz").forEach(el=>{el.classList.remove("selected")});
                                    document.getElementById("UtilityInfo").classList.add("selected");
                                    UtilityInfo(dapicksanddabans[d],true,true);
                                };


                                


                                
                            }
                            /*
                            if (document.querySelectorAll("#fishking")){
                                    
                                document.querySelectorAll("#fishking").forEach(el=>{
                                    el.style.opacity = "1";
                                    el.style.transform = "translate(180px, -141px)";
                                    });
                            }
                                    */
                            var allscores = document.querySelectorAll(".scoreinthescore");
                            for (var scorez of allscores){
                                scorez.style.filter = " ";

                            }
                            
                        }

                    }

                    info.style.fontSize = "21px";
                    info.style.transform = "translateY(-190px)";
                    info.style.width = "520px";

                    if (document.getElementById("tm1nme") && document.getElementById("tm2nme") && document.getElementById("VS") && document.getElementById("tm1pfp") && document.getElementById("tm2pfp")){
                        document.getElementById("tm1nme").style.fontSize = "15px";
                        document.getElementById("tm1nme").style.transform = "translate(50px,-290px)";
                        document.getElementById("tm2nme").style.fontSize = "15px";
                        document.getElementById("tm2nme").style.transform = "translate(225px,-290px)";
                        document.getElementById("VS").style.transform = "translate(145px,-275px)";
                        document.getElementById("VS").style.filter = "drop-shadow(.5px 0.5px 0.1px black)";
                        document.getElementById("VS").style.fontWeight = "bolder";
                        document.getElementById("tm1pfp").style.transform = "translate(-450px,30px)";
                        document.getElementById("tm1pfp").style.width = "75px";
                        document.getElementById("tm1pfp").style.height = "75px";
                        document.getElementById("tm2pfp").style.width = "75px";
                        document.getElementById("tm2pfp").style.height = "75px";
                        document.getElementById("tm2pfp").style.transform = "translate(-275px,30px)";
                    }
                    else{
                        createCover(dapicksanddabans,d,info,quickInfoDivider);

                        document.getElementById("tm1nme").style.fontSize = "15px";
                        document.getElementById("tm1nme").style.transform = "translate(50px,-290px)";
                        document.getElementById("tm2nme").style.fontSize = "15px";
                        document.getElementById("tm2nme").style.transform = "translate(225px,-290px)";
                        document.getElementById("VS").style.transform = "translate(145px,-275px)";
                        document.getElementById("VS").style.filter = "drop-shadow(.5px 0.5px 0.1px black)";
                        document.getElementById("VS").style.fontWeight = "bolder";
                        document.getElementById("tm1pfp").style.transform = "translate(-450px,30px)";
                        document.getElementById("tm1pfp").style.width = "75px";
                        document.getElementById("tm1pfp").style.height = "75px";
                        document.getElementById("tm2pfp").style.width = "75px";
                        document.getElementById("tm2pfp").style.height = "75px";
                        document.getElementById("tm2pfp").style.transform = "translate(-275px,30px)";
                        const butons = document.querySelectorAll('#buttonspan');
                        butons.forEach(element =>{
                            element.style.transform = "translate(1245px, 20px)";
                            element.style.opacity = "0";
                        });
   
                        document.querySelector("#quickInfo").querySelectorAll(".scoreinthescore").forEach(el=>{el.style.transform = "translate(360px,-472px)"});

                        if(document.getElementById("quickInfo").querySelectorAll('.scoreinthescore').length === 1){ 
                            document.getElementById("quickInfo").querySelector('.scoreinthescore').style.filter = "drop-shadow(1px 1px 5px orange)";
                            var imgag = document.getElementById("quickInfo").querySelector(".scoreinthescore").querySelector("#imgg").src;

                            document.querySelectorAll(".BoardTeam").forEach(el=>{
                                el.querySelector("#TeamNameDoc").style.backgroundImage  = `url(${imgag})`;
                                el.querySelector("#TeamNameDoc").style.backgroundColor = "white";

                            });
                     
                        }
                    }
                    
                    





                }
                if (moreclicks > 0 && moreclicks < 2){
                    if (document.getElementById("WHOLEPLAYERDIVIDER")){
                        document.getElementById("WHOLEPLAYERDIVIDER").remove();
                        
                    }
                    if(document.getElementById("graphdiv")){
                        document.getElementById("graphdiv").style.opacity = "1";
                    }
                   //moreclicks = 0;
                    if (!reverseclick){
                        fetchLast5Players(dapicksanddabans[d].vote_type, true);
                    }
          
                    
                    if (document.getElementById("RECORDDD")){
                        document.getElementById("RECORDDD").style.opacity = "0";
                    }
                    if(document.getElementById("TEAMPFP"+d)){

                        let oldonclick = document.getElementById("TEAMPFP"+d).onclick;
                        
                        document.getElementById("TEAMPFP"+d).onclick = function(){

                        
                           // console.log("PLAYER PF CLICKKEDD");
                            oldonclick.call(this,event);
                            //console.log(dapicksanddabans[d].PlayerStats[0]);
                            
                        }
                            
                    }
                    
                
                    
                    

                    
                }
                 if (moreclicks > 1){

                    document.getElementById("quickInfo").style.transform = "translate(260px,280px)";
                    document.getElementById("teambackgrounddiv").style.height = "280px";
                    document.getElementById("teambackgrounddiv").querySelector("#teamBackground").style.height = "280px";
                    if(document.getElementById("h3").querySelector("#teamPfp")){
                    document.getElementById("h3").querySelector("#teamPfp").style.height = "30px";
                    document.getElementById("h3").querySelector("#teamPfp").style.width = "30px";
                    }
                    document.getElementById("h3").style.transform = "translate(600px,-40px)";
                    if (document.getElementById("WHOLEPLAYERDIVIDER")){
                        document.getElementById("WHOLEPLAYERDIVIDER").remove();
                    }
                    document.getElementById("allInfo").style.transform = "translate(260px,300px)";
                    document.getElementById("graphdiv").style.transform = "translate(1040px, 290px)";

                    //console.log("running fetchlast5 from firstmatch id");
                    fetchLast5Players(firstMatchID,true);
                    //console.log("changing visibility");
                    document.getElementById("allInfo").style.transition = ".3s";
                    document.getElementById("allInfo").style.opacity = "1";
                    document.getElementById("graphdiv").style.opacity = "1";
   
                    if (document.getElementById("RECORDDD")){
                        document.getElementById("RECORDDD").style.opacity = "1";

                    }

                    /*
                    document.getElementById("tm1nme").style.fontSize = "25px";
                    document.getElementById("tm1nme").style.transform = "translate(50px,-250px)";
                    document.getElementById("tm1pfp").style.width = "150px";
                    document.getElementById("tm1pfp").style.height = "150px";
                    document.getElementById("tm1pfp").style.transform = "translate(-450px, 80px)";
                    document.getElementById("tm2nme").style.fontSize = "25px";
                    document.getElementById("tm2nme").style.transform = "translate(290px,-250px)";
                    document.getElementById("tm2pfp").style.width = "150px";
                    document.getElementById("tm2pfp").style.height = "150px";
                    document.getElementById("tm2pfp").style.transform = "translate(-200px, 80px)";
                    document.getElementById("BANINFOMAN").style.fontSize = "20px";
                    document.getElementById("BANINFOMAN").style.transform = "translateY(0px)";
                    document.getElementById("VS").style.transform = "translate(215px,-180px)";
                    document.getElementById("VS").style.fontSize = "50px";
                    document.querySelectorAll(".scoreinthescore").forEach(el => el.style.transform = "translate(365px,-158px)");
                    
                    */
                    const butons = document.querySelectorAll('#buttonspan');
                    butons.forEach(element =>{
                        element.style.transform = "translate(705px, 20px)";
                    });

                    info.innerHTML = "";
                    const myNode = document.getElementById("quickInfo");
                    while (myNode.firstChild) {
                        myNode.removeChild(myNode.lastChild);
                    }
                    quickInfoDivider.innerHTML = "PLEASE HOVER OVER A GAME";
                    document.getElementById("game"+d).style.webkitFilter = " ";
                    moreclicks = 0;
                }
                if(document.getElementById("EncompassingDivider")){
                    document.getElementById("EncompassingDivider").style.transform = "translate(755px,-718px)";

                }
  
            }

            document.getElementById("game"+d).onmouseover = function(){

 
                if (!dividerclicked){

                quickInfoDivider.innerHTML = dapicksanddabans[d].compname;
                if (moreclicks > 0 && moreclicks < 2){
                    document.getElementById("game"+d).style.webkitFilter = "drop-shadow(0px 0px 10px orange)";
                }
                else{
                    document.getElementById("game"+d).style.webkitFilter = "drop-shadow(0px 0px 10px white)";
                    //document.getElementById("game"+d).style.cursor = "pointer";
                }
                        
                        
                    document.getElementById("graphdiv").style.transform = "translate(1500px, 290px)";
                    document.getElementById("allInfo").style.transform = "translate(775px,300px)";
                    const butons = document.querySelectorAll('#buttonspan');
                    butons.forEach(element =>{
                        element.style.transform = "translate(1240px, 20px)"
                    });
                    createCover(dapicksanddabans, d,info,quickInfoDivider);
                
            } //
        }
                
        document.getElementById("game"+d).onmouseout = function(){
            
            if(!dividerclicked){
                if(document.getElementById("tm1nme") &&  document.getElementById("tm2nme") && document.getElementById("game"+d) && document.getElementById("allInfo")){
                    document.getElementById("tm1nme").style.fontSize = "25px";
                    document.getElementById("tm1nme").style.transform = "translate(60px,-250px)";
                    document.getElementById("tm2nme").style.fontSize = "25px";
                    document.getElementById("tm2nme").style.transform = "translate(300px,-250px)";
                    info.style.transform = "";
                    info.style.fontSize = "20px";
                    document.getElementById("game"+d).style.webkitFilter = "";
                    document.getElementById("allInfo").style.transform = "translate(260px,300px)";
                    document.getElementById("graphdiv").style.transform = "translate(1040px, 290px)";

                }

            
            const butons = document.querySelectorAll('#buttonspan');
                    butons.forEach(element =>{
                        element.style.transform = "translate(705px, 20px)";
                    });

            info.innerHTML = "";
            const myNode = document.getElementById("quickInfo");
            while (myNode.firstChild) {
                myNode.removeChild(myNode.lastChild);
            }
            quickInfoDivider.innerHTML = "PLEASE HOVER OVER A GAME";
            
        }
        else{
           
        }
    }
    document.getElementById("game"+d).addEventListener("dblclick", function(){
        window.open("https://www.faceit.com/en/cs2/room/"+dapicksanddabans[d].vote_type);
        if(document.getElementById("WHOLEPLAYERDIVIDER")){
            document.getElementById("WHOLEPLAYERDIVIDER").remove();
        }
    });
    }
    }
    }
    if (document.getElementById("RECORDDD")){
        if (document.getElementById("RECORDDD").children.length === 5){
            document.getElementById("RECORDDD").style.fontSize = "28px";
        }
        else if (document.getElementById("RECORDDD").children.length > 5){
            document.getElementById("RECORDDD").style.fontSize = "20px";

        }
    }
    if(document.getElementById("graphdiv")){
        document.getElementById("graphdiv").remove();
    }
    var newgraph = document.createElement("div");
    newgraph.id = "graphdiv";
    
    document.getElementById(".BanFileExplorer").append(newgraph);
    var Bars = document.createElement("button");
    Bars.id = "Barsbuton";
    Bars.classList.add("buttonstyle")
    Bars.innerHTML = "Bars"
    Bars.onclick = function(){
        switch(document.getElementById("graph").classList[0]){
            case "Wins":
                if(document.getElementById("graph")){
                    document.getElementById("graph").remove();
                }
                createWinsChart();
                break;
            case "Loss":
                if(document.getElementById("graph")){
                    document.getElementById("graph").remove();
                }
                createLossChart();
                break;
            case "Bans":
                if(document.getElementById("graph")){
                    document.getElementById("graph").remove();
                }
                createBannedChart();
                break;
            case "Picks":
                if(document.getElementById("graph")){
                    document.getElementById("graph").remove();
                }
                createPickChart();
                break;
            default:
                if(document.getElementById("graph")){
                    document.getElementById("graph").remove();
                }
                createChart();
                break;
        }
    }
    var Doughnut = document.createElement("button");
    Doughnut.id = "Dogbutton";
    Doughnut.innerHTML = "Doughnut"
    Doughnut.classList.add("buttonstyle")
    Doughnut.onclick = function(){
        switch(document.getElementById("graph").classList[0]){
            case "Wins":
                if(document.getElementById("graph")){
                    document.getElementById("graph").remove();
                }
                createWinsChart("doughnut");
                break;
            case "Loss":
                if(document.getElementById("graph")){
                    document.getElementById("graph").remove();
                }
                createLossChart("doughnut");
                break;
            case "Bans":
                if(document.getElementById("graph")){
                    document.getElementById("graph").remove();
                }
                createBannedChart("doughnut");
                break;
            case "Picks":
                if(document.getElementById("graph")){
                    document.getElementById("graph").remove();
                }
                createPickChart("doughnut");
                break;
            default:
                if(document.getElementById("graph")){
                    document.getElementById("graph").remove();
                }
                createChart("doughnut");
                break;
        }

    }
    var Polar = document.createElement("button");
    Polar.id = "PolarButton";
    Polar.innerHTML = "Polar";
    Polar.classList.add("buttonstyle");
    Polar.onclick = function(){
        console.log(document.getElementById("graph").classList[0]);
        switch(document.getElementById("graph").classList[0]){
            case "Wins":
                if(document.getElementById("graph")){
                    document.getElementById("graph").remove();
                }
                createWinsChart("polarArea");
                break;
            case "Loss":
                if(document.getElementById("graph")){
                    document.getElementById("graph").remove();
                }
                createLossChart("polarArea");
                break;
            case "Bans":
                if(document.getElementById("graph")){
                    document.getElementById("graph").remove();
                }
                createBannedChart("polarArea");
                break;
            case "Picks":
                if(document.getElementById("graph")){
                    document.getElementById("graph").remove();
                }
                createPickChart("polarArea");
                break;
            default:
                if(document.getElementById("graph")){
                    document.getElementById("graph").remove();
                }
                createChart("polarArea");
                break;
        }
    }
    newgraph.appendChild(Bars);
    newgraph.appendChild(Doughnut);
    newgraph.appendChild(Polar);
    
    //newgraph.appendChild(gobackdefault);
    var titlebutalsobutton = document.createElement("div");
    titlebutalsobutton.id = "titlebut";
    var changebutton = document.createElement("select");
    changebutton.id = "changebut";
    
    const dropdownOptions = ["Played","Won", "Lost", "Banned", "Picked"];
    dropdownOptions.forEach(optionText => {
        const option = document.createElement("option");
        option.value = optionText;
        option.text = optionText;
        changebutton.appendChild(option);
      });
      changebutton.addEventListener('change', function() {
        const selectedValue = changebutton.value;
        if(document.getElementById("graph")){
            document.getElementById("graph").remove();
        }
        dropdownButton(selectedValue);
      });    
    titlebutalsobutton.innerHTML = "Distribution of Maps ";
    titlebutalsobutton.appendChild(changebutton);
    newgraph.appendChild(titlebutalsobutton);
   createChart();
    
   // console.log(document.getElementById("RECORDDD").children.length);
}
function dropdownButton(selectedValue){
    switch(selectedValue){
        case "Played":
            createChart();
            break;
        case "Won":
            createWinsChart();
            break;
        case "Lost":
            createLossChart();
            break;
        case "Banned":
            createBannedChart();
            break;
        case "Picked":
            createPickChart();
            break;

    }
}
function createChart(type){

    Chart.plugins.register({
        beforeDraw: function(chart) {
          const ctx = chart.chart.ctx;
          ctx.save();
          ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
          ctx.shadowBlur = 4;
          ctx.shadowOffsetX = 2;
          ctx.shadowOffsetY = 2;
        },
        afterDraw: function(chart) {
          chart.chart.ctx.restore();
        }
      });
    var grph = document.createElement("canvas");
    grph.id = "graph";
    grph.classList.add("Default");
    grph.width = 400;
   

    var yArray = [played[7], played[4], played[2], played[1], played[5],played[3],played[0]];
    var xArray = ['Train' ,'Mirage','Inferno','Anubis','Nuke', 'Dust II', 'Ancient'];
    var barColors = ['brown', 'rgb(215, 183, 0)','rgb(171, 99, 39)','salmon','cyan', 'beige','lime'];

      if(!(String(type) === "polarArea")){
        // Step 1: Zip label, value, and color together
        var zipped = xArray.map((label, index) => ({
            label: label,
            value: yArray[index],
            color: barColors[index]
        }));
    
        // Step 2: Sort by value (descending)
        zipped.sort((a, b) => b.value - a.value);
        
        // Step 3: Unzip back into separate arrays
        xArray = zipped.map(item => item.label);
        yArray = zipped.map(item => item.value);
        barColors = zipped.map(item => item.color);
        // Sort the data descending
        var zipped = xArray.map((label, index) => ({ label, value: yArray[index] }));
        zipped.sort((a, b) => b.value - a.value);
        xArray = zipped.map(item => item.label);
        yArray = zipped.map(item => item.value);
    }
    const rowHeight = 50; // Adjust as needed
    const chartHeight = xArray.length * rowHeight;
    if (!type){
        grph.height = chartHeight;
        console.log(grph.height);
        if(chartHeight <= 100){
            grph.height = 150;
        }
    }
    else{
        grph.height = 350;

    }


        new Chart(grph, {
              type: (type)? type :"horizontalBar",
              data: {
                labels: xArray,
                datasets: [{
                  backgroundColor: barColors,
                  data: yArray,
                    borderWidth: 1,
                    barPercentage: .6,       // Controls bar thickness relative to the category
                    categoryPercentage: 0.6,  // Controls spacing between bars
                }],
                
              },
              options: {
                responsive: false,
                maintainAspectRatio: false,

                legend: {display: false},
                title:{

                    display: false,
                    text: "Distribution Of Played Maps",
                    fontSize: 30,
                    fontFamily: "'Play', sans-serif",
                    fontStyle: 'bold'
                },
                layout: {
                    padding: {
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0
                    }
                },
                scales: {
                    xAxes: [{
                        display: ((type === "doughnut")|| (type === "polarArea")) ? false : true,

                      ticks: {
                        beginAtZero: true,
                        fontSize: 18,
                        fontFamily: "'Play', sans-serif"
                      }
                    }],
                    yAxes: [{
                        display: ((type === "doughnut") || (type === "polarArea")) ? false : true,

                      ticks: {
                        fontSize: 15,
                        fontFamily: "'Play', sans-serif"
                      }
                    }]
                  }
            }
            });
        document.getElementById("graphdiv").append(grph);
}
function createWinsChart(type){

    Chart.plugins.register({
        beforeDraw: function(chart) {
          const ctx = chart.chart.ctx;
          ctx.save();
          ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
          ctx.shadowBlur = 4;
          ctx.shadowOffsetX = 2;
          ctx.shadowOffsetY = 2;
        },
        afterDraw: function(chart) {
          chart.chart.ctx.restore();
        }
      });
    var grph = document.createElement("canvas");
    grph.id = "graph";
    grph.classList.add("Wins");
    grph.width = 400;

    var yArray = [W[7], W[4], W[2], W[1], W[5],W[3],W[0]];
    var xArray = ['Train' ,'Mirage','Inferno','Anubis','Nuke', 'Dust II', 'Ancient'];
    var barColors = ['brown', 'rgb(215, 183, 0)','rgb(171, 99, 39)','salmon','cyan', 'beige','lime'];

      if(!(String(type) === "polarArea")){
        // Step 1: Zip label, value, and color together
        var zipped = xArray.map((label, index) => ({
            label: label,
            value: yArray[index],
            color: barColors[index]
        }));
        zipped = zipped.filter(item => item.value !== 0);
        // Step 2: Sort by value (descending)
        zipped.sort((a, b) => b.value - a.value);
        
        // Step 3: Unzip back into separate arrays
        xArray = zipped.map(item => item.label);
        yArray = zipped.map(item => item.value);
        barColors = zipped.map(item => item.color);
        // Sort the data descending
        var zipped = xArray.map((label, index) => ({ label, value: yArray[index] }));
        zipped.sort((a, b) => b.value - a.value);
        xArray = zipped.map(item => item.label);
        yArray = zipped.map(item => item.value);
    }
    const rowHeight = 50; // Adjust as needed
    const chartHeight = xArray.length * rowHeight;
    if (!type){
        grph.height = chartHeight;
        if(chartHeight <= 100){
            grph.height = 150;
        }
    }
    else{
        grph.height = 350;

    }
    

        new Chart(grph, {
              type: (type)? type :"horizontalBar",
              data: {
                labels: xArray,
                datasets: [{
                  backgroundColor: barColors,
                  data: yArray,
                    borderWidth: 1,
                    barPercentage: .6,       // Controls bar thickness relative to the category
                    categoryPercentage: 0.6,  // Controls spacing between bars
                }],
                
              },
              options: {
                responsive: false,
                maintainAspectRatio: false,

                legend: {display: false},
                title:{

                    display: false,
                    text: "Distribution Of Map Wins",
                    fontSize: 30,
                    fontFamily: "'Play', sans-serif",
                    fontStyle: 'bold'
                },
                layout: {
                    padding: {
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0
                    }
                },
                scales: {
                    xAxes: [{
                        display: ((type === "doughnut")|| (type === "polarArea")) ? false : true,

                      ticks: {
                        beginAtZero: true,
                        fontSize: 18,
                        fontFamily: "'Play', sans-serif"
                      }
                    }],
                    yAxes: [{
                        display: ((type === "doughnut") || (type === "polarArea")) ? false : true,

                      ticks: {
                        fontSize: 15,
                        fontFamily: "'Play', sans-serif"
                      }
                    }]
                  }
            }
            });
        document.getElementById("graphdiv").append(grph);
}
function createLossChart(type){

    Chart.plugins.register({
        beforeDraw: function(chart) {
          const ctx = chart.chart.ctx;
          ctx.save();
          ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
          ctx.shadowBlur = 4;
          ctx.shadowOffsetX = 2;
          ctx.shadowOffsetY = 2;
        },
        afterDraw: function(chart) {
          chart.chart.ctx.restore();
        }
      });
    var grph = document.createElement("canvas");
    grph.id = "graph";
    grph.classList.add("Loss");
    grph.width = 400;

    var yArray = [L[7], L[4], L[2], L[1], L[5],L[3],L[0]];
    var xArray = ['Train' ,'Mirage','Inferno','Anubis','Nuke', 'Dust II', 'Ancient'];
    var barColors = ['brown', 'rgb(215, 183, 0)','rgb(171, 99, 39)','salmon','cyan', 'beige','lime'];

      if(!(String(type) === "polarArea")){
        // Step 1: Zip label, value, and color together
        var zipped = xArray.map((label, index) => ({
            label: label,
            value: yArray[index],
            color: barColors[index]
        }));
        zipped = zipped.filter(item => item.value !== 0);
        // Step 2: Sort by value (descending)
        zipped.sort((a, b) => b.value - a.value);
        
        // Step 3: Unzip back into separate arrays
        xArray = zipped.map(item => item.label);
        yArray = zipped.map(item => item.value);
        barColors = zipped.map(item => item.color);
        // Sort the data descending
        var zipped = xArray.map((label, index) => ({ label, value: yArray[index] }));
        zipped.sort((a, b) => b.value - a.value);
        xArray = zipped.map(item => item.label);
        yArray = zipped.map(item => item.value);
    }
    const rowHeight = 50; // Adjust as needed
    const chartHeight = xArray.length * rowHeight;
    console.log(chartHeight);
    if (!type){
        grph.height = chartHeight;
        if(chartHeight <= 100){
            grph.height = 150;
        }
    }
    else{
        grph.height = 350;

    }
   
        new Chart(grph, {
              type: (type)? type :"horizontalBar",
              data: {
                labels: xArray,
                datasets: [{
                  backgroundColor: barColors,
                  data: yArray,
                    borderWidth: 1,
                    barPercentage: .6,       // Controls bar thickness relative to the category
                    categoryPercentage: 0.6,  // Controls spacing between bars
                }],
                
              },
              options: {
                responsive: false,
                maintainAspectRatio: false,

                legend: {display: false},
                title:{

                    display: false,
                    text: "Distribution Of Map Losses",
                    fontSize: 30,
                    fontFamily: "'Play', sans-serif",
                    fontStyle: 'bold'
                },
                layout: {
                    padding: {
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0
                    }
                },
                scales: {
                    xAxes: [{
                        display: ((type === "doughnut")|| (type === "polarArea")) ? false : true,

                      ticks: {
                        beginAtZero: true,
                        fontSize: 18,
                        fontFamily: "'Play', sans-serif"
                      }
                    }],
                    yAxes: [{
                        display: ((type === "doughnut") || (type === "polarArea")) ? false : true,

                      ticks: {
                        fontSize: 15,
                        fontFamily: "'Play', sans-serif"
                      }
                    }]
                  }
            }
            });
        document.getElementById("graphdiv").append(grph);
}
function createBannedChart(type){

    Chart.plugins.register({
        beforeDraw: function(chart) {
          const ctx = chart.chart.ctx;
          ctx.save();
          ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
          ctx.shadowBlur = 4;
          ctx.shadowOffsetX = 2;
          ctx.shadowOffsetY = 2;
        },
        afterDraw: function(chart) {
          chart.chart.ctx.restore();
        }
      });
    var grph = document.createElement("canvas");
    grph.id = "graph";
    grph.classList.add("Bans");
    grph.width = 400;

    var yArray = [bans[7], bans[4], bans[2], bans[1], bans[5],bans[3],bans[0]];
    var xArray = ['Train' ,'Mirage','Inferno','Anubis','Nuke', 'Dust II', 'Ancient'];
    var barColors = ['brown', 'rgb(215, 183, 0)','rgb(171, 99, 39)','salmon','cyan', 'beige','lime'];

      if(!(String(type) === "polarArea")){
        // Step 1: Zip label, value, and color together
        var zipped = xArray.map((label, index) => ({
            label: label,
            value: yArray[index],
            color: barColors[index]
        }));
        zipped = zipped.filter(item => item.value !== 0);
        // Step 2: Sort by value (descending)
        zipped.sort((a, b) => b.value - a.value);
        
        // Step 3: Unzip back into separate arrays
        xArray = zipped.map(item => item.label);
        yArray = zipped.map(item => item.value);
        barColors = zipped.map(item => item.color);
        // Sort the data descending
        var zipped = xArray.map((label, index) => ({ label, value: yArray[index] }));
        zipped.sort((a, b) => b.value - a.value);
        xArray = zipped.map(item => item.label);
        yArray = zipped.map(item => item.value);
    }
    const rowHeight = 50; // Adjust as needed
    const chartHeight = xArray.length * rowHeight;
    console.log(chartHeight);
    if (!type){
        grph.height = chartHeight;
        if(chartHeight <= 100){
            grph.height = 150;
        }
    }
    else{
        grph.height = 350;

    }
   
        new Chart(grph, {
              type: (type)? type :"horizontalBar",
              data: {
                labels: xArray,
                datasets: [{
                  backgroundColor: barColors,
                  data: yArray,
                    borderWidth: 1,
                    barPercentage: .6,       // Controls bar thickness relative to the category
                    categoryPercentage: 0.6,  // Controls spacing between bars
                }],
                
              },
              options: {
                responsive: false,
                maintainAspectRatio: false,

                legend: {display: false},
                title:{

                    display: false,
                    text: "Distribution Of Map Losses",
                    fontSize: 30,
                    fontFamily: "'Play', sans-serif",
                    fontStyle: 'bold'
                },
                layout: {
                    padding: {
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0
                    }
                },
                scales: {
                    xAxes: [{
                        display: ((type === "doughnut")|| (type === "polarArea")) ? false : true,

                      ticks: {
                        beginAtZero: true,
                        fontSize: 18,
                        fontFamily: "'Play', sans-serif"
                      }
                    }],
                    yAxes: [{
                        display: ((type === "doughnut") || (type === "polarArea")) ? false : true,

                      ticks: {
                        fontSize: 15,
                        fontFamily: "'Play', sans-serif"
                      }
                    }]
                  }
            }
            });
        document.getElementById("graphdiv").append(grph);
}
function createPickChart(type){

    Chart.plugins.register({
        beforeDraw: function(chart) {
          const ctx = chart.chart.ctx;
          ctx.save();
          ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
          ctx.shadowBlur = 4;
          ctx.shadowOffsetX = 2;
          ctx.shadowOffsetY = 2;
        },
        afterDraw: function(chart) {
          chart.chart.ctx.restore();
        }
      });
    var grph = document.createElement("canvas");
    grph.id = "graph";
    grph.classList.add("Picks");
    grph.width = 400;

    var yArray = [picks[7], picks[4], picks[2], picks[1], picks[5],picks[3],picks[0]];
    var xArray = ['Train' ,'Mirage','Inferno','Anubis','Nuke', 'Dust II', 'Ancient'];
    var barColors = ['brown', 'rgb(215, 183, 0)','rgb(171, 99, 39)','salmon','cyan', 'beige','lime'];

      if(!(String(type) === "polarArea")){
        // Step 1: Zip label, value, and color together
        var zipped = xArray.map((label, index) => ({
            label: label,
            value: yArray[index],
            color: barColors[index]
        }));
        zipped = zipped.filter(item => item.value !== 0);
        // Step 2: Sort by value (descending)
        zipped.sort((a, b) => b.value - a.value);
        
        // Step 3: Unzip back into separate arrays
        xArray = zipped.map(item => item.label);
        yArray = zipped.map(item => item.value);
        barColors = zipped.map(item => item.color);
        // Sort the data descending
        var zipped = xArray.map((label, index) => ({ label, value: yArray[index] }));
        zipped.sort((a, b) => b.value - a.value);
        xArray = zipped.map(item => item.label);
        yArray = zipped.map(item => item.value);
    }
    const rowHeight = 50; // Adjust as needed
    const chartHeight = xArray.length * rowHeight;
    console.log(chartHeight);
    if (!type){
        grph.height = chartHeight;
        if(chartHeight <= 100){
            grph.height = 150;
        }
    }
    else{
        grph.height = 350;

    }
   
        new Chart(grph, {
              type: (type)? type :"horizontalBar",
              data: {
                labels: xArray,
                datasets: [{
                  backgroundColor: barColors,
                  data: yArray,
                    borderWidth: 1,
                    barPercentage: .6,       // Controls bar thickness relative to the category
                    categoryPercentage: 0.6,  // Controls spacing between bars
                }],
                
              },
              options: {
                responsive: false,
                maintainAspectRatio: false,

                legend: {display: false},
                title:{

                    display: false,
                    text: "Distribution Of Map Losses",
                    fontSize: 30,
                    fontFamily: "'Play', sans-serif",
                    fontStyle: 'bold'
                },
                layout: {
                    padding: {
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0
                    }
                },
                scales: {
                    xAxes: [{
                        display: ((type === "doughnut")|| (type === "polarArea")) ? false : true,

                      ticks: {
                        beginAtZero: true,
                        fontSize: 18,
                        fontFamily: "'Play', sans-serif"
                      }
                    }],
                    yAxes: [{
                        display: ((type === "doughnut") || (type === "polarArea")) ? false : true,

                      ticks: {
                        fontSize: 15,
                        fontFamily: "'Play', sans-serif"
                      }
                    }]
                  }
            }
            });
        document.getElementById("graphdiv").append(grph);
}
function createPickChart(type){

    Chart.plugins.register({
        beforeDraw: function(chart) {
          const ctx = chart.chart.ctx;
          ctx.save();
          ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
          ctx.shadowBlur = 4;
          ctx.shadowOffsetX = 2;
          ctx.shadowOffsetY = 2;
        },
        afterDraw: function(chart) {
          chart.chart.ctx.restore();
        }
      });
    var grph = document.createElement("canvas");
    grph.id = "graph";
    grph.classList.add("Picks");
    grph.width = 400;

    var yArray = [picks[7], picks[4], picks[2], picks[1], picks[5],picks[3],picks[0]];
    var xArray = ['Train' ,'Mirage','Inferno','Anubis','Nuke', 'Dust II', 'Ancient'];
    var barColors = ['brown', 'rgb(215, 183, 0)','rgb(171, 99, 39)','salmon','cyan', 'beige','lime'];

      if(!(String(type) === "polarArea")){
        // Step 1: Zip label, value, and color together
        var zipped = xArray.map((label, index) => ({
            label: label,
            value: yArray[index],
            color: barColors[index]
        }));
        zipped = zipped.filter(item => item.value !== 0);
        // Step 2: Sort by value (descending)
        zipped.sort((a, b) => b.value - a.value);
        
        // Step 3: Unzip back into separate arrays
        xArray = zipped.map(item => item.label);
        yArray = zipped.map(item => item.value);
        barColors = zipped.map(item => item.color);
        // Sort the data descending
        var zipped = xArray.map((label, index) => ({ label, value: yArray[index] }));
        zipped.sort((a, b) => b.value - a.value);
        xArray = zipped.map(item => item.label);
        yArray = zipped.map(item => item.value);
    }
    const rowHeight = 50; // Adjust as needed
    const chartHeight = xArray.length * rowHeight;
    if (!type){
        grph.height = chartHeight;
        if(chartHeight <= 100){
            grph.height = 150;
        }
    }
    else{
        grph.height = 350;

    }
    

        new Chart(grph, {
              type: (type)? type :"horizontalBar",
              data: {
                labels: xArray,
                datasets: [{
                  backgroundColor: barColors,
                  data: yArray,
                    borderWidth: 1,
                    barPercentage: .6,       // Controls bar thickness relative to the category
                    categoryPercentage: 0.6,  // Controls spacing between bars
                }],
                
              },
              options: {
                responsive: false,
                maintainAspectRatio: false,

                legend: {display: false},
                title:{

                    display: false,
                    text: "Distribution Of Map Wins",
                    fontSize: 30,
                    fontFamily: "'Play', sans-serif",
                    fontStyle: 'bold'
                },
                layout: {
                    padding: {
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0
                    }
                },
                scales: {
                    xAxes: [{
                        display: ((type === "doughnut")|| (type === "polarArea")) ? false : true,

                      ticks: {
                        beginAtZero: true,
                        fontSize: 18,
                        fontFamily: "'Play', sans-serif"
                      }
                    }],
                    yAxes: [{
                        display: ((type === "doughnut") || (type === "polarArea")) ? false : true,

                      ticks: {
                        fontSize: 15,
                        fontFamily: "'Play', sans-serif"
                      }
                    }]
                  }
            }
            });
        document.getElementById("graphdiv").append(grph);
}
let createpicturesonce = true;
function createLeaderBoard(matchinfo, isOverallLeaderboard, goingbacktooriginal){

        //console.log(matchinfo.PlayerStats);



       
       

        let EncompassingDivider = document.createElement("div");
            EncompassingDivider.id = "EncompassingDivider";
        let ButtonsDivider = document.createElement("div");
            ButtonsDivider.id = "ButtonsDivider";
            EncompassingDivider.appendChild(ButtonsDivider);
     
       if (isOverallLeaderboard && !goingbacktooriginal){
            
            
            let ActualLeaderboard = document.createElement("div");
            ActualLeaderboard.id = "ActualLeaderboard";
            EncompassingDivider.appendChild(ActualLeaderboard);
            let team1 = document.createElement("div");
            team1.id = "BoardTeam1";
            team1.classList.add("BoardTeam");
            ActualLeaderboard.appendChild(team1);
            let team2 = document.createElement("div");
            team2.id = "BoardTeam2";
            team2.classList.add("BoardTeam");
            ActualLeaderboard.appendChild(team2);

            let damageinfo = document.createElement("button");
            damageinfo.id = "damageInfo";
            damageinfo.classList.add("buttonz");
            damageinfo.innerHTML = "Damage Info";
            ButtonsDivider.appendChild(damageinfo);
            let ClutchInfo = document.createElement("button");
            ClutchInfo.id = "ClutchInfo";
            ClutchInfo.innerHTML = "Clutch Info";
            ClutchInfo.classList.add("buttonz");
            ButtonsDivider.appendChild(ClutchInfo);
            let EntryInfo = document.createElement("button");
            EntryInfo.id = "EntryInfo";
            EntryInfo.classList.add("buttonz");
            EntryInfo.innerHTML = "Entry/ First Kill Info";
            ButtonsDivider.appendChild(EntryInfo);
            let UtilityInfo = document.createElement("button");
            UtilityInfo.id = "UtilityInfo";
            UtilityInfo.classList.add("buttonz");
            UtilityInfo.innerHTML = "Utility Info"
            ButtonsDivider.appendChild(UtilityInfo);


            document.getElementById(".BanFileExplorer").appendChild(EncompassingDivider);
            
       }
       else{
        document.getElementById("BoardTeam1").querySelectorAll(".PLAYERDIVIDERR").forEach(thing => thing.querySelectorAll('#INFOLOL').forEach(el => el.remove()));
        document.getElementById("BoardTeam2").querySelectorAll(".PLAYERDIVIDERR").forEach(thing => thing.querySelectorAll('#INFOLOL').forEach(el => el.remove()));

        
       }
       if (goingbacktooriginal){
        document.getElementById("BoardTeam1").querySelectorAll(".PLAYERDIVIDERR").forEach(thing => thing.querySelectorAll('#INFOLOL').forEach(el => el.remove()));
        document.getElementById("BoardTeam2").querySelectorAll(".PLAYERDIVIDERR").forEach(thing => thing.querySelectorAll('#INFOLOL').forEach(el => el.remove()));
        
       }
       
       
       

        //console.log(matchinfo);


        overallLeaderboard(matchinfo,isOverallLeaderboard,goingbacktooriginal);

}

function damageInfo(matchinfo, isOverallLeaderboard,goingbacktooriginal){
    var matchobject = matchinfo;
    //console.log("RUNNINGGGGG");
    if (isOverallLeaderboard){
        matchobject = matchinfo.PlayerStats;
        
    }

   // console.log(matchobject);
    var overallPlayerStats = {};
    let teamnum = -1;
    let amountofgames = 0;
    Object.keys(matchobject).forEach(item =>{
                
        //console.log(item);
            amountofgames++;
            
            var item1 = matchobject[item];
           // console.log(matchinfo);
            
            Object.keys(item1).forEach(team =>{
                //console.log("wtafdasdsad");
                //console.log(team);
                //console.log(item1[team]);
                teamnum++;
                if(isOverallLeaderboard){
                    if (!overallPlayerStats[team]){
                        overallPlayerStats[team] = {};
                    }
                }
                else{
                    if (!overallPlayerStats[item]){
                        overallPlayerStats[item] = {};
                    }
                }

                Object.keys(item1[team]).forEach(player=>{
                    
                    var team1 = item1[team];
                    var players = team1[player];
                    //console.log(players);
                    //console.log(team);
                    //console.log(players.nickname);
                    Object.keys(players).forEach(plyr=>{
                        //console.log(plyr);
                        var player = players[plyr];
                        if (typeof player === "string"){
                            return;
                        }
                        else{
                            //this is every single player.
                            //STATS I NEED:   KILLS   DEATHS   ASSISTS   ADR   MVPs   HEADSHOTS
                            
                        // console.log(player.nickname);
                            

                            //console.log(players);
                            if(!isOverallLeaderboard){
                                if (!overallPlayerStats[item][players.nickname]){
                                    overallPlayerStats[item][players.nickname] = {kills: 0, deaths: 0, assists: 0, adr: 0, totDamage: 0, KD: 0, KR: 0, headshots: 0, headshotpercent: 0, DoubleK: 0, TripK: 0, QuadK: 0, FivK: 0, Sniper: 0, Pistol: 0, Knife: 0, Zeus: 0, id: null};
                                
                                }
                                overallPlayerStats[item][players.nickname].kills +=Number(player.Kills);
                                overallPlayerStats[item][players.nickname].deaths+=Number(player.Deaths);
                                overallPlayerStats[item][players.nickname].assists+=Number(player.Assists);
                                overallPlayerStats[item][players.nickname].adr+=Number(player.ADR);
                                overallPlayerStats[item][players.nickname].totDamage+=Number(player.Damage);
                                overallPlayerStats[item][players.nickname].KD+=Number(player["K/D Ratio"]);
                                overallPlayerStats[item][players.nickname].KR+=Number(player["K/R Ratio"]);
                                overallPlayerStats[item][players.nickname].headshots+=Number(player.Headshots);
                                overallPlayerStats[item][players.nickname].headshotpercent+=Number(player["Headshots %"]);
                                overallPlayerStats[item][players.nickname].DoubleK+=Number(player["Double Kills"]);
                                overallPlayerStats[item][players.nickname].TripK+=Number(player["Triple Kills"]);
                                overallPlayerStats[item][players.nickname].QuadK+=Number(player["Quadro Kills"]);
                                overallPlayerStats[item][players.nickname].FivK+=Number(player["Penta Kills"]);
                                overallPlayerStats[item][players.nickname].Sniper+=Number(player["Sniper Kills"]);
                                overallPlayerStats[item][players.nickname].Pistol+=Number(player["Pistol Kills"]);
                                overallPlayerStats[item][players.nickname].Knife+=Number(player["Knife Kills"]);
                                overallPlayerStats[item][players.nickname].Zeus+=Number(player["Zues Kills"]);
                                overallPlayerStats[item][players.nickname].id = player.player_id;
                                
                            }
                            else{
                                if (!overallPlayerStats[team][player.nickname]){
                                    overallPlayerStats[team][player.nickname] = {kills: 0, deaths: 0, assists: 0, adr: 0, totDamage: 0, KD: 0, KR: 0, headshots: 0, headshotpercent: 0, DoubleK: 0, TripK: 0, QuadK: 0, FivK: 0, Sniper: 0, Pistol: 0, Knife: 0, Zeus: 0, id: null};

                                }
                          
                                overallPlayerStats[team][player.nickname].kills +=Number(player.player_stats.Kills);
                                overallPlayerStats[team][player.nickname].deaths+=Number(player.player_stats.Deaths);
                                overallPlayerStats[team][player.nickname].assists+=Number(player.player_stats.Assists);
                                overallPlayerStats[team][player.nickname].adr+=Number(player.player_stats.ADR);
                                overallPlayerStats[team][player.nickname].totDamage+=Number(player.player_stats.Damage);
                                overallPlayerStats[team][player.nickname].KD+=Number(player.player_stats["K/D Ratio"]);
                                overallPlayerStats[team][player.nickname].KR+=Number(player.player_stats["K/R Ratio"]);
                                overallPlayerStats[team][player.nickname].headshots+=Number(player.player_stats.Headshots);
                                overallPlayerStats[team][player.nickname].headshotpercent+=Number(player.player_stats["Headshots %"]);
                                overallPlayerStats[team][player.nickname].DoubleK+=Number(player.player_stats["Double Kills"]);
                                overallPlayerStats[team][player.nickname].TripK+=Number(player.player_stats["Triple Kills"]);
                                overallPlayerStats[team][player.nickname].QuadK+=Number(player.player_stats["Quadro Kills"]);
                                overallPlayerStats[team][player.nickname].FivK+=Number(player.player_stats["Penta Kills"]);
                                overallPlayerStats[team][player.nickname].Sniper+=Number(player.player_stats["Sniper Kills"]);
                                overallPlayerStats[team][player.nickname].Pistol+=Number(player.player_stats["Pistol Kills"]);
                                overallPlayerStats[team][player.nickname].Knife+=Number(player.player_stats["Knife Kills"]);
                                overallPlayerStats[team][player.nickname].Zeus+=Number(player.player_stats["Zues Kills"]);
                                




                                overallPlayerStats[team][player.nickname].id = player.player_id;
                            }
                            
                        
                            
                        }
                    })
                })
            })
            if(teamnum === 1){
                teamnum = -1;
            }
        
        
    })
   
    let teamcounter = 0;
    //console.log(overallPlayerStats);
    for (let team in overallPlayerStats){
        teamcounter++;
        

        for (let player in overallPlayerStats[team]){
            //console.log(amountofgames);
            if (document.getElementById(player)){

                //document.getElementById(player).remove
                if(document.getElementById(player).querySelector("#INFOLOL")){
                    document.getElementById(player).querySelector("#INFOLOL").remove();
    
                }
                if(document.getElementById(player).querySelector("#fishking")){
                    document.getElementById(player).querySelector("#fishking").remove();
    
                }
            }
            

            if(isOverallLeaderboard){   
                overallPlayerStats[team][player].adr =  Number(overallPlayerStats[team][player].adr)/amountofgames;
                overallPlayerStats[team][player].totDamage =  Number(overallPlayerStats[team][player].totDamage)/amountofgames;
                overallPlayerStats[team][player].headshotpercent =  Number(overallPlayerStats[team][player].headshotpercent)/amountofgames;
            }
            //this specific player's adr is now finished
            //console.log(player);
            //console.log(document.getElementById(player));
            let encompassinginfodivider = document.createElement("div");
            encompassinginfodivider.id = "INFOLOL";
            encompassinginfodivider.style.opacity = (document.getElementById(player).querySelector(".TEAMPFP").classList.contains("LOADING")) ? "0" : "1"; 
            encompassinginfodivider.style.transform = "translateY(-50px)";
            if(isOverallLeaderboard && !goingbacktooriginal){
                encompassinginfodivider.style.transform = "translate(10px,-52px)";
            }
            let kills = document.createElement("div");
            kills.innerHTML = "KILLS : <span class = green2>"+overallPlayerStats[team][player].kills+"</span>";
            kills.classList.add("infothing");

            //document.getElementById(player).insertBefore(kills,document.getElementById(player).firstChild);
            encompassinginfodivider.appendChild(kills);
            //document.getElementById(player).prepend(kills);
            //(isOverallLeaderboard) ? encompassingpicturedivider.appendChild(kills) :document.getElementById(player).appendChild(kills);

            let deaths = document.createElement("div");
            deaths.innerHTML = "DEATHS : <span class = red2>"+overallPlayerStats[team][player].deaths+"</span>";
            deaths.classList.add("infothing");
            //document.getElementById(player).insertBefore(deaths,document.getElementById(player).firstChild);
            //document.getElementById(player).prepend(deaths);
            encompassinginfodivider.appendChild(deaths);
            //(isOverallLeaderboard) ? document.getElementById(player).appendChild(deaths) : encompassingpicturedivider.appendChild(deaths);
            let assists = document.createElement("div");
            assists.innerHTML = "ASSISTS : <span class = yellow2>"+overallPlayerStats[team][player].assists+"</span>";
            assists.classList.add("infothing");
            //document.getElementById(player).insertBefore(assists,document.getElementById(player).firstChild);
            //document.getElementById(player).prepend(assists);
            encompassinginfodivider.appendChild(assists);
           // (isOverallLeaderboard) ? document.getElementById(player).appendChild(assists) : encompassingpicturedivider.appendChild(assists);
            let adr = document.createElement("div");
            adr.innerHTML = "ADR : <span class = blue2>"+parseFloat(overallPlayerStats[team][player].adr.toFixed(2))+"</span>";
            adr.classList.add("infothing");
            //document.getElementById(player).insertBefore(adr,document.getElementById(player).firstChild);
            //document.getElementById(player).prepend(adr);
            encompassinginfodivider.appendChild(adr);
            //(isOverallLeaderboard) ? document.getElementById(player).appendChild(adr) : encompassingpicturedivider.appendChild(adr);
            let totDam = document.createElement("div");
            totDam.innerHTML = "DAMAGE : <span class = orange2>"+overallPlayerStats[team][player].totDamage+"</span>";
            totDam.classList.add("infothing");
            encompassinginfodivider.appendChild(totDam);
            let KD = document.createElement("div");
            KD.innerHTML = "K/D : <span class = orange2>"+overallPlayerStats[team][player].KD.toFixed(2)+"</span>";
            KD.classList.add("infothing");
            encompassinginfodivider.appendChild(KD);
            KD.style.transform = "translate(155px,-55px)";
            let KR = document.createElement("div");
            KR.innerHTML = "K/R : <span class = orange2>"+overallPlayerStats[team][player].KR.toFixed(2)+"</span>";
            KR.classList.add("infothing");
            encompassinginfodivider.appendChild(KR);
            KR.style.transform = "translate(155px,-55px)";
            //(isOverallLeaderboard) ? document.getElementById(player).appendChild(mvps) : encompassingpicturedivider.appendChild(mvps);
            let headshots = document.createElement("div");
            headshots.innerHTML = "HS : <b>"+overallPlayerStats[team][player].headshots+"</b>";
            headshots.classList.add("infothing");
            headshots.style.transform = "translate(155px,-55px)";
            encompassinginfodivider.appendChild(headshots);
            let headshotpercent = document.createElement("div");
            headshotpercent.innerHTML = "HS % : <b>"+overallPlayerStats[team][player].headshotpercent+"</b>";
            headshotpercent.classList.add("infothing");
            headshotpercent.style.transform = "translate(155px,-55px)";
            //document.getElementById(player).insertBefore(headshots,document.getElementById(player).firstChild);
            //document.getElementById(player).prepend(headshots);
            encompassinginfodivider.appendChild(headshotpercent);
            //(isOverallLeaderboard) ? document.getElementById(player).appendChild(headshots) : encompassingpicturedivider.appendChild(headshots);
            let killsdividercounter = 0;
            if(overallPlayerStats[team][player].DoubleK > 0){
                let doul = document.createElement("div");
                doul.innerHTML = "2Ks : <b>"+overallPlayerStats[team][player].DoubleK+"</b>";
                doul.classList.add("infothing");
                doul.style.transform = "translate(210px,-99px)";
                encompassinginfodivider.appendChild(doul);
                killsdividercounter++;
            }
            if(overallPlayerStats[team][player].TripK > 0){
                let trip = document.createElement("div");
                trip.innerHTML = "3Ks : <b>"+overallPlayerStats[team][player].TripK+"</b>";
                trip.classList.add("infothing");
                trip.style.transform = "translate(210px,-99px)";
                encompassinginfodivider.appendChild(trip);
                killsdividercounter++;
            }
            if(overallPlayerStats[team][player].QuadK > 0){
                let quad = document.createElement("div");
                quad.innerHTML = "4Ks : <b>"+overallPlayerStats[team][player].QuadK+"</b>";
                quad.classList.add("infothing");
                quad.style.transform = "translate(210px,-99px)";
                encompassinginfodivider.appendChild(quad);
                killsdividercounter++;
            }
            if(overallPlayerStats[team][player].FivK > 0){
                let fiv = document.createElement("div");
                fiv.innerHTML = "ACEs : <b>"+overallPlayerStats[team][player].FivK+"</b>";
                fiv.classList.add("infothing");
                fiv.style.transform = "translate(210px,-99px)";
                encompassinginfodivider.appendChild(fiv);
                killsdividercounter++;
            }
            // 3 = "-146px"
            // 2 = "-135px"
            // 1 = "-122px"
            let amountofpixels = 150;
            switch(killsdividercounter){
                case 4:
                    amountofpixels = 157;
                    break;
                case 3:
                    amountofpixels = 132;
                    break;
                case 2:
                    amountofpixels = 121;
                    break;
                case 1:
                    amountofpixels = 110;
                    break;
                default:
                    amountofpixels = 99;
            }
            if(overallPlayerStats[team][player].Sniper > 0){
                let awp = document.createElement("div");
                awp.innerHTML = "AWP : <b>"+overallPlayerStats[team][player].Sniper+"</b>";
                awp.classList.add("infothing");
                awp.style.transform = `translate(250px,-${amountofpixels}px)`;
                encompassinginfodivider.appendChild(awp);
            }
            
            if(overallPlayerStats[team][player].Pistol > 0){
                let pis = document.createElement("div");
                pis.innerHTML = "Pistol : <b>"+overallPlayerStats[team][player].Pistol+"</b>";
                pis.classList.add("infothing");
                pis.style.transform = `translate(245px,-${amountofpixels}px)`;
                encompassinginfodivider.appendChild(pis);
            }


            if(overallPlayerStats[team][player].Knife > 0){
                let kneiv = document.createElement("div");
                kneiv.innerHTML = "Knife : <b>"+overallPlayerStats[team][player].Knife+"</b>";
                kneiv.classList.add("infothing");
                kneiv.style.transform = `translate(245px,-${amountofpixels}px)`;
                encompassinginfodivider.appendChild(kneiv);
            }
            if(overallPlayerStats[team][player].Zeus > 0){
                let zus = document.createElement("div");
                zus.innerHTML = "Knife : <b>"+overallPlayerStats[team][player].Zeus+"</b>";
                zus.classList.add("infothing");
                zus.style.transform = `translate(245px,-${amountofpixels}px)`;
                encompassinginfodivider.appendChild(zus);
            }


            //console.log( overallPlayerStats[team][player]);



       // console.log  (encompassinginfodivider);
       if(document.getElementById(player)){
        document.getElementById(player).insertBefore(encompassinginfodivider, document.getElementById(player).querySelector(".TEAMPFPNAME"));
        if (document.getElementById(player).querySelector(".TEAMPFPNAME")){
            document.getElementById(player).querySelector(".TEAMPFPNAME").style.transform = "translate(10px,-71px)";
        }
       }

        }
        
    }


    document.getElementById("damageInfo").onclick = function(){
        document.getElementById("damageInfo").classList.remove("selected");
        if (document.getElementById("quickInfo").querySelectorAll('.scoreinthescore').length === 1){
            overallLeaderboard(matchinfo,true,true,false,true);

        }
        else if(document.getElementById("TeamNameDoc").style.backgroundColor === "white"){
            overallLeaderboard(matchinfo,true,false,true);

        }

        else{
            overallLeaderboard(matchinfo,true,true,false,true);


        }
        
        
        /*
        document.querySelectorAll("#fishking").forEach(el=>{el.style.opacity = "1 "});
        */
    };
    

}
function ClutchInfo(matchinfo, isOverallLeaderboard,goingbacktooriginal){
    var matchobject = matchinfo;
    //console.log("RUNNINGGGGG");
    if (isOverallLeaderboard){
        matchobject = matchinfo.PlayerStats;
        
    }

    //console.log(matchobject);
    var overallPlayerStats = {};
    let teamnum = -1;
    let amountofgames = 0;
    Object.keys(matchobject).forEach(item =>{
                
        //console.log(item);
            amountofgames++;
            
            var item1 = matchobject[item];
           // console.log(matchinfo);
            
            Object.keys(item1).forEach(team =>{
                //console.log("wtafdasdsad");
                //console.log(team);
                //console.log(item1[team]);
                teamnum++;
                if(isOverallLeaderboard){
                    if (!overallPlayerStats[team]){
                        overallPlayerStats[team] = {};
                    }
                }
                else{
                    if (!overallPlayerStats[item]){
                        overallPlayerStats[item] = {};
                    }
                }

                Object.keys(item1[team]).forEach(player=>{
                    
                    var team1 = item1[team];
                    var players = team1[player];
                    //console.log(players);
                    //console.log(team);
                    //console.log(players.nickname);
                    Object.keys(players).forEach(plyr=>{
                        //console.log(plyr);
                        var player = players[plyr];
                        if (typeof player === "string"){
                            return;
                        }
                        else{
                            //this is every single player.
                            //STATS I NEED:   KILLS   DEATHS   ASSISTS   ADR   MVPs   HEADSHOTS
                            
                        // console.log(player.nickname);
                            

                            //console.log(players);
                            if(!isOverallLeaderboard){
                                if (!overallPlayerStats[item][players.nickname]){
                                    overallPlayerStats[item][players.nickname] = {ONEW: 0, ONEC: 0, TWOW: 0, TWOC: 0, ONEWR: 0, TWOWR: 0, CLUTCHK: 0, mvps: 0, id: null};
                                
                                }
                                overallPlayerStats[item][players.nickname].ONEW +=Number(player["1v1Wins"]);
                                overallPlayerStats[item][players.nickname].ONEC+=Number(player["1v1Count"]);
                                overallPlayerStats[item][players.nickname].TWOW+=Number(player["1v2Wins"]);
                                overallPlayerStats[item][players.nickname].TWOC+=Number(player["1v2Count"]);
                                overallPlayerStats[item][players.nickname].ONEWR+=Number(player["Match 1v1 Win Rate"]);
                                overallPlayerStats[item][players.nickname].TWOWR+=Number(player["Match 1v2 Win Rate"]);
                                overallPlayerStats[item][players.nickname].CLUTCHK+=Number(player["Clutch Kills"]);
                                overallPlayerStats[item][players.nickname].mvps+=Number(player["MVPs"]);
                                overallPlayerStats[item][players.nickname].id = player.player_id;
                                
                            }
                            else{
                                if (!overallPlayerStats[team][player.nickname]){
                                    overallPlayerStats[team][player.nickname] = {ONEW: 0, ONEC: 0, TWOW: 0, TWOC: 0, ONEWR: 0, TWOWR: 0, CLUTCHK: 0, mvps: 0, id: null};

                                }
                          
                                overallPlayerStats[team][player.nickname].ONEW +=Number(player.player_stats["1v1Wins"]);
                                overallPlayerStats[team][player.nickname].ONEC+=Number(player.player_stats["1v1Count"]);
                                overallPlayerStats[team][player.nickname].TWOW+=Number(player.player_stats["1v2Wins"]);
                                overallPlayerStats[team][player.nickname].TWOC+=Number(player.player_stats["1v2Count"]);
                                overallPlayerStats[team][player.nickname].ONEWR+=Number(player.player_stats["Match 1v1 Win Rate"]);
                                overallPlayerStats[team][player.nickname].TWOWR+=Number(player.player_stats["Match 1v2 Win Rate"]);
                                overallPlayerStats[team][player.nickname].CLUTCHK+=Number(player.player_stats["Clutch Kills"]);
                                overallPlayerStats[team][player.nickname].mvps+=Number(player.player_stats["MVPs"]);




                                overallPlayerStats[team][player.nickname].id = player.player_id;
                            }
                            
                        
                            
                        }
                    })
                })
            })
            if(teamnum === 1){
                teamnum = -1;
            }
        
        
    })
   
    let teamcounter = 0;
    //console.log(overallPlayerStats);
    for (let team in overallPlayerStats){
        teamcounter++;
        

        for (let player in overallPlayerStats[team]){
            //console.log(amountofgames);
            if (document.getElementById(player)){
                //document.getElementById(player).remove
                if(document.getElementById(player).querySelector("#INFOLOL")){
                    document.getElementById(player).querySelector("#INFOLOL").remove();
    
                }
                if(document.getElementById(player).querySelector("#fishking")){
                    document.getElementById(player).querySelector("#fishking").remove();
    
                }
            }
        
            let encompassinginfodivider = document.createElement("div");
            encompassinginfodivider.id = "INFOLOL";
            encompassinginfodivider.style.opacity =  (document.getElementById(player).querySelector(".TEAMPFP").classList.contains("LOADING")) ? "0" : "1";

            encompassinginfodivider.style.transform = "translateY(-50px)";
            if(isOverallLeaderboard && !goingbacktooriginal){
                encompassinginfodivider.style.transform = "translate(10px,-52px)";
            }

            let ONEW = document.createElement("div");
            ONEW.innerHTML = "1v1 Wins : <span class = green2>"+overallPlayerStats[team][player].ONEW+"</span>";
            ONEW.classList.add("infothing");
            encompassinginfodivider.appendChild(ONEW);
    
            let ONEC = document.createElement("div");
            ONEC.innerHTML = "1v1 Count : <span class = blue2>"+overallPlayerStats[team][player].ONEC+"</span>";
            ONEC.classList.add("infothing");
            encompassinginfodivider.appendChild(ONEC);

            let ONEWR = document.createElement("div");
            ONEWR.innerHTML = "1v1 Win Rate : <span class = yellow2>"+overallPlayerStats[team][player].ONEWR+"</span>";
            ONEWR.classList.add("infothing");
            encompassinginfodivider.appendChild(ONEWR);

            let TWOW = document.createElement("div");
            TWOW.innerHTML = "1v2 Wins : <span class = green2>"+overallPlayerStats[team][player].TWOW+"</span>";
            TWOW.classList.add("infothing");
            encompassinginfodivider.appendChild(TWOW);
            TWOW.style.transform = "translate(230px,-33px)";

            let TWOC = document.createElement("div");
            TWOC.innerHTML = "1v2 Count : <span class = blue22>"+overallPlayerStats[team][player].TWOC+"</span>";
            TWOC.classList.add("infothing");
            encompassinginfodivider.appendChild(TWOC);
            TWOC.style.transform = "translate(226px,-33px)";

            let TWOWR = document.createElement("div");
            TWOWR.innerHTML = "1v2 Win Rate : <span class = yellow2>"+overallPlayerStats[team][player].TWOWR+"</span>";
            TWOWR.classList.add("infothing");
            encompassinginfodivider.appendChild(TWOWR);
            TWOWR.style.transform = "translate(212px,-33px)";

            let CLUTCHK = document.createElement("div");
            CLUTCHK.innerHTML = "Clutch Kills: <span class = orange2>"+overallPlayerStats[team][player].CLUTCHK+"</span>";
            CLUTCHK.classList.add("infothing");
            encompassinginfodivider.appendChild(CLUTCHK);
            CLUTCHK.style.transform = "translate(90px,-20px)";

            let mvps = document.createElement("div");
            mvps.innerHTML = "MVPs : <span class = orange2>"+overallPlayerStats[team][player].mvps+"</span>";
            mvps.classList.add("infothing");
            mvps.style.transform = "translate(246px,-32px)";
            encompassinginfodivider.appendChild(mvps);
            


            //console.log( overallPlayerStats[team][player]);



       // console.log  (encompassinginfodivider);
       if(document.getElementById(player)){
        document.getElementById(player).insertBefore(encompassinginfodivider, document.getElementById(player).querySelector(".TEAMPFPNAME"));
        if (document.getElementById(player).querySelector(".TEAMPFPNAME")){
            document.getElementById(player).querySelector(".TEAMPFPNAME").style.transform = "translate(10px,-71px)";
        }       }

        }
        
    }
    
    document.getElementById("ClutchInfo").onclick = function(){
        document.getElementById("ClutchInfo").classList.remove("selected");
        console.log(document.getElementById("TeamNameDoc").style.backgroundColor);
        if (document.getElementById("quickInfo").querySelectorAll('.scoreinthescore').length === 1){
            overallLeaderboard(matchinfo,true,true,false,true);

        }
        else if(document.getElementById("TeamNameDoc").style.backgroundColor === "white"){
            overallLeaderboard(matchinfo,true,false,true);

        }

        else{
            overallLeaderboard(matchinfo,true,true,false,true);


        }
       /*
        document.querySelectorAll("#fishking").forEach(el=>{el.style.opacity = "1 "});
        */
    };
    

}
function EntryInfo(matchinfo, isOverallLeaderboard,goingbacktooriginal){
    var matchobject = matchinfo;
    //console.log("RUNNINGGGGG");
    if (isOverallLeaderboard){
        matchobject = matchinfo.PlayerStats;
        
    }

    //console.log(matchobject);
    var overallPlayerStats = {};
    let teamnum = -1;
    let amountofgames = 0;
    Object.keys(matchobject).forEach(item =>{
                
        //console.log(item);
            amountofgames++;
            
            var item1 = matchobject[item];
           // console.log(matchinfo);
            
            Object.keys(item1).forEach(team =>{
                //console.log("wtafdasdsad");
                //console.log(team);
                //console.log(item1[team]);
                teamnum++;
                if(isOverallLeaderboard){
                    if (!overallPlayerStats[team]){
                        overallPlayerStats[team] = {};
                    }
                }
                else{
                    if (!overallPlayerStats[item]){
                        overallPlayerStats[item] = {};
                    }
                }

                Object.keys(item1[team]).forEach(player=>{
                    
                    var team1 = item1[team];
                    var players = team1[player];
                    //console.log(players);
                    //console.log(team);
                    //console.log(players.nickname);
                    Object.keys(players).forEach(plyr=>{
                        //console.log(plyr);
                        var player = players[plyr];
                        if (typeof player === "string"){
                            return;
                        }
                        else{
                            //this is every single player.
                            //STATS I NEED:   KILLS   DEATHS   ASSISTS   ADR   MVPs   HEADSHOTS
                            
                        // console.log(player.nickname);
                            

                            //console.log(players);
                            if(!isOverallLeaderboard){
                                if (!overallPlayerStats[item][players.nickname]){
                                    overallPlayerStats[item][players.nickname] = {EntryC: 0, EntryW: 0, FirstK: 0, MatchEntry: 0, MatchEntryS: 0, id: null};
                                
                                }
                                overallPlayerStats[item][players.nickname].EntryC +=Number(player["Entry Count"]);
                                overallPlayerStats[item][players.nickname].EntryW+=Number(player["Entry Wins"]);
                                overallPlayerStats[item][players.nickname].FirstK+=Number(player["First Kills"]);
                                overallPlayerStats[item][players.nickname].MatchEntry+=Number(player["Match Entry Rate"]);
                                overallPlayerStats[item][players.nickname].MatchEntryS+=Number(player["Match Entry Success Rate"]);
                                overallPlayerStats[item][players.nickname].id = player.player_id;
                                
                            }
                            else{
                                if (!overallPlayerStats[team][player.nickname]){
                                    overallPlayerStats[team][player.nickname] = {EntryC: 0, EntryW: 0, FirstK: 0, MatchEntry: 0, MatchEntryS: 0, id: null};

                                }
                          
                                overallPlayerStats[team][player.nickname].EntryC +=Number(player.player_stats["Entry Count"]);
                                overallPlayerStats[team][player.nickname].EntryW+=Number(player.player_stats["Entry Wins"]);
                                overallPlayerStats[team][player.nickname].FirstK+=Number(player.player_stats["First Kills"]);
                                overallPlayerStats[team][player.nickname].MatchEntry+=Number(player.player_stats["Match Entry Rate"]);
                                overallPlayerStats[team][player.nickname].MatchEntryS+=Number(player.player_stats["Match Entry Success Rate"]);




                                overallPlayerStats[team][player.nickname].id = player.player_id;
                            }
                            
                        
                            
                        }
                    })
                })
            })
            if(teamnum === 1){
                teamnum = -1;
            }
        
        
    })
   
    let teamcounter = 0;
    //console.log(overallPlayerStats);
    for (let team in overallPlayerStats){
        teamcounter++;
        

        for (let player in overallPlayerStats[team]){
            //console.log(amountofgames);
            if (document.getElementById(player)){
                //document.getElementById(player).remove
                if(document.getElementById(player).querySelector("#INFOLOL")){
                    document.getElementById(player).querySelector("#INFOLOL").remove();
    
                }
                if(document.getElementById(player).querySelector("#fishking")){
                    document.getElementById(player).querySelector("#fishking").remove();
    
                }
            }
        
            let encompassinginfodivider = document.createElement("div");
            encompassinginfodivider.id = "INFOLOL";
            encompassinginfodivider.style.opacity =  (document.getElementById(player).querySelector(".TEAMPFP").classList.contains("LOADING")) ? "0" : "1"; 

            encompassinginfodivider.style.transform = "translateY(-50px)";
            if(isOverallLeaderboard && !goingbacktooriginal){
                encompassinginfodivider.style.transform = "translate(10px,-52px)";
            }

            let EntryC = document.createElement("div");
            EntryC.innerHTML = "Entry Count : <span class = blue2>"+overallPlayerStats[team][player].EntryC+"</span>";
            EntryC.classList.add("infothing");
            encompassinginfodivider.appendChild(EntryC);
    
            let EntryW = document.createElement("div");
            EntryW.innerHTML = "Entry Wins : <span class = green2>"+overallPlayerStats[team][player].EntryW+"</span>";
            EntryW.classList.add("infothing");
            encompassinginfodivider.appendChild(EntryW);

            let FirstK = document.createElement("div");
            FirstK.innerHTML = "First Kills : <span class = green2>"+overallPlayerStats[team][player].FirstK+"</span>";
            FirstK.classList.add("infothing");
            encompassinginfodivider.appendChild(FirstK);

            let MatchRate = document.createElement("div");
            MatchRate.innerHTML = "Match Entry Rate : <span class = yellow2>"+parseFloat(overallPlayerStats[team][player].MatchEntry.toFixed(2))+"</span>";
            MatchRate.classList.add("infothing");
            encompassinginfodivider.appendChild(MatchRate);
            //MatchRate.style.transform = "translate(190px,-36px)";

            let matchrateS = document.createElement("div");
            matchrateS.innerHTML = "Match Entry Success Rate : <span class = green2>"+parseFloat(overallPlayerStats[team][player].MatchEntryS.toFixed(2))+"</span>";
            matchrateS.classList.add("infothing");
            encompassinginfodivider.appendChild(matchrateS);
           // matchrateS.style.transform = "translate(190px,-36px)";
            


            //console.log( overallPlayerStats[team][player]);



       // console.log  (encompassinginfodivider);
       if(document.getElementById(player)){
        document.getElementById(player).insertBefore(encompassinginfodivider, document.getElementById(player).querySelector(".TEAMPFPNAME"));
        if (document.getElementById(player).querySelector(".TEAMPFPNAME")){
            document.getElementById(player).querySelector(".TEAMPFPNAME").style.transform = "translate(10px,-71px)";
        }       }

        }
        
    }
  
    document.getElementById("EntryInfo").onclick = function(){
        document.getElementById("EntryInfo").classList.remove("selected")
       // console.log(document.getElementById("TeamNameDoc").style.backgroundColor);
        if (document.getElementById("quickInfo").querySelectorAll('.scoreinthescore').length === 1){
            overallLeaderboard(matchinfo,true,true,false,true);

        }
        else if(document.getElementById("TeamNameDoc").style.backgroundColor === "white"){
            overallLeaderboard(matchinfo,true,false,true);

        }

        else{
            overallLeaderboard(matchinfo,true,true,false,true);


        }
        
        /*
        document.querySelectorAll("#fishking").forEach(el=>{el.style.opacity = "1 "});
        */
    };
    

}
function UtilityInfo(matchinfo, isOverallLeaderboard,goingbacktooriginal){
    var matchobject = matchinfo;
   // console.log("RUNNINGGGGG");
    if (isOverallLeaderboard){
        matchobject = matchinfo.PlayerStats;
        
    }

   // console.log(matchobject);
    var overallPlayerStats = {};
    let teamnum = -1;
    let amountofgames = 0;
    Object.keys(matchobject).forEach(item =>{
                
        //console.log(item);
            amountofgames++;
            
            var item1 = matchobject[item];
           // console.log(matchinfo);
            
            Object.keys(item1).forEach(team =>{
                //console.log("wtafdasdsad");
                //console.log(team);
                //console.log(item1[team]);
                teamnum++;
                if(isOverallLeaderboard){
                    if (!overallPlayerStats[team]){
                        overallPlayerStats[team] = {};
                    }
                }
                else{
                    if (!overallPlayerStats[item]){
                        overallPlayerStats[item] = {};
                    }
                }

                Object.keys(item1[team]).forEach(player=>{
                    
                    var team1 = item1[team];
                    var players = team1[player];
                    //console.log(players);
                    //console.log(team);
                    //console.log(players.nickname);
                    Object.keys(players).forEach(plyr=>{
                        //console.log(plyr);
                        var player = players[plyr];
                        if (typeof player === "string"){
                            return;
                        }
                        else{
                            //this is every single player.
                            //STATS I NEED:   KILLS   DEATHS   ASSISTS   ADR   MVPs   HEADSHOTS
                            
                        // console.log(player.nickname);
                            

                            //console.log(players);
                            if(!isOverallLeaderboard){
                                if (!overallPlayerStats[item][players.nickname]){
                                    overallPlayerStats[item][players.nickname] = {FlashC: 0, FlashS: 0, EnemyFlash: 0, EnemyFlashMatch: 0, UtilC: 0, UtilityUse:0, UtilDam:0, UtilS: 0, UtilDamPerRoundMatch: 0, UtilDamSPerMatch: 0, id: null};
                                
                                }
                                overallPlayerStats[item][players.nickname].FlashC +=Number(player["Flash Count"]);
                                overallPlayerStats[item][players.nickname].FlashS+=Number(player["Entry Wins"]);
                                overallPlayerStats[item][players.nickname].EnemyFlash+=Number(player["First Kills"]);
                                overallPlayerStats[item][players.nickname].EnemyFlashMatch+=Number(player["Enemies Flashed per Round in a Match"]);
                                overallPlayerStats[item][players.nickname].UtilC+=Number(player["Utility Count"]);
                                overallPlayerStats[item][players.nickname].UtilityUse+=Number(player["Utility Usage per Round"]);
                                overallPlayerStats[item][players.nickname].UtilDam+=Number(player["Utility Damage"]);
                                overallPlayerStats[item][players.nickname].UtilDamPerRoundMatch+=Number(player["Utility Damage per Round in a Match"]);
                                overallPlayerStats[item][players.nickname].UtilS+=Number(player["Utility Success Rate per Match"]);
                                overallPlayerStats[item][players.nickname].id = player.player_id;
                                
                            }
                            else{
                                if (!overallPlayerStats[team][player.nickname]){
                                    overallPlayerStats[team][player.nickname] = {FlashC: 0, FlashS: 0, EnemyFlash: 0, EnemyFlashMatch: 0, UtilC: 0, UtilityUse:0, UtilDam:0, UtilS: 0, UtilDamPerRoundMatch: 0, UtilDamSPerMatch: 0, id: null};

                                }
                          
                                overallPlayerStats[team][player.nickname].FlashC +=Number(player.player_stats["Flash Count"]);
                                overallPlayerStats[team][player.nickname].FlashS+=Number(player.player_stats["Flash Successes"]);
                                overallPlayerStats[team][player.nickname].EnemyFlash+=Number(player.player_stats["Enemies Flashed"]);
                                overallPlayerStats[team][player.nickname].EnemyFlashMatch+=Number(player.player_stats["Enemies Flashed per Round in a Match"]);
                                overallPlayerStats[team][player.nickname].UtilC+=Number(player.player_stats["Utility Count"]);
                                overallPlayerStats[team][player.nickname].UtilityUse+=Number(player.player_stats["Utility Usage per Round"]);
                                overallPlayerStats[team][player.nickname].UtilDam+=Number(player.player_stats["Utility Damage"]);
                                overallPlayerStats[team][player.nickname].UtilDamPerRoundMatch+=Number(player.player_stats["Utility Damage per Round in a Match"]);
                                overallPlayerStats[team][player.nickname].UtilS+=Number(player.player_stats["Utility Success Rate per Match"]);





                                overallPlayerStats[team][player.nickname].id = player.player_id;
                            }
                            
                        
                            
                        }
                    })
                })
            })
            if(teamnum === 1){
                teamnum = -1;
            }
        
        
    })
   
    let teamcounter = 0;
    //console.log(overallPlayerStats);
    for (let team in overallPlayerStats){
        teamcounter++;
        

        for (let player in overallPlayerStats[team]){
            //console.log(amountofgames);
            if (document.getElementById(player)){
                //document.getElementById(player).remove
                if(document.getElementById(player).querySelector("#INFOLOL")){
                    document.getElementById(player).querySelector("#INFOLOL").remove();
    
                }
                if(document.getElementById(player).querySelector("#fishking")){
                    document.getElementById(player).querySelector("#fishking").remove();
    
                }
            }
        
            let encompassinginfodivider = document.createElement("div");
            encompassinginfodivider.id = "INFOLOL";
            encompassinginfodivider.style.opacity =  (document.getElementById(player).querySelector(".TEAMPFP").classList.contains("LOADING")) ? "0" : "1"; 

            encompassinginfodivider.style.transform = "translateY(-50px)";
            if(isOverallLeaderboard && !goingbacktooriginal){
                encompassinginfodivider.style.transform = "translate(10px,-52px)";
            }
            let UtilC = document.createElement("div");
            UtilC.innerHTML = "Utility Count : <span class = blue2>"+overallPlayerStats[team][player].UtilC+"</span>";
            UtilC.classList.add("infothing");
            encompassinginfodivider.appendChild(UtilC);
            //UtilC.style.transform = "translate(235px,-36px)";

            let UtilS = document.createElement("div");
            UtilS.innerHTML = "Utility Success : <span class = green2>"+parseFloat(overallPlayerStats[team][player].UtilS.toFixed(2))+"</span>";
            UtilS.classList.add("infothing");
            encompassinginfodivider.appendChild(UtilS);
            //UtilS.style.transform = "translate(235px,-36px)";

            let UtilUse = document.createElement("div");
            UtilUse.innerHTML = "Utility Usage : <span class = blue2>"+overallPlayerStats[team][player].UtilityUse+"</span>";
            UtilUse.classList.add("infothing");
            encompassinginfodivider.appendChild(UtilUse);
           // UtilUse.style.transform = "translate(235px,-36px)";

            let UtilDam = document.createElement("div");
            UtilDam.innerHTML = "Utility Damage : <span class = orange2>"+overallPlayerStats[team][player].UtilDam+"</span>";
            UtilDam.classList.add("infothing");
            encompassinginfodivider.appendChild(UtilDam);
           // UtilDam.style.transform = "translate(235px,-36px)";

            let Utildammatch = document.createElement("div");
            Utildammatch.innerHTML = "Utility Damage per Round : <span class = green2>"+parseFloat(overallPlayerStats[team][player].UtilDamPerRoundMatch.toFixed(2))+"</span>";
            Utildammatch.classList.add("infothing");
            encompassinginfodivider.appendChild(Utildammatch);
            //Utildammatch.style.transform = "translate(235px,-36px)";

            let FlashC = document.createElement("div");
            FlashC.innerHTML = "Flash Count : <span class = blue2>"+overallPlayerStats[team][player].FlashC+"</span>";
            FlashC.classList.add("infothing");
            encompassinginfodivider.appendChild(FlashC);
            FlashC.style.transform = "translate(213px,-55px)";

            let FlashS = document.createElement("div");
            FlashS.innerHTML = "Flash Successes : <span class = green2>"+overallPlayerStats[team][player].FlashS+"</span>";
            FlashS.classList.add("infothing");
            encompassinginfodivider.appendChild(FlashS);
            FlashS.style.transform = "translate(194px,-55px)";

            let EnemyFlash = document.createElement("div");
            EnemyFlash.innerHTML = "Enemies Flashed : <span class = green2>"+overallPlayerStats[team][player].EnemyFlash+"</span>";
            EnemyFlash.classList.add("infothing");
            encompassinginfodivider.appendChild(EnemyFlash);
            EnemyFlash.style.transform = "translate(191px,-55px)";

            let EnemyFlashMatch = document.createElement("div");
            EnemyFlashMatch.innerHTML = "Enemies Flashed per Round : <span class = yellow2>"+parseFloat(overallPlayerStats[team][player].EnemyFlashMatch.toFixed(2))+"</span>";
            EnemyFlashMatch.classList.add("infothing");
            encompassinginfodivider.appendChild(EnemyFlashMatch);
            EnemyFlashMatch.style.transform = "translate(90px,-33px)";
            //MatchRate.style.transform = "translate(190px,-36px)";

            


            //console.log( overallPlayerStats[team][player]);



       // console.log  (encompassinginfodivider);
       if(document.getElementById(player)){
        document.getElementById(player).insertBefore(encompassinginfodivider, document.getElementById(player).querySelector(".TEAMPFPNAME"));
        if (document.getElementById(player).querySelector(".TEAMPFPNAME")){
            document.getElementById(player).querySelector(".TEAMPFPNAME").style.transform = "translate(10px,-71px)";
        }       }

        }
        
    }
   
    document.getElementById("UtilityInfo").onclick = function(){
        document.getElementById("UtilityInfo").classList.remove("selected")
        console.log(document.getElementById("TeamNameDoc").style.backgroundColor);
        if (document.getElementById("quickInfo").querySelectorAll('.scoreinthescore').length === 1){
            overallLeaderboard(matchinfo,true,true,false,true);

        }
        else if(document.getElementById("TeamNameDoc").style.backgroundColor === "white"){
            overallLeaderboard(matchinfo,true,false,true);

        }
        else{
            overallLeaderboard(matchinfo,true,true,false,true);


        }
       
        /*
        document.querySelectorAll("#fishking").forEach(el=>{el.style.opacity = "1 "});
        */
    };
    

}
function overallLeaderboard(matchinfo, isOverallLeaderboard,goingbacktooriginal, ummm, DONTASKOKAY){
    //console.log(isOverallLeaderboard+" , "+goingbacktooriginal+" , "+ummm+" , "+DONTASKOKAY);
    document.querySelectorAll(".buttonz").forEach(el=>{el.classList.remove("selected")});

   // console.log("isOverallLeaderboard = "+isOverallLeaderboard);
   // console.log("goingbacktooriginal = "+goingbacktooriginal);
   // console.log("ummm = "+ummm);
   // console.log("DONTASKOKAY = "+DONTASKOKAY);
    var matchobject = matchinfo;
    if (isOverallLeaderboard){
        matchobject = matchinfo.PlayerStats;
        
    }
    if(ummm){
        matchobject = matchinfo;
    }



    //console.log(matchobject);
    let overallPlayerStats = {};
    let teamnum = -1;
    let amountofgames = 0;
   // console.log(matchinfo);
  //  console.log(matchobject);
    
    Object.keys(matchobject).forEach(item =>{
                
       // console.log(item);
            amountofgames++;
            
            var item1 = matchobject[item];
            var team
           // console.log(matchinfo);
            if (ummm){
               // console.log(item1);
                if(ummm){
                    if (!overallPlayerStats[item]){
                        overallPlayerStats[item] = {};
                    }
                }
                else if(isOverallLeaderboard){
                    if (!overallPlayerStats[team]){
                        overallPlayerStats[team] = {};
                    }
                }
                else{
                    if (!overallPlayerStats[item]){
                        overallPlayerStats[item] = {};
                    }
                }
                    item1[0].forEach(plyr=>{
                        
                       // console.log(plyr);
                        var player = plyr
                        

                            //this is every single player.
                            //STATS I NEED:   KILLS   DEATHS   ASSISTS   ADR   MVPs   HEADSHOTS
                            
                        // console.log(player.nickname);
                            


                            if(!isOverallLeaderboard){
                                if (!overallPlayerStats[item][players.nickname]){
                                    overallPlayerStats[item][players.nickname] = {kills: 0, deaths: 0, assists: 0, adr: 0, mvps: 0, headshots: 0, id: null};
                                
                                }
                                overallPlayerStats[item][players.nickname].kills +=Number(player.Kills);
                                overallPlayerStats[item][players.nickname].deaths+=Number(player.Deaths);
                                overallPlayerStats[item][players.nickname].assists+=Number(player.Assists);
                                overallPlayerStats[item][players.nickname].adr+=Number(player.ADR);
                                overallPlayerStats[item][players.nickname].mvps+=Number(player.MVPs);
                                overallPlayerStats[item][players.nickname].headshots+=Number(player.Headshots);
                                overallPlayerStats[item][players.nickname].id = player.player_id;
                                
                            }
                            else if (ummm){
                                if (!overallPlayerStats[item][player.nickname]){
                                    overallPlayerStats[item][player.nickname] = {kills: 0, deaths: 0, assists: 0, adr: 0, mvps: 0, headshots: 0, id: null};
                                
                                }
                                overallPlayerStats[item][player.nickname].kills +=Number(player.player_stats.Kills);
                                overallPlayerStats[item][player.nickname].deaths+=Number(player.player_stats.Deaths);
                                overallPlayerStats[item][player.nickname].assists+=Number(player.player_stats.Assists);
                                overallPlayerStats[item][player.nickname].adr+=Number(player.player_stats.ADR);
                                overallPlayerStats[item][player.nickname].mvps+=Number(player.player_stats.MVPs);
                                overallPlayerStats[item][player.nickname].headshots+=Number(player.player_stats.Headshots);
                                overallPlayerStats[item][player.nickname].id = player.player_id;
                            }
                            else{
                                if (!overallPlayerStats[team][player.nickname]){
                                    overallPlayerStats[team][player.nickname] = {kills: 0, deaths: 0, assists: 0, adr: 0, mvps: 0, headshots: 0, id: null};
                                
                                }
                                overallPlayerStats[team][player.nickname].kills +=Number(player.player_stats.Kills);
                                overallPlayerStats[team][player.nickname].deaths+=Number(player.player_stats.Deaths);
                                overallPlayerStats[team][player.nickname].assists+=Number(player.player_stats.Assists);
                                overallPlayerStats[team][player.nickname].adr+=Number(player.player_stats.ADR);
                                overallPlayerStats[team][player.nickname].mvps+=Number(player.player_stats.MVPs);
                                overallPlayerStats[team][player.nickname].headshots+=Number(player.player_stats.Headshots);
                                overallPlayerStats[team][player.nickname].id = player.player_id;
                            }
                            
                        
                            
                        
                    })
                
            }
            else{
            Object.keys(item1).forEach(team =>{
                //console.log("wtafdasdsad");
                //console.log(team);
                //console.log(item1[team]);
                teamnum++;
                if(isOverallLeaderboard){
                    if (!overallPlayerStats[team]){
                        overallPlayerStats[team] = {};
                    }
                }
                else{
                    if (!overallPlayerStats[item]){
                        overallPlayerStats[item] = {};
                    }
                }

                Object.keys(item1[team]).forEach(player=>{
                    
                    var team1 = item1[team];
                    var players = team1[player];
                    //console.log(team);
                    //console.log(players.nickname);
                    Object.keys(players).forEach(plyr=>{
                        //console.log(plyr);
                        var player = players[plyr];
                        if (typeof player === "string"){
                            return;
                        }
                        else{
                            //this is every single player.
                            //STATS I NEED:   KILLS   DEATHS   ASSISTS   ADR   MVPs   HEADSHOTS
                            
                        // console.log(player.nickname);
                            

                            
                            if(!isOverallLeaderboard){
                                if (!overallPlayerStats[item][players.nickname]){
                                    overallPlayerStats[item][players.nickname] = {kills: 0, deaths: 0, assists: 0, adr: 0, mvps: 0, headshots: 0, id: null};
                                
                                }
                                overallPlayerStats[item][players.nickname].kills +=Number(player.Kills);
                                overallPlayerStats[item][players.nickname].deaths+=Number(player.Deaths);
                                overallPlayerStats[item][players.nickname].assists+=Number(player.Assists);
                                overallPlayerStats[item][players.nickname].adr+=Number(player.ADR);
                                overallPlayerStats[item][players.nickname].mvps+=Number(player.MVPs);
                                overallPlayerStats[item][players.nickname].headshots+=Number(player.Headshots);
                                overallPlayerStats[item][players.nickname].id = player.player_id;
                                
                            }
                            else{
                                if (!overallPlayerStats[team][player.nickname]){
                                    overallPlayerStats[team][player.nickname] = {kills: 0, deaths: 0, assists: 0, adr: 0, mvps: 0, headshots: 0, id: null};
                                
                                }
                                overallPlayerStats[team][player.nickname].kills +=Number(player.player_stats.Kills);
                                overallPlayerStats[team][player.nickname].deaths+=Number(player.player_stats.Deaths);
                                overallPlayerStats[team][player.nickname].assists+=Number(player.player_stats.Assists);
                                overallPlayerStats[team][player.nickname].adr+=Number(player.player_stats.ADR);
                                overallPlayerStats[team][player.nickname].mvps+=Number(player.player_stats.MVPs);
                                overallPlayerStats[team][player.nickname].headshots+=Number(player.player_stats.Headshots);
                                overallPlayerStats[team][player.nickname].id = player.player_id;
                            }
                            
                        
                            
                        }
                    })
                })
            })
            }   
            if(teamnum === 1){
                teamnum = -1;
            }
        
        
    })
   // console.log(overallPlayerStats);
    let teamcounter = 0;
    for (let team in overallPlayerStats){
        teamcounter++;
        //console.log(matchinfo);


        if (isOverallLeaderboard && !goingbacktooriginal && !ummm){
            let teamnamedoc = document.createElement("div");
            teamnamedoc.id = "TeamNameDoc";
            teamnamedoc.style.color = (matchinfo.winner === team ? "green" : "red");
            let actualname = document.createElement("div");
            actualname.id = "actualname";

            actualname.innerHTML =  team+   `<span class = "${teamnamedoc.style.color}2">`+" "+(teamcounter === 1 ? matchinfo.score.substring(0,2) : matchinfo.score.substring(4));
            teamnamedoc.appendChild(actualname);
            if(document.getElementById("quickInfo").querySelectorAll('.scoreinthescore').length === 1){     
                var imgag = document.getElementById("quickInfo").querySelector(".scoreinthescore").querySelector("#imgg").src;
                teamnamedoc.style.backgroundImage  = `url(${imgag})`;
                teamnamedoc.style.backgroundColor = "white";
            }
            document.getElementById("BoardTeam"+teamcounter).appendChild(teamnamedoc);
            

        }
       
        
        var bestplayer;
        let mostkils = 0;
        var amountofcreated = 0;
       // console.log(overallPlayerStats);
       
        for (let player in overallPlayerStats[team]){
            //console.log(amountofgames);
            if (document.getElementById(player)){
                if(document.getElementById(player).querySelector("#INFOLOL")){
                    document.getElementById(player).querySelector("#INFOLOL").remove();
    
                }
                if(document.getElementById(player).querySelector("#fishking")){
                    document.getElementById(player).querySelector("#fishking").remove();
    
                }
            }
            
            if(isOverallLeaderboard){   
                overallPlayerStats[team][player].adr =  Number(overallPlayerStats[team][player].adr)/amountofgames;
            }

            //console.log(overallPlayerStats[team][player].kills+" VS "+mostkils);
            if (overallPlayerStats[team][player].kills >= mostkils){
                if(overallPlayerStats[team][player].kills === mostkils){
                    //console.log(overallPlayerStats[team][bestplayer].adr+" VS "+overallPlayerStats[team][player].adr);
                    if(overallPlayerStats[team][bestplayer].adr < overallPlayerStats[team][player].adr){
                        bestplayer = player;
                    }
                }
                else{
                    mostkils = overallPlayerStats[team][player].kills;
                    bestplayer = player;
                }
               // console.log("lOL");

            }
            //this specific player's adr is now finished
            //console.log(player);
            //console.log(document.getElementById(player));
            let encompassingpicturedivider = document.createElement("div");
            let encompassinginfodivider = document.createElement("div");
            encompassinginfodivider.id = "INFOLOL";
            encompassinginfodivider.style.opacity = 0;

            if(isOverallLeaderboard && !goingbacktooriginal && !ummm){
                encompassinginfodivider.style.transform = "translate(10px,-52px)";
                encompassingpicturedivider.classList.add("PLAYERDIVIDERR");
                encompassingpicturedivider.id = player;
                document.getElementById("BoardTeam"+teamcounter).appendChild(encompassingpicturedivider);

                if (createpicturesonce){
                    
                    GetPlayerInfo(player, overallPlayerStats[team][player].id,encompassingpicturedivider, () => {

                        
                    });
                    
                }

                
            }
            else{
                encompassinginfodivider.style.transform = "translate(10px,-52px)";
                if(document.getElementById(player) && document.getElementById(player).querySelector(".TEAMPFPNAME")){
                   
                        document.getElementById(player).querySelector(".TEAMPFPNAME").style.transform = "translate(10px,-71px)";
                    
                }

            }

            let kills = document.createElement("div");
            kills.innerHTML = "KILLS : <span class = green2>"+overallPlayerStats[team][player].kills+"</span>";
            kills.classList.add("infothing");

            //document.getElementById(player).insertBefore(kills,document.getElementById(player).firstChild);
            encompassinginfodivider.appendChild(kills);
            //document.getElementById(player).prepend(kills);
            //(isOverallLeaderboard) ? encompassingpicturedivider.appendChild(kills) :document.getElementById(player).appendChild(kills);

            let deaths = document.createElement("div");
            deaths.innerHTML = "DEATHS : <span class = red2>"+overallPlayerStats[team][player].deaths+"</span>";
            deaths.classList.add("infothing");
            //document.getElementById(player).insertBefore(deaths,document.getElementById(player).firstChild);
            //document.getElementById(player).prepend(deaths);
            encompassinginfodivider.appendChild(deaths);
            //(isOverallLeaderboard) ? document.getElementById(player).appendChild(deaths) : encompassingpicturedivider.appendChild(deaths);
            let assists = document.createElement("div");
            assists.innerHTML = "ASSISTS : <span class = yellow2>"+overallPlayerStats[team][player].assists+"</span>";
            assists.classList.add("infothing");
            //document.getElementById(player).insertBefore(assists,document.getElementById(player).firstChild);
            //document.getElementById(player).prepend(assists);
            encompassinginfodivider.appendChild(assists);
           // (isOverallLeaderboard) ? document.getElementById(player).appendChild(assists) : encompassingpicturedivider.appendChild(assists);
            let adr = document.createElement("div");
            adr.innerHTML = "ADR : <span class = blue2>"+parseFloat(overallPlayerStats[team][player].adr.toFixed(2))+"</span>";
            adr.classList.add("infothing");
            //document.getElementById(player).insertBefore(adr,document.getElementById(player).firstChild);
            //document.getElementById(player).prepend(adr);
            encompassinginfodivider.appendChild(adr);
            //(isOverallLeaderboard) ? document.getElementById(player).appendChild(adr) : encompassingpicturedivider.appendChild(adr);
            let mvps = document.createElement("div");
            mvps.innerHTML = "MVPs : <span class = orange2>"+overallPlayerStats[team][player].mvps+"</span>";
            mvps.classList.add("infothing");
            //document.getElementById(player).insertBefore(mvps,document.getElementById(player).firstChild);
           // document.getElementById(player).prepend(mvps);
            encompassinginfodivider.appendChild(mvps);
            //(isOverallLeaderboard) ? document.getElementById(player).appendChild(mvps) : encompassingpicturedivider.appendChild(mvps);
            let headshots = document.createElement("div");
            headshots.innerHTML = "HEADSHOTS : <b>"+overallPlayerStats[team][player].headshots+"</b>";
            headshots.classList.add("infothing");
            //document.getElementById(player).insertBefore(headshots,document.getElementById(player).firstChild);
            //document.getElementById(player).prepend(headshots);
            encompassinginfodivider.appendChild(headshots);
            //(isOverallLeaderboard) ? document.getElementById(player).appendChild(headshots) : encompassingpicturedivider.appendChild(headshots);




            


       // console.log  (encompassinginfodivider);
        if (ummm || DONTASKOKAY){
            if (document.getElementById(player).querySelector(".TEAMPFPNAME")){
                document.getElementById(player).insertBefore(encompassinginfodivider, document.getElementById(player).querySelector(".TEAMPFPNAME"));
               }
               
        }
       else{
        document.getElementById(player).appendChild(encompassinginfodivider);

       }


        }

        let fishking = document.createElement("img");
        fishking.id = "fishking";
        fishking.src = "https://atomicrecall.github.io/Cipher/images/fishking.png";
        fishking.style.height = "70px";
        fishking.style.width = "50px";
        fishking.style.position = "absolute";
        fishking.style.opacity = (createpicturesonce) ? "0" : "1" ;

        document.getElementById(bestplayer).appendChild(fishking);
        if(DONTASKOKAY){
            fishking.style.transform = "translate(180px,-141px)";
            document.getElementById("damageInfo").onclick = function(){
                document.querySelectorAll(".buttonz").forEach(el=>{el.classList.remove("selected")});
                document.getElementById("damageInfo").classList.add("selected");
                damageInfo(matchinfo,true,true);
            };
            document.getElementById("ClutchInfo").onclick = function(){
                document.querySelectorAll(".buttonz").forEach(el=>{el.classList.remove("selected")});
                document.getElementById("ClutchInfo").classList.add("selected");
                ClutchInfo(matchinfo,true,true);
            };
            document.getElementById("EntryInfo").onclick = function(){
                document.querySelectorAll(".buttonz").forEach(el=>{el.classList.remove("selected")});
                document.getElementById("EntryInfo").classList.add("selected");
                EntryInfo(matchinfo,true,true);
            };
            document.getElementById("UtilityInfo").onclick = function(){
                document.querySelectorAll(".buttonz").forEach(el=>{el.classList.remove("selected")});
                document.getElementById("UtilityInfo").classList.add("selected");
                UtilityInfo(matchinfo,true,true);
            };



        }
        else{
            fishking.style.transform = "translate(180px,-127px)";
            if(ummm){    
                fishking.style.transform = "translate(180px,-141px)";

            }
            document.getElementById("damageInfo").onclick = function(){
                document.querySelectorAll(".buttonz").forEach(el=>{el.classList.remove("selected")});
                document.getElementById("damageInfo").classList.add("selected");
                damageInfo(matchinfo,false,true);
            };
            document.getElementById("ClutchInfo").onclick = function(){
                document.querySelectorAll(".buttonz").forEach(el=>{el.classList.remove("selected")});
                document.getElementById("ClutchInfo").classList.add("selected");
                ClutchInfo(matchinfo,false,true);
            };
            document.getElementById("EntryInfo").onclick = function(){
                document.querySelectorAll(".buttonz").forEach(el=>{el.classList.remove("selected")});
                document.getElementById("EntryInfo").classList.add("selected");
                EntryInfo(matchinfo,false,true);
            };
            document.getElementById("UtilityInfo").onclick = function(){
                document.querySelectorAll(".buttonz").forEach(el=>{el.classList.remove("selected")});
                document.getElementById("UtilityInfo").classList.add("selected");
                UtilityInfo(matchinfo,false,true);
            };

        }

        //console.log(bestplayer);
        //console.log(overallPlayerStats);

    }

    if ((isOverallLeaderboard && goingbacktooriginal && !ummm) || (isOverallLeaderboard && !goingbacktooriginal && ummm && !DONTASKOKAY ) || (!isOverallLeaderboard && !goingbacktooriginal && !ummm && DONTASKOKAY)){
        document.querySelectorAll("#INFOLOL").forEach(el =>{el.style.opacity = "1"});
    }
    createpicturesonce = false;

    //everything should be properly sorted now
    //console.log(matchinfo);

}
var THEFINALCOUNTERISWEAR = 0;
var ILIEDLOLL = 3;
    function createToggle(allinfodiv){
        THEFINALCOUNTERISWEAR++;
        // Create a container span element
    const span = document.createElement("div");
    span.id = "buttonspan";
    span.classList.add("divvv");
    // Create a checkbox input element
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "c"+THEFINALCOUNTERISWEAR;
    checkbox.style.display = "none";
    const imag = document.createElement("img");
    imag.id = "spanimg";
    imag.src = "https://atomicrecall.github.io/Cipher/images/button.png"
    imag.style.height = "30px";
    imag.style.width = "30px";
    imag.htmlFor =" c"+THEFINALCOUNTERISWEAR;
    // Create a label element
    const label = document.createElement("label");
    label.id = "label";
    label.style.cursor = "pointer";
    label.style.filter = "drop-shadow(1px 0px 1px #000000)";
    //label.htmlFor = "c"+THEFINALCOUNTERISWEAR; // Associate the label with the checkbox
    label.textContent = "S"+(52-(THEFINALCOUNTERISWEAR-2)); // Set the label text
   // label.fontSize = "10px";

    // Append the checkbox and label to the span
    span.appendChild(checkbox);
    span.appendChild(label);
    //span.style.backgroundImage(`url(${imag.src})`);

    span.addEventListener("click", function () {
        checkbox.checked = !checkbox.checked; // toggle checkbox state
        checkbox.dispatchEvent(new Event("click")); // trigger checkbox click event
    });
    
    checkbox.addEventListener("click", () => {

        if (checkbox.checked) {
            ILIEDLOLL-=1;
            if (Number(label.textContent.substring(1)) >= 52 || THEFINALCOUNTERISWEAR == 1){
                //console.log(THEFINALCOUNTERISWEAR +"= WHAT THE BALLS")
                if (document.getElementById("vertigoo") && document.getElementById("verimage")) { // Ensure they exist
                    setTimeout(() => {
                        document.getElementById("vertigoo").style.opacity = "0";
                        document.getElementById("verimage").style.opacity = "0";
                        document.getElementById("trainn").style.transform = "translate(470px,20px)";
                        document.getElementById("trainimage").style.transform = "translate(470px,20px)";
                    }, 10);
                    //console.log("Elements hidden");
                } else {
                   // console.log("vertigoo or verimage not found!");
                }
    
            }
            else{
                setTimeout(() => {
                    if(document.getElementById("trainn") && document.getElementById("trainimage")){
                        document.getElementById("trainn").style.display = "none";
                        document.getElementById("trainimage").style.display = "none";
                    }
                }, 10);
            }
            
          label.style.color = "#0FFF50"; // Change text color
          label.style.fontSize = "30px"; // Change font size
          span.style.height = "45px";
          span.style.width = "45px";
          var newarray = getArrayFromSeason(label.textContent.substring(1), picksnbans);
          DotheThing(newarray,true);
          //span.style.transform = "translate(730px,160px)";
          //document.getElementById("allInfo").style.width = "480px";
          lastbooleaniswear = true;
         // console.log("WTF1 "+ILIEDLOLL);
         //console.log(THEFINALCOUNTERISWEAR +"= OMGOMGOMOMGOMG");
         
            

        } else {
            var bool = true;
            document.querySelectorAll("#label").forEach(el=>{if(Number(el.innerHTML.substring(1)) < 52)bool=false;});
            if (bool){
                //console.log(THEFINALCOUNTERISWEAR +"= WHAT THE BALLS")
                if (document.getElementById("vertigoo") && document.getElementById("verimage")) { // Ensure they exist
                    setTimeout(() => {
                        document.getElementById("vertigoo").style.opacity = "0";
                        document.getElementById("verimage").style.opacity = "0";
                        document.getElementById("trainn").style.transform = "translate(470px,20px)";
                        document.getElementById("trainimage").style.transform = "translate(470px,20px)";
                    }, 10);
                    //console.log("Elements hidden");
                } else {
                   // console.log("vertigoo or verimage not found!");
                }
    
            }
            else{

            }

          ILIEDLOLL+=1;
          label.style.color = ""; // Reset text color
          label.style.fontSize = ""; // Reset font size
          span.style.height = "30px";
          span.style.width = "30px";

         // console.log("WTFFF "+ILIEDLOLL);
            //make the finalarrayiswear be removed of the season that is clicked
            //find the season by doing picksnbans[d].season
            var newarray = getArrayFromSeason(label.textContent.substring(1), picksnbans);
            //console.log("but first");
           // console.log(THEFINALARRAYISWEAR);

            if (ILIEDLOLL%3 == 0){
                THEFINALARRAYISWEAR = THEFINALARRAYISWEAR.filter(item => item.season !== label.textContent.substring(1));
                DotheThing(picksnbans,true);
                ccccc++;
            }
            else{
                DotheThing(newarray,false);

            }
            
          //document.getElementById("mtches").style.transform = "translate(-20px, -155px)";
          //document.getElementById("allInfo").style.width = "480px";
        }
      });
      
    allinfodiv.appendChild(span);
}
function checkImageExists(url, callback) {
    const img = new Image();
    img.onload = function() {
        callback(true); // Image exists
    };
    img.onerror = function() {
        callback(false); // Image does not exist
    };
    img.src = url;
}
function checktheimagexists(url){
   
        const img = new Image();
        img.src = url;
        if (img.complete && img.naturalHeight !== 0) {
            return true;
        }
        img.onerror = () => false;
        return false;

}

function getArrayFromSeason(ssn, arrayofallmatchess){
  //  console.log("finding "+ssn);

    let finalArray = new Array();
    let storethesearrays = false;
    for (const match of arrayofallmatchess){
        if(match.season === ssn.toString()){
            finalArray.push(match);
        }
    }
return (finalArray);
}
var THEFINALARRAYISWEAR = new Array();
var ccccc = 0;
function DotheThing (arrayofallmatches2, removeoradd){
    bans = new Array(8).fill(0);
    picks = new Array(8).fill(0);
    played = new Array(8).fill(0);
    L = new Array(8).fill(0);
    W = new Array(8).fill(0);
    if(ccccc >= 1){
        THEFINALARRAYISWEAR.length = 0;
        ccccc = 0;
    }
   // console.log("???? "+removeoradd);
    if(removeoradd){
        THEFINALARRAYISWEAR = THEFINALARRAYISWEAR.concat(arrayofallmatches2);
    }
    else{
        THEFINALARRAYISWEAR = THEFINALARRAYISWEAR.filter(item => item.season !== arrayofallmatches2[0].season);
    }
    if(document.getElementById("mtches") && document.getElementById("quickInfo")){
        document.getElementById("mtches").remove();
        document.getElementById("quickInfo").remove();
    }
    
    document.querySelectorAll("#allInfo > *:not(#buttonspan)").forEach(el => el.remove());
    
    printToWebsite(THEFINALARRAYISWEAR, true);

}