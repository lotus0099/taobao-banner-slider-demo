
window.onload=function(){
    var oBanner = document.getElementById('banner-slide');
    var oBanerSideUl = oBanner.getElementsByClassName('i-b-Ul')[0];
    var oTab = document.getElementById('inner-tab-s');
    var oTabLi = oTab.getElementsByTagName('li');
    var oBtnRgArrow = document.getElementById("i-btn-r");
    var oBtnLfArrow = document.getElementById("i-btn-l");
    var index=0;
    var timer=null;
    var nowTime = 0;
    oTabLi[0].className = "on";
    // oBanerSideUl.style.marginLeft = 0+'px';

    for (var i = 0; i < oTabLi.length; i++){
        oTabLi[i].index = i;
        oTabLi[i].onclick = function(){
            oTabLi[index].className = "";
            index = this.index;
            change();
        }
    }
    oBtnRgArrow.onclick = function(){
        if(new Date() - nowTime>200){
            nowTime = new Date();
            oTabLi[index].className = "";

            index++;
            index %= oTabLi.length+1 ;
            change();
        }

    }
     oBtnLfArrow.onclick = function(){
            if(new Date() - nowTime>200){
                 nowTime = new Date();
            oTabLi[index].className = "";

            if(index<0) {
                index = oTabLi.length-1;
            }else{
                index--;
            };
            change();
        }
    }
    oBanner.onmouseenter = function(){
        clearInterval(timer);
    }
    // oBanner.onmouseleave = function(){
    //     auto();
    // }

    function auto(){
        timer = setInterval(function(){
            oTabLi[index].className = "";
            index++;
            index %= oTabLi.length;
            change();
        },1000)
    }
     function change(){
         var now = index;
         now %= oTabLi.length;
         if(now<0){
             now = oTabLi.length-1;
         }
         oTabLi[now].className = "on";
         move(oBanerSideUl,{'marginLeft':-520*(index+1)+'px'},200,function(){
             if(index >= oTabLi.length){
                 this.style.marginLeft='-520px';
                 index = now;
             }
             else if(index == -1){
                 this.style.marginLeft=-520*oTabLi.length+'px';
                 index = now;
             }
         },'linear');
    }

}
