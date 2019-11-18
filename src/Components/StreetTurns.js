import React from 'react';
import data from '../data.json';

const totalDays = 7;

const streetTurns = data.streetTurns;
const days = streetTurns.map(function (el) {
	return el.day;
});

class StreetTurns extends React.Component {
	render() {
		let selectedDate = new Date(this.props.date);
		let selectedDay = selectedDate.getDay() - 1;

		let turnIndex = days.indexOf(selectedDay);

		let html = <p className="lead"> - </p>;

		if(turnIndex !== -1) { //se il giorno della settimana è presente nell'array dei giorni
			//primo giorno del mese in assoluto
			let monthInitialDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
			let monthInitialDay = monthInitialDate.getDay() - 1;

			//calcolo dell'offset tra il giorno scelto e il primo giorno del mese
			//si ottiene il numero del giorno scelto, il primo che cade in quel mese
			let firstChoosenDay = monthInitialDay > selectedDay? totalDays - monthInitialDay + selectedDay + 1 :
				selectedDay - monthInitialDay + 1;

			//numero del giorno scelto durante la settimana in cui passa la lavastrada
			let numberOfTheMonth = firstChoosenDay + (totalDays * streetTurns[turnIndex].week);

			if(numberOfTheMonth === selectedDate.getDate()) {
				html = <p className="h3">
					<span className="badge badge-secondary street-turns-badge">{streetTurns[turnIndex].street}</span>
				</p>;
			}
		}

		return(
			<div className="container jumbotron street-turns">
				<div className="row justify-content-center align-items-center">
					<div className="col-md-4">
						<p className="lead">Turno della lavastrada: </p>
					</div>
					<div className="col-md-6">
						{html}
					</div>
				</div>
			</div>
		)
	}
}

export default StreetTurns;