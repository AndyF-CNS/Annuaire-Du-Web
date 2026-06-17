import {
} from "lucide-react"

import type { Site } from "../types/site"

export const sitesData: Site[] = [
  // ==========================================
  // ADMINISTRATION
  // ==========================================
  {
    id: 1,
    name: "Mairie Téteghem-Coudekerque-Village",
    description: "Site officiel de la mairie : démarches, actualités, services municipaux",
    url: "https://www.ville-tcv.fr/",
    image:"https://www.ville-tcv.fr/wp-content/uploads/TCV-logo-quadri-300x221.png",
    category: "administration",
    featured: true
  },
  {
    id: 2,
    name: "CAF",
    description: "Aides familiales : petite enfance, logement, solidarité",
    url: "https://www.caf.fr/",
    image:"https://www.caf.fr/themes/custom/caf_bootstrap5/images/icons/logo_cnaf.svg", 
    category: "administration"
  },
  {
    id: 3,
    name: "Impôts",
    description: "Payez vos impôts directement en ligne et gérez votre déclaration",
    url: "https://www.impots.gouv.fr/accueil",
    image:"https://www.ville-boulogne-sur-gesse.fr/wp-content/uploads/2023/06/csm_1200px-Logo_DGFP-fr.svg_1ea8f57d02.png", 
    category: "administration"
  },
  {
    id: 4,
    name: "Service Public",
    description: "Le portail officiel de toutes vos démarches administratives",
    url: "https://www.service-public.fr/",
    image:"https://upload.wikimedia.org/wikipedia/fr/thumb/8/8d/Service-public.svg/1280px-Service-public.svg.png",
    category: "administration"
  },
  {
    id: 5,
    name: "La Poste",
    description: "Préparez vos envois, suivez vos Colissimos et courriers",
    url: "https://www.laposte.fr/",
    image:"https://www.laposte.fr/ecom/_nuxt/logo-part-horizontal.BtezbiGr.svg",
    category: "administration"
  },
  {
    id: 6,
    name: "Info-Retraite",
    description: "Portail regroupant les informations pour votre retraite !",
    url: "https://www.info-retraite.fr/",
    image:"https://www.info-retraite.fr/portail-info/files/live/sites/PortailInformationnel/files/logo-ir.jpg",
    category: "administration"
  },

  // ==========================================
  // SANTE (Catégorie activée !)
  // ==========================================
  {
    id: 7,
    name: "AMELI",
    description: "Attestations de droits, formalités carte vitale, feuille de soins",
    url: "https://www.ameli.fr/",
    image: "https://lecentral.fourmies.fr/app/uploads/2024/09/dessin.png",
    category: "sante"
  },
  {
    id: 8,
    name: "Doctolib",
    description: "Prise de rendez-vous médicaux en ligne et téléconsultations",
    url: "https://www.doctolib.fr/",
    image:"https://upload.wikimedia.org/wikipedia/fr/thumb/7/7f/Logo-doctolib.svg/1280px-Logo-doctolib.svg.png",
    category: "sante"
  },

  // ==========================================
  // LOISIRS
  // ==========================================
  {
    id: 9,
    name: "ARTE",
    description: "Contenu culturel gratuit et de grande qualité sans inscription",
    url: "https://www.arte.tv/fr/",
    image:"https://api-cdn.arte.tv/img/v2/image/EJNxrqJoyTicNtX7uuZTTC/1920x1080",
    category: "loisirs"
  },
  {
    id: 10,
    name: "Les Balises",
    description: "Découvrez Les Balises, le portail numérique des médiathèques du Dunkerquois",
    url: "https://www.lesbalises.fr/",
    image:"https://www.lesbalises.fr/iguana/css/themes/newbalises/images/Logo.png",
    category: "loisirs"
  },
  {
    id: 11,
    name: "Wikipédia",
    description: "Encyclopédie communautaire libre et très fournie",
    url: "https://fr.wikipedia.org/",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/1280px-Wikipedia-logo-v2.svg.png", 
    category: "loisirs"
  },
  {
    id: 12,
    name: "YouTube",
    description: "Vidéos, reportages, tutoriels et émissions en direct",
    url: "https://www.youtube.com/",
    image: "https://yt3.googleusercontent.com/Z1ogKYq5dKHvg4pGc6m41n393MX3CVysiArGrVJgfkB-0MvgoYizwzqY62KY30JFdAgN3oqC9A=s900-c-k-c0x00ffffff-no-rj",
    category: "loisirs"
  },
  {
    id: 13,
    name: "Marmiton",
    description: "Des milliers de recettes de cuisine simples et guidées",
    url: "https://www.marmiton.org/",
    image:"https://cdn.welcometothejungle.co/uploads/website/logo/0398/147272/ab17e513-f444-4c9b-837b-94f905353339.png", 
    category: "loisirs"
  },
  {
    id: 14,
    name: "Google Earth",
    description: "Explorez le monde entier grâce à ce globe terrestre en 3D interactif",
    url: "https://earth.google.com/web",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Google_Earth_icon.svg/1280px-Google_Earth_icon.svg.png", 
    category: "loisirs"
  },
  {
    id: 15,
    name: "Board Game Arena",
    description: "Jouez à des centaines de jeux de société en ligne directement sur votre navigateur",
    url: "https://fr.boardgamearena.com/",
    image:"https://gl.doc.boardgamearena.com/images/thumb/b/b6/LOGO_FULL_POSITIVE-HORIZONTAL_COLOR_RVB.png/800px-LOGO_FULL_POSITIVE-HORIZONTAL_COLOR_RVB.png",
    category: "loisirs"
  },

  // ==========================================
  // CREATION
  // ==========================================
  {
    id: 16,
    name: "Canva",
    description: "Outil intuitif pour créer des flyers, CV, cartes et affiches",
    url: "https://www.canva.com/fr_fr/",
    image:"https://static.vecteezy.com/system/resources/thumbnails/056/850/847/small_2x/canva-app-logo-on-a-transparent-background-free-png.png",
    category: "creation"
  },
  {
    id: 17,
    name: "Photopea",
    description: "Édition et retouche d'images et de photos avancée en ligne",
    url: "https://www.photopea.com/",
    image:"https://cdn.worldvectorlogo.com/logos/photopea-wordmark-dark-3.svg",
    category: "creation"
  },
  {
    id: 18,
    name: "TinkerCAD",
    description: "Modélisation 3D simplifiée et conception de circuits électriques",
    url: "https://www.tinkercad.com/",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Logo-tinkercad-wordmark.svg/3840px-Logo-tinkercad-wordmark.svg.png",
    category: "creation"
  },
  {
    id: 19,
    name: "Scratch",
    description: "Initiation et programmation facile par blocs visuels",
    url: "https://scratch.mit.edu/",
    image:"https://logos-world.net/wp-content/uploads/2023/08/Scratch-Emblem.png",
    category: "creation"
  },
  {
    id: 20,
    name: "BandLab",
    description: "Studio d'enregistrement et création de musique en ligne gratuit",
    url: "https://www.bandlab.com/",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/BandLab_logo.svg/3840px-BandLab_logo.svg.png",
    category: "creation"
  },

  // ==========================================
  // ACTUALITES
  // ==========================================
  {
    id: 22,
    name: "France Info",
    description: "Actualités nationales, internationales et décryptages fiables",
    url: "https://www.financetvinfo.fr/",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/France_Info_-_2008.svg/960px-France_Info_-_2008.svg.png",
    category: "actualites"
  },
  {
    id: 23,
    name: "Le Monde",
    description: "Grand journal quotidien d'information générale",
    url: "https://www.lemonde.fr/",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Le_monde_logo.svg/1280px-Le_monde_logo.svg.png",
    category: "actualites"
  },
  {
    id: 24,
    name: "France 24",
    description: "Chaîne d'information internationale en continu",
    url: "https://www.france24.com/fr/",
    image:"https://upload.wikimedia.org/wikipedia/fr/thumb/2/24/Logos_FRANCE24_RVB_2013.svg/langfr-250px-Logos_FRANCE24_RVB_2013.svg.png",
    category: "actualites"
  },
  {
    id: 25,
    name: "Le Figaro",
    description: "Actualités politiques, économiques et analyses",
    url: "https://www.lefigaro.fr/",
    image:"https://upload.wikimedia.org/wikipedia/fr/thumb/f/f8/Le_Figaro_logo.svg/1280px-Le_Figaro_logo.svg.png",
    category: "actualites"
  },
  {
    id: 26,
    name: "Delta FM",
    description: "Votre radio locale et l'actualité de votre territoire en direct",
    url: "https://www.deltafm.fr/",
    image:"https://upload.wikimedia.org/wikipedia/commons/5/51/Logo_delta_2019.png",
    category: "actualites"
  },
  {
    id: 27,
    name: "BLAST",
    description: "Média indépendant et engagé d'information et d'enquêtes",
    url: "https://www.blast-info.fr/",
    image:"https://www.blast-info.fr/logo-blast-black.svg",
    category: "actualites"
  },
  {
    id: 28,
    name: "Actu.fr",
    description: "Regroupement d'actualités locales, régionales et pratiques",
    url: "https://actu.fr/",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Actu.fr_logo_2020.svg/960px-Actu.fr_logo_2020.svg.png",
    category: "actualites"
  },

  // ==========================================
  // SHOPPING
  // ==========================================
  {
    id: 29,
    name: "Leboncoin",
    description: "Le premier site de petites annonces et d'occasion en France",
    url: "https://www.leboncoin.fr/",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Leboncoin_Logo_%282016%29.svg/3840px-Leboncoin_Logo_%282016%29.svg.png",
    category: "shopping"
  },
  {
    id: 30,
    name: "Amazon",
    description: "Plateforme majeure d'e-commerce et de livraisons rapides",
    url: "https://www.amazon.fr/",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/960px-Amazon_logo.svg.png",
    category: "shopping"
  },
  {
    id: 31,
    name: "Donnons.org",
    description: "Site solidaire de dons gratuits d'objets entre particuliers",
    url: "https://donnons.org/",
    image:"https://images.squarespace-cdn.com/content/v1/67c967ec65d9637c6bcdc1b4/61d2e9c4-c989-4a35-9ea7-7e0deadf7c88/Logo-Donnons-Bleu.png",
    category: "shopping"
  },
  {
    id: 32,
    name: "FNAC",
    description: "Vente de livres, produits culturels, billetterie et high-tech",
    url: "https://www.fnac.com/",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Fnac_Logo.svg/3840px-Fnac_Logo.svg.png",
    category: "shopping"
  },
  {
    id: 33,
    name: "Too Good to Go",
    description: "Achetez à petit prix des paniers anti-gaspi chez vos commerçants locaux",
    url: "https://www.toogoodtogo.com/fr",
    image:"https://cdn.sanity.io/images/nqimd3nr/production/5f6914bb8b733414b8287b62731a95915dc63505-1952x2000.jpg?rect=0,24,1952,1952&w=200&h=200&fit=max&auto=format",
    category: "shopping"
  },
  {
    id: 34,
    name: "Drive Carrefour",
    description: "Faites vos courses en ligne à retirer rapidement au magasin",
    url: "https://www.carrefour.fr/services/drive",
    image:"https://www.centre-commercial.fr/carrefour-nevers-marzy/wp-content/uploads/sites/41/2016/04/carrefour-drive.jpg",
    category: "shopping"
  },

  // ==========================================
  // OUTILS
  // ==========================================
  {
    id: 36,
    name: "Google Maps",
    description: "Plans interactifs, calculs d'itinéraires et états du trafic",
    url: "https://www.google.fr/maps",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/1920px-Google_Maps_icon_%282020%29.svg.png",
    category: "outils"
  },
  {
    id: 37,
    name: "WeTransfer",
    description: "Transférez de gros fichiers ou photos facilement par e-mail",
    url: "https://wetransfer.com/",
    image:"https://upload.wikimedia.org/wikipedia/commons/3/3c/WeTransfer_Logo.jpg",
    category: "outils"
  },
  {
    id: 38,
    name: "I ❤️ PDF",
    description: "Boîte à outils en ligne pour fusionner, diviser ou signer vos PDF",
    url: "https://www.ilovepdf.com/fr",
    image:"https://companieslogo.com/img/orig/ilovepdf_BIG-ecf4cbd1.png?t=1720244494",
    category: "outils"
  },
  {
    id: 39,
    name: "La Digitale",
    description: "Outils numériques éducatifs, responsables et entièrement gratuits",
    url: "https://ladigitale.dev/",
    image:"https://ladigitale.dev/blog/bl-content/uploads/pages/bb743d1cf6c802b8c98c61fa33ce4956/apple-touch-icon.png", 
    category: "outils"
  },
  {
    id: 40,
    name: "Pix",
    description: "Service public pour évaluer, développer et certifier ses compétences numériques",
    url: "https://pix.fr/",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pix_logo.svg/960px-Pix_logo.svg.png",
    category: "outils"
  },

  // ==========================================
  // FORMATION (Catégorie activée !)
  // ==========================================
  {
    id: 41,
    name: "Les Bons Clics",
    description: "Plateforme d'apprentissage pas à pas pour maîtriser l'ordinateur et internet",
    url: "https://www.lesbonsclics.fr/fr/",
    image:"https://yt3.googleusercontent.com/ePHOF77gN8uFXpFMSomPEJEDa6asNSqudLRF-Mq1RBZG_Nxjsdup97uq7rrdklImS298T0hyU6I=s900-c-k-c0x00ffffff-no-rj",
    category: "formation"
  }
]