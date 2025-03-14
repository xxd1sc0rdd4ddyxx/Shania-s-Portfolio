// language-toggle.js

document.addEventListener('DOMContentLoaded', function() {
    const languageButton = document.getElementById('language-toggle');
    
    // Initialisieren der Seite auf Deutsch und Button auf "ENG"
    setLanguage('DE'); // Standardmäßig auf Deutsch setzen
    languageButton.textContent = 'ENG'; // Button soll "ENG" für Englisch zeigen

    // Event Listener für den Klick auf den Sprachumschalter
    languageButton.addEventListener('click', function() {
        const currentLang = languageButton.textContent;

        if (currentLang === 'ENG') {
            languageButton.textContent = 'DE'; // Button zu "DE" wechseln
            setLanguage('ENG'); // Seite auf Englisch setzen
        } else {
            languageButton.textContent = 'ENG'; // Button zu "ENG" wechseln
            setLanguage('DE'); // Seite auf Deutsch setzen
        }
    });

    // Funktion zum Setzen der Sprache auf der Seite
    function setLanguage(language) {
        if (language === 'ENG') {
            document.getElementById('bannerTitle').textContent = 'Ahzos';
            document.getElementById('bannerText').textContent = 'School project with Luis Thiermann';
            document.getElementById('sectionOneTitle').textContent = 'The Journey and the Moral Choices';
            document.getElementById('sectionOneText').textContent = 'Embark on an epic journey through dangerous worlds that require skillful jumping and running to overcome. The game challenges your reflexes and guides you through diverse biomes filled with exciting obstacles.';
            document.getElementById('sectionTwoText').textContent = 'As the game progresses, you will face moral decisions that challenge your perception of the world and your actions. Uncover the true nature of the game as you unravel the dark secrets of the Watzmann.';
            document.getElementById('sectionThreeTitle').textContent = 'What Awaits You in the Game';
            document.getElementById('sectionThreeText').textContent = 'The player will encounter various challenges that get progressively harder as they advance. Enemies and obstacles require not only quick reflexes but also careful tactics and planning.';
            document.getElementById('gameExpectations').innerHTML = `
                <li>Obstacles that block your movements or slow you down.</li>
                <li>Hidden secrets and new gameplay mechanics that will surprise you.</li>
                <li>The constant need to improve your skills and learn new techniques.</li>
                <li>The ever-increasing pace of the game that keeps you in a constant state of challenge.</li>
                <li>The mix of danger and discovery that intensifies the atmosphere.</li>
            `;
            document.getElementById('downloadLink').textContent = 'Download';

            document.getElementById('tilesetTitle').textContent = 'Tilesets and Backgrounds';
            document.getElementById('tilesetText').textContent = 'For the game "Ahzos", I designed tilesets and backgrounds in Aseprite. These pixel art graphics contribute to the retro-inspired atmosphere of the game and form the visual foundation of the game worlds. The tilesets include interactive elements, while the backgrounds enhance the gaming experience and support the story.';
            document.getElementById('downloadTilesets').textContent = 'Download Tilesets';

            document.getElementById('hangmanTitle').textContent = 'Hangman';
            document.getElementById('hangmanText').textContent = 'This minigame, Hangman, was developed as a small game to guess the name of the game Ahzos before starting the main game. Have fun guessing!';
            document.getElementById('downloadHangman').textContent = 'Download Hangman';
        } else {
            document.getElementById('bannerTitle').textContent = 'Ahzos';
            document.getElementById('bannerText').textContent = 'Schulprojekt mit Luis Thiermann';
            document.getElementById('sectionOneTitle').textContent = 'Die Reise und die moralischen Entscheidungen';
            document.getElementById('sectionOneText').textContent = 'Erlebe eine epische Reise durch gefährliche Welten, die durch geschicktes Springen und Laufen überwunden werden müssen. Das Spiel fordert deine Reaktionsfähigkeit heraus und führt dich durch abwechslungsreiche Biome mit spannenden Hindernissen.';
            document.getElementById('sectionTwoText').textContent = 'Im Laufe des Spiels wirst du mit moralischen Entscheidungen konfrontiert, die deine Wahrnehmung auf die Welt und deine Handlungen in Frage stellen. Entdecke das wahre Wesen des Spiels, während du die dunklen Geheimnisse des Watzmanns entschlüsselst.';
            document.getElementById('sectionThreeTitle').textContent = 'Was dich im Spiel erwartet';
            document.getElementById('sectionThreeText').textContent = 'Der Spieler trifft auf verschiedene Herausforderungen, die immer schwieriger werden, während er voranschreitet. Gegner und Hindernisse verlangen nicht nur schnelle Reaktionen, sondern auch eine sorgfältige Taktik und Planung.';
            document.getElementById('gameExpectations').innerHTML = `
                <li>Hindernisse, die deine Bewegungen blockieren oder dich aufhalten.</li>
                <li>Verborgene Geheimnisse und neue Spielmechaniken, die dich überraschen werden.</li>
                <li>Die ständige Notwendigkeit, deine Fähigkeiten zu verbessern und neue Techniken zu erlernen.</li>
                <li>Das stetig steigende Tempo des Spiels, das dich in einen Zustand ständiger Herausforderung versetzt.</li>
                <li>Die Mischung aus Gefahr und Entdeckung, die die Atmosphäre intensiviert.</li>
            `;
            document.getElementById('downloadLink').textContent = 'Download';

            document.getElementById('tilesetTitle').textContent = 'Tilesets und Hintergründe';
            document.getElementById('tilesetText').textContent = 'Für das Spiel "Ahzos" habe ich Tilesets und Hintergründe in Aseprite entworfen. Diese Pixel-Art-Grafiken tragen zur retro-inspirierten Atmosphäre des Spiels bei und bilden die visuelle Grundlage für die Spielwelten. Die Tilesets beinhalten interaktive Elemente, während die Hintergründe das Spielerlebnis vertiefen und die Handlung unterstützen.';
            document.getElementById('downloadTilesets').textContent = 'Download Tilesets';

            document.getElementById('hangmanTitle').textContent = 'Hangman';
            document.getElementById('hangmanText').textContent = 'Dieses Minigame, Hangman, wurde als kleines Spiel entwickelt, um den Namen des Spiels Ahzos zu erraten, bevor du das Hauptspiel startest. Viel Spaß beim Erraten!';
            document.getElementById('downloadHangman').textContent = 'Download Hangman';
        }
    }
});


// language-toggle.js für The Shattered Reality
document.addEventListener('DOMContentLoaded', function() {
    const languageButton = document.getElementById('language-toggle');
    
    // Standardmäßig auf Deutsch setzen
    setLanguage('DE');
    languageButton.textContent = 'ENG'; // Button soll "ENG" für Englisch zeigen

    languageButton.addEventListener('click', function() {
        const currentLang = languageButton.textContent;

        if (currentLang === 'ENG') {
            languageButton.textContent = 'DE';
            setLanguage('ENG');
        } else {
            languageButton.textContent = 'ENG';
            setLanguage('DE');
        }
    });

    function setLanguage(language) {
        if (language === 'ENG') {
            document.getElementById('pageTitle').textContent = 'The Shattered Reality';
            document.getElementById('pageDescription').textContent = 'School Project';
            document.getElementById('gameTitle').textContent = 'Experience the world of "The Shattered Reality"';
            document.getElementById('gameDescription').textContent = 'In "The Shattered Reality," embark on an exciting journey in a post-apocalyptic world overrun by mutants. Together with your teammates, you must complete a mystical wall to save reality from collapsing. The fate of the world rests in your hands as you collect artifacts guarded by dangerous bosses.';
            document.getElementById('additionalGameDescription').textContent = 'Each player takes on the role of a mutated survivor with unique abilities. You must fight through dangerous areas, survive boss fights, and collect resources to obtain the final artifact and complete the mystical wall. Cooperative teamwork and strategic decisions are key to success. Defeat the threats in your path and uncover the true extent of the decay that threatens the world.';

            document.getElementById('specialFeaturesTitle').textContent = 'Special Features of "The Shattered Reality"';
            document.getElementById('specialFeaturesText').innerHTML = `
                <p>Cooperative gameplay where collaboration is key.</p>
                <p>Unique class-based abilities for each player.</p>
                <p>Core mechanics involving mini-bosses and resource management.</p>
                <p>The ultimate goal is to acquire the final artifact and complete the wall.</p>
                <p>Intense boss fights and increasingly difficult challenges.</p>
            `;
            document.getElementById('downloadButton').textContent = 'Download';
        } else {
            document.getElementById('pageTitle').textContent = 'Die zersplitterte Realität';
            document.getElementById('pageDescription').textContent = 'Schulprojekt';
            document.getElementById('gameTitle').textContent = 'Erlebe die Welt von "The Shattered Reality"';
            document.getElementById('gameDescription').textContent = 'In "The Shattered Reality" begibst du dich auf eine aufregende Reise in einer post-apokalyptischen Welt, die von Mutanten überrannt wird. Gemeinsam mit deinen Mitspielern musst du eine mystische Wand vervollständigen, um die Realität vor dem Zerfall zu bewahren. Durch das Sammeln von Artefakten, die von gefährlichen Bossen bewacht werden, steht das Schicksal der Welt auf dem Spiel. Dein Team muss zusammenarbeiten, um diese Herausforderung zu meistern und die letzte Hoffnung der Menschheit zu retten.';
            document.getElementById('additionalGameDescription').textContent = 'Jeder Spieler übernimmt die Rolle eines mutierten Überlebenden mit einzigartigen Fähigkeiten. Du musst dich durch gefährliche Gebiete kämpfen, Bosskämpfe überstehen und Ressourcen sammeln, um das letzte Artefakt zu erlangen und die mystische Wand zu vervollständigen. Die kooperative Zusammenarbeit und strategische Entscheidungen sind der Schlüssel zum Erfolg. Schlage die Bedrohungen, die auf deinem Weg liegen, und entdecke das wahre Ausmaß des Verfalls, der die Welt bedroht.';

            document.getElementById('specialFeaturesTitle').textContent = 'Besondere Merkmale von "The Shattered Reality"';
            document.getElementById('specialFeaturesText').innerHTML = `
                <p>Kooperatives Gameplay, bei dem Zusammenarbeit entscheidend ist.</p>
                <p>Einzigartige klassenbasierte Fähigkeiten für jeden Spieler.</p>
                <p>Schlüsselmechanik mit Mini-Bossen und Ressourcenmanagement.</p>
                <p>Das ultimative Ziel ist es, das letzte Artefakt zu erlangen und die Wand zu vervollständigen.</p>
                <p>Intensive Bosskämpfe und immer größer werdende Herausforderungen.</p>
            `;
            document.getElementById('downloadButton').textContent = 'Download';
        }
    }
});


// index.html

document.addEventListener("DOMContentLoaded", function () {
    const languageToggle = document.getElementById("language-toggle");

    languageToggle.addEventListener("click", function (event) {
        event.preventDefault(); // Verhindert das standardmäßige Verhalten (Navigation)

        // Sprachumschaltung: Wenn die aktuelle Sprache Deutsch ist, wechsle zu Englisch und umgekehrt.
        if (languageToggle.innerText === "ENG") {
            languageToggle.innerText = "DE"; // Setzt den Text des Buttons auf "DE"
            changeLanguage("en"); // Wechselt die Sprache zu Englisch
        } else {
            languageToggle.innerText = "ENG"; // Setzt den Text des Buttons auf "ENG"
            changeLanguage("de"); // Wechselt die Sprache zu Deutsch
        }
    });

    function changeLanguage(language) {
        if (language === "en") {
            // Header
            document.getElementById("bannerHeader").innerText = "Hello, I'm Shania";
            document.getElementById("bannerDescription").innerText = "Creative chaos with system. Code. Design.";

            // Section One
            document.getElementById("oneHeader").innerText = "Me.";
            document.getElementById("oneDescription").innerText = "Debugging my life since 2004.";
            document.getElementById("oneGaming").innerText = "Gaming Obsession.";
            document.getElementById("oneFavoriteGames").innerText = "My all-time favorite games: The Legend of Zelda, Age of Empires, Celeste.";

            // Section Two
            document.getElementById("twoHeader").innerText = "Cat.";
            document.getElementById("twoDescription").innerText = "Ponyo & Bibbles.";

            // Section Three
            document.getElementById("threeHeader").innerText = "Memory Anchors.";
            document.getElementById("threeDescription").innerText = "Create. Fail. Keep going.";
            document.getElementById("threeQuote").innerText = "It’s never too late to learn something new. Never too late to pursue a dream. Never too late to get better at what you love. Sometimes, all it takes is a spark, a moment – and everything changes.";

            // Section Four
            document.getElementById("fourHeader").innerText = "Activity.";
            document.getElementById("fourDescription").innerText = "Perfecting my skills at SRH in Heidelberg and maxing my stats in Game Dev & Multimedia.";

            // Section Five (Form Section)
            document.querySelector('header h2').innerText = "Interested?";
            document.querySelector('header p').innerText = "Contact me – I fix bugs, I read emails";
            document.querySelector('input[type="email"]').setAttribute('placeholder', "Your Email Address");
            document.querySelector('input[type="submit"]').setAttribute('value', "Send");
            document.querySelector('textarea').setAttribute('placeholder', "Your Message");
            document.querySelector('input[name="subject"]').setAttribute('placeholder', "Subject");

            // Footer
            document.querySelector("footer ul li:nth-child(1) a span").innerText = "Twitter";
            document.querySelector("footer ul li:nth-child(2) a span").innerText = "LinkedIn";
            document.querySelector("footer ul li:nth-child(3) a span").innerText = "Instagram";
            document.querySelector("footer ul li:nth-child(4) a span").innerText = "GitHub";
            document.querySelector("footer ul li:nth-child(5) a span").innerText = "Email";
            document.querySelector("footer .copyright li:nth-child(1)").innerText = "&copy; Shania Priscilla Kim Sulit.";
            document.querySelector("footer .copyright li:nth-child(2)").innerText = "HTML5 UP";

        } else if (language === "de") {
            // Header
            document.getElementById("bannerHeader").innerText = "Hallihallo, ich bin Shania";
            document.getElementById("bannerDescription").innerText = "Kreatives Chaos mit System. Code. Design.";

            // Section One
            document.getElementById("oneHeader").innerText = "Ich.";
            document.getElementById("oneDescription").innerText = "Debugging my life since 2004.";
            document.getElementById("oneGaming").innerText = "Gaming-Obsession.";
            document.getElementById("oneFavoriteGames").innerText = "Meine Lieblingsspiele aller Zeiten: The Legend of Zelda, Age of Empires, Celeste.";

            // Section Two
            document.getElementById("twoHeader").innerText = "Katze.";
            document.getElementById("twoDescription").innerText = "Ponyo & Bibbles.";

            // Section Three
            document.getElementById("threeHeader").innerText = "Gedächtnisanker.";
            document.getElementById("threeDescription").innerText = "Schaffen. Scheitern. Weitermachen.";
            document.getElementById("threeQuote").innerText = "Es ist niemals zu spät, etwas Neues zu lernen. Niemals zu spät, einen Traum weiterzuverfolgen. Niemals zu spät, besser zu werden – in dem, was du liebst. Manchmal braucht es nur einen Funken, einen Moment – und alles verändert sich.";

            // Section Four
            document.getElementById("fourHeader").innerText = "Tätigkeit.";
            document.getElementById("fourDescription").innerText = "Meine Skills an der SRH in Heidelberg perfektionieren und meine Stats in Game Dev & Multimedia maxen.";

            // Section Five (Form Section)
            document.querySelector('header h2').innerText = "Na, Interesse geweckt?";
            document.querySelector('header p').innerText = "Kontaktier mich – Bugs fixe ich, Mails lese ich";
            document.querySelector('input[type="email"]').setAttribute('placeholder', "Deine E-Mail-Adresse");
            document.querySelector('input[type="submit"]').setAttribute('value', "Senden");
            document.querySelector('textarea').setAttribute('placeholder', "Deine Nachricht");
            document.querySelector('input[name="subject"]').setAttribute('placeholder', "Betreff");

            // Footer
            document.querySelector("footer ul li:nth-child(1) a span").innerText = "Twitter";
            document.querySelector("footer ul li:nth-child(2) a span").innerText = "LinkedIn";
            document.querySelector("footer ul li:nth-child(3) a span").innerText = "Instagram";
            document.querySelector("footer ul li:nth-child(4) a span").innerText = "GitHub";
            document.querySelector("footer ul li:nth-child(5) a span").innerText = "E-Mail";
            document.querySelector("footer .copyright li:nth-child(1)").innerText = "&copy; Shania Priscilla Kim Sulit.";
            document.querySelector("footer .copyright li:nth-child(2)").innerText = "HTML5 UP";
        }
    }
});
