import React, { useState } from 'react';
import './Counter.css';

function Counter({ size }) {
	// Zadeklaruj nową zmienną stanu, którą nazwiemy „counter” - 0 w useState(0) ustawia wartość początkową zmiennej "counter"
	const [counter, setCounter] = useState(0);
	let btnClass = 'btn';
	let btnClassSecondary = 'btn btn--secondary';

	if (size === 2) {
		btnClass += ' btn--medium';
		btnClassSecondary += ' btn--medium';
	} else if (size === 3) {
		btnClass += ' btn--large';
		btnClassSecondary += ' btn--large';
	}

	const changeCounterValue = type => {
		console.log(type);

		if (type === 'decrement') {
			setCounter(counter - 1);
		} else if (type === 'increment') {
			setCounter(counter + 1);
		}

		console.log(counter);
	};

	return (
		<div>
			<button
				onClick={() => {
					changeCounterValue('increment');
				}}
				className={btnClass}>
				+
			</button>
			<span>{counter}</span>
			<button
				onClick={() => {
					changeCounterValue('decrement');
				}}
				className={btnClassSecondary}>
				-
			</button>
		</div>
	);
}

export default Counter;
