"use strict";for(var arr=document.getElementsByClassName("element-class"),i=0;i<arr.length;i++)arr[i].classList.add("wowpanels");for(var ANGLE=45,panel=document.getElementsByClassName("wowpanels"),i=0;i<panel.length;i++)floatable(panel[i]);function floatable(n){n.addEventListener("mouseout",function(e){n.style.transform="perspective(300px)\n                  rotateX(0deg)\n                  rotateY(0deg)\n                  rotateZ(0deg)"}),n.addEventListener("mousemove",function(e){var t=n.clientWidth,a=n.clientHeight,t=(e.offsetX-.5*t)/t*ANGLE,a=(1-(e.offsetY-.5*a))/a*ANGLE;n.style.transform="perspective(300px)\n                  rotateX(".concat(a,"deg)\n                  rotateY(").concat(t,"deg)")})}