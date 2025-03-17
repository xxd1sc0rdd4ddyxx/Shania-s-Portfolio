document.addEventListener('DOMContentLoaded', function () {
    const languageButton = document.getElementById('language-toggle');
    if (!languageButton) {
        console.error("Sprachumschalter nicht gefunden!");
        return;
    }

    let currentLang = localStorage.getItem('language') || 'DE';
    setLanguage(currentLang);
    updateButtonLabel(currentLang);

    languageButton.addEventListener('click', function () {
        currentLang = (currentLang === 'ENG') ? 'DE' : 'ENG';
        localStorage.setItem('language', currentLang);
        setLanguage(currentLang);
        updateButtonLabel(currentLang);
    });

    function updateButtonLabel(language) {
        languageButton.textContent = (language === 'DE') ? 'ENG' : 'DE';
    }

    function setLanguage(language) {
        console.log(`Sprache gewechselt zu: ${language}`);

        const translations = {
            DE: {
                home: "Home",
                projects: "Projekte",
                learnProject: "Lernprojekt",
                ahzos: "Ahzos",
                shatteredReality: "The Shattered Reality",
                astrabann: "Astrabann",
                archive: "Archiv",
                bannerTitle: "Ahzos",
                bannerText: "Schulprojekt mit Luis Thiermann",
                sectionOneTitle: "Die Reise und die moralischen Entscheidungen",
                sectionOneText: "Erlebe eine epische Reise...",
                sectionTwoText: "Im Laufe des Spiels wirst du...",
                sectionThreeTitle: "Was dich im Spiel erwartet",
                sectionThreeText: "Der Spieler trifft auf verschiedene Herausforderungen...",
                downloadLink: "Download",
                tilesetTitle: "Tilesets und Hintergründe",
                tilesetText: "Für das Spiel 'Ahzos' habe ich Tilesets und Hintergründe...",
                downloadTilesets: "Download Tilesets",
                hangmanTitle: "Hangman",
                hangmanText: "Dieses Minigame, Hangman, wurde als kleines Spiel entwickelt...",
                downloadHangman: "Download Hangman"
            },
            ENG: {
                home: "Home",
                projects: "Projects",
                learnProject: "Learning Project", // Hier wird Lernprojekt übersetzt!
                ahzos: "Ahzos",
                shatteredReality: "The Shattered Reality",
                astrabann: "Astrabann",
                archive: "Archive",
                bannerTitle: "Ahzos",
                bannerText: "School project with Luis Thiermann",
                sectionOneTitle: "The Journey and the Moral Choices",
                sectionOneText: "Embark on an epic journey...",
                sectionTwoText: "As the game progresses, you will face moral decisions...",
                sectionThreeTitle: "What Awaits You in the Game",
                sectionThreeText: "The player will encounter various challenges...",
                downloadLink: "Download",
                tilesetTitle: "Tilesets and Backgrounds",
                tilesetText: "For the game 'Ahzos', I designed tilesets and backgrounds...",
                downloadTilesets: "Download Tilesets",
                hangmanTitle: "Hangman",
                hangmanText: "This minigame, Hangman, was developed as a small game...",
                downloadHangman: "Download Hangman"
            }
        };

        function updateText(id, text) {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = text;
            } else {
                console.warn(`Element mit ID "${id}" nicht gefunden!`);
            }
        }

        // Navigation
        updateText('homeLink', translations[language].home);
        updateText('projectsLink', translations[language].projects);
        updateText('learningProjectLink', translations[language].learnProject); // Hier wird "Lernprojekt" übersetzt!
        updateText('ahzosLink', translations[language].ahzos);
        updateText('shatteredRealityLink', translations[language].shatteredReality);
        updateText('astrabannLink', translations[language].astrabann);
        updateText('archiveLink', translations[language].archive);

        // Hauptinhalt
        updateText('bannerTitle', translations[language].bannerTitle);
        updateText('bannerText', translations[language].bannerText);
        updateText('sectionOneTitle', translations[language].sectionOneTitle);
        updateText('sectionOneText', translations[language].sectionOneText);
        updateText('sectionTwoText', translations[language].sectionTwoText);
        updateText('sectionThreeTitle', translations[language].sectionThreeTitle);
        updateText('sectionThreeText', translations[language].sectionThreeText);
        updateText('downloadLink', translations[language].downloadLink);
        updateText('tilesetTitle', translations[language].tilesetTitle);
        updateText('tilesetText', translations[language].tilesetText);
        updateText('downloadTilesets', translations[language].downloadTilesets);
        updateText('hangmanTitle', translations[language].hangmanTitle);
        updateText('hangmanText', translations[language].hangmanText);
        updateText('downloadHangman', translations[language].downloadHangman);
    }
});

// Shattered Reality
document.addEventListener("DOMContentLoaded", function () {
    const languageButton = document.getElementById("language-toggle");

    // Standardmäßig auf Deutsch setzen, falls keine Sprache gespeichert ist
    let currentLanguage = localStorage.getItem("language");

    if (!currentLanguage) {
        currentLanguage = "DE"; // **Standard auf Deutsch setzen**
        localStorage.setItem("language", currentLanguage); // **Speicherung der Standard-Sprache**
    }

    // Sprache setzen
    setLanguage(currentLanguage);
    updateButtonText(currentLanguage);

    languageButton.addEventListener("click", function () {
        // Sprache umschalten
        currentLanguage = (currentLanguage === "DE") ? "ENG" : "DE";

        // Neue Sprache speichern und anwenden
        localStorage.setItem("language", currentLanguage);
        setLanguage(currentLanguage);
        updateButtonText(currentLanguage);
    });

    function setLanguage(language) {
        console.log(`Sprache gewechselt zu: ${language}`); // Debugging: Prüfen, ob die Sprache korrekt wechselt

        const translations = {
            DE: {
                home: "Home",
                projects: "Projekte",
                learnProject: "Lernprojekt",
                ahzos: "Ahzos",
                shatteredReality: "The Shattered Reality",
                astrabann: "Astrabann",
                archive: "Archiv",
                pageTitle: "The Shattered Reality",
                pageDescription: "Schulprojekt",
                gameTitle: 'Erlebe die Welt von "The Shattered Reality"',
                gameDescription: 'In "The Shattered Reality" begibst du dich auf eine aufregende Reise in einer post-apokalyptischen Welt...',
                additionalGameDescription: 'Jeder Spieler übernimmt die Rolle eines mutierten Überlebenden mit einzigartigen Fähigkeiten...',
                specialFeaturesTitle: 'Besondere Merkmale von "The Shattered Reality"',
                specialFeaturesText: `
                    <p>Kooperatives Gameplay, bei dem Zusammenarbeit entscheidend ist.</p>
                    <p>Einzigartige klassenbasierte Fähigkeiten für jeden Spieler.</p>
                    <p>Schlüsselmechanik mit Mini-Bossen und Ressourcenmanagement.</p>
                    <p>Das ultimative Ziel ist es, das letzte Artefakt zu erlangen und die Wand zu vervollständigen.</p>
                    <p>Intensive Bosskämpfe und immer größer werdende Herausforderungen.</p>
                `,
                downloadButton: "Download"
            },
            ENG: {
                home: "Home",
                projects: "Projects",
                learnProject: "Learning Project",
                ahzos: "Ahzos",
                shatteredReality: "The Shattered Reality",
                astrabann: "Astrabann",
                archive: "Archive",
                pageTitle: "The Shattered Reality",
                pageDescription: "School Project",
                gameTitle: 'Experience the world of "The Shattered Reality"',
                gameDescription: 'In "The Shattered Reality," embark on an exciting journey in a post-apocalyptic world overrun by mutants...',
                additionalGameDescription: 'Each player takes on the role of a mutated survivor with unique abilities...',
                specialFeaturesTitle: 'Special Features of "The Shattered Reality"',
                specialFeaturesText: `
                    <p>Cooperative gameplay where collaboration is key.</p>
                    <p>Unique class-based abilities for each player.</p>
                    <p>Core mechanics involving mini-bosses and resource management.</p>
                    <p>The ultimate goal is to acquire the final artifact and complete the wall.</p>
                    <p>Intense boss fights and increasingly difficult challenges.</p>
                `,
                downloadButton: "Download"
            }
        };

        function updateText(id, text) {
            const element = document.getElementById(id);
            if (element) {
                element.innerHTML = text;
            } else {
                console.warn(`Element mit ID "${id}" nicht gefunden!`);
            }
        }

        // Navigation (auch "Lernprojekt" wird jetzt übersetzt!)
        updateText("homeLink", translations[language].home);
        updateText("projectsLink", translations[language].projects);
        updateText("learningProjectLink", translations[language].learnProject);
        updateText("ahzosLink", translations[language].ahzos);
        updateText("shatteredRealityLink", translations[language].shatteredReality);
        updateText("astrabannLink", translations[language].astrabann);
        updateText("archiveLink", translations[language].archive);

        // Hauptinhalt
        updateText("pageTitle", translations[language].pageTitle);
        updateText("pageDescription", translations[language].pageDescription);
        updateText("gameTitle", translations[language].gameTitle);
        updateText("gameDescription", translations[language].gameDescription);
        updateText("additionalGameDescription", translations[language].additionalGameDescription);
        updateText("specialFeaturesTitle", translations[language].specialFeaturesTitle);
        updateText("specialFeaturesText", translations[language].specialFeaturesText);
        updateText("downloadButton", translations[language].downloadButton);
    }

    function updateButtonText(language) {
        languageButton.textContent = (language === "DE") ? "ENG" : "DE";
    }
});

// index.html

document.addEventListener("DOMContentLoaded", function () {
    const languageToggle = document.getElementById("language-toggle");

    languageToggle.addEventListener("click", function (event) {
        event.preventDefault();

        if (languageToggle.innerText === "ENG") {
            languageToggle.innerText = "DE";
            changeLanguage("en");
        } else {
            languageToggle.innerText = "ENG";
            changeLanguage("de");
        }
    });

    function changeLanguage(language) {
        const translations = {
            "de": {
                "bannerHeader": "Hallihallo, ich bin Shania",
                "bannerDescription": "Kreatives Chaos mit System.<br/>Code. Design.",
                "navProjects": "Projekte",  // Schon richtig ✅
                "navArchive": "Archiv",  // Schon richtig ✅
                "oneHeader": "Ich.",
                "oneDescription": "Debugging my life since 2004.",
                "oneCreative": "Kreativität in jeder Form.</br>Ich liebe es, zu lesen, zu malen, digital zu zeichnen, Musik zu machen (Gitarre & Piano) und zu häkeln.</br>. . .",
                "oneGaming": "Gaming-Obsession.</br>Meine Lieblingsspiele aller Zeiten: The Legend of Zelda, Age of Empires, Celeste<br/>. . .",
                "twoHeader": "Katze.",
                "twoDescription": "Ponyo & Bibbles.",
                "threeHeader": "Gedächtnisanker.",
                "threeDescription": "Schaffen. Scheitern. Weitermachen.",
                "threeQuote": "Es ist niemals zu spät, etwas Neues zu lernen. Niemals zu spät, einen Traum weiterzuverfolgen. Niemals zu spät, besser zu werden – in dem, was du liebst. Man wächst, man fällt, man zweifelt. Doch wer stehen bleibt, sieht nie, wie weit er gehen kann. Manchmal braucht es nur einen Funken, einen Moment – und alles verändert sich. Die ersten Zeilen Code, der erste Pinselstrich, der erste Akkord. Perfekt war es nie. Doch Fortschritt ist das Ziel. Bleib dran. Halte fest. Erschaffe. Denn die besten Geschichten schreibt nicht Talent, sondern Beharrlichkeit. Es ist niemals zu spät. Niemals.",
                "fourHeader": "Tätigkeit.",
                "fourDescription": "Meine Skills an der SRH in Heidelberg perfektionieren und meine Stats in Game Dev & Multimedia maxen.",
                "contactHeader": "Na, Interesse geweckt?",
                "contactText": "Kontaktier mich – Bugs fixe ich, Mails lese ich.",
                "emailPlaceholder": "Deine E-Mail-Adresse",
                "messagePlaceholder": "Deine Nachricht",
                "subjectPlaceholder": "Betreff",
                "sendButton": "Senden",
                "footerTwitter": "Twitter",
                "footerLinkedIn": "LinkedIn",
                "footerInstagram": "Instagram",
                "footerGitHub": "GitHub",
                "footerEmail": "E-Mail"
            },
            "en": {
                "bannerHeader": "Hello, I'm Shania",
                "bannerDescription": "Creative chaos with system.<br/>Code. Design.",
                "navProjects": "Projects",  // Hinzugefügt ✅
                "navArchive": "Archive",  // Hinzugefügt ✅
                "oneHeader": "Me.",
                "oneDescription": "Debugging my life since 2004.",
                "oneCreative": "Creativity in all forms.</br>I love reading, painting, digital drawing, making music (guitar & piano), and crocheting.</br>. . .",
                "oneGaming": "Gaming Obsession.</br>My all-time favorite games: The Legend of Zelda, Age of Empires, Celeste.<br/>. . .",
                "twoHeader": "Cats.",
                "twoDescription": "Ponyo & Bibbles.",
                "threeHeader": "Memory Anchors.",
                "threeDescription": "Create. Fail. Keep going.",
                "threeQuote": "It’s never too late to learn something new, never too late to pursue a dream, never too late to become better at what you love. You grow, you fall, you doubt. But if you remain standing still, you'll never discover how far you can go. Sometimes all it takes is a single spark, one moment—and everything changes. The first lines of code, the first brushstroke, the first chord—it was never perfect, but progress is the goal. Keep going, hold on, create. Because the greatest stories aren't written by talent alone, but by perseverance. It's never too late. Never.",
                "fourHeader": "Activity.",
                "fourDescription": "Perfecting my skills at SRH in Heidelberg and maxing my stats in Game Dev & Multimedia.",
                "contactHeader": "Interested?",
                "contactText": "Contact me – I fix bugs, I read emails.",
                "emailPlaceholder": "Your Email Address",
                "messagePlaceholder": "Your Message",
                "subjectPlaceholder": "Subject",
                "sendButton": "Send",
                "footerTwitter": "Twitter",
                "footerLinkedIn": "LinkedIn",
                "footerInstagram": "Instagram",
                "footerGitHub": "GitHub",
                "footerEmail": "Email"
            }
        };

        const selectedLanguage = translations[language];

        // Setze alle Texte mit IDs
        Object.keys(selectedLanguage).forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.innerHTML = selectedLanguage[id]; // innerText → innerHTML
            }
        });

        // Setze spezielle Placeholder- und Button-Werte für Formulare
        document.querySelector("input[type='email']").setAttribute("placeholder", selectedLanguage.emailPlaceholder);
        document.querySelector("textarea").setAttribute("placeholder", selectedLanguage.messagePlaceholder);
        document.querySelector("input[name='subject']").setAttribute("placeholder", selectedLanguage.subjectPlaceholder);
        document.querySelector("input[type='submit']").setAttribute("value", selectedLanguage.sendButton);

        // Setze Footer-Links
        document.querySelector("footer ul li:nth-child(1) a span").innerText = selectedLanguage.footerTwitter;
        document.querySelector("footer ul li:nth-child(2) a span").innerText = selectedLanguage.footerLinkedIn;
        document.querySelector("footer ul li:nth-child(3) a span").innerText = selectedLanguage.footerInstagram;
        document.querySelector("footer ul li:nth-child(4) a span").innerText = selectedLanguage.footerGitHub;
        document.querySelector("footer ul li:nth-child(5) a span").innerText = selectedLanguage.footerEmail;
    }
});

// Archiv

document.addEventListener('DOMContentLoaded', function () {
    const languageButton = document.getElementById('language-toggle'); // ENG/DE Button
    if (!languageButton) {
        console.error("Sprachumschalter nicht gefunden!");
        return;
    }

    let currentLang = localStorage.getItem('language') || 'DE';

    setLanguage(currentLang);
    updateButtonLabel(currentLang);

    // Event-Listener für Button-Klick
    languageButton.addEventListener('click', function () {
        currentLang = (currentLang === 'ENG') ? 'DE' : 'ENG';
        localStorage.setItem('language', currentLang);
        setLanguage(currentLang);
        updateButtonLabel(currentLang);
    });

    function updateButtonLabel(language) {
        languageButton.textContent = (language === 'DE') ? 'ENG' : 'DE';
    }

    function setLanguage(language) {
        console.log(`Sprache gewechselt zu: ${language}`);

        const translations = {
            DE: {
                home: "Home",
                projects: "Projekte",
                learnProject: "Lernprojekt",
                ahzos: "Ahzos",
                shatteredReality: "The Shattered Reality",
                astrabann: "Astrabann",
                archive: "Archiv",
                archiveHeading: "Archiv",
                gallery: "Bildergalerie",
                galleryHome: "Home",
                projectSection: "Projekte",
                projectSub: "1-3",
                cats: "Katzen",
                catNames: "Ponyo & Bibbles",
                footer: "© Shania Priscilla Kim Sulit."
            },
            ENG: {
                home: "Home",
                projects: "Projects",
                learnProject: "Learning Project",
                ahzos: "Ahzos",
                shatteredReality: "The Shattered Reality",
                astrabann: "Astrabann",
                archive: "Archive",
                archiveHeading: "Archive",
                gallery: "Image Gallery",
                galleryHome: "Home",
                projectSection: "Projects",
                projectSub: "1-3",
                cats: "Cats",
                catNames: "Ponyo & Bibbles",
                footer: "© Shania Priscilla Kim Sulit."
            }
        };

        // Elemente selektieren und Text setzen
        document.getElementById('homeLink').textContent = translations[language].home;
        document.getElementById('projectsLink').textContent = translations[language].projects;
        document.getElementById('learnProjectLink').textContent = translations[language].learnProject;
        document.getElementById('ahzosLink').textContent = translations[language].ahzos;
        document.getElementById('shatteredRealityLink').textContent = translations[language].shatteredReality;
        document.getElementById('astrabannLink').textContent = translations[language].astrabann;
        document.getElementById('archiveLink').textContent = translations[language].archive;
        const h3Elements = document.querySelectorAll('h3');
        const h4Elements = document.querySelectorAll('h4');
        
        if (h3Elements.length >= 3) {
            h3Elements[0].textContent = translations[language].gallery;
            h3Elements[1].textContent = translations[language].projectSection;
            h3Elements[2].textContent = translations[language].cats;
        }
        
        if (h4Elements.length >= 3) {
            h4Elements[0].textContent = translations[language].galleryHome;
            h4Elements[1].textContent = translations[language].projectSub;
            h4Elements[2].textContent = translations[language].catNames;
        }
        
        
        document.querySelector('footer ul.copyright li:first-child').textContent = translations[language].footer;
    }
});

//Astrabann 
document.addEventListener("DOMContentLoaded", function () {
    const languageButton = document.getElementById("language-toggle");

    // Standardmäßig auf Deutsch setzen, falls keine Sprache gespeichert ist
    let currentLang = localStorage.getItem("language") || "ENG";
    setLanguage(currentLang);
    updateButtonLabel(currentLang);

    languageButton.addEventListener("click", function () {
        // Sprache umschalten
        currentLang = (currentLang === "ENG") ? "DE" : "ENG";

        // Neue Sprache speichern und anwenden
        localStorage.setItem("language", currentLang);
        setLanguage(currentLang);
        updateButtonLabel(currentLang);
    });

    function updateButtonLabel(language) {
        // Setzt den Button-Text auf die andere Sprache
        languageButton.textContent = (language === "ENG") ? "DE" : "ENG";
    }
});

function setLanguage(language) {
    const translations = {
        DE: {
            gddTitle: "Game Design Dokument",
            gddText: "Das Game Design Document definiert die Kernmechaniken, Story und Rätsel von AstraBann. Ziel ist eine immersive Spielerfahrung, die historisches Wissen mit herausforderndem Gameplay verbindet.",
            gameplayTemplateTitle: "Gameplay-Vorlage (Testlevel)",
            gameplayTemplateText: "Diese frühe Gameplay-Vorlage dient als Testumgebung für die grundlegenden Rätselmechaniken...",
            gameplayTitle: "Ein magisches Rätsel-Abenteuer im Heidelberger Schloss",
            gameplayText: "AstraBann ist ein storybasiertes Rätsel-Plattformspiel, das Spieler auf eine magische Reise...",
            gameplayFeaturesTitle: "Gameplay",
            feature1: "Rätsel & Erkundung – Historisch inspirierte Puzzle im Heidelberger Schloss lösen.",
            feature2: "Plattforming-Elemente – Springen, klettern und Hindernisse überwinden.",
            feature3: "Magische Story – Spieler schlüpfen in die Rolle eines Zauberers mit einer geheimnisvollen Mission.",
            feature4: "Sammelobjekte – Versteckte Artefakte enthüllen spannende Hintergrundgeschichten.",
            feature5: "Immersive Atmosphäre – Originalgetreue 3D-Umgebung mit mystischer Stimmung."
        },
        ENG: {
            gddTitle: "Game Design Document",
            gddText: "The Game Design Document defines AstraBann's core mechanics, story, and puzzles. The goal is an immersive experience that combines historical knowledge with challenging gameplay.",
            gameplayTemplateTitle: "Gameplay Template (Test Level)",
            gameplayTemplateText: "This early gameplay template serves as a test environment for core puzzle mechanics...",
            gameplayTitle: "A Magical Puzzle Adventure in Heidelberg Castle",
            gameplayText: "AstraBann is a story-driven puzzle platformer that takes players on a magical journey...",
            gameplayFeaturesTitle: "Gameplay",
            feature1: "Puzzles & Exploration – Solve historically inspired puzzles in Heidelberg Castle.",
            feature2: "Platforming Elements – Jump, climb, and overcome obstacles.",
            feature3: "Magical Story – Players take on the role of a wizard on a mysterious mission.",
            feature4: "Collectibles – Hidden artifacts reveal exciting background stories.",
            feature5: "Immersive Atmosphere – Authentic 3D environment with a mystical setting."
        }
    };


    function updateText(id, text) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = text;
        }
    }

    // Setze die Texte basierend auf der ausgewählten Sprache
    Object.keys(translations[language]).forEach(id => {
        updateText(id, translations[language][id]);
    });
}