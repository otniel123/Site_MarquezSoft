function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});

function sendEmail() {
    const email = "marquezsoftware.business@gmail.com"; // Substitua pelo e-mail da sua empresa
    const subject = "Contato sobre serviços"; // Substitua pelo assunto desejado
    const body = "Olá, gostaria de mais informações sobre seus serviços."; // Substitua pelo corpo do e-mail desejado

    // Monta o link mailto
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Redireciona para o mailto
    window.location.href = mailtoLink;
}

document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        // Fecha outras perguntas abertas
        document.querySelectorAll('.faq-item').forEach(i => {
            if (i !== item) i.classList.remove('open');
        });

        // Alterna a pergunta clicada
        item.classList.toggle('open');
    });
});




