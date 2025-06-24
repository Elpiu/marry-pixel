Guida agli Stili dell'App "Wedding Quest" (Stile Arcade/Retro)
Questa guida illustra i principi di design e le convenzioni di stile adottate nell'applicazione "Wedding Quest" per mantenere un look & feel coerente e autentico, ispirato ai giochi arcade classici.

1. Palette Colori
La palette è ispirata ai giochi arcade e alle interfacce utente pixel-art, con colori vivaci che contrastano con sfondi scuri. Abbiamo anche definito colori semantici per facilitare la modifica.

Sfondi Scuri (Base):

bg-black: Il nero puro è lo sfondo dominante per ricreare l'atmosfera dello spazio/notte.
bg-purple-900, bg-blue-900, bg-indigo-900, bg-teal-900, bg-red-900: Varie tonalità scure di viola, blu, indaco, verde-acqua e rosso per sfumature di background (bg-gradient-to-b, bg-gradient-to-br).
darkBackground (#1A0D2F): Un viola molto scuro, quasi nero, definito in tailwind.config.js come colore semantico.
Colori Principali (Testo, Bordi, Accenti):

text-yellow-400, border-yellow-400, bg-yellow-400: Giallo brillante per titoli importanti, pulsanti "Start", "Insert Coin", high score, e bordi chiave. Simboleggia energia e importanza. (primary in tailwind.config.js)
text-cyan-400, border-cyan-400, bg-cyan-400: Ciano/Blu chiaro per informazioni di stato (Crediti, Progress), testo secondario, elementi UI. (secondary in tailwind.config.js)
text-red-400, border-red-400, bg-red-400: Rosso acceso per avvisi, messaggi critici, pulsanti "Game Over" (o "Boss Level" in questo caso), e highlight. (danger in tailwind.config.js)
text-pink-400, border-pink-400, bg-pink-400: Rosa brillante per accenti romantici, dettagli dei personaggi, e elementi decorativi. (accent in tailwind.config.js)
text-green-400, border-green-400, bg-green-400: Verde vivido per indicazioni di successo, sblocco livelli, "Player Ready" e elementi positivi. (greenGlow in tailwind.config.js)
text-purple-400, border-purple-400, bg-purple-400: Viola per elementi specifici, spesso in combinazione con il blu o il rosa.
Colori Secondari/Neutri:

text-white, border-white: Bianco per testo generico o bordi di contrasto.
text-gray-XXX, bg-gray-XXX, border-gray-XXX: Varie tonalità di grigio per elementi disabilitati, background di elementi UI o testo meno prominente.
Suggerimento per future modifiche: Utilizza le classi di colore definite in tailwind.config.js (es. text-primary, bg-danger). Se un colore deve cambiare globalmente, si modifica solo la definizione nel file di configurazione, non ogni singola occorrenza nel codice.

2. Tipografia
La scelta dei font è cruciale per l'estetica "arcade".

Font Principale (Pixelated/Arcade):

font-mono: Utilizza un font mono-spaziato o, preferibilmente, un font pixelato come "Press Start 2P" (definito in tailwind.config.js e importato in index.css). Questo è usato per quasi tutto il testo principale, titoli, e informazioni di gioco.
Esempi di classi: font-black, text-4xl, text-xl.
Font Secondario (Leggibile):

font-sans: Un font leggibile come "Roboto" (definito in tailwind.config.js e importato in index.css) per blocchi di testo più lunghi o informazioni che richiedono maggiore chiarezza, come descrizioni o dettagli degli eventi.
Suggerimento per future modifiche: Seleziona i font con cura. Se decidi di cambiare il font "arcade", assicurati di aggiornarlo sia in tailwind.config.js (sezione fontFamily) che nell'importazione in index.css.

3. Effetti di Testo e Contenuto
Per migliorare l'atmosfera "gaming", sono usati diversi effetti visivi.

text-transparent bg-clip-text bg-gradient-to-r: Per titoli con effetto gradiente, tipico dei loghi dei vecchi giochi. Il testo è reso trasparente e il gradiente di sfondo "clippato" al testo.

Esempio: text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500
animate-pulse: Effetto di pulsazione per attirare l'attenzione su elementi interattivi o importanti (es. titoli, pulsanti "Press Start", stelle di sfondo).

Varianti: animate-pulseFast (se definita in tailwind.config.js per una pulsazione più rapida).
animate-bounce: Per piccoli movimenti su e giù, come le frecce o icone che indicano interazione.

Varianti: animate-bounceSlow (se definita in tailwind.config.js per un rimbalzo più lento).
Ombre e Bordi Marcati: Utilizzo di shadow-xl, shadow-2xl e bordi spessi (border-4) con colori a contrasto per dare profondità e un aspetto "hardware" ai blocchi UI.

Sfondi Semi-Trasparenti/Sfumati: bg-opacity-XX o backdrop-blur-sm per creare pannelli che lasciano intravedere lo sfondo, ma mantengono il contenuto leggibile.

4. Layout e Spaziatura
Si favorisce un layout pulito ma con elementi ben definiti e bordati.

Flexbox (flex, flex-col, flex-row, justify-between, items-center): Per l'allineamento degli elementi in riga o colonna, tipico delle interfacce utente.
Grid (grid, grid-cols-X, gap-X): Utilizzato per layout a più colonne, come la selezione dei livelli o i profili dei personaggi.
Spaziatura Consistente (p-X, m-X, space-x-X, space-y-X): Utilizzo delle utility di spaziatura di Tailwind per garantire margini e padding uniformi tra gli elementi. Si cerca di mantenere una progressione chiara (es. p-4, p-6, p-8).
Larghezze Massime (max-w-X) e Centratura (mx-auto): Per contenere il contenuto principale e centrarlo orizzontalmente, garantendo leggibilità su schermi grandi.
5. Elementi Interattivi (Pulsanti, Input)
I pulsanti sono particolarmente stilizzati per richiamare i bottoni fisici delle console arcade.

Pulsanti (<button>):
Bordi spessi e colorati: border-4 con colori che risaltano (es. border-yellow-400, border-red-400).
Sfondi solidi e contrastanti: bg-red-600, bg-green-600, bg-blue-600.
Effetti al passaggio del mouse/click:
hover:scale-105: Lieve ingrandimento al passaggio del mouse.
active:scale-95: Lieve rimpicciolimento al click per simulare la pressione del pulsante.
transition-transform duration-100: Animazione fluida per gli effetti di scala.
cursor-pointer: Indica che l'elemento è cliccabile.
select-none: Impedisce la selezione del testo all'interno del pulsante.
Testo in maiuscolo, grassetto (font-black) con colori vivaci.
Stato disabilitato: disabled:opacity-50 e disabled:cursor-not-allowed per i pulsanti di livello non sbloccati.
6. Componenti Specifici UI (Arcade Game Elements)
Barre di Progresso (ProgressBar.tsx):

Sfondo scuro (bg-gray-800).
Barra interna con gradiente (bg-gradient-to-r).
Transizione fluida per l'aggiornamento del progresso (transition-all duration-300).
Colore del gradiente adattivo alla schermata (es. from-cyan-400 to-yellow-400).
Sfondo Stellato (StarBackground.tsx):

Posizionamento assoluto per coprire l'intera area (absolute inset-0).
Stelle come div piccoli e rotondi (rounded-full) con animazione animate-pulse.
Posizione randomica (left: %, top: %).
Pannelli Informativi (div con bordi e padding):

Sfondo nero o scuro (bg-black, bg-opacity-XX).
Bordi spessi con colori a contrasto (border-4 border-yellow-400).
Padding generoso (p-X o p-Y sm:p-X).
Testo interno con colori tematici (es. text-green-400).
7. Responsiveness
Il design è pensato per essere adattivo su diverse dimensioni di schermo, utilizzando le utility responsive di Tailwind.

Breakpoint di Tailwind: sm:, md:, lg:, xl:.
Esempio: flex-col sm:flex-row (il layout cambia da colonna a riga su schermi piccoli/medi).
Esempio: text-4xl sm:text-6xl lg:text-8xl (la dimensione del testo si adatta alla dimensione dello schermo).
max-w-X mx-auto: Utilizzato per limitare la larghezza dei blocchi di contenuto e centrarli, rendendoli leggibili su schermi grandi.