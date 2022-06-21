

//codes for running the clock

var seconds = document.getElementById('seconds');
var min = document.getElementById('min');
var hour = document.getElementById('hours');



var audio = new Audio("assets/ringtone.mp3")

var timer = function(){




    let now = new Date();

    let hh = now.getHours();
    let minn = now.getMinutes();
    let sec = now.getSeconds();

    
    seconds.innerText = sec;
    min.innerText = minn;
    hours.innerText = hh;



    //code to call alert if the time is equal to the alarm 

    if(hh==0 && minn==0){

        if(alarmArray.includes(hh+minn+sec)){
            
            audio.play();
            window.alert("Hey it is: "+hh + " " + minn + " " + sec  );
            alarmAnimation();
        };

    }else if(hh==0 && minn>0){
        
        if(alarmArray.includes(hh+(minn*60)+sec)){
            
            audio.play();
            window.alert("Hey it is: "+hh + " " + minn + " " + sec  );
            alarmAnimation();
        };
    }else{
        if(alarmArray.includes((hh*60*60)+(minn*60)+sec)){
           
            audio.play();
            window.alert("Hey it is: "+hh + " " + minn + " " + sec  );
            alarmAnimation();
        }
    }


    

    
}

var intervalID = setInterval(timer, 1000);


//clock code ends here













//to pause the alarm



let css = window.document.styleSheets[0];


var stopA = document.getElementById('stopAlarm');

function alarmStop(){
    audio.pause();
    audio.currentTime = 0;
}

stopA.addEventListener('click',alarmStop);


//function for alarm animation 


function alarmAnimation(){
    stopA.style.animation = "myAnimation infinite";
}






// from here we will start adding HTML tags dynamically


var ull = document.getElementById('ull');
var add = document.getElementById('newAlarm');

var alarmArray =[];

var iter = 0;

function addListItem(){

    
    let item = document.createElement('li');
    
    var addAlarmTime = document.getElementsByClassName('time');
    let hours = addAlarmTime[0].value;
    let mins = addAlarmTime[1].value;
    let sec = addAlarmTime[2].value;



    //code to add alarm to alarm to the array of alarms when we add a new alarm


    if(hours==0 && mins==0){

        alarmArray[iter] = parseInt(hours) + parseInt(mins) + parseInt(sec);

    }else if(hours==0 && mins>0){

        alarmArray[iter] = parseInt(hours) + (parseInt(mins)*60) + parseInt(sec);
    }else{
       
        alarmArray[iter] = (parseInt(hours)*60*60) + (parseInt(mins)*60) + parseInt(sec);
    }

    

    

  //code to clear the contents of the input box once the add button is pressed
    

    addAlarmTime[0].value ='';
    addAlarmTime[1].value ='';
    addAlarmTime[2].value ='';



    //code to add the new alarm in the alarm list

    item.innerHTML = ' <p>Next Alarm on</p><p class="changeHours"></p><p>h :</p><p class="changeMins"></p><p>m :</p><p class="changeSec"></p> <p>s</p><button class="deleteB">Delete</button>';


    ull.appendChild(item);
    // document.appendChild(item);


    var changeHours = document.getElementsByClassName('changeHours');
    var changeMins = document.getElementsByClassName('changeMins');
    var changeSec = document.getElementsByClassName('changeSec');

    

    changeHours[iter].innerText = hours;
    changeMins[iter].innerText = mins;
    changeSec[iter].innerText = sec;


    //to delete the alarm from the list

    

   

    //delete part ends here

    iter++;


    console.log(alarmArray);
    
    
}








//function to remove the alarm from the alarm list


var delB = document.getElementsByClassName('deleteB');


function removeAlarm(){

    function reee(event){
    
        var plist = event.target.parentElement.getElementsByTagName('p');
        
        var delValue = parseInt(plist[1].innerText)*60*60 +parseInt(plist[3].innerText)*60 +parseInt(plist[5].innerText)

        if(alarmArray.includes(delValue)){
            var elemIndex = alarmArray.indexOf(delValue) ;

            alarmArray.splice(elemIndex,1);

            console.log(alarmArray);


        }

        console.log(delValue);
        

        event.target.parentElement.remove();

    }


    for(var i =0; i<delB.length; i++){

        delB[i].addEventListener('click',reee);
    
    }


}

removeAlarm();



add.addEventListener('click', addListItem);
add.addEventListener('click', removeAlarm);







