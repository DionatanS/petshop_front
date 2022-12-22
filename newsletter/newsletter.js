    function closeModal(){
        document.getElementById('modal').style.display = "none"
    }
    
    function validEmail(email) {
        return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email)
    }
    
    function enableButton() {
        inputEmail = document.getElementById('input-nesletter').value;
        if ((validEmail(inputEmail))) {
            document.getElementById('btn-newsletter').removeAttribute('disabled')     
        } else {
            document.getElementById('btn-newsletter').setAttribute('disabled', 'disabled')
        }
    }
    
    function register(){
        var newEmailNesletter = document.getElementById('input-nesletter').value
        window.sessionStorage.setItem('newEmailNesletter', newEmailNesletter);
        document.getElementById('alert').style.display = "flex"
    }



