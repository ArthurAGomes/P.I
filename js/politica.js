document.addEventListener("DOMContentLoaded", function() {
    const cookieConsent = document.getElementById("cookie-consent");
    const acceptBtn = document.getElementById("accept-btn");
  
    // Verifica se o usuário já aceitou os cookies
    if (!localStorage.getItem("cookies_accepted")) {
      cookieConsent.style.display = "block";
    }
  
    // Quando o usuário clica em aceitar, oculta o aviso e salva o estado dos cookies
    acceptBtn.addEventListener("click", function() {
      localStorage.setItem("cookies_accepted", true);
      cookieConsent.style.display = "none";
    });
  });
  