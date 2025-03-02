const firebaseConfig = {

    apiKey: "AIzaSyBMfwV_EUEk52tI3RtymT3OGLT9cVeq2O0",
  
    authDomain: "faceit-ban-reader.firebaseapp.com",
  
    databaseURL: "https://faceit-ban-reader-default-rtdb.firebaseio.com",
  
    projectId: "faceit-ban-reader",
  
    storageBucket: "faceit-ban-reader.appspot.com",
  
    messagingSenderId: "383480999134",
  
    appId: "1:383480999134:web:c312b222006f23bce7664f",
  
    measurementId: "G-VVV04PHRVG"
  
  };
  
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

let name = localStorage.getItem("faceit-name"); 

if (name === "null" || name == undefined || name === ""){
    document.getElementById("shit").innerHTML = ("Please Log In :)");
    name = "";
    let instruction = document.createElement("div");
    instruction.innerHTML = "CLICK HERE TO START SEARCHING -------->";
    instruction.style.position = "absolute";
    instruction.id = "instruction";
    instruction.classList.add("divv");
    document.getElementById(".BanFileExplorer").prepend(instruction);
    document.getElementById(".form-wrapper").style.opacity = "0";
    document.getElementById(".BanFileExplorer").style.height = "750px";
    document.getElementById(".BanFileExplorer").style.transform = "translateY(-100px)";
    document.getElementById("h3").style.transform = "translate(600px,-40px)";
    document.getElementById("h3").style.position = "absolute";
    document.getElementById(".BanFileExplorer").prepend(document.getElementById("h3"));
    document.getElementById("lgOut").innerHTML = "Log In?";
    document.getElementById("lgOut").style.transform = "translate(5px,10px)";
    document.getElementById("redirect").href = "LoginPage.html";
    localStorage.setItem("NOFACEITACCOUNT", 1);
    localStorage.setItem("NOTEAMALERT", 0);

}
else{
    document.getElementById("shit").innerHTML = ("Cipher: "+name);
    document.getElementById("lgOut").addEventListener('click', () =>{
        localStorage.removeItem("faceit-name");
    })
    localStorage.setItem("NOFACEITACCOUNT",0);
    localStorage.setItem("NOTEAMALERT", 1);
}
const now = new Date();

var currenttimestring = now.getMonth()+1+"/"+now.getDate()+"/"+now.getFullYear()+" "+now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();


let NONESEALEAGUEPLAYERR = -1;
var NONESEALEAGUEPLAYERREF = database.ref('USERS/'+name).on ('value', function(snapshot){
    var data = snapshot.val();
   // console.log(data);
    var thingy = data.NONESEALEAGUEPLAYER;
    NONESEALEAGUEPLAYERR = thingy;
   // console.log(NONESEALEAGUEPLAYERR);
});


document.getElementById("poop").innerHTML = name;




let ssn = 10; // dont worry
ontop();
YOURSAVEDTEAMS();


const srchbtn = document.getElementById("srchBtn");

srchbtn.addEventListener('click', () =>{
    
    removeElementsByClass("divv");
    removeElementsByClass("divvv");
    document.getElementById("h3").innerHTML = "SEARCH";
    document.getElementById("srchBtn").style.visibility = "hidden";
    document.getElementById("rtrnBtn").style.visibility = "visible";
    document.getElementById("rtrnBtn").style.transform = "translate(10px, -5px)";

    const srch3 = document.createElement('button');
    srch3.classList.add("input-group");
    srch3.id = "SEARCH";
    srch3.style.width = "50px";
    srch3.style.height = "50px";
    srch3.style.position = "absolute";
    srch3.style.transform = "translate(1430px, 13px)";
    //srch3.src = "https://atomicrecall.github.io/Cipher/images/button.png"
    srch3.innerHTML = '<img id="btnimg" src = "https://atomicrecall.github.io/Cipher/images/button.png" />';


    const div = document.createElement('input');
    div.style.height = "30px";
    div.style.width = "1450px";
    div.id = "srchboxdiv";
    div.style.padding = "10px";
    div.classList.add("input-group");
    div.placeholder = "What team are ya lookin for?";
    div.type = "text";
    div.style.fontSize = "40px";
    div.style.fontFamily = ''


    srch3.addEventListener('click',()=>{
        document.getElementById("h3").innerHTML = "SEARCH RESULTS";
        removeElementsByClass("divvv");
        searchForTeams(document.getElementById("srchboxdiv").value);
        srch3.style.transform = "translate(1430px,13px)";

    });
    document.getElementById(".BanFileExplorer").appendChild(srch3);
    document.getElementById(".BanFileExplorer").insertBefore(div,document.getElementById(".BanFileExplorer").firstChild);
});

const rtrnBtn = document.getElementById("rtrnBtn");
rtrnBtn.addEventListener('click', () =>{
    removeElementsByClass("divvv");
    if(document.getElementById("teambackgrounddiv")){
        document.getElementById("teambackgrounddiv").remove();
    }
   removeElementsByClass("removemepls");
   if (localStorage.getItem("NOFACEITACCOUNT") != 1){

        document.getElementById(".form-wrapper").style.opacity = "1";
        if(localStorage.getItem("NOFACEITACCOUNT") == 0){
            //document.getElementById(".BanFileExplorer").style.transform = "translateY(-100px)";

        }
        else{
            document.getElementById(".BanFileExplorer").style.transform = "translateY(-240px)";

        }
        document.getElementById(".BanFileExplorer").style.height = "480px";
        
        YOURSAVEDTEAMS();

        var upcomingmtches = document.createElement('div');
        upcomingmtches.id = "upcomingmatchesdivider";
        upcomingmtches.classList.add("divv");
        var upcomingmatchestag = document.createElement('div');
        upcomingmatchestag.id = "upcomingmatchestag";
        upcomingmatchestag.classList.add("divv");
        upcomingmatchestag.innerHTML = "YOUR NEXT OPPONENTS:";
        upcomingmtches.appendChild(upcomingmatchestag);
        
        var loadGears = "https://atomicrecall.github.io/Cipher/images/gears.gif";
        var loadingimage = document.createElement("img");
        loadingimage.src = loadGears;
        loadingimage.style.width = "600px";
        loadingimage.style.height = "200px";
        loadingimage.style.position = "absolute";
        loadingimage.id = "removemepls";
        loadingimage.classList.add("removemepls");
        upcomingmtches.appendChild(loadingimage);
        document.getElementById(".BanFileExplorer").appendChild(upcomingmtches);
    }
    if (localStorage.getItem("savedTeams")!= null){
        YOURSAVEDTEAMS();
    }
    document.getElementById("h3").innerHTML = "YOUR SAVED TEAMS";
    document.getElementById("h3").style.opacity = 0;
    if (document.getElementById("SEARCH") !== null){
        document.getElementById("SEARCH").remove();
    }
    if (document.getElementById("mtches") !== null){
        document.getElementById("mtches").remove();
    }
    if (document.getElementById("quickInfo") !== null){
        document.getElementById("quickInfo").remove();
    }
    if (document.getElementById("allInfo") !== null){
        document.getElementById("allInfo").remove();
    }
    if (document.getElementById("srchboxdiv") !== null){
        document.getElementById("srchboxdiv").remove();
    }
    getUpcomingMatches(localStorage.getItem('team-id'),52,"upcomingmatchesdivider");
    if(document.getElementById("upcomingmatchesdivider") != null && upcomingmtches.childElementCount <= 1){

        document.getElementById("upcomingmatchesdivider").appendChild(loadingimage);
    }
    document.getElementById("srchBtn").style.visibility = "visible";
    document.getElementById("rtrnBtn").style.visibility = "hidden";
});


function ontop(){
    if(localStorage.getItem("first-time") == 0){
        console.log("OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO it's your first time!!!");
        alert("Hello! Welcome to Cipher, an application that helps you solve the other team. \n\nTo start using it, you can check your team's cipher by clicking on them once the page refreshes. \n\nif you want to delete your team or any team, double click on the respective team name. \n\nIf you want to add more teams, click on the search button on the right. \nGive it a try!");
        var data2 = String(localStorage.getItem("team-id"));
        if (data2 != null && !(data2 === "null")){
            var ref1 = database.ref('USERS/'+name+'/SAVED_TEAMS/').push(data2);
        }
    }
    localStorage.setItem("first-time", 1);

    if (localStorage.getItem("NOFACEITACCOUNT") != 1){
        var ref = database.ref('USERS/'+name+'/LastLoggedIn').set(currenttimestring);
        //obtaining faceit information
        fetch('https://open.faceit.com/data/v4/players?nickname='+name+'&game=cs2', {
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer 1df284f3-de17-4d2e-b8c7-5a460265e05a'
        }
        }).then((res) => {
            if(!res.ok){
                throw new Error("couldnt fetcht that shit");
            }
            return res.json();
        })
        .then((data) =>{
            var cvrimmg = document.createElement('img');
            cvrimmg.id = "cvrimg";
           // console.log("GET DOWN");
            //console.log(data.cover_image);
            switch(data.cover_image){
                case undefined:
                    cvrimmg.src = "data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='29' height='50.115' patternTransform='scale(1) rotate(90)'><rect x='0' y='0' width='100%' height='100%' fill='%23161616'/><path d='M14.498 16.858L0 8.488.002-8.257l14.5-8.374L29-8.26l-.002 16.745zm0 50.06L0 58.548l.002-16.745 14.5-8.373L29 41.8l-.002 16.744zM28.996 41.8l-14.498-8.37.002-16.744L29 8.312l14.498 8.37-.002 16.745zm-29 0l-14.498-8.37.002-16.744L0 8.312l14.498 8.37-.002 16.745z'%20 stroke-width='1' stroke='%23303030' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>";
                    break;
                case null:
                    cvrimmg.src = "data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='29' height='50.115' patternTransform='scale(1) rotate(90)'><rect x='0' y='0' width='100%' height='100%' fill='%23161616'/><path d='M14.498 16.858L0 8.488.002-8.257l14.5-8.374L29-8.26l-.002 16.745zm0 50.06L0 58.548l.002-16.745 14.5-8.373L29 41.8l-.002 16.744zM28.996 41.8l-14.498-8.37.002-16.744L29 8.312l14.498 8.37-.002 16.745zm-29 0l-14.498-8.37.002-16.744L0 8.312l14.498 8.37-.002 16.745z'%20 stroke-width='1' stroke='%23303030' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>";
                    break;
                case "":
                    cvrimmg.src = "data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='29' height='50.115' patternTransform='scale(1) rotate(90)'><rect x='0' y='0' width='100%' height='100%' fill='%23161616'/><path d='M14.498 16.858L0 8.488.002-8.257l14.5-8.374L29-8.26l-.002 16.745zm0 50.06L0 58.548l.002-16.745 14.5-8.373L29 41.8l-.002 16.744zM28.996 41.8l-14.498-8.37.002-16.744L29 8.312l14.498 8.37-.002 16.745zm-29 0l-14.498-8.37.002-16.744L0 8.312l14.498 8.37-.002 16.745z'%20 stroke-width='1' stroke='%23303030' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>";
                    break;
                default:
                    cvrimmg.src = data.cover_image;
                    break;
            }
            //cvrimmg.src = data.cover_image == null ? "data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='29' height='50.115' patternTransform='scale(1) rotate(90)'><rect x='0' y='0' width='100%' height='100%' fill='%23161616'/><path d='M14.498 16.858L0 8.488.002-8.257l14.5-8.374L29-8.26l-.002 16.745zm0 50.06L0 58.548l.002-16.745 14.5-8.373L29 41.8l-.002 16.744zM28.996 41.8l-14.498-8.37.002-16.744L29 8.312l14.498 8.37-.002 16.745zm-29 0l-14.498-8.37.002-16.744L0 8.312l14.498 8.37-.002 16.745z'%20 stroke-width='1' stroke='%23303030' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>" : data.cover_image; 
            cvrimmg.height = 200;
            cvrimmg.width = 1100;
            document.getElementById('.form-wrapper').appendChild(cvrimmg);

            var img = document.createElement('img');
            img.id ="img";
            img.src = data.avatar;
            img.height = 150;
            img.width = 150;
            img.style.filter = "drop-shadow(0px 0px 2px #000000)";
            document.getElementById('.form-wrapper').appendChild(img);
            var elo = document.createElement('div');
            elo.innerHTML = ("ELO: "+data.games.cs2.faceit_elo);
            elo.id = "elo";
            elo.style.filter = "drop-shadow(0px 0px 2px #000000)";
            document.getElementById(".form-wrapper").appendChild(elo);
           // console.log("IS THIS PLAYER A ESEA LEAGUE PLAYER? "+NONESEALEAGUEPLAYERR);
            if (NONESEALEAGUEPLAYERR != 1){
                var upcomingmtches = document.createElement('div');
                upcomingmtches.id = "upcomingmatchesdivider";
                upcomingmtches.classList.add("divv");
                var upcomingmatchestag = document.createElement('div');
                upcomingmatchestag.id = "upcomingmatchestag";
                upcomingmatchestag.classList.add("divv");
                upcomingmatchestag.innerHTML = "YOUR NEXT OPPONENTS:";

                var loadingimage = document.createElement("img");
                loadingimage.src = "https://atomicrecall.github.io/Cipher/images/gears.gif";
                loadingimage.style.width = "600px";
                loadingimage.style.height = "200px";
                loadingimage.style.position = "absolute";
                loadingimage.id = "removemepls";
                loadingimage.classList.add("removemepls");
                upcomingmtches.appendChild(upcomingmatchestag);
                upcomingmtches.appendChild(loadingimage);
                document.getElementById(".BanFileExplorer").appendChild(upcomingmtches);

                var teamname = document.createElement('div');
                teamname.id = "teamname";
                teamname.style.opacity = 0;
                if(localStorage.getItem("division")){
                    teamname.innerHTML = "Season "+localStorage.getItem("daseasonyo")+" for "+localStorage.getItem("danameyo")+"\n In division "+localStorage.getItem("division");

                }
                else{
                    teamname.innerHTML = "Season "+localStorage.getItem("daseasonyo")+" for "+localStorage.getItem("danameyo");

                }
                if(localStorage.getItem('team-id') != null){
                    getUpcomingMatches(localStorage.getItem('team-id'),52,"upcomingmatchesdivider");
                }
                else{
                    getTeamNameDoc(data.player_id,0,"teamname",upcomingmtches);

                }
                teamname.style.filter = "drop-shadow(0px 0px 2px #000000)";
                document.getElementById(".form-wrapper").appendChild(teamname);
            }
            teamname.style.opacity = 1;
        });
}
    removeElementsByClass("removemepls");  
}
function isValidJSON(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }
function YOURSAVEDTEAMS(){
    console.log("RUNNING YOURSAVEDTEAMS");
    let NONESEALEAGUEPLAYERR3 = -1;
    var NONESEALEAGUEPLAYERREF = database.ref('USERS/'+name).on ('value', function(snapshot){
        var data = snapshot.val();
       // console.log(data);
        var thingy = data.NONESEALEAGUEPLAYER;
        NONESEALEAGUEPLAYERR3 = thingy;
       // console.log(NONESEALEAGUEPLAYERR3);
    });
    let dataa11 = [];


    removeElementsByClass("divvv");
    var yoursaveteamsdivider = document.createElement('div');
    yoursaveteamsdivider.id = "yoursavedteamsdivider";
    yoursaveteamsdivider.classList.add("divv");
    var yoursaveteamsdividertag = document.createElement('div');
    yoursaveteamsdividertag.id = "yoursavedteamss";
    yoursaveteamsdividertag.classList.add("divv");
    yoursaveteamsdividertag.innerHTML = "YOUR SAVED TEAMS: ";
    yoursaveteamsdivider.appendChild(yoursaveteamsdividertag);
    var loadingimage = document.createElement("img");
    loadingimage.src = "https://atomicrecall.github.io/Cipher/images/gears.gif";
    loadingimage.style.width = "600px";
    loadingimage.style.height = "200px";
    loadingimage.style.position = "absolute";
    loadingimage.id = "removemepls1";
    loadingimage.classList.add("removemepls1");
    yoursaveteamsdivider.appendChild(loadingimage);
   
    if(localStorage.getItem("NOFACEITACCOUNT") == 1 && localStorage.getItem("NOTEAMALERT")==0){
            dataa11 = JSON.parse(localStorage.getItem("savedTeams"));
        
        
       // console.log(dataa11);
        if(dataa11 != null){
            funnyfunction(dataa11,"yoursavedteamsdivider");
            document.getElementById(".BanFileExplorer").appendChild(yoursaveteamsdivider);
            
        }
        else{
            //alert("Found no teams in local storage. Try searching for some!");
        }
    }
    //console.log("IS THIS PLAYER A ESEA LEAGUE PLAYER? WHAT THE FUCK "+NONESEALEAGUEPLAYERR3);
    if (NONESEALEAGUEPLAYERR3 != 1 && localStorage.getItem("NOFACEITACCOUNT") != 1){
        document.getElementById(".BanFileExplorer").appendChild(yoursaveteamsdivider);
        if (localStorage.getItem("NOTEAMALERT") != 0){
            database.ref("USERS/"+name+"/SAVED_TEAMS").on('value', function(snapshot){
                var data = snapshot.val();
                if (data == null){
                    alert("Looks like you have no teams! search for something using the search button!");
                    return;
                }
                else{
                    Object.keys(data).forEach((key) => {
                        dataa11.push(data[key]);
                    });
            
                    funnyfunction(dataa11,"yoursavedteamsdivider");
                   
                }
            });
        }
    }
    else{

    }


}

function funnyfunction(dataalolfunny,wheretoadd){
    console.log(dataalolfunny);

    switch(wheretoadd){
        case "upcomingmatchesdivider":
            let counter = 0;
            let c = 1;
    for (let d = 0; d < dataalolfunny.length; d++){
        console.log("finding from upcoming: ");
        console.log(dataalolfunny[d]);
        if(d === 0 || d % 2 === 0 ){

        
        fetch('https://open.faceit.com/data/v4/teams/'+dataalolfunny[d], {
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer 1df284f3-de17-4d2e-b8c7-5a460265e05a'
        }
        }).then((res) => {
            if(!res.ok){
                throw new Error("couldnt fetcht that shit");
            }
            return res.json();
        })
        .then((datan) =>{ 
            counter++;
            let leaderid = datan.leader;
            //avatar and cover image in the right spot, will have to figure out how to do this automatically with lots of mother fucking entries

            var div = document.createElement('div');
            div.classList.add("divv");
            
            if (wheretoadd == "yoursavedteamsdivider"){
                removeElementsByClass("removemepls1");
                div.id = "div"+d;
            }
            else{
                removeElementsByClass("removemepls");
                div.id = "divv"+d;
            }
            var cvrimg = document.createElement('img');
            cvrimg.id = "cvrimg"+d;
            switch(datan.cover_image){
                case undefined:
                    cvrimg.src = "data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='29' height='50.115' patternTransform='scale(1) rotate(90)'><rect x='0' y='0' width='100%' height='100%' fill='%23161616'/><path d='M14.498 16.858L0 8.488.002-8.257l14.5-8.374L29-8.26l-.002 16.745zm0 50.06L0 58.548l.002-16.745 14.5-8.373L29 41.8l-.002 16.744zM28.996 41.8l-14.498-8.37.002-16.744L29 8.312l14.498 8.37-.002 16.745zm-29 0l-14.498-8.37.002-16.744L0 8.312l14.498 8.37-.002 16.745z'%20 stroke-width='1' stroke='%23303030' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>";
                    break;
                default:
                    cvrimg.src = datan.cover_image;
                    break;
            }

            cvrimg.height = 80;
            cvrimg.width = 200;
            cvrimg.style.filter = "blur(3px)";
            cvrimg.style.transition = "2s";
      

            var avat = document.createElement('img');
            avat.classList.add("avatt");
            avat.pointerEvents = "none";
            avat.id = "avat"+d;
            switch(datan.avatar){
                case undefined:
                    avat.src = "https://atomicrecall.github.io/Cipher/images/DEFAULTT.jpg"
                    break;
                case null:
                    avat.src = "https://atomicrecall.github.io/Cipher/images/DEFAULTT.jpg"
                    break;
                default:
                    avat.src = datan.avatar;
                    break;
            }
            avat.height = 40;
            avat.width = 40;
            avat.style.transform = "translate(5px, -60px)";


            var Tmne = document.createElement('div');
            Tmne.classList.add("TTmne");
            Tmne.id = "Tmne"+d;
            Tmne.innerHTML = datan.name;
            if(datan.name.length >= 14){
                Tmne.innerHTML = datan.name.substring(0,8)+"...";
            }
            else{
                Tmne.innerHTML = datan.name;
            }
            Tmne.style.transform = "translate(50px, -85px)";
            Tmne.pointerEvents = "none";
            





            let space = 1;
            var pfpdiv = document.createElement('div');
            pfpdiv.id = "pfp";
            pfpdiv.classList.add("pfpp");
            pfpdiv.style.filter = "blur(100px)";

            //for every player in that team, create a pfp and put it on the shit, change the width however it's needed
            for (let a = 0; a < datan.members.length; a++){
                if(datan.members[a].user_id == leaderid){
                    var crown = document.createElement('img');
                    crown.id = "crn";
                    crown.style.width = "30px";
                    crown.style.height = "30px";
                    crown.style.transform = "translate(-40px,-10px)";
                    crown.src = "https://atomicrecall.github.io/Cipher/images/CAPTAIN.png";
                    crown.style.position = "absolute";
                    crown.style.opacity = 1;
                    

                    var pfp = document.createElement('img');
                    pfp.id = datan.nickname+"pfp";
                    pfp.height = 10;
                    pfp.width = 10;
                    pfp.style.padding = "10px";
                    pfp.style.filter = "blur(100px)";
                    pfp.style.position = "relative";
                    pfp.pointerEvents = "none";
                    pfp.style.borderRadius = "40px";

                    switch(datan.members[a].avatar){
                        case undefined:
                            pfp.src = "https://cdn-frontend.faceit-cdn.net/web/static/media/assets_images_profile_header.jpg";
                            break;
                        default:
                            pfp.src = datan.members[a].avatar;
                            break;
                    }

                    pfpdiv.appendChild(pfp);
                    pfpdiv.appendChild(crown);
                }
            }
            var match
           
            div.appendChild(cvrimg);
            div.appendChild(avat);
            div.appendChild(Tmne);
            div.appendChild(pfpdiv);
            console.log("POOP VAGINA "+dataalolfunny[d+1]);
            var matchDateDiv = document.createElement("div");
            matchDateDiv.id = "matchDate"+d;
            matchDateDiv.classList.add("matchDate");
            //document.querySelectorAll(".match-container").querySelector("#matchdate")
            matchDateDiv.innerHTML = "Next Match: "
            matchDateDiv.innerHTML+=dataalolfunny[d+1];
            div.appendChild(matchDateDiv);
            if(document.getElementById(wheretoadd)){
                document.getElementById(wheretoadd).appendChild(div);

            }
            div.addEventListener('dblclick', () => {
                
            });
            var DELAY = 200, clicks = 0, timer = null;
            div.addEventListener('click', ()=> {
                clicks++;
                if(clicks === 1) {

                    timer = setTimeout(function() {
        
                        //perform single-click action
                        
                       localStorage.setItem("THETEAMWEARESEARCHING" , dataalolfunny[d]);
                       document.getElementById("lgOut").style.transform = "translate(5px,10px)";
                       
                        let js = document.createElement("script");
                        js.type = "text/javascript"; 
                        js.src = "BANREADER.js";
                        document.body.appendChild(js);
                        
                        clicks = 0; //after action performed, reset counter
                        
                    }, DELAY);
        
                } else {
                    if (!(wheretoadd === "upcomingmatchesdivider")){
                        clearTimeout(timer);    //prevent single-click action

                        if(confirm('Are you sure you want to delete '+Tmne.innerHTML+', fool?')){
                            console.log(div.id);
                            if(localStorage.getItem("NOFACEITACCOUNT")!=1){
                                
                                database.ref("USERS/"+name+"/SAVED_TEAMS").on('value', function(snapshot){
                                    var data = snapshot.val();
                                    Object.keys(data).forEach((key) => {
                                        if(dataalolfunny[d] == data[key]){
                                            let omgletitsquirt = database.ref("USERS/"+name+"/SAVED_TEAMS/"+key).remove();
                                            location.reload();
                                        }
                                    });
                                });
                             }
                             else{
                                
                                var divid = div.id;
                                //console.log("position = "+divid.substring(3));

                                // Retrieve and parse the array from localStorage
                                let storedArray = JSON.parse(localStorage.getItem("savedTeams")) || [];
                                storedArray.splice(parseInt(divid.substring(3)), 1); // Remove the item
                                localStorage.setItem("savedTeams", JSON.stringify(storedArray));


                                console.log(storedArray); // Updated array without the removed item
                                location.reload();
                             }
        
                        }
                        else { }  //perform double-click action
                        clicks = 0;             //after action performed, reset counter
                    }
                }

            });


            div.onmouseover = function(){
            Tmne.innerHTML = datan.name;
            div.style.transition = "2s";
            div.style.filter = "drop-shadow(0px 0px 10px #ffffff)";
            
            cvrimg.width = 500;
            cvrimg.style.removeProperty('filter');

            pfpdiv.style.transition = ".9s";
                switch(datan.name.length){
                    case 2:
                        pfpdiv.style.transform = "translate(80px, -125px)";
                        break;
                    case 3:
                        pfpdiv.style.transform = "translate(100px, -125px)";
                        break;
                    case 4:
                        pfpdiv.style.transform = "translate(105px, -125px)";
                        break;
                    case 5:
                        pfpdiv.style.transform = "translate(110px, -125px)";
                        break;
                    case 6:
                        pfpdiv.style.transform = "translate(130px, -125px)";
                        break;
                    case 7:
                        pfpdiv.style.transform = "translate(115px, -125px)";
                        break;
                    case 8:
                        pfpdiv.style.transform = "translate(125px, -125px)";
                        break;
                    case 9:
                        pfpdiv.style.transform = "translate(150px, -125px)";
                        break;
                    case 10:
                        pfpdiv.style.transform = "translate(160px, -125px)";
                        break;
                    case 11:
                        pfpdiv.style.transform = "translate(160px, -125px)";
                        break;
                    case 12:
                        pfpdiv.style.transform = "translate(170px, -125px)";
                        break;
                    case 13:
                        pfpdiv.style.transform = "translate(190px, -125px)";
                        break;
                    case 14:
                        pfpdiv.style.transform = "translate(190px, -125px)";
                        break;
                    case 15:
                        pfpdiv.style.transform = "translate(210px, -125px)"
                        break;
                    case 16:
                        pfpdiv.style.transform = "translate(210px, -125px)"
                        break;
                    default:
                        break;
                }
                //pfpdiv.style.transform = "translate(150px, -125px)";

            
            pfpdiv.style.removeProperty('filter');
            pfpdiv.style.width = 800;

           
            document.getElementById(datan.nickname+"pfp").style.transition = "1s";
            document.getElementById(datan.nickname+"pfp").height = 30;
            document.getElementById(datan.nickname+"pfp").width = 30;
            document.getElementById(datan.nickname+"pfp").style.removeProperty('filter');
            document.getElementById(datan.nickname+"pfp").style.filter = "drop-shadow(0px 0px 2px #ffffff)";
                

            document.getElementById("matchDate"+d).style.opacity = 1;
            document.getElementById("matchDate"+d).style.transform = "translate(240px,-200px)";
            document.getElementById("matchDate"+d).style.transition = "2s";
                

            //d is current child; lol holds all childs.
            //find space in list from all childs, check if the child accross from it is there, if so do the shit, if not dont do shit
            let lol = document.getElementById(wheretoadd).children;
            
                // console.log(document.getElementById("div"+d));

            for (let l = 1; l < lol.length; l++){
                if(!(wheretoadd === "upcomingmatchesdivider")){
                    if (lol[l].id.substring(3)==(d)){
                        // console.log("WE FOUND THE SPACE");
                        space = l;
                        break;
                    }
                    else{
                        continue;
                    }
                }
                else{
                    if (lol[l].id.substring(4)==(d)){
                        // console.log("WE FOUND THE SPACE");
                        space = l;
                        break;
                    }
                    else{
                        continue;
                    }
                }

            }
            if(lol[space+2] != undefined && lol[space+2] != null){
                   console.log("GO UNVISIBLE "+lol[space+2].id);
                document.getElementById(lol[space+2].id).style.transition = "0.5s";
                document.getElementById(lol[space+2].id).style.opacity = 0;
                document.getElementById(lol[space+2].id).style.transform+="translateY(-20px)";
            }
            if(lol[space+4]!= undefined && lol[space+4]!= null){
                   console.log("FOUND YOU ALSO GO UNVISIBALEw "+lol[space+4].id);
                 document.getElementById(lol[space+4].id).style.transition = "0.5s";
                 document.getElementById(lol[space+4].id).style.opacity = 0;
                 document.getElementById(lol[space+4].id).style.transform+="translateY(-20px)";

            }
            else {
              //  console.log("DO NOTHING");
             }

                
                

        }
       
        div.onmouseout = function(){
                //make sure to delete the shit you made up top!
                if(Tmne.innerHTML.length >= 14){
                    Tmne.innerHTML = datan.name.substring(0,8)+"...";
                }
                else{
                    Tmne.innerHTML = datan.name;
                }
                div.style.filter = "";
                
                cvrimg.width = 200;
                cvrimg.style.filter = "blur(2px)";
    
                let fds = datan.nickname+"pfp";
                document.getElementById(fds).height = 0;
                document.getElementById(fds).width = 0;
                console.log("matchDate"+d);
                document.getElementById("matchDate"+d).style.opacity = 0;
                document.getElementById("matchDate"+d).style.transform = "translate(200px,-200px)";
                document.getElementById("matchDate"+d).style.transition = "0.5s";
                
                pfpdiv.style.filter = "blur(100px)";
                pfpdiv.style.width = 200;
                pfpdiv.style.transform = "translateY(-150px)";

                //if(document.getElementById(wheretoadd).children > 3){
                    if(document.getElementById(wheretoadd).children[space+2] != undefined || document.getElementById(wheretoadd).children[space+2] != null){
                        document.getElementById(document.getElementById(wheretoadd).children[space+2].id).style.opacity = 1;
                        document.getElementById(document.getElementById(wheretoadd).children[space+2].id).style.transform+="translateY(20px)";
                    }
                    else {}
                    if(document.getElementById(wheretoadd).children[space+4]!= undefined || document.getElementById(wheretoadd).children[space+4] != null){
                        document.getElementById(document.getElementById(wheretoadd).children[space+4].id).style.opacity = 1;
                        document.getElementById(document.getElementById(wheretoadd).children[space+4].id).style.transform+="translateY(20px)";
                    }
                    else {
                        //DO NOTHING
                    }
                //}

                
                
                
        }
            
        
        if(localStorage.getItem("NOFACEITACCOUNT") == 1){
            if(counter> 7){
                //every 5, move this one + the next 4, go into next 5 if needed
                //console.log("WHAT ROW?? "+c)
    
                moveColumn(div,c,4);
    
                if (counter % 7 == 0){
                    c++;
                }
            }
        }
        else{
            if(counter> 2){
                //every 5, move this one + the next 4, go into next 5 if needed
                //console.log("WHAT ROW?? "+c)
    
                moveColumn(div,c,4);
    
                if (counter % 2 == 0){
                    c++;
                }
            }
        }
            

        });
    }
    }
            break;

        case "yoursavedteamsdivider":
            let counterr = 0;
            let cc = 1;
    for (let d = 0; d < dataalolfunny.length; d++){
        console.log("finding ");
        console.log(dataalolfunny[d]);
        fetch('https://open.faceit.com/data/v4/teams/'+dataalolfunny[d], {
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer 1df284f3-de17-4d2e-b8c7-5a460265e05a'
        }
        }).then((res) => {
            if(!res.ok){
                throw new Error("couldnt fetcht that shit");
            }
            return res.json();
        })
        .then((datan) =>{ 
            counterr++;
            let leaderid = datan.leader;
            //avatar and cover image in the right spot, will have to figure out how to do this automatically with lots of mother fucking entries

            var div = document.createElement('div');
            div.classList.add("divv");
            
            if (wheretoadd == "yoursavedteamsdivider"){
                removeElementsByClass("removemepls1");
                div.id = "div"+d;
            }
            else{
                removeElementsByClass("removemepls");
                div.id = "divv"+d;
            }
            var cvrimg = document.createElement('img');
            cvrimg.id = "cvrimg"+d;
            switch(datan.cover_image){
                case undefined:
                    cvrimg.src = "data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='29' height='50.115' patternTransform='scale(1) rotate(90)'><rect x='0' y='0' width='100%' height='100%' fill='%23161616'/><path d='M14.498 16.858L0 8.488.002-8.257l14.5-8.374L29-8.26l-.002 16.745zm0 50.06L0 58.548l.002-16.745 14.5-8.373L29 41.8l-.002 16.744zM28.996 41.8l-14.498-8.37.002-16.744L29 8.312l14.498 8.37-.002 16.745zm-29 0l-14.498-8.37.002-16.744L0 8.312l14.498 8.37-.002 16.745z'%20 stroke-width='1' stroke='%23303030' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>";
                    break;
                default:
                    cvrimg.src = datan.cover_image;
                    break;
            }

            cvrimg.height = 80;
            cvrimg.width = 200;
            cvrimg.style.filter = "blur(3px)";
            cvrimg.style.transition = "2s";
      

            var avat = document.createElement('img');
            avat.classList.add("avatt");
            avat.pointerEvents = "none";
            avat.id = "avat"+d;
            switch(datan.avatar){
                case undefined:
                    avat.src = "https://atomicrecall.github.io/Cipher/images/DEFAULTT.jpg"
                    break;
                case null:
                    avat.src = "https://atomicrecall.github.io/Cipher/images/DEFAULTT.jpg"
                    break;
                default:
                    avat.src = datan.avatar;
                    break;
            }
            avat.height = 40;
            avat.width = 40;
            avat.style.transform = "translate(5px, -60px)";


            var Tmne = document.createElement('div');
            Tmne.classList.add("TTmne");
            Tmne.id = "Tmne"+d;
            Tmne.innerHTML = datan.name;
            if(datan.name.length >= 14){
                Tmne.innerHTML = datan.name.substring(0,8)+"...";
            }
            else{
                Tmne.innerHTML = datan.name;
            }
            Tmne.style.transform = "translate(50px, -85px)";
            Tmne.pointerEvents = "none";
            





            let space = 1;
            var pfpdiv = document.createElement('div');
            pfpdiv.id = "pfp";
            pfpdiv.classList.add("pfpp");
            pfpdiv.style.filter = "blur(100px)";

            //for every player in that team, create a pfp and put it on the shit, change the width however it's needed
            for (let a = 0; a < datan.members.length; a++){
                if(datan.members[a].user_id == leaderid){
                    var crown = document.createElement('img');
                    crown.id = "crn";
                    crown.style.width = "30px";
                    crown.style.height = "30px";
                    crown.style.transform = "translate(-40px,-10px)";
                    crown.src = "https://atomicrecall.github.io/Cipher/images/CAPTAIN.png";
                    crown.style.position = "absolute";
                    crown.style.opacity = 1;
                    

                    var pfp = document.createElement('img');
                    pfp.id = datan.nickname+"pfp";
                    pfp.height = 10;
                    pfp.width = 10;
                    pfp.style.padding = "10px";
                    pfp.style.filter = "blur(100px)";
                    pfp.style.position = "relative";
                    pfp.pointerEvents = "none";
                    pfp.style.borderRadius = "40px";

                    switch(datan.members[a].avatar){
                        case undefined:
                            pfp.src = "https://cdn-frontend.faceit-cdn.net/web/static/media/assets_images_profile_header.jpg";
                            break;
                        default:
                            pfp.src = datan.members[a].avatar;
                            break;
                    }

                    pfpdiv.appendChild(pfp);
                    pfpdiv.appendChild(crown);
                }
            }

           
            div.appendChild(cvrimg);
            div.appendChild(avat);
            div.appendChild(Tmne);
            div.appendChild(pfpdiv);
            if(document.getElementById(wheretoadd)){
            document.getElementById(wheretoadd).appendChild(div);
            }
            div.addEventListener('dblclick', () => {
                
            });
            var DELAY = 200, clicks = 0, timer = null;
            div.addEventListener('click', ()=> {
                clicks++;
                if(clicks === 1) {

                    timer = setTimeout(function() {
        
                        //perform single-click action
                        
                       localStorage.setItem("THETEAMWEARESEARCHING" , dataalolfunny[d]);
                       document.getElementById("lgOut").style.transform = "translate(5px,10px)";
                        let js = document.createElement("script");
                        js.type = "text/javascript"; 
                        js.src = "BANREADER.js";
                        document.body.appendChild(js);
                        
                        clicks = 0; //after action performed, reset counter
                        
                    }, DELAY);
        
                } else {
                    if (!(wheretoadd === "upcomingmatchesdivider")){
                        clearTimeout(timer);    //prevent single-click action

                        if(confirm('Are you sure you want to delete '+Tmne.innerHTML+', fool?')){
                            console.log(div.id);
                            if(localStorage.getItem("NOFACEITACCOUNT")!=1){
                                
                                database.ref("USERS/"+name+"/SAVED_TEAMS").on('value', function(snapshot){
                                    var data = snapshot.val();
                                    Object.keys(data).forEach((key) => {
                                        if(dataalolfunny[d] == data[key]){
                                            let omgletitsquirt = database.ref("USERS/"+name+"/SAVED_TEAMS/"+key).remove();
                                            location.reload();
                                        }
                                    });
                                });
                             }
                             else{
                                
                                var divid = div.id;
                                //console.log("position = "+divid.substring(3));

                                // Retrieve and parse the array from localStorage
                                let storedArray = JSON.parse(localStorage.getItem("savedTeams")) || [];
                                storedArray.splice(parseInt(divid.substring(3)), 1); // Remove the item
                                localStorage.setItem("savedTeams", JSON.stringify(storedArray));


                                console.log(storedArray); // Updated array without the removed item
                                location.reload();
                             }
        
                        }
                        else { }  //perform double-click action
                        clicks = 0;             //after action performed, reset counter
                    }
                }

            });


            div.onmouseover = function(){
            Tmne.innerHTML = datan.name;
            div.style.transition = "2s";
            div.style.filter = "drop-shadow(0px 0px 10px #ffffff)";
            
            cvrimg.width = 500;
            cvrimg.style.removeProperty('filter');

            pfpdiv.style.transition = ".9s";
                switch(datan.name.length){
                    case 2:
                        pfpdiv.style.transform = "translate(80px, -125px)";
                        break;
                    case 3:
                        pfpdiv.style.transform = "translate(100px, -125px)";
                        break;
                    case 4:
                        pfpdiv.style.transform = "translate(105px, -125px)";
                        break;
                    case 5:
                        pfpdiv.style.transform = "translate(110px, -125px)";
                        break;
                    case 6:
                        pfpdiv.style.transform = "translate(130px, -125px)";
                        break;
                    case 7:
                        pfpdiv.style.transform = "translate(115px, -125px)";
                        break;
                    case 8:
                        pfpdiv.style.transform = "translate(125px, -125px)";
                        break;
                    case 9:
                        pfpdiv.style.transform = "translate(150px, -125px)";
                        break;
                    case 10:
                        pfpdiv.style.transform = "translate(160px, -125px)";
                        break;
                    case 11:
                        pfpdiv.style.transform = "translate(160px, -125px)";
                        break;
                    case 12:
                        pfpdiv.style.transform = "translate(170px, -125px)";
                        break;
                    case 13:
                        pfpdiv.style.transform = "translate(190px, -125px)";
                        break;
                    case 14:
                        pfpdiv.style.transform = "translate(190px, -125px)";
                        break;
                    case 15:
                        pfpdiv.style.transform = "translate(210px, -125px)"
                        break;
                    case 16:
                        pfpdiv.style.transform = "translate(210px, -125px)"
                        break;
                    default:
                        break;
                }
                //pfpdiv.style.transform = "translate(150px, -125px)";

            
            pfpdiv.style.removeProperty('filter');
            pfpdiv.style.width = 800;

           
            document.getElementById(datan.nickname+"pfp").style.transition = "1s";
            document.getElementById(datan.nickname+"pfp").height = 30;
            document.getElementById(datan.nickname+"pfp").width = 30;
            document.getElementById(datan.nickname+"pfp").style.removeProperty('filter');
            document.getElementById(datan.nickname+"pfp").style.filter = "drop-shadow(0px 0px 2px #ffffff)";
                

                    
                
                

            //d is current child; lol holds all childs.
            //find space in list from all childs, check if the child accross from it is there, if so do the shit, if not dont do shit
            let lol = document.getElementById(wheretoadd).children;
            
                // console.log(document.getElementById("div"+d));

            for (let l = 1; l < lol.length; l++){
                if(!(wheretoadd === "upcomingmatchesdivider")){
                    if (lol[l].id.substring(3)==(d)){
                        // console.log("WE FOUND THE SPACE");
                        space = l;
                        break;
                    }
                    else{
                        continue;
                    }
                }
                else{
                    if (lol[l].id.substring(4)==(d)){
                        // console.log("WE FOUND THE SPACE");
                        space = l;
                        break;
                    }
                    else{
                        continue;
                    }
                }

            }
            if(lol[space+2] != undefined && lol[space+2] != null){
                   console.log("GO UNVISIBLE "+lol[space+2].id);
                document.getElementById(lol[space+2].id).style.transition = "0.5s";
                document.getElementById(lol[space+2].id).style.opacity = 0;
                document.getElementById(lol[space+2].id).style.transform+="translateY(-20px)";
            }
            if(lol[space+4]!= undefined && lol[space+4]!= null){
                   console.log("FOUND YOU ALSO GO UNVISIBALEw "+lol[space+4].id);
                 document.getElementById(lol[space+4].id).style.transition = "0.5s";
                 document.getElementById(lol[space+4].id).style.opacity = 0;
                 document.getElementById(lol[space+4].id).style.transform+="translateY(-20px)";

            }
            else {
              //  console.log("DO NOTHING");
             }

                
                

        }
       
        div.onmouseout = function(){
                //make sure to delete the shit you made up top!
                if(Tmne.innerHTML.length >= 14){
                    Tmne.innerHTML = datan.name.substring(0,8)+"...";
                }
                else{
                    Tmne.innerHTML = datan.name;
                }
                div.style.filter = "";
                
                cvrimg.width = 200;
                cvrimg.style.filter = "blur(2px)";
    
                let fds = datan.nickname+"pfp";
                document.getElementById(fds).height = 0;
                document.getElementById(fds).width = 0;


                
                pfpdiv.style.filter = "blur(100px)";
                pfpdiv.style.width = 200;
                pfpdiv.style.transform = "translateY(-150px)";

                //if(document.getElementById(wheretoadd).children > 3){
                    if(document.getElementById(wheretoadd).children[space+2] != undefined || document.getElementById(wheretoadd).children[space+2] != null){
                        document.getElementById(document.getElementById(wheretoadd).children[space+2].id).style.opacity = 1;
                        document.getElementById(document.getElementById(wheretoadd).children[space+2].id).style.transform+="translateY(20px)";
                    }
                    else {}
                    if(document.getElementById(wheretoadd).children[space+4]!= undefined || document.getElementById(wheretoadd).children[space+4] != null){
                        document.getElementById(document.getElementById(wheretoadd).children[space+4].id).style.opacity = 1;
                        document.getElementById(document.getElementById(wheretoadd).children[space+4].id).style.transform+="translateY(20px)";
                    }
                    else {
                        //DO NOTHING
                    }
                //}

                
                
                
        }
            
        
        if(localStorage.getItem("NOFACEITACCOUNT") == 1){
            if(counterr> 7){
                //every 5, move this one + the next 4, go into next 5 if needed
                //console.log("WHAT ROW?? "+c)
    
                moveColumn(div,cc,4);
    
                if (counterr % 7 == 0){
                    cc++;
                }
            }
        }
        else{
            if(counterr> 2){
                //every 5, move this one + the next 4, go into next 5 if needed
                //console.log("WHAT ROW?? "+c)
    
                moveColumn(div,cc,4);
    
                if (counterr % 2 == 0){
                    cc++;
                }
            }
        }
            

        });
    }
            break;
    }
    


}
function moveColumn(fart,c,colms){
    //every 4, increases X by 120, increases y by 400
    if(colms == 4){
        fart.style.transform="translate("+(210*c)+"px,"+(((-180)*c))+"px)";
    }
    else{
        fart.style.transform="translate("+(210*c)+"px,"+(((-620)*(c)))+"px)";
    }

}
function getPosition(element){
    const {top, left, bottom, right } = element.getBoundingClientRect();
    const pos = top+","+left+","+bottom+","+right;
    return pos;
}
//TODO: START OF SEASON WAHTEVER AND END OF SEASON WHATEVER FROM AND TO
function getTeamNameDoc(name, offsett, docelement){
    //console.log("penis and balls ::"+name+" "+offsett+" "+docelement);
    var beenfound = false;
    if (offsett >= 100){
        beenfound = true;
        var ref = database.ref('USERS/'+localStorage.getItem("faceit-name")+'/NONESEALEAGUEPLAYER').set(1);
        window.location.reload();
    }
    if (beenfound || !(localStorage.getItem("danameyo")=="")){
        return;
    }
    fetch('https://open.faceit.com/data/v4/players/'+name+'/history?game=cs2&offset='+offsett+'&limit=20', {
    headers: {
        'accept': 'application/json',
        'Authorization': 'Bearer 1df284f3-de17-4d2e-b8c7-5a460265e05a'
    }
}).then((res) => {
        if(!res.ok){
            console.log("HOLY FUCK");
            throw new Error("couldnt fetcht that shit");
        }
        return res.json();
    })
  .then((data) =>{
    console.log(data);
    document.getElementById(docelement).style.opacity = 0;
    for(let key = 0; key < data.items.length; key++){
        // if the "items' competition_name has something to do with esea
        if(data.items[key].competition_name.includes("ESEA") && !data.items[key].competition_name.includes("Qualifier")){
            ssn = data.items[key].competition_name.substring(6,8);
            let division = data.items[key].competition_name.substring(12);
            if (division.includes("Main")){
                division = "Main";
            }
            else if (division.includes("Advanced")){
                division = "Advanced";
            }
            else if (division.includes("Open")){
                division = "Open";
            }
            else if (division.includes("Intermediate")){
                division = "Intermediate";
            }
            else if (division.includes("ECL")){
                division = "ECL";
            }
            localStorage.setItem("division", division);
            localStorage.setItem("daseasonyo",ssn);
            for(let key2 = 0; key2 < data.items[key].playing_players.length; key2++){
                if(data.items[key].playing_players[key2].includes(name)){
                    console.log("Fopund ur bitch ass LOL");
                    for (let key3 = 0; key3 < 5; key3++){
                        if(data.items[key].teams.faction1.players[key3].player_id.includes(name)){

                            console.log("ohhh you in team1 big boy :)");
                            console.log(data.items[key]);
                            //ssn == "ea" ?  document.getElementById(docelement).innerHTML+="Qualifier for "+data.items[key].teams.faction1.nickname : document.getElementById(docelement).innerHTML+="Season "+ssn+" for "+data.items[key].teams.faction1.nickname;
                            document.getElementById(docelement).innerHTML="Season "+ssn+" for "+data.items[key].teams.faction1.nickname+"\n In division "+localStorage.getItem("division");
                            localStorage.setItem("danameyo",data.items[key].teams.faction1.nickname);
                            localStorage.setItem('team-id', data.items[key].teams.faction1.team_id);
                            getUpcomingMatches(data.items[key].teams.faction1.team_id,52,"upcomingmatchesdivider");

                            beenfound = true;
                            return;

                        }
                    }
                    console.log("just guessing, you probably in team2 right now big boy :)");
                    //ssn == "ea" ?  document.getElementById(docelement).innerHTML+="Qualifier for "+data.items[key].teams.faction2.nickname : document.getElementById(docelement).innerHTML+="Season "+ssn+" for "+data.items[key].teams.faction2.nickname;
                    document.getElementById(docelement).innerHTML="Season "+ssn+" for "+data.items[key].teams.faction2.nickname+"\n In division "+localStorage.getItem("division");
                    localStorage.setItem("danameyo",data.items[key].teams.faction2.nickname);
                    localStorage.setItem('team-id', data.items[key].teams.faction2.team_id);
                    getUpcomingMatches(data.items[key].teams.faction2.team_id,52,"upcomingmatchesdivider");

                    beenfound = true;
                    return;

                }
                else {
                    //console.log("didnt find ur bitch ass");
                }
                
            }
            document.getElementById(docelement).style.opacity = 1;

            //console.log("done with loop");
            
        }
    }
    getTeamNameDoc(name,offsett+20,docelement);
    return;
  });
}

function searchForTeams(teamnme){
    let counter = 0;
    var cocksucker = teamnme.split(' ').join('%20');
    var foundteamsdivider = document.createElement("div");
    foundteamsdivider.id = "foundteamsdivider";
    foundteamsdivider.style.width = "1450px";
    foundteamsdivider.classList.add("divvv"); 

        fetch('https://open.faceit.com/data/v4/search/teams?nickname='+cocksucker+'&game=cs2&offset=0&limit=6', {
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer 1df284f3-de17-4d2e-b8c7-5a460265e05a'
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
        for(let d = 0; d < datann.items.length; d++){
   
            let datan = datann.items[d];
            console.log("PEJKFJDSFDS");
            console.log(datan);
            let cvrimg = document.createElement('img');
            cvrimg.id = "cvrimg"+d;
            var leadername = undefined;
            var leadernamez = document.createElement('div');

                    fetch('https://open.faceit.com/data/v4/teams/'+datan.team_id, {
                        headers: {
                            'accept': 'application/json',
                            'Authorization': 'Bearer 1df284f3-de17-4d2e-b8c7-5a460265e05a'
                        }
                        }).then((res) => {
                            if(!res.ok){
                                throw new Error("couldnt fetcht that shit");
                            }
                            return res.json();
                        })
                        .then((datan12) =>{ 
                            console.log("ummmmmmmmmmmmm");
                            console.log(datan12);
                            var teaminfoDivider = document.createElement("div");

                            if(datan12.cover_image == undefined){
                                cvrimg.src = "data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='29' height='50.115' patternTransform='scale(1) rotate(90)'><rect x='0' y='0' width='100%' height='100%' fill='%23161616'/><path d='M14.498 16.858L0 8.488.002-8.257l14.5-8.374L29-8.26l-.002 16.745zm0 50.06L0 58.548l.002-16.745 14.5-8.373L29 41.8l-.002 16.744zM28.996 41.8l-14.498-8.37.002-16.744L29 8.312l14.498 8.37-.002 16.745zm-29 0l-14.498-8.37.002-16.744L0 8.312l14.498 8.37-.002 16.745z'%20 stroke-width='1' stroke='%23303030' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>";
        
                            }
                            else{
                                cvrimg.src = datan12.cover_image;
        
                            }
                            const someleader = datan12.leader;
                            leadername = someleader;
                            leadernamez.id = leadername;
                            leadernamez.innerHTML = leadername;
                            var pfpdivvv = document.createElement('div');
                            pfpdivvv.id = "pfpp"+d;
                            pfpdivvv.style.position = "absolute";
                            pfpdivvv.style.transform = "translateY(-130px)";
                            pfpdivvv.style.opacity = "0";
                            pfpdivvv.style.transition = "0.5s";

                            for (const players of datan12.members){
                                if (players.user_id == someleader){
                                    console.log("LEADER FOUND "+players.nickname);
                                    var crown = document.createElement('img');
                                    crown.id = "crn";
                                    crown.style.width = "30px";
                                    crown.style.height = "30px";
                                    crown.style.transform = "translate(-30px,-20px)";
                                    crown.src = "https://atomicrecall.github.io/Cipher/images/CAPTAIN.png";
                                    crown.style.position = "absolute";
                                    crown.style.opacity = 1;
                                    
                
                                    var pfp = document.createElement('img');
                                    pfp.style.height = "25px";
                                    pfp.style.width = "25px";
                                    //pfp.style.padding = "10px";
                                    //pfp.style.filter = "blur(100px)";
                                    pfp.style.position = "relative";
                                    pfp.pointerEvents = "none";
                                    pfp.style.borderRadius = "40px";
                                    pfp.id = players.nickname;
                                    pfp.src = players.avatar;
                                    //leadernamez.innerHTML = players.nickname;
                                    
                                    pfpdivvv.appendChild(pfp);
                                    pfpdivvv.appendChild(crown);
                                    document.getElementById("div"+d).appendChild(pfpdivvv);
                                }
                                else{
                                }
                            }

                        });
            counter++;  
            
            //avatar and cover image in the right spot, will have to figure out how to do this automatically with lots of mother fucking entries
            var divider = document.createElement('div');
            divider.classList.add("divvv");
            divider.id = "div"+d;
            divider.style.position = "flex";
            divider.style.transform = "translate(0px,0px)";
            foundteamsdivider.style.display = "grid";
            foundteamsdivider.style.gridAutoFlow = "column"
            if (localStorage.getItem("NOFACEITACCOUNT")!= 0){
                foundteamsdivider.style.transform = "translateY(-280px)";
            }
            else{
                foundteamsdivider.style.transform = "translateY(-150px)";

            }
            foundteamsdivider.appendChild(divider);

            var avat = document.createElement('img');
            avat.classList.add("avatt");
            avat.pointerEvents = "none";
            avat.id = "avat"+d;

            switch(datan.avatar){
                case "":
                    avat.src = "https://atomicrecall.github.io/Cipher/images/DEFAULTT.jpg";
                    break;
                    case undefined:
                        avat.src = "https://atomicrecall.github.io/Cipher/images/DEFAULTT.jpg";
                        break;
                    case null:
                        avat.src = "https://atomicrecall.github.io/Cipher/images/DEFAULTT.jpg";
                        break;
                    
                default:
                    cvrimg.src = datan.avatar;
                    avat.src = datan.avatar;
                    break;
            }
            cvrimg.height = 80;
            cvrimg.width = 200;
            cvrimg.style.filter = "blur(3px)";
            cvrimg.style.transition = "0.5s";
            
            divider.appendChild(cvrimg);
            

            

            avat.height = 40;
            avat.width = 40;
            avat.style.transform = "translate(5px, -60px)";
            divider.appendChild(avat);
           
            //if the name is too long, cutt off the name, show the button infront of it, when the user hovers over the team,
            //move the fav button to the end and show the full team name
            //if the name is not that long, dont even have a hover animation, it doesnt matter anyways.
            const temp = datan.name;
            var Tmne = document.createElement('div');
            Tmne.classList.add("TTmne");
            Tmne.id = "Tmne"+d;
            if(datan.name.length >= 8){
                Tmne.innerHTML = datan.name.substring(0,8)+"...";
            }
            else{
                Tmne.innerHTML = datan.name;
            }
            Tmne.style.transform = "translate(50px, -85px)";
            Tmne.pointerEvents = "none";



            var fav = document.createElement('button');
            fav.classList.add("fav"); 
            fav.id = "fav"+d;

            //Right here figure out if the team is in the database, if it is, change the star to fully shaded
            let testary = [];
            
            let pooopppie = database.ref("USERS/"+name+"/SAVED_TEAMS").on('value', function(snapshot){
                var data = snapshot.val();
                if (data != null && !(data === "null")){
                    Object.keys(data).forEach((key) => {
                        if (key != null){
                            testary.push(data[key]);
                        }
                        else{
                            
                        }
                    });
                }

                //change item to item.id when it's time to implement the time the thing was favorited
                var favimg = document.createElement('img');
                favimg.src = "images/NicePng_star-shape-png_5691440_0.png";
                favimg.classList.add("favimg");
                favimg.id = "favimg"+d;
                fav.appendChild(favimg);
                //fav.innerHTML ='<img class ="favimg" id="favimg'+d+'"src = "images/NicePng_star-shape-png_5691440_0.png" />'
                testary.forEach(function(item){
                    if(datan.team_id == (item)){
                        favimg.src ="images/NicePng_star-shape-png_5691440_3.png";
                        //fav.innerHTML ='<img class ="favimg" id="favimg'+d+'"src = "images/NicePng_star-shape-png_5691440_3.png" />'
                        return;
                    }
                    else{
                        
                    }
                    
                });
                
                
                
            });
            fav.style.transform = "translate(115px,-60px)";
            divider.appendChild(fav);


            divider.appendChild(Tmne);
            document.getElementById(".BanFileExplorer").append(foundteamsdivider);

            //UNDOABLE TO DO PFPS FOR NOW BECAUSE I CANT GET PFP INFO,
            //UNLESS I DO A SEPERATE FUNCTION THAT FINDS ALL PFPS, THEN THAT WOULD BE GOOD FOR OPTIMIZING AS WELL, SO IT DOESNT LOAD ALL PFPS AT ONCE WHEN, 
            //FIRST LOADING IN THE SHIT (IMAGINE IF SOMEONE HAD 30 TEAMS, THAT WOULD BE 150 PFPS AND MORE)

            const temp2lol = document.getElementById("Tmne"+d).innerHTML;
            
            let clicked = false;
            let bigorsmall = false;
            if (document.getElementById(".BanFileExplorer").style.height === "750px"){
                bigorsmall = true;
            }
            let numColmss = bigorsmall ? 6 : 4;

            let space = 0;
            divider.onmouseover = function(){

                
               
                divider.style.width = 300;
                cvrimg.width = 300;
                cvrimg.style.removeProperty('filter');
                
                document.getElementById("Tmne"+d).style.filter= "drop-shadow(1px 0px 2px #000000)";
                document.getElementById("Tmne"+d).innerHTML = temp;

                document.getElementById("fav"+d).style.transform = "translate(200px,-60px)";
                let savedTeams = [];
                if(localStorage.getItem("savedTeams")){
                    savedTeams = JSON.parse(localStorage.getItem("savedTeams"));
                }
                document.getElementById("fav"+d).onclick = function(){
                    clicked = true;
                    document.getElementById("favimg"+d).src = "https://atomicrecall.github.io/Cipher/images/NicePng_star-shape-png_5691440_"+3+".png";
                    
                    if(localStorage.getItem("NOFACEITACCOUNT")!= 1){
                        pushToSavedTeams(datan.team_id);
                        location.reload();
                    }
                    else{
                        savedTeams.push(datan.team_id);
                        localStorage.setItem("savedTeams", JSON.stringify(savedTeams));
                        location.reload();
                    }
                    
                    
                }

                document.getElementById("fav"+d).onmouseover = function(){
                    if(clicked == true){
                        document.getElementById("favimg"+d).src = "https://atomicrecall.github.io/Cipher/images/NicePng_star-shape-png_5691440_"+3+".png";
                    }
                    else{
                        document.getElementById("favimg"+d).src = "https://atomicrecall.github.io/Cipher/images/NicePng_star-shape-png_5691440_"+2+".png";
                    }
                }
                document.getElementById("fav"+d).onmouseout = function(){
                    if(clicked == true){
                        document.getElementById("favimg"+d).src = "https://atomicrecall.github.io/Cipher/images/NicePng_star-shape-png_5691440_"+3+".png";
                    }
                    else{
                        document.getElementById("favimg"+d).src = "https://atomicrecall.github.io/Cipher/images/NicePng_star-shape-png_5691440_"+1+".png";
                    }
                }



                //d is current child; lol holds all childs.
                let lol = document.getElementById("foundteamsdivider").children;
            
                // console.log(document.getElementById("div"+d));

            for (let l = 1; l < lol.length; l++){
                console.log(lol[l].id.substring(3)+" VAG");

                //console.log(lol[l].id);
    
                    if (parseInt(lol[l].id.substring(3))==(d)){
                         //console.log("WE FOUND THE SPACE for "+lol[l].id+" d is: "+d);

                        space = l;
                        break;
                      }
                    else{
                        continue;
                    }
            }
            document.getElementById("pfpp"+(lol[space].id.substring(3))).style.transform = "translate(170px,-120px)";
            console.log("moving "+"pfpp"+(lol[space].id.substring(3)));
            document.getElementById("pfpp"+(lol[space].id.substring(3))).style.filter = "drop-shadow(0px .1px 2px black)";
            document.getElementById("pfpp"+(lol[space].id.substring(3))).style.opacity = "1";

                //find space in list from all childs, check if the child accross from it is there, if so do the shit, if not dont do shit
                if(lol[space+1] != undefined && lol[space+1] != null){
                    console.log("GO UNVISIBLE "+lol[space+1].id);
                 document.getElementById(lol[space+1].id).style.transition = "0.5s";
                 document.getElementById(lol[space+1].id).style.opacity = 0;
                 document.getElementById(lol[space+1].id).style.transform+="translateY(-100px)";
             }
             else {
               //  console.log("DO NOTHING");
              }
            }
            divider.onmouseout = function(){
                //make sure to delete the shit you made up top!
                document.getElementById("Tmne"+d).innerHTML = temp2lol;
                divider.style.width = 200;
                cvrimg.width = 200;
                cvrimg.style.filter = "blur(2px)";
                document.getElementById("fav"+d).style.transform = "translate(115px, -60px)";

                document.getElementById("avat"+d).style.transform = "translate(5px, -60px)";

                /*
                //for each row
                for(let o = 1; o <= 2; o++){
                if(document.getElementById(".BanFileExplorer").children[space+(o*4)] != undefined){
                    document.getElementById(document.getElementById(".BanFileExplorer").children[space+(o*4)].id).style.opacity = 1;
                    document.getElementById(document.getElementById(".BanFileExplorer").children[space+(o*4)].id).style.transform+= "translate(-100px)";
                }
                else {
                    //DO NOTHING
                }
                
            }
                */
            document.getElementById("pfpp"+(document.getElementById("foundteamsdivider").children[space].id.substring(3))).style.transform = "translate(10px,-120px)";
            document.getElementById("pfpp"+(document.getElementById("foundteamsdivider").children[space].id.substring(3))).style.opacity = "0";
            if(document.getElementById("foundteamsdivider").children[space+1] != undefined || document.getElementById("foundteamsdivider").children[space+1] != null){
                if(localStorage.getItem("NOFACEITACCOUNT")!=0){
                    document.getElementById(document.getElementById("foundteamsdivider").children[space+1].id).style.transform+="translateY(100px)";
                }
                else{
                    document.getElementById(document.getElementById("foundteamsdivider").children[space+1].id).style.transform+="translateY(100px)";
                }
                document.getElementById(document.getElementById("foundteamsdivider").children[space+1].id).style.opacity = 1;
                
            }
            else {}
            }
        }
        });

        return;
}
function getUpcomingMatches(team,season,upcomingdivider){
    
    console.log("division = "+localStorage.getItem("division"));
    switch (localStorage.getItem("division")){
        case "Main":
        //const url = `championships/v1/matches&participantId=${team}&participantType=TEAM&championshipId=c9f295b8-f68d-492b-bc38-75628dd91103`
        return fetch(`https://cipher-virid.vercel.app/api/faceitProxy?endpoint=&participantId=${team}&participantType=TEAM&championshipId=c9f295b8-f68d-492b-bc38-75628dd91103&limit=20`,{
            method: 'GET',
            headers:{
                'Access-Control-Allow-Origin' : '*',

                
            }
        })
        
        /*
        return fetch(`https://www.faceit.com/api/championships/v1/matches?participantId=`+team+`&participantType=TEAM&championshipId=c9f295b8-f68d-492b-bc38-75628dd91103&limit=20&offset=0
        `,{
            method: 'GET'
        })
            */
        .then((response) => {
            if (response.status === 404) {
                return Promise.resolve();
            } else if (!response.ok) {
                console.log(response);
                throw new Error("Couldn't fetch that data");
            }
            return response.json();
        })
        .then((data) => {
            if (data != null){
            let payload = data.payload;
            console.log(payload.items[payload.items.length-1]);
            
            if (payload.items[payload.items.length-1].status === "finished"){
                console.log("paload lengt 0");
                document.getElementById("removemepls").remove();
                return;
            }
                
            let matches = payload.items;
            const upcomingteams = [];
            for (const match of matches){

                if (match.status == "created"){
                    let matchDate = new Date (match.origin.schedule);
                    let factions = match.factions;
                    for (const faction of factions){
                        if (faction.id != team){
                            
                            upcomingteams.push(faction.id);
                            upcomingteams.push(matchDate.toDateString());
                            //funnyfunction(upcomingteams,upcomingdivider);
                            //upcomingteams.pop();
                        }
                    }

                   

                    
                   // console.log(matchDate);

                }
                //if(matchDateDiv){
                    //document.getElementById(upcomingdivider).appendChild(matchDateDiv);

               // }

            }
            if (upcomingteams){
                funnyfunction(upcomingteams,upcomingdivider);
                
            }
            
        }
        })
        break;
        case "Advanced":
                //const url = `championships/v1/matches&participantId=${team}&participantType=TEAM&championshipId=c9f295b8-f68d-492b-bc38-75628dd91103`
            return fetch(`https://cipher-virid.vercel.app/api/faceitProxy?endpoint=&participantId=${team}&participantType=TEAM&championshipId=37fa33a6-5bb5-469d-b83a-d53893a55de4&limit=20`,{
                method: 'GET',
                headers:{
                    'Access-Control-Allow-Origin' : '*',
        
                    
                }
            })
                
                /*
                return fetch(`https://www.faceit.com/api/championships/v1/matches?participantId=`+team+`&participantType=TEAM&championshipId=c9f295b8-f68d-492b-bc38-75628dd91103&limit=20&offset=0
                `,{
                    method: 'GET'
                })
                    */
                .then((response) => {
                    if (response.status === 404) {
                        return Promise.resolve();
                    } else if (!response.ok) {
                        console.log(response);
                        throw new Error("Couldn't fetch that data");
                    }
                    return response.json();
                })
                .then((data) => {
                    if (data != null){
                    let payload = data.payload;
                    console.log(payload);
                    
                    let matches = payload.items;
                    const upcomingteams = [];
                    for (const match of matches){
        
                        if (match.status == "created"){
                            let matchDate = new Date (match.origin.schedule);
                            let factions = match.factions;
                            for (const faction of factions){
                                if (faction.id != team){
                                    
                                    upcomingteams.push(faction.id);
                                    upcomingteams.push(matchDate.toDateString());
                                    //funnyfunction(upcomingteams,upcomingdivider);
                                    //upcomingteams.pop();
                                }
                            }
        
                           
        
                            
                           // console.log(matchDate);
        
                        }
                        //if(matchDateDiv){
                            //document.getElementById(upcomingdivider).appendChild(matchDateDiv);
        
                       // }
        
                    }
                    if (upcomingteams){
                        funnyfunction(upcomingteams,upcomingdivider);
                        
                    }
                    
                }
                })
                break;       
         case "Intermediate":
                //const url = `championships/v1/matches&participantId=${team}&participantType=TEAM&championshipId=c9f295b8-f68d-492b-bc38-75628dd91103`
            return fetch(`https://cipher-virid.vercel.app/api/faceitProxy?endpoint=&participantId=${team}&participantType=TEAM&championshipId=c36f31b6-c448-49a5-bfdc-add7666de250&limit=20`,{
                method: 'GET',
                headers:{
                    'Access-Control-Allow-Origin' : '*',
        
                    
                }
            })
                
                /*
                return fetch(`https://www.faceit.com/api/championships/v1/matches?participantId=`+team+`&participantType=TEAM&championshipId=c9f295b8-f68d-492b-bc38-75628dd91103&limit=20&offset=0
                `,{
                    method: 'GET'
                })
                    */
                .then((response) => {
                    if (response.status === 404) {
                        return Promise.resolve();
                    } else if (!response.ok) {
                        console.log(response);
                        throw new Error("Couldn't fetch that data");
                    }
                    return response.json();
                })
                .then((data) => {
                    if (data != null){
                    let payload = data.payload;
                    console.log(payload);
                    
                    let matches = payload.items;
                    const upcomingteams = [];
                    for (const match of matches){
        
                        if (match.status == "created"){
                            let matchDate = new Date (match.origin.schedule);
                            let factions = match.factions;
                            for (const faction of factions){
                                if (faction.id != team){
                                    
                                    upcomingteams.push(faction.id);
                                    upcomingteams.push(matchDate.toDateString());
                                    //funnyfunction(upcomingteams,upcomingdivider);
                                    //upcomingteams.pop();
                                }
                            }
        
                           
        
                            
                           // console.log(matchDate);
        
                        }
                        //if(matchDateDiv){
                            //document.getElementById(upcomingdivider).appendChild(matchDateDiv);
        
                       // }
        
                    }
                    if (upcomingteams){
                        funnyfunction(upcomingteams,upcomingdivider);
                        
                    }
                    
                }
                })
                break;
    } 
    
}
function removeElementsByClass(className) {
    let elements = document.getElementsByClassName(className);
    while(elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function pushToSavedTeams(team_id){
    const OMFG = database.ref('USERS/'+name+'/SAVED_TEAMS/');

    OMFG.push(team_id);
}