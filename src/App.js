import React, { Component } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import TitleFunct from './TitleFunct';
import { FirstCard, SecondCard, ThirdCard } from './Card';
export default class App extends Component {
	render() {
		return(
			
			<div className="text-center">
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
				<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
				<script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossorigin></script>
				<script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>
				<script>var Alert = ReactBootstrap.Alert;</script>

				<TitleFunct a={"Testing "} b={"Bootstrap on React"} />

					<CardGroup>
					<Card>
						<Card.Img variant="top" src="https://www.datocms-assets.com/45470/1631110818-logo-react-js.png" />
						<Card.Body>
							<Card.Title><FirstCard></FirstCard></Card.Title>
							<Card.Text>

							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<small className="text-muted">Last updated 3 mins ago</small>
						</Card.Footer>
					</Card>

					<Card>
						<Card.Img variant="top" src="https://www.softfluent.fr/wp-content/uploads/2019/10/angularjs-600x315.png" />
						<Card.Body>
							<Card.Title><SecondCard></SecondCard></Card.Title>
							<Card.Text>

							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<small className="text-muted">Last updated 3 mins ago</small>
						</Card.Footer>
					</Card>
					<Card>
						<Card.Img variant="top" src="https://positivethinking.tech/wp-content/uploads/2021/01/Logo-Vuejs.png" />
						<Card.Body>
							<Card.Title><ThirdCard></ThirdCard></Card.Title>
							<Card.Text>

							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<small className="text-muted">Last updated 3 mins ago</small>
						</Card.Footer>
					</Card>
				</CardGroup>
			</div>
		)
	}
}
