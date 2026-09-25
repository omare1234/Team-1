// DATABASE & DATA STRUCTURE
const skillData = {
    "Java Developer": [
        { name: "Java Basics", level: 1, resource: "YouTube: Java Full Course", url: "https://www.youtube.com/watch?v=xTtL8E4LzTQ" },
        { name: "Object Oriented Prog.", level: 1, resource: "LinkedIn Learning: OOP", url: "https://www.linkedin.com/learning/topics/object-oriented-programming?u=438836362" },
        { name: "Spring Boot", level: 2, resource: "Spring Docs", url: "https://docs.spring.io/spring-boot/index.html" },
        { name: "Microservices", level: 3, resource: "Udemy: Microservices Architecture", url: "https://www.udemy.com/course/microservices-architecture-the-complete-guide/?srsltid=AU7gw4UEZA4tMG1t25odkMRqIA5VkTHZk6rWtva7e8IQBrFNUCozpwo1" }
    ],
    "Junior Manual Tester": [
        { name: "Test Cases Design", level: 1, resource: "ISTQB Syllabus", url: "https://www.youtube.com/watch?v=bIbkdmHJoHs&list=PLj5VKaW115t0LT-7DICjHkGuxdTEqFI91" },
        { name: "Jira / Bug Tracking", level: 1, resource: "Atlassian Docs", url: "https://www.atlassian.com/software/jira/features/bug-tracking" },
        { name: "API Testing (Postman)", level: 2, resource: "Postman Learning Center", url: "https://www.youtube.com/watch?v=T_PV6KDzq_Y&list=PLhW3qG5bs-L9bT4CL6lzCTjo82k42hbmu" },
        { name: "Test Automation Basics", level: 3, resource: "YouTube: Selenium Intro", url: "https://www.youtube.com/watch?v=mOAXEQevCAE" }
    ],
    "Frontend Developer": [
        { name: "HTML & CSS", level: 1, resource: "Udemy: HTML & CSS Website", url: "https://www.youtube.com/watch?v=5bMdjkfvONE" },
        { name: "JavaScript Fundamentals", level: 1, resource: "YouTube: JavaScript Fundamentals", url: "https://www.youtube.com/playlist?list=PLIJrr73KDmRwNZAYsAmWV8HXrPju73emb" },
        { name: "React.js Component Lifecycle", level: 2, resource: "Udemy: React Complete Guide", url: "https://www.youtube.com/watch?v=CgkZ7MvWUAA" },
        { name: "Advanced State Management", level: 3, resource: "YouTube: Advanced State Management", url: "https://www.youtube.com/watch?v=FsPR6rhZA90" }
    ],
    "DevOps Engineer": [
        { name: "Linux & Shell Basics", level: 1, resource: "Udemy: Linux Basics for Beginners", url: "https://www.youtube.com/watch?v=VbEx7B_PTOE&list=PLIhvC56v63IJIujb5cyE13oLuyORZpdkL" },
        { name: "Docker Fundamentals", level: 1, resource: "Docker Docs", url: "https://www.youtube.com/watch?v=gthvzSE4yIY&list=PLTk5ZYSbd9Mg51szw21_75Hs1xUpGObDm" },
        { name: "CI/CD Pipelines", level: 2, resource: "GitHub Actions Docs", url: "https://www.youtube.com/watch?v=AknbizcLq4w" },
        { name: "Kubernetes", level: 3, resource: "Kubernetes Docs", url: "https://www.youtube.com/watch?v=s_o8dwzRlu4&t=104s" }
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
        { name: "Cloud Fundamentals", level: 1, resource: "AWS Cloud Fundamentals", url: "https://www.youtube.com/watch?v=NPEsD6n9A_I&list=PLGjZwEtPN7j-Q59JYso3L4_yoCjj2syrM" },
        { name: "Networking Basics", level: 1, resource: "Networking Fundamentals", url: "https://www.youtube.com/watch?v=bj-Yfakjllc&list=PLIFyRwBY_4bRLmKfP1KnZA6rZbRHtxmXi" },
        { name: "Architecture Design", level: 2, resource: "AWS Well-Architected", url: "https://aws.amazon.com/architecture/well-architected/" },
        { name: "Security & Compliance", level: 3, resource: "Google Cloud Architecture", url: "https://www.youtube.com/watch?v=LkjnDtKXu1o&list=PL0azhNeBK66Ib5bdokWTyNyx3srkrzbUo" }
    ],
    "UX/UI Designer": [
        { name: "Design Fundamentals", level: 1, resource: "YouTube: Design Fundamentals", url: "https://www.youtube.com/watch?v=GQS7wPujL2k&list=PLgGbWId6zgaXiWYDAcJbXzBNlAnYg7pgL" },
        { name: "Wireframing & Prototyping", level: 1, resource: "YouTube: Figma Tutorial", url: "https://www.youtube.com/watch?v=ezldKx-jPag" },
        { name: "User Research", level: 2, resource: "YouTube: User Research Basics", url: "https://www.youtube.com/watch?v=YD0egXpd-Y0" },
        { name: "Design Systems", level: 3, resource: "Design Systems Handbook", url: "https://www.designbetter.co/design-systems-handbook" }
    ]
};

// DATABASE INITIALIZATION
function seedDatabase() {
    const initialData = {
        users: [
            {
                id: 1,
                name: "Alex Consultant",
                username: "alex",
                password: "consultant123",
                accountType: "consultant",
                role: "Java Developer",
                skills: {},
                targets: []
            },
            {
                id: 2,
                name: "Sarah Smith",
                username: "sarah",
                password: "consultant123",
                accountType: "consultant",
                role: "Junior Manual Tester",
                skills: { "Test Cases Design": "Complete" },
                targets: ["Learn Postman by Friday"]
            },
            {
                id: 3,
                name: "Jordan Lead",
                username: "admin",
                password: "admin123",
                accountType: "admin",
                role: null,
                skills: {},
                targets: []
            }
        ],
        nextUserId: 4
    };

    localStorage.setItem('academyData', JSON.stringify(initialData));
    return initialData;
}

let db = JSON.parse(localStorage.getItem('academyData'));

if (!db || !db.users || !db.users[0] || !db.users[0].username || !db.users[0].accountType) {
    db = seedDatabase();
}

let currentUser = null;

function saveData() {
    localStorage.setItem('academyData', JSON.stringify(db));
}

// SESSION HELPERS
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

// DOM ELEMENTS
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

// LOGIN / REGISTER SCREEN SWITCHING
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

// LOGIN
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value;

    const user = db.users.find(u =>
        u.username.toLowerCase() === username.toLowerCase() &&
        u.password === password
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

// CONSULTANT SELF-REGISTRATION
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

    const usernameTaken = db.users.some(
        u => u.username.toLowerCase() === username.toLowerCase()
    );

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

// LOGOUT
btnLogout.addEventListener('click', () => {
    clearSession();
    currentUser = null;
    location.reload();
});

// ENTER APP
function enterApp(user) {
    currentUser = user;
    loginScreen.classList.add('hidden');
    appWrapper.classList.remove('hidden');

    welcomeMsg.innerText =
        `Signed in as ${user.name} (${user.accountType === 'admin' ? 'Academy Lead' : 'Consultant'})`;

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

// APP INIT: RESUME SESSION
(function init() {
    const session = getSession();

    if (session) {
        const user = db.users.find(u => u.id === session.userId);

        if (user) {
            enterApp(user);
        }
    }
})();

// USER VIEW LOGIC
roleSelect.addEventListener('change', (e) => {
    currentUser.role = e.target.value;
    saveData();
    renderUserView();
});

function renderUserView() {
    if (!currentUser || currentUser.accountType !== 'consultant') return;

    roleSelect.value = currentUser.role;
    skillsGrid.innerHTML = '';
    gapSelect.innerHTML = '<option value="">-- Select a Skill Gap --</option>';

    const roleSkills = skillData[currentUser.role] || [];

    roleSkills.forEach(skill => {
        const status = currentUser.skills?.[skill.name] || 'Not Started';

        const card = document.createElement('div');
        card.className = 'skill-card';
        card.innerHTML = `
            <div style="display: flex; justify-content: space-between;">
                <strong>${skill.name}</strong>
                <span class="badge lvl-${skill.level}">Level ${skill.level}</span>
            </div>
            <a href="${skill.url || '#'}" target="_blank" rel="noopener noreferrer" class="resource-link">
                📚 ${skill.resource}
            </a>
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

// SMART TARGETER
document.getElementById('generate-smart-btn').addEventListener('click', () => {
    const skill = gapSelect.value;

    if (!skill) {
        alert('Please select a skill gap first!');
        return;
    }

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

// ADMIN VIEW LOGIC
function renderAdminView() {
    if (!currentUser || currentUser.accountType !== 'admin') return;

    const userList = document.getElementById('user-list');
    const targetList = document.getElementById('target-list');
    const heatmap = document.getElementById('heatmap-container');
    const consultantHeatmap = document.getElementById('consultant-heatmap-container');

    userList.innerHTML = '';
    targetList.innerHTML = '';
    heatmap.innerHTML = '';
    consultantHeatmap.innerHTML = '';

    const skillStats = {};

    db.users
        .filter(user => user.accountType === 'consultant')
        .forEach(user => {
            userList.innerHTML += `
                <li><strong>${user.name}</strong> - ${user.role || 'No role'}</li>
            `;

            (user.targets || []).forEach(target => {
                targetList.innerHTML += `
                    <li>${user.name}: <em>${target}</em></li>
                `;
            });

            const skillsForRole = skillData[user.role] || [];
            const completed = skillsForRole.filter(
                skill => user.skills?.[skill.name] === 'Complete'
            ).length;

            const percentage = skillsForRole.length
                ? Math.round((completed / skillsForRole.length) * 100)
                : 0;

            consultantHeatmap.innerHTML += `
                <div class="consultant-heatmap-row">
                    <div class="consultant-heatmap-label">
                        <strong>${user.name}</strong>
                        <span>${user.role || 'No role'} · ${completed}/${skillsForRole.length} skills complete</span>
                    </div>
                    <div
                        class="heatmap-bar consultant-heatmap-bar"
                        role="img"
                        aria-label="${user.name}: ${percentage}% complete"
                    >
                        <div
                            class="heatmap-fill"
                            style="width: ${percentage}%"
                        >${percentage}%</div>
                    </div>
                </div>
            `;

            skillsForRole.forEach(skill => {
                if (!skillStats[skill.name]) {
                    skillStats[skill.name] = { total: 0, complete: 0 };
                }

                skillStats[skill.name].total++;

                if (user.skills?.[skill.name] === 'Complete') {
                    skillStats[skill.name].complete++;
                }
            });
        });

    // Global Skills Heatmap: number of skills defined for each job title.
    const roleEntries = Object.entries(skillData);
    const maxSkills = Math.max(...roleEntries.map(([, skills]) => skills.length), 1);

    heatmap.innerHTML = `
        <div class="role-heatmap" role="list" aria-label="Number of skills by job title">
            ${roleEntries.map(([role, skills]) => {
                const intensity = skills.length / maxSkills;
                const lightness = 88 - intensity * 48;

                return `
                    <div
                        class="role-heatmap-cell"
                        role="listitem"
                        aria-label="${role}: ${skills.length} skills"
                        style="background-color: hsl(0 78% ${lightness}%); color: ${lightness < 58 ? '#fff' : '#3b0a0a'}"
                    >
                        <strong>${role}</strong>
                        <span>${skills.length} skills</span>
                    </div>
                `;
            }).join('')}
        </div>
        <p class="role-heatmap-legend">Darker red indicates more skills for the job title.</p>
    `;
}