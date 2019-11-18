import React from 'react';
import data from '../data.json';

const timeDivider = 1000 * 60 * 60 * 24; //divisore, indica i giorni trascorsi da una certa data
const totalTrash = 5; //totale turni spazzatura
const saturday = 5; //sabato, costante per evitare i magic numbers

//dati dal json
const turns = data.trash;
const people = data.people;
const trashTurns = data.trashTurns;

class TrashTurns extends React.Component {
	render() {

		let selectedDate = new Date(this.props.date);
		let dayOfTheWeek = selectedDate.getDay();

		let trashTurnIndex = dayOfTheWeek - 1; //normalizzazione giorni settimana (lunedì è 1 -> diventa 0)

		let html = [];

		let className = 'container jumbotron trash-turns trash-none';

		//viene eseguito il calcolo dei turni solo se la data selezionata è diversa da sabato
		//perché il sabato sera (domenica mattina) non risultano turni
		if(trashTurnIndex !== saturday) {

			let daysInMonth = new Date(selectedDate.getFullYear(),
				selectedDate.getMonth() + 1, 0).getDate();

			let initialDate = new Date(this.props.initialDate);
			let shift = Math.floor((selectedDate - initialDate) / (timeDivider * daysInMonth));
			//lo shift viene calcolato tenendo conto dei giorni nel mese e della data iniziale

			//la domenica sera risulta -1, per cui si utilizza come indice l'ultima posizione nell'array dei turni
			trashTurnIndex = trashTurnIndex === -1? trashTurns.length - 1 : trashTurnIndex;
			//si salta appunto il sabato

			let badgeClass = '';

			let turnObject = trashTurns[trashTurnIndex];

			let turnObjectLength = turnObject.length;
			if (turnObjectLength !== undefined) { //questo ramo dell'if viene eseguito se il turno è un array
				for (let i = 0; i < turnObjectLength; i++) {

					badgeClass = 'badge badge-secondary trash' + turnObject[i] + '-badge';

					let trash = turns[turnObject[i]].trash;
					let person = people[Math.floor(turns[turnObject[i]].initial + shift) % totalTrash];
					//calcolo del turno compreso di shift mensile e modulo per il turno

					html[i] = <div key={i} className="row justify-content-center align-items-center">
						<div className="col-md-8">
							<p className="h3">{trash}: <span className={badgeClass}>
							{person}</span></p>
						</div>
					</div>;
				}
			} else { //questo ramo dell'if viene eseguito invece se il turno è un semplice numero
				badgeClass = 'badge badge-secondary trash' + turnObject + '-badge';
				html =
					<p className="h3">{turns[turnObject].trash}: <span className={badgeClass}>
							{people[Math.floor(turns[turnObject].initial + shift) % totalTrash]}</span></p>;

				className = 'container jumbotron trash-turns trash' + turnObject;
			}
		} else { //questo ramo dell'if viene scelto se il giorno selezionto è sabato
			html = <p className="lead"> - </p>;
		}

		return(
			<div className={className}>
				<div className="row justify-content-center align-items-center">
					<div className="col-md-4">
						<p className="lead">Turni della spazzatura: </p>
					</div>
					<div className="col-md-6">
						{html}
					</div>
				</div>
			</div>
		)
	}
}

export default TrashTurns;