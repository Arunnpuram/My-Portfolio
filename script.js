document.addEventListener("DOMContentLoaded", function() {
    const username = 'Arunnpuram';
    const featuredProjects = [
        'DynamicSQLDataExtractor',
        'MinimalWeatherForecast'
    ];

    function createProjectHTML(data) {
        return `
            <div class="featured-project">
                <h3>${data.name}</h3>
                <p>${data.description || 'My Open-source Projects'}</p>
                <p>Stars: ${data.stargazers_count} | Forks: ${data.forks_count}</p>
                <a href="${data.html_url}" target="_blank">View on GitHub</a>
            </div>
        `;
    }

    async function fetchRepositoryDetails(projectName) {
        const response = await fetch(`https://api.github.com/repos/${username}/${projectName}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    }

    function convertCamelCaseToKebabCase(projectName) {
        return projectName
            .replace(/([a-z])([A-Z])/g, '$1-$2') 
            .replace(/([A-Z]{2,})([A-Z][a-z])/g, '$1-$2') 
            .toLowerCase();
    }

    async function fetchAndDisplayProjectDetails(projectName) {
        try {
            const data = await fetchRepositoryDetails(projectName);
            const projectElementId = convertCamelCaseToKebabCase(projectName);
            const projectElement = document.getElementById(projectElementId);
            if (projectElement) {
                projectElement.innerHTML = createProjectHTML(data);
            } else {
                console.warn(`Element with ID "${projectElementId}" not found.`);
            }
        } catch (error) {
            console.error(`Error fetching ${projectName}:`, error);
            const projectElementId = convertCamelCaseToKebabCase(projectName);
            const projectElement = document.getElementById(projectElementId);
            if (projectElement) {
                projectElement.innerHTML = `<p>Error loading ${projectName}. Please try again later.</p>`;
            }
        }
    }

    featuredProjects.forEach(fetchAndDisplayProjectDetails);
});
