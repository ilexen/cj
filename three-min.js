const locations=document.querySelectorAll("div.col-2 div"),updateTimes=function(){locations.forEach(t=>{let e=t.querySelector("output"),o=t.getAttribute("data-timezone"),i=luxon.DateTime.now().setZone(o);e.innerHTML=i.toFormat("HH:mm:ss")})};updateTimes(),setInterval(function(){updateTimes()},1e3);