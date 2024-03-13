//--------------Fetch------------------------------------------------------------------------------


const url="https://api.frankfurter.app/latest";
const app = document.getElementById("app");

fetch(url)
	.then(response => response.json())
	.then((datos) => { 
		console.log(datos)
		cotizacionEuro(datos);
	})
	.catch(error => console.log(error))
	.finally(() => console.log("proceso finalizado"));
	
	function cotizacionEuro(datos){		
		const div = document.createElement("div");
		div.innerText =`AUD: ${datos.rates.AUD} 
						BGN: ${datos.rates.BGN}
						BRL: ${datos.rates.BRL}
						CAD: ${datos.rates.CAD}
						CHF: ${datos.rates.CHF}
						CNY: ${datos.rates.CNY}
						CZK: ${datos.rates.CZK}
						DKK: ${datos.rates.DKK}
						GBP: ${datos.rates.GBP}
						HKD: ${datos.rates.HKD}
						HUF: ${datos.rates.HUF}  
						IDR: ${datos.rates.IDR}  
						ILS: ${datos.rates.ILS}  
						INR: ${datos.rates.INR}  
						ISK: ${datos.rates.ISK}  
						JPY: ${datos.rates.JPY}  
						PHP: ${datos.rates.PHP}  
						PLN: ${datos.rates.PLN}  
						RON: ${datos.rates.RON}  
						SEK: ${datos.rates.SEK}  
						SGD: ${datos.rates.SGD}  
						THB: ${datos.rates.THB}  
						TRY: ${datos.rates.TRY}  
						USD: ${datos.rates.USD} 
						ZAR: ${datos.rates.ZAR} ` ;
		app.appendChild(div)
	}
