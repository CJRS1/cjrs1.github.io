const home = document.getElementById('home');
const about = document.getElementById('about');
const skills = document.getElementById('skills');
const experience = document.getElementById('experience');
const contact = document.getElementById('contact');
const footer = document.getElementById('footer');
var a = 1;

const english = ()=>{

    home.querySelector('h1').textContent = "Welcome to my portfolio"
    home.querySelectorAll('.My-portfolio .menu__nav-container >a')[0].textContent = "About me";
    home.querySelectorAll('.My-portfolio .menu__nav-container >a')[1].textContent = "Technologies";
    home.querySelectorAll('.My-portfolio .menu__nav-container >a')[2].textContent = "Projects";
    home.querySelectorAll('.My-portfolio .menu__nav-container >a')[3].textContent = "Contact me";
    home.querySelector('.badge .text').textContent = "Hellow";

    about.querySelector('h3').textContent = "About me";
    about.querySelectorAll('.p__container >p')[0].innerHTML = "My name is <strong>Christian Reyes</strong>, I am Peruvian, <img src = \"../../assets/peru.svg\" alt=\"Peru\" width=\"40px\"> I am 28 years old, a Mechatronics Engineer, and a FullStack Web Developer with 2 years of experience."
    about.querySelectorAll('.p__container >p')[1].textContent = "Currently, I am pursuing a <strong>Master's degree in DevOps</strong>, where I focus on advancing strategies to enhance the security of the applications I develop. This academic program has provided me with the opportunity to explore new technologies and methodologies that efficiently optimize development processes, ensuring faster and more robust software deliveries.";
    about.querySelectorAll('.button__container >a')[0].textContent = "Download CV";
    about.querySelectorAll('.button__container >a')[1].textContent = "Contact me";
    
    skills.querySelector('.skills__container h3').textContent = "Technologies";
    
    experience.querySelector('.experiencie__container h3').textContent = "My projects";
    
    contact.querySelector('.contact__container h3').textContent = "Contact me";
    contact.querySelectorAll('.contact__container label')[0].textContent = "Name:";
    contact.querySelectorAll('.contact__container label')[1].textContent = "Lastname:";
    contact.querySelectorAll('.contact__container label')[2].textContent = "Email:";
    contact.querySelectorAll('.contact__container label')[3].textContent = "Message:";
    contact.querySelector('.contact__container button').textContent = "Send Message";
    contact.querySelectorAll('input')[0].setAttribute("placeholder", "Ex. Christian");
    contact.querySelectorAll('input')[1].setAttribute("placeholder", "Ex. Reyes");
    contact.querySelectorAll('input')[2].setAttribute("placeholder", "Ex. reyes.christian@pucp.pe");
    contact.querySelector('textarea').setAttribute("placeholder","Hi Christian, ¿how are you? I'm writing to you in case you are interested ...");
    
    footer.querySelector('.footer__container small').innerHTML = "Copyright © 2023 <a href=\"https://www.linkedin.com/in/crso/\" class=\"linkedin__container\" target=\"__blank\" rel=\"noopener noreferrer\">Christian Reyes</a>. All rights reserved";
}

const portuguese = () =>{

    home.querySelector('h1').textContent = "Bem-vindo ao meu portfólio"
    home.querySelectorAll('.My-portfolio .menu__nav-container >a')[0].textContent = "Sobre mim";
    home.querySelectorAll('.My-portfolio .menu__nav-container >a')[1].textContent = "Tecnologias";
    home.querySelectorAll('.My-portfolio .menu__nav-container >a')[2].textContent = "Projetos";
    home.querySelectorAll('.My-portfolio .menu__nav-container >a')[3].textContent = "Contata-me";
    home.querySelector('.badge .text').textContent = "Olá";

    about.querySelector('h3').textContent = "Sobre mim";
    about.querySelectorAll('.p__container >p')[0].innerHTML = "Meu nome é <strong>Christian Reyes</strong>, sou peruano <img src = \"../../assets/peru.svg\" alt=\"Peru\" width=\"40px\">. Tenho 28 anos, sou Engenheiro Mecatrônico e Desenvolvedor Web FullStack com 2 anos de experiência."
    about.querySelectorAll('.p__container >p')[1].textContent = "Atualmente, estou cursando um <strong>Mestrado em DevOps</strong>, onde me dedico a aprofundar estratégias avançadas para melhorar a segurança das aplicações que desenvolvo. Este programa acadêmico me proporcionou a oportunidade de explorar novas tecnologias e metodologias que otimizam de maneira eficiente os processos de desenvolvimento, garantindo entregas de software mais rápidas e robustas.";
    about.querySelectorAll('.button__container >a')[0].textContent = "Download CV";
    about.querySelectorAll('.button__container >a')[1].textContent = "Contate-me";
    
    skills.querySelector('.skills__container h3').textContent = "Tecnologias";
    
    experience.querySelector('.experiencie__container h3').textContent = "Meus projectos";
    
    contact.querySelector('.contact__container h3').textContent = "Contate-me";
    contact.querySelectorAll('.contact__container label')[0].textContent = "Nome:";
    contact.querySelectorAll('.contact__container label')[1].textContent = "Sobrenome:";
    contact.querySelectorAll('.contact__container label')[2].textContent = "Email:";
    contact.querySelectorAll('.contact__container label')[3].textContent = "Mensagem:";
    contact.querySelector('.contact__container button').textContent = "Enviar mensagem";
    contact.querySelectorAll('input')[0].setAttribute("placeholder", "Ex. Christian");
    contact.querySelectorAll('input')[1].setAttribute("placeholder", "Ex. Reyes");
    contact.querySelectorAll('input')[2].setAttribute("placeholder", "Ex. reyes.christian@pucp.pe");
    contact.querySelector('textarea').setAttribute("placeholder","Olá Christian, ¿como vai? Eu escrevo para você se você estiver interessado ...");
    
    footer.querySelector('.footer__container small').innerHTML = "Copyright © 2023 <a href=\"https://www.linkedin.com/in/crso/\" class=\"linkedin__container\" target=\"__blank\" rel=\"noopener noreferrer\">Christian Reyes</a>. Todos os direitos reservados";
}

const español = () =>{

    home.querySelector('h1').textContent = "¡Bienvenidos a mi Portafolio!"
    home.querySelectorAll('.My-portfolio .menu__nav-container >a')[0].textContent = "Sobre mi";
    home.querySelectorAll('.My-portfolio .menu__nav-container >a')[1].textContent = "Tecnologías";
    home.querySelectorAll('.My-portfolio .menu__nav-container >a')[2].textContent = "Proyectos";
    home.querySelectorAll('.My-portfolio .menu__nav-container >a')[3].textContent = "Contáctame";
    home.querySelector('.badge .text').textContent = "Hola";

    about.querySelector('h3').textContent = "Sobre mim";
    about.querySelectorAll('.p__container >p')[0].innerHTML = "Mi nombre es <strong>Christian Reyes</strong> con nacionalidad peruana, <img src = \"../../assets/peru.svg\" alt=\"Peru\" width=\"40px\"> tengo 27 anos. Hice un Bootcamp en TECSUP, donde desarrollé mis habilidades frontend e backend"
    about.querySelectorAll('.p__container >p')[1].textContent = "Me gusta el Desarrollo Web debido a que disfruto de estar en constante aprendizaje de forma autodidacta y me gustan las tecnologías relacionadas con internet.";
    about.querySelectorAll('.button__container >a')[0].textContent = "Descargar CV";
    about.querySelectorAll('.button__container >a')[1].textContent = "Contáctame";
    
    skills.querySelector('.skills__container h3').textContent = "Tecnologías";
    
    experience.querySelector('.experiencie__container h3').textContent = "Mis proyectos";
    
    contact.querySelector('.contact__container h3').textContent = "Contáctame";
    contact.querySelectorAll('.contact__container label')[0].textContent = "Nombre:";
    contact.querySelectorAll('.contact__container label')[1].textContent = "Apellido:";
    contact.querySelectorAll('.contact__container label')[2].textContent = "Email:";
    contact.querySelectorAll('.contact__container label')[3].textContent = "Mensaje:";
    contact.querySelector('.contact__container button').textContent = "Enviar mensaje";
    contact.querySelectorAll('input')[0].setAttribute("placeholder", "Ej. Christian");
    contact.querySelectorAll('input')[1].setAttribute("placeholder", "Ej. Reyes");
    contact.querySelectorAll('input')[2].setAttribute("placeholder", "Ej. reyes.christian@pucp.pe");
    contact.querySelector('textarea').setAttribute("placeholder","Hola Christian, ¿como estás? Te escribo por si estás interesado ...");
    
    footer.querySelector('.footer__container small').innerHTML = "Copyright © 2023 <a href=\"https://www.linkedin.com/in/crso/\" class=\"linkedin__container\" target=\"__blank\" rel=\"noopener noreferrer\">Christian Reyes</a>. Todos los derechos reservados";
}

