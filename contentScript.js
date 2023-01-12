function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

waitForElm('[title="Trends"]').then((elm) => {  // just wait for one of the elements to load
    container = document.getElementById("guide-renderer")
    shorts = container.querySelector('[title="Shorts"]');
    trends = container.querySelector('[title="Trends"]');
    shorts.parentElement.replaceChild(trends, shorts);
});
