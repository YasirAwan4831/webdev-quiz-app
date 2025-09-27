# 🌐 Web Development Quiz App  

An **interactive and secure quiz platform** built with **HTML, CSS and JavaScript**.  
This app helps students prepare for **exams and viva** by practicing 300+ MCQs.  

**Key features include:  **
- Login with student name (to personalize experience).  
- Secure quiz interface (copy-protection, anti-cheating features).  
- Timer-based questions with automatic next-question handling.  
- Beautiful animations and responsive design.  
- Final score display with congratulatory message. <br> <hr>

## 📸 Preview  

###  Login Page
<img width="761" height="380" alt="image" src="https://github.com/user-attachments/assets/094e15d0-2fe3-4836-bd20-f5826859b6e0" /> <br>


##  Features  

- 🔑 **Login System** –
  - Users can enter their name, and the quiz starts personalized with their input.  <br>
- ⏳ **Timer-Based Quiz**
  - Each question has a limited time (15 seconds).  <br>
- 📊 **Scoring System**
  - Tracks correct answers and displays the final score at the end.  <br>
- 🛡 **Copy Protection** 
  - Right-click disabled, text selection disabled and keyboard shortcuts blocked (Ctrl + C, Ctrl + U, F12). <br> 
- 🎨 **Animations & UI**
  - Smooth transitions, modern design and responsive quiz interface.  <br>
- 🖨 **Print Protection**
    – Only the quiz container is visible when printing, everything else is hidden.  <br>

---

##  𝐒𝐜𝐫𝐞𝐞𝐧𝐬𝐡𝐨𝐭𝐬  

###  Login Page  
Users enter their name to start the quiz.  
Login Screenshot <img width="761" height="380" alt="image" src="https://github.com/user-attachments/assets/03a8fa23-3e8b-447c-aa18-9938d42caa4f" /> <br>
  

###  Quiz Interface  ?
Questions are displayed in a multiple-choice format with a timer and answer options.  
Quiz Interface Screenshot<img width="828" height="619" alt="image" src="https://github.com/user-attachments/assets/e085362b-9393-4867-b387-681c4eaa606c" />
<br>

###  Correct Answer Example  
When the user selects the correct answer, the button turns green and a success message appears.  
Correct Output <img width="900" height="628" alt="image" src="https://github.com/user-attachments/assets/1874d433-db99-4c96-8283-a18b9e825b64" />
  <br>

###  Incorrect Answer Example  
When the user selects the wrong answer, the button turns red and a warning message appears.  
Incorrect Output (./docu/images/uncorrect_output.jpg)  <br><br> <hr>


## Installation & Usage  

Follow the steps below to set up and run the project locally:  

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/YasirAwan4831/webdev-quiz-app.git
    <br>

2. **Navigate to the Project Folder**
   cd webdev-quiz-app
    <br>


3. **Open in VS Code (or any code editor)**
  code .
 <br>

4. **Run the Application**
    Simply open index.html or quiz.html in your browser.
    Make sure JavaScript is enabled. <br>
 <br><hr>


## 𝐅𝐨𝐥𝐝𝐞𝐫 𝐒𝐭𝐫𝐮𝐜𝐭𝐮𝐫𝐞
webdev-quiz-app/
│
├── index.html                # Login page (enter name to start quiz)<br>
├── quiz.html                 # Main quiz page <br>
│
├── css/ <br>
│   └── style.css             # Styles for UI & animations <br>
│
├── js/ <br>
│   ├── auth.js               # Handles login (name entry) <br>
│   └── quiz.js               # Core quiz logic (timer, scoring, protection) <br>
│
├── questions/ <br>
│   └── mcqs.js               # Question bank (300+ questions) <br>
│
├── docu/ <br>
│   ├── quiz_documentation.pdf  # Project documentation <br>
│   └── images/                 # Screenshots  <br>
│
├── LICENSE.txt               # MIT License <br>
└── .gitignore                # Ignore unnecessary files <br>
<hr><br>

##  Contributing  

Contributions, issues, and feature requests are welcome!  
Feel free to fork this repo and submit a Pull Request.  <br>

Steps to contribute:  
1. Fork the repository  
2. Create a new branch (`git checkout -b feature-branch`)  
3. Make your changes  
4. Commit your changes (`git commit -m "Add new feature"`)  
5. Push to the branch (`git push origin feature-branch`)  
6. Create a Pull Request  

---<br>

##  License  

This project is licensed under the **MIT License** – see the [LICENSE](./LICENSE.txt) file for details.  
  
---<br> 

## 🌐 Live Demo  

 You can view the live version of this project here:  
 [Web Development Quiz App - Live](https://yasirawan4831.github.io/webdev-quiz-app/)  <br> <hr>



### Future Enhancements
To make the quiz system more scalable, user-friendly, and widely applicable in educational 
contexts, the following enhancements can be implemented in the future:

1 **Mobile Application (Android/iOS)**
Develop the system as a dedicated mobile app, ensuring that students can access 
quizzes conveniently from their smartphones and tablets anytime, anywhere. <br>

2. **SaaS-Based Platform**
Deploy the solution as a Software-as-a-Service (SaaS) application, enabling schools, 
colleges, and training institutes to create accounts, upload their own question banks, 
and conduct secure online assessments. <br>

3. **Database Integration** 
Replace the static, hardcoded question bank with a backend database system (e.g., 
MySQL, MongoDB) that allows dynamic storage, retrieval, and management of quiz 
content. This would make the system scalable and easier to maintain. <br>

4. **Enhanced Analytics and Reporting** 
Introduce detailed performance analytics including accuracy rates, progress charts, and 
personalized feedback to help students identify weak areas and improve over time. <br>

5. **Gamification Features** 
Add leaderboards, badges, rewards, and progress milestones to make learning more 
engaging, competitive, and motivating for students.<br>

7. **Multi-language Support**
Extend the system to support multiple languages, making it inclusive and accessible to 
learners from diverse backgrounds.<br>

9. **Offline Accessibility**
Provide an option for offline quiz attempts by allowing users to download quizzes and 
synchronize results when they reconnect to the internet. <br><hr>


### Author

**Muhammad Yasir**
 Passionate Web Developer & IT Student











