
window.onload=function(){
    var oBanner = document.getElementById('banner-slide');
    var oBanerSideUl = oBanner.getElementsByClassName('i-b-Ul');
    var oTab = document.getElementById('inner-tab-s');
    var oTabLi = oTab.getElementsByTagName('li');
    var oBtnRgArrow = document.getElementById("i-btn-r");
    var oBtnLfArrow = document.getElementById("i-btn-l");
    var index=0;
    var timer=null;
    oTabLi[0].className = "on";
    oBanerSideUl[0].style.marginLeft = 0+'px';
    console.log(oTabLi[1].className);
    for (var i = 0; i < oTabLi.length; i++) {
        oTabLi[i].index = i;
        oTabLi[i].onclick = function(){
            oTabLi[index].className = "";
            oBanerSideUl[0].style.marginLeft = -520*index+'px';
            index = this.index;
            change();
        }
    }
 
    oBtnRgArrow.onclick = function(){
        oTabLi[index].className = "";
        oBanerSideUl[0].style.marginLeft = -520*index+'px';
        index++;
        index %= oTabLi.length;
        change();
    }
    oBtnLfArrow.onclick = function(){
        oTabLi[index].className = "";
        oBanerSideUl[0].style.marginLeft = -520*index+'px';
        index--;
        if(index<0) index = oTabLi.length-1;
        change();
    }



    oBanner.onmouseenter = function(){
        clearInterval(timer);
    }
    oBanner.onmouseleave = function(){
        auto();
    }



    function auto(){
        timer = setInterval(function(){
            oTabLi[index].className = "";
            oBanerSideUl[0].style.marginLeft = -520*index+'px';
            index++;
            index %= oTabLi.length;
            change();
        },3000)
    }


    function change(){
        oTabLi[index].className = "on";
        oBanerSideUl[0].style.marginLeft = -520*index+'px';
    }















}
