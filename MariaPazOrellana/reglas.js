const NA = 16; // número de azulejos
const fileName = 'tile';
const fileExtension = '.png';
const reglas = [
	// reglas de los borded de cada azulejo
	{
		// tile 0
		UP: 0,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 1
		UP: 1,
		RIGHT: 1,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// tile 2
		UP: 0,
		RIGHT: 1,
		DOWN: 1,
		LEFT: 1,
	},
	{
		// tile 3
		UP: 1,
		RIGHT: 1,
		DOWN: 0,
		LEFT: 1,
	},
	{
		// tile 4
		UP: 1,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 1,
	},
	{
		// tile 5
		UP: 1,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 1,
	},
	{
		// tile 6
		UP: 1,
		RIGHT: 1,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 7
		UP: 0,
		RIGHT: 1,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// tile 8
		UP: 0,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 1,
	},
	{
		// tile 9
		UP: 1,
		RIGHT: 1,
		DOWN: 1,
		LEFT: 1,
	},
	{
		// tile 10
		UP: 1,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 11
		UP: 0,
		RIGHT: 1,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 12
		UP: 0,
		RIGHT: 1,
		DOWN: 0,
		LEFT: 1,
	},
	{
		// tile 13
		UP: 1,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// tile 14
		UP: 1,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 15
		UP: 0,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
];
