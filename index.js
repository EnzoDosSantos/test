

const random = Math.random() * 10 + Math.random() + Math.random()
const page = Math.floor(random)
let value = 0
const url = `https://picsum.photos/v2/list?page=${page}&limit=4`
const xhr = new XMLHttpRequest()

function getData(){
    if(this.readyState === 4 && this.status === 200){
        const data = JSON.parse(this.responseText)
        data.map(e => {
            const img = document.getElementById(`background${value}`)
            img.src = e.download_url
            value++
        })
    }
}

xhr.addEventListener('readystatechange', getData)
xhr.open('GET', url)
xhr.send()


function addComent(){
    const comment = document.getElementById('comment').value
    if(comment.length === 0){
        return
    }
    const commentDiv = document.getElementById('comments')
    const conteiner = document.createElement('div')
    conteiner.id = 'conteiner-comments'
    const name = document.createElement('span')
    const text = document.createElement('span')
    name.innerText = 'Comment '
    name.id = 'name'
    text.innerText = comment
    text.id = 'text'
    conteiner.appendChild(name)
    conteiner.appendChild(text)
    commentDiv.appendChild(conteiner)
    document.getElementById('comment').value = ''
}


const swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});