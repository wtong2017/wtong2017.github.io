// JavaScript code to handle search functionality for publications and projects sections

document.addEventListener("DOMContentLoaded", function() {
    const searchBox = document.getElementById('searchBox');
    const publications = document.querySelectorAll('#publications .row.pb-3');
    const projects = document.querySelectorAll('#projects .row.pb-3');

    searchBox.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();

        // Filter publications
        publications.forEach(function(publication) {
            const title = publication.querySelector('a').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                publication.style.display = '';
            } else {
                publication.style.display = 'none';
            }
        });

        // Filter projects
        projects.forEach(function(project) {
            const title = project.querySelector('h4').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                project.style.display = '';
            } else {
                project.style.display = 'none';
            }
        });
    });
});
