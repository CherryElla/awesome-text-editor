const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event
});

// Click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    window.deferredPrompt.prompt()
    window.deferredPrompt = null
    butInstall.classList.toggle('hidden', true)
    
});

// Event handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null
});
