if ('serviceWorker' in navigator) {
    console.log("service worker is supported");
    navigator.serviceWorker.register('../ServiceWorker.js')
        .then((reg) => console.log(reg))
        .catch((err) => console.log('not register: '+err));
}