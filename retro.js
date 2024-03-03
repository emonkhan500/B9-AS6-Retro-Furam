const contentLoad= async()=>{
    const res= await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data=await res.json()
    const content=data.posts
   
    displayContent(content)
}
const displayContent= (content)=>{
    const cardContainer = document.getElementById('card-container')
    content.forEach((card) => {
        const createDiv = document.createElement('div');
    createDiv.classList = `flex gap-5`;
    createDiv.innerHTML = `
    <div class="mb-5"><img class="h-16 w-16 rounded-xl" src="${card.image}" alt="" /></div>
             
              <div>
                <div class="flex gap-5 font-medium">
                  <p > #${card.category}</p>
                  <p>Author :${card.author.name}</p>
                </div>
                <h1 class="text3xl font-bold mt-3 mb-4">${card.title}</h1>
                <p class="mb-10">${card.description}</p>
                <div class="flex justify-between">
                 <div class="flex gap-6">
                  <img src="./images/tabler-icon-message-2.png" alt=""><span>${card.comment_count}</span>
                  <img src="./images/tabler-icon-eye.png" alt=""><span>${card.view_count}</span>
                  <img src="./images/tabler-icon-clock-hour-9.png" alt=""><span>${card.posted_time} min</span>
                 </div>
                 <div>
                  <img src="./images/email 1.png" alt="">
                 </div>
                </div>
              </div>
    `;
    cardContainer.appendChild(createDiv)
    });
   
console.log(content)
}
contentLoad()