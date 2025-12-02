document.addEventListener("DOMContentLoaded", function () {
  const button_special = document.getElementById("showDate");
  const output = document.getElementById("demo");

  button_special.addEventListener("click", function () {
    const now = new Date();

    const day     = String(now.getDate()).padStart(2, "0");
    const month   = String(now.getMonth() + 1).padStart(2, "0"); // +1 !
    const year    = now.getFullYear();
    const hours   = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    const formatted = `${day}.${month}.${year} - ${hours}:${minutes}:${seconds}`;
    output.innerHTML = formatted;

    // Button deaktivieren und Text ändern
    button_special.disabled = true;
    button_special.textContent = "Refreshing...";

    // Nach 3 Sekunden zurücksetzen
    setTimeout(() => {
      button_special.disabled = false;
      button_special.textContent = "Click me to display Date an Time";
      output.innerHTML = ""; // Optional: Ausgabe leeren
    }, 3000);
  });

  // Optional: Button initial deaktivieren und später aktivieren
  button_special.disabled = true;
  setTimeout(() => {
    button_special.disabled = false;
    button_special.textContent = "Click me to display Date an Time";
  }, 3000);
});
