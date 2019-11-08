var dispDiv = document.getElementById("display");
var gheight = 0;

setInterval(function(){
    var b = Math.round(Math.random()*100);
    var rg = Math.round(Math.random()*30);
    dispDiv.style.backgroundColor = "rgb("+rg+","+rg+","+b+")";
},5000);
function make10Snows(){
    makeItSnow();
    makeItSnow();
    makeItSnow();
    makeItSnow();
    makeItSnow();
    makeItSnow();
    makeItSnow();
    makeItSnow();
    makeItSnow();
    makeItSnow();
}

function​ ​makeItSnow​(){
​var​ ​snow​ = ​document​.​createElement​(​"div"​);
​snow​.​innerHTML​ = ​'<svg class="svgs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85
85"><defs><style>.cls-1{fill:#e6e6e6;}.cls-2{fill:#fff;}</style></defs><title>snow</t itle><path class="cls-1" d="M77.48,15.52C70.46,26.48,43,9,36,25,28.21,42.81,9.9,52.3,7.57,54.44A41.84,41.84,0, 0,1,7,47.5a42.49,42.49,0,0,1,70.48-32Z" transform="translate(-7 -5)"/><path class="cls-2" d="M77.48,15.52A42.5,42.5,0,1,1,7.57,54.44C9.9,52.3,28.21,42.81,36,25,43,9,70.46,26.4 8,77.48,15.52Z" transform="translate(-7 -5)"/></svg>'​;
​var​ ​mleft​ = ​Math​.​round​(​Math​.​random​()*​100​); ​var​ ​mdim​ = ​Math​.​round​(​Math​.​random​()*​40​)+​10​;
​snow​.​src​ = ​"snow.svg"​; ​snow​.​className​ = ​"snows"​;
​snow​.​style​.​left​ = ​mleft​+​"%"​; ​snow​.​style​.​height​ = ​mdim​+​"px"​; ​snow​.​style​.​width​ = ​mdim​+​"px"​;
​dispDiv​.​appendChild​(​snow​);
​/*if(mdim > 40){ snow.style.transition = "top 5s"; snow.style.opacity = "0.9";
    } else if(mdim > 30){
        snow.style.transition = "top 6s";
        snow.style.opacity = "0.7";
    } else if(mdim > 20){
        snow.style.transition = "top 8s";
        snow.style.opacity = "0.5";
    } else {
        snow.style.transition = "top 10s";
        snow.style.opacity = "0.3";
}*/
​var​ ​msec​ = ​20​-​Math​.​round​(​mdim​/​5​); ​snow​.​style​.​transition​ = ​"top "​+​msec​+​"s"​; ​//snow.style.opacity = "0.3";
​var​ ​mop​ = ​mdim​/​50​;
​snow​.​style​.​opacity​ = ​mop​; ​setTimeout​(​function​(){
​snow​.​style​.​top​ = ​"150%"​;
​setTimeout​(​function​(){
​dispDiv​.​removeChild​(​snow​);
​gheight​ += ​0.1​; ​document​.​getElementById​(​"ground"​).​style​.​height​ = ​gheight​+​"px"​;
}, ​10000​); }, ​10​);
}


var timer = null;
document.getElementById("start").addEventListener("click", function(){
    //document.getElementById("snow").style.top = "100%";
    //document.getElementById("snow2").style.top = "100%";
    if(timer == null){
      timer = setInterval(make10Snows, 500);
    }
});

document.getElementById("stop").addEventListener("click", function(){
  clearInterval(timer);
  timer = null;
});

document.getElementById("freq").addEventListener("change", function(){
  if(timer != null){
    
  clearInterval(timer);
   var mnum = document.getElementById("freq").value;
    mnum = parseInt(mnum) * 100;
    var spd = 1100 - mnum;
    timer = setInterval(make10Snows, spd);
  }
});