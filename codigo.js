let array100, array1000, array10000, array100000;

preencheArray();

//Inserindo Valores 100 Valores randomicos de 0 a 100
function preencheArray(forma) {
	
	array100 = [];
	array1000 = [];
	array10000 = [];
	array100000 = [];

	var code = (function(num) {
		//Faz cópias do array para o nao calcular o tempo de um array já ordenado
		if(array100.length < 100)
			array100.push(num);

		if(array1000.length < 1000)
			array1000.push(num);

		if(array10000.length < 10000)
			array10000.push(num);

		if(array100000.length < 100000)
			array100000.push(num);
	});

	switch(forma) {
	
		case "C":
			for(let i = 0; i < 100000; i++) {
				code(i);
			}
			break;
		
		case "D":
			for(let i = 100000; i > 0; i--) {
				code(i);
			}
			break;
		
		default:
			for(let i = 0; i < 100000; i++) {
				code(Math.floor(Math.random() * 100000));
			}
	}

	console.log(array100);
}

function bubble(idTD, vet) {

	console.log("Teste do Bubble Sort");
	console.log("Vetor Desordenado");
	console.log(vet);

	let aux = 0, continua;
	let tempo1 = performance.now();

	while (continua !== 0) {
		continua = 0;
		for(let i = 0; i < vet.length -1; i++) {
			if(vet[i + 1] < vet[i]) { // Aqui troca a avaliação lógica.
				aux = vet[i];
				vet[i] = vet[i + 1];
				vet[i + 1] = aux;
				continua = i;
			}
		}
	}

	let tempo2 = performance.now();

	console.log("Vetor Ordenado\n");
    console.log(vet);
	console.log("");

	document.getElementById(idTD).innerHTML = tempo2 - tempo1;
}

function selection(idTD, vet) {

	console.log("Teste do Selection Sort");
	console.log("Vetor Desordenado");
	console.log(vet);

	let tempo1 = performance.now();

	for(i = 0; i < vet.length - 1; ++i) {
		menor = i;

		for(j = i + 1; j < vet.length; ++j) {
			if(vet[j] < vet[menor]){
				menor = j;
			}
		}

		aux = vet[i];
		vet[i] = vet[menor];
		vet[menor] = aux;
	}

	let tempo2 = performance.now();

	console.log("Vetor Ordenado\n");
	console.log(vet);
	console.log("");

	document.getElementById(idTD).innerHTML = tempo2 - tempo1;
}

function insertion(idTD, vet){

	console.log("Teste do Insertion Sort");
	console.log("Vetor Desordenado");
	console.log(vet);

	let i, x, k, j;
	let tempo1 = performance.now();

	for(i = 1; i < vet.length; i++){
		x = vet[i];
		k = 0;
		j = i - 1;

		while(j >= 0 && k == 0){
			if(x < vet[j]){
				vet[j + 1] = vet[j];
				--j;
			}
			else
				k = j + 1;
		}

	  	vet[k] = x;
	}

	let tempo2 = performance.now();

	document.getElementById(idTD).innerHTML = tempo2 - tempo1;

	console.log("Vetor Ordenado\n");
	console.log(vet);
	console.log("");

}

function quickSort(idTD, vet) {

	console.log("Teste do Selection Sort");
	console.log("Vetor Desordenado");
	console.log(vet);

	let esq = 0, dir = vet.length - 1; //indice máximo do array
	let tempo1 = performance.now();

	function quickSort1(vet, esq, dir){
		let ce = esq;
		let cd = dir;

		let meio = parseInt((ce + cd)/ 2);
		while(ce < cd){

			while(vet[ce] < vet[meio]){
				ce++;
			}

			while(vet[cd] > vet[meio]){
				cd--;
			}

			if(ce <= cd){
				let temp = vet[ce];
				vet[ce] = vet[cd];
				vet[cd] = temp;
				ce++;
				cd--;
			}
		}

		if(cd > esq)
			quickSort1(vet, esq, cd);

		if(ce < dir)
			quickSort1(vet, ce, dir);
	}

	quickSort1(vet, esq, dir);

	let tempo2 = performance.now();

	console.log("Vetor Ordenado\n");
	console.log(vet);
	console.log("");

	document.getElementById(idTD).innerHTML = tempo2 - tempo1;
}

function heapsort(idTD, vet) {

	console.log("Teste do Selection Sort");
	console.log("Vetor Desordenado");
	console.log(vet);

	let arrayLength;
	let tempo1 = performance.now();

	function ordenar(input) {
		arrayLength = input.length;

		for (let i = Math.floor(arrayLength / 2); i >= 0; i -= 1) {
			monte(input, i);
		}
	}

	function monte(input, i) {
		let esquerda = 2 * i + 1;
		let direita = 2 * i + 2;
		let maior = i;

		if (esquerda < arrayLength && input[esquerda] > input[maior]) {
			maior = esquerda;
		}

		if (direita < arrayLength && input[direita] > input[maior]) {
			maior = direita;
		}

		if (maior != i) {
			troca(input, i, maior);
			monte(input, maior);
		}
	}

	function troca(input, index_A, index_B) {
		let aux = input[index_A];
		input[index_A] = input[index_B];
		input[index_B] = aux;
	}

	function heapSort(input) {
		ordenar(input);

		for (let i = input.length - 1; i > 0; i--) {
			troca(input, 0, i);
			arrayLength--;
			monte(input, 0);
		}
	}

	heapSort(vet);

	let tempo2 = performance.now();

	console.log("Vetor Ordenado\n");
	console.log(vet);
	console.log("");

	document.getElementById(idTD).innerHTML = tempo2 - tempo1;
}

function shellsort(idTD, vet){

	console.log("Teste do Selection Sort");
	console.log("Vetor Desordenado");
	console.log(vet);

	let i, j, value, gap = 1;
	let tempo1 = performance.now();

	while(gap < vet.length){
		gap = 3*gap+1;
	}

	while(gap > 1){
		gap = parseInt(gap/3);

		for(i = gap; i < vet.length; i++) {
			value = vet[i];
			j = i - gap;

			while ((j >= 0) && (value < vet[j])) {
				vet[j + gap] = vet[j];
				j = j-gap;
			}

			vet[j + gap] = value;
		}
	}

	let tempo2 = performance.now();

	console.log("Vetor Ordenado\n");
	console.log(vet);
	console.log("");

	document.getElementById(idTD).innerHTML = tempo2 - tempo1;
}
