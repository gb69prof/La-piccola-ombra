document.addEventListener("DOMContentLoaded", ()=>{
  document.querySelectorAll(".card").forEach(card=>{
    const img = card.querySelector("img");
    card.querySelectorAll("button").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        const mode = btn.getAttribute("data-mode");
        img.src = img.getAttribute("data-"+mode);
      });
    });
  });
});