fetch('cvoce.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Réseau réponse pas OK');
        }
        return response.json();
    })
    .then(data => {
        const cvContainer = document.getElementById('cv-container');

        // Création de la section profil
        const profileDiv = document.createElement('div');
        profileDiv.classList.add('profile');

        const profileImage = document.createElement('img');
        profileImage.src = 'photocv.png'; // Remplacer par la photo de profil si nécessaire
        profileImage.alt = 'Photo de Pattyn Océane';
        profileImage.classList.add('profile-image');

        const personalInfoDiv = document.createElement('div');
        personalInfoDiv.classList.add('personal-info');

        const name = document.createElement('h1');
        name.innerText = data.name;
        const title = document.createElement('h2');
        title.innerText = data.title;
        const description = document.createElement('p');
        description.innerText = data.description;

        personalInfoDiv.appendChild(name);
        personalInfoDiv.appendChild(title);
        personalInfoDiv.appendChild(description);

        profileDiv.appendChild(profileImage);
        profileDiv.appendChild(personalInfoDiv);
        cvContainer.appendChild(profileDiv);

        // Création de la section contact
        const contactDiv = document.createElement('div');
        contactDiv.classList.add('contact-info');
        contactDiv.innerHTML = '<h3>Informations</h3>';
        contactDiv.innerHTML += `<p><strong>Téléphone:</strong> <span>${data.contact.phone}</span></p>`;
        contactDiv.innerHTML += `<p><strong>Email:</strong> <span>${data.contact.email}</span></p>`;
        contactDiv.innerHTML += `<p><strong>Portfolio:</strong> <a href="${data.contact.portfolio}" target="_blank">${data.contact.portfolio}</a></p>`;
        contactDiv.innerHTML += `<p><strong>Adresse principale:</strong> <span>${data.contact.address_primary}</span></p>`;
        contactDiv.innerHTML += `<p><strong>Adresse secondaire:</strong> <span>${data.contact.address_secondary}</span></p>`;
        contactDiv.innerHTML += `<p><strong>Permis:</strong> <span>${data.contact.driver_license}</span></p>`;
        cvContainer.appendChild(contactDiv);

        // Création de la section compétences
        const skillsDiv = document.createElement('div');
        skillsDiv.classList.add('competences');
        skillsDiv.innerHTML = '<h3>Compétences</h3>';
        skillsDiv.innerHTML += `<ul>
            <li>${data.skills.design_tools}</li>
            <li>${data.skills.html_css}</li>
            <li>${data.skills.ui_ux}</li>
            <li>${data.skills.wordpress}</li>
            <li>${data.skills.logo_creation}</li>
            <li>${data.skills.photo_editing}</li>
        </ul>`;
        cvContainer.appendChild(skillsDiv);

        // Création de la section langues
        const languagesDiv = document.createElement('div');
        languagesDiv.classList.add('languages');
        languagesDiv.innerHTML = '<h3>Langues</h3>';
        languagesDiv.innerHTML += `<ul>
            <li><strong>Français:</strong> <span>${data.languages.french}</span></li>
            <li><strong>Anglais:</strong> <span>${data.languages.english}</span></li>
            <li><strong>Néerlandais:</strong> <span>${data.languages.dutch}</span></li>
        </ul>`;
        cvContainer.appendChild(languagesDiv);

        // Création de la section éducation
        const educationDiv = document.createElement('div');
        educationDiv.classList.add('education');
        educationDiv.innerHTML = '<h3>Scolarité</h3>';
        educationDiv.innerHTML += `<ul>
            <li>${data.education.high_school}</li>
            <li>${data.education.bachelor}</li>
            <li>${data.education.bes}</li>
        </ul>`;
        cvContainer.appendChild(educationDiv);

        // Création de la section passions
        const passionsDiv = document.createElement('div');
        passionsDiv.classList.add('passions');
        passionsDiv.innerHTML = '<h3>Passions</h3>';
        passionsDiv.innerHTML += `<ul>
            <li>${data.passions.reading}</li>
            <li>${data.passions.travel}</li>
        </ul>`;
        cvContainer.appendChild(passionsDiv);
    })
    .catch(error => {
        console.error('Erreur:', error);
    });

