const mess = document.querySelector('.validmail');
const errormess = document.querySelector('.erroricon');

function validateform(){
    let x = document.forms["myform"]["email"].value;
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(x.match(mailformat)){
        document.myform.email.focus();
        mess.classList.remove('active');
        errormess.classList.remove('active');
        return true;
    }else{
        mess.classList.add('active');
        errormess.classList.add('active');
        return false;
    }
}

