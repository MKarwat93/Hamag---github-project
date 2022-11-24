const menuBtn = document.querySelector('.menu-btn');
const burgerMenu = document.querySelector('.burger-menu');
const menuNavLink = document.querySelectorAll('.menu-nav-link')
const nameInput = document.querySelector('.name-input');
const phoneInput = document.querySelector('.phone-input');
const emailInput = document.querySelector('.email-input');
const messageInput = document.querySelector('.message-input');
const msgSend = document.querySelector('.msg-send');
const notValid = document.querySelectorAll('.not-valid');

// burger menu
menuBtn.addEventListener('click', () => {
	menuBtn.classList.toggle('open'), burgerMenu.classList.toggle('opened');
});

menuNavLink.forEach(n => n.addEventListener('click', () => {
	menuBtn.classList.toggle('open'), burgerMenu.classList.toggle('opened');}))


const validateForm = () => {

	clearForm();
	let invalidForm = false;

	if(nameInput.value.length < 1) {
		notValid[0].innerText = "To pole jest wymagane";
		nameInput.classList.add('not-valid-border');
		invalidForm = true;
	}

	if(!validEmail(emailInput.value)) {
		notValid[1].innerText = "Niepoprawny adres e-mail";
		emailInput.classList.add('not-valid-border')
		invalidForm = true;
	}

	if(messageInput.value.length < 1) {
		notValid[2].innerText = "To pole jest wymagne";
		messageInput.classList.add('not-valid-border')
		invalidForm = true;
	}

	if(!invalidForm) {
		msgSend.innerText = "Wiadomość wysłana!"
	}
	
}

const clearForm = () => {
	for(let i = 0; i < notValid.length; i++) {
		notValid[i].innerText = '';
	}
	msgSend.innerText = '';
	nameInput.classList.remove('not-valid-border');
	emailInput.classList.remove('not-valid-border');
	messageInput.classList.remove('not-valid-border');
}

const validEmail = (emailInput) => {
	let pattern = /\S+@\S+\.\S+/;
	return pattern.test(emailInput);
}