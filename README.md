```

```
# 🍽️ Bistrot Lumière - Site Vitrine Restaurant

Ce projet est une "Landing Page" moderne et responsive pour un restaurant, conçue pour être performante, esthétique et facilement maintenable sans build-process complexe.

## 🛠️ Stack Technique

* **HTML5 Sémantique** : Structure accessible (`header`, `main`, `section`, `article`, `footer`).
* **CSS3 Moderne** :
    * **CSS Variables (Custom Properties)** : Pour la gestion dynamique du thème.
    * **Flexbox & Grid** : Pour les layouts responsives.
    * **Glassmorphism** : Effets de flou (`backdrop-filter`) sur les cartes.
* **JavaScript (Vanilla ES6+)** :
    * Aucune dépendance (pas de jQuery, pas de framework).
    * **Intersection Observer API** : Pour les animations au scroll (performance).
    * **Event Listeners passifs** : Pour l'optimisation du scroll.

---

## 🏗️ Approche & Architecture

### 1. Gestion du Thème (Theming)
Le design system repose entièrement sur les variables CSS définies dans `:root`.
* **Pourquoi ?** Permet de changer la charte graphique (couleurs, polices, espacements) en modifiant quelques lignes au début du fichier CSS ou dynamiquement via JS.

### 2. Performance & Animations
* **Parallaxe** : L'effet sur le Hero est calculé via `requestAnimationFrame` (implicite via l'event scroll optimisé) et utilise `transform: translate3d` pour forcer l'accélération matérielle (GPU).
* **Reveal on Scroll** : Au lieu d'écouter l'événement `scroll` (coûteux en ressources), nous utilisons l'API `IntersectionObserver`. Les animations ne se déclenchent que lorsque l'élément entre dans le viewport.

### 3. Responsive Design (Mobile First)
* Les styles de base sont pour mobile.
* Les Media Queries (`@media (min-width: ...)`) gèrent l'adaptation tablette et desktop.
* Les unités relatives (`rem`, `%`, `vh`) sont privilégiées.

---

## 📂 Structure du Projet

```text
/
├── index.html      # Structure DOM et contenu textuel
├── css/
|    |── styles.css      # Feuilles de style, variables et animations
├── js/
|    |── script.js       # Logique parallaxe, observer et panel admin
└── README.md       # Documentation technique