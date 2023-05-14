function setColorMode(colorMode) {
    localStorage.setItem('colorMode', colorMode);

    if (colorMode === 'light') {
        document.body.style.backgroundColor = 'white';

        document.getElementById('project1').className = 'card text-bg-light mb3';
        document.getElementById('project2').className = 'card text-bg-light mb3';
        document.getElementById('project3').className = 'card text-bg-light mb3';
        document.getElementById('btn-dark').checked = false;
        document.getElementById('btn-light').checked = true;

    } else {
        document.body.style.backgroundColor = '#28282B';

        document.getElementById('project1').className = 'card text-bg-dark mb3';
        document.getElementById('project2').className = 'card text-bg-dark mb3';
        document.getElementById('project3').className = 'card text-bg-dark mb3';

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
