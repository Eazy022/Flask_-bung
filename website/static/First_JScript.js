document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("showDate");
  const output = document.getElementById("demo");
  
  button.addEventListener("click", function () {
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
    button.disabled = true;
    button.textContent = "Refreshing...";

    // Nach 3 Sekunden zurücksetzen
    setTimeout(() => {
      button.disabled = false;
      button.textContent = "Click me to display Date an Time";
      output.innerHTML = ""; // Optional: Ausgabe leeren
    }, 3000);
  });

  // Optional: Button initial deaktivieren und später aktivieren
  button.disabled = true;
  setTimeout(() => {
    button.disabled = false;
    button.textContent = "Click me to display Date an Time";
  }, 3000);
});
