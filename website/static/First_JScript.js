document.addEventListener("DOMContentLoaded", function () {
  const button_special = document.getElementById("showDate");
  const output = document.getElementById("demo");
  
  button_special.addEventListener("click", function () {
    // Zeige Datum
    output.innerHTML = new Date();
    const now = new Date()
  const formatted = `${now.getDate()}.
                     ${now.getMonth()}.
                     ${now.getFullYear()} -
                     ${now.getHours()}:
                     ${now.getMinutes()}
                     :${now.getSeconds()}`
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
