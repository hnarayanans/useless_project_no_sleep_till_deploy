<img width="1280" height="640" alt="git (1)" src="https://github.com/user-attachments/assets/8920b256-2ba8-4988-b824-5351134eb4bd" />



# PONJIKKARA 🎯


## Basic Details
### Team Name: No_Sleep_Till_Deploy


### Team Members
- Team Lead: Harinarayanan S - NSS College Of Engineering
- Member 2: Nidhin Shan - NSS College Of Engineering

### Project Description
Ponjikkara is a completely unnecessary virtual gym where you can “work out” without actually going to a gym. Using your camera and hand gestures, the system detects your movements and turns them into simple, funny virtual exercises and challenges.

### The Problem (that doesn't exist)
Going to the gym requires leaving your room, changing clothes, finding motivation, and actually exercising.
Clearly, this is too much effort. 😭
So we identified a serious problem:
“How can I feel like I worked out without experiencing the inconvenience of going to the gym?”

### The Solution (that nobody asked for)
Ponjikkara Virtual Gym™ brings the gym directly to your screen.
Just turn on your camera, move your hands, and let Ponjikkara pretend you're exercising. Your gestures control the workout, challenges, and ridiculous virtual activities — no gym membership, no equipment, and preferably no actual effort.
Because why lift weights when you can lift your hand in front of a webcam and call it fitness? 💀

## Technical Details
### Technologies/Components Used
For Software:
-Languages Used: JavaScript (ES6+), HTML5, CSS3

-Frameworks Used: Vite (Development server and build tooling), Tailwind CSS (Utility-first styling framework)

-Libraries Used:

-@mediapipe/tasks-vision (Google MediaPipe library for real-time hand gesture recognition)

-Tools Used: Visual Studio Code, Git, GitHub, Node.js, npm, Windows PowerShell

For Hardware:

-Main Components:

-Standard PC/Laptop system

-HD Webcam / Integrated Camera Module

-Specifications:

-Processor: Dual-Core CPU @ 2.0GHz or higher

-RAM: 4GB minimum (8GB recommended for hardware-accelerated MediaPipe model execution)

-Camera Resolution: 720p at 30fps minimum

-Tools Required: USB Connection interface (for external webcams), Web Browser supporting WebGL & WebRTC (Google Chrome, Microsoft Edge, Firefox, or Brave)

### Implementation
For Software:

-The software pipeline integrates computer vision into a web interface through a modular JavaScript architecture:

-User Interface (index.html):

-Uses HTML5 <video> and <canvas> elements to capture real-time webcam video streams.

-Styled with Tailwind CSS utility classes to render responsive controls, exercise state indicators, and feedback counters.

-Hand Gesture Recognition Module (gesture.js):

-Initializes Google’s MediaPipe Vision tasks model using WebAssembly (wasm) and GPU acceleration.

-Uses getUserMedia() WebRTC APIs to gain secure browser permissions for local camera access.

-Runs an asynchronous continuous loop via requestAnimationFrame() to sample video frames.

-Detects key hand landmarks and classifies hand shapes into pre-trained gesture categories (Closed_Fist, Thumb_Up, Victory, Open_Palm, Pointing_Up).

-Implements a debouncing algorithm (cooldown timer) to prevent duplicate rep triggers during continuous gesture holds.

-Application Control Logic (main.js):

-Maps specific detected hand gestures to corresponding gym exercises (e.g., mapping a clenched fist to bench press or a peace sign to bicep curls).

-Intercepts recognized gestures matching the currently active workout set.

-Triggers event listeners to automatically increment rep counts and update state metrics in real time.


# Installation
# 1. Clone the repository
git clone https://github.com/hnarayanans/useless_project_no_sleep_till_deploy.git

# 2. Navigate into the project directory
cd useless_project_no_sleep_till_deploy

# 3. Install project dependencies
npm install


# Run

# Start the local Vite development server
npm run dev

### Project Documentation
For Software:
1. Architecture & Data Flow

Video Capture Layer: Accesses the user's webcam feed using the browser's native navigator.mediaDevices.getUserMedia() WebRTC API and streams it to an HTML5 <video> element.

Computer Vision Pipeline: Loads Google’s @mediapipe/tasks-vision engine via WebAssembly (wasm) with GPU delegation for low-latency frame evaluation.

Recognition Engine (gesture.js): Executes an asynchronous prediction loop using requestAnimationFrame() to analyze incoming video frames, outputting gesture labels (e.g., Closed_Fist, Thumb_Up, Victory) with confidence metrics.

Event & Rep Controller (main.js): Maps recognized gestures to specific workout routines and dispatches event triggers to increment repetition counters when a gesture matches the active exercise requirement.

2. Key Features

Touchless Interaction: Allows users to interact with and control their workout progress hands-free during exercise routines.

Debounced Triggering: Implements a time-window debouncing mechanism to prevent multiple unintended rep counts from a single sustained gesture.

Responsive Visual Feedback: Real-time status indicators provide visual confirmation of the detected gesture and active tracking state.

# Screenshots,Demo and Working
Click the link to bless your eyes with Ponjikkara 👀💪
https://drive.google.com/drive/folders/1rPajjKXAVxEg2gz_rqEa2CQim8Im5Y3L?usp=sharing



## Team Contributions

- Harinarayanan S:(hnarayanans) — 

The Repository Master & Architecture Whisperer
Built the core application framework and project structure.
Designed the backend architecture and Git repository setup.
Expertly managed remote branches, pull requests, and Git conflict resolution.
Provided moral support while watching terminal merge errors get resolved.

- Nidhin Shan:(NidhinShan)
The Visionary & Gesture Commander
Integrated Google MediaPipe AI model for real-time hand gesture tracking.
Engineered the webcam recognition loop and mapped physical gestures to workout reps.
Mastered the art of pushing code to GitHub after surviving 403 permission errors.
Spent endless hours waving hands at a webcam to test if a clenched fist actually counts a bench press.

---
Made with ❤️ at TinkerHub Useless Projects 

![Static Badge](https://img.shields.io/badge/TinkerHub-24?color=%23000000&link=https%3A%2F%2Fwww.tinkerhub.org%2F)
![Static Badge](https://img.shields.io/badge/UselessProjects--26-26?link=https%3A%2F%2Ftinkerhub.org%2Fevents%2F1M8ORET9A1%2Fuseless-projects-3.0)



