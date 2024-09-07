export {submitSignupInfo, LogintoAccount}
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

function LogintoAccount(){
    var inputt = document.getElementById("usrr").value;
    var pwrd = document.getElementById("thefuckingpasswordyo").value;
    var user_ref = database.ref("USERS/"+inputt);
    user_ref.on('value', function(snapshot){
        var data = snapshot.val();
        if(pwrd != data.password){
            alert("incorrect password");
        }
        else {
            InitializeCheck(inputt);
            const wrapper = document.querySelector('.wrapper');
            if (!(wrapper.classList.contains('one') ||wrapper.classList.contains('two') || wrapper.classList.contains('three') || wrapper.classList.contains('four'))){
    
                wrapper.classList.add('three');
                wrapper.classList.add('fart');
                return;
            }
            for (let d = 1; d < wrapper.classList.length; d++){
                if (wrapper.classList.item(d).toString() == ('three')){
                    continue;
                }
                else {
                    wrapper.classList.replace(wrapper.classList.item(d),'three');
                }
    
            
            }
            wrapper.classList.add('login');
        }
    })
    //console.log("function end");
}
//TODO: START OF SEASON WAHTEVER AND END OF SEASON WHATEVER FROM AND TO
function getTeamNameDoc(name, offsett, docelement){
    fetch('https://open.faceit.com/data/v4/players/'+name+'/history?game=cs2&from=1734184800&to=1711414424&offset='+offsett+'&limit=20', {
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
    console.log("HOLY FUCK");
    for(let key = 0; key < data.items.length; key++){
        console.log(data.items[key].competition_name);
        // if the "items' competition_name has something to do with esea
        if(data.items[key].competition_name.toLowerCase().includes("esea")){
            //ssn = data.items[key].competition_name.substring(6,8);
            
            for(let key2 = 0; key2 < data.items[key].playing_players.length; key2++){
                //console.log(data.items[key].playing_players[key2]+"=="+name);
                if(data.items[key].playing_players[key2].includes(name)){
                    console.log("Fopund ur bitch ass LOL");
                    for (let key3 = 0; key3 < data.items[key].teams.faction1.players.length; key3++){
                        //console.log(data.items[key].teams.faction1.players[key3].player_id+" == "+ name);
                        if(data.items[key].teams.faction1.players[key3].player_id.includes(name)){
                            console.log("ohhh you in team1 big boy :) scrips1js");
                            document.getElementById(docelement).innerHTML =data.items[key].teams.faction1.nickname;

                            //console.log("ONE "+data.items[key].teams.faction1.team_id);
                            localStorage.setItem("team-id",data.items[key].teams.faction1.team_id);

      
                            return;
                        }
                        else {

                        }
                    }
                    console.log("just guessing, you probably in team2 right now big boy :)");

                    document.getElementById(docelement).innerHTML = data.items[key].teams.faction2.nickname;
                    localStorage.setItem("team-id",data.items[key].teams.faction2.team_id);

                    //console.log("TWO "+data.items[key].teams.faction2.team_id);

                    return;

                }
                else {
                    //console.log("didnt find ur bitch ass");
                }
                
            }
           // console.log("done with loop");
            
        }
    }
    getTeamNameDoc(name,offsett+20,docelement);
  });
}
function InitializeCheck(input){
    console.log("WHAT? "+input);
    //obtaining faceit information
    fetch('https://open.faceit.com/data/v4/players?nickname='+input+'&game=cs2', {
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
        const playerrid = data.player_id;
        const image = document.getElementById("profile");
        image.src = data.avatar;
        const bckrd = document.getElementById("background");
        bckrd.src= data.cover_image;
        const nme = document.getElementById("namee");
        nme.innerHTML = data.nickname;
        const lvl = document.getElementById("level");
        switch(data.games.cs2.skill_level){
            case 1:
                lvl.src= "https://support.faceit.com/hc/article_attachments/10525200575516";
                break;
            case 2:
                lvl.src= "https://support.faceit.com/hc/article_attachments/10525189649308";
                break;
            case 3:
                lvl.src= "https://support.faceit.com/hc/article_attachments/10525200576796";
                break;
            case 4:
                lvl.src= "https://support.faceit.com/hc/article_attachments/10525185037724";
                break;
            case 5:
                lvl.src= "https://support.faceit.com/hc/article_attachments/10525215800860";
                break;
            case 6:
                lvl.src= "https://support.faceit.com/hc/article_attachments/10525245409692";
                break;
            case 7:
                lvl.src= "https://support.faceit.com/hc/article_attachments/10525185034012";
                break;
            case 8:
                lvl.src= "https://support.faceit.com/hc/article_attachments/10525189648796";
                break;
            case 9:
                lvl.src= "https://support.faceit.com/hc/article_attachments/10525200576028";
                break;
            case 10:
                lvl.src= "https://support.faceit.com/hc/article_attachments/10525189646876";
                break;
            default:
                lvl.src= "https://support.faceit.com/hc/article_attachments/10525185033372";
                break;
                
        }
        getTeamNameDoc(playerrid,0,"temm");
        
    });
}


function submitSignupInfo(){

    //submitting data to firebase databse
    var input = document.getElementById('usr').value;
    var pswrd = document.getElementById('passwordd').value;
    var rcvry = document.getElementById('recvryEmaill').value;
    
    var crnttme = Math.floor(Date.now()/1000);
    InitializeCheck(input);
    var data = {
        faceitusername: input,
        password: pswrd,
        recoveryemail: rcvry,
        accountCreated: crnttme
    }
    var ref = database.ref('USERS/'+input).set(data);

    localStorage.setItem("first-time", 0);
    
    
    //console.log("TWO TWO TWO TWO = "+ref1);
}

localStorage.removeItem("faceit-name");
localStorage.removeItem("team-id");
