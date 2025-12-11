const API_URL = "http://localhost:3000/users";

// helper pra mostrar mensagem
function setMessage(elementId, text, type = "error") {
  const el = document.getElementById(elementId);
  if (!el) return;
  el.textContent = text;
  el.classList.remove("error", "success");
  if (text) el.classList.add(type);
}

// validação de senha
function validatePassword(password) {
  if (password.length < 6) {
    return "A senha deve ter pelo menos 6 caracteres.";
  }
  return null;
}

// validação de email
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Por favor, insira um e-mail válido.";
  }
  return null;
}

// ----------------- SIGNUP -----------------
const signupForm = document.getElementById("signup-form");
if (signupForm) {
  signupForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("signup-name").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value;
    const passwordConfirm = document.getElementById(
      "signup-password-confirm"
    ).value;

    // Validação de campos vazios
    if (!name || !email || !password || !passwordConfirm) {
      setMessage("signup-message", "Preencha todos os campos.");
      return;
    }

    // Validação de nome
    if (name.length < 3) {
      setMessage("signup-message", "O nome deve ter pelo menos 3 caracteres.");
      return;
    }

    // Validação de email
    const emailError = validateEmail(email);
    if (emailError) {
      setMessage("signup-message", emailError);
      return;
    }

    // Validação de senha
    const passwordError = validatePassword(password);
    if (passwordError) {
      setMessage("signup-message", passwordError);
      return;
    }

    // Verificação de senhas iguais
    if (password !== passwordConfirm) {
      setMessage("signup-message", "As senhas não conferem.");
      return;
    }

    try {
      // verifica se já existe usuário com esse e-mail
      const resCheck = await fetch(`${API_URL}?email=${encodeURIComponent(email)}`);
      
      if (!resCheck.ok) {
        setMessage("signup-message", "Erro ao conectar com o servidor. Verifique se o json-server está rodando.");
        return;
      }

      const existingUsers = await resCheck.json();

      if (existingUsers.length > 0) {
        setMessage("signup-message", "Já existe uma conta com esse e-mail.");
        return;
      }

      // cria usuário
      const resCreate = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password })
      });

      if (!resCreate.ok) {
        setMessage("signup-message", "Erro ao criar conta. Tente novamente.");
        return;
      }

      setMessage(
        "signup-message",
        "Conta criada com sucesso! Redirecionando para o login...",
        "success"
      );

      setTimeout(() => {
        window.location.href = "login.html";
      }, 1500);
    } catch (error) {
      console.error(error);
      setMessage("signup-message", "Erro de conexão com o servidor. Verifique se o json-server está rodando na porta 3000.");
    }
  });
}

// ----------------- LOGIN -----------------
const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value;

    // Validação de campos vazios
    if (!email || !password) {
      setMessage("login-message", "Informe e-mail e senha.");
      return;
    }

    // Validação de email
    const emailError = validateEmail(email);
    if (emailError) {
      setMessage("login-message", emailError);
      return;
    }

    try {
      const res = await fetch(
        `${API_URL}?email=${encodeURIComponent(email)}&password=${encodeURIComponent(
          password
        )}`
      );

      if (!res.ok) {
        setMessage("login-message", "Erro ao conectar com o servidor. Verifique se o json-server está rodando.");
        return;
      }

      const users = await res.json();

      if (users.length === 0) {
        setMessage("login-message", "E-mail ou senha incorretos.");
        return;
      }

      // guarda usuário logado
      localStorage.setItem("user", JSON.stringify(users[0]));
      localStorage.setItem("isLoggedIn", "true");

      setMessage("login-message", "Login realizado! Abrindo o app...", "success");

      setTimeout(() => {
        window.location.href = "index.html";
      }, 1200);
    } catch (error) {
      console.error(error);
      setMessage("login-message", "Erro de conexão com o servidor. Verifique se o json-server está rodando na porta 3000.");
    }
  });
}
