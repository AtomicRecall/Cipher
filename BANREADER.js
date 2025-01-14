console.log("one two three");
var THETEAMWEARESEARCHING = localStorage.getItem("BITCHID");
var currentseason = 51;
function removeElementsByClass(className) {
    let elements = document.getElementsByClassName(className);
    while(elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}
removeElementsByClass("divv");
document.getElementById("srchBtn").style.visibility = "hidden";
document.getElementById("rtrnBtn").style.visibility = "visible";
document.getElementById("rtrnBtn").style.transform = "translate(1330px, 5px)";
var lastbooleaniswear = false;
var ffws = 0;
var ffws1 = 0;

var defaultimage = "https://atomicrecall.github.io/Cipher/images/DEFAULTT.jpg";
//setup image_links
var loadGears = "https://atomicrecall.github.io/Cipher/images/gears.gif";
var loadingimage = document.createElement("img");
loadingimage.src = loadGears;
loadingimage.style.width = "600px";
loadingimage.style.height = "200px";
loadingimage.style.transform = "translate(450px,150px)";
loadingimage.style.position = "absolute";
loadingimage.id = "removemepls";
loadingimage.classList.add("removemepls");
document.getElementById(".BanFileExplorer").appendChild(loadingimage);
var loadingbar = document.createElement("div");
loadingbar.innerHTML = "Now Searching: "
loadingbar.id = "loadingbar";
loadingbar.classList.add("divvv");
var finishedbar = document.createElement("div");
finishedbar.innerHTML = "Searched Matches: ";
finishedbar.id = "finishedbar";
finishedbar.classList.add("divvv");
var finishtext = document.createElement("div");
finishtext.id = "finishedtext";
finishtext.classList.add("divvv");
finishedbar.appendChild(finishtext);
document.getElementById(".BanFileExplorer").appendChild(loadingbar);
document.getElementById(".BanFileExplorer").appendChild(finishedbar);


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

//ancient = 0;
//anubis = 1;
//Inferno = 2;
//Overpass(D2) = 3;
//Mirage = 4;
//Nuke = 5;
//Verigo = 6;
var bans = new Array(7).fill(0);

//ancient = 0;
//anubis = 1;
//Inferno = 2;
//Overpass(D2) = 3;
//Mirage = 4;
//Nuke = 5;
//Verigo = 6;
var picks = new Array(7).fill(0);

//ancient = 0;
//anubis = 1;
//Inferno = 2;
//Overpass(D2) = 3;
//Mirage = 4;
//Nuke = 5;
//Verigo = 6;
var played = new Array(7).fill(0);

//ancient = 0;
//anubis = 1;
//Inferno = 2;
//Overpass(D2) = 3;
//Mirage = 4;
//Nuke = 5;
//Verigo = 6;
var L = new Array(7).fill(0);

//ancient = 0;
//anubis = 1;
//Inferno = 2;
//Overpass(D2) = 3;
//Mirage = 4;
//Nuke = 5;
//Verigo = 6;
var W = new Array(7).fill(0);
var picksnbans = [];

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
    document.getElementById("h3").innerHTML = datan.name.toUpperCase();
    const teamPfp = document.createElement("img");
    teamPfp.id = "teamPfp";
    if (datan.src != undefined){
        teamPfp.src = datan.avatar;
        document.getElementById('h3').prepend(teamPfp);
    }
    
    
    return GetLeaguePickBans(datan.leader, 0);  // Start fetching match history
})
.then(() => {
    picksnbans.sort((a, b) => b.finished - a.finished);
    console.log("Matches sorted:");
    console.log(picksnbans);
    var myshit = document.getElementById("removemepls");
    myshit.parentNode.removeChild(myshit);
    removeElementsByClass("divvv");
    printToWebsite(picksnbans, false);
})
.catch((error) => {
    console.error('Error:', error);
});

// Function to recursively fetch match history for the leader
function GetLeaguePickBans(leaderid, offset) {
    return fetch(`https://open.faceit.com/data/v4/players/${leaderid}/history?game=cs2&offset=${offset}&limit=100`, {
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer 29645383-3447-4a8d-90b8-76fcf5904c45'
        }
    }).then((res) => {
        if (!res.ok) {
            if (res.status == 404) {
                //update the loading bar saying like not found or error or some shit idk lmfao
                loadingbar.innerHTML = " Now Searching: "+`Match not found (404), continuing...`;
                console.warn(`Match history not found (404), continuing...`);
                return Promise.resolve(); // Resolve to continue without error
            }
            throw new Error("Couldn't fetch that data");
        }
        return res.json();
    })
    .then((data) => {

        let allMatches = data.items;
        
       if (!allMatches || allMatches.length === 0) return Promise.resolve(); // End if no more matches

        console.log(`Fetched ${allMatches.length} matches`);

        // Process each match and filter
        let matchPromises = allMatches.map((match) => {
            //update the loading bar here.
            var dating = new Date(match.finished_at*1000);
            loadingbar.innerHTML = " Now Searching: "+match.competition_name+" - "+dating.getMonth()+"/"+dating.getDate()+" - "+dating.getHours()+":"+dating.getMinutes();
    
            if (match.competition_name.includes("ESEA") && !match.competition_name.includes("S48") && !match.competition_name.includes("Qualifier")) {
                finishedtext.innerHTML+=match.competition_name+" - "+dating.getMonth()+"/"+dating.getDate()+" - "+dating.getHours()+":"+dating.getMinutes()+"<br>";
            
                return fetchMatchData(match.match_id, leaderid); // Fetch only non-S48 ESEA matches
            }
            return Promise.resolve();
        });

        // Check if we have hit S48
        if (allMatches.some(match => match.competition_name.includes("S48"))) {
            console.log("S48 reached, stopping further fetches.");
            return Promise.all(matchPromises); // Resolve when S48 is reached
        }

        // If not S48, fetch the next batch of matches (recursive call)
        return Promise.all(matchPromises).then(() => GetLeaguePickBans(leaderid, offset + 100));
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function fetchMatchData(matchid,leaderid) {

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
        let t1pfp = datan12.teams.faction1.avatar;

        let t2pfp = datan12.teams.faction2.avatar;
     
        
        let errthang = datan12;
        

        let compname = errthang.competition_name;

        let faceitlink = errthang.faceit_url.replace("{lang}", '');
        let season = errthang.competition_name.substring(6, 8);
        let bostof = errthang.best_of;
        //console.log(errthang)
        let fac1 = errthang.teams.faction1.name;
        let fac2 = errthang.teams.faction2.name;

        let fac1id = errthang.teams.faction1.faction_id;
        let fac2id = errthang.teams.faction2.faction_id;
        let finishedat = errthang.finished_at;

        let winnerid = "fartcock";
        let winner = datan12.detailed_results[0].winner;
        let fac1wins = 0;
        let fac2wins = 0;
        for (const winor of datan12.detailed_results){
            //check the winner of every winor, count the amount of times fac1 wins and count the amount of times fac2 wins, whichever one is bigger is the winner
            if (winor.winner == "faction1"){
                fac1wins++;
            }
            else {
                fac2wins++;
            }
            if(fac1wins > fac2wins){
                winner = fac1;
                winnerid = datan12.teams.faction1.faction_id;
            }
            else{
                winner = fac2;
                winnerid = datan12.teams.faction2.faction_id;
            }
        }
        return fetch(`https://open.faceit.com/data/v4/matches/${matchid}/stats`, {
            headers: {
                'accept': 'application/json',
                'Authorization': 'Bearer 29645383-3447-4a8d-90b8-76fcf5904c45'
            }
        })
        .then((res) => {
            if (res.status === 404) {
                if(season === "50"){
                    ffws = ffws +1;
                }
                else {
                    ffws1 = ffws1 +1;
                }
                
                console.warn(`Match ${matchid} not found (404), continuing...`);
                return Promise.resolve();
            } else if (!res.ok) {
                throw new Error("Couldn't fetch that data");
            }
            return res.json();
        })
        .then((datan123) => {
        
            //console.log(datan123);
            let detailedscr = datan123.rounds;
            let scoree = null;
            
            let temp = datan123.rounds[0].teams;
            let tem1id = temp[0].team_id;
            let tem2id = temp[1].team_id;
            if (datan123.rounds.length > 1){
                let tm1 = 0;
                let tm2 = 0;
                for (const m of datan123.rounds){
                    if (Number(m.round_stats.Score.substring(0,2)) > Number(m.round_stats.Score.substring(4,6))){
                        tm1++;
                    }
                    else{
                        tm2++;
                    }
                }
                scoree = tm1+" / "+tm2;
            }
            else{
                scoree = datan123.rounds[0].round_stats.Score;
            }
            
            return fetch(`https://cipher-virid.vercel.app/api/proxy?endpoint=match/${matchid}/history`,{
                headers:{
                    'Access-Control-Allow-Origin' : '*'
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
              //  console.log(payload);
                picksnbanz.push(payload.tickets[2]);

                for (let d = 0; d < picksnbanz[0].entities.length; d++) {
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
                let ist2 = false;
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
               
                for (const syndeysweeny of detailedscr){
                   // console.log(syndeysweeny);
                    //check each team, once you found the captain, send a variable to the specific team the captain is on, we will use the variable for other shit later
                    for (const players of syndeysweeny.teams[0].players){
                        if (players.player_id == leaderid){
                            team1.push("CAP");
                            ist2 = false;
                            break;
                        }
                        else{
                            ist2 = true;
                            continue;
                        }
                    }
                    if (ist2 == true){
                        team2.push("CAP");
                    }
                
                    (syndeysweeny.round_stats.Winner == syndeysweeny.teams[0].team_id) ? result.push(syndeysweeny.teams[0].team_id): result.push(syndeysweeny.teams[1].team_id);
                    (syndeysweeny.round_stats.Winner == syndeysweeny.teams[0].team_id) ? result.push(syndeysweeny.round_stats.Map) : result.push(syndeysweeny.round_stats.Map);
                    fart.push(syndeysweeny.round_stats.Score);
                }

                // Update global array
                picksnbans.push(picksnbanz[0]);
            });
        });
    })
    .catch((error) => {
        console.warn('Error:', error);
    });
    
}

function printToWebsite(dapicksanddabans, something){
    let wins = 0;
    let loss = 0;
    let wins1 = 0;
    let loss1 = 0;
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
    let tempor = currentseason;
    for (let d = 0; d < dapicksanddabans.length; d++){
        let gamediv = document.createElement('div');
        gamediv.id = "game"+d;
        gamediv.style.height = "150px";
        gamediv.style.width = "250px"
        gamediv.style.paddingTop = "5px";
        gamediv.style.paddingBottom = "5px";
        gamediv.style.transform = "translateX(20px)";
        gamediv.style.cursor = "pointer";
        let score = document.createElement('div');
        score.innerHTML = dapicksanddabans[d].score;
        score.classList.add("scr");
        //update the actual picks and bans here
        //go through dapickanddabans.entities
        //1. check if it's our team
        //2. if our team, check the guid
        //3. then, check the status  and choose accordingly either update bans variable or update picks variable
       // console.log(dapicksanddabans[d]);
       // console.log("The winner of the above game is "+dapicksanddabans[d].winnerID);
        // find the team you are looking at, look through both teams in dapicksanddabans[d] and make "the team we are looking at" be that team's ID
        for (const team in dapicksanddabans[d].teams){
            for (const thinginteam in team){
                if (thinginteam == "CAP"){

                }
            }
        }
       // console.log("The team we are looking at is "+THETEAMWEARESEARCHING);
      // console.log(dapicksanddabans[d].winnerID+" == "+THETEAMWEARESEARCHING);
       //console.log("EVERYTHING IS FUCKDD");
        if(dapicksanddabans[d].winnerID == THETEAMWEARESEARCHING){
            score.style.color = 'green';
            score.style.webkitFilter = "drop-shadow(0px 0px 2px #1eff00)";
            if(dapicksanddabans[d].season == "50"){
                wins = wins + 1;
            }
            else {
                wins1 = wins1 + 1;
            }
        }
        else{
            score.style.color = 'red';
            score.style.webkitFilter = "drop-shadow(0px 0px 2px #ff0000)";
            if(dapicksanddabans[d].season == "50"){
                loss = loss + 1;
            }
            else {
                loss1 = loss1 + 1;
            }
            
        }

        if (coun == 0){
            let SeasonDivider = document.createElement('div');
            SeasonDivider.id = "ssnNum";
            dapicksanddabans[d].season == "ea" ? SeasonDivider.innerHTML = "-------------- Qualifier" : SeasonDivider.innerHTML = "-------------- Season "+dapicksanddabans[d].season;
            SeasonDivider.style.fontSize = "20px";
            SeasonDivider.style.transform = "translateX(20px)";
            matchesDivider.append(SeasonDivider);
            coun = coun + 1;
        }

        coun = coun + 1;

        let holyshitsomanymaps = document.createElement('div');
        holyshitsomanymaps.id = "cvr";
        let c12 = 0;
        for (let j = 0; j < dapicksanddabans[d].detailed_results.length; j++){
            if (j % 2 != 0){

            }
            else{
                //this means j is even idk about 0?
               // console.log("POOP IN MY ASS");
               // console.log(dapicksanddabans[d].detailed_results[j]);
                switch(dapicksanddabans[d].detailed_results[j]){
                    case THETEAMWEARESEARCHING:
                        //console.log("we won "+dapicksanddabans[d].detailed_results[j+1]);
                        switch(dapicksanddabans[d].detailed_results[j+1]){
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
                        switch(dapicksanddabans[d].detailed_results[j+1]){
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
        for (const penis of dapicksanddabans[d].entities){
            if (penis.status == "pick"){
                if(penis.selected_by.toUpperCase() == h3.innerText){
                   // console.log("wE PICKED "+penis.guid);
                    switch(penis.guid){
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
                        switch (penis.guid){
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
                        switch (penis.guid){
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

                    holyshitsomanymaps.appendChild(image);
            }
            else if (penis.status == "drop"){
                if(penis.selected_by.toUpperCase() == h3.innerText){
                    //console.log("WE FUCKING BANNED "+penis.guid);
                    switch(penis.guid){
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


        gamediv.appendChild(holyshitsomanymaps);
        gamediv.appendChild(score);

        //what the fuck???
       if((d+1) < dapicksanddabans.length){
        if ((dapicksanddabans[d+1]!= undefined) && (dapicksanddabans[d+1].season == tempor-1 || dapicksanddabans[d+1].season == tempor)){
            coun = 0;
            tempor = tempor - 1;
        }
       }
       matchesDivider.appendChild(gamediv);

    }

    //organize the info from the global arrays initalized above
    for(let y = 0; y < 7; y++){
        let emptydiv = document.createElement('div');
        emptydiv.innerHTML = "_";
        emptydiv.id = "emptydiv";
        emptydiv.style.opacity = "0";
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
                DAancient.appendChild(emptydiv);
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
                DAanubis.appendChild(emptydiv);
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
                DAinf.appendChild(emptydiv);
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
                mapidentifier3.innerHTML = "Dust2";
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
                DAd2.appendChild(emptydiv);
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
                movementdivider.appendChild(emptydiv);
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
                movementdivider1.appendChild(emptydiv);
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
                movementdivider2.appendChild(emptydiv);
                movementdivider2.appendChild(verpics);
                movementdivider2.appendChild(verbans);
                movementdivider2.appendChild(verW);
                //movementdivider2.style.transform = "translate(250px, -495px)";
                DAver.appendChild(movementdivider2);
                allInfoDivider.appendChild(DAver);
              //  console.log("Banned vertigo "+bans[6]+" times");
              //  console.log("Played vertigo "+played[6]+" times");
                break;   
            default:
                break;

        }
    }
/*
    let record = document.createElement("div");
    record.id = "record";
    record.innerHTML = 'S50: <span class="green">'+wins+' <span class="black"> // <span class="red">'+loss+"<br>"+((ffws > 0) ? '<span class="smalltext">('+ffws+' FFWS or games not found)' : "" )+"</span>";
    record.style.fontSize = "35px";
    record.style.transform = "translate(470px,160px)";
    allInfoDivider.appendChild(record);

    let record2 = document.createElement("div");
    record2.id = "record2";
    record2.innerHTML = 'S49: <span class="green">'+wins1+' <span class="black"> // <span class="red">'+loss1+"<br>"+((ffws1 > 0) ? '<span class="smalltext">('+ffws1+' FFWS or games not found)' : "" )+"</span>";
    record2.style.fontSize = "35px";
    
    //-480px
   // record2.style.transform = "translate(200px,"+((ffws <= 0) ? "-480px" : " -450px")+ ")";
    record2.style.transform = "translate(470px,170px)";
    allInfoDivider.appendChild(record2);
    */

    
   // createToggle(allInfoDivider);
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
    if(!something){
        console.log(childdddrr);
        for(const childs of childdddrr){
         if (childs.id.includes("ssnNum")){
             createToggle(allInfoDivider);
            }
        }
    }
    
    document.getElementById(".BanFileExplorer").appendChild(document.getElementById("rtrnBtn"));
    let info = document.createElement("div");
    info.style.fontSize = "20px";
    info.style.color = "white";
    

    for (let d = 0; d < matchesDivider.children.length-2; d++){
        if(document.getElementById("game"+d)){
            document.getElementById("game"+d).onclick = function(){
                window.open(dapicksanddabans[d].link);
            }
        
            document.getElementById("game"+d).onmouseover = function(){
                quickInfoDivider.innerHTML = dapicksanddabans[d].compname;
                    document.getElementById("allInfo").style.transform = "translateX(775px)";
                    const butons = document.querySelectorAll('#penisandcock');
                    butons.forEach(element =>{
                        element.style.transform = "translate(1235px, -338px)"
                    });
                // quickInfoDivider.innerHTML+='<span class="grey"> '+dapicksanddabans[d].entities[0].selected_by+"</span> VS "+'<span class="grey"> '+dapicksanddabans[d].entities[1].selected_by+"</span>";
                    document.getElementById("game"+d).style.webkitFilter = "drop-shadow(0px 0px 10px #ffffff)";
                    //function that calculates info for current highlighted game (you can get the matchid by getting the vote_type from)
                    //dapicksanddabans[d] returns the correct ban information for that hightlighted map.
                    //we want the pick ban process, so take the array that's in picksandbans[d] and display what the info is ex. Spin da Block banned de_vertigo
                    //                                                                                                           PIG Gaming banned de_nuke
                    //                                                                                                           PIG Gaming banned de_inferno
                    //                                                                                                           Spin da Block banned de_mirage
                    //                                                                                                           Spind da Block banned de_dust2
                    //                                                                                                           PIG Gaming banned de_ancient
                    //                                                                                                           Left over but picked by PIG Gaming
                    let holyshitsomanymapss = document.createElement('div');
                    holyshitsomanymapss.id = "cvr";
                    holyshitsomanymapss.style.width = "600px";
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
                            holyshitsomanymapss.appendChild(bigimage);
                        }
                        
                        let final = (counter == 7) ? "(LEFT OVER) "+p.selected_by+" "+(p.status=="drop" ? '<span class="red"> banned' : '<span class="green"> picked')+"</span> "+p.guid+".<br/>": p.selected_by+" "+(p.status=="drop" ? '<span class="red"> banned' : '<span class="green"> picked')+"</span> "+p.guid+".<br/>";
                        info.innerHTML+=final;

                    }

                    let tm1pfp = document.createElement("img");
                    tm1pfp.id = "tm1pfp";
                    let fjksdhfksdj = dapicksanddabans[d].teams[0];
                    let tm1nme = document.createElement("div");
                    tm1nme.innerHTML = fjksdhfksdj[1];
                    tm1nme.style.position = "absolute";
                    tm1nme.style.transform = "translate(60px,-250px)";
                    tm1nme.style.color = "#ffffff";
                    tm1nme.style.fontSize = "25px";
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
                    tm2nme.style.position = "absolute";
                    tm2nme.style.transform = "translate(300px,-250px)";
                    tm2nme.style.color = "#ffffff";
                    tm2nme.style.fontSize = "25px";
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

                    holyshitsomanymapss.appendChild(tm1pfp);
                    holyshitsomanymapss.appendChild(tm1nme);
                    holyshitsomanymapss.appendChild(tm2pfp);
                    holyshitsomanymapss.appendChild(tm2nme);
                    holyshitsomanymapss.appendChild(VS);
                    quickInfoDivider.appendChild(holyshitsomanymapss);
                    quickInfoDivider.appendChild(info);

                    let omfgsomanycounters = 0;
                    for (const stuff of dapicksanddabans[d].detailed_results){
                        if(omfgsomanycounters % 2==0){
                        
                            if (dapicksanddabans[d].detailed_results[omfgsomanycounters] == THETEAMWEARESEARCHING){

                                let holyshitsomanyscore = document.createElement("div");
                                holyshitsomanyscore.classList.add("scoreinthescore")
                                holyshitsomanyscore.style.color = 'green';
                                holyshitsomanyscore.innerHTML = dapicksanddabans[d].detailed_score[omfgsomanycounters/2];
                                quickInfoDivider.appendChild(holyshitsomanyscore);
                                //dascore.style.color = 'green';
                                //dascore.style.webkitFilter = "drop-shadow(0px 0px 2px #1eff00)";
                                
                            }
                            else {
                                let holyshitsomanyscoree = document.createElement("div");
                                holyshitsomanyscoree.classList.add("scoreinthescore")
                                holyshitsomanyscoree.style.color = 'red';
                                holyshitsomanyscoree.innerHTML = dapicksanddabans[d].detailed_score[omfgsomanycounters/2];
                                quickInfoDivider.appendChild(holyshitsomanyscoree);
                                //dascore.style.color = 'red';
                                //dascore.style.webkitFilter = "drop-shadow(0px 0px 2px #ff0000)";
                                
                            }

                        }
                        else {

                        }
                        omfgsomanycounters++;
                    }
                    
                }
                
        document.getElementById("game"+d).onmouseout = function(){
            document.getElementById("allInfo").style.transform = "translate(260px,10px)";
            document.getElementById("game"+d).style.webkitFilter = "";
            
            const butons = document.querySelectorAll('#penisandcock');
                    butons.forEach(element =>{
                        element.style.transform = "translate(720px, -328px)";
                    });
            info.innerHTML = "";
            const myNode = document.getElementById("quickInfo");
            while (myNode.firstChild) {
                myNode.removeChild(myNode.lastChild);
            }
            quickInfoDivider.innerHTML = "PLEASE HOVER OVER A GAME";
            
        }
    }
    }
}
var THEFINALCOUNTERISWEAR = 0;
var ILIEDLOLL = 3;
    function createToggle(allinfodiv){
        THEFINALCOUNTERISWEAR++;
        // Create a container span element
    const span = document.createElement("div");
    span.id = "penisandcock";
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
    // Create a label element
    const label = document.createElement("label");
    label.htmlFor = "c"+THEFINALCOUNTERISWEAR; // Associate the label with the checkbox
    label.textContent = "S"+(51-(THEFINALCOUNTERISWEAR-1)); // Set the label text
   // label.fontSize = "10px";

    // Append the checkbox and label to the span
    span.appendChild(checkbox);
    span.appendChild(label);
    //span.style.backgroundImage(`url(${imag.src})`);

    
    
    checkbox.addEventListener("click", () => {
        if (checkbox.checked) {
            ILIEDLOLL-=1;

          label.style.color = "orange"; // Change text color
          label.style.fontSize = "30px"; // Change font size
          span.style.height = "45px";
          span.style.width = "45px";
          var newarray = getArrayFromSeason(label.textContent.substring(1), picksnbans);
          DotheThing(newarray,true);
          //span.style.transform = "translate(730px,160px)";
          document.getElementById("allInfo").style.width = "480px";
          lastbooleaniswear = true;
          console.log("WTF1 "+ILIEDLOLL);

        } else {

          ILIEDLOLL+=1;
          label.style.color = ""; // Reset text color
          label.style.fontSize = ""; // Reset font size
          span.style.height = "30px";
          span.style.width = "30px";

          console.log("WTFFF "+ILIEDLOLL);
            //make the finalarrayiswear be removed of the season that is clicked
            //find the season by doing picksnbans[d].season
            var newarray = getArrayFromSeason(label.textContent.substring(1), picksnbans);
            console.log("but first");
            console.log(THEFINALARRAYISWEAR);

            if (ILIEDLOLL%3 == 0){
                THEFINALARRAYISWEAR = THEFINALARRAYISWEAR.filter(item => item.season !== label.textContent.substring(1));
                DotheThing(picksnbans,true);
                ccccc++;
            }
            else{
                DotheThing(newarray,false);

            }

          //document.getElementById("mtches").style.transform = "translate(-20px, -155px)";
          document.getElementById("allInfo").style.width = "480px";
        }
      });
      
    document.getElementById(".BanFileExplorer").appendChild(span);
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

function getArrayFromSeason(ssn, arrayofallmatchess){
    console.log("finding "+ssn);

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
    bans = new Array(7).fill(0);
    picks = new Array(7).fill(0);
    played = new Array(7).fill(0);
    L = new Array(7).fill(0);
    W = new Array(7).fill(0);
    if(ccccc >= 1){
        THEFINALARRAYISWEAR.length = 0;
        ccccc = 0;
    }
    console.log("???? "+removeoradd);
    if(removeoradd){
        THEFINALARRAYISWEAR = THEFINALARRAYISWEAR.concat(arrayofallmatches2);
        document.getElementById("mtches").remove();
        document.getElementById("allInfo").remove();
        document.getElementById("quickInfo").remove();
        printToWebsite(THEFINALARRAYISWEAR, true);
    }
    else{
        THEFINALARRAYISWEAR = THEFINALARRAYISWEAR.filter(item => item.season !== arrayofallmatches2[0].season);
        document.getElementById("mtches").remove();
        document.getElementById("allInfo").remove();
        document.getElementById("quickInfo").remove();
        printToWebsite(THEFINALARRAYISWEAR, true);
    }

}