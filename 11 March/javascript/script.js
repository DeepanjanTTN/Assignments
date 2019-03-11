function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var d = today.getDate();
    var mon = today.getMonth();
    var year = today.getFullYear();

    var hours = h;
    
    var monthName = ["January", "February", "March", "April", "May", "June",
                       "July", "August", "September", "October", "November", "December" ];
    
    var value;
    var am = "AM";
    var pm = "PM";
    
    var greeting;

    //12hrs code
    if(hours == 0){
        hours = 12;
    }

    if( hours > 12){
        hours = hours - 12;
        
    }
    
    // AM and PM code
    if(h >= 0 && h < 12  ){
        
        value = am;
    }
    else if(h >= 12 && h <= 24){
        value = pm;
    }

    // GM and AfterNoon and GN

    if( h >= 0 && h <=12 ){
        greeting = "Good Morning";
    }
    else if ( h > 12 && h < 16){
        greeting = "Good Afternoon";
    }else if (h >= 16 && h < 23){
        greeting = "Good Evening";
    }else{
        greeting = "Good Night";
    }

    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('showTime').innerHTML = 
     hours + " : " + m + " : " + s + "  " + value ;
    
    document.getElementById("greeting").innerHTML = 
    greeting;

    document.getElementById("showDate").innerHTML = 
    d + " " + monthName[mon] + " " + year;

    var t = setInterval(startTime, 1000);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }