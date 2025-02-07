# Number Classification API

## 📌 Overview

This API classifies numbers based on various mathematical properties such as:

- **Prime Numbers**
- **Perfect Numbers**
- **Armstrong Numbers & Even/Odd**
- **Digit Sum Calculation**
- **Fun Facts** (Fetched from [Numbers API](http://numbersapi.com/))

## 🚀 Getting Started

### **1️⃣ Installation**

Clone the repository and install dependencies:

```sh
git clone <your-repo-url>
cd <your-project-folder>
npm install
```

### **2️⃣ Environment Variables**

Create a `.env` file in the root directory and add:

```sh
PORT=3000
```

### **3️⃣ Running the Server**

Start the Express server:

```sh
npm start
```

The server runs on `http://localhost:3000` (or the specified PORT in the `.env` file).

## 📌 API Endpoint

### **GET /api/classify-number**

Fetches properties of a given number.

#### **Request Example:**

```sh
GET http://localhost:3000/api/classify-number?number=371
```

#### **Query Parameters:**

| Parameter | Type    | Required | Description            |
| --------- | ------- | -------- | ---------------------- |
| number    | integer | ✅ Yes   | The number to classify |

#### **Response Example:**

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": {
    "is_armstrong": true,
    "is_even": false
  },
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number."
}
```

## 📌 Project Structure

```
.
├── helpers/              # Utility functions (Prime, Perfect, Armstrong checkers, etc.)
├── schema/               # Zod validation schemas
├── controllers/          # API logic (number classification)
├── routes/               # Express route handlers
├── .env                  # Environment variables
├── server.js             # Main application entry point
├── README.md             # Documentation
```

## 📌 Technologies Used

- **Node.js** + **Express.js** – Backend
- **Zod** – Input validation
- **Fetch API** – External number facts

## 📌 Contributing

Feel free to submit issues or pull requests to improve this project!

## 📌 License

This project is licensed under the MIT License.
