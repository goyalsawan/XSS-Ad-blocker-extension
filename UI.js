window.onload = function() {
    function update() {
        var XSS_blocker = chrome.extension.getBackgroundPage().XSS_blocker;
        document.getElementById('XSS_toggle').value = XSS_blocker ? 'Disable' : 'Enable';
        var Ad_blocker = chrome.extension.getBackgroundPage().Ad_blocker;
        document.getElementById('Ad_toggle').value = Ad_blocker ? 'Disable' : 'Enable';
    }
    update();
    document.getElementById('XSS_toggle').onclick = function() {
        var background_script = chrome.extension.getBackgroundPage();
        background_script.XSS_blocker = !background_script.XSS_blocker;
        update();
    };
    document.getElementById('Ad_toggle').onclick = function() {
        var background_script = chrome.extension.getBackgroundPage();
        background_script.Ad_blocker = !background_script.Ad_blocker;
        update();
    };
    update();
}
