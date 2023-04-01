const pageHtml = document.getElementById('pageHtml');
const pageCss = document.getElementById('pageCss');
const pageJs = document.getElementById('pageJs');

let currentColor = new Array(2);
currentColor[0] = 0;
currentColor[1] = 0;
currentColor[2] = 0;

pageHtml.addEventListener('mouseover', function() {
    if (currentColor[0] % 2 == 0) {
        pageHtml.style.backgroundColor = '#FFB703';
    }
    else {
        pageHtml.style.backgroundColor = '#219EBC';
    }
});

pageHtml.addEventListener('mouseout', function() {
    pageHtml.style.backgroundColor = '#fb8500';
    currentColor[0]++;
});

pageCss.addEventListener('mouseover', function() {
    if (currentColor[1] % 2 == 0) {
        pageCss.style.backgroundColor = '#FFB703';
    }
    else {
        pageCss.style.backgroundColor = '#219EBC';
    }
});

pageCss.addEventListener('mouseout', function() {
    pageCss.style.backgroundColor = '#fb8500';
    currentColor[1]++;
});

pageJs.addEventListener('mouseover', function() {
    if (currentColor[2] % 2 == 0) {
        pageJs.style.backgroundColor = '#FFB703';
    }
    else {
        pageJs.style.backgroundColor = '#219EBC';
    }
});

pageJs.addEventListener('mouseout', function() {
    pageJs.style.backgroundColor = '#fb8500';
    currentColor[2]++;
});