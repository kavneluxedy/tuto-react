import img1 from '../src/assets/logo_react.svg'
import img2 from '../src/assets/angular.png'
import img3 from '../src/assets/vuejs.jpg'
import CreateCard from './component/CreateCard';
import './App.css';

function App() {
	const cards = [
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
	return (
		<div className="App">
			{cards.map((cards) => (
				<CreateCard 
					img={cards.img}
					title={cards.title}
					text={cards.text}
				/>
			))}
		</div>
	);
}

export default App;