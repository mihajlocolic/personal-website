function setColorMode(colorMode) {
    localStorage.setItem('colorMode', colorMode);

    if (colorMode === 'light') {
        document.body.style.backgroundColor = 'white';
        var text = document.querySelectorAll(".container p");
        for (let i = 0; i < text.length; i++) {
            const element = text[i];
            element.style.color = 'black';
        }

        document.getElementById('email-icon').src = '../images/email.svg';
        document.getElementById('discord-icon').src = '../images/discord.svg';
        document.getElementById('btn-dark').checked = false;
        document.getElementById('btn-light').checked = true;

    } else {
        document.body.style.backgroundColor = '#28282B';
        var text = document.querySelectorAll(".container p");
        for (let i = 0; i < text.length; i++) {
            const element = text[i];
            element.style.color = 'white';
        }

        document.getElementById('email-icon').src = '../images/email-white.svg';
        document.getElementById('discord-icon').src = '../images/discord-white.svg';
        document.getElementById('btn-dark').checked = true;
        document.getElementById('btn-light').checked = false;
    }
}

window.addEventListener('load', function() {
    var colorMode = localStorage.getItem('colorMode') || 'light';
    setColorMode(colorMode);
    document.body.style.visibility = 'visible';
});


document.getElementById('color-mode').addEventListener('click', function() {
    var p = document.createElement("p");
    if (event.target.id === 'btn-light') {
        setColorMode('light');
    } else if (event.target.id === 'btn-dark') {
        setColorMode('dark');
    }
  });
