// const firebaseConfig = {
//     apiKey: "AIzaSyAkzs4CPoLTH9cla_5V3hf4M2CA2wgBzvE",
//     authDomain: "my-portfolio-b27e1.firebaseapp.com",
//     projectId: "my-portfolio-b27e1",
//     storageBucket: "my-portfolio-b27e1.appspot.com",
//     messagingSenderId: "556305719265",
//     appId: "1:556305719265:web:7e3abf5158c506d2b8fca0",
//     measurementId: "G-57Y8MJK063"
//   };

// firebase.initializeApp(firebaseConfig);

// Messages Collection
// var msgRefs = firebase.database().ref('contact-messages');

var isFullNameValidated = false;
var isEmailValidated = false;
var isSubjectValidated = false;
var isMessageValidated = false;

// Contact form Validation

function validateNameField() {
    var hasNumber = /\d/;
    var validNameRegex = /^[0-9a-zA-Z \b]+$/;
    var nameValueEl = document.getElementById('conatact-name');
    var nameValue = nameValueEl.value;
    var nameLabelEl = document.getElementById('conatact-name-label');
    
    if (nameValue == null || nameValue == '') {
        nameValueEl.style.border = '2px solid red';
        nameLabelEl.style.color = 'red';
        nameLabelEl.innerHTML = "Full Name";
        isFullNameValidated = true;

    } else if(!nameValue.match(validNameRegex) || hasNumber.test(nameValue)) {
        nameValueEl.style.border = '2px solid red';
        nameLabelEl.style.color = 'red';
        nameLabelEl.innerHTML = "Full Name";
        isFullNameValidated = true;

    }
    else{
        nameValueEl.style.border = '2px solid #ffbb00';
        nameLabelEl.style.color = '#ffbb00';
        nameLabelEl.innerHTML = "<span><i class='bx bxs-check-circle'></i></span> Full Name";
        isFullNameValidated = false;
    }

}

function validateEmailField() {
    var validRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var emailValueEl = document.getElementById('conatact-email');
    var emailValue = emailValueEl.value;
    var emailLabelEl = document.getElementById('conatact-email-label');
    
    if (emailValue == null || emailValue == '') {
        emailValueEl.style.border = '2px solid red';
        emailLabelEl.style.color = 'red';
        emailLabelEl.innerHTML = "E-Mail";
        isEmailValidated = true;

    } else if(!emailValue.match(validRegex)) {
        emailValueEl.style.border = '2px solid red';
        emailLabelEl.style.color = 'red';
        emailLabelEl.innerHTML = "E-Mail";
        isEmailValidated = true;

    } else{
        emailValueEl.style.border = '2px solid #ffbb00';
        emailLabelEl.style.color = '#ffbb00';
        emailLabelEl.innerHTML = "<span><i class='bx bxs-check-circle'></i></span> E-Mail";
        isEmailValidated = false;
    }
    // alert("E-mail Field Validation"); 
}

function validateSubjectField() {
    var validateNumber = /\d/;
    var validSubjectRegex = /^[0-9a-zA-Z \b]+$/;
    var subjectValueEl = document.getElementById('conatact-subject');
    var subjectValue = subjectValueEl.value;
    var subjectLabelEl = document.getElementById('conatact-subject-label');
    
    if (subjectValue == null || subjectValue == '') {
        subjectValueEl.style.border = '2px solid red';
        subjectLabelEl.style.color = 'red';
        subjectLabelEl.innerHTML = "Subject";
        isSubjectValidated = true;

    } else if(!subjectValue.match(validSubjectRegex) || validateNumber.test(subjectValue)) {
        subjectValueEl.style.border = '2px solid red';
        subjectLabelEl.style.color = 'red';
        subjectLabelEl.innerHTML = "Subject";
        isSubjectValidated = true;

    }
    else{
        subjectValueEl.style.border = '2px solid #ffbb00';
        subjectLabelEl.style.color = '#ffbb00';
        subjectLabelEl.innerHTML = "<span><i class='bx bxs-check-circle'></i></span> Subject";
        isSubjectValidated = false;
    }
}

function validateMessageField() {
    
    var messageValueEl = document.getElementById('conatact-message');
    var messageValue = messageValueEl.value;
    var messageLabelEl = document.getElementById('conatact-message-label');
    
    if (messageValue == null || messageValue == '') {
        messageValueEl.style.border = '2px solid red';
        messageLabelEl.style.color = 'red';
        messageLabelEl.innerHTML = "Message - ( Charcter count - "+messageValue.length+" / 160 )";
        isMessageValidated = true;

    } else if(messageValue.length > 160) {
        messageValueEl.style.border = '2px solid red';
        messageLabelEl.style.color = 'red';
        messageLabelEl.innerHTML = "Message - ( Charcter limit Exceeded : "+messageValue.length+" / 160 )";
        isMessageValidated = true;

    }
    else{
        messageValueEl.style.border = '2px solid #ffbb00';
        messageLabelEl.style.color = '#ffbb00';
        messageLabelEl.innerHTML = "<span><i class='bx bxs-check-circle'></i></span> Message - ( Charcter count - "+messageValue.length+" / 160 )";
        isMessageValidated = false;
    }

}

function clearForm() {
    var name = document.getElementById('conatact-name');
    var nameLabel = document.getElementById('conatact-name-label');
    var email = document.getElementById('conatact-email');
    var emailLabel = document.getElementById('conatact-email-label');
    var subject = document.getElementById('conatact-subject');
    var subjectLabel = document.getElementById('conatact-subject-label');
    var message = document.getElementById('conatact-message');
    var messageLabel = document.getElementById('conatact-message-label');

    // Name Input
    name.style.border = '2px solid #fff';
    nameLabel.innerHTML = 'Full Name';
    nameLabel.style.color = '#fff';

    // E-Mail Input
    email.style.border = '2px solid #fff';
    emailLabel.innerHTML = 'E-Mail';
    emailLabel.style.color = '#fff';

    // Subject Input
    subject.style.border = '2px solid #fff';
    subjectLabel.innerHTML = 'Subject';
    subjectLabel.style.color = '#fff';

    // Message Input
    message.style.border = '2px solid #fff';
    messageLabel.innerHTML = 'Message';
    messageLabel.style.color = '#fff';

    isFullNameValidated = false;
    isEmailValidated = false;
    isSubjectValidated = false;
    isMessageValidated = false;

}

// Contact Form Submit
$( "#contact-us" ).submit(function( event ) {
    event.preventDefault();

    // Swal.fire({
    //     title: "<span style='color: #fff;'>This section is in under development!</span>",
    //     iconHtml: "<i style='color:red;' class='bx bxs-x-circle' ></i>",
    //     iconColor: "red",
    //     background: 'rgb(24, 21, 21)',
    //     customClass: {
    //         container: 'custom-swal-container',
    //         icon: "sweet_error_alert",
    //         confirmButton: "custom_sweet_alert_confirm_btn",
    //     },
    //     showClass: {
    //         popup: 'animate__animated animate__fadeIn'
    //         },
    //     hideClass: {
    //         popup: 'animate__animated animate__fadeOut'
    //     },
    //     });


    if (isFullNameValidated == true || isEmailValidated == true || isSubjectValidated == true || isMessageValidated == true) {
        Swal.fire({
            title: "<span style='color: #fff;'>Oops! Sorry</span>",
            text: "Seems like some of entered details are incorrect/ invalid!",
            iconHtml: "<i style='color:red;' class='bx bxs-x-circle' ></i>",
            iconColor: "red",
            background: 'rgb(24, 21, 21)',
            customClass: {
                container: 'custom-swal-container',
                icon: "sweet_error_alert",
                confirmButton: "custom_sweet_alert_confirm_btn",
            },
            showClass: {
                popup: 'animate__animated animate__fadeIn'
              },
            hideClass: {
                popup: 'animate__animated animate__fadeOut'
            },
          });
        
    } else {

        // var contactName = document.getElementById('conatact-name').value;
        // var contactEmail = document.getElementById('conatact-email').value;
        // var contactSubject = document.getElementById('conatact-subject').value;
        // var contactMessage = document.getElementById('conatact-message').value;
    
        // try {
            // sendMessage(contactName, contactEmail, contactSubject, contactMessage);

            Swal.fire({
                title: "<span style='color: #fff;'>Thank you!</span>",
                text: 'This feature is in under development. Sorry for the inconvienience.',
                iconHtml: "<i style='color:#ffbb00;' class='bx bxs-check-circle' ></i>",
                iconColor: "#ffbb00",
                background: 'rgb(24, 21, 21)',
                customClass: {
                    icon: "sweet_success_alert",
                    confirmButton: "custom_sweet_alert_confirm_btn",
                },
                showClass: {
                    popup: 'animate__animated animate__fadeIn'
                  },
                hideClass: {
                    popup: 'animate__animated animate__fadeOut'
                },
              }).then((result) => {
                if (result.isConfirmed) {
                    // Reset the form
                    document.getElementById('contact-us').reset();
                    clearForm();
                }
              });

        // } catch (error) {
        //     Swal.fire({
        //     title: "<span style='color: #fff;'>Oops! Sorry</span>",
        //     text: "Something went wrong!",
        //     iconHtml: "<i style='color:red;' class='bx bxs-x-circle' ></i>",
        //     iconColor: "red",
        //     background: 'rgb(24, 21, 21)',
        //     customClass: {
        //         container: 'custom-swal-container',
        //         icon: "sweet_error_alert",
        //         confirmButton: "custom_sweet_alert_confirm_btn",
        //     },
        //     showClass: {
        //         popup: 'animate__animated animate__fadeIn'
        //       },
        //     hideClass: {
        //         popup: 'animate__animated animate__fadeOut'
        //     },
        //   });
        // }
        // $("#contact-us").submit();
    }
});

// function sendMessage(name, email, subject, message) {
//     var newMsgRef = msgRefs.push();
//     newMsgRef.set({
//         full_name : name,
//         email: email,
//         subject: subject,
//         message: message,
//     });
// }

