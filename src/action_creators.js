export function setHaikus(haikus) {
	return {
		type: 'SET_HAIKUS',
		haikus: haikus
	};
}

export function next() {
	return {
		type: 'NEXT'
	};
}