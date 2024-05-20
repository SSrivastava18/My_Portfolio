let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll  = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height =  sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            
        };
    });


let header = document.querySelector('header');
header.classList.toggle('sticky',window.scrollY > 100);

menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');

};

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,

});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'button' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });


const typed = new Typed('.multiple-text',{
    strings: ['Frontend Developer.', 'Web Designer.', 'Python Developer.'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,

});

// function sendEmail(){
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "saurabh18srivastava1@gmail.com",
//         Password : "perfectsrivastava1",
//         To : 'saurabh18srivastava1@gamil.com',
//         From : "saurabh18srivastava1@gamil.com",
//         Subject : "New contact Form Enquiry",
//         Body : "Name: " + document.getElementById("name").value
//         + "<br> Email:"+ document.getElementById("email").value
//         + "<br> Phone-number:"+ document.getElementById("phone-number").value
//         + "<br> Message:"+ document.getElementById("Message").value


//     }).then(
//       message => alert("Message Sent Successfully")
//     );
    
// }

// FormData.addEventListener("submit", (e) =>{
//     e.preventDefault();

//     sendEmail();

// });


// function Send() {
//     console.log("function call");

//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "saurabh18srivastava1@gmail.com",
//         Password : "1235705786C0979C428CA64306D5E73E060A",
//         To : 'saurabh18srivastava1@gmail.com',
//         From : "saurabh18srivastava1@gmail.com",
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
    
    
// }

function sendMail(){
    let parms = {
        Full_Name : document.getElementById("name").Value,
        Email_Subject: document.getElementById("emailsubject").Value,
        Phone_number: document.getElementById("phonenumber").value,
        message: document.getElementById("message").value,
        Email_Address: document.getElementById("email").value,
    }
    emailjs.send("service_yom4dbk", "template_m0uh6xl",parms).then(alert("email sent successfully!!!"))

}

