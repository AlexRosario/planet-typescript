// SPACE DATA EXERCISE 8
// Return a Planet by a given moon name
//  must have destructured parameters

import { planet } from '../types/types';
type planetWithMoons = {
	planets: planet[];
	moonName: string;
};

export function findPlanetByMoon({ planets, moonName }: planetWithMoons) {
	return planets.find((planet) => {
		if (planet.moons)
			return planet.moons.includes(
				moonName.charAt(0).toUpperCase() + moonName.slice(1)
			);
	});
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
