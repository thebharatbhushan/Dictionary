let example = "Not Found!";
let def1 = "Not Found!";
let def2 = "Not Found!";
let def3 = "Not Found!";


function bb() {
let bharat = document.getElementById("Svalue").value;
const base = 'https://api.dictionaryapi.dev/api/v2/entries/en/'+bharat;

fetch (base)
	.then ((response) => {
		return response.json();
	})
	
	.then ((data) => {
		console.log(data);
		console.log(data.title)
		
		document.getElementById("word").innerHTML = data[0].word;
		console.log(data[0].title)
		// console.log(data[0].meanings[2].definitions[0].definition)
		// console.log(data[0].meanings[2].definitions[1].definition)
		// console.log(data[0].meanings[2].definitions[0].example)
		// console.log(data[0].meanings[2].definitions[1].example)
		
		console.log(data[0].meanings[0].definitions[0].definition)
		def1 = data[0].meanings[0].definitions[0].definition;
		document.getElementById("def1").innerHTML = def1;
		console.log(data[0].meanings[0].definitions[1].definition)
		def2 = data[0].meanings[0].definitions[1].definition;
		document.getElementById("def2").innerHTML = def2;
		console.log(data[0].meanings[0].definitions[2].definition)
		def3 = data[0].meanings[0].definitions[2].definition;
		document.getElementById("def3").innerHTML = def3;
		console.log(data[0].meanings[0].definitions[0].example)
		example = data[0].meanings[0].definitions[0].example;
		document.getElementById("example").innerHTML ="Example: <br/>"+ example;
		
		
		if (example == undefined){
			document.getElementById("example").innerHTML = "";
		}
		else if (def1 == undefined){
			document.getElementById("def1").innerHTML = "";
		}
		else if (def2 == undefined){
			document.getElementById("def2").innerHTML = "";
		}
		else if (def3 == undefined){
			document.getElementById("def3").innerHTML = "";
		}
		
	});

}

setTimeout(function() {
swal({
	title: "Follow me on Instagram",
	buttons: true,
	
  })
  .then((follow) => {
	if (follow) {
	  swal("Poof! Your imaginary file has been deleted!", {
		window:location = "https://www.instagram.com/bharatbhushan055",
		icon: "success",
	  });
	} 
  });
}, 10000);