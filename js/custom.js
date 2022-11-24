// Hamburger toggle

$(document).ready(function () {
    $('.hamburgur-menu-toggle').click(function () {
        $('.hamburgur-menu-toggle').toggleClass('active')
        // $('nav').toggleClass('active')
    })
})

// Dark/ Light theme

// Get neccessary elements and initialization
const themeButton = document.getElementById('theme-button');
const iconButton = document.getElementById('icon');
const darkTheme = 'dark-theme';
const iconTheme = 'fa-sun';

// Selected theme
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


// Validate current theme
getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'moon' : 'sun'


// Validate if a user selected a theme previously
// if (selectedTheme) {
//     document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
//     themeButton.classList[selectedIcon === 'moon' ? 'add' : 'remove'](iconTheme)
// } else {

// }

// Actvate theme change
themeButton.addEventListener('click', () => {
    $(document).ready(function () {
        document.body.classList.toggle(darkTheme)
        $('.dark-light-mode').toggleClass('active')



        $('.change-theme').click(function () {
            $('.change-theme').toggleClass('active')
        })
    });
    // iconButton.classList.toggle(iconTheme)
    // current icon that user chose
    localStorage.setItem('selected-theme', getCurrentTheme)
    localStorage.setItem('selected-icon', getCurrentIcon)
})

// Hamburger Menu

const ham_menu_btn = document.querySelector('.hamburger-menu-btn');
const ham_menu = document.querySelector('.navigation-menu');
const navigation = document.querySelector('.navigation-menu-nav');
const navigation_description = document.querySelector('.navigation-menu-description');
const navigation_items = document.querySelectorAll('.navigation-item');
const portfolioWrap = document.querySelector('.portfolio-wrapper');

// Initial State of Menu
let showMenu = false;

ham_menu_btn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        ham_menu_btn.classList.add('close');
        ham_menu.classList.add('show');
        navigation.classList.add('show');
        navigation_description.classList.add('show');
        navigation_items.forEach(item => item.classList.add('show'));
        portfolioWrap.classList.add('hide-section');
        // Set menu state
        showMenu = true;

    } else {
        ham_menu_btn.classList.remove('close');
        ham_menu.classList.remove('show');
        navigation.classList.remove('show');
        navigation_description.classList.remove('show');
        navigation_items.forEach(item => item.classList.remove('show'));
        portfolioWrap.classList.remove('hide-section');

        // Set menu state
        showMenu = false;
    }
}

$( ".navigation-item" ).click(function() {
    ham_menu_btn.classList.remove('close');
    ham_menu.classList.remove('show');
    navigation.classList.remove('show');
    navigation_description.classList.remove('show');
    navigation_items.forEach(item => item.classList.remove('show'));
    portfolioWrap.classList.remove('hide-section');

    // Set menu state
    showMenu = false;
});


// var isFullNameValidated = false;
// var isEmailValidated = false;
// var isSubjectValidated = false;
// var isMessageValidated = false;

// // Contact form Validation

// function validateNameField() {
//     var hasNumber = /\d/;
//     var validNameRegex = /^[0-9a-zA-Z \b]+$/;
//     var nameValueEl = document.getElementById('conatact-name');
//     var nameValue = nameValueEl.value;
//     var nameLabelEl = document.getElementById('conatact-name-label');
    
//     if (nameValue == null || nameValue == '') {
//         nameValueEl.style.border = '2px solid red';
//         nameLabelEl.style.color = 'red';
//         nameLabelEl.innerHTML = "Full Name";
//         isFullNameValidated = true;

//     } else if(!nameValue.match(validNameRegex) || hasNumber.test(nameValue)) {
//         nameValueEl.style.border = '2px solid red';
//         nameLabelEl.style.color = 'red';
//         nameLabelEl.innerHTML = "Full Name";
//         isFullNameValidated = true;

//     }
//      else{
//         nameValueEl.style.border = '2px solid #ffbb00';
//         nameLabelEl.style.color = '#ffbb00';
//         nameLabelEl.innerHTML = "<span><i class='bx bxs-check-circle'></i></span> Full Name";
//         isFullNameValidated = false;
//     }

// }

// function validateEmailField() {
//     var validRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//     var emailValueEl = document.getElementById('conatact-email');
//     var emailValue = emailValueEl.value;
//     var emailLabelEl = document.getElementById('conatact-email-label');
    
//     if (emailValue == null || emailValue == '') {
//         emailValueEl.style.border = '2px solid red';
//         emailLabelEl.style.color = 'red';
//         emailLabelEl.innerHTML = "E-Mail";
//         isEmailValidated = true;

//     } else if(!emailValue.match(validRegex)) {
//         emailValueEl.style.border = '2px solid red';
//         emailLabelEl.style.color = 'red';
//         emailLabelEl.innerHTML = "E-Mail";
//         isEmailValidated = true;

//     } else{
//         emailValueEl.style.border = '2px solid #ffbb00';
//         emailLabelEl.style.color = '#ffbb00';
//         emailLabelEl.innerHTML = "<span><i class='bx bxs-check-circle'></i></span> E-Mail";
//         isEmailValidated = false;
//     }
//     // alert("E-mail Field Validation"); 
// }

// function validateSubjectField() {
//     var validateNumber = /\d/;
//     var validSubjectRegex = /^[0-9a-zA-Z \b]+$/;
//     var subjectValueEl = document.getElementById('conatact-subject');
//     var subjectValue = subjectValueEl.value;
//     var subjectLabelEl = document.getElementById('conatact-subject-label');
    
//     if (subjectValue == null || subjectValue == '') {
//         subjectValueEl.style.border = '2px solid red';
//         subjectLabelEl.style.color = 'red';
//         subjectLabelEl.innerHTML = "Subject";
//         isSubjectValidated = true;

//     } else if(!subjectValue.match(validSubjectRegex) || validateNumber.test(subjectValue)) {
//         subjectValueEl.style.border = '2px solid red';
//         subjectLabelEl.style.color = 'red';
//         subjectLabelEl.innerHTML = "Subject";
//         isSubjectValidated = true;

//     }
//      else{
//         subjectValueEl.style.border = '2px solid #ffbb00';
//         subjectLabelEl.style.color = '#ffbb00';
//         subjectLabelEl.innerHTML = "<span><i class='bx bxs-check-circle'></i></span> Subject";
//         isSubjectValidated = false;
//     }
// }

// function validateMessageField() {
    
//     var messageValueEl = document.getElementById('conatact-message');
//     var messageValue = messageValueEl.value;
//     var messageLabelEl = document.getElementById('conatact-message-label');
    
//     if (messageValue == null || messageValue == '') {
//         messageValueEl.style.border = '2px solid red';
//         messageLabelEl.style.color = 'red';
//         messageLabelEl.innerHTML = "Message - ( Charcter count - "+messageValue.length+" / 160 )";
//         isMessageValidated = true;

//     } else if(messageValue.length > 160) {
//         messageValueEl.style.border = '2px solid red';
//         messageLabelEl.style.color = 'red';
//         messageLabelEl.innerHTML = "Message - ( Charcter limit Exceeded : "+messageValue.length+" / 160 )";
//         isMessageValidated = true;

//     }
//      else{
//         messageValueEl.style.border = '2px solid #ffbb00';
//         messageLabelEl.style.color = '#ffbb00';
//         messageLabelEl.innerHTML = "<span><i class='bx bxs-check-circle'></i></span> Message - ( Charcter count - "+messageValue.length+" / 160 )";
//         isMessageValidated = false;
//     }

// }

// function clearForm() {
//     var name = document.getElementById('conatact-name');
//     var nameLabel = document.getElementById('conatact-name-label');
//     var email = document.getElementById('conatact-email');
//     var emailLabel = document.getElementById('conatact-email-label');
//     var subject = document.getElementById('conatact-subject');
//     var subjectLabel = document.getElementById('conatact-subject-label');
//     var message = document.getElementById('conatact-message');
//     var messageLabel = document.getElementById('conatact-message-label');

//     // Name Input
//     name.style.border = '2px solid #fff';
//     nameLabel.innerHTML = 'Full Name';
//     nameLabel.style.color = '#fff';

//     // E-Mail Input
//     email.style.border = '2px solid #fff';
//     emailLabel.innerHTML = 'E-Mail';
//     emailLabel.style.color = '#fff';

//     // Subject Input
//     subject.style.border = '2px solid #fff';
//     subjectLabel.innerHTML = 'Subject';
//     subjectLabel.style.color = '#fff';

//     // Message Input
//     message.style.border = '2px solid #fff';
//     messageLabel.innerHTML = 'Message';
//     messageLabel.style.color = '#fff';

//     isFullNameValidated = false;
//     isEmailValidated = false;
//     isSubjectValidated = false;
//     isMessageValidated = false;

// }

// // Contact Form Submit
// $( "#contact-us" ).submit(function( event ) {
//     event.preventDefault();
//     if (isFullNameValidated == true || isEmailValidated == true || isSubjectValidated == true || isMessageValidated == true) {
//         Swal.fire({
//             title: "<span style='color: #fff;'>Oops! Sorry</span>",
//             text: "Seems like some of entered details are incorrect/ invalid!",
//             iconHtml: "<i style='color:red;' class='bx bxs-x-circle' ></i>",
//             iconColor: "red",
//             background: 'rgb(24, 21, 21)',
//             customClass: {
//                 container: 'custom-swal-container',
//                 icon: "sweet_error_alert",
//                 confirmButton: "custom_sweet_alert_confirm_btn",
//             },
//             showClass: {
//                 popup: 'animate__animated animate__fadeIn'
//               },
//             hideClass: {
//                 popup: 'animate__animated animate__fadeOut'
//             },
//           });
        
//     } else {
//         Swal.fire({
//             title: "<span style='color: #fff;'>Thank you!</span>",
//             text: 'Your request submitted successfully!',
//             iconHtml: "<i style='color:#ffbb00;' class='bx bxs-check-circle' ></i>",
//             iconColor: "#ffbb00",
//             background: 'rgb(24, 21, 21)',
//             customClass: {
//                 icon: "sweet_success_alert",
//                 confirmButton: "custom_sweet_alert_confirm_btn",
//             },
//             showClass: {
//                 popup: 'animate__animated animate__fadeIn'
//               },
//             hideClass: {
//                 popup: 'animate__animated animate__fadeOut'
//             },
//           }).then((result) => {
//             if (result.isConfirmed) {
//                 // Reset the form
//                 document.getElementById('contact-us').reset();
//                 clearForm();
//             }
//           });
//         // $("#contact-us").submit();
//     }
// });



