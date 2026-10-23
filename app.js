// Portfolio Data — František Podaný
const CATEGORY_META = {
  "logo": { label: "Logo", dotClass: "dot-logo" },
  "packaging": { label: "Packaging", dotClass: "dot-packaging" },
  "key-visual": { label: "Key Visual", dotClass: "dot-kv" },
  "komunikace": { label: "Komunikace", dotClass: "dot-comm" }
};

// Studio visual crops (výřezy produktů, obalů, log a klíčových vizuálů) při najetí myší (hover)
function getProjectHoverSVG(project) {
  switch (project.visualType) {
    case "wine-bottle":
      return `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="bg-${project.id}" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#3c1b6e"/>
            <stop offset="100%" stop-color="#170930"/>
          </linearGradient>
          <linearGradient id="glass-${project.id}" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#140d1e"/>
            <stop offset="28%" stop-color="#3b224c"/>
            <stop offset="55%" stop-color="#190d24"/>
            <stop offset="100%" stop-color="#09040e"/>
          </linearGradient>
          <linearGradient id="gold-${project.id}" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#f6e0b5"/>
            <stop offset="100%" stop-color="#b88940"/>
          </linearGradient>
        </defs>
        <rect width="300" height="400" fill="url(#bg-${project.id})"/>
        <circle cx="220" cy="90" r="110" fill="#a87ffb" opacity="0.22"/>
        <g transform="translate(155, 210) rotate(-11)">
          <!-- Wine bottle silhouette crop -->
          <rect x="-20" y="-210" width="40" height="85" rx="4" fill="url(#glass-${project.id})"/>
          <rect x="-22" y="-205" width="44" height="14" rx="2" fill="url(#gold-${project.id})"/>
          <path d="M-20,-125 C-20,-85 -56,-65 -56,-15 L-56,180 L56,180 L56,-15 C56,-65 20,-85 20,-125 Z" fill="url(#glass-${project.id})"/>
          <!-- Minimalist embossed wine label crop -->
          <rect x="-48" y="-18" width="96" height="122" rx="3" fill="#faf7f2"/>
          <rect x="-40" y="-10" width="80" height="106" fill="none" stroke="url(#gold-${project.id})" stroke-width="1.2"/>
          <circle cx="0" cy="24" r="16" fill="none" stroke="#2c1654" stroke-width="2"/>
          <path d="M-10,20 L0,34 L10,20" fill="none" stroke="url(#gold-${project.id})" stroke-width="2.2"/>
          <rect x="-26" y="54" width="52" height="3.5" rx="1.5" fill="#1e1333"/>
          <rect x="-18" y="64" width="36" height="2.5" rx="1" fill="#8b7a9e"/>
          <!-- Glass highlight -->
          <rect x="-42" y="-30" width="7" height="190" rx="3.5" fill="#ffffff" opacity="0.16"/>
        </g>
      </svg>`;

    case "energy-can":
      return `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="canBody-${project.id}" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#1e191b"/>
            <stop offset="25%" stop-color="#473c40"/>
            <stop offset="55%" stop-color="#1c1618"/>
            <stop offset="100%" stop-color="#0d0a0b"/>
          </linearGradient>
          <linearGradient id="shockGold-${project.id}" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#ffe652"/>
            <stop offset="100%" stop-color="#e58c08"/>
          </linearGradient>
        </defs>
        <rect width="300" height="400" fill="#d96245"/>
        <circle cx="80" cy="110" r="140" fill="#ffb899" opacity="0.45"/>
        <g transform="translate(158, 196) rotate(13)">
          <rect x="-58" y="-128" width="116" height="256" rx="14" fill="url(#canBody-${project.id})"/>
          <rect x="-54" y="-133" width="108" height="8" rx="3" fill="#d8dce3"/>
          <rect x="-54" y="125" width="108" height="7" rx="3" fill="#b8bdc6"/>
          <polygon points="-58,-25 58,-52 58,22 -58,49" fill="url(#shockGold-${project.id})"/>
          <polygon points="-8,-42 18,-42 -2,-4 16,-4 -14,44 -4,4 -20,4" fill="#161214"/>
          <rect x="-42" y="-120" width="12" height="240" rx="6" fill="#ffffff" opacity="0.18"/>
        </g>
      </svg>`;

    case "dairy-pack":
      return `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <rect width="300" height="400" fill="#0e6778"/>
        <circle cx="240" cy="80" r="130" fill="#8df2eb" opacity="0.3"/>
        <!-- Mountain & meadow packaging crop -->
        <g transform="translate(150, 195) rotate(-6)">
          <rect x="-78" y="-105" width="156" height="210" rx="16" fill="#f9fbfd"/>
          <path d="M-78,10 Q-20,-35 25,-5 T78,-15 L78,105 L-78,105 Z" fill="#259399"/>
          <path d="M-78,42 Q-10,10 78,35 L78,105 L-78,105 Z" fill="#126872"/>
          <polygon points="-45,-10 0,-68 45,-10" fill="#d8f3f0"/>
          <polygon points="0,-68 22,-39 -12,-28" fill="#ffffff"/>
          <circle cx="-35" cy="-58" r="14" fill="#ffd166"/>
          <rect x="-46" y="54" width="92" height="8" rx="4" fill="#ffffff"/>
          <rect x="-30" y="70" width="60" height="5" rx="2.5" fill="#a8e8e2"/>
        </g>
      </svg>`;

    case "bistro-brand":
      return `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <rect width="300" height="400" fill="#cf5e43"/>
        <g transform="translate(150, 190) rotate(-8)">
          <!-- Embossed menu & coaster crop -->
          <rect x="-82" y="-115" width="145" height="205" rx="6" fill="#f7efe6"/>
          <rect x="-68" y="-98" width="117" height="171" fill="none" stroke="#cf5e43" stroke-width="1.5"/>
          <circle cx="38" cy="48" r="56" fill="#1e1918"/>
          <circle cx="38" cy="48" r="44" fill="none" stroke="#f7efe6" stroke-width="1.5" stroke-dasharray="4 3"/>
          <text x="38" y="55" text-anchor="middle" fill="#f7efe6" font-family="Georgia, serif" font-size="24" font-style="italic">BF</text>
          <text x="-10" y="-35" text-anchor="middle" fill="#1e1918" font-family="Plus Jakarta Sans, sans-serif" font-weight="700" font-size="22" letter-spacing="3">FRANZ</text>
          <line x1="-42" y1="-18" x2="22" y2="-18" stroke="#cf5e43" stroke-width="2"/>
        </g>
      </svg>`;

    case "festival-logo":
      return `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <rect width="300" height="400" fill="#461e8c"/>
        <g transform="translate(150, 185)">
          <circle cx="0" cy="0" r="96" fill="none" stroke="#e2d1ff" stroke-width="18" opacity="0.25"/>
          <path d="M-65,-55 L65,-55 L65,-25 L-28,-25 L-28,-5 L48,-5 L48,25 L-28,25 L-28,75 L-65,75 Z" fill="#ffffff"/>
          <circle cx="38" cy="52" r="24" fill="#c39eff"/>
        </g>
      </svg>`;

    case "telecom-kv":
      return `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <rect width="300" height="400" fill="#195243"/>
        <circle cx="150" cy="185" r="95" fill="none" stroke="#b9ead8" stroke-width="26" opacity="0.85"/>
        <circle cx="215" cy="245" r="28" fill="#ffffff"/>
        <circle cx="90" cy="120" r="52" fill="#68b69e" opacity="0.45"/>
      </svg>`;

    default:
      return `<svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <rect width="300" height="400" fill="#23232b"/>
        <g transform="translate(150, 190) rotate(-10)">
          <rect x="-75" y="-95" width="150" height="190" rx="14" fill="#ffffff" opacity="0.92"/>
          <circle cx="0" cy="-15" r="38" fill="#f39c7d"/>
          <rect x="-45" y="42" width="90" height="8" rx="4" fill="#18181b"/>
          <rect x="-30" y="58" width="60" height="5" rx="2.5" fill="#71717a"/>
        </g>
      </svg>`;
  }
}

const PROJECTS = [
  {
    id: "villa-valtice",
    title: "Víno Villa Valtice",
    category: "logo",
    year: "2026",
    client: "Villa Valtice",
    collaboration: "Přímá spolupráce",
    role: "Brand Designer",
    baseHeight: 245,
    visualType: "wine-bottle",
    description: "Kompletní redesign vizuální identity a prémiové řady etiket pro tradiční moravské vinařství Villa Valtice. Spojení heraldické tradice s čistou současnou typografií a slepotiskem."
  },
  {
    id: "big-shock-kv",
    title: "Key visual Big Shock",
    category: "key-visual",
    year: "2026",
    client: "Big Shock!",
    collaboration: "Zaraguza",
    role: "Art Director",
    baseHeight: 295,
    visualType: "energy-can",
    description: "Hlavní kampaňový key visual a produktový art direction pro limitovanou edici energetických nápojů Big Shock!. Dynamická práce se světlem, kovovými odlesky a 3D kompozicí."
  },
  {
    id: "liptov-spot",
    title: "TV spot Liptov",
    category: "packaging",
    year: "2025",
    client: "Liptov (Savencia)",
    collaboration: "Zaraguza",
    role: "Ideamaker",
    baseHeight: 245,
    visualType: "dairy-pack",
    description: "Kreativní koncept, art direction televizního spotu a návaznost na obalovou řadu horských sýrů Liptov. Důraz na čistotu přírody a okamžitou rozpoznatelnost v regálu i v TV."
  },
  {
    id: "bistro-franz",
    title: "Identita Bistro Franz",
    category: "key-visual",
    year: "2026",
    client: "Bistro Franz",
    collaboration: "Přímá spolupráce",
    role: "Art Director",
    baseHeight: 205,
    visualType: "bistro-brand",
    description: "Vizuální styl, menu systém, obaly s sebou a klíčové vizuály pro moderní městské bistro. Teplá terakotová paleta v kombinaci s výraznou typografií."
  },
  {
    id: "finale-plzen",
    title: "Logo Finále Plzeň",
    category: "logo",
    year: "2025",
    client: "Finále Plzeň",
    collaboration: "Studio Najbrt",
    role: "Designer",
    baseHeight: 245,
    visualType: "festival-logo",
    description: "Návrh modulární festivalové značky a systému znělek pro filmový festival Finále Plzeň. Značka reaguje na pohyb filmového pásu a formát plátna."
  },
  {
    id: "obaly-madeta",
    title: "Obaly Madeta",
    category: "key-visual",
    year: "2025",
    client: "Madeta",
    collaboration: "McCann Prague",
    role: "Packaging Designer",
    baseHeight: 255,
    visualType: "dairy-pack",
    description: "Sjednocení obalové architektury a klíčových produktových vizuálů pro prémiovou řadu mléčných výrobků Madeta."
  },
  {
    id: "kampan-o2",
    title: "Kampaň O2",
    category: "komunikace",
    year: "2026",
    client: "O2 Czech Republic",
    collaboration: "DDB Prague",
    role: "Art Director",
    baseHeight: 300,
    visualType: "telecom-kv",
    description: "Integrovaná 360° komunikační kampaň pro O2. Vizuální systém pro OOH, digitální formáty a motion design v maloobchodní síti."
  },
  {
    id: "obaly-racio",
    title: "Obaly Racio",
    category: "key-visual",
    year: "2024",
    client: "Racio",
    collaboration: "Boomerang",
    role: "Packaging Designer",
    baseHeight: 255,
    visualType: "bistro-brand",
    description: "Redesign obalového portfolia Racio s důrazem na moderní food styling, barevné kódování příchutí a okamžitou orientaci zákazníka."
  },
  {
    id: "komercni-banka",
    title: "Strategie Komerční banka",
    category: "logo",
    year: "2025",
    client: "Komerční banka",
    collaboration: "VML",
    role: "Ideamaker",
    baseHeight: 225,
    visualType: "festival-logo",
    description: "Kreativní strategie a vizuální systém pro uvedení nové generace digitálního bankovnictví KB+."
  },
  {
    id: "ux-tmobile",
    title: "Kampaň T-Mobile",
    category: "komunikace",
    year: "2024",
    client: "T-Mobile",
    collaboration: "Zaraguza",
    role: "Ideamaker",
    baseHeight: 215,
    visualType: "telecom-kv",
    description: "Digitální a sociální komunikace pro letní datovou kampaň T-Mobile. Hravý vizuální jazyk a interaktivní formáty."
  },
  {
    id: "mattoni-grand",
    title: "Edice Mattoni Grand",
    category: "packaging",
    year: "2026",
    client: "Mattoni 1873",
    collaboration: "McCann Prague",
    role: "Packaging Designer",
    baseHeight: 265,
    visualType: "wine-bottle",
    description: "Limitovaná skleněná edice Mattoni Grand pro gastronomii. Práce s reliéfem skla a minimalistickou etiketou."
  },
  {
    id: "pilsner-urquell",
    title: "Pilsner Urquell Tour",
    category: "komunikace",
    year: "2025",
    client: "Pilsner Urquell",
    collaboration: "Pavlov",
    role: "Art Director",
    baseHeight: 235,
    visualType: "energy-can",
    description: "Vizuální komunikace a prostorová grafika pro zážitkovou trasu plzeňského pivovaru."
  },
  {
    id: "cafe-savoy",
    title: "Identita Café Savoy",
    category: "logo",
    year: "2024",
    client: "Ambiente",
    collaboration: "Přímá spolupráce",
    role: "Designer",
    baseHeight: 210,
    visualType: "bistro-brand",
    description: "Typografický manuál, dárkové balení cukrářských výrobků a sezónní merkantilie pro Café Savoy."
  },
  {
    id: "mixit-limitka",
    title: "Obaly Mixit Limitka",
    category: "packaging",
    year: "2026",
    client: "Mixit",
    collaboration: "Přímá spolupráce",
    role: "Packaging Designer",
    baseHeight: 275,
    visualType: "dairy-pack",
    description: "Série tubusů a dárkových krabic pro sezónní limitované edice Mixit s výraznou barevnou škálou."
  },
  {
    id: "colours-kv",
    title: "Key visual Colours",
    category: "key-visual",
    year: "2023",
    client: "Colours of Ostrava",
    collaboration: "Přímá spolupráce",
    role: "Art Director",
    baseHeight: 240,
    visualType: "festival-logo",
    description: "Generativní vizuální systém pro scénografii, LED obrazovky a tiskoviny festivalu Colours of Ostrava."
  }
];

// Always-visible Black Contact Tile definition
const CONTACT_TILE = {
  id: "o-mne-kontakt",
  title: "O mně &\nKontakt",
  isContact: true,
  baseHeight: 175
};

// State
// sizeStep: 0 = 5 vedle sebe (výchozí stav), 1 = 4 vedle sebe, 2 = 3 vedle sebe, 3 = 2 vedle sebe (maximální velikost)
const state = {
  filters: {
    year: "all",
    category: "all",
    client: "all",
    collaboration: "all",
    role: "all"
  },
  sizeStep: 0,
  cols: 5,
  flowPaused: false,
  hoveredCol: -1
};

// Animation state per column
let columnStates = [];
let rafId = null;
let lastFrameTime = performance.now();

// Determine column count from sizeStep (5 -> 4 -> 3 -> 2 tiles side-by-side)
function computeColumnCount() {
  const desktopCols = Math.max(2, 5 - state.sizeStep); // 0->5, 1->4, 2->3, 3->2
  const w = window.innerWidth;
  if (w <= 640) {
    // Mobile: default 2 columns, at max enlargement 1 column
    return state.sizeStep >= 2 ? 1 : 2;
  }
  if (w <= 1024) {
    // Tablet: max 3 columns, scales down to 2 columns
    return Math.min(3, desktopCols);
  }
  return desktopCols;
}

// Filter projects (while ALWAYS keeping CONTACT_TILE in the grid!)
function getFilteredProjects() {
  return PROJECTS.filter((p) => {
    if (state.filters.year !== "all" && p.year !== state.filters.year) return false;
    if (state.filters.category !== "all" && p.category !== state.filters.category) return false;
    if (state.filters.client !== "all" && p.client !== state.filters.client) return false;
    if (state.filters.collaboration !== "all" && p.collaboration !== state.filters.collaboration) return false;
    if (state.filters.role !== "all" && p.role !== state.filters.role) return false;
    return true;
  });
}

// Create HTML element for a tile (uses --tile-aspect so width & height always scale uniformly 1:1)
function createTileElement(item, indexOffset = 0) {
  const el = document.createElement("article");
  if (item.isContact) {
    el.className = "portfolio-tile tile-contact";
    el.style.setProperty("--tile-aspect", `280 / ${item.baseHeight}`);
    el.style.setProperty("--fluid-dur", "10s");
    el.setAttribute("tabindex", "0");
    el.setAttribute("role", "button");
    el.setAttribute("aria-label", "O mně a Kontakt — vždy viditelná dlaždice");
    el.innerHTML = `
      <div class="tile-fluid-bg"></div>
      <div class="contact-badge" title="Vždy po ruce">↗</div>
      <div class="tile-caption">
        <div class="tile-title">O mně &amp;<br>Kontakt</div>
        <div class="tile-meta-hover">Ideamaker · Art Director · Designer</div>
      </div>
    `;
    el.addEventListener("click", () => openContactModal());
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openContactModal();
      }
    });
    return el;
  }

  const catInfo = CATEGORY_META[item.category] || { label: item.category };
  const dur = (7.5 + ((indexOffset * 1.37) % 4.5)).toFixed(2);
  const delay = (-((indexOffset * 2.1) % 7)).toFixed(2);

  el.className = "portfolio-tile";
  el.dataset.category = item.category;
  el.dataset.id = item.id;
  el.style.setProperty("--tile-aspect", `280 / ${item.baseHeight}`);
  el.style.setProperty("--fluid-dur", `${dur}s`);
  el.style.setProperty("--fluid-delay", `${delay}s`);
  el.setAttribute("tabindex", "0");
  el.setAttribute("role", "button");

  el.innerHTML = `
    <div class="tile-fluid-bg"></div>
    <div class="tile-hover-visual">
      ${getProjectHoverSVG(item)}
    </div>
    <div class="tile-caption">
      <div class="tile-title">${escapeHtml(item.title)}</div>
      <div class="tile-meta-hover">${escapeHtml(catInfo.label)} · ${escapeHtml(item.role)} · ${escapeHtml(item.year)}</div>
    </div>
  `;

  el.addEventListener("click", () => openProjectModal(item));
  el.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openProjectModal(item);
    }
  });
  return el;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Render the multi-column masonry grid with the permanent black Contact tile
function renderGrid() {
  const grid = document.getElementById("masonryGrid");
  if (!grid) return;

  const cols = computeColumnCount();
  state.cols = cols;
  const uiScale = Math.pow(5 / cols, 0.52).toFixed(3);
  document.documentElement.style.setProperty("--cols", String(cols));
  document.documentElement.style.setProperty("--ui-scale", uiScale);

  const filtered = getFilteredProjects();
  grid.innerHTML = "";
  columnStates = [];

  // Distribute items across columns.
  // Guarantee: The black CONTACT_TILE ("O mně & Kontakt") is ALWAYS placed in Column 2 (index 1, or 0 if 1 col) as the second tile!
  const colBuckets = Array.from({ length: cols }, () => []);

  // If no project matches a strict filter combination, still show CONTACT_TILE and a subtle hint
  const contactColIndex = cols > 1 ? 1 : 0;

  if (filtered.length > 0) {
    // Repeat filtered projects enough times per column so every column has a rich vertical stream to flow seamlessly
    const minItemsPerCol = 5;
    let pool = [...filtered];
    while (pool.length < cols * minItemsPerCol) {
      pool = pool.concat(filtered);
    }

    pool.forEach((proj, idx) => {
      const c = idx % cols;
      colBuckets[c].push(proj);
    });

    // Insert the permanent black CONTACT_TILE at position 1 of column 2 (just below Key visual Big Shock, matching the mockup!)
    colBuckets[contactColIndex].splice(1, 0, CONTACT_TILE);
  } else {
    // Even if 0 projects match a custom filter combination, CONTACT_TILE is ALWAYS visible!
    colBuckets[contactColIndex].push(CONTACT_TILE);
  }

  colBuckets.forEach((bucket, colIdx) => {
    const colEl = document.createElement("div");
    colEl.className = "masonry-column";
    const trackEl = document.createElement("div");
    trackEl.className = "masonry-column-track";

    // Build primary set + duplicate set for seamless infinite vertical flow
    if (bucket.length > 0) {
      bucket.forEach((item, idx) => {
        trackEl.appendChild(createTileElement(item, colIdx * 10 + idx));
      });
      // Duplicate set for seamless loop when flowing
      bucket.forEach((item, idx) => {
        trackEl.appendChild(createTileElement(item, colIdx * 10 + idx + 50));
      });
    }

    colEl.appendChild(trackEl);

    colEl.addEventListener("mouseenter", () => {
      state.hoveredCol = colIdx;
    });
    colEl.addEventListener("mouseleave", () => {
      if (state.hoveredCol === colIdx) state.hoveredCol = -1;
    });

    grid.appendChild(colEl);

    // Alternating slow vertical drift speeds (px per second)
    const dir = colIdx % 2 === 0 ? -1 : 1;
    const speed = (11 + (colIdx % 3) * 2.5) * dir;
    columnStates.push({
      colIdx,
      trackEl,
      offsetY: dir > 0 ? -220 : 0,
      speed,
      currentSpeedFactor: 1
    });
  });

  updateFilterBadges();
}

// Smooth 60fps continuous flowing loop
function animateFlow(now) {
  const dt = Math.min(0.05, (now - lastFrameTime) / 1000);
  lastFrameTime = now;

  columnStates.forEach((col) => {
    const targetFactor = (state.flowPaused || state.hoveredCol === col.colIdx) ? 0 : 1;
    // Smooth easing when pausing/resuming on hover
    col.currentSpeedFactor += (targetFactor - col.currentSpeedFactor) * Math.min(1, dt * 6);

    const halfHeight = col.trackEl.scrollHeight / 2;
    if (halfHeight > 50) {
      col.offsetY += col.speed * col.currentSpeedFactor * dt;
      if (col.speed < 0 && col.offsetY <= -halfHeight) {
        col.offsetY += halfHeight;
      } else if (col.speed > 0 && col.offsetY >= 0) {
        col.offsetY -= halfHeight;
      }
      col.trackEl.style.transform = `translate3d(0, ${col.offsetY.toFixed(2)}px, 0)`;
    }
  });

  rafId = requestAnimationFrame(animateFlow);
}

// Populate and wire up all 5 Filter Dropdowns
function initFilters() {
  const filterConfigs = [
    {
      key: "year",
      dropdownId: "dd-year",
      defaultLabel: "Datum",
      options: [
        { value: "all", label: "Všechna data" },
        ...Array.from(new Set(PROJECTS.map((p) => p.year))).sort((a, b) => b.localeCompare(a)).map((y) => ({
          value: y,
          label: y,
          count: PROJECTS.filter((p) => p.year === y).length
        }))
      ]
    },
    {
      key: "category",
      dropdownId: "dd-category",
      defaultLabel: "Typ práce",
      options: [
        { value: "all", label: "Všechny typy práce" },
        { value: "logo", label: "Logo", dotClass: "dot-logo", count: PROJECTS.filter((p) => p.category === "logo").length },
        { value: "packaging", label: "Packaging", dotClass: "dot-packaging", count: PROJECTS.filter((p) => p.category === "packaging").length },
        { value: "key-visual", label: "Key Visual", dotClass: "dot-kv", count: PROJECTS.filter((p) => p.category === "key-visual").length },
        { value: "komunikace", label: "Komunikace", dotClass: "dot-comm", count: PROJECTS.filter((p) => p.category === "komunikace").length }
      ]
    },
    {
      key: "client",
      dropdownId: "dd-client",
      defaultLabel: "Klient",
      options: [
        { value: "all", label: "Všichni klienti" },
        ...Array.from(new Set(PROJECTS.map((p) => p.client))).sort((a, b) => a.localeCompare(b, "cs")).map((c) => ({
          value: c,
          label: c,
          count: PROJECTS.filter((p) => p.client === c).length
        }))
      ]
    },
    {
      key: "collaboration",
      dropdownId: "dd-collaboration",
      defaultLabel: "Spolupráce s",
      options: [
        { value: "all", label: "Všechny spolupráce" },
        ...Array.from(new Set(PROJECTS.map((p) => p.collaboration))).sort((a, b) => a.localeCompare(b, "cs")).map((col) => ({
          value: col,
          label: col,
          count: PROJECTS.filter((p) => p.collaboration === col).length
        }))
      ]
    },
    {
      key: "role",
      dropdownId: "dd-role",
      defaultLabel: "Role",
      options: [
        { value: "all", label: "Všechny role" },
        ...Array.from(new Set(PROJECTS.map((p) => p.role))).sort((a, b) => a.localeCompare(b, "cs")).map((r) => ({
          value: r,
          label: r,
          count: PROJECTS.filter((p) => p.role === r).length
        }))
      ]
    }
  ];

  filterConfigs.forEach((cfg) => {
    const wrapper = document.getElementById(cfg.dropdownId);
    if (!wrapper) return;
    const btn = wrapper.querySelector(".filter-pill");
    const menu = wrapper.querySelector(".dropdown-menu");

    menu.innerHTML = cfg.options.map((opt) => `
      <button type="button" class="dropdown-item ${state.filters[cfg.key] === opt.value ? "is-selected" : ""}" data-value="${escapeHtml(opt.value)}">
        <span class="dropdown-item-left">
          ${opt.dotClass ? `<span class="cat-dot ${opt.dotClass}"></span>` : ""}
          <span>${escapeHtml(opt.label)}</span>
        </span>
        ${opt.count !== undefined ? `<span class="dropdown-count">${opt.count}</span>` : ""}
      </button>
    `).join("");

    btn.addEventListener("click", (e) => {
      // Allow clicking directly on one of the 4 colored dots inside "Typ práce" for instant filtering
      const dotEl = e.target.closest("[data-cat-quick]");
      if (dotEl) {
        e.stopPropagation();
        const catVal = dotEl.getAttribute("data-cat-quick");
        state.filters.category = state.filters.category === catVal ? "all" : catVal;
        closeAllDropdowns();
        renderGrid();
        return;
      }
      e.stopPropagation();
      const wasOpen = wrapper.classList.contains("is-open");
      closeAllDropdowns();
      if (!wasOpen) wrapper.classList.add("is-open");
    });

    menu.addEventListener("click", (e) => {
      const itemBtn = e.target.closest(".dropdown-item");
      if (!itemBtn) return;
      state.filters[cfg.key] = itemBtn.getAttribute("data-value");
      closeAllDropdowns();
      renderGrid();
    });
  });

  document.addEventListener("click", () => closeAllDropdowns());
}

function closeAllDropdowns() {
  document.querySelectorAll(".filter-dropdown.is-open").forEach((el) => el.classList.remove("is-open"));
}

function updateFilterBadges() {
  const labels = {
    year: { id: "dd-year", base: "Datum" },
    category: { id: "dd-category", base: "Typ práce" },
    client: { id: "dd-client", base: "Klient" },
    collaboration: { id: "dd-collaboration", base: "Spolupráce s" },
    role: { id: "dd-role", base: "Role" }
  };

  let anyActive = false;

  Object.entries(labels).forEach(([key, info]) => {
    const wrapper = document.getElementById(info.id);
    if (!wrapper) return;
    const pill = wrapper.querySelector(".filter-pill");
    const labelSpan = wrapper.querySelector(".pill-text");
    const val = state.filters[key];

    if (val !== "all") {
      anyActive = true;
      pill.classList.add("is-active");
      if (key === "category" && CATEGORY_META[val]) {
        labelSpan.textContent = `${info.base}: ${CATEGORY_META[val].label}`;
      } else {
        labelSpan.textContent = `${info.base}: ${val}`;
      }
    } else {
      pill.classList.remove("is-active");
      labelSpan.textContent = info.base;
    }

    wrapper.querySelectorAll(".dropdown-item").forEach((btn) => {
      btn.classList.toggle("is-selected", btn.getAttribute("data-value") === val);
    });
  });

  const resetBtn = document.getElementById("resetFiltersBtn");
  if (resetBtn) {
    resetBtn.classList.toggle("is-visible", anyActive);
  }
}

// Modals (Project Detail & O mně & Kontakt)
function openProjectModal(project) {
  const backdrop = document.getElementById("modalBackdrop");
  const content = document.getElementById("modalContent");
  if (!backdrop || !content) return;

  const catInfo = CATEGORY_META[project.category] || { label: project.category };

  content.className = "modal-card";
  content.innerHTML = `
    <button type="button" class="modal-close" aria-label="Zavřít" id="modalCloseBtn">✕</button>
    <div class="modal-hero">
      ${getProjectHoverSVG(project)}
    </div>
    <div class="modal-body">
      <div class="modal-tag-row">
        <span class="modal-tag">${escapeHtml(catInfo.label)}</span>
        <span class="modal-tag">${escapeHtml(project.year)}</span>
        <span class="modal-tag">${escapeHtml(project.role)}</span>
      </div>
      <h2 class="modal-title">${escapeHtml(project.title)}</h2>
      <p class="modal-desc">${escapeHtml(project.description)}</p>
      <div class="modal-meta-grid">
        <div>
          <div class="meta-box-label">Klient</div>
          <div class="meta-box-value">${escapeHtml(project.client)}</div>
        </div>
        <div>
          <div class="meta-box-label">Spolupráce s</div>
          <div class="meta-box-value">${escapeHtml(project.collaboration)}</div>
        </div>
        <div>
          <div class="meta-box-label">Moje role</div>
          <div class="meta-box-value">${escapeHtml(project.role)}</div>
        </div>
        <div>
          <div class="meta-box-label">Rok</div>
          <div class="meta-box-value">${escapeHtml(project.year)}</div>
        </div>
      </div>
    </div>
  `;

  backdrop.classList.add("is-open");
  document.getElementById("modalCloseBtn").addEventListener("click", closeModal);
}

function openContactModal() {
  const backdrop = document.getElementById("modalBackdrop");
  const content = document.getElementById("modalContent");
  if (!backdrop || !content) return;

  content.className = "modal-card contact-card-dark";
  content.innerHTML = `
    <button type="button" class="modal-close" aria-label="Zavřít" id="modalCloseBtn">✕</button>
    <div class="modal-body" style="padding-top: 38px;">
      <div class="modal-tag-row">
        <span class="modal-tag" style="background:#26262e;color:#fff;">Ideamaker</span>
        <span class="modal-tag" style="background:#26262e;color:#fff;">Art Director</span>
        <span class="modal-tag" style="background:#26262e;color:#fff;">Brand &amp; Packaging Designer</span>
      </div>
      <h2 class="modal-title" style="font-size: 2rem; margin-top: 6px;">František Podaný</h2>
      <p class="modal-desc">
        Tvořím vizuální identity, obalový design, klíčové vizuály a komunikační kampaně, které propojují silnou ideu s čistým řemeslem. Spolupracuji napřímo s klienty i s předními kreativními agenturami.
      </p>
      <div class="modal-meta-grid">
        <div>
          <div class="meta-box-label">E-mail</div>
          <div class="meta-box-value">frantisek@podany.cz</div>
        </div>
        <div>
          <div class="meta-box-label">Telefon</div>
          <div class="meta-box-value">+420 777 000 000</div>
        </div>
        <div>
          <div class="meta-box-label">Lokalita</div>
          <div class="meta-box-value">Praha / ČR</div>
        </div>
      </div>
      <div class="contact-links">
        <a href="mailto:frantisek@podany.cz" class="contact-link-pill">Napsat e-mail ↗</a>
        <a href="#linkedin" class="contact-link-pill secondary" onclick="event.preventDefault()">LinkedIn</a>
        <a href="#behance" class="contact-link-pill secondary" onclick="event.preventDefault()">Behance / Instagram</a>
      </div>
    </div>
  `;

  backdrop.classList.add("is-open");
  document.getElementById("modalCloseBtn").addEventListener("click", closeModal);
}

function closeModal() {
  const backdrop = document.getElementById("modalBackdrop");
  if (backdrop) backdrop.classList.remove("is-open");
}

// Initialize Everything on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  initFilters();
  renderGrid();

  // Start continuous flowing animation
  lastFrameTime = performance.now();
  rafId = requestAnimationFrame(animateFlow);

  // Tile Size Slider ("Velikost dlaždic": 0 = 5 vedle sebe [výchozí], 1 = 4, 2 = 3, 3 = 2 vedle sebe [maximum])
  const slider = document.getElementById("tileSizeSlider");
  if (slider) {
    slider.addEventListener("input", (e) => {
      const step = parseInt(e.target.value, 10);
      if (step !== state.sizeStep) {
        state.sizeStep = step;
        renderGrid();
      }
    });
  }

  // Reset Filters Button
  const resetBtn = document.getElementById("resetFiltersBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      state.filters = { year: "all", category: "all", client: "all", collaboration: "all", role: "all" };
      renderGrid();
    });
  }

  // Brand title resets filters
  const brand = document.getElementById("brandIdentity");
  if (brand) {
    brand.addEventListener("click", () => {
      state.filters = { year: "all", category: "all", client: "all", collaboration: "all", role: "all" };
      renderGrid();
    });
  }

  // Flow pause/resume button
  const flowBtn = document.getElementById("flowToggleBtn");
  if (flowBtn) {
    flowBtn.addEventListener("click", () => {
      state.flowPaused = !state.flowPaused;
      flowBtn.classList.toggle("is-paused", state.flowPaused);
      const txt = flowBtn.querySelector(".flow-btn-text");
      if (txt) txt.textContent = state.flowPaused ? "Plynutí zastaveno" : "Plynutí aktivní";
    });
  }

  // Menu button opens O mně & Kontakt modal
  const menuBtn = document.getElementById("menuBtn");
  if (menuBtn) {
    menuBtn.addEventListener("click", () => openContactModal());
  }

  // Modal close on backdrop click or Escape
  const backdrop = document.getElementById("modalBackdrop");
  if (backdrop) {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closeModal();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // Responsive resize handler
  let resizeTimer = null;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const nextCols = computeColumnCount();
      if (nextCols !== state.cols) {
        renderGrid();
      }
    }, 120);
  });
});
