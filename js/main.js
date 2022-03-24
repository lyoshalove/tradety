const questionItems = document.querySelectorAll('.questions__content-item');
const questionTexts = document.querySelectorAll('.question__item-text');
const anchors = document.querySelectorAll('a[href*="#"]');
const selectLang = document.querySelector('.select__lang-current');
const selectList = document.querySelector('.select-list');
const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger__menu');
const body = document.querySelector('body');
const burgerMenuList = document.querySelector('.burger__menu-list');

burgerMenuList.addEventListener('click', (e) => {
	const target = e.target;

	if (target && target.classList.contains('burger__menu-item') || target && target.classList.contains('burger__menu-link')) {
		burgerMenu.classList.remove('active');
		burger.classList.remove('active');
		body.classList.remove('block');
	}
});

burger.addEventListener('click', () => {
	burger.classList.toggle('active');
	body.classList.toggle('block');
	burgerMenu.classList.toggle('active');
});

selectLang.addEventListener('click', () => {
	selectLang.classList.toggle('active');
});

selectList.addEventListener('click', (e) => {
	const target = e.target;

	if (target && target.classList.contains('select-link')) {
		document.querySelector('.select__lang-current .select-name').textContent = target.textContent;
	}
});

questionItems.forEach(item => {
	item.addEventListener('click', () => {
		questionTexts.forEach(text => {
			if (item.dataset.number == text.dataset.num) {
				item.classList.toggle('active');
				text.classList.toggle('active');
			}
		});
	});
});

for (let anchor of anchors) {
	anchor.addEventListener('click', (e) => {
		e.preventDefault();

		const blockID = anchor.getAttribute('href').substr(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	});
}