type Person = {
	name: string;
	age: number;
};

export const minBy = <T>(array: T[], cb: (person: T) => string | number) => {
	if (array.length === 0) return undefined;
	if (array[0]) {
		let min: T = array[0];

		for (let item of array) {
			if (cb(item) < cb(min)) {
				min = item;
			}
		}
		return min;
	}
};

export const maxBy = <T>(array: T[], cb: (person: T) => string | number) => {
	if (array.length === 0) return undefined;
	if (array[0]) {
		let max: T = array[0];

		for (let item of array) {
			if (cb(item) > cb(max)) {
				max = item;
			}
		}
		return max;
	}
};
