const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault()
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false)
});

// Click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const event = window.deferredPrompt
    if (event){
        event.prompt()
        window.deferredPrompt = null
        butInstall.classList.toggle('hidden', true)
    } else {
    return }
});

// Event handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null
});
