# Jobs Search Portal

## Overview
Jobs Search Portal is a responsive multi-page application designed for job seekers and employers. It features secure user authentication, role-based access control (RBAC), job filters, and real-time notifications to enhance user engagement.

## Live Demo
You can view the live application at: [Jobs Search Portal](https://www.jobsmela.online/)

## Technologies Used
- **Frontend:** React.js, TailwindCSS
- **Backend:** Node.js, Express
- **Database:** MongoDB

## Getting Started

### Prerequisites
Make sure you have the following installed on your machine:
- Node.js (v14 or higher)
- npm (Node Package Manager)
- MongoDB (or use a cloud-based solution like MongoDB Atlas)

### Clone the Repository
First, clone the repository from GitHub:

```bash
git clone https://github.com/Deepak-0808/Job-Hunt.git
cd Job-Hunt
```

### Install Dependencies
Navigate to both the `server` and `src` directories to install the required packages:

1. **Backend (Server)**

```bash
cd server
npm install
```

2. **Frontend (Client)**

```bash
cd ../src
npm install
```

### Environment Variables

#### Backend
Create a `.env` file in the `server` directory and add your environment variables as follows:

```
MAIL_HOST=
MAIL_USER=
MAIL_PASS=
JWT_SECRET=
FOLDER_NAME=
RAZORPAY_KEY=
RAZORPAY_SECRET=
CLOUD_NAME=
API_KEY=
API_SECRET=
MONGODB_URL=
PORT=4000
```

#### Frontend
Create a `.env` file in the `src` directory and add the following environment variable:

```
REACT_APP_BASE_URL=http://localhost:4000/api/v1
```

### Run the Application
Start both the backend and frontend applications with the following command:

```bash
npm start
```

### Access the Application
Once the application is running, you can access it at `http://localhost:3000`.

## Features
- **User Authentication:** Secure login and registration for job seekers and employers.
- **Role-Based Access Control (RBAC):** Different access levels for job seekers and employers.
- **Job Filters:** Easily filter jobs based on various criteria.
- **Real-Time Notifications:** Get notified about job updates and application status.

# Proprietary License

This software is proprietary and confidential. You may not reproduce, distribute, or modify this code without explicit written permission from the author.

For inquiries, please contact "i.deepak0808@gmail.com".
