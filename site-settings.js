(() => {
  const strings = {
    "Home":"Inicio","Research":"Investigación","Research Group":"Grupo de investigación","Research group":"Grupo de investigación",
    "Publications":"Publicaciones","Talks":"Charlas","Teaching":"Docencia","Service":"Servicio","Resources":"Recursos","Contact":"Contacto",
    "Ph.D. Candidate in Mathematics":"Estudiante de doctorado en Matemáticas",
    "Institute of Mathematics":"Instituto de Matemáticas",
    "I am a Ph.D. candidate at the":"Soy estudiante de doctorado en",
    "Institute of Mathematics, Universidad de Talca":"Instituto de Matemáticas, Universidad de Talca",
    ", Chile, under the supervision of Professor":", Chile, bajo la supervisión del profesor",
    ". I completed my Master’s degree in Mathematics at":". Completé mi maestría en Matemáticas en",
    "in 2024, also under his supervision, and earned my undergraduate degree in Mathematics from Universidad de La Habana in 2020.":"en 2024, también bajo su supervisión, y obtuve mi título de pregrado en Matemáticas en la Universidad de La Habana en 2020.",
    "My research lies in representation theory, invariant theory, and non-commutative algebra, with particular interest in reflection groups, rational Cherednik algebras, symplectic reflection algebras, quotient singularities, and diagonal coinvariant rings.":"Mi investigación se centra en la teoría de representaciones, la teoría de invariantes y el álgebra no conmutativa, con especial interés en grupos de reflexión, álgebras de Cherednik racionales, álgebras de reflexión simpléctica, singularidades cociente y anillos de coinvariantes diagonales.",
    "My current work focuses on zero-fiber rings associated with quaternionic reflection groups, combining tools from representation theory, invariant theory, and computational algebra.":"Mi trabajo actual estudia anillos de fibra cero asociados a grupos de reflexión cuaterniónicos, combinando herramientas de teoría de representaciones, teoría de invariantes y álgebra computacional.",
    "Slides and videos from selected talks":"Diapositivas y videos de algunas charlas","Master's thesis (2024) and defense slides":"Tesis de maestría (2024) y diapositivas de defensa","Resources and outreach material":"Recursos y material de divulgación",
    "Research interests":"Áreas de investigación",
    "I work in representation theory and invariant theory, with emphasis on reflection groups and non-commutative algebraic structures.":"Trabajo en teoría de representaciones y teoría de invariantes, con énfasis en grupos de reflexión y estructuras algebraicas no conmutativas.",
    "Quaternionic reflection groups":"Grupos de reflexión cuaterniónicos","Zero-fiber rings and quotient singularities":"Anillos de fibra cero y singularidades cociente","Symplectic reflection algebras and rational Cherednik algebras":"Álgebras de reflexión simpléctica y álgebras de Cherednik racionales","Invariant theory and diagonal coinvariant rings":"Teoría de invariantes y anillos de coinvariantes diagonales","Path algebras, quivers, and computational algebra":"Álgebras de caminos, quivers y álgebra computacional","Wonderful models and subspace arrangements":"Modelos maravillosos y arreglos de subespacios",
    "Current projects":"Proyectos actuales","Zero-fiber rings for rank 2 quaternionic reflection groups":"Anillos de fibra cero para grupos de reflexión cuaterniónicos de rango 2",
    "This project studies zero-fiber rings associated with rank 2 quaternionic reflection groups, combining lower bounds coming from symplectic reflection algebras with upper bounds obtained by explicit Gröbner basis computations.":"Este proyecto estudia anillos de fibra cero asociados a grupos de reflexión cuaterniónicos de rango 2. Combina cotas inferiores provenientes de álgebras de reflexión simpléctica con cotas superiores obtenidas mediante cálculos explícitos de bases de Gröbner.",
    "Wonderful models of subspace arrangements for division rings":"Modelos maravillosos de arreglos de subespacios para anillos de división",
    "This project explores versions of wonderful models in settings related to subspace arrangements over division rings.":"Este proyecto explora variantes de modelos maravillosos en contextos relacionados con arreglos de subespacios sobre anillos de división.",
    "I am part of the research environment in representation theory and related areas at the":"Formo parte del grupo de investigación en teoría de representaciones y áreas afines del",
    "My Ph.D. advisor is":"Mi director de doctorado es",
    "Griffeth's group 2026":"Grupo de Griffeth, 2026","Griffeth's group 2023":"Grupo de Griffeth, 2023","with":"con","and":"y",
    "Published papers":"Artículos publicados","Manuscripts in preparation":"Manuscritos en preparación","Thesis":"Tesis",
    "Master's thesis in Mathematics,":"Tesis de maestría en Matemáticas,","Advisor:":"Director:","Thesis PDF":"Tesis (PDF)","Defense slides":"Diapositivas de defensa",
    "Selected talks, slides, posters, and videos":"Charlas, diapositivas, pósteres y videos seleccionados",
    "Video at 24:10":"Video en 24:10","Next Gen Session, 13th Heidelberg Laureate Forum.":"Sesión Next Gen, 13.º Heidelberg Laureate Forum.",
    "CIME Coxeter School, Cetraro, Italy.":"Escuela Coxeter de CIME, Cetraro, Italia.","Slides PDF":"Diapositivas (PDF)","Poster PDF":"Póster (PDF)",
    "Poster, EMALCA — eLENA X 2025, Universidad Nacional de Córdoba, Argentina.":"Póster, EMALCA — eLENA X 2025, Universidad Nacional de Córdoba, Argentina.",
    "Other selected talks":"Otras charlas seleccionadas","XXV Latin American Congress of Algebra, Lima, Peru.":"XXV Congreso Latinoamericano de Álgebra, Lima, Perú.",
    "On bounds for the degree of the zero fiber of rank-2 quaternionic reflection groups.":"Sobre cotas para el grado de la fibra cero de grupos de reflexión cuaterniónicos de rango 2.",
    "About the diagonal coinvariant ring for quaternionic reflection groups.":"Sobre el anillo de coinvariantes diagonales de grupos de reflexión cuaterniónicos.",
    "Zero fiber of quotient singularities.":"Fibra cero de singularidades cociente.",
    "Schools and Workshops Attended":"Escuelas y talleres realizados","Coxeter group theory and representation theory, Cetraro, Italy.":"Teoría de grupos de Coxeter y teoría de representaciones, Cetraro, Italia.",
    "Teaching experience, courses, and tutoring.":"Experiencia docente, cursos y tutorías.",
    "Mathematics Tutor,":"Tutora de Matemáticas,","Online mathematics tutoring in English.":"Tutorías de matemáticas en línea en inglés.",
    "Instructor, Preparatory Mathematics.":"Docente de Matemáticas Preparatorias.","Lecturer, Precalculus and Calculus.":"Profesora de Precálculo y Cálculo.",
    "Commercial Engineering,":"Ingeniería Comercial,","Teaching Assistant,":"Ayudante docente,","Statistics and Probability, Calculus, Linear Algebra, and ODEs.":"Estadística y Probabilidad, Cálculo, Álgebra Lineal y EDO.",
    "Calculus, Linear Algebra, and Real Analysis.":"Cálculo, Álgebra Lineal y Análisis Real.",
    "Academic service and outreach":"Servicio académico y divulgación","Instructor,":"Docente,","Minicourse":"Curso breve","An introduction to Gröbner bases.":"Introducción a las bases de Gröbner.",
    "Notes":"Apuntes","videos":"videos","Short course":"Curso breve","Invisible Patterns: Changing without changing":"Patrones invisibles: cambiar sin cambiar",
    "Organizing Committee, Summer School for Undergraduates in Mathematics.":"Comité organizador, Escuela de Verano de Matemáticas para estudiantes de pregrado.",
    "Institute of Mathematics, Universidad de Talca":"Instituto de Matemáticas, Universidad de Talca","Tutor, Summer School for undergraduates in Mathematics.":"Tutora, Escuela de Verano de Matemáticas para estudiantes de pregrado.",
    "Exercises on":"Ejercicios sobre","Finite subgroups of":"Subgrupos finitos de","School taught by":"Curso impartido por",
    "Notes and study material":"Apuntes y material de estudio","Weekly problem-solving seminar based on V. Kac's":"Seminario semanal de resolución de problemas basado en",
    "We studied the book and discussed solutions to selected exercises.":"Estudiamos el libro y comentamos soluciones a ejercicios seleccionados.",
    "Solutions and notes":"Soluciones y apuntes","Guide for international students at":"Guía para estudiantes internacionales del",
    "Practical information for new international students in Talca (in Spanish).":"Información práctica para estudiantes internacionales que llegan a Talca.",
    "Young researchers seminar on Mathematics at Talca":"Seminario de jóvenes investigadores en Matemáticas en Talca",
    "YouTube channel":"canal de YouTube","My husband, the mathematician and Ph.D. student in Integrable Systems and Symmetric Functions,":"Mi esposo, el matemático y estudiante de doctorado en Sistemas Integrables y Funciones Simétricas,",
    "Download Curriculum Vitae":"Descargar currículum vitae","Contact information for Lien Cartaya.":"Información de contacto de Lien Cartaya.",
    "Email":"Correo electrónico","ORCID":"ORCID","Switch language to Spanish":"Cambiar idioma a español",
    "Research | Lien Cartaya":"Investigación | Lien Cartaya","Research Group | Lien Cartaya":"Grupo de investigación | Lien Cartaya",
    "Publications | Lien Cartaya":"Publicaciones | Lien Cartaya","Talks | Lien Cartaya":"Charlas | Lien Cartaya",
    "Teaching | Lien Cartaya":"Docencia | Lien Cartaya","Service | Lien Cartaya":"Servicio | Lien Cartaya",
    "Resources | Lien Cartaya":"Recursos | Lien Cartaya","Contact | Lien Cartaya":"Contacto | Lien Cartaya"
  };
  const normalize = value => value.replace(/\s+/g, " ").trim();
  const applyLanguage = language => {
    document.documentElement.lang = language;
    document.title = language === "es" ? (strings[document.title] || document.title) : (Object.keys(strings).find(k => strings[k] === document.title) || document.title);
    if (language === "es") {
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      const nodes = [];
      while (walker.nextNode()) nodes.push(walker.currentNode);
      for (const node of nodes) {
        const key = normalize(node.nodeValue);
        if (strings[key]) {
          const leading = node.nodeValue.match(/^\s*/)?.[0] || "";
          const trailing = node.nodeValue.match(/\s*$/)?.[0] || "";
          node.nodeValue = leading + strings[key] + trailing;
        }
      }
    } else {
      location.reload();
      return;
    }
    document.querySelector("[data-language-toggle]").textContent = "EN";
    document.querySelector("[data-language-toggle]").setAttribute("aria-label", "Cambiar idioma a inglés");
    const theme = document.documentElement.dataset.theme;
    document.querySelector("[data-theme-toggle]").textContent = theme === "dark" ? "Modo claro" : "Modo oscuro";
    const nav = document.querySelector(".nav");
    if (nav) nav.setAttribute("aria-label", "Navegación principal");
  };
  const theme = localStorage.getItem("site-theme") || "dark";
  const language = localStorage.getItem("site-language") || "en";
  document.documentElement.dataset.theme = theme;
  const themeButton = document.querySelector("[data-theme-toggle]");
  const languageButton = document.querySelector("[data-language-toggle]");
  const updateThemeLabel = () => { themeButton.textContent = document.documentElement.dataset.theme === "dark" ? (language === "es" ? "Modo claro" : "Light mode") : (language === "es" ? "Modo oscuro" : "Dark mode"); };
  themeButton.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next; localStorage.setItem("site-theme", next); updateThemeLabel();
  });
  languageButton.addEventListener("click", () => {
    const next = localStorage.getItem("site-language") === "es" ? "en" : "es";
    localStorage.setItem("site-language", next); location.reload();
  });
  if (language === "es") applyLanguage("es");
  else { languageButton.textContent = "ES"; languageButton.setAttribute("aria-label","Switch language to Spanish"); }
  updateThemeLabel();
})();