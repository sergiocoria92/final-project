import{l as r,a as d}from"./footer-DvqAbUNO.js";/* empty css                 */document.addEventListener("DOMContentLoaded",()=>{r(),d()});document.addEventListener("DOMContentLoaded",i);async function i(){const a=document.querySelector(".grid-container");if(a)try{const n=await(await fetch("/aboutme.json")).json();a.innerHTML="",n.forEach(t=>{const o=document.createElement("div");o.classList.add("photo-card"),o.innerHTML=`
        <div class="caption">
          <h4>${t.title}</h4>
        </div>
        <img src="${t.url}" alt="${t.title}" loading="lazy">
        <div class="description">
          <small>${t.description}</small>
        </div>
      `,a.appendChild(o)})}catch(e){console.error("Error loading event data:",e)}}
