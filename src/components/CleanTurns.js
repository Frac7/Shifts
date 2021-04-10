import React from 'react';
import data from '../data';

const initialDate = '2020-10-11';

const CleanTurns = ({ date }) => {
	const {
		greenBathroom,
		people
	} = data;

	const timeDivider = 1000 * 60 * 60 * 24 * 7;

	const selectedDate = new Date(date);
	
	const dayOfTheWeek = selectedDate.getDay();
	if(dayOfTheWeek !== 1) {
		const offset = dayOfTheWeek - 1;
		selectedDate.setDate(selectedDate.getDate() - offset);
	}

	const currentPersonIndex = Math.floor(((selectedDate - new Date(initialDate)) / timeDivider) % 5);

	let greenBathroomIndex = -1;
	
	if (!Object.values(greenBathroom).includes(currentPersonIndex)) {
		greenBathroomIndex = greenBathroom[Math.floor((((selectedDate - new Date(initialDate)) / timeDivider) % 15))];
	}

	return (
		<div className="container jumbotron clean-turns align-content-center">
			<div className="row justify-content-center align-items-center align-content-center">
				<div className="col-12 text-center">
					<p className="lead">Turno delle pulizie: </p>
				</div>
				<div className="col-auto">
					<p className="h3"><span className="badge badge-secondary clean-turns-badge">{people[currentPersonIndex]}</span></p>
				</div>
				<div className="col-12 text-center">
					<p className="h3 my-3 text-center">
						<b>Pulire la cucina, pulire l'andito, spolverare</b>
					</p>
				</div>
			</div>
			{greenBathroomIndex > 0 && (
				<div className="row justify-content-center align-items-center align-content-center">
				<div className="col-12 text-center">
					<p className="lead">Pulizia bagno grande: </p>
				</div>
				<div className="col-auto">
					<p className="h3">
						<span className="badge badge-secondary clean-turns-badge">
							{people[greenBathroomIndex]}
						</span>
					</p>
				</div>
			</div>
			)}
		</div>
	);
}

export default CleanTurns;
