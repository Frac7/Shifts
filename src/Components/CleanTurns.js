import React from 'react';
import data from '../data.json';

const monday = 1; //primo giorno della settimana, costante per evitare magic numbers
const totalPeople = 5; //totale inquilini
const timeDivider = 1000 * 60 * 60 * 24 * 7; //denominatore utile per ottenere il numero di settimane passate tra 2 date

//la funzione prende in input un intervallo di date
function getPersonByDate(initialDate, selectedDate) {
	let dayOfTheWeek = selectedDate.getDay();

	//la data selezionata viene normalizzata al lunedì
	//perché le pulizie hanno cadenza settimanale
	if(dayOfTheWeek !== monday) {
		let offset = dayOfTheWeek - monday;
		selectedDate.setDate(selectedDate.getDate() - offset);
	}

	//calcolo delle settimane trascorse tra le due date selezionate
	let weeksInBetween = (selectedDate - initialDate) / timeDivider;

	//la settimana di partenza indica il primo turno
	//si tratta del parametro che stabilisce "il giro"
	//la persona a cui toccano le pulizie è stabilita in base al numero di settimane trascorse dalla data iniziale
	return weeksInBetween % totalPeople;
}

class CleanTurns extends React.Component {
	render() {
		let selectedDate = new Date(this.props.date);
		let initialDate = new Date(this.props.initialDate);
		let currentPersonIndex = getPersonByDate(initialDate, selectedDate);

		let currentPerson = data.people[currentPersonIndex];

		return(
			<div className="container jumbotron clean-turns">
				<div className="row justify-content-center align-items-center">
					<div className="col-md-4">
						<p className="lead">Turno delle pulizie: </p>
					</div>
					<div className="col-md-6">
						<p className="h3"><span className="badge badge-secondary clean-turns-badge">{currentPerson}</span></p>
					</div>
				</div>
			</div>
		)
	}
}

export default CleanTurns;