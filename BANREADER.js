console.log("one two three");
if(localStorage.getItem("NOFACEITACCOUNT")!= 1){
    document.getElementById(".BanFileExplorer").style.transform = "translateY(-350px)";

}
let allsoundsmuted = false;
if(document.getElementById("MUTEALL").style.backgroundColor === "green"){
    allsoundsmuted = true;
}
document.getElementById("MUTEALL").addEventListener("click", function () {
    allsoundsmuted = !allsoundsmuted;
    if(allsoundsmuted){
        audio.pause();
        paused = true;
        muteallsounds.textContent = "RESUME ALL SOUNDS";
        muteallsounds.style.backgroundColor = "green";
        muteallsounds.style.borderColor = "green";
        muteallsounds.style.fontSize = "12px"
    }
    else{
        muteallsounds.textContent = "MUTE ALL SOUNDS";
        muteallsounds.style.backgroundColor = "red";
        muteallsounds.style.borderColor = "red";
        muteallsounds.style.color = "white";
        muteallsounds.style.fontSize = "13.5px"
    }


  });
var THETEAMWEARESEARCHING;
const urlParams = new URLSearchParams(window.location.search);
const name1 = urlParams.get('teamName');
if (name1) {
    document.getElementById(".BanFileExplorer").style.transform = "translateY(-140px)";
    fetch('https://open.faceit.com/data/v4/search/teams?nickname='+name1+'&game=cs2&offset=0&limit=6', {
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer 29645383-3447-4a8d-90b8-76fcf5904c45'
        }
        }).then((res) => {

            if(!res.ok){
                console.log("HOLY FUCK");
                throw new Error("couldnt fetcht that shit");
            }
            return res.json();
        })
        .then((datann) =>{
            console.log(datann);
        if (datann.items.length == 0){
            if(confirm("Your search result got nothing! Maybe you spelt the team name wrong? ")){

            }
        }
        console.log(datann.items[0].team_id);
        localStorage.setItem("THETEAMWEARESEARCHING",datann.items[0].team_id);
        localStorage.setItem("THETEAMWEARESEARCHINGNAME",datann.items[0].name);
        THETEAMWEARESEARCHING = datann.items[0].team_id;
        STARTDASEARCH(datann.items[0].team_id);
    });
   
  }
  else{
    THETEAMWEARESEARCHING = localStorage.getItem("THETEAMWEARESEARCHING");
    STARTDASEARCH();
  }
  
//document.body.appendChild(document.getElementById("smokewed"));
//document.getElementById("smokewed").style.transform = "translate(550px,-390px)";
document.body.style.cursor = "wait";
document.getElementById("lgOut").style.transform = "translate(1400px)";
document.getElementById("h1").innerHTML = " ";
document.getElementById("poop").innerHTML = ` `;

var database = firebase.database();

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

document.getElementById("h3").style.transform = "translate(600px,-40px)";
document.getElementById("h3").style.position = "absolute";
document.getElementById(".BanFileExplorer").prepend(document.getElementById("h3"));
document.getElementById("srchBtn").style.visibility = "hidden";
document.getElementById("rtrnBtn").style.visibility = "visible";
document.getElementById("rtrnBtn").style.transform = "translate(-650px,-375px)";
document.body.appendChild(document.getElementById("rtrnBtn"));
document.getElementById("rtrnBtn").onclick = function(){
    window.location.href = "MainPage.html";
}
var lastbooleaniswear = false;
var ffws = 0;
var ffws1 = 0;
var dividerclicked = false;

var defaultimage = "https://raw.githubusercontent.com/AtomicRecall/Cipher/refs/heads/main/images/DEFAULTT.jpg";
//setup image_links
var loadGears = "https://raw.githubusercontent.com/AtomicRecall/Cipher/refs/heads/main/images/gears.gif";
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
stopButtong.innerHTML = 'USE THE MATCHES ALREADY FOUND:  <img id="buttonnn" src = "https://raw.githubusercontent.com/AtomicRecall/Cipher/refs/heads/main/images/STOP.jpg" class = "removemeplss"/>';

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
    var audio = new Audio('https://raw.githubusercontent.com/AtomicRecall/Cipher/refs/heads/main/sounds/gift_drop.wav');
    audio.volume = 0.2;
    if(!allsoundsmuted){
        audio.play();
       }
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
//Train = 6;
var bans = new Array(7).fill(0);

//ancient = 0;
//anubis = 1;
//Inferno = 2;
//Overpass(D2) = 3;
//Mirage = 4;
//Nuke = 5;
//Verigo = 6;
//Train = 6;
var picks = new Array(7).fill(0);

//ancient = 0;
//anubis = 1;
//Inferno = 2;
//Overpass(D2) = 3;
//Mirage = 4;
//Nuke = 5;
//Verigo = 6;
//Train = 6;
var played = new Array(7).fill(0);

//ancient = 0;
//anubis = 1;
//Inferno = 2;
//Overpass(D2) = 3;
//Mirage = 4;
//Nuke = 5;
//Verigo = 6;
//Train = 6;
var L = new Array(7).fill(0);

//ancient = 0;
//anubis = 1;
//Inferno = 2;
//Overpass(D2) = 3;
//Mirage = 4;
//Nuke = 5;
//Verigo = 6;
//Train = 6;
var W = new Array(7).fill(0);
var picksnbans = [];
document.getElementById('h3').style.opacity = 1;
document.getElementById('h3').onmouseover = function(){
    document.getElementById("h3").style.filter = "drop-shadow(.5px 0.5px 3px white)";
}
document.getElementById('h3').onmouseout = function(){
    document.getElementById("h3").style.filter = "drop-shadow(.5px 0.5px 0.75px black)";
}

function STARTDASEARCH(teamName){
    var POP =(teamName) ? teamName : THETEAMWEARESEARCHING;
    // Main function to fetch team and leader data
fetch(`https://open.faceit.com/data/v4/teams/${POP}`, {
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
    //console.log(datan);
    localStorage.setItem("LeaderID", datan.leader);
    document.getElementById("h3").innerHTML = datan.name.toUpperCase();
    var audio = new Audio('https://raw.githubusercontent.com/AtomicRecall/Cipher/refs/heads/main/sounds/nvg_on.wav');
    audio.volume = 0.3;
    if(!allsoundsmuted){
        audio.play();
       }
    document.getElementById("h1").innerHTML = " ";
    document.getElementById("poop").innerHTML = `&nbsp`;
    cancelTyping();
    killAllTimeouts();

   
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
        teamPfp.src = "https://raw.githubusercontent.com/AtomicRecall/Cipher/refs/heads/main/images/DEFAULTT.jpg";
        document.getElementById('h3').prepend(teamPfp);
    }
    
    if (datan.cover_image != undefined){

        teamBackground.src = datan.cover_image;
       
    }
    else if(datan.cover_image == undefined || datan.cover_image == null || datan.cover_image === ""){
        
        teamBackground.src = "data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='29' height='50.115' patternTransform='scale(1) rotate(90)'><rect x='0' y='0' width='100%' height='100%' fill='%23161616'/><path d='M14.498 16.858L0 8.488.002-8.257l14.5-8.374L29-8.26l-.002 16.745zm0 50.06L0 58.548l.002-16.745 14.5-8.373L29 41.8l-.002 16.744zM28.996 41.8l-14.498-8.37.002-16.744L29 8.312l14.498 8.37-.002 16.745zm-29 0l-14.498-8.37.002-16.744L0 8.312l14.498 8.37-.002 16.745z'%20 stroke-width='1' stroke='%23303030' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>";
    }

    document.getElementById(".BanFileExplorer").prepend(teambackgrounddiv);
    //5555
    var fart = firebase.database().ref('/DATABASE/TEAMS/'+datan.name);
    fart.on('value', (vag)=>{
        if(vag.val()){
            console.log("WOOWWA WIIWA");
            console.log(vag.val());

        }
        else{
            
        }
       

    }, (error)=>{
        console.log(error.name);
    })
    return GetLeaguePickBans(datan.leader, 0);  // Start fetching match history

    
})
.then(() => {


    picksnbans.sort((a, b) => b.finished - a.finished);
    
    //console.log("Matches sorted:");
    //console.log(picksnbans);

    removeElementsByClass("removemeplss");
    removeElementsByClass("divvv");
    
    document.getElementById("h3").style.opacity = 1;
   
    //create BanSimulatorButton and functionality
    var banSimulator = document.createElement("button");
    banSimulator.id = "banSimulator";
    banSimulator.textContent = "BAN SIMULATOR";
    banSimulator.onclick = banSimulatorr;
    document.getElementById(".BanFileExplorer").appendChild(banSimulator);
    printToWebsite(picksnbans, false);
    
})
.catch((error) => {
    console.error('Error:', error);
});
}
let timerInterval;
function startTimer() {
  clearInterval(timerInterval);
  timeLeft = 60;

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  document.getElementById("TimeLeft").textContent = formatTime(timeLeft);

  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("TimeLeft").textContent = formatTime(timeLeft);

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert("Time's up!");
    }
  }, 1000);
}
function banSimulatorr(){
    if(document.getElementById("mtches") && document.getElementById("quickInfo") && document.getElementById("allInfo") && document.getElementById("overallButtonDivider") && document.getElementById("graphdiv")){
        document.getElementById("mtches").style.opacity = "0";
        document.getElementById("mtches").style.pointerEvents = "none";
        document.getElementById("quickInfo").style.opacity = "0";
        document.getElementById("quickInfo").style.pointerEvents = "none";
        document.getElementById("allInfo").style.opacity = "0";
        document.getElementById("allInfo").style.pointerEvents = "none";
        document.getElementById("overallButtonDivider").style.opacity = "0";
        document.getElementById("overallButtonDivider").style.pointerEvents = "none";
        document.getElementById("graphdiv").style.opacity = "0";
        document.getElementById("graphdiv").style.pointerEvents = "none";
        
    }
    document.getElementById("teambackgrounddiv").style.height = "50px";
    document.getElementById("teambackgrounddiv").style.transform = "translateX(0px)";
    document.getElementById("teambackgrounddiv").style.width = "1500px";
    document.getElementById("teambackgrounddiv").querySelector("#teamBackground").style.height = "50px";
    document.getElementById("teambackgrounddiv").querySelector("#teamBackground").style.width = "1550px";
    document.getElementById("h3").style.transform = "translate(20px, -40px)";
    document.getElementById("banSimulator").style.transform = "translate(1300px,10px)";
    document.getElementById("banSimulator").onclick = revertSimulator;
    document.getElementById("banSimulator").textContent = "REVERT BACK TO NORMAL";


    var communication = document.createElement("div");
    communication.id = "banCommunication";
    document.getElementById(".BanFileExplorer").appendChild(communication);

    //1.ask the user who should go first
    // - loot box for randomness
    //2. initalize the place where the bans will happen
    //3. Actual Ban logic


            //Do you want $TEAMWEARESEARCHING to know you are on a Team? 
            //if yes, What Team are you on?
            //if no, do blind run
    
    var ques1Container = document.createElement("div");
    ques1Container.id = "asshole";
    var questions = document.createElement("div");
    questions.textContent = `Do you want ${localStorage.getItem("THETEAMWEARESEARCHINGNAME")} to know you're on a team?`;
    var butt1 = document.createElement("button");
    butt1.textContent = "YES";
    var butt2 = document.createElement("button");
    butt2.textContent = "NO";
    var BlindOrNot = false;
    butt2.onclick = function(){
        
    }
    butt1.onclick = function(){
        BlindOrNot = true;
    }
    ques1Container.appendChild(questions);
    ques1Container.appendChild(butt1);
    ques1Container.appendChild(butt2);
    communication.appendChild(ques1Container);

    var ques2Container = document.createElement("div");
    ques2Container.id = "myasshole";
    var which = "bo1";
    //what type of ban?
    var ques = document.createElement("div");
    ques.textContent = "Best of How Much?";
    ques.id="one";
    ques2Container.appendChild(ques);
    var bowhatdiv = document.createElement("div");
    bowhatdiv.id="two";

    var bo3btn = document.createElement("button");
    bo3btn.textContent = "bo3";
    bo3btn.style.fontSize = "80px";
    bowhatdiv.appendChild(bo3btn);
    var bo1btn = document.createElement("button");
    bo1btn.textContent = "bo1";
    bo1btn.style.fontSize = "80px";
    bowhatdiv.appendChild(bo1btn);
    ques2Container.appendChild(bowhatdiv);
    var quesDiv = document.createElement("div");
    ques2Container.appendChild(quesDiv);
    quesDiv.style.opacity = "0";
    bo3btn.onclick = function(){
        which = "bo3";
        bo1btn.remove();
        ques.remove();
        quesDiv.style.opacity = "1";
        
    }
    bo1btn.onclick = function(){
        which = "bo1";
        bo3btn.remove();
         ques.remove();
        quesDiv.style.opacity = "1";

        
    }
    communication.appendChild(ques2Container);

    //1. ask the user who should go first
    var question = document.createElement("div");
    question.textContent = "Who should go first?";
    question.style.fontSize = "25px";
    question.style.fontWeight = "bold";
    communication.appendChild(question);

    var btn1 = document.createElement("button");
    btn1.id = "but1";
    btn1.style.height = "50px";
    btn1.textContent = localStorage.getItem("THETEAMWEARESEARCHINGNAME")+"?";
    

    var btn2 = document.createElement("button");
    btn2.id = "but2";
    btn2.style.height = "50px";
    btn2.textContent = "YOU?";
    
    quesDiv.appendChild(question);
    quesDiv.appendChild(btn1);
    quesDiv.appendChild(btn2);

    btn2.onclick = function(){
        question.remove();
        //2. initalize the place where the bans will happen
        banPlaceInit("null",which,BlindOrNot);
    }
    btn1.onclick = function(){
        question.remove();
        //2. initalize the place where the bans will happen
        banPlaceInit(localStorage.getItem("THETEAMWEARESEARCHINGNAME"),which,BlindOrNot);

    }

    
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function unHighlightMap(maps,oldmaps,pickORnot){
    console.log("CALLED unHighlightMap with: ");
    console.log(maps);
    console.log("----- END OF MAPS");
    console.log("and with: ");
    console.log(oldmaps);
    console.log("----END OF OLDMAPS");
    var banned = oldmaps.find((item) => !maps.includes(item));

    if (maps && banned) {
        var divPrefix = banned.toLowerCase().slice(0, 3); // crude: d2, mir, nuk...
        document.getElementById(`${divPrefix}div`).style.filter = "grayscale(1)";
        document.getElementById(`${divPrefix}divName`).style.color = "#747575";
        document.getElementById(`${divPrefix}pOb`).style.color = "#747575";
        document.getElementById(`${divPrefix}pOb`).classList.add("BANNED");
        document.getElementById(`${divPrefix}div`).style.pointerEvents = "none";
        if(pickORnot){
            document.getElementById(`${divPrefix}div`).style.filter = "drop-shadow(0 -0mm 2mm rgb(255, 74, 4))";
            
            document.getElementById(`${divPrefix}pOb`).textContent = "PICK";
        }
        
    }
}

async function banPlaceInit(whoFirst, bestofwat,BlindOrNot){
    //2. initalize the place where the bans will happen
    document.getElementById("but1").remove();
    document.getElementById("but2").remove();
    //document.getElementById("one").remove();
    document.getElementById("two").remove();
    document.getElementById("banCommunication").style.backgroundColor = "#0A0C0C";

    var firstPerson = (whoFirst !== "null") ? whoFirst : "Your";

    var WhosTurnDiv = document.createElement("div");
    WhosTurnDiv.textContent = (firstPerson !== "Your") ? firstPerson+"'s turn to ban a map" : firstPerson+" turn to ban a map";
    WhosTurnDiv.style.height = "20px";
    WhosTurnDiv.style.width = "1000px";
    WhosTurnDiv.id = "WhosTurnDiv";
    document.getElementById("banCommunication").appendChild(WhosTurnDiv);

    var TimeLeftDiv = document.createElement("timer");
    TimeLeftDiv.id = "TimeLeft";
    TimeLeftDiv.innerHTML = "00:60";
    document.getElementById("banCommunication").appendChild(TimeLeftDiv);

    var GameDiv = document.createElement("div");
    GameDiv.id = "GameDiv";

    //7 dividers of maps, each divider:
    //      map picture, map name next to match picture, button on the right-hand-side (when needed to be shown)
    var d2div = document.createElement("div");
    d2div.id = "dusdiv";
    d2div.classList.add("banDiv");
    var d2divPic = document.createElement("img");
    d2divPic.id = "dusdivPic";
    d2divPic.classList.add("banPic");
    d2divPic.src = image_links[3];
    d2div.appendChild(d2divPic);
    var d2divName = document.createElement("div");
    d2divName.id = "dusdivName";
    d2divName.textContent = "Dust2";
    d2divName.classList.add("banName");
    d2div.appendChild(d2divName);
    var d2pOb = document.createElement("button");
    d2pOb.id = "duspOb";
    d2pOb.textContent = "BAN";
    d2pOb.classList.add("banBtn");
    d2div.appendChild(d2pOb);
    GameDiv.appendChild(d2div);

    var mirdiv = document.createElement("div");
    mirdiv.id = "mirdiv";
    mirdiv.classList.add("banDiv");
    var mirdivPic = document.createElement("img");
    mirdivPic.id = "mirdivPic";
    mirdivPic.classList.add("banPic");
    mirdivPic.src = image_links[4];
    mirdiv.appendChild(mirdivPic);
    var mirdivName = document.createElement("div");
    mirdivName.id = "mirdivName";
    mirdivName.textContent = "Mirage";
    mirdivName.classList.add("banName");
    mirdiv.appendChild(mirdivName);
    var mirpOb = document.createElement("button");
    mirpOb.id = "mirpOb";
    mirpOb.textContent = "BAN";
    mirpOb.classList.add("banBtn");
    mirdiv.appendChild(mirpOb);
    GameDiv.appendChild(mirdiv);
    
    var nukdiv = document.createElement("div");
    nukdiv.id = "nukdiv";
    nukdiv.classList.add("banDiv");
    var nukdivPic = document.createElement("img");
    nukdivPic.id = "nukdivPic";
    nukdivPic.classList.add("banPic");
    nukdivPic.src = image_links[5];
    nukdiv.appendChild(nukdivPic);
    var nukdivName = document.createElement("div");
    nukdivName.id = "nukdivName";
    nukdivName.textContent = "Nuke";
    nukdivName.classList.add("banName");
    nukdiv.appendChild(nukdivName);
    var nukpOb = document.createElement("button");
    nukpOb.id = "nukpOb";
    nukpOb.textContent = "BAN";
    nukpOb.classList.add("banBtn");
    nukdiv.appendChild(nukpOb);
    GameDiv.appendChild(nukdiv);
    
    var ancdiv = document.createElement("div");
    ancdiv.id = "ancdiv";
    ancdiv.classList.add("banDiv");
    var ancdivPic = document.createElement("img");
    ancdivPic.id = "ancdivPic";
    ancdivPic.classList.add("banPic");
    ancdivPic.src = image_links[0];
    ancdiv.appendChild(ancdivPic);
    var ancdivName = document.createElement("div");
    ancdivName.id = "ancdivName";
    ancdivName.textContent = "Ancient";
    ancdivName.classList.add("banName");
    ancdiv.appendChild(ancdivName);
    var ancpOb = document.createElement("button");
    ancpOb.id = "ancpOb";
    ancpOb.textContent = "BAN";
    ancpOb.classList.add("banBtn");
    ancdiv.appendChild(ancpOb);
    GameDiv.appendChild(ancdiv);

    var tradiv = document.createElement("div");
    tradiv.id = "tradiv";
    tradiv.classList.add("banDiv");
    var tradivPic = document.createElement("img");
    tradivPic.id = "tradivPic";
    tradivPic.classList.add("banPic");
    tradivPic.src = image_links[7];
    tradiv.appendChild(tradivPic);
    var tradivName = document.createElement("div");
    tradivName.id = "tradivName";
    tradivName.textContent = "Train";
    tradivName.classList.add("banName");
    tradiv.appendChild(tradivName);
    var trapOb = document.createElement("button");
    trapOb.id = "trapOb";
    trapOb.textContent = "BAN";
    trapOb.classList.add("banBtn");
    tradiv.appendChild(trapOb);
    GameDiv.appendChild(tradiv);

    var infdiv = document.createElement("div");
    infdiv.id = "infdiv";
    infdiv.classList.add("banDiv");
    var infdivPic = document.createElement("img");
    infdivPic.id = "infdivPic";
    infdivPic.classList.add("banPic");
    infdivPic.src = image_links[2];
    infdiv.appendChild(infdivPic);
    var infdivName = document.createElement("div");
    infdivName.id = "infdivName";
    infdivName.textContent = "Inferno";
    infdivName.classList.add("banName");
    infdiv.appendChild(infdivName);
    var infpOb = document.createElement("button");
    infpOb.id = "infpOb";
    infpOb.textContent = "BAN";
    infpOb.classList.add("banBtn");
    infdiv.appendChild(infpOb);
    GameDiv.appendChild(infdiv);
    
    var anudiv = document.createElement("div");
    anudiv.id = "anudiv";
    anudiv.classList.add("banDiv");
    var anudivPic = document.createElement("img");
    anudivPic.id = "anudivPic";
    anudivPic.classList.add("banPic");
    anudivPic.src = image_links[1];
    anudiv.appendChild(anudivPic);
    var anudivName = document.createElement("div");
    anudivName.id = "anudivName";
    anudivName.textContent = "Anubis";
    anudivName.classList.add("banName");
    anudiv.appendChild(anudivName);
    var anupOb = document.createElement("button");
    anupOb.id = "anupOb";
    anupOb.textContent = "BAN";
    anupOb.classList.add("banBtn");
    anudiv.appendChild(anupOb);
    GameDiv.appendChild(anudiv);
    startTimer();
    document.getElementById("banCommunication").appendChild(GameDiv);
    localStorage.removeItem("BC");
    localStorage.removeItem("PC");
    var maps = ['Dust2','Mirage','Nuke','Ancient','Train','Inferno','Anubis'];

    var BC = calculateBC();
    var PC = calculatePC();

    if(whoFirst !== "null"){
        for(let d = 1; d <= 7; d++){
            startTimer(); // Restart timer each time user does something

            if(d % 2 !== 0){  


                switch(bestofwat){
                    //user is first
                    case "bo1":
                        await delay(3000); // Wait 3 seconds before continuing
                        var oldmaps = [...maps];
                        maps = bestof1(d, maps,BC,BlindOrNot);
                        unHighlightMap(maps,oldmaps);        
                        break;
                    case "bo3":
                        document.getElementById("WhosTurnDiv").textContent = (d == 3) ?  localStorage.getItem("THETEAMWEARESEARCHINGNAME")+"'s turn to pick a map" : localStorage.getItem("THETEAMWEARESEARCHINGNAME")+"'s turn to ban a map"; 
                        await delay(3000); // Wait 3 seconds before continuing
                        var oldmapss = [...maps];
                        maps = bestof3(d,maps,BC,PC,BlindOrNot);
                        (d == 3) ? unHighlightMap(maps,oldmapss,true) : unHighlightMap(maps,oldmapss,false); 
                    break;
                    case "bo5":
                        bestof5(d,maps);
                        maps = bestof5(d,maps);
                    break;
                }
            }
            else{
                  switch(bestofwat){
                    case "bo1":
                        var bannedMap = await  UserClick(BC,PC,false);
                        maps = maps.filter(name => name!== bannedMap);
                    break;
                    
                    case "bo3":
                        document.getElementById("WhosTurnDiv").textContent = (d == 4 ) ? "Your turn to pick a map" : "Your turn to ban a map";  
                        var mapToRemove = (d == 4) ? await UserClick(BC,PC,true) : await UserClick(BC,PC,false);
                        maps = maps.filter(name => name!== mapToRemove);

                    break;
                    case "bo5":
                    break;
                }
                continue;

            }
        }
    }
    else{
        startTimer(); // Restart timer each time user does something
        for(let d = 1; d <= 7; d++){
            
            if(d % 2 === 0){  

                switch(bestofwat){
                    
                    case "bo1":
                         document.getElementById("WhosTurnDiv").textContent = localStorage.getItem("THETEAMWEARESEARCHINGNAME")+"'s turn to ban a map";

                        await delay(3000); // Wait 3 seconds before continuing
                        var oldmaps = [...maps];
                        maps = bestof1(d,maps,BC,BlindOrNot);
                        unHighlightMap(maps,oldmaps,false);
                       
                                
                      
                    break;
                    case "bo3":
                         document.getElementById("WhosTurnDiv").textContent = (d == 4) ?  localStorage.getItem("THETEAMWEARESEARCHINGNAME")+"'s turn to pick a map" : localStorage.getItem("THETEAMWEARESEARCHINGNAME")+"'s turn to ban a map"; 

                        await delay(3000); // Wait 3 seconds before continuing
                        var oldmapss = [...maps];
                        maps = bestof3(d,maps,BC,PC,BlindOrNot);
                        (d == 4) ? unHighlightMap(maps,oldmapss,true) : unHighlightMap(maps,oldmapss,false); 
                        
                    break;
                    case "bo5":
                        
                        maps = bestof5(d,maps);
                    break;
                }
            }
            else{
                
                switch(bestofwat){
                    case "bo1":
                        document.getElementById("WhosTurnDiv").textContent = "Your turn to ban a map";
                        var bannedMap = await UserClick(BC,PC,false);
                        maps = maps.filter(name => name!== bannedMap);
                        
                    break;
                    
                    case "bo3":
                        document.getElementById("WhosTurnDiv").textContent = (d == 3) ? "Your turn to pick a map" : "Your turn to ban a map";  

                        var mapToRemove = (d == 3) ? await UserClick(BC,PC,true) : await UserClick(BC,PC,false);
                        maps = maps.filter(name => name!== mapToRemove);
                       

                    break;
                    case "bo5":
                    break;
                }


                    continue;
            }
        }
    }


}
async function UserClick(BC,PC, pickOrNot) {
                                    var buttons = document.querySelectorAll(".banBtn");
                                    // Activate buttons for user interaction
                                    buttons.forEach((btn) => {
                                        if(!(btn.classList.contains("BANNED"))){
                                                btn.style.color = "#FF5500"; // orange
                                                btn.style.cursor = "pointer";
                                                btn.style.pointerEvents = "auto";
                                                if(pickOrNot){
                                                    btn.textContent = "PICK";
                                                }
                                                else{
                                                    btn.textContent = "BAN";
                                                }
                                                btn.addEventListener("mouseover", () => {
                                                    btn.style.backgroundColor = "#e14b0077";
                                                });

                                                btn.addEventListener("mouseout", () => {
                                                    btn.style.backgroundColor = "";
                                                });

                                        }

                                    });


  return new Promise((resolve) => {
    const buttons = document.querySelectorAll(".banBtn");
    
    // Define the click handler
    const handler = (e) => {
      const id = e.currentTarget.id;
      let map;
      let index;
      // Clean up listeners and disable buttons
      buttons.forEach((btn) => {
        btn.removeEventListener("click", handler);
        btn.style.cursor = "default";
        btn.style.pointerEvents = "none";
        btn.style.backgroundColor = "";
        btn.style.color = "#585b5b"; // back to gray
         if(!(btn.classList.contains("BANNED"))){
            btn.textContent = "BAN";
         }
        
      });

      // Determine which map was clicked
      switch (id) {
        case "duspOb": map = "Dust2"; index = 0; break;
        case "mirpOb": map = "Mirage"; index = 1; break;
        case "nukpOb": map = "Nuke"; index = 2;break;
        case "ancpOb": map = "Ancient"; index = 3;break;
        case "trapOb": map = "Train"; index = 4;break;
        case "infpOb": map = "Inferno"; index = 5;break;
        case "anupOb": map = "Anubis"; index = 6; break;
        default: map = null; index = null; break;
      }

      var defaultshit = ['Dust2','Mirage','Nuke','Ancient','Train','Inferno','Anubis'];
      console.log("PICK OR NOT MUTHER FUCKER "+pickOrNot);
      unHighlightMap(defaultshit.filter(item => item !== map), defaultshit, pickOrNot);
       
       BC[index] = "0%";
       PC[index] = "0%";
      localStorage.setItem("BC", JSON.stringify(BC));
      localStorage.setItem("PC", JSON.stringify(PC));
      resolve(map);
    };

    buttons.forEach((btn) => {
      btn.addEventListener("click", handler);
      
    });
   
  });
  
}


function bestof1(numround, maps,BC,BlindOrNot){
    //Every round means every time both teams made a “move” (banned or picked)
    //Each round, the team calculates their PC (pick-chance) and a BC (ban-chance) for each map,
    //var PC = new Array(maps.length);

    /*
    100% = the team would 100% Ban or Pick map (only one of the things can have this)
    50 % = if the 100% is taken, use this one, every other 50% will have an even chance to be chosen
    0 % = do not under any circumstances pick or ban this map.

    Picks
        100% = is most picked map
        75% = is most played map
        50% = map that they won the most 
        0% = everything else 
    Bans
        100 % = is map most banned
        75 % = is least played
        50 % = map lost the most 
        0 % = everything else 

        This is a bo1 so I will only calculate the BC until the last round. The opposite of the map that is picked is the one that is banned.

    */
  

    /*
    If 100% is there, then do the 100%, if multiple 100%, FIFO
    if there is 75 AND 50, then do 1-5 rng, 1-3 does the 75% and 4-5 does the 50%, 
    if only 75 or only 50, do an even chance between all of them 
    */

    switch(numround){
        case 1:
            return BAN(maps,BC,BlindOrNot,numround);
        case 2:
            return BAN(maps,BC,BlindOrNot,numround);
        case 3:
            return BAN(maps,BC,BlindOrNot,numround);
        case 4:
            return BAN(maps,BC,BlindOrNot,numround);
        case 5:
            return BAN(maps,BC,BlindOrNot,numround);
        case 6:
            return BAN(maps,BC,BlindOrNot,numround);
        case 7:
            
       }
    
}
//TODO: take potential matches from your bracket in regular season
//look at playoff bracket
function calculateBC(){
    //PC AND BC USE D2,MIR,NUKE,ANCIENT,TRAIN,INFERNO,ANUBIS IN THAT ORDER
    //EVERYTHING ELSE USES ANCIENT,ANUBIS,INFERNO,D2,MIRAGE,NUKE,VERTIGO,TRAIN
        if((!(localStorage.getItem("BC")))){

           var BC = new Array(7).fill("12%");
            //FUCK WHAT I WAS DOING BEFORE LOL
            //TOP 3 BANNED MAPS = 100%
            //MOST WON MAP, AND MOST PICKED MAP ARE 0%
            //LEAST PLAYED = 75%
            //MOST LOST AND LEAST PICKED = 50%
            
            var topBanned= bans.indexOf(Math.max(...bans));
            console.log(topBanned);
            for (var index of topBanned){
                    switch(index){
                    case 0:
                        BC[3] = "100%";
                    
                        break;
                    case 1:
                    
                        BC[6] = "100%";
                    
                        break;
                    case 2:
                    
                        BC[5] = "100%";
                    
                        break;
                    case 3:
                    
                        BC[0] = "100%";
                
                        break;
                    case 4:
                    
                        BC[1] = "100%";
                    
                        break;
                    case 5:
                    
                        BC[2] = "100%";
                    
                        break;
                    case 6:
                    
                        BC[4] = "100%";
        
                        break;
                    
                }
            }
        
            var leastplayed = played.indexOf(Math.min(...played));
                    switch(leastplayed){
                    case 0:
                        if(BC[3]!=="100%") BC[3] = "75%";
                        
                    
                        break;
                    case 1:
                        if(BC[6]!=="100%") BC[6] = "75%";

                    
                        break;
                    case 2:
                        if(BC[5]!=="100%") BC[5] = "75%";
        
                    
                        break;
                    case 3:
                        if(BC[0]!=="100%") BC[0] = "75%";

                
                        break;
                    case 4:
                        if(BC[1]!=="100%") BC[1] = "75%";

                    
                        break;
                    case 5:
                        if(BC[2]!=="100%") BC[2] = "75%";

                    
                        break;
                    case 6:
                        if(BC[4]!=="100%") BC[4] = "75%";

        
                        break;
                    
                }
                var mostpicked = picks.indexOf(Math.max(...picks));
                    switch(mostpicked){
                    case 0:
                       if(BC[3]!=="50%" || BC[3]!== "75%") BC[3] = "0%";

                    
                        break;
                    case 1:
                        if(BC[6]!=="50%" || BC[6]!== "75%") BC[6] = "0%";
                       

                    
                        break;
                    case 2:
                        if(BC[5]!=="50%" || BC[5]!== "75%") BC[5] = "0%";
                       
        
                    
                        break;
                    case 3:
                        if(BC[0]!=="50%" || BC[0]!== "75%") BC[0] = "0%";
                       
                    
                
                        break;
                    case 4:
                        if(BC[1]!=="50%" || BC[1]!== "75%") BC[1] = "0%";
                  
                
                    
                        break;
                    case 5:
                        if(BC[2]!=="50%" || BC[2]!== "75%") BC[2] = "0%";
                    
            
                    
                        break;
                    case 6:
                        if(BC[4]!=="50%" || BC[4]!== "75%") BC[4] = "0%";
                
                
        
                        break;
                    
                }
                var mostwon = W.indexOf(Math.max(...W));
                    switch(mostwon){
                    case 0:
                        if(BC[3]!=="100%") BC[3] = "0%";
                    
                        break;
                    case 1:
                    
                        if(BC[6]!=="100%") BC[6] = "0%";
                    
                        break;
                    case 2:
                    
                    if(BC[5]!=="100%") BC[5] = "0%";
                    
                        break;
                    case 3:
                    
                        if(BC[0]!=="100%") BC[0] = "0%";
                
                        break;
                    case 4:
                    
                        if(BC[1]!=="100%") BC[1] = "0%";
                    
                        break;
                    case 5:
                    
                        if(BC[2]!=="100%") BC[2] = "0%";
                    
                        break;
                    case 6:
                    
                        if(BC[4]!=="100%") BC[4] = "0%";
        
                        break;
                    
                }
                var leastpicked = picks.indexOf(Math.min(...picks));
                    switch(leastpicked){
                    case 0:
                        if(BC[3]!=="100%") BC[3] = "50%";
                    
                        break;
                    case 1:
                    
                        if(BC[6]!=="100%") BC[6] = "50%";
                    
                        break;
                    case 2:
                    
                    if(BC[5]!=="100%") BC[5] = "50%";
                    
                        break;
                    case 3:
                    
                    if(BC[0]!=="100%") BC[0] = "50%";
                
                        break;
                    case 4:
                    
                    if(BC[1]!=="100%") BC[1] = "50%";
                    
                        break;
                    case 5:
                    
                        if(BC[2]!=="100%") BC[2] = "50%";
                    
                        break;
                    case 6:
                    
                        if(BC[4]!=="100%") BC[4] = "50%";
        
                        break;
                    
                }
                var mostlost = L.indexOf(Math.max(...L));
                    switch(mostlost){
                    case 0:
                        BC[3] = "50%";
                    
                        break;
                    case 1:
                    
                        BC[6] = "50%";
                    
                        break;
                    case 2:
                    
                        BC[5] = "50%";
                    
                        break;
                    case 3:
                    
                        BC[0] = "50%";
                
                        break;
                    case 4:
                    
                        BC[1] = "50%";
                    
                        break;
                    case 5:
                    
                        BC[2] = "50%";
                    
                        break;
                    case 6:
                    
                        BC[4] = "50%";
        
                        break;
                    
                }
                console.log("CREATED BC ");
                console.log(BC);
                localStorage.setItem("BC", JSON.stringify(BC));
        }
        else{
            console.log("INHERITED BC");
            
            BC = JSON.parse(localStorage.getItem("BC"));
            console.log(BC);
        }
        return BC;
}
function calculatePC(){

      //PC AND BC USE D2,MIR,NUKE,ANCIENT,TRAIN,INFERNO,ANUBIS IN THAT ORDER
    //EVERYTHING ELSE USES ANCIENT,ANUBIS,INFERNO,D2,MIRAGE,NUKE,VERTIGO,TRAIN
        if((!(localStorage.getItem("PC")))){
           var PC = new Array(7).fill("25%");
            
            //TOP 3 PICKED MAPS = 100%
            //MOST LOST MAP, AND MOST BANNED MAP ARE 0%
            //MOST PLAYED = 75%
            //MOST WON AND LEAST BANNED = 50%
            var top3Indices = picks
                .map((value, index) => ({ index, value }))
                .sort((a, b) => b.value - a.value)  // Sort descending by value
                .slice(0, 3)                        // Take top 3
                .map(item => item.index);          // Extract only the indices

            console.log(top3Indices);
            for (var index of top3Indices){
                    switch(index){
                    case 0:
                        PC[3] = "100%";
                    
                        break;
                    case 1:
                    
                        PC[6] = "100%";
                    
                        break;
                    case 2:
                    
                        PC[5] = "100%";
                    
                        break;
                    case 3:
                    
                        PC[0] = "100%";
                
                        break;
                    case 4:
                    
                        PC[1] = "100%";
                    
                        break;
                    case 5:
                    
                        PC[2] = "100%";
                    
                        break;
                    case 6:
                    
                        PC[4] = "100%";
        
                        break;
                    
                }
            }
        
            var mostplayed = played.indexOf(Math.max(...played));
                    switch(mostplayed){
                    case 0:
                        if(PC[3]!=="100%") PC[3] = "75%";
                        
                    
                        break;
                    case 1:
                        if(PC[6]!=="100%") PC[6] = "75%";

                    
                        break;
                    case 2:
                        if(PC[5]!=="100%") PC[5] = "75%";
        
                    
                        break;
                    case 3:
                        if(PC[0]!=="100%") PC[0] = "75%";

                
                        break;
                    case 4:
                        if(PC[1]!=="100%") PC[1] = "75%";

                    
                        break;
                    case 5:
                        if(PC[2]!=="100%") PC[2] = "75%";

                    
                        break;
                    case 6:
                        if(PC[4]!=="100%") PC[4] = "75%";

        
                        break;
                    
                }
                var mostBanned = bans.indexOf(Math.max(...bans));
                    switch(mostBanned){
                    case 0:
                        PC[3] = "0%";

                    
                        break;
                    case 1:
                        PC[6] = "0%";
                       

                    
                        break;
                    case 2:
                        PC[5] = "0%";
                       
        
                    
                        break;
                    case 3:
                        PC[0] = "0%";
                       
                    
                
                        break;
                    case 4:
                         PC[1] = "0%";
                  
                
                    
                        break;
                    case 5:
                        PC[2] = "0%";
                    
            
                    
                        break;
                    case 6:
                        PC[4] = "0%";
                
                
        
                        break;
                    
                }
                var mostLost = L.indexOf(Math.max(...L));
                    switch(mostLost){
                    case 0:
                        if(PC[3]!=="100%") PC[3] = "0%";
                    
                        break;
                    case 1:
                    
                        if(PC[6]!=="100%") PC[6] = "0%";
                    
                        break;
                    case 2:
                    
                    if(PC[5]!=="100%") PC[5] = "0%";
                    
                        break;
                    case 3:
                    
                        if(PC[0]!=="100%") PC[0] = "0%";
                
                        break;
                    case 4:
                    
                        if(PC[1]!=="100%") PC[1] = "0%";
                    
                        break;
                    case 5:
                    
                        if(PC[2]!=="100%") PC[2] = "0%";
                    
                        break;
                    case 6:
                    
                        if(PC[4]!=="100%") PC[4] = "0%";
        
                        break;
                    
                }
                var leastbanned = bans.indexOf(Math.min(...bans));
                    switch(leastbanned){
                    case 0:
                       if(PC[3]!=="100%" || PC[3]!== "75%") PC[3] = "50%";

                    
                        break;
                    case 1:
                        if(PC[6]!=="100%" || PC[6]!== "75%") PC[6] = "50%";
                       

                    
                        break;
                    case 2:
                        if(PC[5]!=="100%" || PC[5]!== "75%") PC[5] = "50%";
                       
        
                    
                        break;
                    case 3:
                        if(PC[0]!=="100%" || PC[0]!== "75%") PC[0] = "50%";
                       
                    
                
                        break;
                    case 4:
                        if(PC[1]!=="100%" || PC[1]!== "75%") PC[1] = "50%";
                  
                
                    
                        break;
                    case 5:
                        if(PC[2]!=="100%" || PC[2]!== "75%") PC[2] = "50%";
                    
            
                    
                        break;
                    case 6:
                        if(PC[4]!=="100%" || PC[4]!== "75%") PC[4] = "50%";
                
                
        
                        break;
                    
                }
                var mostWon = W.indexOf(Math.max(...W));
                    switch(mostWon){
                    case 0:
                        PC[3] = "50%";
                    
                        break;
                    case 1:
                    
                        PC[6] = "50%";
                    
                        break;
                    case 2:
                    
                        PC[5] = "50%";
                    
                        break;
                    case 3:
                    
                        PC[0] = "50%";
                
                        break;
                    case 4:
                    
                        PC[1] = "50%";
                    
                        break;
                    case 5:
                    
                        PC[2] = "50%";
                    
                        break;
                    case 6:
                    
                        PC[4] = "50%";
        
                        break;
                    
                }
                console.log("CREATED PC ");
                console.log(PC);
                localStorage.setItem("PC", JSON.stringify(PC));
        }
        else{
            console.log("INHERITED PC");
            
            PC = JSON.parse(localStorage.getItem("PC"));
            console.log(PC);
        }
        return PC;
}
function BAN(maps, BC, bo3flag, BlindOrNot,numround){
    /*
        prioritize punish picking
        ban the map that i dont want to play
            - always ban 100% only in the first few rounds
            - ban in relation to losses

        pick the map
            - what map i play the most / win / pick
            - play in relation to wins 

        ban (bo3)

            - first ban: 100% ban the map that is the most banned
                    - if multiple, check which one is playd the least

            - mid-round bans:  out of the remaning maps: 
                                1) most banned + played 0 times
                                2) most banned + picked 0 times
                                3) most banned + played least
                                4) most banned  + lost most
                            after checking all the maps
                                put all top banned with a range of little played maps and do rng 
            - final ban: 
                - Win/Loss + Amount banned. which ever is higher ban that one.
        pick (bo3)
            - first pick: 100% pick the map you play the most
                if tie, most picked + most played

    */


    if(bo3flag){
        //bo3 bans
        if (BlindOrNot){
            //blind
            var map = 'vertigo';
            var RNGCHOICEBETWEENMAPS = [];

            for(let d = 0; d < BC.length; d++){
                var numOfHunded = [];
                switch(d){
                    case 0:
                        map = 'Dust2';
                        break;
                    case 1:
                        map = 'Mirage';
                        break;
                    case 2:
                        map = 'Nuke';
                        break;
                    case 3:
                        map = 'Ancient';
                        break;
                    case 4:
                        map = 'Train';
                        break;
                    case 5:
                        map = 'Inferno';
                        break;
                    case 6:
                        map = 'Anubis';
                        break;
                    }


                    
            }
            console.log(RNGCHOICEBETWEENMAPS.length);
            if(RNGCHOICEBETWEENMAPS.length > 0 && RNGCHOICEBETWEENMAPS){
                        console.log("SHIT");
                        console.log(RNGCHOICEBETWEENMAPS);
                        console.log(maps);  

                        var choice = weightedRandomChoice(RNGCHOICEBETWEENMAPS);

                        BC[choice.index] = "0%";
                        PC[choice.index] = "0%";
                        localStorage.setItem("BC",JSON.stringify(BC));
                        RNGCHOICEBETWEENMAPS = [];
                        return maps.filter(name => name!== choice.map);
                        

            }
            else{
                let RNG = Math.floor(Math.random()*maps.length);
                
                switch(maps[RNG]){
                    case "Dust2":
                    
                        BC[0] = "0%";
                        break;
                    case "Mirage":
                    
                        BC[1] = "0%";
                        break;
                    case "Nuke":
                    
                        BC[2] = "0%";
                        break;
                    case "Ancient":
                        
                        BC[3] = "0%";
                        break;
                    case "Train":
                        
                        BC[4] = "0%";
                        break;
                    case "Inferno":
                        
                        BC[5] = "0%";
                        break;
                    case "Anubis":
                        
                        BC[6] = "0%";
                        break;
                    }
                    localStorage.setItem("BC",JSON.stringify(BC));
                return maps.filter(name => name!== maps[RNG]);
            }   
        }
        else{
            //NOT BLIND
            var teamName = (localStorage.getItem("danameyo")) ? localStorage.getItem("danameyo") : "no team";

            var map = 'vertigo';
            var RNGCHOICEBETWEENMAPS = [];

            for(let d = 0; d < BC.length; d++){

                switch(d){
                    case 0:
                        map = 'Dust2';
                        break;
                    case 1:
                        map = 'Mirage';
                        break;
                    case 2:
                        map = 'Nuke';
                        break;
                    case 3:
                        map = 'Ancient';
                        break;
                    case 4:
                        map = 'Train';
                        break;
                    case 5:
                        map = 'Inferno';
                        break;
                    case 6:
                        map = 'Anubis';
                        break;
                }
            }
        }
    }
    else{
        //bo1 bans
        if (BlindOrNot){
            //blind
            var map = 'vertigo';
            var index = "11";
            var RNGCHOICEBETWEENMAPS = [];
                            //PC AND BC USE D2,MIR,NUKE,ANCIENT,TRAIN,INFERNO,ANUBIS IN THAT ORDER
                            //EVERYTHING ELSE USES ANCIENT,ANUBIS,INFERNO,D2,MIRAGE,NUKE,VERTIGO,TRAIN
            for(let d = 0; d < BC.length; d++){

                switch(d){
                    case 0:
                        map = 'Dust2';
                        index = 3;
                        break;
                    case 1:
                        map = 'Mirage';
                        index = 4;
                        break;
                    case 2:
                        map = 'Nuke';
                        index = 5;
                        break;
                    case 3:
                        map = 'Ancient';
                        index = 0;
                        break;
                    case 4:
                        map = 'Train';
                        index = 7;
                        break;
                    case 5:
                        map = 'Inferno';
                        index = 2;
                        break;
                    case 6:
                        map = 'Anubis';
                        index = 1;
                        break;
                    }

                    if(maps.includes(map)){
                        /*
                        ban
                            - first ban: 100% ban the map that is the most banned
                                    - if multiple, check which one is playd the least

                            - mid-round bans:  out of the remaning maps: 
                                1) most banned + played 0 times
                                2) most banned + picked 0 times
                                3) most banned + played least
                                4) most banned  + lost most
                                            after checking all the maps
                                                put all top banned with a range of little played maps and do rng 
                            - final ban: 
                                - Win/Loss + Amount banned. which ever is higher ban that one.
                        */

                       var numOfHunded = [];

                        var topBanned= bans.indexOf(Math.max(...bans));
                                console.log(topBanned);
                        switch (numround){
                            case 1:
                                if (map === topBanned) {numOfHunded.push({map: map, played: played[index]})}
                                break;
                            case 2:
                                if (map === topBanned) {numOfHunded.push({map: map, played: played[index]})}
                                break; 
                            case 3:
                                if ((map === topBanned) && (played[index] === 0)){
                                   return maps.filter(name => name!== map);
                                }
                                else if((map === topBanned) && (picks[index] === 0)){
                                    return maps.filter(name => name!== map);
                                }
                                else{
                                    numOfHunded.push({map: map, played: played[index]});
                                }
                                break; 
                            case 4:
                                break; 
                            case 5:
                                break; 
                            case 6:
                                break; 
                            case 7:
                                break; 
                        }
                        if(d === BC.length-1){
                            if (numround < 2){
                                const leastPlayed = numOfHunded.reduce((min, current) => {
                                    return current.played < min.played ? current : min;
                                });
                                numOfHunded = [];
                                return maps.filter(name => name !== leastPlayed);

                            }
                            else{
                                /*
                                3) most banned + played least
                                4) most banned  + lost most
                                */
                            }
                            
                           
                        }
                        //if(BC[d]!== "0%") {RNGCHOICEBETWEENMAPS.push({map: map, chance: BC[d], index: d})};
                    }
                    
            }
            console.log(RNGCHOICEBETWEENMAPS.length);
            if(RNGCHOICEBETWEENMAPS.length > 0 && RNGCHOICEBETWEENMAPS){
                        console.log("SHIT");
                        console.log(RNGCHOICEBETWEENMAPS);
                        console.log(maps);  

                        var choice = weightedRandomChoice(RNGCHOICEBETWEENMAPS);

                        BC[choice.index] = "0%";
                        PC[choice.index] = "0%";
                        localStorage.setItem("BC",JSON.stringify(BC));
                        RNGCHOICEBETWEENMAPS = [];
                        return maps.filter(name => name!== choice.map);
                        

            }
            else{
                let RNG = Math.floor(Math.random()*maps.length);
                
                switch(maps[RNG]){
                    case "Dust2":
                    
                        BC[0] = "0%";
                        break;
                    case "Mirage":
                    
                        BC[1] = "0%";
                        break;
                    case "Nuke":
                    
                        BC[2] = "0%";
                        break;
                    case "Ancient":
                        
                        BC[3] = "0%";
                        break;
                    case "Train":
                        
                        BC[4] = "0%";
                        break;
                    case "Inferno":
                        
                        BC[5] = "0%";
                        break;
                    case "Anubis":
                        
                        BC[6] = "0%";
                        break;
                    }
                    localStorage.setItem("BC",JSON.stringify(BC));
                return maps.filter(name => name!== maps[RNG]);
            }   
        }// END OF BLIND
        else{
            //NOT BLIND
            var teamName = (localStorage.getItem("danameyo")) ? localStorage.getItem("danameyo") : "no team";

            var map = 'vertigo';
            var RNGCHOICEBETWEENMAPS = [];

            for(let d = 0; d < BC.length; d++){

                switch(d){
                    case 0:
                        map = 'Dust2';
                        break;
                    case 1:
                        map = 'Mirage';
                        break;
                    case 2:
                        map = 'Nuke';
                        break;
                    case 3:
                        map = 'Ancient';
                        break;
                    case 4:
                        map = 'Train';
                        break;
                    case 5:
                        map = 'Inferno';
                        break;
                    case 6:
                        map = 'Anubis';
                        break;
                }
            }
        }
        
    }
        
        
}
function PICK(maps, PC, bo3flag){

        var map = 'vertigo';
        var RNGCHOICEBETWEENMAPS = [];

        for(let d = 0; d < PC.length; d++){

            switch(d){
                case 0:
                    map = 'Dust2';
                    break;
                case 1:
                    map = 'Mirage';
                    break;
                case 2:
                    map = 'Nuke';
                    break;
                case 3:
                    map = 'Ancient';
                    break;
                case 4:
                    map = 'Train';
                    break;
                case 5:
                    map = 'Inferno';
                    break;
                case 6:
                    map = 'Anubis';
                    break;
                }

                if(maps.includes(map)){
                    console.log(PC[d]);
                    console.log(map);
                    console.log("---END OF MY ASSHOLE");
                    if(PC[d]!== "0%") {RNGCHOICEBETWEENMAPS.push({map: map, chance: PC[d], index: d})};
                            
                        
                }
                  
        }
        console.log(RNGCHOICEBETWEENMAPS.length);
        if(RNGCHOICEBETWEENMAPS.length > 0 && RNGCHOICEBETWEENMAPS){
                    console.log("SHIT");
                    console.log(RNGCHOICEBETWEENMAPS);
                    console.log(maps);  

                    var choice = weightedRandomChoice(RNGCHOICEBETWEENMAPS);

                    PC[choice.index] = "0%";
                    localStorage.setItem("PC",JSON.stringify(PC));
                    RNGCHOICEBETWEENMAPS = [];
                    return maps.filter(name => name!== choice.map);
                    

        }
        else{
            let RNG = Math.floor(Math.random()*maps.length);
            
            switch(maps[RNG]){
                case "Dust2":
                   
                    PC[0] = "0%";
                    break;
                case "Mirage":
                   
                    PC[1] = "0%";
                    break;
                case "Nuke":
                   
                    PC[2] = "0%";
                    break;
                case "Ancient":
                    
                    PC[3] = "0%";
                    break;
                case "Train":
                    
                    PC[4] = "0%";
                    break;
                case "Inferno":
                    
                    PC[5] = "0%";
                    break;
                case "Anubis":
                    
                    PC[6] = "0%";
                    break;
                }
                localStorage.setItem("PC",JSON.stringify(PC));
            return maps.filter(name => name!== maps[RNG]);
        }   
        
}
function bestof3(numround, maps,BC,PC,BlindOrNot){
    switch(numround){
        case 1:
            return BAN(maps,BC,true,BlindOrNot);
        case 2:
            return BAN(maps,BC,true,BlindOrNot);
        case 3:
            return PICK(maps,PC,true,BlindOrNot);
        case 4:
            return PICK(maps,PC,true,BlindOrNot);
        case 5:
            return BAN(maps,BC,true,BlindOrNot);
        case 6:
            return BAN(maps,BC,true,BlindOrNot);
        case 7:
            
       }

}
function bestof5(numround, maps){
    switch(numround){
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
        case 7:
            break;
        
    }

}
function weightedRandomChoice(choices) { 
    // Apply transformation to chance values
  const adjustedChoices = choices.map(item => {
    let rawChance = parseFloat(item.chance.replace('%', ''));
    
    // Penalize 25% heavily, others get exponentially weighted
    const adjustedChance = rawChance === 50 ? 1 : Math.pow(rawChance, 2);

    
    return {
      ...item,
      adjustedChance
    };
  });

 const total = adjustedChoices.reduce((sum, item) => sum + item.adjustedChance, 0);

  const rand = Math.random() * total;
  let cumulative = 0;

  for (const item of adjustedChoices) {
    cumulative += item.adjustedChance;
    if (rand < cumulative) {
      return {
        map: item.map, 
        index: item.index,
    };
    }
  }
}
function revertSimulator(){
    if(document.getElementById("mtches") && document.getElementById("quickInfo") && document.getElementById("allInfo") && document.getElementById("overallButtonDivider") && document.getElementById("graphdiv")){
        document.getElementById("mtches").style.opacity = "1";
        document.getElementById("mtches").style.pointerEvents = "auto";
        document.getElementById("quickInfo").style.opacity = "1";
        document.getElementById("quickInfo").style.pointerEvents = "auto";
        document.getElementById("allInfo").style.opacity = "1";
        document.getElementById("allInfo").style.pointerEvents = "auto";
        document.getElementById("overallButtonDivider").style.opacity = "1";
        document.getElementById("overallButtonDivider").style.pointerEvents = "auto";
        document.getElementById("graphdiv").style.opacity = "1";
        document.getElementById("graphdiv").style.pointerEvents = "auto";
        document.getElementById("banCommunication").remove();
        document.getElementById("teambackgrounddiv").style.width = "1260px";
        document.getElementById("teambackgrounddiv").style.height = "240px";
        document.getElementById("teambackgrounddiv").style.transform = "translateX(260px)";
        document.getElementById("teamBackground").style.width = "1260px";
        document.getElementById("teamBackground").style.height = "240px";
        document.getElementById("WHOLEPLAYERDIVIDER").style.width = "1260px";
        document.getElementById("WHOLEPLAYERDIVIDER").style.height = "240px";
        document.getElementById("WHOLEPLAYERDIVIDER").style.transform = "translate(-10px,-275px)";
        document.getElementById("h3").style.transform = "translate(600px, -40px)";




        
    }
    document.getElementById("banSimulator").onclick = banSimulatorr;
}





let lastClickTime = 0;
const clickDelay = 500; // 500ms delay
let shouldnotwork = false;
function fetchLast5Players(matchid, rcursivecall, callback){

    const now = Date.now();
    if (now - lastClickTime < clickDelay) return;
    lastClickTime = now;
    

var loadGears = "https://raw.githubusercontent.com/AtomicRecall/Cipher/refs/heads/main/images/gears.gif";
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
                if(document.getElementById("allInfo") && document.getElementById("allInfo").style.opacity === "0" && document.getElementById("EncompassingDivider")){
                    document.getElementById("EncompassingDivider").style.opacity = "1";

                }
                
                setTimeout(() => {
                    
                    if(document.getElementById("graphdiv").style.opacity === "0"){
                        if(document.getElementById("WHOLEPLAYERDIVIDER")){  
                            document.getElementById("WHOLEPLAYERDIVIDER").style.height = "50px";
                            document.getElementById("WHOLEPLAYERDIVIDER").style.transform = "translate(80px,-60px)";
                            document.getElementById("WHOLEPLAYERDIVIDER").style.gridAutoColumns = "min-content"; 
                            document.getElementById("WHOLEPLAYERDIVIDER").style.gap = "60px";
                    }
                        
                        for (var stuff of document.querySelectorAll("#PLAYERDIVIDER")){
                            if (stuff.querySelector(".TEAMPFP").src === "https://raw.githubusercontent.com/AtomicRecall/Cipher/refs/heads/main/images/gears.gif"){
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
            }
            });
            
        }
        
    }
        
        
    if (callback) callback();
    });
    
}
let counterrrr = 0;
function GetPlayerInfo(nick , iddd, div, callback){
    
    let pfp = document.createElement("img");
    //pfp.src = "https://raw.githubusercontent.com/AtomicRecall/Cipher/refs/heads/main/images/gears.gif";
    pfp.classList.add("TEAMPFP");
    pfp.classList.add("LOADING");
    pfp.style.pointerEvents = "none";
    //pfp.style.width = "120px";
    //pfp.style.height = "75px";
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
                pfp.src = "https://raw.githubusercontent.com/AtomicRecall/Cipher/refs/heads/main/images/DEFAULTT.jpg";
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
  
                    pfp.style.margin = "0px";
                    pfp.style.transform = "translate(10px,5px)";
                    name.style.fontSize = "11px";
                    name.style.transform = "translate(10px)";


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
            captain.src = "https://raw.githubusercontent.com/AtomicRecall/Cipher/refs/heads/main/images/CAPTAIN.png";
            captain.id = "captainforthatonethingy";

            //name.innerHTML = data.nickname;
            div.appendChild(name);
            switch(data.avatar){
                case undefined:
                    pfp.src = "https://raw.githubusercontent.com/AtomicRecall/Cipher/refs/heads/main/images/DEFAULTT.jpg"
                    break;
                case null:
                    pfp.src = "https://raw.githubusercontent.com/AtomicRecall/Cipher/refs/heads/main/images/DEFAULTT.jpg"
                    break;
                case "":
                    pfp.src = "https://raw.githubusercontent.com/AtomicRecall/Cipher/refs/heads/main/images/DEFAULTT.jpg"
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
          
           if (!allMatches || allMatches.length === 0 || offset >= 1000) return Promise.resolve(); // End if no more matches
    
            console.log(`Fetched ${allMatches.length} matches`);
            //console.log(allMatches);
            // Process each match and filter

            let matchPromises = allMatches.map((match) => {
                //update the loading bar here.
                
                var dating = new Date(match.finished_at*1000);
                //loadingbar.innerHTML+=match.competition_name+" - "+dating.getMonth()+"/"+dating.getDate()+" - "+dating.getHours()+":"+dating.getMinutes()+"<br>";
                //console.log(match.teams);
                if (match.competition_name.includes("ESEA") && !match.competition_name.includes("Qualifier")) {
                    console.log(match);
                    let teamsinmatch = match.teams;
                    //console.log(teamsinmatch);
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
                    if(finishedtext){
                        const audio = new Audio('https://raw.githubusercontent.com/AtomicRecall/Cipher/refs/heads/main/sounds/hint.wav');
                        audio.volume = 0.1;
                        if(!allsoundsmuted){
                            audio.play();
                           }
                        finishedtext.innerHTML+=match.competition_name+" - "+(dating.getMonth()+1)+"/"+dating.getDate()+" - "+((dating.getHours() < 10) ? 0+dating.getHours().toString() : dating.getHours())+":"+((dating.getMinutes() < 10) ? 0+dating.getMinutes().toString() : dating.getMinutes())+"<br>";

                    }
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
        let type = (division.includes("Playoffs")) ? "Playoffs" : "Regular Season";
        console.log(division);

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
        let poopcockvagina = database.ref("championshipIDS/Season "+season+"/"+type+"/"+division).on('value', function(snapshot){
            var data = snapshot.val();
            //console.log(data);  
            if (data === null || data !== datan12.competition_id){
                const wherefoldergoes = database.ref("championshipIDS/Season "+season+"/"+type);
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
    THEFINALARRAYISWEAR = dapicksanddabans;
    document.body.style.cursor = "auto";
    document.getElementById("teambackgrounddiv").style.opacity = "1";
    var audio = new Audio('https://raw.githubusercontent.com/AtomicRecall/Cipher/refs/heads/main/sounds/bell1.wav');
    if(!allsoundsmuted){
        audio.volume = 0.1;
        audio.play();
       } 
    
    let recorddiv = document.createElement("div");
    recorddiv.style.display = "grid";
    recorddiv.style.gridAutoFlow = "column";
    recorddiv.style.color = "white";
    recorddiv.style.transform = "translate(-25px,-115px)";
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
            fetchLast5Players(dapicksanddabans[d].vote_type, false, () => {
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
                                played[6]= played[6]+1;
                                W[6] = W[6]+1;
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

                            default:
                                break;
                        }
                        break;
                    default:
                       // console.log("we lost "+dapicksanddabans[d].detailed_results[j+1]);
                        switch(String(dapicksanddabans[d].detailed_results[j+1])){
                            case "de_train":
                                played[6]= played[6]+1;
                                L[6] = L[6]+1;
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
                            picks[6]= picks[6]+1;
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
                            bans[6]= bans[6]+1;
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
                var ancientdiv = document.createElement("div");
                ancientdiv.id = "ancientdiv";
                ancientdiv.classList.add("allInfoDivs");
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
                
                ancientdiv.appendChild(ancimage);
                DAancient.appendChild(mapidentifier);
                DAancient.appendChild(ancpics);
                DAancient.appendChild(ancbans);
                DAancient.appendChild(ancW);
                //DAancient.appendChild(ancimage);
                ancientdiv.appendChild(DAancient);
                allInfoDivider.appendChild(ancientdiv);
               // console.log("Banned ancient "+bans[0]+" times");
               // console.log("Played ancient "+played[0]+" times");
                break;
            //anu
            case 1:
                var anubisdiv = document.createElement("div");
                anubisdiv.id = "anubisdiv";
                anubisdiv.classList.add("allInfoDivs");
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
                let anuW = document.createElement("div");
                anuW.classList.add("winnerdiv");
                anuW.innerHTML = '<span class="greenn1">'+W[1]+'</span><span class = "white"> // </span> <span class="redd1">'+L[1];

                anubisdiv.appendChild(anuimage);
                DAanubis.appendChild(mapidentifier1);
                DAanubis.appendChild(anupics);
                DAanubis.appendChild(anubans);
                DAanubis.appendChild(anuW);
                anubisdiv.appendChild(DAanubis);
                allInfoDivider.appendChild(anubisdiv);
              //  console.log("Banned anubis "+bans[1]+" times");
              //  console.log("Played anubis "+played[1]+" times");
                break;
            //inf
            case 2:
                var infdiv = document.createElement("div");
                infdiv.id = "infernodiv";
                infdiv.classList.add("allInfoDivs");
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

                infdiv.appendChild(infimage);
                DAinf.appendChild(mapidentifier2);
                DAinf.appendChild(infpics);
                DAinf.appendChild(infbans);
                DAinf.appendChild(infW);
                infdiv.appendChild(DAinf);
                allInfoDivider.appendChild(infdiv);
              //  console.log("Banned inferno "+bans[2]+" times");
             //   console.log("Played inferno "+played[2]+" times");
                break; 
            //d2
            case 3:
                var dust2div = document.createElement("div");
                dust2div.id = "dust2div";
                dust2div.classList.add("allInfoDivs");

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

                dust2div.appendChild(d2image);
                DAd2.appendChild(mapidentifier3);
                DAd2.appendChild(d2pics);
                DAd2.appendChild(d2bans);

                DAd2.appendChild(d2W);
                dust2div.appendChild(DAd2);
                allInfoDivider.appendChild(dust2div);
              //  console.log("Banned dust 2 "+bans[3]+" times");
             //   console.log("Played dust 2 "+played[3]+" times");
                break; 
            //mir
            case 4:
                var miragediv = document.createElement("div");
                miragediv.id = "miragediv";
                miragediv.classList.add("allInfoDivs");

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

                miragediv.appendChild(mirimage);
                movementdivider.appendChild(mapidentifier4);
                movementdivider.appendChild(mirpics);
                movementdivider.appendChild(mirbans);
                movementdivider.appendChild(mirW);
                miragediv.appendChild(movementdivider);
                //movementdivider.style.transform = "translate(250px, -495px)";
                miragediv.appendChild(DAmir);
                allInfoDivider.appendChild(miragediv);
             //   console.log("Banned mirage "+bans[4]+" times");
            //    console.log("Played mirage "+played[4]+" times");
                break; 
            //nuk 
            case 5:
                var nukediv = document.createElement("div");
                nukediv.id = "nukediv";
                nukediv.classList.add("allInfoDivs");
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
                nukediv.appendChild(nukimage);
                movementdivider1.appendChild(mapidentifier5);
                movementdivider1.appendChild(nupics);
                movementdivider1.appendChild(nubans);

                movementdivider1.appendChild(nuW);
                //movementdivider1.style.transform = "translate(250px, -495px)";
                DAnuk.appendChild(movementdivider1);
                nukediv.appendChild(DAnuk);
                allInfoDivider.appendChild(nukediv);
             //   console.log("Banned nuke "+bans[5]+" times");
              //  console.log("Played nuke "+played[5]+" times");
                break; 
            //ver    
            case 6:
                var verdiv = document.createElement("div");
                verdiv.id = "vertigodiv";
                verdiv.classList.add("allInfoDivs");
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
                verdiv.appendChild(verimage);
                movementdivider2.appendChild(mapidentifier6);
                movementdivider2.appendChild(verpics);
                movementdivider2.appendChild(verbans);
                movementdivider2.appendChild(verW);
                //movementdivider2.style.transform = "translate(250px, -495px)";
                DAver.appendChild(movementdivider2);
                verdiv.appendChild(DAver);
                allInfoDivider.appendChild(verdiv);
              //  console.log("Banned vertigo "+bans[6]+" times");
              //  console.log("Played vertigo "+played[6]+" times");
                break; 
                
            case 7:
                var traindiv = document.createElement("div");
                traindiv.id = "traindiv";
                traindiv.classList.add("allInfoDivs");
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
                trainbans.innerHTML = '<span class="redd">Banned '+'</span><span class="white">'+bans[6]+((bans[6] > 1|| bans[6] == 0) ? " times" : " time")+".";
                let trainpics = document.createElement("div");
                trainpics.innerHTML = '<span class="greenn">Picked '+'</span><span class="white">'+picks[6]+((picks[6] > 1|| picks[6] == 0) ? " times" : " time")+".";
                let trainplay = document.createElement("div");
                trainplay.innerHTML = '<span class="greenn">Played '+'</span><span class="white">'+played[6]+((played[6] > 1|| played[6] == 0) ? " times" : " time")+".";
                let trainW = document.createElement("div");
                trainW.classList.add("winnerdiv");
                trainW.innerHTML = '<span class="greenn1">'+W[6]+'</span><span class = "white"> // </span> <span class="redd1">'+L[6];
                traindiv.appendChild(trainimage);
                movementdivider3.appendChild(mapidentifier7);
                movementdivider3.appendChild(trainpics);
                movementdivider3.appendChild(trainbans);
                movementdivider3.appendChild(trainW);
                //movementdivider2.style.transform = "translate(250px, -495px)";
                DAtrain.appendChild(movementdivider3);
                traindiv.appendChild(DAtrain)
                allInfoDivider.appendChild(traindiv);
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
    //console.log("d is "+dapicksanddabans.length);
    record.innerHTML = "| S"+((dapicksanddabans[dapicksanddabans.length-1] && dapicksanddabans[dapicksanddabans.length-1] !== undefined) ? dapicksanddabans[dapicksanddabans.length-1].season : currentseason)+'<span style="color: wheat;">'+" "+((dapicksanddabans[dapicksanddabans.length-1] && dapicksanddabans[dapicksanddabans.length-1] !== undefined) ? dapicksanddabans[dapicksanddabans.length-1].division : "FART")+'</span>'+": "+'<span style="color: green;">'+wins+'</span>'+' / '+'<span style="color: red;">'+loss+'</span>'+" | ";
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
    overallButtonDivider.id = "overallButtonDivider";
    if(!something){
       // console.log(childdddrr);
        for(const childs of childdddrr){
         if (childs.id.includes("ssnNum")){
            //console.log(String(childs.innerHTML).substring(18));
             createToggle(overallButtonDivider, String(childs.innerHTML).substring(15,18));
            }
        }

        document.getElementById(".BanFileExplorer").append(overallButtonDivider);

        //1234

        //ANCIENT
        /*
        '<span class="redd">Banned '+'</span><span class="white">'+bans[0]+((bans[0] > 1|| bans[0] == 0) ? " times" : " time")+".";
        '<span class="greenn">Picked '+'</span><span class="white">'+picks[0]+((picks[0] > 1|| picks[0] == 0) ? " times" : " time")+".";
        '<span class="greenn">Played '+'</span><span class="white">'+played[0]+((played[0] > 1|| played[0] == 0) ? " times" : " time")+".";
        '<span class="greenn1">'+W[0]+'</span><span class = "white"> // </span> <span class="redd1">'+L[0];
        

        //ANUBIS
        '<span class="redd">Banned '+'</span><span class="white">'+bans[1]+((bans[1] > 1|| bans[1] == 0) ? " times" : " time")+".";
        '<span class="greenn">Picked '+'</span><span class="white">'+picks[0]+((picks[0] > 1|| picks[0] == 0) ? " times" : " time")+".";
         '<span class="greenn">Played '+'</span><span class="white">'+played[1]+((played[1] > 1|| played[1] == 0) ? " times" : " time")+".";
         '<span class="greenn1">'+W[1]+'</span><span class = "white"> // </span> <span class="redd1">'+L[1];

         //INFERNO
         '<span class="redd">Banned '+'</span><span class="white">'+bans[2]+((bans[2] > 1|| bans[2] == 0) ? " times" : " time")+".";
         '<span class="greenn">Picked '+'</span><span class="white">'+picks[2]+((picks[2] > 1|| picks[2] == 0) ? " times" : " time")+".";
         '<span class="greenn">Played '+'</span><span class="white">'+played[2]+((played[2] > 1|| played[2] == 0) ? " times" : " time")+".";
         '<span class="greenn1">'+W[2]+'</span><span class = "white"> // </span> <span class="redd1">'+L[2];

         //D2
         '<span class="redd">Banned '+'</span><span class="white">'+bans[3]+((bans[3] > 1|| bans[3] == 0) ? " times" : " time")+".";
         '<span class="greenn">Picked '+'</span><span class="white">'+picks[3]+((picks[3] > 1|| picks[3] == 0) ? " times" : " time")+".";
         '<span class="greenn">Played '+'</span><span class="white">'+played[3]+((played[3] > 1|| played[3] == 0) ? " times" : " time")+".";
         '<span class="greenn1">'+W[3]+'</span><span class = "white"> // </span> <span class="redd1">'+L[3];

         //MIRAGE
         '<span class="redd">Banned '+'</span><span class="white">'+bans[4]+((bans[4] > 1|| bans[4] == 0) ? " times" : " time")+".";
         '<span class="greenn">Picked '+'</span><span class="white">'+picks[4]+((picks[4] > 1|| picks[4] == 0) ? " times" : " time")+".";
         '<span class="greenn">Played '+'</span><span class="white">'+played[4]+((played[4] > 1|| played[4] == 0) ? " times" : " time")+".";
         '<span class="greenn1">'+W[4]+'</span><span class = "white"> // </span> <span class="redd1">'+L[4];

         //NUKE
         '<span class="redd">Banned '+'</span><span class="white">'+bans[5]+((bans[5] > 1|| bans[5] == 0) ? " times" : " time")+".";
         '<span class="greenn">Picked '+'</span><span class="white">'+picks[5]+((picks[5] > 1|| picks[5] == 0) ? " times" : " time")+".";
         '<span class="greenn">Played '+'</span><span class="white">'+played[5]+((played[5] > 1|| played[5] == 0) ? " times" : " time")+".";
         '<span class="greenn1">'+W[5]+'</span><span class = "white"> // </span> <span class="redd1">'+L[5];

         //VERTIGO
         '<span class="redd">Banned '+'</span><span class="white">'+bans[6]+((bans[6] > 1|| bans[6] == 0) ? " times" : " time")+".";
         '<span class="greenn">Picked '+'</span><span class="white">'+picks[6]+((picks[6] > 1|| picks[6] == 0) ? " times" : " time")+".";
         '<span class="greenn">Played '+'</span><span class="white">'+played[6]+((played[6] > 1|| played[6] == 0) ? " times" : " time")+".";
         '<span class="greenn1">'+W[6]+'</span><span class = "white"> // </span> <span class="redd1">'+L[6];

         //TRAIN    
         '<span class="redd">Banned '+'</span><span class="white">'+bans[7]+((bans[7] > 1|| bans[7] == 0) ? " times" : " time")+".";
         '<span class="greenn">Picked '+'</span><span class="white">'+picks[7]+((picks[7] > 1|| picks[7] == 0) ? " times" : " time")+".";
         '<span class="greenn">Played '+'</span><span class="white">'+played[7]+((played[7] > 1|| played[7] == 0) ? " times" : " time")+".";
         '<span class="greenn1">'+W[7]+'</span><span class = "white"> // </span> <span class="redd1">'+L[7];
         
        */
         function formatDate(date) {
            const now = new Date(date);
          
            const day = String(now.getDate()).padStart(2, '0');
            const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
            const year = now.getFullYear();
          
            let hours = now.getHours();
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
          
            const formattedDate = `${month}-${day}-${year} ${hours}:${minutes}:${seconds} ${ampm}`;
            return formattedDate;
          }
        var teaman = localStorage.getItem("THETEAMWEARESEARCHINGNAME");
        var reff = firebase.database().ref('/DATABASE/TEAMS/'+teaman);
        reff.update({             
            BANS: bans,
            PICKS: picks,
            PLAYED: played,
            LOST: L,
            WON: W,
            teamID: localStorage.getItem("THETEAMWEARESEARCHING"),
            lastMatchTime: dapicksanddabans[dapicksanddabans.length-1].finished,
            mostRecentMatchTime : dapicksanddabans[0].finished,
            lastUserToUpdateInformation: localStorage.getItem("faceit-name"),
            lastTimeUpdated: formatDate(Date.now()),
        })

       // console.log(dapicksanddabans);
        //console.log(bans);
        //console.log(picks);
        //console.log(played);
        //console.log(L);
        //console.log(W);

        var bool = true;
        document.querySelectorAll("#label").forEach(el=>{if(Number(el.innerHTML.substring(1)) < 52)bool=false;});

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
                    var audio = new Audio('https://raw.githubusercontent.com/AtomicRecall/Cipher/refs/heads/main/sounds/buttonclickrelease.wav');
                    document.getElementById("banSimulator").style.opacity = "0";
                     document.getElementById("banSimulator").style.pointerEvents = "none";
                    if(!allsoundsmuted){
                        audio.volume = 0.5;
                        audio.play();
                       }
                    if(document.getElementById("graphdiv")){
                        document.getElementById("graphdiv").style.opacity = "0";
                        document.getElementById("overallButtonDivider").style.transform = "translate(1500px,580px)";

                    }
                    document.getElementById("quickInfo").style.transform = "translate(260px,50px)";
                    document.getElementById("teambackgrounddiv").style.height = "50px";
                    document.getElementById("teambackgrounddiv").querySelector("#teamBackground").style.height = "50px";

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
                        document.getElementById("graphdiv").style.opacity = "0";
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
                            score.style.cursor = "pointer";
                            
                            if (document.getElementById("quickInfo").querySelectorAll('.scoreinthescore').length === 1){
                                return;
                            }
                            if(!scoreclicked){
                                //if no scores are clicked
                                score.style.filter = "drop-shadow(1px 1px 3px white)";
                            }

                        }
                        score.onmouseout = function(){
                            score.style.cursor = "default";

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
                        document.getElementById("overallButtonDivider").style.transform = "translate(1090px,580px)";
                        document.querySelector("#quickInfo").querySelectorAll(".scoreinthescore").forEach(el=>{el.style.transform = "translate(360px,-450px)"});

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

                   //moreclicks = 0;
                    if (!reverseclick){
                        fetchLast5Players(dapicksanddabans[d].vote_type, true);
                    }
          
                    
                    if (document.getElementById("RECORDDD")){
                        document.getElementById("RECORDDD").style.opacity = "0";
                    }
                    document.getElementById("overallButtonDivider").style.transform = "translate(1500px,580px)";

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

                    document.getElementById("quickInfo").style.transform = "translate(260px,245px)";
                    document.getElementById("teambackgrounddiv").style.height = "240px";
                    document.getElementById("teambackgrounddiv").querySelector("#teamBackground").style.height = "240px";
                    document.getElementById("banSimulator").style.opacity = "1";
                     document.getElementById("banSimulator").style.pointerEvents = "auto";
                    var audio = new Audio('https://raw.githubusercontent.com/AtomicRecall/Cipher/refs/heads/main/sounds/freeze_cam.wav');
                    audio.volume = 0.2;
                    if(!allsoundsmuted){
                        audio.play();
                       }
                    if(document.getElementById("h3").querySelector("#teamPfp")){
                    document.getElementById("h3").querySelector("#teamPfp").style.height = "30px";
                    document.getElementById("h3").querySelector("#teamPfp").style.width = "30px";
                    }
                    document.getElementById("h3").style.transform = "translate(600px,-40px)";
                    document.getElementById("allInfo").style.transform = "translate(260px,300px)";
                    document.getElementById("graphdiv").style.transform = "translate(250px, 290px)";

                    //console.log("running fetchlast5 from firstmatch id");
                    fetchLast5Players(firstMatchID,true,()=>{
                        document.getElementById("WHOLEPLAYERDIVIDER").style.transform = "translate(-10px,-250px)";

                    });

                    //console.log("changing visibility");
                    document.getElementById("allInfo").style.transition = ".3s";
                    document.getElementById("allInfo").style.opacity = "1";
                    document.getElementById("graphdiv").style.opacity = "1";
                    document.getElementById("overallButtonDivider").style.transform = "translate(1090px,580px)";


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

                    info.innerHTML = "";
                    const myNode = document.getElementById("quickInfo");
                    while (myNode.firstChild) {
                        myNode.removeChild(myNode.lastChild);
                    }
                
                    document.getElementById("game"+d).style.webkitFilter = " ";
                    moreclicks = 0;
                }
                if(document.getElementById("EncompassingDivider")){
                    document.getElementById("EncompassingDivider").style.transform = "translate(755px,-718px)";

                }
  
            }
 

            document.getElementById("game"+d).onmouseover = function(){


                if (!dividerclicked){
                    const audio = new Audio('https://raw.githubusercontent.com/AtomicRecall/Cipher/refs/heads/main/sounds/flashlight1.wav');
                    audio.volume = 0.5;
                    if(!allsoundsmuted){
                        audio.play();
                       }
                quickInfoDivider.innerHTML = dapicksanddabans[d].compname;
                if (moreclicks > 0 && moreclicks < 2){
                    document.getElementById("game"+d).style.webkitFilter = "drop-shadow(0px 0px 10px orange)";
                }
                else{
                    document.getElementById("game"+d).style.webkitFilter = "drop-shadow(0px 0px 10px white)";
                    //document.getElementById("game"+d).style.cursor = "pointer";
                }
                        
                        
                    document.getElementById("graphdiv").style.transform = "translate(775px, 290px)";
                    document.getElementById("allInfo").style.transform = "translate(775px,300px)";
                    document.getElementById("overallButtonDivider").style.transform = "translate(1500px,580px)";
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
                    document.getElementById("graphdiv").style.transform = "translate(250px, 290px)";
                    document.getElementById("graphdiv").style.opacity = "1";

                }

                document.getElementById("overallButtonDivider").style.transform = "translate(1090px,580px)";


            info.innerHTML = "";
            const myNode = document.getElementById("quickInfo");
            while (myNode.firstChild) {
                myNode.removeChild(myNode.lastChild);
            }
            
            
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
    Bars.innerHTML = "Bars";
    Bars.onclick = function(){
        var incrementCounter = firebase.database().ref('/USERS/');
        incrementCounter.update({
            TimesUserUsedBar: firebase.database.ServerValue.increment(1)
        });
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
        var incrementCounter = firebase.database().ref('/USERS/');
        incrementCounter.update({
            TimesUserUsedDoughnut: firebase.database.ServerValue.increment(1)
        });
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
        var incrementCounter = firebase.database().ref('/USERS/');
        incrementCounter.update({
            TimesUserUsedPolar: firebase.database.ServerValue.increment(1)
        });
       // console.log(document.getElementById("graph").classList[0]);
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
    //newgraph.appendChild(Bars);
    //newgraph.appendChild(Doughnut);
    //newgraph.appendChild(Polar);
   // newgraph.appendChild(titlebutalsobutton);
   createBannedChart();
   createPickChart();
   createChart();
   createWinsChart();
   createLossChart();
   
   
   
    var incrementCounter = firebase.database().ref('/USERS/');
    incrementCounter.update({
        TimesUserUsedBar: firebase.database.ServerValue.increment(1)
    });
    
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
   grph.style.transform = "translateY(-53px)";

    var yArray = [played[6], played[4], played[2], played[1], played[5],played[3],played[0]];
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
        //(grph.height);
        if(chartHeight <= 100){
            grph.height = 150;
        }
    }
    else{
        grph.height = 350;

    }
    grph.height = 330;

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
                hover: {
                    onHover: function(event, activeElements) {
                      if (activeElements && activeElements.length) {
                        var datasetIndex = activeElements[0]._datasetIndex;
                        var index = activeElements[0]._index;
                        var label = this.data.labels[index];
                        var value = this.data.datasets[datasetIndex].data[index];
                
                        //("You hovered over:", label);
                        document.getElementById("allInfo").style.opacity = "1";
                        label = (label === "Dust II") ? "dust2" : String(label.toLowerCase());
                        
        

                       
                            document.getElementById(`${label}div`).style.transform = "translate(950px,330px)";
                 
                    
                        document.getElementById(`${label}div`).style.opacity = "1";
                        document.getElementById(`${label}div`).style.transtion = "0.5s";
        
                        // Example: change cursor to pointer
                        event.target.style.cursor = 'pointer';
                      } else {
                        // Not hovering anything
                        document.getElementById("allInfo").style.opacity = "0"
                        document.querySelectorAll(".allInfoDivs").forEach(el=>{
                            el.style.opacity = "0";
                            
                        });
                        event.target.style.cursor = 'default';
                      }
                    }
                  },
                plugins: {
                    datalabels: {
                      color: "black",
                      anchor: 'center',
                      align: 'center',
                        font: function(context) {
                    const value = context.dataset.data[context.dataIndex];
                    const maxValue = Math.max(...context.dataset.data);
                    
                    // Scale font size between 10 and 18 based on the value
                    const minSize = 10;
                    const maxSize = 18;
                    const size = minSize + (value / maxValue) * (maxSize - minSize);
                    
                    return {
                        size: size,
                        family: "'Play', sans-serif",
                        weight: 'bold'
                    };
                    },
                    formatter: function(value, context) {
                        const data = context.dataset.data;
                        const maxValue = Math.max(...data);
                        const minValue = Math.min(...data);
                
                        // Customize your thresholds here
                        const maxThreshold = 10;
                        const minThreshold = 5;
                
                        if (maxValue >= maxThreshold && value <= minThreshold) {
                        // If big numbers everywhere, just show the number
                        return value;
                        } else {
                        // Otherwise, show the map name
                        return context.chart.data.labels[context.dataIndex]+": "+value;
                        }
                    },

                      textShadowColor: barColors
                    }
                  },
                legend: {display: false},
                title:{

                    display: true,
                    text: "Distribution Of Played Maps",
                    fontColor: "white",
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
                        display: false,
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
            },
            plugins: [ChartDataLabels] // Register the plugin
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
      grph.style.transform = "translate(-800px,-53px)";
    var yArray = [W[6], W[4], W[2], W[1], W[5],W[3],W[0]];
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
    grph.height = 300;

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
                hover: {
                    onHover: function(event, activeElements) {
                      if (activeElements && activeElements.length) {
                        var datasetIndex = activeElements[0]._datasetIndex;
                        var index = activeElements[0]._index;
                        var label = this.data.labels[index];
                        var value = this.data.datasets[datasetIndex].data[index];
                
                        //console.log("You hovered over:", label);
                        document.getElementById("allInfo").style.opacity = "1";
                        label = (label === "Dust II") ? "dust2" : String(label.toLowerCase());
                        document.getElementById(`${label}div`).style.transform = "translate(810px,-7px)";

                        document.querySelectorAll("#graph").forEach(el=>{el.style.opacity = (el.classList.contains("Default") ? "0" : "1")});

                        document.getElementById(`${label}div`).style.opacity = "1";
                        document.getElementById(`${label}div`).style.transtion = "0.5s";
        
                        // Example: change cursor to pointer
                        event.target.style.cursor = 'pointer';
                      } else {
                        // Not hovering anything
                        document.getElementById("allInfo").style.opacity = "0"
                        document.querySelectorAll("#graph").forEach(el=>{el.style.opacity = "1"});
                        document.querySelectorAll(".allInfoDivs").forEach(el=>{
                            el.style.opacity = "0";
                            
                        });
                        event.target.style.cursor = 'default';
                      }
                    }
                  },
                plugins: {
                    datalabels: {
                      color: "black",
                      anchor: 'center',
                      align: 'center',
                      font: function(context) {
                        const value = context.dataset.data[context.dataIndex];
                        const maxValue = Math.max(...context.dataset.data);
                        
                        // Scale font size between 10 and 18 based on the value
                        const minSize = 10;
                        const maxSize = 18;
                        const size = minSize + (value / maxValue) * (maxSize - minSize);
                        
                        return {
                          size: size,
                          family: "'Play', sans-serif",
                          weight: 'bold'
                        };
                      },
                      formatter: function(value, context) {
                        const data = context.dataset.data;
                        const maxValue = Math.max(...data);
                        const minValue = Math.min(...data);
                  
                        // Customize your thresholds here
                        const maxThreshold = 9;
                        const minThreshold = 2;
                  
                        if (maxValue >= maxThreshold && value <= minThreshold) {
                          // If big numbers everywhere, just show the number
                          return value;
                        } else {
                          // Otherwise, show the map name
                          return context.chart.data.labels[context.dataIndex]+": "+value;
                        }
                      },
                      textShadowColor: barColors
                    }
                  },
                legend: {display: false},
                title:{

                    display: true,
                    text: "Distribution Of Map Wins",
                    fontColor: "#72ff72",
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
                        display: false,

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
            },
            plugins: [ChartDataLabels] // Register the plugin
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
      grph.style.transform = "translate(-1190px,230px)";
    var yArray = [L[6], L[4], L[2], L[1], L[5],L[3],L[0]];
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
   // console.log(chartHeight);
    if (!type){
        grph.height = chartHeight;
        if(chartHeight <= 100){
            grph.height = 150;
        }
    }
    else{
        grph.height = 250;

    }
    grph.height = 250;
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
                hover: {
                    onHover: function(event, activeElements) {
                      if (activeElements && activeElements.length) {
                        var datasetIndex = activeElements[0]._datasetIndex;
                        var index = activeElements[0]._index;
                        var label = this.data.labels[index];
                        var value = this.data.datasets[datasetIndex].data[index];
                
                     //   console.log("You hovered over:", label);
                        document.getElementById("allInfo").style.opacity = "1";
                        label = (label === "Dust II") ? "dust2" : String(label.toLowerCase());
                        
        

                    
                            document.getElementById(`${label}div`).style.transform = "translate(950px,330px)";
                 
                        
                        document.getElementById(`${label}div`).style.opacity = "1";
                        document.getElementById(`${label}div`).style.transtion = "0.5s";
        
                        // Example: change cursor to pointer
                        event.target.style.cursor = 'pointer';
                      } else {
                        // Not hovering anything
                        document.getElementById("allInfo").style.opacity = "0"
                        document.querySelectorAll(".allInfoDivs").forEach(el=>{
                            el.style.opacity = "0";
                            
                        });
                        event.target.style.cursor = 'default';
                      }
                    }
                  },
                plugins: {
                    datalabels: {
                      color: "black",
                      anchor: 'center',
                      align: 'center',
                      font: function(context) {
                        const value = context.dataset.data[context.dataIndex];
                        const maxValue = Math.max(...context.dataset.data);
                        
                        // Scale font size between 10 and 18 based on the value
                        const minSize = 10;
                        const maxSize = 18;
                        const size = minSize + (value / maxValue) * (maxSize - minSize);
                        
                        return {
                          size: size,
                          family: "'Play', sans-serif",
                          weight: 'bold'
                        };
                      },
                      formatter: function(value, context) {
                        const data = context.dataset.data;
                        const maxValue = Math.max(...data);
                        const minValue = Math.min(...data);
                  
                        // Customize your thresholds here
                        const maxThreshold = 11;
                        const minThreshold = 2;
                  
                        if (maxValue >= maxThreshold && value <= minThreshold) {
                          // If big numbers everywhere, just show the number
                          return value;
                        } else {
                          // Otherwise, show the map name
                          return context.chart.data.labels[context.dataIndex]+": "+value;
                        }
                      },
                      textShadowColor: barColors
                    }
                  },
                legend: {display: false},
                title:{

                    display: true,
                    text: "Distribution Of Map Losses",
                    fontColor: "red",
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
                        display:false,

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
            },
            plugins: [ChartDataLabels] // Register the plugin
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
    grph.style.transform = "translateY(-53px)";
    var yArray = [bans[6], bans[4], bans[2], bans[1], bans[5],bans[3],bans[0]];
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
   // console.log(chartHeight);
    if (!type){
        grph.height = chartHeight;
        if(chartHeight <= 100){
            grph.height = 150;
        }
    }
    else{
        grph.height = 350;

    }
    grph.height = 350;
    new Chart(grph, {
        type: (type) ? type : "horizontalBar",
        data: {
          labels: xArray,
          datasets: [{
            backgroundColor: barColors,
            data: yArray,
            borderWidth: 1,
            barPercentage: 0.6,
            categoryPercentage: 0.6
          }]
        },
        options: {
          responsive: false,
          maintainAspectRatio: false,
          legend: { display: false },
          hover: {
            onHover: function(event, activeElements) {
              if (activeElements && activeElements.length) {
                var datasetIndex = activeElements[0]._datasetIndex;
                var index = activeElements[0]._index;
                var label = this.data.labels[index];        
              //  console.log("You hovered over:", label);
                document.getElementById("allInfo").style.opacity = "1";
                label = (label === "Dust II") ? "dust2" : String(label.toLowerCase());
                
              
                    
         
        
                document.getElementById(`${label}div`).style.opacity = "1";
                document.getElementById(`${label}div`).style.transtion = "0.5s";
                document.getElementById(`${label}div`).style.transform = "translate(420px,-7px)";
                document.querySelectorAll("#graph").forEach(el=>{el.style.opacity = (el.classList.contains("Wins") ? "0" : "1")});
                // Example: change cursor to pointer
                event.target.style.cursor = 'pointer';
              } else {
                // Not hovering anything
                document.getElementById("allInfo").style.opacity = "0"
                document.querySelectorAll(".allInfoDivs").forEach(el=>{
                    el.style.opacity = "0";
                    
                });
                document.querySelectorAll("#graph").forEach(el=>{el.style.opacity = "1"
                    el.style.transform = "1s";
                });

                event.target.style.cursor = 'default';
              }
            }
          },
          title: {
            display: true,
            text: "Distribution Of Map Bans",
            fontColor: "red",
            fontSize: 30,
            fontFamily: "'Play', sans-serif",
            fontStyle: 'bold'
          },
          layout: {
            padding: { top: 0, bottom: 0, left: 0, right: 0 }
          },
          plugins: {
            datalabels: {
              color: "black",
              anchor: 'center',
              align: 'center',
              font: function(context) {
                const value = context.dataset.data[context.dataIndex];
                const maxValue = Math.max(...context.dataset.data);
                
                // Scale font size between 10 and 18 based on the value
                const minSize = 10;
                const maxSize = 18;
                const size = minSize + (value / maxValue) * (maxSize - minSize);
                
                return {
                  size: size,
                  family: "'Play', sans-serif",
                  weight: 'bold'
                };
              },
              formatter: function(value, context) {
                const data = context.dataset.data;
                const maxValue = Math.max(...data);
                const minValue = Math.min(...data);
          
                // Customize your thresholds here
                const maxThreshold = 14;
                const minThreshold = 5;
          
                if (maxValue >= maxThreshold && value <= minThreshold) {
                  // If big numbers everywhere, just show the number
                  return value;
                } else {
                  // Otherwise, show the map name
                  return context.chart.data.labels[context.dataIndex]+": "+value;
                }
              },
              textShadowColor: barColors
            }
          },
          scales: {
            xAxes: [{
              display: false,
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
        },
        plugins: [ChartDataLabels] // Register the plugin
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
    grph.style.transform = "translate(-400px,285px)";

    var yArray = [picks[6], picks[4], picks[2], picks[1], picks[5],picks[3],picks[0]];
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
   // console.log(chartHeight);
    if (!type){
        grph.height = chartHeight;
        if(chartHeight <= 100){
            grph.height = 150;
        }
    }
    else{
        grph.height = 350;

    }
   grph.height = 200;
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
                hover: {
                    onHover: function(event, activeElements) {
                      if (activeElements && activeElements.length) {
                        var datasetIndex = activeElements[0]._datasetIndex;
                        var index = activeElements[0]._index;
                        var label = this.data.labels[index];
                        var value = this.data.datasets[datasetIndex].data[index];
                
                       // console.log("You hovered over:", label);
                        document.getElementById("allInfo").style.opacity = "1";
                        label = (label === "Dust II") ? "dust2" : String(label.toLowerCase());
                        
    
                        document.getElementById(`${label}div`).style.transform = "translate(420px,331px)";
                        document.getElementById(`${label}div`).style.opacity = "1";
                        document.getElementById(`${label}div`).style.transtion = "0.5s";
                        document.querySelectorAll("#graph").forEach(el=>{el.style.opacity = (el.classList.contains("Loss") ? "0" : "1")});

                        // Example: change cursor to pointer
                        event.target.style.cursor = 'pointer';
                      } else {
                        // Not hovering anything
                        document.getElementById("allInfo").style.opacity = "0"
                        document.querySelectorAll(".allInfoDivs").forEach(el=>{
                            el.style.opacity = "0";
                            
                        });
                        document.querySelectorAll("#graph").forEach(el=>{el.style.opacity = "1"});

                        event.target.style.cursor = 'default';
                      }
                    }
                  },
                plugins: {
                    datalabels: {
                      color: "black",
                      anchor: 'center',
                      align: 'center',
                      font: function(context) {
                        const value = context.dataset.data[context.dataIndex];
                        const maxValue = Math.max(...context.dataset.data);
                        
                        // Scale font size between 10 and 18 based on the value
                        const minSize = 10;
                        const maxSize = 13;
                        const size = minSize + (value / maxValue) * (maxSize - minSize);
                        
                        return {
                          size: size,
                          family: "'Play', sans-serif",
                          weight: 'bold'
                        };
                      },
                      formatter: function(value, context) {
                        const data = context.dataset.data;
                        const maxValue = Math.max(...data);
                        const minValue = Math.min(...data);
                  
                        // Customize your thresholds here
                        const maxThreshold = 17;
                        const minThreshold = 5;
                  
                        if (maxValue >= maxThreshold && value <= minThreshold) {
                          // If big numbers everywhere, just show the number
                          return value;
                        } else {
                          // Otherwise, show the map name
                          return context.chart.data.labels[context.dataIndex]+": "+value;
                        }
                      },
                      textShadowColor: barColors
                    }
                  },
                legend: {display: false},
                title:{

                    display: true,
                    text: "Distribution Of Map Picks",
                    fontColor: "#72ff72",
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
                        display: false,

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
            },
            plugins: [ChartDataLabels] // Register the plugin
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
            damageinfo.onmouseover = function(){
                var audio = new Audio('https://raw.githubusercontent.com/AtomicRecall/Cipher/refs/heads/main/sounds/nvg_off.wav');
                audio.volume = 0.3;
                if(!allsoundsmuted){
                    audio.play();
                   }
            }
            let ClutchInfo = document.createElement("button");
            ClutchInfo.id = "ClutchInfo";
            ClutchInfo.innerHTML = "Clutch Info";
            ClutchInfo.classList.add("buttonz");
            ButtonsDivider.appendChild(ClutchInfo);
            ClutchInfo.onmouseover = function(){
                var audio = new Audio('https://raw.githubusercontent.com/AtomicRecall/Cipher/refs/heads/main/sounds/nvg_off.wav');
                audio.volume = 0.3;
                if(!allsoundsmuted){
                    audio.play();
                   }
            }
            let EntryInfo = document.createElement("button");
            EntryInfo.id = "EntryInfo";
            EntryInfo.classList.add("buttonz");
            EntryInfo.innerHTML = "Entry/ First Kill Info";
            ButtonsDivider.appendChild(EntryInfo);
            EntryInfo.onmouseover = function(){
                var audio = new Audio('https://raw.githubusercontent.com/AtomicRecall/Cipher/refs/heads/main/sounds/nvg_off.wav');
                audio.volume = 0.3;
                if(!allsoundsmuted){
                    audio.play();
                   }
            }
            let UtilityInfo = document.createElement("button");
            UtilityInfo.id = "UtilityInfo";
            UtilityInfo.classList.add("buttonz");
            UtilityInfo.innerHTML = "Utility Info"
            ButtonsDivider.appendChild(UtilityInfo);
            UtilityInfo.onmouseover = function(){
                var audio = new Audio('https://raw.githubusercontent.com/AtomicRecall/Cipher/refs/heads/main/sounds/nvg_off.wav');
                audio.volume = 0.3;
                if(!allsoundsmuted){
                    audio.play();
                   }
            }


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
    var audio = new Audio('https://raw.githubusercontent.com/AtomicRecall/Cipher/refs/heads/main/sounds/itempickup.wav');
    audio.volume = 0.3;
    if(!allsoundsmuted){
        audio.play();
       }
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
            totDam.innerHTML = "DAMAGE : <span class = orange2>"+parseInt(overallPlayerStats[team][player].totDamage)+"</span>";
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
            headshotpercent.innerHTML = "HS % : <b>"+parseInt(overallPlayerStats[team][player].headshotpercent)+"</b>";
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

    document.getElementById("damageInfo").onmouseover = function(){
        var audio = new Audio('https://raw.githubusercontent.com/AtomicRecall/Cipher/refs/heads/main/sounds/nvg_off.wav');
        audio.volume = 0.3;
        if(!allsoundsmuted){
            audio.play();
           }
    }
    

}
function ClutchInfo(matchinfo, isOverallLeaderboard,goingbacktooriginal){
    var audio = new Audio('https://raw.githubusercontent.com/AtomicRecall/Cipher/refs/heads/main/sounds/itempickup.wav');
    audio.volume = 0.5;
    if(!allsoundsmuted){
        audio.play();
       }
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
    document.getElementById("ClutchInfo").onmouseover = function(){
        var audio = new Audio('https://raw.githubusercontent.com/AtomicRecall/Cipher/refs/heads/main/sounds/nvg_off.wav');
        audio.volume = 0.5;
        if(!allsoundsmuted){
            audio.play();
           }
    }
    

}
function EntryInfo(matchinfo, isOverallLeaderboard,goingbacktooriginal){
    var audio = new Audio('https://raw.githubusercontent.com/AtomicRecall/Cipher/refs/heads/main/sounds/itempickup.wav');
    audio.volume = 0.5;
    if(!allsoundsmuted){
        audio.play();
       }
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
    document.getElementById("EntryInfo").onmouseover = function(){
        var audio = new Audio('https://raw.githubusercontent.com/AtomicRecall/Cipher/refs/heads/main/sounds/nvg_off.wav');
        audio.volume = 0.5;
        if(!allsoundsmuted){
            audio.play();
           }
    }
    

}
function UtilityInfo(matchinfo, isOverallLeaderboard,goingbacktooriginal){
    var audio = new Audio('https://raw.githubusercontent.com/AtomicRecall/Cipher/refs/heads/main/sounds/itempickup.wav');
    audio.volume = 0.5;
    if(!allsoundsmuted){
        audio.play();
       }
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
    document.getElementById("UtilityInfo").onmouseover = function(){
        var audio = new Audio('https://raw.githubusercontent.com/AtomicRecall/Cipher/refs/heads/main/sounds/nvg_off.wav');
        audio.volume = 0.5;
        if(!allsoundsmuted){
            audio.play();
           }
    }
    

}
function overallLeaderboard(matchinfo, isOverallLeaderboard,goingbacktooriginal, ummm, DONTASKOKAY){
    var audio = new Audio('https://raw.githubusercontent.com/AtomicRecall/Cipher/refs/heads/main/sounds/itempickup.wav');
    audio.volume = 0.5;
    if(!allsoundsmuted){
        audio.play();
       }
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
                    
                    if(bestplayer !== undefined && overallPlayerStats[team][bestplayer].adr < overallPlayerStats[team][player].adr){
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
        fishking.src = "https://raw.githubusercontent.com/AtomicRecall/Cipher/refs/heads/main/images/fishking.png";
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
    function createToggle(allinfodiv, season){
        THEFINALCOUNTERISWEAR++;
        // Create a container span element
    const span = document.createElement("div");
    span.id = "buttonspan";
   
    // Create a checkbox input element
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "c"+THEFINALCOUNTERISWEAR;
    checkbox.style.display = "none";
    const imag = document.createElement("img");
    imag.id = "spanimg";
    imag.src = "https://raw.githubusercontent.com/AtomicRecall/Cipher/refs/heads/main/images/button.png"
    imag.style.height = "30px";
    imag.style.width = "30px";
    imag.htmlFor =" c"+THEFINALCOUNTERISWEAR;
    // Create a label element
    const label = document.createElement("label");
    label.id = "label";
    label.style.cursor = "pointer";
    label.style.filter = "drop-shadow(1px 0px 1px #000000)";
    //label.htmlFor = "c"+THEFINALCOUNTERISWEAR; // Associate the label with the checkbox
    label.textContent = "S"+(season); // Set the label text
   // label.fontSize = "10px";
   label.style.color = "#0FFF50"; // Change text color
   label.style.fontSize = "30px"; // Change font size
   span.style.height = "60px";
   span.style.width = "60px";
   label.style.transform = "translate(-48%,20%)";
    // Append the checkbox and label to the span
    span.appendChild(checkbox);
    span.appendChild(label);
    //span.style.backgroundImage(`url(${imag.src})`);
    allinfodiv.appendChild(span);
    span.onmouseover = function(){
        span.style.cursor = "pointer";
    }
    span.onmouseout = function(){
        span.style.cursor = "default";
    }
    span.addEventListener("click", function () {
        
        checkbox.checked = !checkbox.checked; // toggle checkbox state
        checkbox.dispatchEvent(new Event("click")); // trigger checkbox click event
    });
    
    checkbox.addEventListener("click", () => {

        if (checkbox.checked) {
            ILIEDLOLL+=1;
            label.style.color = ""; // Reset text color
            label.style.fontSize = ""; // Reset font size
            span.style.height = "50px";
            span.style.width = "50px";
            label.style.transform = "translate(-50%,50%)";
           // console.log("WTFFF "+ILIEDLOLL);
              //make the finalarrayiswear be removed of the season that is clicked
              //find the season by doing picksnbans[d].season
              var newarray = getArrayFromSeason(label.textContent.substring(1), picksnbans);
              //console.log("but first");
              console.log(THEFINALARRAYISWEAR);
              DotheThing(newarray,false,picksnbans);
  
    
         
            

        } else {
            ILIEDLOLL-=1;
        
            label.style.color = "#0FFF50"; // Change text color
            label.style.fontSize = "30px"; // Change font size
            span.style.height = "60px";
            span.style.width = "60px";
            label.style.transform = "translate(-48%,20%)";
            console.log(label.textContent.substring(1));
            var newarray = getArrayFromSeason(label.textContent.substring(1), picksnbans);
            console.log(newarray);
            DotheThing(newarray,true);
            //span.style.transform = "translate(730px,160px)";
            //document.getElementById("allInfo").style.width = "480px";
            lastbooleaniswear = true;
           // console.log("WTF1 "+ILIEDLOLL);
           //console.log(THEFINALCOUNTERISWEAR +"= OMGOMGOMOMGOMG");
            ////////

            
          //document.getElementById("mtches").style.transform = "translate(-20px, -155px)";
          //document.getElementById("allInfo").style.width = "480px";
        }
      });
      

    
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
    ssn = ssn.substring(0,2);
    let finalArray = new Array();
    for (var match of arrayofallmatchess){
        if(match.season === ssn.toString()){
            finalArray.push(match);

        }
    }
    return finalArray;
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
    
    document.querySelectorAll("#allInfo").forEach(el => el.remove());
    
    printToWebsite(THEFINALARRAYISWEAR, true);

}