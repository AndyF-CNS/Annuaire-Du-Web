// ==========================================
// SCRIPT PRINCIPAL - Annuaire du Web
// ==========================================

const sites = {
    administration: [
        { name: 'Mairie Téteghem-Coudekerque-Village', description: 'Site officiel de la mairie : démarches, actualités, services municipaux', url: 'https://www.ville-tcv.fr/', icon: '🏛️' },
        { name: 'AMELI', description: 'Attestations de droits, formalités carte vitale, feuille de soins', url: 'https://www.ameli.fr/', icon: '💊' },
        { name: 'CAF', description: 'Aides familiales : petite enfance, logement, solidarité', url: 'https://www.caf.fr/', icon: '👨‍👩‍👧' },
        { name: 'Impôts', description: 'Payez vos impôts directement en ligne', url: 'https://www.impots.gouv.fr/accueil', icon: '💰' },
        { name: 'Service Public', description: 'Toutes vos démarches administratives', url: 'https://www.service-public.fr/', icon: '🏛️' },
        { name: 'La Poste', description: 'Préparez vos envois, suivez vos Colissimos', url: 'https://www.laposte.fr/', icon: '📮' },
        { name: 'Info-Retraite', description: 'Portail regroupants les informations pour votre retraite !', url: 'https://www.info-retraite.fr/', icon: '👨‍🦳' },
        { name: 'Doctolib', description: 'Prise de rendez-vous médicaux en ligne', url: 'https://www.doctolib.fr/', icon: '🩺' }
    ],
    loisirs: [
        { name: 'ARTE', description: 'Contenu culturel gratuit sans inscription', url: 'https://www.arte.tv/fr/', icon: '📺' },
        { name: 'Les Balises', description: 'Découvrez Les Balises, le portail numérique des médiathèques du Dunkerquois', url: 'https://www.lesbalises.fr/', icon: '🌟' },
        { name: 'Wikipédia', description: 'Encyclopédie communautaire très fournie', url: 'https://fr.wikipedia.org/', icon: '📚' },
        { name: 'YouTube', description: 'Vidéos, tutoriels, émissions en direct', url: 'https://www.youtube.com/', icon: '▶️' },
        { name: 'Marmiton', description: 'Recettes de cuisine', url: 'https://www.marmiton.org/', icon: '🍳' },
        { name: 'Google Earth', description: 'Globe terrestre en 3D interactif', url: 'https://earth.google.com/web', icon: '🌍' },
        { name: 'Board Game Arena', description: 'Jeux de société en ligne', url: 'https://fr.boardgamearena.com/', icon: '🎲' }
    ],
    creation: [
        { name: 'Canva', description: 'Créer des flyers, CV, affiches', url: 'https://www.canva.com/fr_fr/', icon: '🎨' },
        { name: 'Photopea', description: 'Édition d\'images et de photos', url: 'https://www.photopea.com/', icon: '🖼️' },
        { name: 'ChatGPT', description: 'IA générative de textes', url: 'https://chat.openai.com/', icon: '🤖' },
        { name: 'TinkerCAD', description: 'Modélisation 3D et circuits électriques', url: 'https://www.tinkercad.com/', icon: '🔧' },
        { name: 'Scratch', description: 'Programmation facile pour jeunes', url: 'https://scratch.mit.edu/', icon: '🐱' },
        { name: 'BandLab', description: 'Création de musique en ligne', url: 'https://www.bandlab.com/', icon: '🎵' }
    ],
    actualites: [
        { name: 'France Info', description: 'Actualités nationales et internationales', url: 'https://www.francetvinfo.fr/', icon: '📰' },
        { name: 'Le Monde', description: 'Journal d\'information générale', url: 'https://www.lemonde.fr/', icon: '📄' },
        { name: 'France 24', description: 'Information internationale en continu', url: 'https://www.france24.com/fr/', icon: '🌍' },
        { name: 'Le Figaro', description: 'Actualités et analyses', url: 'https://www.lefigaro.fr/', icon: '📰' },
        { name: 'Delta FM', description: 'Votre Radio Locale', url: 'https://www.deltafm.fr/', icon: '📻' },
        { name: 'BLAST', description: 'Média indépendant d\'information', url: 'https://www.blast-info.fr/', icon: '💥' },
        { name: 'Actu.fr', description: 'Actualités locales et régionales', url: 'https://actu.fr/', icon: '📍' }
    ],
    shopping: [
        { name: 'Leboncoin', description: 'Petites annonces en France', url: 'https://www.leboncoin.fr/', icon: '🏷️' },
        { name: 'Amazon', description: 'E-commerce international', url: 'https://www.amazon.fr/', icon: '📦' },
        { name: 'Donnons.org', description: 'Site de dons gratuits entre particuliers', url: 'https://donnons.org/', icon: '🎁' },
        { name: 'FNAC', description: 'Produits culturels et high-tech', url: 'https://www.fnac.com/', icon: '🛍️' },
        { name: 'Too Good to Go', description: 'Paniers anti-gaspi des commerces locaux', url: 'https://www.toogoodtogo.com/fr', icon: '🍱' },
        { name: 'Drive Carrefour', description: 'Courses en ligne à retirer au magasin', url: 'https://www.carrefour.fr/services/drive', icon: '🛒' },
        { name: 'Drive Leclerc', description: 'Courses en ligne à retirer au magasin', url: 'https://www.leclercdrive.fr/', icon: '🛒' }
    ],
    outils: [
        { name: 'Google Maps', description: 'Cartes routières et itinéraires', url: 'https://www.google.fr/maps', icon: '🗺️' },
        { name: 'WeTransfer', description: 'Transférez de gros fichiers facilement', url: 'https://wetransfer.com/', icon: '📤' },
        { name: 'I ❤️ PDF', description: 'Outils pour manipuler les PDF', url: 'https://www.ilovepdf.com/fr', icon: '📄' },
        { name: 'Les Bons Clics', description: 'Apprendre à utiliser l\'ordinateur', url: 'https://www.lesbonsclics.fr/fr/', icon: '💻' },
        { name: 'La Digitale', description: 'Outils numériques gratuits', url: 'https://ladigitale.dev/', icon: '🔧' },
        { name: 'Pix', description: 'Évaluez vos compétences numériques', url: 'https://pix.fr/', icon: '✅' }
    ]
};

let currentCategory = 'tous';
let searchTerm = '';

// Fonction pour afficher les cartes
function renderCards() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    let sitesToDisplay = [];

    if (currentCategory === 'tous') {
        Object.values(sites).forEach(category => {
            sitesToDisplay = sitesToDisplay.concat(category);
        });
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
            <div class="no-results">
                <div class="no-results-icon">🔍</div>
                <h2>Aucun résultat trouvé</h2>
                <p>Essayez avec d'autres mots-clés</p>
            </div>
        `;
        return;
    }

    const grid = document.createElement('div');
    grid.className = 'cards-grid';

    sitesToDisplay.forEach(site => {
        const card = document.createElement('a');
        card.className = 'card';
        card.href = site.url;
        card.target = '_blank';
        card.innerHTML = `
            <div class="card-header">
                <div class="card-icon">${site.icon}</div>
                <div class="card-title">${site.name}</div>
            </div>
            <div class="card-description">${site.description}</div>
        `;
        grid.appendChild(card);
    });

    content.appendChild(grid);
}

// Gestion des onglets
document.getElementById('tabs').addEventListener('click', (e) => {
    if (e.target.classList.contains('tab')) {
        document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
        e.target.classList.add('active');
        currentCategory = e.target.dataset.category;
        renderCards();
    }
});

// Gestion de la recherche
document.getElementById('searchInput').addEventListener('input', (e) => {
    searchTerm = e.target.value;
    renderCards();
});

// Affichage initial
renderCards();

// ==========================================
// 🗂️ BASE DE DONNÉES DES FICHES ATELIERS
// ==========================================

const fichesData = [
    {
        id: 1,
        titre: "Installer LibreOffice",
        description: "Découvrez comment installer la suite LibreOffice pour traiter vos textes, créer des tableurs et faire des présentations gratuitement.",
        categorie: "bureautique",
        niveau: "debutant",
        animateur: "andy",
        duree: 30,
        icon: "💼",
        lien: "https://drive.google.com/file/d/1-63mBol2CC5suOgGd7_93qDa5U4kbNtb/preview"
    },
    {
        id: 2,
        titre: "Installer l'extension AdBlock",
        description: "Apprenez à bloquer les publicités intrusives et à naviguer en toute sécurité sur Internet sans être dérangé.",
        categorie: "securite",
        niveau: "debutant",
        animateur: "emilie",
        duree: 20,
        icon: "🔒",
        lien: "https://drive.google.com/file/d/1vvaPxpFBYT7IziFKLzV95NjpcNdZsTG2/preview"
    },
    {
        id: 3,
        titre: "La souris et le pavé tactile",
        description: "Maîtrisez les gestes essentiels pour utiliser votre souris et votre pavé tactile comme un pro !",
        categorie: "outils",
        niveau: "debutant",
        animateur: "andy",
        duree: 45,
        icon: "🖱️",
        lien: "https://drive.google.com/file/d/1z-9wxxpT-8x4phIeuQh_I786h9TSy-9n/preview"
    },
    {
        id: 4,
        titre: "Créer un compte FranceConnect",
        description: "Guide complet pour créer votre identité numérique et simplifier toutes vos démarches administratives en ligne.",
        categorie: "demandes",
        niveau: "intermediaire",
        animateur: "emilie",
        duree: 60,
        icon: "🏛️",
        lien: "#"
    }
    // 📝 AJOUTEZ VOS NOUVELLES FICHES ICI
    // Copiez simplement le modèle ci-dessus et modifiez les valeurs !
];

// 🎨 Configuration des styles
const categoriesConfig = {
    bureautique: { label: "Bureautique", color: "#edf2f7" },
    securite: { label: "Sécurité", color: "#fed7d7" },
    demandes: { label: "Démarches", color: "#c6f6d5" },
    navigation: { label: "Navigation", color: "#dbeafe" },
    outils: { label: "Outils", color: "#fef3c7" }
};

const niveauxConfig = {
    debutant: { label: "🌱 Débutant", color: "#d1fae5", textColor: "#065f46" },
    intermediaire: { label: "🌿 Intermédiaire", color: "#fef3c7", textColor: "#78350f" },
    avance: { label: "🌳 Avancé", color: "#fee2e2", textColor: "#991b1b" }
};

const animateursConfig = {
    andy: { nom: "Andy", avatar: "👨‍💻" },
    emilie: { nom: "Émilie", avatar: "👩‍💻" }
};

// ==========================================
// GESTIONNAIRE PRINCIPAL DES FICHES
// ==========================================

(function() {
    const ficheContainer = document.getElementById('ficheContainerV2');
    const noResults = document.getElementById('noResultsV2');
    const totalFichesEl = document.getElementById('totalFiches');
    const visibleFichesEl = document.getElementById('visibleFiches');
    const searchInput = document.getElementById('searchFichesV2');
    const clearBtn = document.getElementById('clearSearchV2');
    const filterTags = document.querySelectorAll('.filter-tag');
    const resetBtn = document.getElementById('resetFilters');
    const resetFromNoResults = document.getElementById('resetFromNoResults');
    const sortSelect = document.getElementById('sortSelect');

    // Vérifier que les éléments existent
    if (!ficheContainer) {
        console.log('Section classification non trouvée');
        return;
    }

    let filters = {
        category: 'all',
        niveau: 'all',
        animateur: 'all',
        search: ''
    };

    let currentFiches = [...fichesData];

    // 🎬 INITIALISATION
    function init() {
        renderFiches(currentFiches);
        updateStats();
        attachEventListeners();
    }

    // 🎨 GÉNÉRATION DU HTML
    function createFicheHTML(fiche) {
        const categorie = categoriesConfig[fiche.categorie];
        const niveau = niveauxConfig[fiche.niveau];
        const animateur = animateursConfig[fiche.animateur];

        return `
            <article class="fiche-card" 
                     data-category="${fiche.categorie}" 
                     data-niveau="${fiche.niveau}" 
                     data-animateur="${fiche.animateur}"
                     data-duree="${fiche.duree}"
                     data-title="${fiche.titre}">
                
                <div class="card-header-v2">
                    <div class="card-icon-v2">${fiche.icon}</div>
                    <div class="card-tags">
                        <span class="tag-category ${fiche.categorie}">${categorie.label}</span>
                    </div>
                </div>

                <h3 class="card-title-v2">${fiche.titre}</h3>
                <p class="card-description-v2">${fiche.description}</p>

                <div class="card-meta">
                    <div class="meta-item">
                        <span class="badge-niveau-v2 ${fiche.niveau}">${niveau.label}</span>
                    </div>
                    <div class="meta-item">
                        <span class="badge-duree-v2">⏱️ ${formatDuree(fiche.duree)}</span>
                    </div>
                </div>

                <div class="card-footer-v2">
                    <div class="animateur-info">
                        <span class="animateur-avatar">${animateur.avatar}</span>
                        <span class="animateur-name">${animateur.nom}</span>
                    </div>
                    <a href="${fiche.lien}" target="_blank" class="btn-view">
                        📄 Consulter
                    </a>
                </div>
            </article>
        `;
    }

    // 📊 AFFICHAGE
    function renderFiches(fiches) {
        if (fiches.length === 0) {
            ficheContainer.style.display = 'none';
            noResults.style.display = 'block';
            return;
        }

        ficheContainer.style.display = 'grid';
        noResults.style.display = 'none';
        ficheContainer.innerHTML = fiches.map(fiche => createFicheHTML(fiche)).join('');
        
        // Animation
        const cards = ficheContainer.querySelectorAll('.fiche-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 50);
        });
    }

    // 🔍 FILTRAGE
    function applyFilters() {
        let filtered = [...fichesData];

        if (filters.category !== 'all') {
            filtered = filtered.filter(f => f.categorie === filters.category);
        }

        if (filters.niveau !== 'all') {
            filtered = filtered.filter(f => f.niveau === filters.niveau);
        }

        if (filters.animateur !== 'all') {
            filtered = filtered.filter(f => f.animateur === filters.animateur);
        }

        if (filters.search) {
            const searchLower = filters.search.toLowerCase();
            filtered = filtered.filter(f => 
                f.titre.toLowerCase().includes(searchLower) ||
                f.description.toLowerCase().includes(searchLower) ||
                categoriesConfig[f.categorie].label.toLowerCase().includes(searchLower)
            );
        }

        currentFiches = filtered;
        renderFiches(currentFiches);
        updateStats(filtered.length);
    }

    // 📈 TRI
    function sortFiches(criteria) {
        const sorted = [...currentFiches];
        
        switch(criteria) {
            case 'title':
                sorted.sort((a, b) => a.titre.localeCompare(b.titre));
                break;
            case 'niveau':
                const niveauOrder = {debutant: 1, intermediaire: 2, avance: 3};
                sorted.sort((a, b) => niveauOrder[a.niveau] - niveauOrder[b.niveau]);
                break;
            case 'duree':
                sorted.sort((a, b) => a.duree - b.duree);
                break;
        }

        currentFiches = sorted;
        renderFiches(currentFiches);
    }

    // 📊 STATS
    function updateStats(visible) {
        totalFichesEl.textContent = fichesData.length;
        visibleFichesEl.textContent = visible !== undefined ? visible : fichesData.length;
        
        visibleFichesEl.style.transform = 'scale(1.2)';
        setTimeout(() => {
            visibleFichesEl.style.transform = 'scale(1)';
        }, 200);
    }

    // 🎛️ ÉVÉNEMENTS
    function attachEventListeners() {
        if (searchInput) {
            searchInput.addEventListener('input', function() {
                filters.search = this.value.trim();
                clearBtn.style.display = filters.search ? 'flex' : 'none';
                applyFilters();
            });
        }

        if (clearBtn) {
            clearBtn.addEventListener('click', function() {
                searchInput.value = '';
                filters.search = '';
                this.style.display = 'none';
                applyFilters();
            });
        }

        filterTags.forEach(tag => {
            tag.addEventListener('click', function() {
                const filterType = this.dataset.filter;
                const filterValue = this.dataset.value;

                document.querySelectorAll(`[data-filter="${filterType}"]`).forEach(t => {
                    t.classList.remove('active');
                });

                this.classList.add('active');
                filters[filterType] = filterValue;
                applyFilters();
            });
        });

        if (resetBtn) resetBtn.addEventListener('click', resetAllFilters);
        if (resetFromNoResults) resetFromNoResults.addEventListener('click', resetAllFilters);

        if (sortSelect) {
            sortSelect.addEventListener('change', function() {
                sortFiches(this.value);
            });
        }
    }

    // 🔄 Action Bouton RESET
    function resetAllFilters() {
        filters = {
            category: 'all',
            niveau: 'all',
            animateur: 'all',
            search: ''
        };
        
        if (searchInput) searchInput.value = '';
        if (clearBtn) clearBtn.style.display = 'none';
        if (sortSelect) sortSelect.value = 'default';

        filterTags.forEach(tag => {
            tag.classList.remove('active');
            if (tag.dataset.value === 'all') {
                tag.classList.add('active');
            }
        });

        currentFiches = [...fichesData];
        renderFiches(currentFiches);
        updateStats();
    }

    // 🕐 Forma Date
    function formatDuree(minutes) {
        if (minutes < 60) return `${minutes} min`;
        const heures = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return mins > 0 ? `${heures}h${mins}` : `${heures}h`;
    }

    // 🚀 DÉMARRAGE
    init();

})();