import React from 'react';
import data from '../data';

const StreetTurns = ({ date }) => {
	const selectedDate = new Date(date);
	const selectedDay = selectedDate.getDay() - 1;

	const { streetTurns } = data;
	const turnIndex = streetTurns.map((el) => el.day).indexOf(selectedDay);

	const monthInitialDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay() - 1;
	const firstChosenDay = monthInitialDay > selectedDay ?
		7 - monthInitialDay + selectedDay + 1 :
		selectedDay - monthInitialDay + 1;
	const numberOfTheMonth = turnIndex !== -1 && firstChosenDay + (7 * streetTurns[turnIndex].week);

	return (
		<div className="container jumbotron street-turns">
			<div className="row justify-content-center align-items-center align-content-center">
				<div className="col-12 text-center">
					<p className="lead">Turno della lavastrada: </p>
				</div>
				<div className="col-auto">
					{turnIndex !== -1 && numberOfTheMonth === selectedDate.getDate() ?
						<p className="h3">
							<span className="badge badge-secondary street-turns-badge">{streetTurns[turnIndex].street}</span>
						</p> :
						<p className="lead"> - </p>
					}
				</div>
			</div>
		</div>
	);
}

export default StreetTurns;
