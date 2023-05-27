const toggleSwitch = document.getElementById('mode-toggle');

toggleSwitch.addEventListener('change', switchTheme, false);

function switchTheme() {
    if (toggleSwitch.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}