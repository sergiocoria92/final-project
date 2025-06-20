import"./main-DTBIIOtE.js";document.addEventListener("DOMContentLoaded",r);async function r(){const a=document.querySelector(".grid-container");if(a)try{const e=await(await fetch("/aboutme.json")).json();a.innerHTML="",e.forEach(t=>{const n=document.createElement("div");n.classList.add("photo-card"),n.innerHTML=`
        <div class="caption">
          <h4>${t.title}</h4>
        </div>
        <img src="${t.url}" alt="${t.title}" loading="lazy">
        <div class="description">
          <small>${t.description}</small>
        </div>
      `,a.appendChild(n)})}catch(o){console.error("Error loading event data:",o)}}
