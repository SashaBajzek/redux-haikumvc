//Main Actions

export function setHaikus(haikusList) {
	return {
		type: 'SET_HAIKUS',
		haikusList: haikusList
	};
}

export function next() {
	return {
		type: 'NEXT'
	};
}

//Modal Actions

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
