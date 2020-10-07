import React, { useMemo } from 'react';
import data from '../data';

const StreetTurns = ({ date }) => {
	const selectedDate = useMemo(() => new Date(date), [date]);
	const selectedDay = useMemo(() => selectedDate.getDay() - 1, [selectedDate]);

	const streetTurns = useMemo(() => data.streetTurns, []);
	const turnIndex = useMemo(() => {
		const days = streetTurns.map((el) => el.day);
		return days.indexOf(selectedDay);
	}, [streetTurns, selectedDay]);

	const numberOfTheMonth = useMemo(() => {
			const monthInitialDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay() - 1;
			const firstChosenDay = monthInitialDay > selectedDay ?
				7 - monthInitialDay + selectedDay + 1 :
				selectedDay - monthInitialDay + 1;
			return turnIndex !== -1 && firstChosenDay + (7 * streetTurns[turnIndex].week);
		},
		[selectedDate, selectedDay, streetTurns, turnIndex]);

	return (
		<div className="container jumbotron street-turns">
			<div className="row justify-content-center align-items-center align-content-center">
				<div className="col-md-4 col-sm-auto">
					<p className="lead">Turno della lavastrada: </p>
				</div>
				<div className="col-md-6 col-sm-auto">
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
