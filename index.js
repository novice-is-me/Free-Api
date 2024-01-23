
// // Request()
// const request = 
//     new Request('Api.com', {
//     method: 'GET'
// })

// //Respone
// const response = 
//     await fetch('Api.com')

// const url = "http://worldtimeapi.org/api/timezone/Asia/Manila"

// async function getData(){
//     const response = await fetch(url)
//     const data = await response.json()
//     console.log(data)
// } 

// getData()

// const url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=API_KEY"


// async function getData(){ 
//     const request = new Request(url, {
//         headers:{
//             'Authorization': 'Bearer 63248bf3f3854ee1abdce9b8d4471177'
//     }
// })
//     const response = await fetch(request)
//     const data = await response.json()
//     console.log(data)
// } 

// getData()

// const url = 'https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=movies&count=10';

// const request = {
//     method: 'POST',
// 	headers: {
// 		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
// 		'X-RapidAPI-Host': 'andruxnet-random-famous-quotes.p.rapidapi.com'
// }}
    
// async function getData(){
//     try{
//         const response = await fetch(request)
//         const data = await response.json()
//         if (response.status === 200){
//             console.log(`Success ${data}`)
//         } else{
//             console.log(`Reponse Error: ${data.error.message}`)
//         }
//     }catch (error){
//         console.log(error)
//     }
// }


async function getData() {
	const url = 'https://catfact.ninja/fact';

	try {
		const response = await fetch(url);
		const result = await response.json();   
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}

getData();  