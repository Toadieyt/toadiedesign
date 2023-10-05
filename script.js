const eng = document.getElementById('eng');
const pl = document.getElementById('pl');
const title = document.querySelector('.title');
const intr = document.querySelector('.introduce_web');

pl.classList.add('non-active');

pl.addEventListener('click', () => {
    title.innerHTML = 'Witaj na naszej stronie!';
    intr.innerHTML = 'Strona internetowa stworzona z myślą o 8-klasistach. Umożliwia naukę materiału niezbędnego do napisania rgzaminu 8-klasisty na wysokim poziomie poprzez grę typu "Milionerzy" oraz wiele materiałów do nauki.';
    pl.classList.add('non-active');
    eng.classList.remove('non-active');
});

eng.addEventListener('click', () => {
    title.innerHTML = 'Welcome to our website!';
    intr.innerHTML = 'A website created for 8th graders from Poland. It allows you to learn the material necessary to write the 8th grade exam at a high level through a game like "Millionaires" and many learning materials.';
    eng.classList.add('non-active');
    pl.classList.remove('non-active');
});

const btn = document.querySelector('.btn');
const portfolio = document.querySelector('.portfolio');

btn.addEventListener('click', () => {
    portfolio.classList.remove('non-active');
    title.style = "margin-top: 300px;"
});

const btn_x = document.querySelector('.btn_x');

btn_x.addEventListener('click', () => {
    portfolio.classList.add('non-active');
    title.style = "margin-top: 0;"
});

//button

const RANDOM = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const PARTICLES = document.querySelectorAll('.particle');
PARTICLES.forEach(P => {
  P.setAttribute('style', `
		--x: ${RANDOM(20, 80)};
		--y: ${RANDOM(20, 80)};
		--duration: ${RANDOM(6, 20)};
		--delay: ${RANDOM(1, 10)};
		--alpha: ${RANDOM(40, 90) / 100};
		--origin-x: ${Math.random() > 0.5 ? RANDOM(300, 800) * -1 : RANDOM(300, 800)}%;
		--origin-y: ${Math.random() > 0.5 ? RANDOM(300, 800) * -1 : RANDOM(300, 800)}%;
		--size: ${RANDOM(40, 90) / 100};
	`);
});