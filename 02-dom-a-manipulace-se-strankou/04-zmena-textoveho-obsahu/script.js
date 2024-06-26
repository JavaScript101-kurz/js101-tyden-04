console.log('%c Změna textového obsahu ', 'background:black;color:yellow;');

// změna textového obsahu
// mění se pouze text, neinterpretují se
// HTML značky, pokud v textu jsou
const nadpis = document.querySelector('h1');
nadpis.textContent = 'Můj super nadpis';


// změna HTML obsahu
// v innerHTML se interpretují i HTML značky
const odstavec = document.querySelector('p');
odstavec.innerHTML = 'Tady je můj <strong>skvělý tučný</strong> text.';


const sekce = document.querySelector('section');
sekce.innerHTML = `
	<ul>
		<li>Mléko</li>
		<li>Máslo</li>
		<li>Rohlíky</li>
		<li>Zmrzlina</li>
	</ul>
`;


// pozor na škodící uživatele
// pokud něco, co zadal uživatel, vkládáme
// přímo do innerHTML, mohl by nám uživatel
// do obsahu vložit potenciálně škodlivý kód,
// který by se v innerHTML "spustil"

const obsah = prompt('Zadej text');
odstavec.innerHTML = obsah;