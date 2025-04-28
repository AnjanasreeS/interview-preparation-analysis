// Mock data placeholders
let textFeedback = "";
let voiceFeedback = "";
let gestureFeedback = "";

// Handle text submission
document.getElementById("submit-text").addEventListener("click", () => {
  const response = document.getElementById("typed-response").value;
  if (response.trim()) {
    textFeedback = "Great structure in your typed answer. Try elaborating technical aspects more.";
    alert("Text submitted for analysis.");
  } else {
    alert("Please type your response first.");
  }
});

// Voice Recording
document.getElementById("start-voice").addEventListener("click", () => {
  voiceFeedback = "Good pace and tone. Reduce filler words like 'um' and 'like'.";
  document.getElementById("voice-feedback").innerText = "Voice analysis in progress...";
  setTimeout(() => {
    document.getElementById("voice-feedback").innerText = voiceFeedback;
  }, 2000);
});

document.getElementById("stop-voice").addEventListener("click", () => {
  document.getElementById("voice-feedback").innerText += "\nVoice recording stopped.";
});

// Gesture Analysis
document.getElementById("start-gesture").addEventListener("click", () => {
  gestureFeedback = "Hand gestures were expressive. Maintain them within camera view.";
  document.getElementById("gesture-feedback").innerText = "Gesture analysis running...";
  setTimeout(() => {
    document.getElementById("gesture-feedback").innerText = gestureFeedback;
  }, 2000);
});

document.getElementById("stop-gesture").addEventListener("click", () => {
  document.getElementById("gesture-feedback").innerText += "\nGesture analysis stopped.";
});

// Show feedback
function showFeedback(type) {
  const feedbackBox = document.getElementById("feedback-display");
  const chart = document.getElementById("performance-chart");
  feedbackBox.innerHTML = "";
  chart.style.display = "none";

  if (type === "hr") {
    feedbackBox.innerText = "HR Feedback: Show more confidence and mention your goals clearly.";
  } else if (type === "technical") {
    feedbackBox.innerText = "Technical Feedback: Dive deeper into problem-solving examples.";
  } else if (type === "behavioral") {
    feedbackBox.innerText = "Behavioral Feedback: Use the STAR method consistently.";
  } else if (type === "overall") {
    feedbackBox.innerHTML = `
      <p><strong>Text Analysis:</strong> ${textFeedback || "No text feedback yet."}</p>
      <p><strong>Voice Analysis:</strong> ${voiceFeedback || "No voice feedback yet."}</p>
      <p><strong>Gesture Analysis:</strong> ${gestureFeedback || "No gesture feedback yet."}</p>
    `;
    chart.style.display = "block";
    displayChart();
  }
}

function displayChart() {
  const ctx = document.getElementById("performance-chart").getContext("2d");
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Text', 'Speech', 'Gesture'],
      datasets: [{
        label: 'Performance (%)',
        data: [
          textFeedback ? 75 : 0,
          voiceFeedback ? 85 : 0,
          gestureFeedback ? 65 : 0
        ],
        backgroundColor: ['#4CAF50', '#2196F3', '#FF9800']
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });
}





// Mock data placeholders for Text and Voice (Gesture feedback is handled differently now)
let textFeedback = "";
let voiceFeedback = "";
// We'll use a flag or check the element's content for gesture analysis status later
let gestureAnalysisRan = false; // Flag to indicate if gesture analysis was started

// --- Configuration for Gesture Analysis ---
const ANALYSIS_INTERVAL_MS = 100000; // Provide feedback every 4 seconds

// --- State Variables for Gesture Analysis ---
let analysisInterval = null; // To store the interval ID for gestures
let isAnalyzingGestures = false; // To track if gesture analysis is running

// --- Feedback Options (Simulated Gestures) ---
const gestureFeedbackOptions = [
    "Gestures are clear and support your points.",
    "Good use of hand movements to emphasize.",
    "Try to keep gestures within the camera frame.",
    "Gestures seem a bit repetitive. Vary them.",
    "Hand movements look natural and engaging.",
    "Avoid fidgeting or distracting gestures.",
    "Gestures are energetic and dynamic.",
    "Consider using slightly larger gestures for impact.",
    "Ensure gestures don't block your face.",
];

const emotionFeedbackOptions = [ // Simulated based on hypothetical analysis
    "Expression appears engaged and interested.",
    "Seems focused and attentive.",
    "Facial expression looks positive and open.",
    "Consider smiling more to connect with the audience.",
    "Expression seems a bit neutral; try showing more enthusiasm.",
    "Appears calm and composed.",
];

const confidenceFeedbackOptions = [ // Simulated based on hypothetical analysis
    "Posture looks confident and upright.",
    "Appears self-assured and knowledgeable.",
    "Maintain eye contact (simulated) with the camera.",
    "Confidence is projected well through body language.",
    "Seems slightly hesitant; stand tall.",
    "Projecting good energy and confidence.",
];


// --- DOM Element References ---
const startGestureButton = document.getElementById("start-gesture");
const stopGestureButton = document.getElementById("stop-gesture");
const gestureFeedbackArea = document.getElementById("gesture-feedback");
const startVoiceButton = document.getElementById("start-voice");
const stopVoiceButton = document.getElementById("stop-voice");
const voiceFeedbackArea = document.getElementById("voice-feedback");
const textResponseInput = document.getElementById("typed-response");
const submitTextButton = document.getElementById("submit-text");
const feedbackDisplayArea = document.getElementById("feedback-display");
const performanceChartCanvas = document.getElementById("performance-chart");


// --- Helper Function ---
function getRandomElement(arr) {
    if (!arr || arr.length === 0) {
        return "";
    }
    return arr[Math.floor(Math.random() * arr.length)];
}


// --- Text Analysis ---
submitTextButton.addEventListener("click", () => {
    const response = textResponseInput.value;
    if (response.trim()) {
        // Simulate more detailed text feedback generation here if needed
        textFeedback = "Great structure in your typed answer. Consider elaborating on technical challenges faced and how you overcame them.";
        alert("Text submitted for analysis.");
    } else {
        alert("Please type your response first.");
    }
});


// --- Voice Recording (Original Simulation Logic) ---
startVoiceButton.addEventListener("click", () => {
    // In a real app, you would start actual recording here (e.g., using MediaRecorder API)
    voiceFeedback = "Good pace and tone. Focus on reducing filler words like 'um' and 'uh'. Pauses can be effective.";
    voiceFeedbackArea.innerText = "Voice analysis in progress...";
    // Simulating delay for analysis
    setTimeout(() => {
        voiceFeedbackArea.innerText = voiceFeedback;
    }, 2000);
});

stopVoiceButton.addEventListener("click", () => {
    // In a real app, you would stop recording and potentially send audio for analysis
    voiceFeedbackArea.innerText += "\nVoice recording stopped.";
});


// --- Gesture Analysis (Enhanced Simulation Logic) ---

// Function to generate and display gesture feedback periodically
// --- Configuration for Gesture Analysis ---
const ANALYSIS_INTERVAL_MS = 10000; // Provide feedback every 10 seconds
const INITIAL_FEEDBACK_DELAY_MS = 15000; // First feedback after 15 seconds
const MAX_ANALYSIS_DURATION_MS = 60000; // Stop analysis automatically after 1 minute

// --- Function to generate and display gesture feedback periodically
function provideGestureFeedback() {
    if (!isAnalyzingGestures) return;

    const currentGestureFeedback = getRandomElement(gestureFeedbackOptions);
    const currentEmotionFeedback = getRandomElement(emotionFeedbackOptions);
    const currentConfidenceFeedback = getRandomElement(confidenceFeedbackOptions);

    gestureFeedbackArea.innerHTML = `
        <strong>Gesture Analysis:</strong> ${currentGestureFeedback}<br>
        <strong>Emotion (Simulated):</strong> ${currentEmotionFeedback}<br>
        <strong>Confidence (Simulated):</strong> ${currentConfidenceFeedback}
    `;
}

// --- Function to start the gesture analysis
function startGestureAnalysis() {
    if (isAnalyzingGestures) {
        console.log("Gesture analysis is already running.");
        return;
    }
    isAnalyzingGestures = true;
    gestureAnalysisRan = true;
    gestureFeedbackArea.innerText = "Starting gesture analysis...";
    console.log("Gesture analysis started.");

    // Initial feedback after delay, then run periodically
    setTimeout(() => {
        if (!isAnalyzingGestures) return;
        provideGestureFeedback();
        analysisInterval = setInterval(provideGestureFeedback, ANALYSIS_INTERVAL_MS);
    }, INITIAL_FEEDBACK_DELAY_MS);

    // Auto-stop after max duration
    setTimeout(() => {
        stopGestureAnalysis();
    }, MAX_ANALYSIS_DURATION_MS);

    startGestureButton.disabled = true;
    stopGestureButton.disabled = false;
}

// --- Function to stop the gesture analysis
function stopGestureAnalysis() {
    if (!isAnalyzingGestures) {
        console.log("Gesture analysis is not running.");
        return;
    }
    isAnalyzingGestures = false;
    clearInterval(analysisInterval);
    analysisInterval = null;

    gestureFeedbackArea.innerHTML += "<br><strong>--- Gesture Analysis Stopped ---</strong>";
    console.log("Gesture analysis stopped.");

    startGestureButton.disabled = false;
    stopGestureButton.disabled = true;
}


// Function to stop the gesture analysis
function stopGestureAnalysis() {
    if (!isAnalyzingGestures) {
        console.log("Gesture analysis is not running.");
        return; // Don't stop if not running
    }
    isAnalyzingGestures = false;
    clearInterval(analysisInterval); // Stop the interval timer
    analysisInterval = null;
    // Append stopped message, keeping the last feedback visible
    gestureFeedbackArea.innerHTML += "<br><strong>--- Gesture Analysis Stopped ---</strong>";
    console.log("Gesture analysis stopped.");

    // Update button states
    startGestureButton.disabled = false;
    stopGestureButton.disabled = true;
}

// Event Listeners for Gesture Analysis
startGestureButton.addEventListener("click", startGestureAnalysis);
stopGestureButton.addEventListener("click", stopGestureAnalysis);


// --- Show Feedback Function (Adjusted) ---
function showFeedback(type) {
    feedbackDisplayArea.innerHTML = ""; // Clear previous feedback
    performanceChartCanvas.style.display = "none"; // Hide chart by default

    if (type === "hr") {
        feedbackDisplayArea.innerText = "HR Feedback: Focus on demonstrating teamwork and conflict resolution skills with specific examples. Show enthusiasm for the role and company.";
    } else if (type === "technical") {
        feedbackDisplayArea.innerText = "Technical Feedback: Clearly articulate your thought process when solving problems. Explain trade-offs in your technical decisions. Provide concrete examples of complex projects.";
    } else if (type === "behavioral") {
        feedbackDisplayArea.innerText = "Behavioral Feedback: Ensure consistent use of the STAR method (Situation, Task, Action, Result) for all behavioral questions. Quantify results where possible.";
    } else if (type === "overall") {
        // Get current gesture feedback from the element, or provide a default message
        // Note: This captures the *last* state shown in the gesture feedback area.
        let currentGestureDisplay = gestureFeedbackArea.innerHTML;
        if (!gestureAnalysisRan) {
             currentGestureDisplay = "No gesture analysis performed yet.";
        } else if (isAnalyzingGestures) {
             currentGestureDisplay += "<br><i>(Gesture analysis still in progress)</i>";
        }


        feedbackDisplayArea.innerHTML = `
          <p><strong>Text Analysis:</strong> ${textFeedback || "No text feedback yet."}</p>
          <hr>
          <p><strong>Voice Analysis:</strong> ${voiceFeedback || "No voice feedback yet."}</p>
          <hr>
          <p><strong>Gesture Analysis Summary:</strong><br>${currentGestureDisplay}</p>
        `;
        // Show and update the chart
        performanceChartCanvas.style.display = "block";
        displayChart(); // Call displayChart to potentially update it
    }
}

// --- Display Chart Function (Adjusted) ---
// Keep track of the chart instance to destroy it before creating a new one
let currentChart = null;

function displayChart() {
    const ctx = performanceChartCanvas.getContext("2d");

    // Destroy previous chart instance if it exists
    if (currentChart) {
        currentChart.destroy();
    }

    // Determine scores (using fixed examples for now, adjust as needed)
    // The gesture score now checks if the analysis ran at all.
    const textScore = textFeedback ? 75 : 0;
    const voiceScore = voiceFeedback ? 85 : 0;
    const gestureScore = gestureAnalysisRan ? 70 : 0; // Assign a score if analysis ran

    currentChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Text Structure', 'Voice Clarity', 'Gesture Engagement (Sim.)'],
            datasets: [{
                label: 'Estimated Performance (%)',
                data: [textScore, voiceScore, gestureScore],
                backgroundColor: ['#4CAF50', '#2196F3', '#FF9800'],
                borderColor: ['#388E3C', '#1976D2', '#F57C00'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // Allow chart to resize better
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Performance Score'
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Overall Performance Areas'
                }
            }
        }
    });
}

// --- Initial State ---
// Ensure stop buttons are initially disabled
stopVoiceButton.disabled = true; // Assuming voice also needs start/stop logic like this
stopGestureButton.disabled = true;

// Add event listeners for the feedback type buttons (assuming you have buttons with these onclick attributes)
// Example: <button onclick="showFeedback('hr')">HR Feedback</button>
//          <button onclick="showFeedback('technical')">Technical Feedback</button>
//          <button onclick="showFeedback('behavioral')">Behavioral Feedback</button>
//          <button onclick="showFeedback('overall')">Overall Summary</button>