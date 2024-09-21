document.addEventListener("DOMContentLoaded", function() {
    const correctPassword = "sevim";
    let passwordInput = document.getElementById("passwordInput");
    let submitButton = document.getElementById("submitPassword");
    let errorMessage = document.getElementById("errorMessage");
    let passwordScreen = document.getElementById("passwordScreen");
    let contentScreen = document.getElementById("contentScreen");
    let progressBar = document.querySelector(".progress");
    let percentText = document.getElementById("percent");
    let wordsScreen = document.getElementById("wordsScreen");
    let wordsElement = document.getElementById("words");
    let letterScreen = document.getElementById("letterScreen");
    let letterContent = document.getElementById("letterContent");
    let saveLetterButton = document.getElementById("saveLetter");
    let finalScreen = document.getElementById("finalScreen");
    let progress = 0;

    // Parola Kontrolü
    submitButton.addEventListener("click", function() {
        if (passwordInput.value.toLowerCase() === correctPassword) {
            passwordScreen.style.display = "none";
            contentScreen.style.display = "block";
            startProgress();
        } else {
            errorMessage.textContent = "Yanlış cevap! Lütfen tekrar dene.";
        }
    });

    // Yüzde Animasyonu Başlatma
    function startProgress() {
        let interval = setInterval(function() {
            if (progress < 100) {
                progress++;
                progressBar.style.width = progress + "%";
                percentText.textContent = progress + "%";
            } else {
                clearInterval(interval);
                contentScreen.style.display = "none";
                startWordsTransition();
            }
        }, 100);
    }

    // Kelime Geçiş Animasyonu
    function startWordsTransition() {
        const words = [ "Aşkım","hayatım", "balım", "her şeyim", "kuşum", "her şeyim", "bir tanem", "kuzum", "çiçeğim", "meleğim", "gönlüm", "kalbim", "dünyam", "varlığım", "kalbimin efendisi", "kahverenginin en güzel tonu", "KAİNATIN EN GÜZEL KIZI", "hepside sensin" ];
        let currentIndex = 0;

        wordsScreen.style.display = "block";
        let wordInterval = setInterval(function() {
            if (currentIndex < words.length) {
                wordsElement.textContent = words[currentIndex];
                currentIndex++;
            } else {
                clearInterval(wordInterval);
                wordsScreen.style.display = "none";
                letterScreen.style.display = "flex"; // Mektup yazma ekranı gösteriliyor
            }
        }, 1000); // Her kelime 2 saniye sonra değişir
    }

    // Mektubu Kaydetme ve Son Ekrana Geçiş
    saveLetterButton.addEventListener("click", function() {
        letterScreen.style.display = "none";
        finalScreen.style.display = "flex"; // Sevgi mesajı ve animasyonlar
    });
});
