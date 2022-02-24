const APIkey = "KGbuvDTVKH9pw4k0_4odNZDGifHwL84a88cmAbfDNuA"
// S key = uuiciKHj6utcu67Ni-lsF6kweyyjFKAGqy2QgomJ6KM

const container = document.querySelector(".container")

const displayImage = (parsedData)=>{
    parsedData.forEach(data=>{
        const a = document.createElement("a")
        a.href = data.links.html
        a.target = "_blank"

        const img = document.createElement("img")
        img.src =  data.urls.regular
        img.alt = data.alt_description

        a.appendChild(img)
        container.appendChild(a)
    })
}

const  fetchImages = async ()=>{
    const count = 50,
          query = "animal"
    const url = `https://api.unsplash.com/photos/random/?client_id=${APIkey}&count=${count}&query=${query}&orientation=squarish;`;
    try {
        const fetchedData = await fetch(url)
        const parsedData = await fetchedData.json()
        console.log(parsedData)
        displayImage(parsedData)
        loading=false
    } catch (err) {
        console.log("not loaded")
    }

}
let loading = false

const loadMore = ()=>{
    if((document.body.offsetHeight - window.innerHeight - window.scrollY)<700 && !loading){
        loading = true
        console.log("hah")
        fetchImages()
    }
}

document.addEventListener("DOMContentLoaded", fetchImages)

window.addEventListener("scroll", loadMore)