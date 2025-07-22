function switchTab(tabId) {
  document.querySelectorAll(".main").forEach(el => el.classList.add("hidden"));
  document.getElementById(tabId).classList.remove("hidden");
}

document.querySelectorAll("area").forEach(area => {
  area.addEventListener("mouseenter", () => {
    const tooltip = document.getElementById("tooltip");
    tooltip.innerHTML = area.dataset.html;
    tooltip.classList.remove("hidden");
  });

  area.addEventListener("mousemove", e => {
    const tooltip = document.getElementById("tooltip");
    tooltip.style.left = `${e.pageX-60}px`;
    tooltip.style.top = `${e.pageY-50}px`;
  });

  area.addEventListener("mouseleave", () => {
    document.getElementById("tooltip").classList.add("hidden");
  });
});

window.onload = () => {
    document.getElementById('BtHome').onclick = () => switchTab("homePage");
    document.getElementById('BtMap').onclick = () => switchTab("mapPage");
    document.getElementById("BtChars").onclick = () => switchTab("charPage");
    document.getElementById("BtPeek").onclick = () => switchTab("peekPage");

    document.getElementById('MapCell').onclick = () => switchTab("mapPage");
    document.getElementById('CharCell').onclick = () => switchTab("charPage");
    document.getElementById("PeekCell").onclick = () => switchTab("peekPage");
};
