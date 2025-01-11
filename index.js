"use strict";

const languages = document.querySelector('.language-div');
const languageList = document.querySelector('.language-list');
const btn = document.querySelector('.ok-btn');
const closeBtn= document.querySelector('.fa-xmark')

const imageWrapper = document.getElementById('wrapper')
const fullImg = document.getElementById('full-img')
const imgName = document.querySelector('.image-name')
const describe = document.querySelector('.description')
console.log(imageWrapper)

// btn.addEventListener('click', function () {
//   console.log('test');
// })


const collaborations = [
  {
    designName: "GORGIO ARMANI",
    designImg: "./suits/suit0.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quidem unde in nam sequi non?",
  },
  
  {
    designName: " VALENTINO GARAVANI",
    designImg: "./suits/suit1.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quidem unde in nam sequi non?",
  },
  
  {
    designName: "DONATELLA VERSACE",
    designImg: "./suits/suit2.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quidem unde in nam sequi non?",
  },
  
  {
    designName: "CHRISTAIN DIOR",
    designImg: "./suits/suit3.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quidem unde in nam sequi non?",
  },
  
  {
    designName: "LOUIS VUITTON",
    designImg: "./suits/suit4.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quidem unde in nam sequi non?",
  },
  
  {
    designName: "COCO CHANEL",
    designImg: "./suits/suit5.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quidem unde in nam sequi non?",
  },
  {
    designName: "SAINT LAURENT",
    designImg: "./suits/suit6.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quidem unde in nam sequi non?",
  },

  {
    designName: "TOM FORD",
    designImg: "./suits/suit7.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quidem unde in nam sequi non?",
  },
  
  {
    designName: "RALPH LAUREN",
    designImg: "./suits/suit8.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quidem unde in nam sequi non?",
  },
  {
    designName: "BETSEY JOHNSON",
    designImg: "./suits/suit9.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quidem unde in nam sequi non?",
  },
  
  {
    designName: "CALVIN KLEIN",
    designImg: "./suits/suit10.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quidem unde in nam sequi non?",
  },
  
  {
    designName: "CHRISTAIN LOUBOUTIN",
    designImg: "./suits/suit11.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quidem unde in nam sequi non?",
  },
  {
    designName: "PIERRE CARDIN",
    designImg: "./suits/suit12.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quidem unde in nam sequi non?",
  },
  
  {
    designName: "ALEXANDER MCQUEEN",
    designImg: "./suits/suit13.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quidem unde in nam sequi non?",
  },
  
  {
    designName: "MUICCIA PRADA",
    designImg: "./suits/suit14.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quidem unde in nam sequi non?",
  },
  {
    designName: "KARL LAGERFIELD",
    designImg: "./suits/suit15.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quidem unde in nam sequi non?",
  },
  
  {
    designName: "MARC JACOBS",
    designImg: "./suits/suit16.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quidem unde in nam sequi non?",
  },
];

for (let i = 0; i < collaborations.length; i++) {
  const photos = document.createElement("div");
  photos.classList.add("cards");
  //  <div class="card-container">
  photos.innerHTML = `
  
  <h1 class="card-title"> ${collaborations[i].designName}</h1>
  <div>
  <img class="design-img" src="${collaborations[i].designImg}" alt="">
  <p class="card-content> ${collaborations[i].description}</p> 
  </div>
  
  
  
  `
  //  </div>
  document.querySelector(".collab-container").appendChild(photos);
}

const images = document.querySelectorAll('.design-img')
console.log(images)
// I'm trying to display the image and the description according to the clicked image
// My best code for this app (09-01-2025)
images.forEach((img,ind) => {
  img.addEventListener('click', () => {
    collaborations.forEach(item => {
      if(`./suits/suit${ind}.png` === item.designImg){
        openModal(item.designImg, item.designName, item.description)
        }
    })
  })
})

// images.forEach((img,ind) => {
//   img.addEventListener('click', () => {
//     openModal(`./suits/suit${ind}.png`)
//   })
  
// })


// close modal eventlistener
closeBtn.addEventListener('click', closeModal)
// imageWrapper.addEventListener('click', closeModal)

// function to open the modal and show the full image and the description
function openModal(pic, pictext,description){
  imageWrapper.style.display = 'flex'
  fullImg.src = pic
  imgName.innerHTML = pictext 
  describe.innerHTML = description
}

// close modal function
function closeModal() {
  imageWrapper.style.display='none'
}


languageList.addEventListener('click',() => {
  console.log('test');
  languages.style.height = '100%';
})

