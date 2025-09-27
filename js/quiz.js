let currentQuestionIndex = 0;
let score = 0;
let timerInterval;

//  Copy Protection Functions
function enableCopyProtection() {
    // Disable right-click
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        showWarningMessage("Right-click is disabled!");
    });

    // Disable text selection
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
    });

    // Disable copy (Ctrl+C)
    document.addEventListener('keydown', function(e) {
        // Ctrl+C, Ctrl+A, Ctrl+U, F12
        if (
            (e.ctrlKey && (e.key === 'c' || e.key === 'C' || e.key === 'a' || e.key === 'A' || e.key === 'u' || e.key === 'U')) ||
            e.key === 'F12' ||
            (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i'))
        ) {
            e.preventDefault();
            showWarningMessage("This action is not allowed!");
        }
    });

    // Disable drag and drop for images/text
    document.addEventListener('dragstart', function(e) {
        if (e.target.tagName === 'IMG' || e.target.classList.contains('question-text')) {
            e.preventDefault();
        }
    });

    // Clear clipboard data on copy attempt
    document.addEventListener('copy', function(e) {
        e.preventDefault();
        showWarningMessage("Copying content is not allowed!");
    });

    // Disable cut (Ctrl+X)
    document.addEventListener('cut', function(e) {
        e.preventDefault();
        showWarningMessage("Cutting content is not allowed!");
    });

    // Disable paste (Ctrl+V) in input fields
    document.addEventListener('paste', function(e) {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            e.preventDefault();
            showWarningMessage("Pasting is not allowed!");
        }
    });
}

//  Show warning message
function showWarningMessage(message) {
    // Remove existing warning if any
    const existingWarning = document.querySelector('.copy-warning');
    if (existingWarning) {
        existingWarning.remove();
    }

    const warningDiv = document.createElement('div');
    warningDiv.className = 'copy-warning';
    warningDiv.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: #e74c3c;
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            z-index: 10000;
            font-weight: bold;
            animation: slideInRight 0.5s ease;
        ">
            ⚠️ ${message}
        </div>
    `;
    
    document.body.appendChild(warningDiv);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        warningDiv.remove();
    }, 3000);
}

// Add CSS for warning animation
function addProtectionStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        /* Disable text selection */
        body {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        
        /* Allow selection only in input fields */
        input, textarea {
            -webkit-user-select: text;
            -moz-user-select: text;
            -ms-user-select: text;
            user-select: text;
        }
        
        /* Hide content from print */
        @media print {
            body * {
                visibility: hidden;
            }
            .quiz-container, .quiz-container * {
                visibility: visible;
            }
            .quiz-container {
                position: absolute;
                left: 0;
                top: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Page load animation and protection
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.8s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    // Enable copy protection
    enableCopyProtection();
    addProtectionStyles();
});

function startTimer(duration) {
    let timer = duration;
    const timerElement = document.getElementById('timer');
    clearInterval(timerInterval);
    timerElement.textContent = timer;
    
    timerInterval = setInterval(() => {
        timer--;
        timerElement.textContent = timer;
        if (timer <= 0) {
            clearInterval(timerInterval);
            moveToNextQuestion();
        }
    }, 1000);
}

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    
    //  Secure question display (no direct text)
    const questionText = document.getElementById('question-text');
    questionText.textContent = `Question ${currentQuestionIndex + 1}: ${currentQuestion.question}`;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    document.getElementById('answer-message').textContent = '';

    currentQuestion.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        
        // Add some protection to option text
        btn.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
        btn.dataset.index = index;
        btn.addEventListener('click', selectAnswer);
        optionsContainer.appendChild(btn);
    });

    startTimer(15);
    updateProgress();
    document.getElementById('next-btn').disabled = true;
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const correctIndex = questions[currentQuestionIndex].correct;
    const messageElement = document.getElementById('answer-message');

    const options = document.querySelectorAll('.option-btn');
    options.forEach(btn => {
        btn.disabled = true;
        if (parseInt(btn.dataset.index) === correctIndex) {
            setTimeout(() => btn.classList.add("correct-ans"), 200);
        } else if (btn === selectedBtn) {
            btn.classList.add("wrong-ans");
        }
    });

    if (parseInt(selectedBtn.dataset.index) === correctIndex) {
        score++;
        messageElement.textContent = "Correct ✅ Well done!";
        messageElement.style.color = "#2ecc71";
    } else {
        messageElement.textContent = "Incorrect ❌ Try next one!";
        messageElement.style.color = "#e74c3c";
    }

    document.getElementById('next-btn').disabled = false;
    clearInterval(timerInterval);
}

function updateProgress() {
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    document.getElementById('total-questions').textContent = questions.length;
}

function moveToNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showQuizResult();
    }
}

function showQuizResult() {
    document.getElementById('question-text').innerHTML = 
        `<div style="text-align: center; padding: 20px;">
            <h2 style="color: #1d3557; margin-bottom: 15px;">Quiz Completed! 🎉</h2>
            <p style="font-size: 18px; margin-bottom: 10px;">Your Score: <strong>${score}/${questions.length}</strong></p>
            <p style="font-size: 16px; color: #666;">Congratulations on completing the quiz!</p>
        </div>`;
    
    document.getElementById('options').innerHTML = '';
    document.getElementById('answer-message').textContent = '';
    document.getElementById('next-btn').style.display = 'none';
    document.querySelector('.timer').style.display = 'none';
    clearInterval(timerInterval);
}

// Event Listeners
document.getElementById('next-btn').addEventListener('click', moveToNextQuestion);

// Initialize Quiz
loadQuestion();