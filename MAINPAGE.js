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
    name = "";
    document.getElementById(".form-wrapper").style.opacity = "0";
    document.getElementById(".BanFileExplorer").style.height = "750px";
    document.getElementById(".BanFileExplorer").style.transform = "translateY(-100px)";
    document.getElementById("h3").style.transform = "translate(600px,-40px)";
    document.getElementById("h3").style.position = "absolute";
    document.getElementById(".BanFileExplorer").prepend(document.getElementById("h3"));
    document.getElementById("lgOut").innerHTML = "Log In?";
    document.getElementById("redirect").href = "LoginPage.html";
    localStorage.setItem("NOFACEITACCOUNT", 1);
    localStorage.setItem("NOTEAMALERT", 0);

}
else{
    document.getElementById("lgOut").addEventListener('click', () =>{
        localStorage.removeItem("faceit-name");
    })
    localStorage.setItem("NOFACEITACCOUNT",0);
    localStorage.setItem("NOTEAMALERT", 1);
}
const now = new Date();

var currenttimestring = now.getMonth()+1+"/"+now.getDate()+"/"+now.getFullYear()+" "+now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
var ref = database.ref('USERS/'+name+'/LastLoggedIn').set(currenttimestring);

let NONESEALEAGUEPLAYERR = -1;
var NONESEALEAGUEPLAYERREF = database.ref('USERS/'+name).on ('value', function(snapshot){
    var data = snapshot.val();
    console.log(data);
    var thingy = data.NONESEALEAGUEPLAYER;
    NONESEALEAGUEPLAYERR = thingy;
    console.log(NONESEALEAGUEPLAYERR);
});

document.getElementById("shit").innerHTML = ("Cipher: "+name);
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
    srch3.innerHTML = '<img id="btnimg" src = "https://erindayhaw.com/cdn/shop/products/Screenshot2023-01-12at9.54.51PM.png?v=1689431953&width=1445" />';


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
        document.getElementById(".BanFileExplorer").style.transform = "translateY(-100px)";
        document.getElementById(".BanFileExplorer").style.height = "480px";
        
        YOURSAVEDTEAMS();

        var upcomingmtches = document.createElement('div');
        upcomingmtches.id = "upcomingmatchesdivider";
        upcomingmtches.classList.add("divv");
        var upcomingmatchestag = document.createElement('div');
        upcomingmatchestag.id = "upcomingmatchestag";
        upcomingmatchestag.classList.add("divv");
        upcomingmatchestag.innerHTML = "UPCOMING MATCHES :";
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
            console.log("GET DOWN");
            console.log(data.cover_image);
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
            console.log("IS THIS PLAYER A ESEA LEAGUE PLAYER? "+NONESEALEAGUEPLAYERR);
            if (NONESEALEAGUEPLAYERR != 1){
                var upcomingmtches = document.createElement('div');
                upcomingmtches.id = "upcomingmatchesdivider";
                upcomingmtches.classList.add("divv");
                var upcomingmatchestag = document.createElement('div');
                upcomingmatchestag.id = "upcomingmatchestag";
                upcomingmatchestag.classList.add("divv");
                upcomingmatchestag.innerHTML = "YOUR NEXT OPPONENTS :";

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
                teamname.innerHTML = "Season "+localStorage.getItem("dafuckingseasonyo")+" for "+localStorage.getItem("dafuckingnameyo");
                if(localStorage.getItem('team-id') != null){
                    getUpcomingMatches(localStorage.getItem('team-id'),52,"upcomingmatchesdivider");
                }
                else{
                    getTeamNameDoc(data.player_id,0,"teamname",upcomingmtches);

                }
                teamname.style.filter = "drop-shadow(0px 0px 2px #000000)";
                document.getElementById(".form-wrapper").appendChild(teamname);
            }
        });
}
    removeElementsByClass("removemepls");  
}

function YOURSAVEDTEAMS(){
    console.log("RUNNING YOURSAVEDTEAMS");
    let NONESEALEAGUEPLAYERR3 = -1;
    var NONESEALEAGUEPLAYERREF = database.ref('USERS/'+name).on ('value', function(snapshot){
        var data = snapshot.val();
        console.log(data);
        var thingy = data.NONESEALEAGUEPLAYER;
        NONESEALEAGUEPLAYERR3 = thingy;
        console.log(NONESEALEAGUEPLAYERR3);
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
        console.log(dataa11);
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
    
    let counter = 0;
    let c = 1;
    for (let d = 0; d < dataalolfunny.length; d++){
        
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

            document.getElementById(wheretoadd).appendChild(div);
            div.appendChild(cvrimg);
            div.appendChild(avat);
            div.appendChild(Tmne);
            div.appendChild(pfpdiv);
            
            div.addEventListener('dblclick', () => {
                
            });
            var DELAY = 200, clicks = 0, timer = null;
            div.addEventListener('click', ()=> {
                clicks++;
                if(clicks === 1) {

                    timer = setTimeout(function() {
        
                        //perform single-click action
                        
                        //const urlParams = new URLSearchParams(window.location.search);
                       // urlParams.set('team',dataalolfunny[d]);
                       // window.location.search+=urlParams; 
                                    
                        let js = document.createElement("script");
                        js.type = "text/javascript"; 
                        js.src = "BANREADER.js";
                        document.body.appendChild(js);
                        localStorage.setItem("BITCHID" , dataalolfunny[d]);
                        clicks = 0; //after action performed, reset counter
                        
                    }, DELAY);
        
                } else {
                    if (!(wheretoadd === "upcomingmatchesdivider")){
                        clearTimeout(timer);    //prevent single-click action
                        if(confirm('Are you sure you want to delete '+Tmne.innerHTML+', fool?')){
                        
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
                        pfpdiv.style.transform = "translate(115px, -125px)";
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
            
        

        //change every 5, once the 5th 
        if(counter> 2){
            //every 5, move this one + the next 4, go into next 5 if needed
            console.log("WHAT ROW?? "+c)
            moveColumn(div,c,2);

            if (counter % 2 == 0){
                c++;
            }
        }
            

        });
    }
    


}
function moveColumn(fart,c,colms){
    //every 4, increases X by 120, increases y by 400
    if(colms == 4){
        fart.style.transform="translate("+(210*c)+"px,"+(((-420)*c))+"px)";
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
    if (beenfound || !(localStorage.getItem("dafuckingnameyo")=="")){
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
    for(let key = 0; key < data.items.length; key++){
        // if the "items' competition_name has something to do with esea
        if(data.items[key].competition_name.includes("ESEA") && !data.items[key].competition_name.includes("Qualifier")){
            ssn = data.items[key].competition_name.substring(6,8);

            for(let key2 = 0; key2 < data.items[key].playing_players.length; key2++){
                if(data.items[key].playing_players[key2].includes(name)){
                    console.log("Fopund ur bitch ass LOL");
                    for (let key3 = 0; key3 < 5; key3++){
                        if(data.items[key].teams.faction1.players[key3].player_id.includes(name)){

                            console.log("ohhh you in team1 big boy :)");
                            console.log(data.items[key]);
                            //ssn == "ea" ?  document.getElementById(docelement).innerHTML+="Qualifier for "+data.items[key].teams.faction1.nickname : document.getElementById(docelement).innerHTML+="Season "+ssn+" for "+data.items[key].teams.faction1.nickname;
                            document.getElementById(docelement).innerHTML="Season "+ssn+" for "+data.items[key].teams.faction1.nickname;
                            localStorage.setItem("dafuckingnameyo",data.items[key].teams.faction1.nickname);
                            localStorage.setItem('team-id', data.items[key].teams.faction1.team_id);
                            getUpcomingMatches(data.items[key].teams.faction1.team_id,52,"upcomingmatchesdivider");

                            beenfound = true;
                            return;

                        }
                    }
                    console.log("just guessing, you probably in team2 right now big boy :)");
                    //ssn == "ea" ?  document.getElementById(docelement).innerHTML+="Qualifier for "+data.items[key].teams.faction2.nickname : document.getElementById(docelement).innerHTML+="Season "+ssn+" for "+data.items[key].teams.faction2.nickname;
                    document.getElementById(docelement).innerHTML="Season "+ssn+" for "+data.items[key].teams.faction2.nickname;
                    localStorage.setItem("dafuckingnameyo",data.items[key].teams.faction2.nickname);
                    localStorage.setItem('team-id', data.items[key].teams.faction2.team_id);
                    getUpcomingMatches(data.items[key].teams.faction2.team_id,52,"upcomingmatchesdivider");

                    beenfound = true;
                    return;

                }
                else {
                    //console.log("didnt find ur bitch ass");
                }
                
            }
            //console.log("done with loop");
            
        }
    }
    getTeamNameDoc(name,offsett+20,docelement);
    return;
  });
}

function searchForTeams(teamnme){
    let counter = 0;
    let c = 1;
    var cocksucker = teamnme.split(' ').join('%20');
        fetch('https://open.faceit.com/data/v4/search/teams?nickname='+cocksucker+'&game=cs2&offset=0&limit=8', {
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
            let cvrimg = document.createElement('img');
            cvrimg.id = "cvrimg"+d;
            var pfpdivvv = document.createElement('div');
            pfpdivvv.id = "pfpp";
            pfpdivvv.style.position = "absolute";
            pfpdivvv.style.filter = "blur(100px)";
            var leaderpicture = undefined;
            var leadername = undefined;
            
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
                    pfp.src = leaderpicture;
                    if (leaderpicture == undefined){
                        pfp.src = "https://atomicrecall.github.io/Cipher/images/DEFAULTT.jpg";
                    }

                    var leadernamez = document.createElement('div');
                    leadernamez.id = leadername;
                    leadernamez.innerHTML = leadername;

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
                            console.log(datan12);
                            if(datan.cover_image == undefined){
                                cvrimg.src = "data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='29' height='50.115' patternTransform='scale(1) rotate(90)'><rect x='0' y='0' width='100%' height='100%' fill='%23161616'/><path d='M14.498 16.858L0 8.488.002-8.257l14.5-8.374L29-8.26l-.002 16.745zm0 50.06L0 58.548l.002-16.745 14.5-8.373L29 41.8l-.002 16.744zM28.996 41.8l-14.498-8.37.002-16.744L29 8.312l14.498 8.37-.002 16.745zm-29 0l-14.498-8.37.002-16.744L0 8.312l14.498 8.37-.002 16.745z'%20 stroke-width='1' stroke='%23303030' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>";
        
                            }
                            else{
                                cvrimg.src = datan12.cover_image;
        
                            }
                            const someleader = datan12.leader;
                            for (const players of datan12.members){
                                if (players.user_id == someleader){
                                    pfp.src = players.avatar;
                                    leadernamez.innerHTML = players.nickname;
                                }
                            }

                        })
                        pfpdivvv.appendChild(crown);
                        pfpdivvv.appendChild(pfp);
                        pfpdivvv.appendChild(leadernamez);
                    
            counter++;  
            
            //avatar and cover image in the right spot, will have to figure out how to do this automatically with lots of mother fucking entries
            var div = document.createElement('div');
            div.classList.add("divvv");
            div.id = "div"+d;
            div.style.position = "flex";
            document.getElementById(".BanFileExplorer").appendChild(div);

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
            div.appendChild(pfpdivvv);
            div.appendChild(cvrimg);


            

            avat.height = 40;
            avat.width = 40;
            avat.style.transform = "translate(5px, -60px)";
            div.appendChild(avat);
           
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
            div.appendChild(fav);


            div.appendChild(Tmne);


            //UNDOABLE TO DO PFPS FOR NOW BECAUSE I CANT GET PFP INFO,
            //UNLESS I DO A SEPERATE FUNCTION THAT FINDS ALL PFPS, THEN THAT WOULD BE GOOD FOR OPTIMIZING AS WELL, SO IT DOESNT LOAD ALL PFPS AT ONCE WHEN, 
            //FIRST LOADING IN THE SHIT (IMAGINE IF SOMEONE HAD 30 TEAMS, THAT WOULD BE 150 PFPS AND MORE)

            const temp2lol = document.getElementById("Tmne"+d).innerHTML;
            let space = 0;
            let clicked = false;
            let bigorsmall = false;
            if (document.getElementById(".BanFileExplorer").style.height === "750px"){
                bigorsmall = true;
            }
            let numColmss = bigorsmall ? 6 : 4;
            div.onmouseover = function(){

                div.style.width = 300;
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
                let lol = document.getElementById(".BanFileExplorer").children;
            
                // console.log(document.getElementById("div"+d));

            for (let l = 1; l < lol.length; l++){
                //console.log(lol[l].id.substring(3)+" VAG");
    
                    if (parseInt(lol[l].id.substring(3))==(d)){
                        // console.log("WE FOUND THE SPACE for "+lol[l].id+" d is: "+d);
                        space = l;
                        break;
                      }
                    else{
                        continue;
                    }
            }
           
                //find space in list from all childs, check if the child accross from it is there, if so do the shit, if not dont do shit
                if(lol[space+numColmss] != undefined && lol[space+numColmss] != null){
                    //console.log("GO UNVISIBLE "+lol[space+numColmss].id);
                 document.getElementById(lol[space+numColmss].id).style.transition = "0.5s";
                 document.getElementById(lol[space+numColmss].id).style.opacity = 0;
                 document.getElementById(lol[space+numColmss].id).style.transform+="translateY(-200px)";
             }
             if(lol[space+numColmss*2]!= undefined && lol[space+numColmss*2]!= null){
                    //console.log("FOUND YOU ALSO GO UNVISIBALEw "+lol[space+14].id);
                  document.getElementById(lol[space+numColmss*2].id).style.transition = "0.5s";
                  document.getElementById(lol[space+numColmss*2].id).style.opacity = 0;
                  document.getElementById(lol[space+numColmss*2].id).style.transform+="translateY(-200px)";
 
             }
             else {
               //  console.log("DO NOTHING");
              }
            }
            div.onmouseout = function(){
                //make sure to delete the shit you made up top!
                document.getElementById("Tmne"+d).innerHTML = temp2lol;
                div.style.width = 200;
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
            if(document.getElementById(".BanFileExplorer").children[space+numColmss] != undefined || document.getElementById(".BanFileExplorer").children[space+numColmss] != null){
                document.getElementById(document.getElementById(".BanFileExplorer").children[space+numColmss].id).style.opacity = 1;
                document.getElementById(document.getElementById(".BanFileExplorer").children[space+numColmss].id).style.transform+="translateY(200px)";
            }
            else {}
            if(document.getElementById(".BanFileExplorer").children[space+numColmss*2]!= undefined || document.getElementById(".BanFileExplorer").children[space+numColmss*2] != null){
                document.getElementById(document.getElementById(".BanFileExplorer").children[space+numColmss*2].id).style.opacity = 1;
                document.getElementById(document.getElementById(".BanFileExplorer").children[space+numColmss*2].id).style.transform+="translateY(200px)";
            }
            else {
                //DO NOTHING
            }
            }
            
            let fart = div;


            //change every 5, once the 5th 
            if(counter> numColmss){
                //every 5, move this one + the next 4, go into next 5 if needed
              //  console.log("moving search ");
               // console.log("WHAT ROW?? search "+c)
                moveColumn(fart,c,numColmss);
                
                if (counter % numColmss == 0){
                    
                    c++;
                   // console.log("INCREMENTED C ============="+c);
                }
            }
        }
        });

        return;
}
function getUpcomingMatches(team,season,upcomingdivider){
    

    switch (season){
        case 52:
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
            let matches = payload.items;
            const upcomingteams = [];
            for (const match of matches){
                if (match.status == "created"){
                    let factions = match.factions;
                    for (const faction of factions){
                        if (faction.id != team){
                            upcomingteams.push(faction.id);
                        }
                    }
                }
            }

            funnyfunction(upcomingteams,upcomingdivider);
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