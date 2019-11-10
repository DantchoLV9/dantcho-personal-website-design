document.addEventListener('DOMContentLoaded', (event) => {

    ((localStorage.getItem('projectsLayout') || 'grid') === 'grid') ? 
    
    document.querySelector('#projects-layout-icon').classList.add('fa-th-list') &
    document.querySelectorAll('.project').forEach((element) => {

        element.classList.replace('project-list', 'project-grid');
        document.querySelector('.projects-area').classList.add('grid');

    })

    :

    document.querySelector('#projects-layout-icon').classList.add('fa-th');
    
});

const changeLayout = () => {

    const layoutButton = document.querySelector('.layout-button');
    const projectElements = document.querySelectorAll('.project');
    const layoutButtonIcon = document.querySelector('.fa-th');
    const projectsArea = document.querySelector('.projects-area');

    layoutButton.addEventListener('click', ()=> {

        projectElements.forEach((element) => {

            if (element.classList.contains('project-list')) {

                element.classList.replace('project-list', 'project-grid');
                layoutButtonIcon.classList.replace('fa-th', 'fa-th-list')
                projectsArea.classList.add('grid');
                localStorage.setItem('projectsLayout', 'grid');

            }
            else if (element.classList.contains('project-grid')) {

                element.classList.replace('project-grid', 'project-list');
                layoutButtonIcon.classList.replace('fa-th-list', 'fa-th')
                projectsArea.classList.remove('grid');
                localStorage.setItem('projectsLayout', 'list');

            }

        });

    });

}

changeLayout();