import React, { useMemo } from 'react';
import data from '../data';

const startingDate  = '2020-10-01';

const TrashTurns = ({ date }) => {
	const { turns, people, trashTurns } = useMemo(() => ({
		turns: data.trash,
		people: data.people,
		trashTurns: data.trashTurns
	}), []);

	const selectedDate = useMemo(() => new Date(date), [date]);

	const trashTurnIndex = useMemo(() => {
		const dayOfTheWeek = selectedDate.getDay() - 1;
		return dayOfTheWeek === -1 ? trashTurns.length - 1 : dayOfTheWeek;
	}, [selectedDate, trashTurns]);
	const turnObject = useMemo(() => trashTurns[trashTurnIndex], [trashTurns, trashTurnIndex]);

	const shift = useMemo(() => {
		const timeDivider = 1000 * 60 * 60 * 24;
		const daysInMonth = new Date(selectedDate.getFullYear(),
			selectedDate.getMonth() + 1, 0).getDate();
		const initialDate = new Date(startingDate);

		return Math.floor((selectedDate - initialDate) / (timeDivider * daysInMonth));
	}, [selectedDate]);

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
								<div className="col-md-10">
									<p className="h3">{turns[turn].trash}:
										<span className={'mx-2 badge badge-secondary trash' + turn + '-badge'}>
											{people[Math.floor(turns[turn].initial + shift) % 5]}
										</span>
									</p>
								</div>
							</div>))) || (
								<p className="h3">{turns[turnObject].trash}:
									<span className={'mx-2 badge badge-secondary trash' + turnObject + '-badge'}>
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
