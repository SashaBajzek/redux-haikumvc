var shuffle = function (array) {
		var currentIndex = array.length, temporaryValue, randomIndex;
		//While there remain elements to shuffle
		while (0 !== currentIndex) {
			//Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -=1;
			//And swap it with the current element
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array;
	};


//Main Haiku Display Actions

export function setHaikus(haikusList) {
	return {
		type: 'SET_HAIKUS',
		haikusList: shuffle(haikusList)
	};
}

export function next() {
	return {
		type: 'NEXT'
	};
}

export function addHaiku(haiku) {
	return {
		type: 'ADD_HAIKU',
		haiku: haiku
	};
}

//Add Haiku Modal Actions

export function setModal() {
	return {
		type: 'SET_MODAL'
	};
}

export function openModal() {
	return {
		type: 'OPEN_MODAL'
	};
}

export function closeModal() {
	return {
		type: 'CLOSE_MODAL'
	};
}

export function addHaiku(haiku) {
	return {
		type: 'ADD_HAIKU',
		haiku
	};
}

//Admin Actions

export function deleteHaiku(haikuId) {
	return {
		type: 'DELETE_HAIKU',
		haikuId
	}
}
