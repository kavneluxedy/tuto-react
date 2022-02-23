import React from 'react';
import img1 from '../src/assets/logo_react.svg'
import img2 from '../src/assets/angular.png'
import img3 from '../src/assets/vuejs.jpg'
import MyCard from './component/MyCard';
import AddCard from './component/AddCard';
import 'bootstrap/dist/css/bootstrap.min.css';


export function App() {

	const cardsInit = [
		{
		title: "REACT JS",
		img: img1,
		text: "React (aussi appelé React.js ou ReactJS) est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d'application web monopage, via la création de composants dépendant d'un état et générant une page (ou portion) HTML à chaque changement d'état."
    },
	{
		title: "ANGULAR JS",
		img: img2,
		text: "AngularJS est un framework JavaScript libre et open source développé par Google. Il permet de développer des pages web. AngularJS est fondé sur l'idée que la programmation déclarative doit être utilisée pour construire les interfaces utilisateurs et les composants logiciels de câblage, tandis que la programmation impérative excelle pour exprimer la logique métier"
	},
	{
		title: "VUE JS",
		img: img3,
		text: "Vue.js est un framework JavaScript open-source utilisé pour construire des interfaces utilisateur et des applications web monopages. Vue a été créé par Evan You et est maintenu par lui et le reste des membres actifs de l'équipe principale travaillant sur le projet et son écosystème."
	},
	]

	const [cards, setCards] = React.useState(cardsInit);

	return (
		<div className="container">
			<div class="row">
				<div class="form">
					{cards.map((cards) => (
						<MyCard
							title={cards.title}
							text={cards.text}
						/>
					))}
					<AddCard setCards={setCards} cards={cards} />
				</div>
			</div>
		</div>
	);
}

export default App;