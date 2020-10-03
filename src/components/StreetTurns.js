import React, { useMemo } from 'react';
import data from '../data';

const StreetTurns = ({ date }) => {
	const selectedDate = useMemo(() => new Date(date), [date]);
	const selectedDay = useMemo(() => selectedDate.getDay() - 1, [selectedDate]);

	const streetTurns = useMemo(() => data.streetTurns, []);
	const days = useMemo(() => streetTurns.map((el) => el.day), [streetTurns]);
	const turnIndex = useMemo(() => days.indexOf(selectedDay), [days, selectedDay]);

	const monthInitialDay = useMemo(() =>
		new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay() - 1,
		[selectedDate]);
	const firstChosenDay = useMemo(() => monthInitialDay > selectedDay ?
		7 - monthInitialDay + selectedDay + 1 :
		selectedDay - monthInitialDay + 1, [monthInitialDay, selectedDay]);
	const numberOfTheMonth = useMemo(() =>
		turnIndex !== -1 && firstChosenDay + (7 * streetTurns[turnIndex].week),
		[firstChosenDay, streetTurns, turnIndex]);

	return(
		<div className="container jumbotron street-turns">
			<div className="row justify-content-center align-items-center">
				<div className="col-md-4">
					<p className="lead">Turno della lavastrada: </p>
				</div>
				<div className="col-md-6">
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
