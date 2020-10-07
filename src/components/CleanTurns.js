import React, { useMemo } from 'react';
import data from '../data';

const initialDate = '2020-10-04';

const CleanTurns = ({ date }) => {
	const selectedDate = useMemo(() => new Date(date), [date]);

	const currentPersonIndex = useMemo(() => {
		const timeDivider = 1000 * 60 * 60 * 24 * 7;
		const dayOfTheWeek = selectedDate.getDay();
		if(dayOfTheWeek !== 1) {
			const offset = dayOfTheWeek - 1;
			selectedDate.setDate(selectedDate.getDate() - offset);
		}

		return Math.floor(((selectedDate - new Date(initialDate)) / timeDivider) % 5);
	}, [selectedDate]);

	const currentPerson = useMemo(() => data.people[currentPersonIndex], [currentPersonIndex]);

	return (
		<div className="container jumbotron clean-turns align-content-center">
			<div className="row justify-content-center align-items-center align-content-center">
				<div className="col-12 text-center">
					<p className="lead">Turno delle pulizie: </p>
				</div>
				<div className="col-auto">
					<p className="h3"><span className="badge badge-secondary clean-turns-badge">{currentPerson}</span></p>
				</div>
				<div className="col-12 text-center">
					<p className="h3 my-3 text-center">
						<b>Pulire la cucina, pulire l'andito, spolverare</b>
					</p>
				</div>
			</div>
		</div>
	);
}

export default CleanTurns;
