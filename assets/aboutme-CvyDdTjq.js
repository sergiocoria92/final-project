import"./footer-6-9Lo2Fa.js";import"./main-IOcPYoUs.js";document.addEventListener("DOMContentLoaded",e);async function e(){const a=document.querySelector(".grid-container");if(a)try{const r=await(await fetch("/aboutme.json")).json();a.innerHTML="",r.forEach(t=>{const n=document.createElement("div");n.classList.add("photo-card"),n.innerHTML=`
        <div class="caption">
          <h4>${t.title}</h4>
        </div>
        <img src="${t.url}" alt="${t.title}" loading="lazy">
        <div class="description">
          <small>${t.description}</small>
        </div>
      `,a.appendChild(n)})}catch(o){console.error("Error loading event data:",o)}}
