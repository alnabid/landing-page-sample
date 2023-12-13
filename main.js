const aboutButton = document.getElementById('aboutButton')
const about = document.getElementById('about')
const contactButton = document.getElementById('contactButton')
const contact = document.getElementById('contact')
const signInButton = document.getElementById('signInButton')
const signIn = document.getElementById('signIn')
const a = Array.from(document.querySelectorAll('a'))

a.forEach(n => {
    n.setAttribute('target', '_blank')
})

const popups = Array.from(document.querySelectorAll('.popup'))
const closePopups = Array.from(document.querySelectorAll('.closePopup'))

about.style.display = 'none'
contact.style.display = 'none'
signIn.style.display = 'none'

aboutButton.addEventListener('click', () => {
    about.style.display = 'flex'
})
contactButton.addEventListener('click', () => {
    contact.style.display = 'flex'
})
signInButton.addEventListener('click', () => {
    signIn.style.display = 'flex'
})

closePopups.forEach(n => {
    n.addEventListener('click', e => {
        popups.forEach(n => {
            n.style.display = 'none'
        })
    })
})

document.addEventListener('click', e => {
    const elements = [about, contact, signIn]
    if (elements.some(element => element.style.display === 'flex')) {
        const contents = Array.from(document.querySelectorAll('.content'));
        if (!contents.some(content => content.contains(e.target)) && elements.some(element => element.contains(e.target))) {
            elements.forEach(element => {
                element.style.display = 'none';
            })
        }
    }
})