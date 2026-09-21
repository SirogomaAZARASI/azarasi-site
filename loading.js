document.addEventListener('DOMContentLoaded', function() {
    // ローディング用のHTMLを自動生成
    const loaderHTML = `
        <div class="loading-container" id="loadingScreen">
            <div class="loader">
                <div class="dot"></div><div class="dot"></div><div class="dot"></div>
                <div class="dot"></div><div class="dot"></div><div class="dot"></div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('afterbegin', loaderHTML);
});

window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    if(loadingScreen) {
        loadingScreen.style.transition = 'opacity 0.5s ease';
        loadingScreen.style.opacity = '0';
        setTimeout(function() { loadingScreen.style.display = 'none'; }, 500);
    }
});