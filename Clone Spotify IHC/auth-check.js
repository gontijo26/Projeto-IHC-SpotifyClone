// Verificação de autenticação
(function() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const user = localStorage.getItem("user");

  // Se não estiver logado, redireciona para login
  if (!isLoggedIn || isLoggedIn !== "true" || !user) {
    window.location.href = "login.html";
  }
})();

// Função para logout
function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("user");
  window.location.href = "login.html";
}

// Exibir nome do usuário se estiver logado
function displayUserName() {
  const user = localStorage.getItem("user");
  if (user) {
    try {
      const userData = JSON.parse(user);
      const userNameElement = document.getElementById("user-name");
      if (userNameElement && userData.name) {
        userNameElement.textContent = userData.name;
      }
    } catch (e) {
      console.error("Erro ao parsear dados do usuário:", e);
    }
  }
}

// Executar quando o DOM estiver pronto
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", displayUserName);
} else {
  displayUserName();
}
