const btnE1 = document.getElementById("btn")
const JokeE1= document.getElementById("joke")
const apikey = "xojTjr9joAXvdVN1j3eLfA==pZCdNx65BpM5BZ3t";

const options = {
    method : "GET",
    headers :{
        "X-Api-Key": apikey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getjoke() {
    const response = await fetch(apiURL, options);
    const data = await response.json();
   JokeE1.innerText = data[0].joke;
  

   
}
btnE1.addEventListener("click", getjoke);