import React, { useEffect, useState } from "react";
import SecondsCounter from "./secondscounter";
import Timer from "./timer";


const Home = () => {
	const [count, setCount] = useState('000000');
	const incrementTime = () => {
		if (count === '999999') {
			setCount('000000')
		}
		setCount(prev => ((parseInt(prev) + 1).toString()).padStart(6, '0'))
	}
	useEffect(() => {
		const renderInterval = setInterval(incrementTime, 1000);
		return () => clearInterval(renderInterval);
	}, [])

	return (
		<div>
			<SecondsCounter time={count} />
			<Timer />
		</div>
	);
};

export default Home;
