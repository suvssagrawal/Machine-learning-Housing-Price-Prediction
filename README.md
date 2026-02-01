🏠 Bangalore House Price Prediction (ML + Flask)

This project is an end-to-end Machine Learning web application that predicts house prices in Bangalore based on user inputs such as area (sqft), number of bedrooms (BHK), number of bathrooms, and location.

The project uses a trained ML regression model served via a Flask backend API, and a HTML/CSS/JavaScript frontend to interact with the model.

📌 Features

Predict house prices in Bangalore (in Lakhs)

Dynamic location list loaded from trained model features

Machine Learning model trained on real housing data

Flask REST API for predictions

Simple and responsive frontend UI

Proper separation of frontend, backend, and model logic

🗂️ Project Structure
Main Project Housing Prediction Model/
│
├── client/                 # Frontend files
│   ├── app.html
│   ├── app.css
│   └── app.js
│
├── server/                 # Backend (Flask)
│   ├── server.py
│   ├── util.py
│   └── artifacts/
│       ├── columns.json
│       └── banglore_home_prices_model.pickle
│
├── Model/                  # Model training & analysis
│   ├── Housing Price Prediction ML Project.ipynb
│   ├── Bengaluru_House_Data.csv
│   └── bhp.csv
│
└── README.md

🧠 Machine Learning Details

Algorithm: Regression (Linear Regression with feature engineering)

Libraries: NumPy, Pandas, scikit-learn

Target: House price (Lakhs)

Features:

Total square feet

Number of bathrooms

Number of bedrooms (BHK)

Location (one-hot encoded)

The trained model is saved using pickle and loaded by the Flask backend.

-- Backend (Flask API)

The backend exposes the following endpoints:

🔹 Get all locations
GET /get_location_names


Returns a list of all available locations used during model training.

🔹 Predict house price
POST /predict_home_price


Parameters:

total_sqft

bhk

bath

location

Response:

{
  "estimated_price": 75.34
}

-- Frontend

The frontend is built using:

HTML

CSS

JavaScript (jQuery)

Functionality:

User enters house details

JavaScript sends request to Flask API

Predicted price is displayed dynamically

▶️ How to Run the Project
1️⃣ Start the Flask backend
cd server
python server.py


You should see:

Starting Python Flask Server For Home Price Prediction...
Running on http://127.0.0.1:5000/

2️⃣ Open the frontend

Open the file:

client/app.html


⚠️ Important:
The frontend uses absolute backend URLs (http://127.0.0.1:5000), so the Flask server must be running before using the UI.

🛠️ Technologies Used

Python

Flask

NumPy

Pandas

scikit-learn

HTML, CSS, JavaScript

jQuery

Git & GitHub

--Learning Outcomes

End-to-end ML project workflow

Feature engineering and model training

Model serialization using pickle

REST API development with Flask

Frontend–backend communication using AJAX

Handling CORS and browser security issues

Version control with Git & GitHub

--Future Improvements

Serve frontend directly via Flask templates

Add input validation and error handling

Deploy on cloud (AWS / Render / Heroku)

Improve model accuracy using advanced algorithms

Add authentication and logging

👨‍🎓 Author

Suvan Agrawal
Engineering Student – Information Technology
Main Project: Housing Price Prediction