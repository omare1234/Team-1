// --- DATABASE & DATA STRUCTURE ---
const skillData = {
    "Java Developer": [
        { name: "Java Basics", level: 1, resource: "YouTube: Java Full Course", url: "https://www.youtube.com/watch?v=xTtL8E4LzTQ" },
        { name: "Object Oriented Prog.", level: 1, resource: "LinkedIn Learning: OOP", url: "https://www.linkedin.com/learning/topics/object-oriented-programming?u=438836362" },
        { name: "Spring Boot", level: 2, resource: "Spring Docs", url: "https://docs.spring.io/spring-boot/index.html" },
        { name: "Microservices", level: 3, resource: "Udemy: Microservices Architecture", url: "https://www.udemy.com/course/microservices-architecture-the-complete-guide/?srsltid=AU7gw4UEZA4tMG1t25odkMRqIA5VkTHZk6rWtva7e8IQBrFNUCozpwo1" }
    ],
    "Junior Manual Tester": [
        { name: "Test Cases Design", level: 1, resource: "ISTQB Syllabus", url: "https://istqb.org/certifications/" },
        { name: "Jira / Bug Tracking", level: 1, resource: "Atlassian Docs", url: "https://www.atlassian.com/software/jira/features/bug-tracking" },
        { name: "API Testing (Postman)", level: 2, resource: "Postman Learning Center", url: "https://learning.postman.com/" },
        { name: "Test Automation Basics", level: 3, resource: "YouTube: Selenium Intro", url: "https://www.youtube.com/watch?v=mOAXEQevCAE" }
    ],
    "Frontend Developer": [
        { name: "HTML & CSS", level: 1, resource: "Udemy: HTML & CSS Website", url: "https://www.udemy.com/course/learn-html-css-website/?srsltid=AU7gw4WHSIcVOfa6PT6GMYnUY5Lfoda3l96J2boQnNZEjNyFi3tOTQYG" },
        { name: "JavaScript Fundamentals", level: 1, resource: "YouTube: JavaScript Fundamentals", url: "https://www.youtube.com/playlist?list=PLIJrr73KDmRwNZAYsAmWV8HXrPju73emb" },
        { name: "React.js Component Lifecycle", level: 2, resource: "Udemy: React Complete Guide", url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/" },
        { name: "Advanced State Management", level: 3, resource: "YouTube: Advanced State Management", url: "https://www.youtube.com/watch?v=FsPR6rhZA90" }
    ],
    "DevOps Engineer": [
        { name: "Linux & Shell Basics", level: 1, resource: "Udemy: Linux Basics for Beginners", url: "https://www.udemy.com/course/linux-basics-for-beginners/" },
        { name: "Docker Fundamentals", level: 1, resource: "Docker Docs", url: "https://docs.docker.com/get-started/" },
        { name: "CI/CD Pipelines", level: 2, resource: "GitHub Actions Docs", url: "https://docs.github.com/en/actions" },
        { name: "Kubernetes", level: 3, resource: "Kubernetes Docs", url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/" }
    ],
    "Data Analyst": [
        { name: "Excel & Data Basics", level: 1, resource: "Microsoft Excel Support", url: "https://support.microsoft.com/en-us/excel" },
        { name: "SQL Fundamentals", level: 1, resource: "Udemy: SQL for Data Analysis", url: "https://www.udemy.com/course/sql-for-real-world-data-analysis/" },
        { name: "Python for Data Analysis", level: 2, resource: "Pandas Docs", url: "https://pandas.pydata.org/docs/getting_started/index.html" },
        { name: "Data Visualization", level: 3, resource: "Tableau Training", url: "https://www.tableau.com/learn/training" }
    ],
    "Scrum Master": [
        { name: "Agile Fundamentals", level: 1, resource: "Scrum.org Resources", url: "https://www.scrum.org/resources" },
        { name: "Scrum Framework", level: 1, resource: "Scrum Guides", url: "https://scrumguides.org/" },
        { name: "Facilitation Skills", level: 2, resource: "Atlassian Agile Coach", url: "https://www.atlassian.com/agile" },
        { name: "Scaling Agile", level: 3, resource: "Scaled Agile Framework", url: "https://scaledagileframework.com/" }
    ],
    "Cloud Architect": [
        { name: "Cloud Fundamentals", level: 1, resource: "AWS Cloud Practitioner", url: "https://aws.amazon.com/training/learn-about/cloud-practitioner/" },
        { name: "Networking Basics", level: 1, resource: "Azure Fundamentals", url: "https://learn.microsoft.com/en-us/training/paths/azure-fundamentals/" },
        { name: "Architecture Design", level: 2, resource: "AWS Well-Architected", url: "https://aws.amazon.com/architecture/well-architected/" },
        { name: "Security & Compliance", level: 3, resource: "Google Cloud Architecture", url: "https://cloud.google.com/architecture" }
    ],
    "UX/UI Designer": [
        { name: "Design Fundamentals", level: 1, resource: "NNGroup Articles", url: "https://www.nngroup.com/articles/" },
        { name: "Wireframing & Prototyping", level: 1, resource: "YouTube: Figma Tutorial", url: "https://www.youtube.com/watch?v=ezldKx-jPag" },
        { name: "User Research", level: 2, resource: "YouTube: User Research Basics", url: "https://www.youtube.com/watch?v=YD0egXpd-Y0" },
        { name: "Design Systems", level: 3, resource: "Design Systems Handbook", url: "https://www.designbetter.co/design-systems-handbook" }
    ]
};

// --- DATABASE INITIALIZATION ---
// NOTE: This is a client-side demo. Passwords are stored in plain text in
// localStorage, which is fine for prototyping but NOT secure for real users
// or real passwords. A production version needs a real backend with hashed
// credentials and server-side session checks.
function seedDatabase() {
    const initialData = {
        users: [
            { id: 1, name: "Alex Consultant", username: "alex", password: "consultant123", accountType: "consultant", role: "Java Developer", skills: {}, targets: [] },
            { id: 2, name: "Sarah Smith", username: "sarah", password: "consultant123", accountType: "consultant", role: "Junior Manual Tester", skills: { "Test Cases Design": "Complete" }, targets: ["Learn Postman by Friday"] },
            { id: 3, name: "Jordan Lead", username: "admin", password: "admin123", accountType: "admin", role: null, skills: {}, targets: [] }
        ],
        nextUserId: 4
    };
    localStorage.setItem('academyData', JSON.stringify(initialData));
    return initialData;
}

let db = JSON.parse(localStorage.getItem('academyData'));
// If there's no data yet, or it's from the old schema (no username/accountType
// fields), reset to the new seed data rather than crashing on login.
if (!db || !db.users || !db.users[0] || !db.users[0].username || !db.users[0].accountType) {
    db = seedDatabase();
}

let currentUser = null; // set on successful login

function saveData() {
    localStorage.setItem('academyData', JSON.stringify(db));
}

// --- SESSION HELPERS ---
function getSession() {
    const raw = localStorage.getItem('academySession');
    return raw ? JSON.parse(raw) : null;
}
function setSession(userId) {
    localStorage.setItem('academySession', JSON.stringify({ userId }));
}
function clearSession() {
    localStorage.removeItem('academySession');
}

// --- DOM ELEMENTS ---
const loginScreen = document.getElementById('login-screen');
const appWrapper = document.getElementById('app-wrapper');
const loginFormContainer = document.getElementById('login-form-container');
const registerFormContainer = document.getElementById('register-form-container');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const loginError = document.getElementById('login-error');
const registerError = document.getElementById('register-error');
const welcomeMsg = document.getElementById('welcome-msg');
const btnLogout = document.getElementById('btn-logout');

const userView = document.getElementById('user-view');
const adminView = document.getElementById('admin-view');
const roleSelect = document.getElementById('role-select');
const skillsGrid = document.getElementById('skills-grid');
const gapSelect = document.getElementById('gap-select');

// --- LOGIN / REGISTER SCREEN SWITCHING ---
document.getElementById('show-register-link').addEventListener('click', (e) => {
    e.preventDefault();
    loginFormContainer.classList.add('hidden');
    registerFormContainer.classList.remove('hidden');
});
document.getElementById('show-login-link').addEventListener('click', (e) => {
    e.preventDefault();
    registerFormContainer.classList.add('hidden');
    loginFormContainer.classList.remove('hidden');
});

// --- LOGIN ---
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value;

    const user = db.users.find(u =>
        u.username.toLowerCase() === username.toLowerCase() && u.password === password
    );

    if (!user) {
        loginError.innerText = 'Invalid username or password.';
        loginError.classList.remove('hidden');
        return;
    }

    loginError.classList.add('hidden');
    loginForm.reset();
    setSession(user.id);
    enterApp(user);
});

// --- CONSULTANT SELF-REGISTRATION ---
// Only consultants can self-register here. Academy Lead accounts are
// provisioned separately (seeded above) and are not created through this form.
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('reg-name').value.trim();
    const username = document.getElementById('reg-username').value.trim();
    const password = document.getElementById('reg-password').value;
    const role = document.getElementById('reg-role').value;

    if (!name || !username || !password) {
        registerError.innerText = 'Please fill in all fields.';
        registerError.classList.remove('hidden');
        return;
    }

    const usernameTaken = db.users.some(u => u.username.toLowerCase() === username.toLowerCase());
    if (usernameTaken) {
        registerError.innerText = 'That username is already taken.';
        registerError.classList.remove('hidden');
        return;
    }

    registerError.classList.add('hidden');

    const newUser = {
        id: db.nextUserId++,
        name,
        username,
        password,
        accountType: 'consultant',
        role,
        skills: {},
        targets: []
    };
    db.users.push(newUser);
    saveData();

    registerForm.reset();
    setSession(newUser.id);
    enterApp(newUser);
});

// --- LOGOUT ---
btnLogout.addEventListener('click', () => {
    clearSession();
    currentUser = null;
    location.reload();
});

// --- ENTER APP (role-gated: each account type only ever sees its own view) ---
function enterApp(user) {
    currentUser = user;
    loginScreen.classList.add('hidden');
    appWrapper.classList.remove('hidden');
    welcomeMsg.innerText = `Signed in as ${user.name} (${user.accountType === 'admin' ? 'Academy Lead' : 'Consultant'})`;

    userView.classList.add('hidden');
    adminView.classList.add('hidden');

    if (user.accountType === 'consultant') {
        userView.classList.remove('hidden');
        renderUserView();
    } else if (user.accountType === 'admin') {
        adminView.classList.remove('hidden');
        renderAdminView();
    }
}

// --- APP INIT: resume session if one exists ---
(function init() {
    const session = getSession();
    if (session) {
        const user = db.users.find(u => u.id === session.userId);
        if (user) {
            enterApp(user);
            return;
        }
    }
    // No valid session -> login screen stays visible (its default state)
})();

// --- USER VIEW LOGIC ---
roleSelect.addEventListener('change', (e) => {
    currentUser.role = e.target.value;
    saveData();
    renderUserView();
});

function renderUserView() {
    if (!currentUser || currentUser.accountType !== 'consultant') return; // guard

    roleSelect.value = currentUser.role;
    skillsGrid.innerHTML = '';
    gapSelect.innerHTML = '<option value="">-- Select a Skill Gap --</option>';

    const roleSkills = skillData[currentUser.role] || [];

    roleSkills.forEach(skill => {
        const status = currentUser.skills[skill.name] || 'Not Started';

        const card = document.createElement('div');
        card.className = 'skill-card';
        card.innerHTML = `
            <div style="display: flex; justify-content: space-between;">
                <strong>${skill.name}</strong>
                <span class="badge lvl-${skill.level}">Level ${skill.level}</span>
            </div>
            <a href="${skill.url || '#'}" target="_blank" rel="noopener noreferrer" class="resource-link">📚 ${skill.resource}</a>
            <select onchange="updateSkill('${skill.name}', this.value)">
                <option value="Not Started" ${status === 'Not Started' ? 'selected' : ''}>Not Started</option>
                <option value="In Progress" ${status === 'In Progress' ? 'selected' : ''}>In Progress</option>
                <option value="Complete" ${status === 'Complete' ? 'selected' : ''}>Complete</option>
            </select>
        `;
        skillsGrid.appendChild(card);

        if (status !== 'Complete') {
            const option = document.createElement('option');
            option.value = skill.name;
            option.innerText = skill.name;
            gapSelect.appendChild(option);
        }
    });
}

window.updateSkill = function (skillName, newStatus) {
    currentUser.skills[skillName] = newStatus;
    saveData();
    renderUserView();
};

// SMART Targeter Logic
document.getElementById('generate-smart-btn').addEventListener('click', () => {
    const skill = gapSelect.value;
    if (!skill) return alert('Please select a skill gap first!');

    const smartGoal = `
        <strong>Specific:</strong> I will master the fundamentals of ${skill}.<br>
        <strong>Measurable:</strong> I will complete 1 mini-project utilizing this skill.<br>
        <strong>Achievable:</strong> I will study 1 hour a day using suggested resources.<br>
        <strong>Relevant:</strong> This is critical for my role as a ${currentUser.role}.<br>
        <strong>Time-bound:</strong> I will accomplish this by next Friday.
    `;

    const outputDiv = document.getElementById('smart-output');
    outputDiv.innerHTML = `<h4>Your Custom SMART Goal:</h4><p>${smartGoal}</p>`;
    outputDiv.classList.remove('hidden');

    currentUser.targets.push(`Master ${skill} by next Friday`);
    saveData();
});

// --- ADMIN VIEW LOGIC ---
function renderAdminView() {
    if (!currentUser || currentUser.accountType !== 'admin') return; // guard

    const userList = document.getElementById('user-list');
    const targetList = document.getElementById('target-list');
    const heatmap = document.getElementById('heatmap-container');

    userList.innerHTML = '';
    targetList.innerHTML = '';
    heatmap.innerHTML = '';

    let skillStats = {};

    db.users.filter(u => u.accountType === 'consultant').forEach(user => {
        userList.innerHTML += `<li><strong>${user.name}</strong> - ${user.role}</li>`;

        user.targets.forEach(t => {
            targetList.innerHTML += `<li>${user.name}: <em>${t}</em></li>`;
        });

        const skillsForRole = skillData[user.role] || [];
        skillsForRole.forEach(s => {
            if (!skillStats[s.name]) skillStats[s.name] = { total: 0, complete: 0 };
            skillStats[s.name].total++;
            if (user.skills[s.name] === 'Complete') {
                skillStats[s.name].complete++;
            }
        });
    });

    for (const [skill, stats] of Object.entries(skillStats)) {
        const percentage = Math.round((stats.complete / stats.total) * 100) || 0;
        heatmap.innerHTML += `
            <div class="heatmap-bar">
                <div class="heatmap-fill" style="width: ${percentage}%">${skill} (${percentage}% Competent)</div>
            </div>
        `;
    }
}