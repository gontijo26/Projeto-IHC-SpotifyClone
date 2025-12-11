# Clone Spotify IHC - Instruções de Uso

## 🔧 Correções Implementadas

### 1. **Banco de Dados Corrigido**
- Adicionado array `users` no `db.json` para armazenar usuários cadastrados
- Mantidos os dados de `artists` para funcionalidade de busca

### 2. **Validações Aprimoradas**
- Validação de e-mail com regex
- Validação de senha (mínimo 6 caracteres)
- Validação de nome (mínimo 3 caracteres)
- Mensagens de erro mais claras e específicas

### 3. **Proteção de Autenticação**
- Criado arquivo `auth-check.js` que protege o `index.html`
- Usuários não autenticados são redirecionados para a página de login
- Sistema de logout implementado

### 4. **Melhorias na Interface**
- Exibição do nome do usuário logado no header
- Botão de "Sair" funcional
- Mensagens de erro e sucesso mais informativas

## 🚀 Como Executar o Projeto

### Passo 1: Instalar Dependências
Abra o terminal na pasta do projeto e execute:

```bash
npm install
```

### Passo 2: Iniciar o Servidor JSON
Execute o comando:

```bash
npm start
```

Ou:

```bash
npm run server
```

O servidor será iniciado em `http://localhost:3000`

### Passo 3: Abrir o Projeto
Abra o arquivo `login.html` no navegador ou use uma extensão como **Live Server** no VS Code.

**IMPORTANTE:** Certifique-se de que o json-server está rodando antes de tentar fazer login ou cadastro!

## 📝 Fluxo de Uso

1. **Cadastro:**
   - Acesse `signup.html`
   - Preencha todos os campos (nome, e-mail, senha, confirmar senha)
   - Clique em "Criar conta"
   - Você será redirecionado para a página de login

2. **Login:**
   - Acesse `login.html`
   - Informe e-mail e senha cadastrados
   - Clique em "Entrar"
   - Você será redirecionado para a página principal

3. **Página Principal:**
   - Após o login, você verá seu nome no header
   - Pode navegar normalmente pelo site
   - Clique em "Sair" para fazer logout

## 🔍 Testando o Sistema

### Teste 1: Cadastro de Novo Usuário
1. Vá para `signup.html`
2. Preencha:
   - Nome: João Silva
   - E-mail: joao@teste.com
   - Senha: 123456
   - Confirmar senha: 123456
3. Clique em "Criar conta"

### Teste 2: Login
1. Vá para `login.html`
2. Informe:
   - E-mail: joao@teste.com
   - Senha: 123456
3. Clique em "Entrar"

### Teste 3: Proteção de Rota
1. Tente acessar `index.html` diretamente sem estar logado
2. Você será redirecionado automaticamente para `login.html`

## ⚠️ Problemas Comuns

### Erro: "Erro de conexão com o servidor"
**Solução:** Verifique se o json-server está rodando com `npm start`

### Erro: "Cannot find module 'json-server'"
**Solução:** Execute `npm install` para instalar as dependências

### Página em branco ao acessar index.html
**Solução:** Verifique se você está logado. Se não, faça login primeiro.

## 📂 Estrutura de Arquivos

```
Clone Spotify IHC/
├── api-artists/
│   ├── db.json          # Banco de dados (users + artists)
│   └── artists.json     # Dados originais dos artistas
├── src/                 # Arquivos de estilo e assets
├── auth.js              # Lógica de login e cadastro
├── auth-check.js        # Proteção de autenticação (NOVO)
├── auth.css             # Estilos das páginas de auth
├── login.html           # Página de login
├── signup.html          # Página de cadastro
├── index.html           # Página principal (protegida)
├── package.json         # Configuração do projeto (NOVO)
└── INSTRUCOES.md        # Este arquivo (NOVO)
```

## 🎯 Próximos Passos (Melhorias Futuras)

- Implementar criptografia de senha (bcrypt)
- Adicionar recuperação de senha
- Implementar tokens JWT para autenticação mais segura
- Adicionar validação de força de senha
- Implementar limite de tentativas de login
- Adicionar foto de perfil do usuário

## 💡 Dicas

- Use o DevTools do navegador (F12) para ver mensagens de erro no console
- Verifique a aba "Application > Local Storage" para ver os dados salvos
- O arquivo `db.json` será atualizado automaticamente quando você criar novos usuários
