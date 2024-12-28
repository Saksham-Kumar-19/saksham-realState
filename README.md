# 🏡 Real Estate Full-Stack Application

## 📚 **Project Overview**

This is a full-stack real estate application built with **MongoDB**, **Express.js**, **React.js**, and **Node.js** (MERN stack). The application allows users to:

- **Register and Login:** Users can register and log in using their credentials.
- **View Property Listings:** Logged-in users can view detailed listings of properties.
- **Store User Data in MongoDB:** User credentials are securely stored in MongoDB.
- **Access Data Dynamically:** The frontend communicates with the backend API to fetch and display data.

---

## 🚀 **Tech Stack**

### **Frontend:**

- React.js
- Axios
- React Router DOM
- CSS for Styling

### **Backend:**

- Node.js
- Express.js
- MongoDB (via Mongoose)
- bcryptjs (Password Hashing)

### **Database:**

- MongoDB Atlas (or Local MongoDB Instance)

### **Tools:**

- Postman (API Testing)
- npm (Node Package Manager)

---

## 📁 **Project Structure**

```
/real-estate-app
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.js
│   │   ├── index.js
│   ├── public/
│   ├── .env
│
├── README.md
└── package.json
```

---

## 🛠️ **Backend Setup**

1. **Clone the repository:**

```bash
git clone <repository-url>
cd backend
```

2. **Install dependencies:**

```bash
npm install
```

3. **Environment Variables:** Create a `.env` file in the `backend` directory:

```
MONGO_URI=<your-mongodb-uri>
PORT=5000
```

4. **Start the backend server:**

```bash
npm run dev
```

The backend server will run at `http://localhost:5000`.

---

## 🖥️ **Frontend Setup**

1. **Navigate to the frontend directory:**

```bash
cd frontend
```

2. **Install dependencies:**

```bash
npm install
```

3. **Environment Variables:** Create a `.env` file in the `frontend` directory:

```
REACT_APP_API_URL=http://localhost:5000/api
```

4. **Start the frontend server:**

```bash
npm start
```

The frontend server will run at `http://localhost:3000`.

---

## 📑 **API Endpoints**

### **Authentication Routes:**

- **POST /api/auth/register** → Register a new user
- **POST /api/auth/login** → Login with credentials

### **Property Routes:**

- **GET /api/properties** → Get all properties
- **POST /api/properties** → Create a property
- **PUT /api/properties/\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*****:id** → Update a property
- **DELETE /api/properties/\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*****:id** → Delete a property

### **User Routes:**

- **GET /api/users** → Get all users
- **GET /api/users/\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*****:id** → Get user by ID
- **PUT /api/users/\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*****:id** → Update user by ID
- **DELETE /api/users/\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*****:id** → Delete user by ID

---

## 🌐 **How to Use the Application**

1. **Register as a New User:** Navigate to `/register`.
2. **Login:** Use your credentials to log in at `/`.
3. **View Listings:** Navigate to `/listings` to view property details.
4. **Logout:** Use the Logout button to clear the session.

---

## ✅ **Key Features**

- Secure password storage using `bcryptjs`.
- Dynamic property listings with React.
- User session management with `localStorage`.
- Backend API validation and error handling.
- Clean and responsive UI.

---

## 🚀 **Deployment**

- **Frontend:** Vercel
- **Backend:** Vercel\*\*(Not Working)\*\*

Ensure the `.env` files are configured correctly for production.

