

// Comment the lines that follow and leave them in
// the html because otherwise the functions would not be executed.



// const random = Math.random() * 10 + Math.random() + Math.random()
// const page = Math.floor(random)
// let value = 0
// const url = `https://picsum.photos/v2/list?page=${page}&limit=4`

// async function getData() {
//     const data = await fetch(url)
//     const json = await data.json()
//     return json
// }




// getData().then(data => {
//     data.forEach(element => {
//         const img = document.getElementById(`background${value}`)
//         img.src = element.download_url
//         img.alt = element.author
//         value++
//     }
//     )
// }
// )


// function addComent(){
//     const comment = document.getElementById('comment').value
//     if(comment.length === 0){
//         return
//     }
//     const commentDiv = document.getElementById('comments')
//     const conteiner = document.createElement('div')
//     conteiner.id = 'conteiner-comments'
//     const name = document.createElement('span')
//     const text = document.createElement('span')
//     name.innerText = 'Comment '
//     name.id = 'name'
//     text.innerText = comment
//     text.id = 'text'
//     conteiner.appendChild(name)
//     conteiner.appendChild(text)
//     commentDiv.appendChild(conteiner)
//     document.getElementById('comment').value = ''
// }


const swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});