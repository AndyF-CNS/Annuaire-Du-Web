// ==========================================
// 1. DONNÉES
// ==========================================
const sites = {
    administration: [
        { name: "Mairie Téteghem-Coudekerque-Village", description: "Site officiel de la mairie : démarches, actualités, services municipaux", url: "https://www.ville-tcv.fr/", icon: "🏛️" },
        { name: "AMELI", description: "Attestations de droits, formalités carte vitale, feuille de soins", url: "https://www.ameli.fr/", icon: "💊" },
        { name: "CAF", description: "Aides familiales : petite enfance, logement, solidarité", url: "https://www.caf.fr/", icon: "👨‍👩‍👧" },
        { name: "Impôts", description: "Payez vos impôts directement en ligne", url: "https://www.impots.gouv.fr/accueil", icon: "💰" },
        { name: "Service Public", description: "Toutes vos démarches administratives", url: "https://www.service-public.fr/", icon: "🏛️" },
        { name: "La Poste", description: "Préparez vos envois, suivez vos Colissimos", url: "https://www.laposte.fr/", icon: "📮" },
        { name: "Info-Retraite", description: "Portail regroupants les informations pour votre retraite !", url: "https://www.info-retraite.fr/", icon: "👨‍🦳" },
        { name: "Doctolib", description: "Prise de rendez-vous médicaux en ligne", url: "https://www.doctolib.fr/", icon: "🩺" }
    ],
    loisirs: [
        { name: "ARTE", description: "Contenu culturel gratuit sans inscription", url: "https://www.arte.tv/fr/", icon: "📺" },
        { name: "Les Balises", description: "Découvrez Les Balises, le portail numérique des médiathèques du Dunkerquois", url: "https://www.lesbalises.fr/", icon: "🌟" },
        { name: "Wikipédia", description: "Encyclopédie communautaire très fournie", url: "https://fr.wikipedia.org/", icon: "📚" },
        { name: "YouTube", description: "Vidéos, tutoriels, émissions en direct", url: "https://www.youtube.com/", icon: "▶️" },
        { name: "Marmiton", description: "Recettes de cuisine", url: "https://www.marmiton.org/", icon: "🍳" },
        { name: "Google Earth", description: "Globe terrestre en 3D interactif", url: "https://earth.google.com/web", icon: "🌍" },
        { name: "Board Game Arena", description: "Jeux de société en ligne", url: "https://fr.boardgamearena.com/", icon: "🎲" }
    ],
    creation: [
        { name: "Canva", description: "Créer des flyers, CV, affiches", url: "https://www.canva.com/fr_fr/", icon: "🎨" },
        { name: "Photopea", description: "Édition d'images et de photos", url: "https://www.photopea.com/", icon: "🖼️" },
        { name: "ChatGPT", description: "IA générative de textes", url: "https://chat.openai.com/", icon: "🤖" },
        { name: "TinkerCAD", description: "Modélisation 3D et circuits électriques", url: "https://www.tinkercad.com/", icon: "🔧" },
        { name: "Scratch", description: "Programmation facile pour jeunes", url: "https://scratch.mit.edu/", icon: "🐱" },
        { name: "BandLab", description: "Création de musique en ligne", url: "https://www.bandlab.com/", icon: "🎵" }
    ],
    actualites: [
        { name: "France Info", description: "Actualités nationales et internationales", url: "https://www.francetvinfo.fr/", icon: "📰" },
        { name: "Le Monde", description: "Journal d'information générale", url: "https://www.lemonde.fr/", icon: "📄" },
        { name: "France 24", description: "Information internationale en continu", url: "https://www.france24.com/fr/", icon: "🌍" },
        { name: "Le Figaro", description: "Actualités et analyses", url: "https://www.lefigaro.fr/", icon: "📰" },
        { name: "Delta FM", description: "Votre Radio Locale", url: "https://www.deltafm.fr/", icon: "📻" },
        { name: "BLAST", description: "Média indépendant d'information", url: "https://www.blast-info.fr/", icon: "💥" },
        { name: "Actu.fr", description: "Actualités locales et régionales", url: "https://actu.fr/", icon: "📍" }
    ],
    shopping: [
        { name: "Leboncoin", description: "Petites annonces en France", url: "https://www.leboncoin.fr/", icon: "🏷️" },
        { name: "Amazon", description: "E-commerce international", url: "https://www.amazon.fr/", icon: "📦" },
        { name: "Donnons.org", description: "Site de dons gratuits entre particuliers", url: "https://donnons.org/", icon: "🎁" },
        { name: "FNAC", description: "Produits culturels et high-tech", url: "https://www.fnac.com/", icon: "🛍️" },
        { name: "Too Good to Go", description: "Paniers anti-gaspi des commerces locaux", url: "https://www.toogoodtogo.com/fr", icon: "🍱" },
        { name: "Drive Carrefour", description: "Courses en ligne à retirer au magasin", url: "https://www.carrefour.fr/services/drive", icon: "🛒" },
        { name: "Drive Leclerc", description: "Courses en ligne à retirer au magasin", url: "https://www.leclercdrive.fr/", icon: "🛒" }
    ],
    outils: [
        { name: "Google Maps", description: "Cartes routières et itinéraires", url: "https://www.google.fr/maps", icon: "🗺️" },
        { name: "WeTransfer", description: "Transférez de gros fichiers facilement", url: "https://wetransfer.com/", icon: "📤" },
        { name: "I ❤️ PDF", description: "Outils pour manipuler les PDF", url: "https://www.ilovepdf.com/fr", icon: "📄" },
        { name: "Les Bons Clics", description: "Apprendre à utiliser l'ordinateur", url: "https://www.lesbonsclics.fr/fr/", icon: "💻" },
        { name: "La Digitale", description: "Outils numériques gratuits", url: "https://ladigitale.dev/", icon: "🔧" },
        { name: "Pix", description: "Évaluez vos compétences numériques", url: "https://pix.fr/", icon: "✅" }
    ]
};

const fichesData = [
    { id: 1, titre: "Installer LibreOffice", description: "Découvrez comment installer la suite LibreOffice pour traiter vos textes, créer des tableurs et faire des présentations gratuitement.", categorie: "bureautique", niveau: "debutant", animateur: "andy", duree: 30, icon: "💼", lien: "https://drive.google.com/file/d/1-63mBol2CC5suOgGd7_93qDa5U4kbNtb/preview" },
    { id: 2, titre: "Installer l'extension AdBlock", description: "Apprenez à bloquer les publicités intrusives et à naviguer en toute sécurité sur Internet sans être dérangé.", categorie: "securite", niveau: "debutant", animateur: "emilie", duree: 20, icon: "🔒", lien: "https://drive.google.com/file/d/1vvaPxpFBYT7IziFKLzV95NjpcNdZsTG2/preview" },
    { id: 3, titre: "La souris et le pavé tactile", description: "Maîtrisez les gestes essentiels pour utiliser votre souris et votre pavé tactile comme un pro !", categorie: "outils", niveau: "debutant", animateur: "andy", duree: 45, icon: "🖱️", lien: "https://drive.google.com/file/d/1z-9wxxpT-8x4phIeuQh_I786h9TSy-9n/preview" },
    { id: 4, titre: "Créer un compte FranceConnect", description: "Guide complet pour créer votre identité numérique et simplifier toutes vos démarches administratives en ligne.", categorie: "demandes", niveau: "intermediaire", animateur: "emilie", duree: 60, icon: "🏛️", lien: "#" },
    { id: 5, titre: "Créer un compte Google", description: "Guide complet pour créer votre compte Google est accéder a une adresse mail pour votre navigation en ligne.", categorie: "demandes", niveau: "intermediaire", animateur: "andy", duree: 60, icon: "🌐", lien: "#" }
];

// ==========================================
// 2. CONFIG TAILWIND COLORS (MAPPING)
// NOTE: Ces classes sont définies dans index.html
// ==========================================
const categoriesConfig = {
    bureautique: { label: "Bureautique", colorClass: "bg-slate-100 text-slate-600" },
    securite: { label: "Sécurité", colorClass: "bg-red-100 text-red-700" },
    demandes: { label: "Démarches", colorClass: "bg-green-100 text-green-700" },
    navigation: { label: "Navigation", colorClass: "bg-blue-100 text-blue-700" },
    outils: { label: "Outils", colorClass: "bg-amber-100 text-amber-700" }
};

const niveauxConfig = {
    debutant: { label: "🌱 Débutant", colorClass: "bg-emerald-100 text-emerald-800" },
    intermediaire: { label: "🌿 Intermédiaire", colorClass: "bg-amber-100 text-amber-800" },
    avance: { label: "🌳 Avancé", colorClass: "bg-red-100 text-red-800" }
};

const animateursConfig = {
    andy: { nom: "Andy", avatar: "👨‍💻" },
    emilie: { nom: "Émilie", avatar: "👩‍💻" }
};

// ==========================================
// 3. LOGIQUE PRINCIPALE
// ==========================================

// --- GESTION DES SITES (Partie 1) ---
let currentCategory = "tous";
let searchTerm = "";

// Classes Tailwind pour les onglets actifs/inactifs
// IMPORTANT: Ces classes utilisent 'brand-blue' et 'brand-purple' définies dans index.html
const tabActiveClasses = ["bg-gradient-to-r", "from-brand-blue", "to-brand-purple", "text-white", "border-transparent", "shadow-md", "transform", "scale-105"];
const tabInactiveClasses = ["bg-white", "text-slate-600", "border-slate-200", "hover:bg-slate-50", "hover:text-brand-blue"];

function updateTabsVisuals() {
    let totalCount = 0;
    document.querySelectorAll(".tab-btn").forEach(tab => {
        const category = tab.dataset.category;
        const isActive = category === currentCategory;
        
        let count = 0;
        if (category === "tous") {
            count = Object.values(sites).reduce((sum, cat) => sum + cat.length, 0);
            totalCount = count;
        } else {
            count = sites[category] ? sites[category].length : 0;
        }
        
        // Mise à jour du compteur
        const badge = tab.querySelector(".badge");
        if(badge) {
             badge.textContent = count;
             // Style du badge : sombre si inactif, clair si actif
             if (isActive) {
                 badge.classList.remove("bg-gray-200", "text-gray-700");
                 badge.classList.add("bg-white", "text-brand-blue");
             } else {
                 badge.classList.add("bg-gray-200", "text-gray-700");
                 badge.classList.remove("bg-white", "text-brand-blue");
             }
        }

        // Reset styling
        tab.classList.remove(...tabActiveClasses, ...tabInactiveClasses);
        
        // Apply styling based on state
        if (isActive) {
            tab.classList.add(...tabActiveClasses);
            tab.classList.remove(...tabInactiveClasses);
            document.getElementById("breadcrumbCurrent").textContent = category.charAt(0).toUpperCase() + category.slice(1);
        } else {
            tab.classList.add(...tabInactiveClasses);
            tab.classList.remove(...tabActiveClasses);
        }
    });
     if(currentCategory === 'tous' && document.getElementById("breadcrumbCurrent")) {
        document.getElementById("breadcrumbCurrent").textContent = "Tous les sites";
    }
}

function renderCards() {
    const content = document.getElementById("content");
    content.innerHTML = "";
    let sitesToDisplay = [];

    if (currentCategory === "tous") {
        Object.values(sites).forEach(cat => sitesToDisplay = sitesToDisplay.concat(cat));
    } else {
        sitesToDisplay = sites[currentCategory] || [];
    }

    if (searchTerm) {
        sitesToDisplay = sitesToDisplay.filter(site =>
            site.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            site.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    if (sitesToDisplay.length === 0) {
        content.innerHTML = `
            <div class="col-span-full text-center py-12 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200">
                <div class="text-4xl mb-4">🔍</div>
                <h2 class="text-xl font-bold text-slate-700">Aucun résultat trouvé</h2>
                <p class="text-slate-500">Essayez avec d'autres mots-clés</p>
            </div>
        `;
        return;
    }

    sitesToDisplay.forEach(site => {
        const card = document.createElement("a");
        card.href = site.url;
        card.target = "_blank";
        // CLASSES TAILWIND POUR LA CARTE (avec hover effect)
        card.className = "group block bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 relative overflow-hidden";
        card.innerHTML = `
            <div class="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand-blue to-brand-purple opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="flex items-start gap-4 mb-3">
                <div class="w-12 h-12 rounded-xl bg-blue-50 text-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-blue/10 group-hover:scale-110 transition-all duration-300">
                    ${site.icon}
                </div>
                <h3 class="font-bold text-lg text-slate-800 group-hover:text-brand-blue transition-colors leading-tight pt-1">
                    ${site.name}
                </h3>
            </div>
            <p class="text-slate-500 text-sm leading-relaxed pl-16">
                ${site.description}
            </p>
        `;
        content.appendChild(card);
    });
}

// Listeners Sites
document.getElementById("tabs").addEventListener("click", (e) => {
    if (e.target.classList.contains("tab-btn")) {
        currentCategory = e.target.dataset.category;
        updateTabsVisuals();
        renderCards();
    }
});

document.getElementById("searchInput").addEventListener("input", (e) => {
    searchTerm = e.target.value;
    renderCards();
});

// --- GESTION DES FICHES (Partie 2) ---
let ficheFilters = { category: "all", niveau: "all", animateur: "all", search: "" };
let currentFiches = [...fichesData];

function createFicheHTML(fiche) {
    const catConfig = categoriesConfig[fiche.categorie];
    const nivConfig = niveauxConfig[fiche.niveau];
    const animConfig = animateursConfig[fiche.animateur];

    // Badge "Nouveau" si la fiche est la plus récente (juste un exemple simple)
    const isNew = fiche.id === fichesData.length; 
    
    // Système de notation (exemple statique)
    const ratingHTML = `
        <div class="flex items-center text-yellow-500 text-sm">
            <span class="mr-1">⭐</span> 4.5/5
        </div>
    `;

    return `
        <article class="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full relative group">
            <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-blue to-brand-purple opacity-0 group-hover:opacity-100 rounded-t-2xl transition-opacity"></div>
            
            <div class="flex justify-between items-start mb-4">
                <div class="w-14 h-14 bg-gradient-to-br from-brand-purple to-brand-blue rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-blue-500/20 text-white">
                    ${fiche.icon}
                </div>
                ${isNew ? '<span class="px-3 py-1 rounded-full text-xs font-bold bg-green-500 text-white shadow-md absolute top-4 right-4 animate-bounce">🔥 NOUVEAU</span>' : ''}
            </div>

            <h3 class="text-xl font-bold text-slate-800 mb-2 group-hover:text-brand-blue transition-colors">
                ${fiche.titre}
            </h3>
            <p class="text-slate-500 text-sm mb-4 flex-grow leading-relaxed">
                ${fiche.description}
            </p>

            <div class="flex flex-wrap gap-2 mb-4">
                 <span class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${catConfig.colorClass}">
                    ${catConfig.label}
                </span>
                <span class="px-3 py-1 rounded-full text-xs font-bold ${nivConfig.colorClass}">
                    ${nivConfig.label}
                </span>
                <span class="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-800 flex items-center gap-1">
                    ⏱️ ${formatDuree(fiche.duree)}
                </span>
            </div>

            <div class="pt-4 border-t border-slate-50 flex justify-between items-center mt-auto">
                <div class="flex items-center gap-2 text-sm font-medium text-slate-600">
                    <span class="text-lg">${animConfig.avatar}</span>
                    ${animConfig.nom}
                </div>
                ${ratingHTML}
                <a href="${fiche.lien}" target="_blank" class="px-4 py-2 bg-gradient-to-r from-brand-purple to-brand-blue text-white rounded-lg text-sm font-bold shadow hover:shadow-lg hover:scale-105 transition-all">
                    📄 Consulter
                </a>
            </div>
        </article>
    `;
}

function renderFiches(fiches) {
    const container = document.getElementById("ficheContainerV2");
    const noResults = document.getElementById("noResultsV2");

    if (fiches.length === 0) {
        container.style.display = "none";
        noResults.style.display = "block";
        noResults.classList.remove("hidden");
    } else {
        container.style.display = "grid";
        noResults.style.display = "none";
        noResults.classList.add("hidden");
        container.innerHTML = fiches.map(createFicheHTML).join("");
    }
}

function applyFicheFilters() {
    let filtered = [...fichesData];
    if (ficheFilters.category !== "all") filtered = filtered.filter(f => f.categorie === ficheFilters.category);
    if (ficheFilters.niveau !== "all") filtered = filtered.filter(f => f.niveau === ficheFilters.niveau);
    if (ficheFilters.animateur !== "all") filtered = filtered.filter(f => f.animateur === ficheFilters.animateur);

    if (ficheFilters.search) {
        const s = ficheFilters.search.toLowerCase();
        filtered = filtered.filter(f =>
            f.titre.toLowerCase().includes(s) ||
            f.description.toLowerCase().includes(s)
        );
    }
    currentFiches = filtered;
    renderFiches(currentFiches);
    updateStats(filtered.length);
}

function updateStats(count) {
    const total = fichesData.length;
    const el = document.getElementById("statsText");
    const totalDisplay = document.getElementById("totalFichesDisplay");
    
    if (totalDisplay) totalDisplay.textContent = total; // Mise à jour stat
    
    if (count === undefined) count = total;

    if (el) {
         if (count === total) {
            el.textContent = `${total} fiches disponibles`;
        } else {
            el.innerHTML = `<span class="text-brand-blue font-bold">${count}</span> résultat(s) affiché(s) sur ${total}`;
        }
    }
}

function formatDuree(minutes) {
    if (minutes < 60) return `${minutes} min`;
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return m > 0 ? `${h}h${m}` : `${h}h`;
}

function resetAllFilters() {
    ficheFilters = { category: "all", niveau: "all", animateur: "all", search: "" };

    // Reset UI
    document.getElementById("searchFichesV2").value = "";
    document.getElementById("clearSearchV2").classList.add("hidden");
    document.getElementById("filterCategory").value = "all";
    document.getElementById("filterLevel").value = "all";
    document.getElementById("filterAnimator").value = "all";
    document.getElementById("sortSelect").value = "default";

    applyFicheFilters();
}

// Listeners Fiches
const searchInputV2 = document.getElementById("searchFichesV2");
const clearBtnV2 = document.getElementById("clearSearchV2");
const backToTopBtn = document.getElementById("backToTop");

searchInputV2.addEventListener("input", function() {
    ficheFilters.search = this.value.trim();
    if (ficheFilters.search) clearBtnV2.classList.remove("hidden");
    else clearBtnV2.classList.add("hidden");
    applyFicheFilters();
});

clearBtnV2.addEventListener("click", function() {
    searchInputV2.value = "";
    ficheFilters.search = "";
    this.classList.add("hidden");
    applyFicheFilters();
});

// Listener général pour les filtres de type <select>
["filterCategory", "filterLevel", "filterAnimator"].forEach(id => {
    document.getElementById(id).addEventListener("change", function() {
        const key = id.replace("filter", "").toLowerCase(); // donne 'category', 'level', 'animator'
        let filterKey = key;
        
        // CORRECTION: Map les clés anglaises des IDs vers les clés françaises de l'objet de filtre
        if (key === "level") filterKey = "niveau";
        if (key === "animator") filterKey = "animateur"; // <--- LA LIGNE CLÉ CORRIGÉE
        
        ficheFilters[filterKey] = this.value;
        applyFicheFilters();
    });
});

document.getElementById("resetFilters").addEventListener("click", resetAllFilters);
document.getElementById("resetFromNoResults").addEventListener("click", resetAllFilters);

document.getElementById("sortSelect").addEventListener("change", function() {
    const crit = this.value;
    let sorted = [...currentFiches];
    if (crit === "title") sorted.sort((a, b) => a.titre.localeCompare(b.titre));
    else if (crit === "niveau") {
        const order = { debutant: 1, intermediaire: 2, avance: 3 };
        sorted.sort((a, b) => order[a.niveau] - order[b.niveau]);
    } else if (crit === "duree") sorted.sort((a, b) => a.duree - b.duree);

    currentFiches = sorted;
    renderFiches(currentFiches);
});

// Scroll Listener for Back to Top Button
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.remove('hidden');
        backToTopBtn.classList.add('flex');
    } else {
        backToTopBtn.classList.add('hidden');
        backToTopBtn.classList.remove('flex');
    }
});

// INIT
document.addEventListener("DOMContentLoaded", () => {
    updateTabsVisuals();
    renderCards();
    applyFicheFilters(); // Ceci appelle renderFiches et updateStats
});