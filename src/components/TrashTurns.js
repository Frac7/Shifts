import React, { useMemo } from 'react';
import data from '../data';

const TrashTurns = ({ date, initialDate: startingDate }) => {
	const timeDivider = 1000 * 60 * 60 * 24;

	const turns = useMemo(() => data.trash, []);
	const people = useMemo(() => data.people, []);
	const trashTurns = useMemo(() => data.trashTurns, []);

	const selectedDate = useMemo(() => new Date(date), [date]);
	const initialDate = useMemo(() => new Date(startingDate), [startingDate]);

	const trashTurnIndex = useMemo(() => {
		const dayOfTheWeek = selectedDate.getDay() - 1;
		return dayOfTheWeek === -1 ? trashTurns.length - 1 : dayOfTheWeek;
	}, [selectedDate, trashTurns]);
	const turnObject = useMemo(() => trashTurns[trashTurnIndex], [trashTurns, trashTurnIndex]);

	let daysInMonth = useMemo(() => new Date(selectedDate.getFullYear(),
		selectedDate.getMonth() + 1, 0).getDate(), [selectedDate]);
	const shift = useMemo(() =>
		Math.floor((selectedDate - initialDate) / (timeDivider * daysInMonth)), [selectedDate, initialDate, timeDivider, daysInMonth]);

	return(
		<div className={'container jumbotron trash-turns'}>
			<div className="row justify-content-center align-items-center">
				<div className="col-md-4">
					<p className="lead">Turni della spazzatura: </p>
				</div>
				<div className="col-md-6">
					{selectedDate.getDay() - 1 === 5 ?
						<p className="lead"> - </p> :
						(trashTurns[trashTurnIndex].length && trashTurns[trashTurnIndex].map((turn, i) => (
							<div key={i} className="row justify-content-center align-items-center">
								<div className="col-md-8">
									<p className="h3">{turns[turn].trash}:
										<span className={'badge badge-secondary trash' + turn + '-badge'}>
											{people[Math.floor(turns[turn].initial + shift) % 5]}
										</span>
									</p>
								</div>
							</div>))) || (
								<p className="h3">{turns[turnObject].trash}:
									<span className={'badge badge-secondary trash' + turnObject + '-badge'}>
										{people[Math.floor(turns[turnObject].initial + shift) % 5]}
									</span>
								</p>
							)
					}
				</div>
			</div>
		</div>
	);
}

export default TrashTurns;
