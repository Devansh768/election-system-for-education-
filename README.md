# Campus Elect: Election Education Assistant

**Campus Elect** is an interactive, educational web application designed specifically for college students to help them understand the election process, timelines, and how the digital world (virtuality) contributes to modern democracy.

## Features

- **Interactive Timeline**: A step-by-step visual guide outlining the election process from voter registration to election day and results certification.
- **Digital Impact Section**: Explores how technology, social media mobilization, virtual town halls, and e-voting shape modern elections.
- **Educational Assistant (Chatbot)**: An interactive AI-like assistant built into the page. Users can ask questions about voting, registration, absentee ballots, and early voting.
- **Knowledge Quiz**: Test your election knowledge with a built-in interactive quiz directly from the assistant.
- **Modern UI/UX**: Designed with a sleek dark theme, vibrant gradients, and subtle micro-animations to keep users engaged and deliver a premium learning experience.

## Technologies Used

This project is built using pure frontend web technologies for maximum performance and easy hosting:
- **HTML5**: For semantic structure.
- **CSS3**: For custom styling, animations, and responsive design.
- **JavaScript (Vanilla)**: For timeline scroll animations and the interactive chatbot logic.

## How to Run the Project

Since this is a static frontend project, there is no need for a backend or build process.

1. Open the project folder on your computer.
2. Double-click on `index.html` to open it directly in your default web browser.

Alternatively, if you prefer using a local development server:
- **Python**: Run `python -m http.server 8000` and visit `http://localhost:8000`
- **Node.js**: Run `npx serve` and visit `http://localhost:3000`

## Customization

To add more questions or modify the assistant's knowledge base, open `script.js` and edit the `knowledgeBase` object:

```javascript
const knowledgeBase = {
    "your keyword": "Your educational response here...",
    "another keyword": "Another response..."
};
```

## Purpose

This project was built for **educational purposes** to simplify the complex voting process for young adults and emphasize the role of technology in civic engagement.
