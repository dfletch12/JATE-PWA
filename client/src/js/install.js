const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the mini-infobar from appearing on mobile
    event.preventDefault();
    // Stash the event so it can be triggered later.
    window.deferredPrompt = event;
    // Update UI notify the user they can install the PWA
    butInstall.hidden = false;
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    console.log ('👍', 'butInstall-clicked');
    const promptEvent = window.deferredPrompt;
    if (!window.deferredPrompt) {
        return;
    };
    // Show the install prompt
    
    promptEvent.prompt();
    console.log('👍', 'afterPrompt');
    // Wait for the user to respond to the prompt
    const result = await promptEvent.userChoice;
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Log the result
    console.log('userChoice', result);
    // Reset the user choice
    butInstall.hidden = true;
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // Log install to analytics
    console.log('👍', 'appinstalled', event);
    window.deferredPrompt = null;
});
