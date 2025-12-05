Um projeto que é uma réplica da página inicial do Spotify, construído usando HTML, CSS e JavaScript. O objetivo do projeto é imitar o layout, o design e alguns recursos interativos da página inicial do Spotify. Ele envolve a estruturação do conteúdo com HTML, a estilização com CSS para corresponder ao design original e o uso de JavaScript para adicionar elementos dinâmicos e interações, como botões e efeitos de foco.
   
Projeto Final – Interface Humano-Computador (IHC) – 2025/2
1. Identificação do Projeto
Nome do Projeto: Spotify Clone
Grupo: Desenvolvimento de Interface Inspirada no Spotify
Integrantes: Bernardo Gontijo, Guilherme Castro, Gabriel Gonçalves, Davi Pereira, Nathan Gerken
Data de Início: 07/11/2025
Data de Entrega: a definir
________________________________________
2. Tema e Público-Alvo
Domínio de Aplicação:
Entretenimento / Streaming de Música
Descrição do Público-Alvo:
O público-alvo são usuários que utilizam plataformas de streaming musical para buscar artistas, navegar em playlists e consumir conteúdo musical. São pessoas que valorizam uma interface intuitiva, moderna e que ofereça acesso rápido à informação.
Justificativa da Escolha:
Escolhemos este tema por sua forte presença no cotidiano dos usuários e por permitir explorar conceitos fundamentais de IHC, como design responsivo, usabilidade, acessibilidade e integração entre diferentes camadas de front-end. Além disso, uma interface inspirada no Spotify oferece um excelente cenário para aplicar práticas reais de UX.
________________________________________
3. Pesquisa e Análise de Requisitos
Método de Pesquisa Utilizado:
•	Análise de softwares similares (Spotify, Deezer, Apple Music)
•	Testes exploratórios de navegação
•	Observação de padrões consolidados de UI/UX em streaming
Principais Necessidades Identificadas:
•	Interface clara e organizada
•	Busca rápida e eficiente de artistas
•	Feedback visual imediato
•	Imagens de alta qualidade e informações simples e diretas
Expectativas do Usuário:
•	Encontrar artistas com agilidade
•	Navegar sem dificuldades
•	Interface familiar e intuitiva
•	Resposta rápida da aplicação
Referências Utilizadas:
•	Interface do Spotify Web
•	Documentação de UI Patterns
•	Material Design Guidelines
•	Princípios de usabilidade de Nielsen
________________________________________
4. Definição de Usuários e Atividades
Personas Criadas:
Persona 1 – João, 22 anos, Estudante
Busca artistas rapidamente, usa streaming diariamente e valoriza velocidade.
Persona 2 – Carla, 31 anos, Designer
Prioriza estética e organização visual; prefere interfaces limpas.
Persona 3 – Lucas, 40 anos, Profissional multitarefa
Precisa encontrar conteúdo sem distrações e sem excesso de elementos.
________________________________________
5. Wireframes e Validação UX
Ferramenta Utilizada para Wireframes:
Figma
Screenshots ou Links dos Wireframes:
Desktop — Home
--------------------------------------------------------------
| NAV LATERAL (fixa) | CONTEÚDO PRINCIPAL |
| ----------------------------- | --------------------------- |
| • Logo | [ Header ] |
| • Início | -------------------------- |
| • Buscar | [ Barra de busca — 32px ] |
| • Sua Biblioteca | -------------------------- |
| | |
| • Playlists | Seção: "Destaques" |
| - Chill Mix | ------------------------ |
| - Treinos | | Card | Card | Card | |
| - Recentes | ------------------------ |
| | |
--------------------------------------------------------------
Walkthrough com base nas personas criadas.
Simulação de navegação e identificação de pontos de fricção.
Feedback Recebido:
•	Necessidade de destacar melhor a barra de busca
•	Melhorar contraste de alguns elementos
•	Reorganizar espaços em resoluções menores
Ajustes Realizados:
•	Aumento da ênfase visual da barra de busca
•	Aplicação de paleta com maior contraste
•	Ajustes de responsividade via media queries
________________________________________
6. Implementação Técnica
Tecnologias Utilizadas:
HTML, CSS, JavaScript
Design Responsivo:
Sim
Link do Protótipo Funcional:
Abrir pelo index.html na pasta do projeto, no final desse doc deixei uma maneira de ligar o servidor e conseguir acessar a busca de artistas pela barra de pesquisa!!
Principais Funcionalidades Implementadas:
•	Busca dinâmica de artistas com integração ao JSON Server
•	Renderização de cards de artistas com imagem e informações
•	Exibição condicional de playlists e resultados
•	Interface inspirada no padrão visual do Spotify
________________________________________
7. Integração e Testes
Integração HTML/CSS/JS:
A estrutura do projeto foi organizada em três camadas:
•	HTML: estrutura base da interface
•	CSS: estilização dividida em reset, variáveis, estilos gerais e media queries
•	JS: lógica da busca, manipulação do DOM e integração via fetch() com o servidor JSON
A organização permitiu modularidade e manutenção facilitada.
Testes de Usabilidade:
Métodos aplicados:
•	Testes exploratórios simulando cenários de uso das personas
•	Avaliação de clareza visual e tempo de resposta
Resultados:
•	Interface considerada simples e intuitiva
•	Busca eficiente após ajustes no código
•	Necessidade inicial de corrigir comportamento quando nenhum artista era encontrado
Testes de Acessibilidade:
Ferramentas utilizadas:
•	Lighthouse
•	Avaliação manual de contraste e textos alternativos
Resultados e ajustes:
•	Inclusão de alt nas imagens
•	Correções de contraste
•	Melhoria da navegação por teclado
________________________________________
8. Documentação Final
Resumo das Decisões de Design:
Optamos por um layout inspirado no Spotify pela familiaridade do modelo, priorizando uma navegação fluida e visual moderno. A paleta escura favorece contraste e destaca elementos principais. A busca foi definida como elemento central da experiência.
Dificuldades Encontradas e Soluções:
•	Erros de integração com JSON Server → resolvidos organizando pastas e ajustando caminhos.
•	Busca exibindo sempre o mesmo artista → corrigido reestruturando a lógica do search.js.
•	Responsividade inicial insuficiente → corrigida com media queries adicionais.
Considerações Finais:
O projeto proporcionou domínio prático sobre processos de UX, prototipação, implementação e integração front-end. A experiência reforçou a importância de testes, validação constante e organização modular de código.
Declaração de Autoria:
Declaramos que este projeto foi desenvolvido integralmente pelo grupo — Bernardo Gontijo, Guilherme Castro, Gabriel Gonçalves e Davi Brito — sem plágio ou uso indevido de conteúdo de terceiros.

Como abrir o projeto no seu computador 
Professora,
O nosso projeto só mostra os artistas quando um servidor local está ligado.
Quando o terminal é fechado, esse servidor desliga, e por isso a busca deixa de funcionar.
Para abrir o projeto corretamente no seu computador, basta seguir estes passos:
________________________________________
1. Instalar o JSON Server (uma única vez)
É preciso ter o Node.js instalado. Depois, no terminal, digite:
npm install -g json-server
________________________________________
2. Abrir a pasta do projeto no VS Code
A senhora deve abrir a pasta que contém:
•	index.html
•	api-artists/
•	src/
•	script.js
•	search.js
________________________________________
3. Ligar o servidor dos artistas
No VS Code, abrir um terminal e digitar:
json-server --watch ./api-artists/artists.json --port 3000
Deixe esse terminal aberto.
Se fechar, o site para de mostrar os artistas.
________________________________________
4. Abrir o site
No index.html, clicar com o botão direito e escolher:
Open with Live Server
O site vai abrir em:
http://localhost:5500
