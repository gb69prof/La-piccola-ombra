document.addEventListener("DOMContentLoaded", () => {
  const panel = document.getElementById("panel");
  const caption = document.getElementById("caption");
  const audio = document.getElementById("voice");
  const hint = document.querySelector(".play-hint");

  if (!panel) return;

  const togglePanel = () => {
    const isActive = panel.classList.toggle("active");

    if (isActive) {
      try {
        audio.currentTime = 0;
        audio.play();
      } catch (err) {
        console.warn("Audio non riproducibile (ancora):", err);
      }
      if (hint) {
        hint.textContent = "■ Tocca per fermare";
      }
    } else {
      try {
        audio.pause();
      } catch (err) {
        console.warn("Errore nel mettere in pausa l'audio:", err);
      }
      if (hint) {
        hint.textContent = "▶ Clicca (o tocca) per far parlare la tavola";
      }
    }
  };

  panel.addEventListener("click", togglePanel);
  panel.addEventListener("keypress", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      togglePanel();
    }
  });

  panel.setAttribute("tabindex", "0");
  panel.setAttribute("aria-label", "Tavola interattiva. Attiva per ascoltare il frammento narrato.");
});
