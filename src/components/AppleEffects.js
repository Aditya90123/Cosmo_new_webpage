import { useEffect } from "react";

export default function AppleEffects() {

  useEffect(() => {
    /* ===== CURSOR GLOW ===== */
    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    document.body.appendChild(glow);

    const move = (e) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", move);

    /* ===== MAGNETIC BUTTON ===== */
    const magnets = document.querySelectorAll(".magnetic");
    magnets.forEach(btn => {
      btn.addEventListener("mousemove", e => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
      });
      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translate(0,0)";
      });
    });

    /* ===== SCROLL STORY ===== */
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll(".story").forEach(el => observer.observe(el));

    /* ===== CLEANUP ===== */
    return () => {
      window.removeEventListener("mousemove", move);
      glow.remove();
    };
  }, []);

  return null;
}
