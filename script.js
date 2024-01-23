async function getCatData() {
    const url = "https://catfact.ninja/fact"

    try{
        const response1 = await fetch(url)
        const data1 = await response1.json()
        return data1
    } catch(error){
        console.log(error)
    }
}

async function getRandomQoutes() {
    const url = "https://api.quotable.io/quotes/random" 
  
    try{
        const response2 = await fetch(url)
        const data2 = response2.json()
        return data2  
    } catch(error){   
        console.log(error)
    }
}

async function getRandomJokes() {
    const url = "https://official-joke-api.appspot.com/random_joke"

    try{
        const response3 = await fetch(url)
        const data3 = response3.json()
        return data3
    } catch(error){ 
        console.log(error)
    }
}

async function getRandomPuns() {
    const url = "https://www.punapi.rest/api/pun"

    try{
        const response4 = await fetch(url)
        const data4 = await response4.json()
        return data4
    } catch(error){
        console.log(error)
    }
}

async function getPunsLines() {
    const url = "https://v2.jokeapi.dev/joke/Any?safe-mode"   

    try{   
        const response5 = await fetch(url)
        const data5 = await response5.json()
        return data5
    } catch(error){
        console.log(error)
    }
}

async function getAnime() {
    const url = "https://animechan.xyz/api/random"

    try{
        const response6 = await fetch(url)
        const data6 = await response6.json()
        return data6
    } catch(error){
        console.log(error)
    }
}

$("#catApi").click(async function (){
    $('#modalTitle').text("Cat Fun Facts! ")
    try{
        const catData = await getCatData()
        console.log(catData)
        $('#bodyApi').text(catData.fact)
    }catch{
        alert("Error")
    }
})
 
$('#dogApi').click (async function(){
    $('#modalTitle').text("Random Qoutes")     
    try{ 
        const randomQoutes = await getRandomQoutes()  
        console.log(randomQoutes)      
        $('#bodyApi').text(randomQoutes[0].content)      
    }catch{   
        alert("Error")
    }
})

$('#jokeApi').click( async function(){ 
    $('#modalTitle').text("Random Jokes")
    try{
        const randomJokes = await getRandomJokes()
        console.log(randomJokes) 
        $('#bodyApi').text(`${randomJokes.setup} ${randomJokes.punchline}`)        
    }catch{      
        alert("Error")    
    }
})

$('#punsApi').click(async function(){   
    $('#modalTitle').text("Random Puns")
    try{
        const randomPuns = await getRandomPuns()
        console.log(randomPuns)
        $('#bodyApi').text(randomPuns.pun) 
    }catch{
        alert("Error")
    }
})
   
$('#linePunsApi').click(async function(){
    $('#modalTitle').text("Random Puns Lines")  
    try{
        const randomMath = await getPunsLines() 
        console.log(randomMath)
        $('#bodyApi').text(`${randomMath.setup}  ${randomMath.delivery}`)
    }catch{   
        alert("Error") 
    }
})
  
$('#animeApi').click(async function(){
    $('#modalTitle').text("Anime Qoutes")
    try{
        const anime = await getAnime()
        console.log(anime)
        $('#bodyApi').text(`${anime.quote} 
        
        - ${anime.character} (${anime.anime})`)    
    }catch{
        alert("Error") 
    }
})   


