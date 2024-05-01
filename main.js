function animateClouds() {
    const bottomCloud = document.getElementById('bottom-cloud');
    const topCloud = document.getElementById('top-cloud');
    const mountain = document.getElementById('mountain');
    const scrollOffset = window.pageYOffset;

    bottomCloud.style.left = `${15 + scrollOffset / 30}%`;
    topCloud.style.left = `${75 + scrollOffset / 30}%`;
    mountain.style.top = `${41 + scrollOffset / 10}%`;
}

function animateSkills() {
    const skills = document.querySelector('.skills');
    const skillsTop = skills.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY || window.pageYOffset;

    if (skillsTop < windowHeight && skillsTop + skills.offsetHeight > 0) {
        skills.classList.add('animate');
    } else {
        skills.classList.remove('animate');
    }
}

function animateProfile() {
    const profile = document.querySelector('.profile');
    const profileTop = profile.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY || window.pageYOffset;

    if (profileTop < windowHeight && profileTop + profile.offsetHeight > 0) {
        profile.classList.add('animate');
    } else {
        profile.classList.remove('animate');
    }
}

function animateProjects(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}

const projectsObserver = new IntersectionObserver(animateProjects);

document.addEventListener('DOMContentLoaded', () => {
    const x = window.matchMedia("(max-width: 1050px)");

    x.addListener(() => {
        if (x.matches) {
            window.addEventListener('scroll', animateClouds);
        } else {
            window.removeEventListener('scroll', animateClouds);
        }
    });

    window.addEventListener('scroll', () => {
        animateSkills();
        animateProfile();
    });

    const projects = document.querySelectorAll('.project1, .project2, .project3, .project4, .project5');
    projects.forEach(project => {
        projectsObserver.observe(project);
    });
});















