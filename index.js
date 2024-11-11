const bodyEl = document.querySelector("body");
const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const date = new Date();

monthNameEl.innerText = date.toLocaleString("en", {
    month: "long",
});

dayNameEl.innerText = date.toLocaleString("en", {
    weekday: "long",
});

dayNumEl.innerText = date.getDate();

yearEl.innerText = date.getFullYear();

// Optional: Mouse move effect logic
bodyEl.style.position = 'relative';

bodyEl.addEventListener("mousemove", (event) => {
    const xPos = event.offsetX;
    const yPos = event.offsetY;

    const spanEl = document.createElement("span");
    spanEl.style.position = "absolute";
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    spanEl.style.width = "10px";
    spanEl.style.height = "10px";
    spanEl.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    spanEl.style.borderRadius = "50%";
    spanEl.style.pointerEvents = "none"; // Avoid interference with other elements

    bodyEl.appendChild(spanEl);

    setTimeout(() => {
        spanEl.remove(); // Remove the span after some time to prevent overflow
    }, 1000); // Remove the span after 1 second
});
