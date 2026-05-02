// Timeline Scroll Animation
const timelineItems = document.querySelectorAll('.timeline-item');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

timelineItems.forEach(item => {
    observer.observe(item);
});

// Chat Assistant Logic
const chatWindow = document.getElementById('chatWindow');
const userInput = document.getElementById('userInput');

// Simple knowledge base for the assistant
const knowledgeBase = {
    "register": "You can register to vote online in many states! Visit vote.gov to select your state and find the specific online registration portal or printable forms. Make sure you check the deadlines!",
    "early voting": "Early voting allows you to cast your ballot before Election Day. It helps avoid long lines and gives you flexibility with your college schedule. Dates vary by state, so check your local election office.",
    "social media": "Social media plays a huge role! It's used for candidate campaigns, voter mobilization drives, and sharing real-time information. Virtual town halls are also big on Twitch and YouTube. Always verify facts from official sources.",
    "virtuality": "Virtuality is changing elections! From online voter registration and social media campaigning to virtual town halls and discussions about secure e-voting systems, digital platforms make participating easier for college students.",
    "where": "To find where you vote (your polling place), you can check your state's election website or use tools like vote.org's polling place locator. If you moved for college, make sure you know which address you registered under!",
    "absentee": "If you're away at college, you can request an absentee ballot to be mailed to your campus address so you can vote in your home state or county without traveling back.",
    "mail": "Mail-in voting is similar to absentee voting. You request a ballot, fill it out at your dorm or apartment, and mail it back or drop it in an official drop box before the deadline.",
    "quiz": "Let's test your knowledge! Question 1: True or False - You must always vote in the state where your college is located.",
    "true": "False! You have options. You can often register at your college address OR request an absentee ballot from your home state. You can only vote in one location!",
    "false": "Correct! You have options. You can often choose to register at your college address OR request an absentee ballot from your home state. Just remember, you can only vote in one location!",
    "default": "That's a great question about the election process! Since I'm an educational assistant, I recommend checking out vote.gov or your local election office for the most accurate information."
};

function appendMessage(sender, text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.textContent = text;
    
    messageDiv.appendChild(contentDiv);
    chatWindow.appendChild(messageDiv);
    
    // Scroll to bottom
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function processInput(text) {
    const lowerText = text.toLowerCase();
    let response = knowledgeBase["default"];
    
    for (const key in knowledgeBase) {
        if (key !== "default" && lowerText.includes(key)) {
            response = knowledgeBase[key];
            break;
        }
    }
    
    // Simulate typing delay
    setTimeout(() => {
        appendMessage('bot', response);
    }, 600);
}

function sendMessage() {
    const text = userInput.value.trim();
    if (text === '') return;
    
    appendMessage('user', text);
    userInput.value = '';
    
    processInput(text);
}

function sendQuickReply(text) {
    appendMessage('user', text);
    processInput(text);
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}
