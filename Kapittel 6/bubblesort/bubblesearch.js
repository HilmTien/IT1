// Denne kode visualisere bubblesearch algoritme for å sortere tall i økende rekkefølge

// Assign Global Values
let values = [];
let states = [];
let w = 10;  //decides the antall of numbers that are sorted


//Runs once. (Specific for j5.js)
function setup() {

	// Create Canvas of given Size
	createCanvas(800, 500);

	// Assign Array of Random Values
	values = new Array(Math.floor(width / w));

	for (let i = 0; i < values.length; i++) {
		values[i] = float(random(height));
		states[i] = -1;
	}

	bubbleSort(values)
}

//Runs continuos. (Specific for j5.js)
function draw() {

	// Set Background Color
	background(51);

	for (let i = 0; i < values.length; i++) {
		stroke(0);
		fill(255);

		if (states[i] == 0) {

			// Elementene i som sammenlignes
			fill(255, 0, 0);
		}
		else if (states[i] == 1) {
			// Sorting bar
			fill("#58FA82");
		}
		else if (states[i] == 2) {
			fill(255)
		}
		else {
			// Sorted Bars
			fill(255);
		}
		rect(i * w, height - values[i], w, values[i]);
	}
}

// Visual implementasjon av bubbleSort algoritm
async function bubbleSort(arr) {
	//Skriv koden her
	let hasSwapped = true;

	while (hasSwapped) {
		hasSwapped = false;
		for (let i = 0; i < arr.length; i++) {
			states[i] = 0
			if (arr[i] > arr[i + 1]) {
				await sleep(250);
				[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
				hasSwapped = true;
			}
		}
	}
}

//============ Hjelpe funksjoner ==========
// Definition of swap function to change places
async function swap(arr, a, b) {

	// Call to sleep function
	await sleep(1000);
	let t = arr[a];
	arr[a] = arr[b];
	arr[b] = t;
}

// Definition of sleep function to wait
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
