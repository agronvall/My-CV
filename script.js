// Initialize particles.js
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 60,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": ["#ffffff", "#99f2c8"]
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false
        },
        "size": {
            "value": 3,
            "random": true
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        },
        "modes": {
            "repulse": {
                "distance": 100,
                "duration": 0.4
            }
        }
    },
    "retina_detect": true
});

// Select the card element
const card = document.querySelector('.card');

// Data object containing all CV information
const data = {
    name: "Anton Grönvall",
    title: "Supervisor / Project Leader / System Integrator",
    profilePic: "image.png", // Ensure this matches the uploaded image file
    contact: [
        "Telefon: 070-715 26 33",
        `E-post: <a href="mailto:anton.mikael.gronvall@outlook.com">anton.mikael.gronvall@outlook.com</a>`,
        `LinkedIn: <a href="https://se.linkedin.com/in/per-anton-mikael-gr%C3%B6nvall-814b78128" target="_blank">linkedin.com/in/anton-gronvall</a>`,
        "Plats: Gothenburg, Mölndal 431 67",
        "Födelsedatum: 1993-07-30",
        "Nationalitet: Svensk"
    ],
    aboutMe: `Jag är en passionerad tekniker som på min fritid bygger AI-modeller och olika program för att både lära mig och utveckla unika lösningar. Ni är välkomna att besöka min LinkedIn-sida där ni kan se en digital tvilling jag har byggt med hjälp av offentliga API
och metadata från kameror och sensorer—ett bevis på min entusiasm.

Det jag arbetar med nu, och vill fortsätta med, är att sälja, projektera och bygga avancerade CCTV-system, främst med Milestone, för att lösa slutanvändarens problem oavsett vad de är. Detta är något jag verkligen brinner för. När det kommer stora mjukvaruuppdateringar till de enheter vi jobbar med har jag ofta experimenterat med dem långt innan release och kan använda API
utan och innan. Tack vare min djupa kunskap om API
och hur man integrerar dem för att lösa problem bortom standardkonfiguration, har vi idag nästan inga begränsningar i de lösningar vi erbjuder kunderna.

Jag vill helst fortsätta arbeta i linje med det jag redan gör idag och har som personligt mål att kunna kalla mig Sveriges bästa kameratekniker/integratör. Jag tycker även att passersystem är intressanta och har byggt flera innovativa lösningar för registreringsskyltavläsning och QR-kodsbaserade passagekontroller åt kunder.`,
    experience: [
        {
            position: "Supervisor",
            company: "Safeteam AB",
            duration: "Sep 2022 - Present",
            location: "Göteborg, Västra Götaland",
            responsibilities: [
                "Ansvarig för projektledning, försäljning och upphandling, övervakar hela processen för servrar, nätverk och CCTV IP-kameralösningar, inklusive samordning med säljare för produktupphandling.",
                "Hantera och underhålla servrar, nätverk och CCTV IP-kameror, implementera redundanta system och integrera dem i operatörssystem för förbättrad funktionalitet, säkerhet och oavbruten drift.",
                "Underlättade ärendehantering, felsökning av server-, nätverks- och CCTV IP-kamerasystem, samarbetar med tillverkare för omfattande support, licensiering och problemlösning.",
                "Skicklig på att effektivt planera och samordna teamets arbetsdagar, optimera resursallokering och uppgiftsfördelning för maximal produktivitet.",
                "Engagerar sig i personliga projekt under fritiden, utforskar AI, datavisualisering och utvecklar för närvarande MQTT-baserad datavisualisering för AI-objektklassificering i IP-kameror inom AWS."
            ]
        },
        // Add other experience items as needed
    ],
    education: [
        {
            degree: "Gymnasieexamen",
            institution: "Aranäs Gymnasiet",
            year: "Jun 2012",
            location: "Kungsbacka"
        },
        {
            degree: "High School Diploma",
            institution: "Oakdale High School",
            year: "Jun 2011",
            location: "Oakdale, California"
        }
    ],
    languages: [
        { language: "Svenska", proficiency: "Modersmål" },
        { language: "Engelska", proficiency: "Flytande" }
    ],
    skills: [
        "Server-, nätverks- och CCTV-hantering",
        "Felsökning och problemlösning",
        "Projektledning och samordning",
        "Samarbete och kommunikation",
        "Planering och resursallokering",
        "Upphandling och leverantörshantering",
        "GDPR-efterlevnad och dataskydd"
    ],
    certifications: [
        "Behörig Ingenjör Kamerabevakning"
    ]
};

// Build the CV content
const createCV = (data) => {
    // Header
    const header = document.createElement('header');
    const profilePic = document.createElement('img');
    profilePic.src = data.profilePic;
    profilePic.alt = `${data.name} Profile Picture`;
    profilePic.classList.add('profile-pic');
    const name = document.createElement('h1');
    name.textContent = data.name;
    const title = document.createElement('h3');
    title.textContent = data.title;
    header.appendChild(profilePic);
    header.appendChild(name);
    header.appendChild(title);

    // Contact Info
    const contactContent = document.createElement('div');
    const contactList = document.createElement('ul');
    data.contact.forEach(info => {
        const li = document.createElement('li');
        li.innerHTML = info;
        contactList.appendChild(li);
    });
    contactContent.appendChild(contactList);

    // About Me
    const aboutContent = document.createElement('div');
    const aboutText = document.createElement('p');
    aboutText.textContent = data.aboutMe;
    aboutContent.appendChild(aboutText);

    // Experience
    const experienceContent = document.createElement('div');
    data.experience.forEach(job => {
        const jobDiv = document.createElement('div');
        jobDiv.classList.add('experience-item');
        const jobTitle = document.createElement('h3');
        jobTitle.textContent = `${job.position} på ${job.company}`;
        const jobDuration = document.createElement('p');
        jobDuration.textContent = `${job.duration} | ${job.location}`;
        const jobResponsibilities = document.createElement('ul');
        job.responsibilities.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task;
            jobResponsibilities.appendChild(li);
        });
        jobDiv.appendChild(jobTitle);
        jobDiv.appendChild(jobDuration);
        jobDiv.appendChild(jobResponsibilities);
        experienceContent.appendChild(jobDiv);
    });

    // Education
    const educationContent = document.createElement('div');
    data.education.forEach(edu => {
        const eduDiv = document.createElement('div');
        eduDiv.classList.add('education-item');
        const eduDegree = document.createElement('h3');
        eduDegree.textContent = edu.degree;
        const eduDetails = document.createElement('p');
        eduDetails.textContent = `${edu.institution}, ${edu.location} - ${edu.year}`;
        eduDiv.appendChild(eduDegree);
        eduDiv.appendChild(eduDetails);
        educationContent.appendChild(eduDiv);
    });

    // Skills
    const skillsContent = document.createElement('div');
    const skillsList = document.createElement('ul');
    data.skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
    });
    skillsContent.appendChild(skillsList);

    // Languages
    const languagesContent = document.createElement('div');
    const languagesList = document.createElement('ul');
    data.languages.forEach(lang => {
        const li = document.createElement('li');
        li.textContent = `${lang.language} - ${lang.proficiency}`;
        languagesList.appendChild(li);
    });
    languagesContent.appendChild(languagesList);

    // Certifications
    const certificationsContent = document.createElement('div');
    const certificationsList = document.createElement('ul');
    data.certifications.forEach(cert => {
        const li = document.createElement('li');
        li.textContent = cert;
        certificationsList.appendChild(li);
    });
    certificationsContent.appendChild(certificationsList);

    // Function to create collapsible sections with content hidden initially
    const createCollapsibleSection = (headingText, contentElement) => {
        const section = document.createElement('section');
        section.classList.add('section');

        const heading = document.createElement('h2');
        heading.textContent = headingText;
        heading.classList.add('collapsible');

        const content = document.createElement('div');
        content.classList.add('content');
        content.style.display = 'none'; // Hide content initially

        content.appendChild(contentElement);
        section.appendChild(heading);
        section.appendChild(content);

        return section;
    };

    // Use this function to create each section
    const contactSection = createCollapsibleSection('Kontaktinformation', contactContent);
    const aboutSection = createCollapsibleSection('Om Mig', aboutContent);
    const experienceSection = createCollapsibleSection('Erfarenhet', experienceContent);
    const educationSection = createCollapsibleSection('Utbildning', educationContent);
    const skillsSection = createCollapsibleSection('Färdigheter', skillsContent);
    const languagesSection = createCollapsibleSection('Språk', languagesContent);
    const certificationsSection = createCollapsibleSection('Certifieringar', certificationsContent);

    // Append all sections to card
    card.appendChild(header);
    card.appendChild(contactSection);
    card.appendChild(aboutSection);
    card.appendChild(experienceSection);
    card.appendChild(educationSection);
    card.appendChild(skillsSection);
    card.appendChild(languagesSection);
    card.appendChild(certificationsSection);

    // Add Event Listeners for Collapsible Sections with GSAP Animations
    const collapsibleHeadings = document.querySelectorAll('.collapsible');
    collapsibleHeadings.forEach(heading => {
        const content = heading.nextElementSibling;
        gsap.set(content, { maxHeight: 0, autoAlpha: 0, display: 'none' });

        heading.addEventListener('click', () => {
            heading.classList.toggle('active');

            if (heading.classList.contains('active')) {
                gsap.set(content, { display: 'block' });
                gsap.fromTo(content,
                    { maxHeight: 0, autoAlpha: 0 },
                    {
                        maxHeight: 1000,
                        autoAlpha: 1,
                        duration: 0.5,
                        ease: 'power2.out',
                        onComplete: () => {
                            content.style.maxHeight = 'none';
                        }
                    }
                );
            } else {
                gsap.fromTo(content,
                    { maxHeight: content.scrollHeight, autoAlpha: 1 },
                    {
                        maxHeight: 0,
                        autoAlpha: 0,
                        duration: 0.5,
                        ease: 'power2.in',
                        onComplete: () => {
                            gsap.set(content, { display: 'none' });
                        }
                    }
                );
            }
        });
    });

    // Initial Animations using GSAP
    gsap.fromTo('.profile-pic',
        { autoAlpha: 0, scale: 0.5 },
        { autoAlpha: 1, scale: 1, duration: 1, ease: 'back.out(1.7)' }
    );
    gsap.fromTo('h1',
        { autoAlpha: 0, y: -50 },
        { autoAlpha: 1, y: 0, duration: 1, delay: 0.5, ease: 'power2.out' }
    );
    gsap.fromTo('h3',
        { autoAlpha: 0, y: -50 },
        { autoAlpha: 1, y: 0, duration: 1, delay: 0.7, ease: 'power2.out' }
    );
    gsap.fromTo('.collapsible',
        { autoAlpha: 0, y: 50 },
        { autoAlpha: 1, y: 0, duration: 1, delay: 0.9, stagger: 0.2, ease: 'power2.out' }
    );
};

// Ensure DOM is fully loaded before running script
document.addEventListener('DOMContentLoaded', () => {
    createCV(data);
});
