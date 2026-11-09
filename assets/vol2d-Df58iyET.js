const o={x:38,y:150},l={x:322,y:150},s={x:180,y:12},d=c=>c.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);function y(c){const t=Math.max(0,Math.min(1,c)),e=1-t,r=e*e*o.x+2*e*t*s.x+t*t*l.x,n=e*e*o.y+2*e*t*s.y+t*t*l.y,a=2*e*(s.x-o.x)+2*t*(l.x-s.x),i=2*e*(s.y-o.y)+2*t*(l.y-s.y);return{x:r,y:n,angle:Math.atan2(i,a)*180/Math.PI}}function f(c,t){const e=document.createElement("div");e.className="vol2d",e.setAttribute("aria-hidden","true");const r=d(t.colors[0]??"#1d2e6e");e.innerHTML=`<svg viewBox="0 0 360 200" preserveAspectRatio="xMidYMid meet" class="vol2d__svg">
    <defs><linearGradient id="vol2d-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8fbbe8"/><stop offset="1" stop-color="#e9f1f8"/></linearGradient></defs>
    <rect width="360" height="200" fill="url(#vol2d-sky)" class="vol2d__sky"/>
    <ellipse cx="90" cy="60" rx="30" ry="9" fill="#fff" opacity=".85"/><ellipse cx="110" cy="54" rx="20" ry="8" fill="#fff" opacity=".85"/>
    <ellipse cx="270" cy="82" rx="34" ry="10" fill="#fff" opacity=".8"/>
    <rect x="0" y="${o.y+14}" width="360" height="${200-o.y-14}" fill="#6f9b5a" class="vol2d__ground"/>
    <path d="M${o.x} ${o.y} Q${s.x} ${s.y} ${l.x} ${l.y}" fill="none" stroke="${r}" stroke-width="2" stroke-dasharray="6 6" class="vol2d__route"/>
    <circle cx="${o.x}" cy="${o.y}" r="5" fill="${r}"/><circle cx="${l.x}" cy="${l.y}" r="5" fill="#b0232c"/>
    <text x="${o.x}" y="${o.y+30}" text-anchor="middle" class="vol2d__lbl">${d(t.fromLabel)}</text>
    <text x="${l.x}" y="${l.y+30}" text-anchor="middle" class="vol2d__lbl">${d(t.toLabel)}</text>
    <g class="vol2d__plane"><text text-anchor="middle" dominant-baseline="central" font-size="26">✈</text></g>
  </svg>`,c.appendChild(e);const n=e.querySelector(".vol2d__plane"),a=i=>{const x=y(i);n.setAttribute("transform",`translate(${x.x.toFixed(1)} ${(x.y-8).toFixed(1)}) rotate(${(x.angle-45).toFixed(1)})`)};return a(0),{setProgress:a,dispose(){e.remove()}}}export{y as arcAt,f as mountFlight2d};
