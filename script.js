let home = document.getElementById('home');
home.onclick = function() {
    document.getElementById('fixed-content').style.display = 'block';
    document.getElementById('content-aboutMe').style.display = 'none';
    document.getElementById('content-study').style.display = 'none';
    document.getElementById('content-life').style.display = 'none';
    document.getElementById('wrapper').style.display = 'none';

    aboutMe = document.getElementById('aboutMe');
    study = document.getElementById('study');
    life = document.getElementById('life');

    aboutMe.style.border = 'none';
    study.style.border = 'none';
    life.style.border = 'none';

    aboutMe.style.fontStyle = 'normal';
    aboutMe.style.fontWeight = 'normal';
    study.style.fontStyle = 'normal';
    study.style.fontWeight = 'normal';
    life.style.fontStyle = 'normal';
    life.style.fontWeight = 'normal';
};

let aboutMe = document.getElementById('aboutMe');
aboutMe.onclick = function() {
    document.getElementById('fixed-content').style.display = 'block';

    document.getElementById('content-aboutMe').style.display = 'block';
    document.getElementById('content-study').style.display = 'none';
    document.getElementById('wrapper').style.display = 'block';
    contentLife = document.getElementById('content-life').style.display = 'none';
    
    this.style.borderBottom = '2px solid green';

    study = document.getElementById('study');
    life = document.getElementById('life');

    study.style.border = 'none';
    life.style.border = 'none';

    aboutMe.style.fontStyle = 'italic';
    aboutMe.style.fontWeight = 'bold';
    study.style.fontStyle = 'normal';
    study.style.fontWeight = 'normal';
    life.style.fontStyle = 'normal';
    life.style.fontWeight = 'normal';
};

let study = document.getElementById('study');
study.onclick = function() {
    document.getElementById('fixed-content').style.display = 'none';

    document.getElementById('content-study').style.display = 'block';
    document.getElementById('content-aboutMe').style.display = 'none';
    document.getElementById('content-life').style.display = 'none';
    document.getElementById('wrapper').style.display = 'block';

    this.style.borderBottom = '2px solid green';

    aboutMe = document.getElementById('aboutMe');
    life = document.getElementById('life');

    aboutMe.style.border = 'none';
    life.style.border = 'none';

    study.style.fontStyle = 'italic';
    study.style.fontWeight = 'bold';
    aboutMe.style.fontStyle = 'normal';
    aboutMe.style.fontWeight = 'normal';
    life.style.fontStyle = 'normal';
    life.style.fontWeight = 'normal';
};

let life = document.getElementById('life');
life.onclick = function() {
    document.getElementById('fixed-content').style.display = 'none';

    document.getElementById('content-life').style.display = 'block';
    document.getElementById('content-aboutMe').style.display = 'none';
    document.getElementById('content-study').style.display = 'none';
    document.getElementById('wrapper').style.display = 'block';

    this.style.borderBottom = '2px solid green';

    aboutMe = document.getElementById('aboutMe');
    study = document.getElementById('study');

    aboutMe.style.border = 'none';
    study.style.border = 'none';

    life.style.fontStyle = 'italic';
    life.style.fontWeight = 'bold';
    aboutMe.style.fontStyle = 'normal';
    aboutMe.style.fontWeight = 'normal';
    study.style.fontStyle = 'normal';
    study.style.fontWeight = 'normal';
};