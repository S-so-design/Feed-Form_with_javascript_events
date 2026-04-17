# 📊 Data Engineering + Feedback System Project

This repository contains a combined project that demonstrates **web development, backend data collection, and data engineering using PySpark (via Colab)**.

It merges two systems:
- 📝 Feedback Form Web App
- 🤖 AI ID Verification System
- ⚙️ Data Engineering / Analytics Pipeline (PySpark in Colab)

---

# 🚀 Project Overview

This project simulates a real-world data pipeline where user data is:
1. Collected through a web interface
2. Stored as structured JSON data
3. Processed using PySpark for analytics
4. Extended with AI-based verification logic (separate module)

---

# 🧩 Modules

## 1. Feedback Form System
- Built using HTML, CSS, JavaScript
- Collects user name, rating, and feedback
- Sends data to backend (Flask / JSON storage)
- Displays recent feedback dynamically

---

## 2. AI ID Verifier
- Separate module for identity verification logic
- Simulates AI-based validation workflow
- Designed for authentication / validation experiments

---

## 3. Data Engineering Pipeline (PySpark)
- Built using PySpark in Google Colab
- Reads JSON feedback data
- Performs analytics:
  - Rating distribution
  - Average rating
  - Data grouping

Example operations:
- Group by rating
- Count feedback entries
- Compute average rating

---

# 🛠️ Tech Stack

- HTML5, CSS3, JavaScript
- Python
- Flask (backend API)
- PySpark (data processing)
- Google Colab (for Spark execution)
- Git & GitHub

---

# 📊 Sample PySpark Output
