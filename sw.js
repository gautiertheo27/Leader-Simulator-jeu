// Service worker de French Simulator (généré par vite.config.ts — ne pas modifier).
const CACHE = "fs-rcldy6";
const ASSETS = ["./","./assets/en-CicHSNY2.bin","./assets/fr-D8SaDH38.bin","./assets/atkinson-hyperlegible-latin-400-normal-BrHNak5F.woff2","./assets/atkinson-hyperlegible-latin-ext-400-normal-DRk46D-x.woff2","./assets/atkinson-hyperlegible-latin-700-normal-GZI4o3u0.woff2","./assets/atkinson-hyperlegible-latin-ext-700-normal-BoVPHkS0.woff2","./assets/start-CgmLBC1I.css","./assets/ui-en-DA8b7Hm4.js","./assets/supabase-D2kTZBEP.js","./assets/three-DajCX99-.js","./assets/index-DXF1fkJi.js","./assets/start-CzbdkwzV.js","./assets/erreur-Do75PRqS.js","./assets/dom-BZA8kM2O.js","./assets/loadData-C7t4K32X.js","./assets/accord-B4o-eYvP.js","./assets/piafBattleLink-BgDr0gep.js","./assets/creatif-Dx4cc0C4.js","./assets/allemagne-COeyIMcK.js","./assets/bresil-Bd43UFzy.js","./assets/canada-BAlhCwq1.js","./assets/espagne-BhQuxmyP.js","./assets/etats-unis-JTY9YZIa.js","./assets/inde-BRE-HjRA.js","./assets/italie-Ctl6vHch.js","./assets/japon-Bvtjw_u3.js","./assets/mexique-Ce5AmfCc.js","./assets/royaume-uni-CKqR9lnh.js","./assets/actualites-CaHKFCls.js","./assets/agenda-Bh05kINi.js","./assets/aide-OjL7oQxm.js","./assets/album-C8s4Qlcd.js","./assets/allocutions-BJox4Z4b.js","./assets/appels-CwCDcXzE.js","./assets/archives-B5iM_sxf.js","./assets/cadeaux-allemagne-CgIz1lhS.js","./assets/cadeaux-bresil-CbiErKrc.js","./assets/cadeaux-canada-DVfv26wK.js","./assets/cadeaux-espagne-CqMS-B5C.js","./assets/cadeaux-etats-unis-BaI-sa37.js","./assets/cadeaux-france-uhKlX3x0.js","./assets/cadeaux-inde-sMDVhoeY.js","./assets/cadeaux-italie-D49iQ3a3.js","./assets/cadeaux-japon-Dd5J2S83.js","./assets/cadeaux-mexique-C44k00j8.js","./assets/cadeaux-royaume-uni-BoQr4yAE.js","./assets/cadeaux-visiteurs-B_8zlDJ_.js","./assets/chaos-DA1V-hH3.js","./assets/chapitres-BZ05bHbs.js","./assets/circuit-K47Z68sj.js","./assets/coalition-D-7fFjbu.js","./assets/crises-amies-Zuk7C6TF.js","./assets/crises-live-S7HPosFM.js","./assets/crises-ClW4uPU2.js","./assets/defis-mhrnNOCC.js","./assets/dirigeants-BLDYfQBb.js","./assets/economie-actions-BlhsaK4P.js","./assets/economie-conseils-B9yuUe6M.js","./assets/economie-evenements-DViqX2O3.js","./assets/economie-glossaire-CQr976sw.js","./assets/economies-C_y0pJ-E.js","./assets/election-BJZCl1g_.js","./assets/frappes-DV-fyrSB.js","./assets/gouvernement-BvrPK06N.js","./assets/groupes-Bo--IdGg.js","./assets/leviers-CWRzMYJz.js","./assets/lois-xTS_4IYq.js","./assets/missions-6kCueGJT.js","./assets/palais-DtPqB4uS.js","./assets/parcours-Dk-Ne1cg.js","./assets/pays-jouables-BXRzCbLq.js","./assets/pays-B-51Cpeg.js","./assets/personnages-hcij-oqY.js","./assets/personnalisation-DNb078do.js","./assets/personnel-BlX430rU.js","./assets/piaf-mots-CVHsUTN1.js","./assets/presse-C6jC4kSL.js","./assets/regions-C3uriP5_.js","./assets/reseaux-CzBzU1Qd.js","./assets/sante-C_go--81.js","./assets/scenarios-DDgcQOXz.js","./assets/secretaire-CBwPAvf6.js","./assets/sommets-CK5G6-2O.js","./assets/succes-yAehlzCx.js","./assets/tutoriel-BrHDPqrG.js","./assets/visites-DY7v_K8c.js","./assets/voyages-Dj_ekl5X.js","./assets/formes-BodFhHE0.js","./assets/allemagne-CQ26uutK.js","./assets/bresil-0aLBmD0x.js","./assets/canada-BBqHjqeA.js","./assets/espagne-CF9gHNTb.js","./assets/etats-unis-6XrZoXAh.js","./assets/france-rUhiTaew.js","./assets/inde-GT3DjdzD.js","./assets/italie-4Q3ycjlF.js","./assets/japon-D5RP0wma.js","./assets/mexique-BOwFezNB.js","./assets/royaume-uni-CkW5GIb2.js","./assets/sauvegardes-Dk2YxVAQ.js","./assets/chargerPartie-BROYL37h.js","./assets/aide-BI4KTM7N.js","./assets/index-C5BGTRY0.js","./assets/repriseSupabase-BM_2HDDT.js","./assets/realtime-BlLlf2N6.js","./assets/photoGroupe-_uBvrEpD.js","./assets/groupePhoto-DpCoxK-4.js","./assets/voixHdPropose-RIw_PJ3k.js","./assets/transport-Lft7lVPL.js","./assets/voixLocaleImpl-BmOUO2Wi.js","./assets/vol2d-Df58iyET.js","./assets/vol-C7Kdefg0.js","./assets/avion-CvYE5cpZ.js","./assets/props-ZXq_sP55.js","./assets/sommetOtanTex-CKZsbsrV.js","./assets/rooms3d-CL1ni5qr.js","./assets/windowview-BnXVHsdL.js","./assets/character-CEmmuuwr.js","./assets/personnages-OaVxZSDf.js","./assets/hud-BO_xrUPc.js","./assets/projection-DvNI-7jo.js","./assets/sommet-BtJ2YrHW.js","./assets/lieu-dbr1E937.js","./assets/lieuBuild-HEeErYk_.js","./assets/lieuExplore-D8nQT8KR.js","./assets/previewPresident-BbojfSZ3.js","./assets/previewBureau-Bmt8I3Sl.js","./assets/avion2d-BqXp2you.js","./assets/commun-C00K81J9.js","./assets/hashtags-B60ScaGO.js","./assets/modeles-bruit-Cn0rdgrP.js","./assets/modeles-critique-CYoeSA5w.js","./assets/modeles-ironie-pObDXUIL.js","./assets/modeles-soutien-DMgI7B-q.js","./assets/moqueries-Chw8Xjut.js","./assets/pays-sobvXjQQ.js","./assets/personas-a-CbXmXI7o.js","./assets/personas-b-CBHUuw53.js","./assets/sujets-taco1N8x.js","./assets/commun-C7xpdzmw.js","./assets/hashtags-C2wBYcvu.js","./assets/modeles-bruit-DFfzfGsY.js","./assets/modeles-critique-D5Vkotw0.js","./assets/modeles-ironie-CsNEYCou.js","./assets/modeles-soutien-C75QK6gh.js","./assets/moqueries-C95beCeu.js","./assets/pays-B8EBFG8N.js","./assets/personas-a-DjiQbjoE.js","./assets/personas-b-sf-CInUc.js","./assets/sujets-gvYxhheq.js","./assets/en-B0jIp3gK.js","./assets/fr-nrQ_G2sh.js","./assets/br-BEFVG79u.js","./assets/ca-D2yXuRRM.js","./assets/de-Dyp_EBz9.js","./assets/es-DJtQXXUw.js","./assets/fr-D_AlQ_iQ.js","./assets/gb-viNTzEN-.js","./assets/in-U46qxgcm.js","./assets/it-DKM0tgse.js","./assets/jp-De3UsS84.js","./assets/mx-ojgxvHEi.js","./assets/us-CQ_xXOs0.js","./assets/exterieur-BcF-9a7l.js","./assets/phonemize-glue-6Fg4apjO.js","./assets/ort.wasm.bundle.min-BgiqQayh.js","./assets/ort-wasm-simd-threaded-xRxoZKkW.mjs","./assets/worker-IhL9beh0.js","./manifest.webmanifest","./icons/icon-192.png","./icons/icon-512.png","./icons/icon-maskable-512.png","./icons/apple-touch-icon.png","./icons/favicon-64.png"];
const estImmuable = (url) => /\/assets\/[^/]+-[A-Za-z0-9_-]{8}\.[a-z0-9]+$/.test(url);

// Installation : les fichiers à empreinte déjà gardés par une version précédente sont recopiés (aucun réseau),
// le reste est téléchargé. Quelques téléchargements à la fois, pour ne pas écraser le jeu qui tourne.
async function installer() {
  const cache = await caches.open(CACHE);
  const file = ASSETS.slice();
  const travailleur = async () => {
    for (let url = file.shift(); url !== undefined; url = file.shift()) {
      const abs = new URL(url, self.location.href).href;
      if (await cache.match(abs)) continue;
      const ancien = estImmuable(abs) ? await caches.match(abs, { ignoreVary: true }) : undefined;
      if (ancien) await cache.put(abs, ancien);
      else await cache.add(new Request(abs, { cache: 'reload' }));
    }
  };
  await Promise.all([travailleur(), travailleur(), travailleur(), travailleur()]);
}

self.addEventListener('install', (event) => {
  event.waitUntil(installer().then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('fs-') && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  // Pages : réseau d'abord (nouvelle version dès qu'elle est publiée), cache hors ligne.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put('./', copy));
          return res;
        })
        .catch(() => caches.match('./', { ignoreVary: true }).then((r) => r || Response.error())),
    );
    return;
  }
  // Fichiers à empreinte : cache d'abord.
  event.respondWith(
    caches.match(req, { ignoreVary: true, ignoreSearch: false }).then((hit) => hit || fetch(req).then((res) => {
      if (res.ok) {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy));
      }
      return res;
    })),
  );
});
