/*Custom clock spirit*/

document.addEventListener("DOMContentLoaded", () => {
  const hoursEl = document.querySelector(".clock-hours");
  const minutesEl = document.querySelector(".clock-minutes");
  const metaEl = document.querySelector(".clock-meta");
  if (!hoursEl || !minutesEl || !metaEl) return;
  const TIMEZONE = "Asia/Kolkata";
  const TIMEZONE_LABEL = "IST";
  function updateClock() {
    const now = new Date();
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: TIMEZONE,
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    }).formatToParts(now);
    const hour = parts.find(p => p.type === "hour").value;
    const minute = parts.find(p => p.type === "minute").value;
    const dayPeriod = parts.find(p => p.type === "dayPeriod").value;
    hoursEl.textContent = hour;
    minutesEl.textContent = minute;
    metaEl.textContent = ` ${dayPeriod} (${TIMEZONE_LABEL})`;
  }
  updateClock();
  setInterval(updateClock, 1000);
});


document.addEventListener("DOMContentLoaded", function () {

  initBarba();
  initCursor();
  initGSAP();

});


/* =========================================
   BARBA PAGE TRANSITIONS
========================================= */

function initBarba() {

  if (typeof barba === "undefined") return;

  barba.init({
    transitions: [{
      async leave(data) {
        await gsap.to(data.current.container, {
          opacity: 0,
          y: -20,
          duration: 0.4
        });
      },
      async enter(data) {
        gsap.from(data.next.container, {
          opacity: 0,
          y: 20,
          duration: 0.4
        });
      }
    }]
  });

}


/* =========================================
   CUSTOM CURSOR
========================================= */

function initCursor() {

  const cursor = document.querySelector(".custom-cursor");
  if (!cursor) return;

  window.addEventListener("mousemove", e => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1
    });
  });

}


/* =========================================
   GSAP ANIMATIONS
========================================= */

function initGSAP() {

  gsap.from("h1", {
    y: 40,
    opacity: 0,
    duration: 0.6
  });

}
