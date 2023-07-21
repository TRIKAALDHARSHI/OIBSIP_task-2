const nav = document.getElementById('navigation')
const Name = document.getElementsByClassName('name')[0]
const navLink = document.getElementsByClassName('navLink')
const card = document.getElementsByClassName('card')
const Lin = ['DSA.jpeg', 'healthcare.jpeg', 'travel.jpg', 'weather.jpg', 'bank.jpg']
const homebtn = document.getElementById('homebtn')
const aboutbtn = document.getElementById('aboutbtn')
const servicebtn = document.getElementById('servicebtn')
const contactbtn = document.getElementById('contactbtn')
const listhomebtn = document.getElementById('listhomebtn')
const listaboutbtn = document.getElementById('listaboutbtn')
const listservicebtn = document.getElementById('listservicebtn')
const listcontactbtn = document.getElementById('listcontactbtn')
const navlist = document.getElementsByClassName('navlist')[0]
const menuicon = document.getElementById('menuicon')
const home = document.getElementById('home')
const aboutus = document.getElementById('aboutus')
const service = document.getElementById('service')
const contact = document.getElementById('contact')


menuicon.addEventListener('click', () => {
  if (navlist.style.display == 'block') {
    navlist.style.display = "none";
    console.log('fnone')
  }
  else {
    navlist.style.display = "block";
    console.log('flex')
  }
})

homebtn.addEventListener('click', () => {
  home.scrollIntoView({ behavior: 'smooth' })
})
aboutbtn.addEventListener('click', () => {
  aboutus.scrollIntoView({ behavior: 'smooth' })
})
servicebtn.addEventListener('click', () => {
  service.scrollIntoView({ behavior: 'smooth' })
})
contactbtn.addEventListener('click', () => {
  contact.scrollIntoView({ behavior: 'smooth' })
})

listhomebtn.addEventListener('click', () => {
  home.scrollIntoView({ behavior: 'smooth' })
})
listaboutbtn.addEventListener('click', () => {
  aboutus.scrollIntoView({ behavior: 'smooth' })
})
listservicebtn.addEventListener('click', () => {
  service.scrollIntoView({ behavior: 'smooth' })
})
listcontactbtn.addEventListener('click', () => {
  contact.scrollIntoView({ behavior: 'smooth' })
})

window.onscroll = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    nav.style.backgroundColor = "white"
    Name.style.color = "black"
    nav.style.boxShadow = '0px 2px 5px 0px rgb(201, 201, 201)'
    menuicon.style.filter = ''
    for (let i in navLink) {
      if (i > navLink.length) { break }
      navLink[i].style.color = 'black'
    }
  }
  else {
    nav.style.backgroundColor = ""
    Name.style.color = ""
    nav.style.boxShadow = ''
    menuicon.style.filter = 'invert()'
    for (let i in navLink) {
      if (i > navLink.length) { break }
      navLink[i].style.color = ''
    }
  }
}
for (let i in card) {
  card[i].style.backgroundImage = `url(${Lin[i]})`
}
