# 🏃‍♂️ Ege's Running Analytics App

**You can see the app in https://egeural.github.io/MyRunningApp/ adress**

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Strava](https://img.shields.io/badge/strava-fc4c02?style=for-the-badge&logo=strava&logoColor=white)

Welcome to my personal running web app! This project connects to **Strava** to analyze running activities, estimate **VO₂ Max**, track **effort levels**, and offer **recovery recommendations** based on scientific sources.

---

## 🚀 Features

- **🔗 Strava Integration**: Seamlessly authenticate and fetch recent activities including distance, time, pace, and heart rate.
- **📊 Activity Visualization**: Beautiful charts and a clean, responsive layout to display your run stats.
- **🫀 VO₂ Max Estimator**: Estimate aerobic fitness using scientific formulas based on pulse rate or heart rate.
- **📈 Heart Rate vs. Pace**: Visual analysis of the relationship between your specific running pace and heart rate.
- **😰 Effort Level Tracking**: Rate perceived difficulty (RPE 1–10) to track training load over time.
- **🧘 Recovery Tips**: Access professional recovery advice sourced from coaching experts and research.
- **📚 Verified Sources**: Full academic-style citations for all scientific methods used.

---

## 📸 Screenshots
| Screenshot 1 | Screenshot 2 |
|---------------|---------------|
| ![Dashboard](https://github.com/user-attachments/assets/7a501bdd-ad58-46d2-bac5-c1fcab443606) | ![Mobile](https://github.com/user-attachments/assets/691f8f22-148b-4efd-9607-5c7f8669b9db) |

---

## 🛠️ Tech Stack

### **Frontend**
- **React.js** (created with Create React App)
- **Recharts** for data visualization
- **React Router** for navigation
- **Vanilla CSS** for custom styling

### **Backend**
- **Node.js** & **Express**
- **Axios** for API requests

---

## 🏁 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/)
- A [Strava](https://www.strava.com/) account

### 1️⃣ Backend Setup

The backend handles the OAuth exchange with Strava.

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node server.js
   ```
   The backend will run on `http://localhost:5000`.

### 2️⃣ Frontend Setup

The frontend displays your data and visualizations.

1. Open a new terminal and navigate to the root directory (where the main `package.json` is):
   ```bash
   cd ..
   # or just ensure you are in the root 'MyRunningApp' folder if starting fresh
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React app:
   ```bash
   npm start
   ```
   The app will launch in your browser at `http://localhost:3000`.

---

## ⚙️ Configuration

The project currently uses a hardcoded configuration for the Strava API in `backend/server.js`.
To use your own Strava API credentials:
1. Open `backend/server.js`.
2. Replace `STRAVA_CLIENT_ID` and `STRAVA_CLIENT_SECRET` with your own credentials from your [Strava API Settings](https://www.strava.com/settings/api).

---

## 📄 License

This project is for personal use and portfolio demonstration.
