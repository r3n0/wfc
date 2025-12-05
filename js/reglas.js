const NA = 39; // número de azulejos

const fileName = 'tile';
const fileExtension = '.png';

const reglas = [
	// reglas de los bordes de cada azulejo
	{
		// tile 0
		UP: 1,
		RIGHT: 2,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 1
		UP: 1,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 2
		UP: 1,
		RIGHT: 0,
		DOWN: 3,
		LEFT: 0,
	},
	{
		// tile 3
		UP: 0,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 2,
	},
	{
		// tile 4
		UP: 0,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 2,
	},
	{
		// tile 5
		UP: 0,
		RIGHT: 2,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// tile 6
		UP: 0,
		RIGHT: 2,
		DOWN: 1,
		LEFT: 2,
	},
	{
		// tile 7
		UP: 0,
		RIGHT: 0,
		DOWN: 3,
		LEFT: 2,
	},
	{
		// tile 8
		UP: 0,
		RIGHT: 2,
		DOWN: 3,
		LEFT: 0,
	},
	{
		// tile 9
		UP: 3,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 2,
	},
	{
		// tile 10
		UP: 0,
		RIGHT: 0,
		DOWN: 3,
		LEFT: 0,
	},
	{
		// tile 11
		UP: 3,
		RIGHT: 2,
		DOWN: 3,
		LEFT: 2,
	},
	{
		// tile 12
		UP: 0,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// tile 13
		UP: 0,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// tile 14
		UP: 0,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// tile 15
		UP: 1,
		RIGHT: 2,
		DOWN: 3,
		LEFT: 2,
	},
	{
		// tile 16
		UP: 0,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// tile 17
		UP: 0,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// tile 18
		UP: 3,
		RIGHT: 0,
		DOWN: 3,
		LEFT: 0,
	},
	{
		// tile 19
		UP: 1,
		RIGHT: 2,
		DOWN: 3,
		LEFT: 2,
	},
	{
		// tile 20
		UP: 1,
		RIGHT: 2,
		DOWN: 3,
		LEFT: 2,
	},
	{
		// tile 21
		UP: 3,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 22
		UP: 3,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 23
		UP: 3,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 24
		UP: 0,
		RIGHT: 2,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 25
		UP: 0,
		RIGHT: 2,
		DOWN: 0,
		LEFT: 2,
	},
	{
		// tile 26
		UP: 0,
		RIGHT: 2,
		DOWN: 0,
		LEFT: 2,
	},
	{
		// tile 27
		UP: 3,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 28
		UP: 3,
		RIGHT: 2,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 29
		UP: 3,
		RIGHT: 2,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// tile 30
		UP: 1,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// tile 31
		UP: 1,
		RIGHT: 2,
		DOWN: 1,
		LEFT: 2,
	},
	{
		// tile 32
		UP: 1,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 2,
	},
	{
		// tile 33
		UP: 1,
		RIGHT: 0,
		DOWN: 3,
		LEFT: 0,
	},
	{
		// tile 34
		UP: 1,
		RIGHT: 2,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// tile 35
		UP: 0,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 0,
	},
	{
		// tile 36
		UP: 1,
		RIGHT: 0,
		DOWN: 3,
		LEFT: 0,
	},
	{
		// tile 37
		UP: 3,
		RIGHT: 0,
		DOWN: 1,
		LEFT: 0,
	},
	{
		// tile 38
		UP: 1,
		RIGHT: 0,
		DOWN: 0,
		LEFT: 2,
	},
];
