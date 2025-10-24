# GetJob - Job Application Tracker

A full-stack web application designed to help job seekers track and manage their job applications efficiently. Built with React and Node.js, GetJob provides a seamless experience for organizing your job search journey.

## 📋 Description

GetJob is a comprehensive job application tracking system that allows users to monitor their job applications, track application statuses, and stay organized throughout their job search process. The application features user authentication, a modern UI, and robust backend infrastructure.

## 🚀 Features

- **User Authentication**: Secure authentication powered by Clerk
- **Job Application Management**: Create, read, update, and delete job applications
- **Status Tracking**: Monitor the progress of each application
- **Rich Text Editor**: Use Quill editor for detailed notes and descriptions
- **Responsive Design**: Built with Tailwind CSS for a modern, mobile-friendly interface
- **Real-time Updates**: Instant feedback with React Toastify notifications
- **Error Monitoring**: Integrated Sentry for error tracking and performance monitoring

## 🛠️ Technology Stack

### Frontend
- **React** (v19.1.1) - UI framework
- **Vite** (v7.1.2) - Build tool and development server
- **React Router DOM** (v7.8.0) - Client-side routing
- **Tailwind CSS** (v3.4.17) - Utility-first CSS framework
- **Clerk React** (v5.42.1) - Authentication
- **Axios** (v1.12.2) - HTTP client
- **Quill** (v2.0.3) - Rich text editor
- **Moment.js** (v2.30.1) - Date/time manipulation
- **React Toastify** (v11.0.5) - Notifications

### Backend
- **Node.js** with **Express** (v5.1.0) - Server framework
- **MongoDB** with **Mongoose** (v8.18.1) - Database
- **Clerk Express** (v1.7.31) - Authentication middleware
- **Cloudinary** (v2.7.0) - Media management
- **JWT** (v9.0.2) - Token-based authentication
- **Bcrypt** (v6.0.0) - Password hashing
- **Sentry** (v10.10.0) - Error tracking and monitoring
- **Multer** (v2.0.2) - File upload handling
- **CORS** (v2.8.5) - Cross-origin resource sharing

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB database
- Clerk account for authentication
- Cloudinary account (for file uploads)

### Clone the Repository
```bash
git clone https://github.com/pardeep1234567890/GetJob.git
cd GetJob
```

### Setup Server
```bash
cd server
npm install
```

Create a `.env` file in the server directory with the following variables:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
SENTRY_DSN=your_sentry_dsn
JWT_SECRET=your_jwt_secret
```

### Setup Client
```bash
cd ../client
npm install
```

Create a `.env` file in the client directory:
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=http://localhost:5000
```

## 🚀 Running the Application

### Start the Server
```bash
cd server
npm run server  # Development mode with nodemon
# or
npm start       # Production mode
```

The server will run on `http://localhost:5000`

### Start the Client
```bash
cd client
npm run dev
```

The client will run on `http://localhost:5173`

## 📝 Usage

1. **Sign Up/Login**: Create an account or log in using Clerk authentication
2. **Add Job Application**: Click on "Add New Job" to create a new job application entry
3. **Track Progress**: Update the status of your applications as they progress
4. **Manage Applications**: View, edit, or delete your job applications
5. **Stay Organized**: Use the rich text editor to add notes and details about each application

## 🏗️ Project Structure

```
GetJob/
├── client/                 # Frontend React application
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
├── server/                 # Backend Node.js application
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── package.json
└── README.md
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

**pardeep1234567890**

- GitHub: [@pardeep1234567890](https://github.com/pardeep1234567890)
- Repository: [GetJob](https://github.com/pardeep1234567890/GetJob)

## 🙏 Acknowledgments

- Built as a portfolio project to demonstrate full-stack development skills
- Thanks to all the open-source libraries that made this project possible

---

Made with ❤️ for job seekers everywhere
