// Open and close menu bar
function toggleMenu() {
    const menu = document.getElementById('menu');
    const icon = document.getElementById('menuToggle');
    menu.classList.toggle('show');
    icon.classList.toggle('open');
}

// Switch to a tab
function switchTab(tabId) {
  document.querySelectorAll(".main").forEach(el => el.classList.add("hidden"));
  document.getElementById(tabId).classList.remove("hidden");
}

// Switch to a tab and close menu
function switchTabToggleMenu(tabId) {
    document.querySelectorAll(".main").forEach(el => el.classList.add("hidden"));
    document.getElementById(tabId).classList.remove("hidden");
    const menu = document.getElementById('menu');
    const icon = document.getElementById('menuToggle');
    menu.classList.toggle('show');
    icon.classList.toggle('open');
}

// At first back, return to home page
let preventExit = true;

function handleBackPress() {
    if (preventExit) {
        switchTab("homePage")
        // Push state again to intercept further
        history.pushState(null, null, location.href);
    }
}

window.addEventListener("load", () => {
    history.pushState(null, null, location.href); // Push dummy state
    window.addEventListener("popstate", (event) => {
        handleBackPress();
    });
});

// Map page pointers
document.querySelectorAll(".panel-list details").forEach(panel => {
    panel.addEventListener("toggle", () => {
        const location = panel.dataset.location;
        const pin = document.getElementById("pin-" + location);

        if (panel.open) {
        pin.style.display = "block";
        } else {
        pin.style.display = "none";
        }
    });
});

// At load, connect buttons to functions
window.onload = () => {
    document.getElementById('BtHome').onclick = () => switchTabToggleMenu("homePage");
    document.getElementById('BtMap').onclick = () => switchTabToggleMenu("mapPage");
    document.getElementById("BtChars").onclick = () => switchTabToggleMenu("charPage");
    document.getElementById("BtPeek").onclick = () => switchTabToggleMenu("peekPage");

    document.getElementById('MapCell').onclick = () => switchTab("mapPage");
    document.getElementById('CharCell').onclick = () => switchTab("charPage");
    document.getElementById("PeekCell").onclick = () => switchTab("peekPage");
};