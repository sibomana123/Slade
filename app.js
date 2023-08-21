const menu = document.querySelector(".humburger");
const nav = document.querySelector(".nav-menu");
const links = document.querySelectorAll('.nav-link')



menu.addEventListener('click', () => {
  menu.classList.toggle('active')
  nav.classList.toggle('active')
})

links.forEach(link =>
  link.addEventListener('click', () => {
    nav.classList.remove('active')
    menu.classList.remove("active");
  }))

window.onscroll = () => {
    nav.classList.remove("active");
    menu.classList.remove("active");   
}
  

// REVIEW

const reviewers = [
  {
    id: 1,
    image: "image/Cont.png",
    name: "Miss Karl",
    age: "24 Years",
    comment:
      "The salad is fresh!!! Don't ask about the sauce again, it's really delicious, it's going to be routine.I recommend this salad to all of you guys! because they really take care of the quality.",
  },

  {
    id: 2,
    image: "image/Container.png",
    name: "David Kane",
    age: "23 Years",
    comment:
      "The salad is fresh!!! Don't ask about the sauce again, it's really delicious, it's going to be routine.I recommend this salad to all of you guys! because they really take care of the quality.",
  },

  {
    id: 3,
    image: "image/Containere.png",
    name: "Patrick",
    age: "24 Years",
    comment:
      "The salad is fresh!!! Don't ask about the sauce again, it's really delicious, it's going to be routine.I recommend this salad to all of you guys! because they really take care of the quality.",
  },

  {
    id: 4,
    image: "image/best.jpeg",
    name: "Selen",
    age: "24 Years",
    comment:
      "The salad is fresh!!! Don't ask about the sauce again, it's really delicious, it's going to be routine.I recommend this salad to all of you guys! because they really take care of the quality.",
  },

  {
    id: 5,
    image: "image/Cont.png",
    name: "Moise",
    age: "24 Years",
    comment:
      "The salad is fresh!!! Don't ask about the sauce again, it's really delicious, it's going to be routine.I recommend this salad to all of you guys! because they really take care of the quality.",
  },

  {
    id: 6,
    image: "image/Cont.png",
    name: "Tito",
    age: "27 Years",
    comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptatem in nemo praesentium asperiores vitae consequuntur repudiandae aspernatur deserunt cum, alias laboriosam perspiciatis iure aliquam quia maiores provident dicta necessitatibus. Veritatis aspernatur suscipit itaque, deserunt recusandae perferendis totam iusto voluptatum? Et sit debitis ullam'
  }
];

const revName = document.querySelector(".rev-name");
const revImage = document.querySelector(".rev-img");
const revAge = document.querySelector(".rev-age");
const revComment = document.querySelector(".rev-comment");

const prevBtn = document.querySelector(".rev-left-arrow");
const nextBtn = document.querySelector(".rev-right-arrow");


let currentItem = 1

window.addEventListener('DOMContentLoaded', () => {
  showPerson(currentItem)
})


function showPerson(person) {
    const item = reviewers[person];
    revImage.src = item.image;
    revName.textContent = item.name;
    revAge.textContent = item.age;
    revComment.textContent = item.comment;   
}

nextBtn.addEventListener('click', () => {
  currentItem++;
  
  if (currentItem > reviewers.length - 1) {
    currentItem=0
  }
  showPerson(currentItem)
})

prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviewers.length-1
  }
  showPerson(currentItem);
});

