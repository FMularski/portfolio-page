(function(){
    const contactSection = document.querySelector('#contact-section');
    const contactForm = document.querySelector('#contact-form');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');
    const sendButton = document.querySelector('#send-btn');
    const token = document.querySelector('input[name="csrfmiddlewaretoken"]');

    contactForm.addEventListener('submit', function(event){
        event.preventDefault();
        sendButton.innerHTML = '<i class="fas fa-spinner"></i>';
        sendButton.style.pointerEvents = 'none';

        $.ajax({
            url: '/send/',
            method: 'POST',
            dataType: 'json',
            headers: {'X-CSRFToken': token.value},
            data: {
                'email': emailInput.value, 
                'message': messageInput.value 
            },
            success: response => {
                sendButton.innerText = 'Send';
                sendButton.style.pointerEvents = 'all';
                emailInput.value = '';
                messageInput.value = '';

                const flashMsg = document.createElement('div');
                flashMsg.classList.add('flash-msg');

                if (response.code == 200) {

                flashMsg.classList.add('success');
                flashMsg.innerHTML = 
                    '<h3><i class="fas fa-check-circle"></i> Success!</h3>' + 
                    '<p>Email sent!</p>';
                } else {
                    flashMsg.classList.add('error');
                    flashMsg.innerHTML = 
                        '<h3><i class="fas fa-exclamation-circle"></i> Error</h3>' +
                        '<p>' + response.errorText + '</p>';
                }


                flashMsg.addEventListener('animationend', () => {

                    setTimeout(() => {
                        flashMsg.style.animation = 'msg-leave 0.5s ease';
                        flashMsg.addEventListener('animationend', () => {
                            flashMsg.remove();
                        })
                    }, 5000);
                });

                contactSection.append(flashMsg);
            }
        });
    })
})();