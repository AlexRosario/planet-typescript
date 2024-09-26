type Person = {
	name: string;
	age: number;
};

export const minBy = (
	array: Person[],
	cb: (person: Person) => string | number
) => {
	if (array.length === 0) return undefined;
	let min = cb(array[0] as Person);
	let personIndex = 0;

	for (let i = 1; i < array.length; i++) {
		const personMin = cb(array[i] as Person);

		if (personMin < min) {
			min = personMin;
			personIndex = i;
		}
	}
	return array[personIndex];
};

export const maxBy = (
	array: Person[],
	cb: (person: Person) => string | number
) => {
	if (array.length === 0) return undefined;
	let max = cb(array[0] as Person);
	let personIndex = 0;

	for (let i = 1; i < array.length; i++) {
		const personMax = cb(array[i] as Person);

		if (personMax > max) {
			max = personMax;
			personIndex = i;
		}
	}
	return array[personIndex];
};
