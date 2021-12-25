let image1 = document.getElementById("image1")
let image2 = document.getElementById("image2")
let image3 = document.getElementById("image3")
let image4 = document.getElementById("image4")
let image5 = document.getElementById("image5")

function expand(img){
    image1.classList.remove("active")
    image2.classList.remove("active")
    image3.classList.remove("active")
    image4.classList.remove("active")
    image5.classList.remove("active")

    switch(img){
        case 'image1':
            image1.classList.add("active")
            break
        case 'image2':
            image2.classList.add("active")
            break
        case 'image3':
            image3.classList.add("active")
            break
        case 'image4':
            image4.classList.add("active")
            break
        case 'image5':
            image5.classList.add("active")
            break
    }
}