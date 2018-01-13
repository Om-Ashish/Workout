var Submit = document.getElementById('Submit'),
    Logo = document.getElementById('Logo');
Logo.onmouseover = function () {
    Logo.style.color = '#F44336';
};
Logo.onmouseout = function () {
    Logo.style.color = '#F4F4F4';
};
Submit.onclick = function (e) {
    var Name = document.getElementById('Name'),
        Email = document.getElementById('Email'),
        Error = false;
    if (Name.value.length === 0) {
        alert("You don't have a name?");
        Error = true;
    }
    if (Email.value.length === 0 || !(/^([a-zA-Z0-9_\.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(Email.value))) {
        alert("Gotta have a valid Email ID to subscribe!");
        Error = true;
    }
    if (Error) {
        e.preventDefault();
    } else {
        alert("You have successfully taken the first step towards perfection of your body!");
    }
};