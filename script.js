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
    ]
};

// Initialize LocalStorage for persistence
if (!localStorage.getItem('academyData')) {
    const initialData = {
        users: [
            { id: 1, name: "Current User", role: "Java Developer", skills: {}, targets: [] },
            { id: 2, name: "Sarah Smith", role: "Junior Manual Tester", skills: {"Test Cases Design": "Complete"}, targets: ["Learn Postman by Friday"] }
        ],
        currentUserIndex: 0 // Simulating a logged-in user
    };
    localStorage.setItem('academyData', JSON.stringify(initialData));
}

let db = JSON.parse(localStorage.getItem('academyData'));
let currentUser = db.users[db.currentUserIndex];

// --- DOM ELEMENTS ---
const userView = document.getElementById('user-view');
const adminView = document.getElementById('admin-view');
const btnUser = document.getElementById('btn-user-view');
const btnAdmin = document.getElementById('btn-admin-view');
const roleSelect = document.getElementById('role-select');
const skillsGrid = document.getElementById('skills-grid');
const gapSelect = document.getElementById('gap-select');

// --- NAVIGATION ---
btnUser.addEventListener('click', () => {
    userView.classList.remove('hidden');
    adminView.classList.add('hidden');
    btnUser.classList.add('active');
    btnAdmin.classList.remove('active');
    renderUserView();
});

btnAdmin.addEventListener('click', () => {
    adminView.classList.remove('hidden');
    userView.classList.add('hidden');
    btnAdmin.classList.add('active');
    btnUser.classList.remove('active');
    renderAdminView();
});

// --- USER VIEW LOGIC ---
roleSelect.addEventListener('change', (e) => {
    currentUser.role = e.target.value;
    saveData();
    renderUserView();
});

function renderUserView() {
    roleSelect.value = currentUser.role;
    skillsGrid.innerHTML = '';
    gapSelect.innerHTML = '<option value="">-- Select a Skill Gap --</option>';
    
    const roleSkills = skillData[currentUser.role];

    roleSkills.forEach(skill => {
        // Skill Status
        const status = currentUser.skills[skill.name] || 'Not Started';
        
        // Build Card
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

        // Populate Gap Selector if not complete
        if (status !== 'Complete') {
            const option = document.createElement('option');
            option.value = skill.name;
            option.innerText = skill.name;
            gapSelect.appendChild(option);
        }
    });
}

window.updateSkill = function(skillName, newStatus) {
    currentUser.skills[skillName] = newStatus;
    saveData();
    renderUserView(); // re-render to update gap selector
}

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

    // Save target to DB
    currentUser.targets.push(`Master ${skill} by next Friday`);
    saveData();
});

// --- ADMIN VIEW LOGIC ---
function renderAdminView() {
    const userList = document.getElementById('user-list');
    const targetList = document.getElementById('target-list');
    const heatmap = document.getElementById('heatmap-container');
    
    userList.innerHTML = '';
    targetList.innerHTML = '';
    heatmap.innerHTML = '';

    let skillStats = {}; // To calculate heatmap

    db.users.forEach(user => {
        // User List
        userList.innerHTML += `<li><strong>${user.name}</strong> - ${user.role}</li>`;
        
        // Target Review
        user.targets.forEach(t => {
            targetList.innerHTML += `<li>${user.name}: <em>${t}</em></li>`;
        });

        // Heatmap Calc
        const skillsForRole = skillData[user.role] || [];
        skillsForRole.forEach(s => {
            if (!skillStats[s.name]) skillStats[s.name] = { total: 0, complete: 0 };
            skillStats[s.name].total++;
            if (user.skills[s.name] === 'Complete') {
                skillStats[s.name].complete++;
            }
        });
    });

    // Render Heatmap
    for (const [skill, stats] of Object.entries(skillStats)) {
        const percentage = Math.round((stats.complete / stats.total) * 100) || 0;
        heatmap.innerHTML += `
            <div class="heatmap-bar">
                <div class="heatmap-fill" style="width: ${percentage}%">${skill} (${percentage}% Competent)</div>
            </div>
        `;
    }
}

function saveData() {
    db.users[db.currentUserIndex] = currentUser;
    localStorage.setItem('academyData', JSON.stringify(db));
}

// Init
renderUserView();