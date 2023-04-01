const pageHtml = document.getElementById('pageHtml');
const pageCss = document.getElementById('pageCss');
const pageJs = document.getElementById('pageJs');

let currentColorHtml = 0;
let currentColorCss = 0;
let currentColorJs = 0;

pageHtml.addEventListener('mouseover', function() {
    if (currentColorHtml % 2 == 0) {
        pageHtml.style.backgroundColor = '#FFB703';
    }
    else {
        pageHtml.style.backgroundColor = '#219EBC';
    }
    currentColorHtml++;
});

pageHtml.addEventListener('mouseout', function() {
    pageHtml.style.backgroundColor = '#fb8500';
});

pageCss.addEventListener('mouseover', function() {
    if (currentColorCss % 2 == 0) {
        pageCss.style.backgroundColor = '#FFB703';
    }
    else {
        pageCss.style.backgroundColor = '#219EBC';
    }
    currentColorCss++;
});

pageCss.addEventListener('mouseout', function() {
    pageCss.style.backgroundColor = '#fb8500';
});

pageJs.addEventListener('mouseover', function() {
    if (currentColorJs % 2 == 0) {
        pageJs.style.backgroundColor = '#FFB703';
    }
    else {
        pageJs.style.backgroundColor = '#219EBC';
    }
    currentColorJs++;
});

pageJs.addEventListener('mouseout', function() {
    pageJs.style.backgroundColor = '#fb8500';
});
