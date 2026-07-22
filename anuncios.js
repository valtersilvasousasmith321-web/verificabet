function carregarAnuncioAdsterra() {
    const container = document.getElementById('espaco-publicidade');
    if (!container) return;

    window.atOptions = {
        'key' : '0229bc22de08364e2d35eb76919076d6',
        'format' : 'iframe',
        'height' : 60,
        'width' : 468,
        'params' : {}
    };

    const scriptGatilho = document.createElement('script');
    scriptGatilho.type = 'text/javascript';
    scriptGatilho.src = '//://highperformanceformat.com';

    container.appendChild(scriptGatilho);
}

window.addEventListener('DOMContentLoaded', carregarAnuncioAdsterra);
