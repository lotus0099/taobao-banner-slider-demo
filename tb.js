(function(){
    var oBanner = document.getElementById('banner-slide');
    var oBUl = document.getElementsByClassName('i-b-Ul')[0];
    var oBtnLf = document.getElementById('i-btn-l');
    var oBtnRg =document.getElementById('i-btn-r');
    var oTab = document.getElementById('inner-tab-s');
    var oTabLi = oTab.getElementsByTagName('li');

    var index = 0;
    oTabLi[0].className = 'on';
    for(var i=0;i<oTabLi.length;i++){
        oTabLi[i].ww = i;
        oTabLi[i].onclick = function(){
            oTabLi[index].className = '';
            index = this.ww;
            change();
        }
    }
    oBtnRg.onclick = function(){
            oTabLi[index].className = '';
            index++;
            index %= oTabLi.length+1;
            change();
    }
    oBtnLf.onclick = function(){
        oTabLi[index].className = '';
        index = index<0?oTabLi.length-1:index-1;
        change();
    }

    function change(){
        var now = index;
        now %= oTabLi.length;
        if(now==-1){now=oTabLi.length-1 };
        oTabLi[now].className = 'on';
        move(oBUl,{marginLeft:-520*(index+1)+'px'},200,function(){
            if(index>=oTabLi.length){
                oBUl.style.marginLeft = -520+'px';
                index = now;
            }else if(index<0){
                oBUl.style.marginLeft = -520*(oTabLi.length)+'px';
                index = now;
            }
        });

    }
})();

