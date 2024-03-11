const showing_option = () => {
    user_id = localStorage.getItem('user_id');
    console.log(user_id);
    if (user_id) {
        document.getElementById('Fashion').style.display = 'block';
        document.getElementById('Electronic').style.display = 'block';
        document.getElementById('Jewellery').style.display = 'block';
        document.getElementById('Log_Out').style.display = 'block';
        document.getElementById('profile').style.display = 'block';
        document.getElementById('Sign_Up').style.display = 'none';
        document.getElementById('Login').style.display = 'none';
    } 
    else {
        document.getElementById('Fashion').style.display = 'none';
        document.getElementById('Electronic').style.display = 'none';
        document.getElementById('Jewellery').style.display = 'none';
        document.getElementById('Log_Out').style.display = 'none';
        document.getElementById('profile').style.display = 'none';
        document.getElementById('Sign_Up').style.display = 'block';
        document.getElementById('Login').style.display = 'block';
    }
}

showing_option()

