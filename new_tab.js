let query = document.getElementById('search-bar');

document.addEventListener('keydown', (event) => {
    if (event.code == 'Enter') {
        if (enable()) {
            search();
        }
        clear();
    }
});

function enable() {
    if (query.value <= 0) {
        return false;
    }
    return true;
}

function search() {
    let url = 'https://duckduckgo.com/?q=' + query.value;
    window.open(url, "_SELF");
}

function clear() {
    return query.value = '';
}

let applications = document.getElementById('applications');
let applications_menu = document.getElementById('applications-menu');

applications.addEventListener('click', () => {
    if (applications_menu.style.display == 'flex') {
        applications_menu.style.display = 'none';
    } else {
        applications_menu.style.display = 'flex';
        applications_menu.style.flexDirection = 'column';    
    }
});

