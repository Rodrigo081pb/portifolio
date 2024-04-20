document.addEventListener('DOMContentLoaded', function () {
  var menuLinks = document.querySelectorAll('.link-menu');

  menuLinks.forEach(function (link) {
    var clickCount = 0; // Inicializa o contador de cliques

    link.addEventListener('click', function (event) {
      event.preventDefault();

      clickCount++; // Incrementa o contador de cliques

      if (clickCount === 2) { // Verifica se o número de cliques é igual a 2
        var targetId = link.dataset.target;
        var targetElement = document.getElementById(targetId);

        if (targetElement.classList.contains('hidden')) {
          targetElement.classList.remove('hidden');
          clickCount = 0; // Reinicia o contador de cliques se o elemento estava oculto
        } else {
          targetElement.classList.add('fade-out'); // Adiciona a classe de fade-out
          targetElement.classList.add('hidden'); // Oculta o elemento imediatamente
          clickCount = 0; // Reinicia o contador de cliques se o elemento estava visível
        }
      } else {
        // Se não foi clicado duas vezes, limpa o contador de cliques após um curto atraso
        setTimeout(function () {
          clickCount = 0;
        }, 300); // Tempo de atraso em milissegundos (ajuste conforme necessário)
      }
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var menuLinks = document.querySelectorAll('.link-menu');

  menuLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      var targetId = link.dataset.target;
      var targetElement = document.getElementById(targetId);

      // Verifica se o elemento alvo está oculto e o exibe, caso contrário, o oculta
      if (targetElement.classList.contains('hidden')) {
        targetElement.classList.remove('hidden');
      } else {
        targetElement.classList.add('hidden');
      }
    });
  });

  // Event listener para o botão de abrir o menu lateral
  document.getElementById('btn-abrir-menu').addEventListener('click', abrirMenu);

  // Event listener para fechar o menu ao clicar em um link do menu lateral
  document.querySelectorAll('.menu-lateral ul li a').forEach(link => {
    link.addEventListener('click', fecharMenu);
  });
});

// Função para abrir o menu lateral
function abrirMenu() {
  document.querySelector('.menu-lateral').style.right = '0';
}

// Função para fechar o menu lateral
function fecharMenu() {
  document.querySelector('.menu-lateral').style.right = '-250px';
}
