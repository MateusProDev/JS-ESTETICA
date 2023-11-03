// Seu arquivo script.js
const barbearia = document.querySelector('.barbearia');
const navLinks = document.querySelector('.nav-links');

barbearia.addEventListener('click', () => {
    barbearia.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Função para verificar se um elemento está visível no viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Função para adicionar animações quando um elemento entra no viewport
function animateOnScroll() {
    const elementsToAnimate = document.querySelectorAll('.animate-slide-in');

    elementsToAnimate.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('active');
        }
    });
}

// Adicionar um ouvinte de evento de rolagem para ativar as animações ao rolar
window.addEventListener('scroll', animateOnScroll);

const boxes = document.querySelectorAll('.box-carro');

boxes.forEach(box => {
  const imagemCarro = box.querySelector('.imagem-carro');
  const textoOculto = box.querySelector('.texto-oculto');
  let ImagemVisivel = true;

  box.addEventListener('click', () => {
    if (ImagemVisivel) {
      imagemCarro.style.display = 'none';
      textoOculto.style.display = 'block';
      ImagemVisivel = false;
    } else {
      imagemCarro.style.display = 'block';
      textoOculto.style.display = 'none';
      ImagemVisivel = true;
    }
  });
});







