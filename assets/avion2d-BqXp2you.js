const n={x:38,y:150},o={x:322,y:150},a={x:180,y:12},r=s=>s.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);function $(s){const t=Math.max(0,Math.min(1,s)),e=1-t,c=e*e*n.x+2*e*t*a.x+t*t*o.x,i=e*e*n.y+2*e*t*a.y+t*t*o.y,l=2*e*(a.x-n.x)+2*t*(o.x-a.x),x=2*e*(a.y-n.y)+2*t*(o.y-a.y);return{x:c,y:i,angle:Math.atan2(x,l)*180/Math.PI}}function h(s,t){const e=document.createElement("div");e.className="avion2d",e.setAttribute("aria-hidden","true");const c=t.livery==="otan",i=r(c?"#0b3b8f":t.colors[0]??"#1d2e6e"),l=c&&t.bannerText?`<g class="avion2d__banner"><rect x="${360/2-46}" y="8" width="92" height="22" rx="11" fill="#0b3b8f" stroke="#ffffff" stroke-width="1.5"/><text x="${360/2}" y="23" text-anchor="middle" class="avion2d__bannerTxt">${r(t.bannerText)}</text></g>`:"";e.innerHTML=`<svg viewBox="0 0 360 200" preserveAspectRatio="xMidYMid meet" class="avion2d__svg">
    <defs><linearGradient id="avion2d-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c?"#6f93c9":"#8fbbe8"}"/><stop offset="1" stop-color="#e9f1f8"/></linearGradient></defs>
    <rect width="360" height="200" fill="url(#avion2d-sky)" class="avion2d__sky"/>
    <ellipse cx="90" cy="70" rx="30" ry="9" fill="#fff" opacity=".85"/><ellipse cx="110" cy="64" rx="20" ry="8" fill="#fff" opacity=".85"/>
    <ellipse cx="270" cy="92" rx="34" ry="10" fill="#fff" opacity=".8"/>
    <rect x="0" y="${n.y+14}" width="360" height="${200-n.y-14}" fill="#6f9b5a" class="avion2d__ground"/>
    <path d="M${n.x} ${n.y} Q${a.x} ${a.y} ${o.x} ${o.y}" fill="none" stroke="${i}" stroke-width="2" stroke-dasharray="6 6" class="avion2d__route"/>
    <circle cx="${n.x}" cy="${n.y}" r="5" fill="${i}"/><circle cx="${o.x}" cy="${o.y}" r="5" fill="#b0232c"/>
    <text x="${n.x}" y="${n.y+30}" text-anchor="middle" class="avion2d__lbl">${r(t.fromLabel)}</text>
    <text x="${o.x}" y="${o.y+30}" text-anchor="middle" class="avion2d__lbl">${r(t.toLabel)}</text>
    ${l}
    <g class="avion2d__plane"><text text-anchor="middle" dominant-baseline="central" font-size="26">✈</text></g>
  </svg>`,s.appendChild(e);const x=e.querySelector(".avion2d__plane"),y=f=>{const d=$(f);x.setAttribute("transform",`translate(${d.x.toFixed(1)} ${(d.y-8).toFixed(1)}) rotate(${(d.angle-45).toFixed(1)})`)};return y(0),{setProgress:y,dispose(){e.remove()}}}export{$ as arcAt,h as mountAvion2d};
