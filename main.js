function mapRange(e,t,a,r,o){
    
    return r+(o-r)*(e-t)/(a-t)}
    
function getScrollPercent(){
    var e=document.documentElement,t=document.body,a="scrollHeight";return(e.scrollTop||t.scrollTop)/((e[a]||t[a])-e.clientHeight)*100}
    
function getRandomInt(e,t){
    return Math.floor(Math.random()*(t-e+1))+e}

    var mode=getRandomInt(1,3),a=getRandomInt(1,8);
    $(window).scroll(function(){
        var e=mapRange(getScrollPercent(),0,100,0,360),
        t=mapRange(getScrollPercent(),0,100,1,.3),
        a="background:rgb("+Math.floor(mapRange(getScrollPercent(),0,100,10,240))+", "+Math.floor(mapRange(getScrollPercent(),0,100,10,240))+","+Math.floor(mapRange(getScrollPercent(),0,100,10,240))+")";$(".left").attr("style",a),1==mode?$(".leftInner").css({"-webkit-transform":"scale("+t+") rotateY("+e+"360)","-moz-transform":"scale("+t+") rotateY("+e+"deg)","-ms-transform":"scale("+t+") rotateY("+e+"deg)","-o-transform":"scale("+t+") rotateY("+e+"deg)",transform:"scale("+t+") rotateY("+e/2+"deg)"}):2==mode?$(".leftInner").css({"-webkit-transform":"scale("+t+") rotateX("+e+"deg)","-moz-transform":"scale("+t+") rotateX("+e+"deg)","-ms-transform":"scale("+t+") rotateX("+e+"deg)","-o-transform":"scale("+t+") rotateX("+e+"deg)",transform:"scale("+t+") rotateX("+e+"deg)"}):3==mode&&$(".leftInner").css({"-webkit-transform":"scale("+t+") rotateY("+e+"deg) rotateX("+e+"deg)","-moz-transform":"scale("+t+") rotateY("+e+"deg) rotateX("+e+"deg)","-ms-transform":"scale("+t+") rotateY("+e+"deg) rotateX("+e+"deg)","-o-transform":"scale("+t+") rotateY("+e+"deg) rotateX("+e+"deg)",transform:"scale("+t+") rotateY("+e+"deg) rotateX("+e+"deg)"})});for(var images=[],i=0;i<13;i++)images.push(i),$(".leftInner").append('<div class="child img" id="img'+i+'" style="background-image: url(img/1/'+images[i]+'.gif"></div>');$(".left").append('<div class="logo"><h1>khai nguyen | fullstack developer | GenAI | Computer Vision</h1></div>'),$("#img11").css("display","block","color","red"),setInterval(function(){a<images.length-1?a++:a=0,$(".left .img").css("display","none"),$("#img"+a).css("display","block"),
        console.log(a)},1e3);

