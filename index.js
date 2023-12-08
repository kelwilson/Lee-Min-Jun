"use strict";

const languages = document.querySelector('.language-div');
const languageList = document.querySelector('.language-list');
const btn = document.querySelector('.ok-btn');

// btn.addEventListener('click', function () {
//   console.log('test');
// })

// console.log('text');


const collaborations = [
  {
    designName: "",
    designImg: "./suits/suits22.png",
    description: "",
  },

  {
    designName: "",
    designImg: "./suits/suits21.png",
    description: "",
  },

  {
    designName: "",
    designImg: "./suits/suits20.png",
    description: "",
  },

  {
    designName: "",
    designImg: "./suits/suits19.png",
    description: "",
  },

  {
    designName: "",
    designImg: "./suits/18.png",
    description: "",
  },

  {
    designName: "",
    designImg: "./suits/suits17.png",
    description: "",
  },
  {
    designName: "",
    designImg: "./suits/suits16.png",
    description: "",
  },

  {
    designName: "",
    designImg: "./suits/suits15.png",
    description: "",
  },

  {
    designName: "",
    designImg: "./suits/suit13.png",
    description: "",
  },
  {
    designName: "",
    designImg: "./suits/suit12.png",
    description: "",
  },

  {
    designName: "",
    designImg: "./suits/suit11.png",
    description: "",
  },

  {
    designName: "",
    designImg: "./suits/suit10.png",
    description: "",
  },
  {
    designName: "",
    designImg: "./suits/suits4.png",
    description: "",
  },

  {
    designName: "",
    designImg: "./suits/suits3.png",
    description: "",
  },

  {
    designName: "",
    designImg: "./suits/suit1.png",
    description: "",
  },
  {
    designName: "",
    designImg: "./suits/suit-short.png",
    description: "",
  },

  {
    designName: "",
    designImg: "./suits/suit-short1.png",
    description: "",
  },
];

for (let i = 0; i < collaborations.length; i++) {
  const photos = document.createElement("div");
  photos.classList.add("cards");
  photos.innerHTML = `
                        <div class="card-container">

                        <h1 class="card-title"> ${collaborations[i].designName}</h1>
                        <div>
                        <img class="design-img" src="${collaborations[i].designImg}" alt="">
                        <p class="card-content> ${collaborations[i].description}</p>
                        </div>
                        </div>
    
    
    
    `
  document.querySelector(".collab-container").appendChild(photos);
}




languageList.addEventListener('click', function () {
  console.log('test');
  languages.style.height = '100%';
})

