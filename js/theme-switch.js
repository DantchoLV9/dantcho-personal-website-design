document.addEventListener('DOMContentLoaded', (event) => {
    ((localStorage.getItem('themeMode') || 'dark') === 'dark') ? document.querySelector('body').classList.add('dark-background') & document.querySelector('#switch-button').classList.add('fa-sun') : 
    document.querySelector('body').classList.remove('dark-background')
})

function switchTheme() {
    localStorage.setItem('themeMode', (localStorage.getItem('themeMode') || 'dark') === 'dark' ? 'light' : 'dark');
    localStorage.getItem('themeMode') === 'dark' ? document.querySelector('body').classList.add('dark-background') & document.querySelector('#switch-button').classList.add('fa-sun') & document.querySelector('.burger div').classList.add('dark-background') :
    document.querySelector('body').classList.remove('dark-background') & document.querySelector('#switch-button').classList.remove('fa-sun')
}
