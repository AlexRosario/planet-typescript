// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy

import { asteroid } from '../types/types';

export function getGreatestDiscoveryYear(asteroids: asteroid[]) {
	const asteroidYears = new Map<number, number>();

	asteroids.forEach((asteroid) => {
		if (asteroid.discoveryYear) {
			if (asteroidYears.has(asteroid.discoveryYear)) {
				asteroidYears.set(
					asteroid.discoveryYear,
					asteroidYears.get(asteroid.discoveryYear)! + 1
				);
			} else {
				asteroidYears.set(asteroid.discoveryYear, 1);
			}
		}
	});

	let greatestYear = 0;
	let greatestYearCount = 0;

	asteroidYears.forEach((count, year) => {
		if (count > greatestYearCount) {
			greatestYear = year;
			greatestYearCount = count;
		}
	});

	return greatestYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
