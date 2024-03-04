const contentLoad= async(value)=>{
    const res= await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data=await res.json()
    
    const content=data.posts
    // console.log(content)
    displayContent(content)
}
const displayContent= (content)=>{
    const cardContainer = document.getElementById('card-container')
    cardContainer.textContent=' '
    content.forEach((card) => {
        const createDiv = document.createElement('div');
    createDiv.classList = `flex gap-5 mb-9 bg-gray-200 p-4 rounded`;
     
    createDiv.innerHTML = `
    <div class="indicator">     
    <div id="indicator" class="indicator-item badge ${card.isActive ? 'bg-green-700' : 'bg-red-700'} "></div> 
   <img class="h-16 w-16 rounded-xl" src="${card.image}" alt="" /></div>
             
              <div >
                <div class="flex gap-5 font-medium">
                  <p > #${card.category}</p>
                  <p>Author :${card.author.name}</p>
                </div>
                <h1 class="text-3xl gap-5 font-bold mt-3 mb-4">${card.title}</h1>
                <p class="mb-10">${card.description}</p>
                <div class="flex justify-between">
                 <div class="flex gap-6">
                  <img src="./images/tabler-icon-message-2.png" alt=""><span>${card.comment_count}</span>
                  <img src="./images/tabler-icon-eye.png" alt=""><span>${card.view_count}</span>
                  <img src="./images/tabler-icon-clock-hour-9.png" alt=""><span>${card.posted_time} min</span>
                 </div>
                 <div>
                  <img onclick="replace(${card.id})" src="./images/email 1.png" alt="">
                 </div>
                </div>
              </div>
    `;
  
    cardContainer.appendChild(createDiv)
    });
   

}

const replace=async(cardId)=>{
  // console.log(cardId)
  const res=await fetch(`https://openapi.programming-hero.com/api/retro-forum/post/${cardId}`)
  const data=await res.json()
  // console.log(data)
  displayCart(data)
  
  
}
let count=0;
const displayCart=(data)=>{

  const cart= document.getElementById('cart')
  count=count+1;
  //  console.log(count)
  const mark= document.getElementById('mark')
  mark.innerText=count;
  
  const createDiv = document.createElement('div');
   createDiv.classList = `flex gap-5`;
   createDiv.innerHTML=`
   <div class="flex gap-20 mt-4 rounded bg-slate-200 px-9">
   <h1>${data.title}</h1>
   <div class="flex gap-2 justify-center items-center">
   <img src="./images/tabler-icon-eye.png" alt="">
   <p> ${data.view_count}</p>
   
   </div
  
   </div>
   `
   cart.appendChild(createDiv)
   
}

// search

const searchShow=async (value)=>{
  const spiner=document.getElementById('loading-spiner')
  spiner.classList.remove('hidden')
  const res= await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${value}`)
  const data=await res.json()
  const searchContent=data.posts
  if(searchContent.length>0){
    spiner.classList.add('hidden')
  }
  console.log(searchContent)
  displayContent(searchContent)
}

const search=()=>{
 
  const input=document.getElementById('input')
  
  const inputValue=input.value;
  
  console.log(inputValue)
  searchShow(inputValue)
  
  // if(inputValue){
  //   contentLoad(inputValue)
  // }
  // else{
  //   alert('please enter a valid category')
  // }
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