const contentLoad= async()=>{
    const res= await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data=await res.json()
    
    const content=data.posts
    console.log(content)
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
   

}


const cardLoad= async()=>{
  const res= await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    const data=await res.json()
    displayCard(data)
}
const displayCard=(datas)=>{
  const latestContainer= document.getElementById('display-container')

  datas.forEach((data)=>{
    const createDiv = document.createElement('div');
    createDiv.classList = `card w-96 bg-base-100 shadow-xl`;

    createDiv.innerHTML=`
    <figure class="px-10 pt-10">
              <img src="${data.cover_image}" alt="Shoes" class="rounded-xl" />
            </figure>
            
            <div class="card-body  ">
              <div class="flex gap-2">
                <img src="./images/date.png" alt="">
                <span>${data.author?.posted_date || 'No Publish Date'}</span>
              </div>
              <h2 class=" text-xl font-bold">${data.title}</h2>
              <p class="">${data.description} </p>
              <div class="flex gap-3 mt-3">
               <div>
                <img class="h-16 w-16 rounded-2xl" src="${data.profile_image}" alt="">
              </div>
               <div class="">
                <h1>${data.author?.name}</h1>
                <p>${data.author?.designation || 'Unknown'}</p>
               </div>
              </div>
            </div>
    `;
    latestContainer.appendChild(createDiv)
  });
};
contentLoad()
cardLoad()