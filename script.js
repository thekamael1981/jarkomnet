// Global Variables
let currentGrade = 'X';
let currentDifficulty = '';
let currentQuiz = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let quizAnswers = [];

// DOM Elements
const gradeButtons = document.querySelectorAll('.nav-btn');
const gradeSelection = document.getElementById('gradeSelection');
const learningContent = document.getElementById('learningContent');
const gradeTitle = document.getElementById('gradeTitle');
const gradeDescription = document.getElementById('gradeDescription');
const contentTitle = document.getElementById('contentTitle');
const backToGradeBtn = document.getElementById('backToGrade');
const tabButtons = document.querySelectorAll('.tab-btn');
const materialTab = document.getElementById('materialTab');
const quizTab = document.getElementById('quizTab');
const loadingOverlay = document.getElementById('loadingOverlay');

// Content Elements
const apperceptionContent = document.getElementById('apperceptionContent');
const probingContent = document.getElementById('probingContent');
const mainContent = document.getElementById('mainContent');
const reflectionContent = document.getElementById('reflectionContent');
const networkAnimation = document.getElementById('networkAnimation');

// Quiz Elements
const questionNumber = document.getElementById('questionNumber');
const totalQuestions = document.getElementById('totalQuestions');
const questionText = document.getElementById('questionText');
const answerOptions = document.getElementById('answerOptions');
const prevQuestion = document.getElementById('prevQuestion');
const nextQuestion = document.getElementById('nextQuestion');
const submitQuiz = document.getElementById('submitQuiz');
const quizResult = document.getElementById('quizResult');
const scorePercentage = document.getElementById('scorePercentage');
const scoreText = document.getElementById('scoreText');
const correctCount = document.getElementById('correctCount');
const wrongCount = document.getElementById('wrongCount');
const totalCount = document.getElementById('totalCount');
const retryQuiz = document.getElementById('retryQuiz');

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    updateGradeInfo();
});

function initializeApp() {
    // Show initial grade selection
    showGradeSelection();
    
    // Initialize network animation
    createNetworkAnimation();
}

function setupEventListeners() {
    // Grade navigation
    gradeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            switchGrade(this.dataset.grade);
        });
    });

    // Difficulty cards
    document.addEventListener('click', function(e) {
        if (e.target.closest('.difficulty-card')) {
            const card = e.target.closest('.difficulty-card');
            const difficulty = card.dataset.difficulty;
            if (difficulty) {
                loadLearningContent(currentGrade, difficulty);
            }
        }
    });

    // Back to grade button
    backToGradeBtn.addEventListener('click', showGradeSelection);

    // Tab buttons
    tabButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            switchTab(this.dataset.tab);
        });
    });

    // Quiz navigation
    prevQuestion.addEventListener('click', goToPrevQuestion);
    nextQuestion.addEventListener('click', goToNextQuestion);
    submitQuiz.addEventListener('click', submitQuizAnswers);
    retryQuiz.addEventListener('click', restartQuiz);

    // Answer options
    answerOptions.addEventListener('click', function(e) {
        if (e.target.closest('.answer-option')) {
            selectAnswer(e.target.closest('.answer-option'));
        }
    });
}

function switchGrade(grade) {
    currentGrade = grade;
    
    // Update active button
    gradeButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-grade="${grade}"]`).classList.add('active');
    
    updateGradeInfo();
    showGradeSelection();
}

function updateGradeInfo() {
    const gradeData = educationData.grades[currentGrade];
    if (gradeData) {
        gradeTitle.textContent = `Kelas ${currentGrade} - ${gradeData.title}`;
        gradeDescription.textContent = gradeData.description;
    }
}

function showGradeSelection() {
    gradeSelection.classList.remove('hidden');
    learningContent.classList.add('hidden');
}

function loadLearningContent(grade, difficulty) {
    showLoading();
    currentDifficulty = difficulty;
    
    setTimeout(() => {
        const content = educationData.grades[grade].content[difficulty];
        if (content) {
            populateContent(content);
            contentTitle.textContent = `${content.title} - Kelas ${grade}`;
            
            // Reset to material tab
            switchTab('material');
            
            // Load quiz data
            loadQuizData(grade, difficulty);
            
            gradeSelection.classList.add('hidden');
            learningContent.classList.remove('hidden');
        }
        hideLoading();
    }, 500);
}

function populateContent(content) {
    apperceptionContent.innerHTML = content.apperception;
    probingContent.innerHTML = content.probing;
    mainContent.innerHTML = content.material;
    reflectionContent.innerHTML = content.reflection;
    
    // Update network animation based on content
    updateNetworkAnimation(content.animationType || 'basic');
}

function switchTab(tabName) {
    // Update tab buttons
    tabButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    
    // Update tab content
    materialTab.classList.remove('active');
    quizTab.classList.remove('active');
    
    if (tabName === 'material') {
        materialTab.classList.add('active');
    } else if (tabName === 'quiz') {
        quizTab.classList.add('active');
    }
}

function loadQuizData(grade, difficulty) {
    const quizData = educationData.grades[grade].quiz[difficulty];
    if (quizData) {
        currentQuiz = shuffleArray([...quizData]);
        userAnswers = new Array(currentQuiz.length).fill(null);
        quizAnswers = currentQuiz.map(q => q.correct);
        currentQuestionIndex = 0;
        
        // Randomize answer options for each question
        currentQuiz.forEach(question => {
            const optionsWithCorrect = [
                { text: question.options[question.correct], isCorrect: true, originalIndex: question.correct },
                ...question.options.filter((_, index) => index !== question.correct)
                    .map((text, index) => ({ 
                        text, 
                        isCorrect: false, 
                        originalIndex: index >= question.correct ? index + 1 : index 
                    }))
            ];
            question.shuffledOptions = shuffleArray(optionsWithCorrect);
        });
        
        totalQuestions.textContent = currentQuiz.length;
        displayQuestion();
        hideQuizResult();
    }
}

function displayQuestion() {
    const question = currentQuiz[currentQuestionIndex];
    questionNumber.textContent = currentQuestionIndex + 1;
    questionText.textContent = question.question;
    
    answerOptions.innerHTML = '';
    question.shuffledOptions.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'answer-option';
        optionDiv.dataset.index = index;
        optionDiv.innerHTML = `
            <div class="option-letter">${String.fromCharCode(65 + index)}</div>
            <span>${option.text}</span>
        `;
        
        if (userAnswers[currentQuestionIndex] === index) {
            optionDiv.classList.add('selected');
        }
        
        answerOptions.appendChild(optionDiv);
    });
    
    updateQuizNavigation();
}

function selectAnswer(optionElement) {
    // Remove previous selection
    answerOptions.querySelectorAll('.answer-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Add selection to clicked option
    optionElement.classList.add('selected');
    
    // Store answer
    userAnswers[currentQuestionIndex] = parseInt(optionElement.dataset.index);
    
    updateQuizNavigation();
}

function updateQuizNavigation() {
    prevQuestion.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === currentQuiz.length - 1) {
        nextQuestion.classList.add('hidden');
        submitQuiz.classList.remove('hidden');
    } else {
        nextQuestion.classList.remove('hidden');
        submitQuiz.classList.add('hidden');
    }
}

function goToPrevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function goToNextQuestion() {
    if (currentQuestionIndex < currentQuiz.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
}

function submitQuizAnswers() {
    let correctAnswers = 0;
    
    currentQuiz.forEach((question, index) => {
        const userAnswerIndex = userAnswers[index];
        if (userAnswerIndex !== null && question.shuffledOptions[userAnswerIndex].isCorrect) {
            correctAnswers++;
        }
    });
    
    const percentage = Math.round((correctAnswers / currentQuiz.length) * 100);
    const wrongAnswers = currentQuiz.length - correctAnswers;
    
    // Update result display
    scorePercentage.textContent = percentage;
    correctCount.textContent = correctAnswers;
    wrongCount.textContent = wrongAnswers;
    totalCount.textContent = currentQuiz.length;
    
    // Score interpretation
    if (percentage >= 80) {
        scoreText.textContent = 'Excellent! Sangat baik!';
    } else if (percentage >= 60) {
        scoreText.textContent = 'Good! Cukup baik!';
    } else {
        scoreText.textContent = 'Perlu belajar lebih giat!';
    }
    
    showQuizResult();
}

function restartQuiz() {
    loadQuizData(currentGrade, currentDifficulty);
}

function showQuizResult() {
    quizResult.classList.remove('hidden');
    document.querySelector('.quiz-content').classList.add('hidden');
}

function hideQuizResult() {
    quizResult.classList.add('hidden');
    document.querySelector('.quiz-content').classList.remove('hidden');
}

function showLoading() {
    loadingOverlay.classList.remove('hidden');
}

function hideLoading() {
    loadingOverlay.classList.add('hidden');
}

// Network Animation Functions
function createNetworkAnimation() {
    const container = networkAnimation;
    container.innerHTML = '';
    
    // Create nodes
    const nodes = [
        { id: 'pc1', label: 'PC 1', x: 10, y: 50 },
        { id: 'router', label: 'Router', x: 50, y: 50 },
        { id: 'pc2', label: 'PC 2', x: 90, y: 50 }
    ];
    
    // Create connections
    const connections = [
        { from: 'pc1', to: 'router' },
        { from: 'router', to: 'pc2' }
    ];
    
    renderNetworkNodes(nodes);
    renderNetworkConnections(connections, nodes);
    animateDataPackets(connections, nodes);
}

function updateNetworkAnimation(type) {
    const container = networkAnimation;
    container.innerHTML = '';
    
    switch(type) {
        case 'lan':
            createLANAnimation();
            break;
        case 'wan':
            createWANAnimation();
            break;
        case 'protocol':
            createProtocolAnimation();
            break;
        default:
            createNetworkAnimation();
    }
}

function createLANAnimation() {
    const container = networkAnimation;
    const nodes = [
        { id: 'pc1', label: 'PC 1', x: 20, y: 30 },
        { id: 'pc2', label: 'PC 2', x: 80, y: 30 },
        { id: 'pc3', label: 'PC 3', x: 20, y: 70 },
        { id: 'switch', label: 'Switch', x: 50, y: 50 }
    ];
    
    const connections = [
        { from: 'pc1', to: 'switch' },
        { from: 'pc2', to: 'switch' },
        { from: 'pc3', to: 'switch' }
    ];
    
    renderNetworkNodes(nodes);
    renderNetworkConnections(connections, nodes);
    animateDataPackets(connections, nodes);
}

function createWANAnimation() {
    const container = networkAnimation;
    const nodes = [
        { id: 'lan1', label: 'LAN 1', x: 15, y: 50 },
        { id: 'isp', label: 'ISP', x: 50, y: 30 },
        { id: 'internet', label: 'Internet', x: 50, y: 70 },
        { id: 'lan2', label: 'LAN 2', x: 85, y: 50 }
    ];
    
    const connections = [
        { from: 'lan1', to: 'isp' },
        { from: 'isp', to: 'internet' },
        { from: 'internet', to: 'isp' },
        { from: 'isp', to: 'lan2' }
    ];
    
    renderNetworkNodes(nodes);
    renderNetworkConnections(connections, nodes);
    animateDataPackets(connections, nodes);
}

function createProtocolAnimation() {
    const container = networkAnimation;
    const nodes = [
        { id: 'app', label: 'App', x: 20, y: 20 },
        { id: 'tcp', label: 'TCP', x: 20, y: 40 },
        { id: 'ip', label: 'IP', x: 20, y: 60 },
        { id: 'eth', label: 'Ethernet', x: 20, y: 80 },
        { id: 'network', label: 'Network', x: 80, y: 50 }
    ];
    
    const connections = [
        { from: 'app', to: 'tcp' },
        { from: 'tcp', to: 'ip' },
        { from: 'ip', to: 'eth' },
        { from: 'eth', to: 'network' }
    ];
    
    renderNetworkNodes(nodes);
    renderNetworkConnections(connections, nodes);
    animateDataPackets(connections, nodes);
}

function renderNetworkNodes(nodes) {
    const container = networkAnimation;
    
    nodes.forEach(node => {
        const nodeElement = document.createElement('div');
        nodeElement.className = 'network-node';
        nodeElement.style.left = `${node.x}%`;
        nodeElement.style.top = `${node.y}%`;
        nodeElement.style.transform = 'translate(-50%, -50%)';
        nodeElement.textContent = node.label;
        nodeElement.id = `node-${node.id}`;
        container.appendChild(nodeElement);
    });
}

function renderNetworkConnections(connections, nodes) {
    const container = networkAnimation;
    
    connections.forEach((conn, index) => {
        const fromNode = nodes.find(n => n.id === conn.from);
        const toNode = nodes.find(n => n.id === conn.to);
        
        if (fromNode && toNode) {
            const connectionElement = document.createElement('div');
            connectionElement.className = 'network-connection';
            
            const deltaX = toNode.x - fromNode.x;
            const deltaY = toNode.y - fromNode.y;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            const angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;
            
            connectionElement.style.left = `${fromNode.x}%`;
            connectionElement.style.top = `${fromNode.y}%`;
            connectionElement.style.width = `${distance * container.offsetWidth / 100}px`;
            connectionElement.style.transform = `rotate(${angle}deg)`;
            connectionElement.style.transformOrigin = '0 50%';
            connectionElement.style.animationDelay = `${index * 0.5}s`;
            
            container.appendChild(connectionElement);
        }
    });
}

function animateDataPackets(connections, nodes) {
    const container = networkAnimation;
    
    connections.forEach((conn, index) => {
        const fromNode = nodes.find(n => n.id === conn.from);
        const toNode = nodes.find(n => n.id === conn.to);
        
        if (fromNode && toNode) {
            setTimeout(() => {
                const packet = document.createElement('div');
                packet.className = 'data-packet';
                packet.style.left = `${fromNode.x}%`;
                packet.style.top = `${fromNode.y}%`;
                packet.style.transform = 'translate(-50%, -50%)';
                
                container.appendChild(packet);
                
                // Animate packet movement
                setTimeout(() => {
                    packet.style.transition = 'all 2s linear';
                    packet.style.left = `${toNode.x}%`;
                    packet.style.top = `${toNode.y}%`;
                    
                    setTimeout(() => {
                        packet.remove();
                    }, 2000);
                }, 100);
            }, index * 1000);
        }
    });
    
    // Repeat animation
    setTimeout(() => {
        animateDataPackets(connections, nodes);
    }, connections.length * 1000 + 3000);
}

// Utility Functions
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Smooth scrolling for internal links
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Keyboard navigation for quiz
document.addEventListener('keydown', function(e) {
    if (!quizTab.classList.contains('active')) return;
    
    switch(e.key) {
        case 'ArrowLeft':
            if (!prevQuestion.disabled) goToPrevQuestion();
            break;
        case 'ArrowRight':
            if (!nextQuestion.classList.contains('hidden')) goToNextQuestion();
            break;
        case 'Enter':
            if (!submitQuiz.classList.contains('hidden')) submitQuizAnswers();
            break;
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
            const optionIndex = parseInt(e.key) - 1;
            const option = answerOptions.children[optionIndex];
            if (option) selectAnswer(option);
            break;
    }
});
