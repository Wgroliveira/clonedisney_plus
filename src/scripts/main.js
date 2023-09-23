document.addEventListener('DOMContentLoaded', function(){
const tabButtons = document.querySelectorAll('.shows__tabs__button');

const heroSection = document.querySelector('.hero');
const alturaHero = heroSection.clientHeight;

window.addEventListener('scroll', function() {
    const posicaoAtual = window.scrollY;

    if (posicaoAtual < alturaHero) {
        ocultaElementosDoHeader();
    } else {
        exibeElementosDoHeader();
    }
})

//Programação das abas de atrações
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab-button');
        const tabContent = document.querySelectorAll('.shows__list');
        tabContent.forEach(tab => {
            tab.classList.remove('shows__list--is--active');
        });

        const activeTab = document.querySelector(`[data-tab-id="${tabId}"]`);
        activeTab.classList.add('shows__list--is--active');
        tabButtons.forEach(btn => {
            btn.classList.remove('shows__tabs__button--is--active');
        });
        button.classList.add('shows__tabs__button--is--active');
    });
});

});

//Seção FAQ, acordion
    
document.addEventListener('DOMContentLoaded', function() {
const questions = document.querySelectorAll('.faq__questions__item');

questions.forEach(question => {
    const questionTitle = question.querySelector('.faq__questions__item__question');
    const answer = question.querySelector('.faq__questions__item__answer');

    questionTitle.addEventListener('click', () => {
        question.classList.toggle('faq__questions__item--is-open');

        answer.classList.toggle('hidden');
    });
});
});

function ocultaElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}