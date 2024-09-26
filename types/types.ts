export type planet = {
	id: string;
	name: string;
	isPlanet: boolean;
	mass: { massValue: number; massExponent: number };
	vol: { volValue: number; volExponent: number };
	gravity: number;
	avgTemp: number;
	moonsCount: number;
	moons: string[];
};

export type asteroid = {
	name: string;
	discoveryYear: number;
	orbitalPeriod: number;
};

export type data = {
	planets: planet[];
	asteroids: asteroid[];
};
