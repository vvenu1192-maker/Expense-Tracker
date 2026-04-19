<<<<<<< HEAD
# Expense Management System

A full-stack expense tracking and management application built with React and Node.js. This system allows users to manage their expenses efficiently with features like transaction tracking, admin dashboard, authentication, and analytics.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Features Overview](#features-overview)
- [Contributing](#contributing)
- [License](#license)

---

## Features

### User Features
- ✅ **User Registration & Login** - Secure authentication with email/password
- ✅ **Google OAuth Integration** - Sign up/login with Google accounts
- ✅ **Email Verification** - OTP-based email verification
- ✅ **Phone Verification** - OTP verification via phone number
- ✅ **Transaction Management** - Add, edit, view, and delete expenses
- ✅ **Analytics Dashboard** - Visual insights into spending patterns
- ✅ **Transaction Export** - Export transaction data as Excel/CSV
- ✅ **Password Management** - Secure password reset and change functionality
- ✅ **User Profile Management** - Update personal information

### Admin Features
- ✅ **Admin Dashboard** - Monitor all users and transactions
- ✅ **User Management** - View active users and manage accounts
- ✅ **Admin Access Control** - Request and approve admin access
- ✅ **System Analytics** - Track platform-wide metrics

### Technical Features
- ✅ **JWT Authentication** - Secure token-based authentication
- ✅ **Email Notifications** - Automated emails via Brevo/Nodemailer
- ✅ **Responsive Design** - Mobile-friendly UI with Ant Design
- ✅ **Error Handling** - Comprehensive error management and alerts
- ✅ **Session Management** - Secure session handling

---

## Tech Stack

### Frontend
- **React 18** - UI library
- **React Router v6** - Client-side routing
- **Ant Design 4** - UI component library
- **Axios** - HTTP client
- **React Icons** - Icon library
- **XLSX** - Excel export functionality
- **Moment.js** - Date/time handling
- **Bootstrap 5** - Additional styling

### Backend
- **Node.js & Express** - Server framework
- **MongoDB & Mongoose** - Database and ODM
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Passport.js** - OAuth authentication
- **Brevo & Nodemailer** - Email services
- **Morgan** - HTTP logging
- **CORS** - Cross-origin request handling

---

## Project Structure

```
Expense-Management-System/
├── client/                          # React frontend application
│   ├── public/                      # Static files
│   ├── src/
│   │   ├── components/              # Reusable React components
│   │   │   ├── common/              # Common components (ErrorAlert, LoadingButton, etc.)
│   │   │   ├── Layout/              # Layout components
│   │   │   ├── Analytics.js         # Analytics component
│   │   │   └── OTPInput.js          # OTP input component
│   │   ├── pages/                   # Page components
│   │   │   ├── AdminDashboard/      # Admin features
│   │   │   ├── EmailVerification/   # Email verification flow
│   │   │   ├── ForgotPassword/      # Password reset
│   │   │   ├── OTPEmailVerification/ # OTP verification
│   │   │   ├── OTPPhoneVerification/ # Phone OTP
│   │   │   ├── UserDetails/         # User profile
│   │   │   └── Login.js, Register.js, HomePage.js
│   │   ├── hooks/                   # Custom React hooks
│   │   │   ├── useApi.js            # API request hook
│   │   │   └── useAuth.js           # Authentication hook
│   │   ├── utils/                   # Utility functions
│   │   ├── styles/                  # Global styles
│   │   ├── App.js                   # Root component
│   │   └── index.js                 # Entry point
│   ├── package.json
│   └── netlify.toml                 # Netlify deployment config
│
├── server/                          # Node.js/Express backend
│   ├── config/                      # Configuration files
│   │   ├── connectDb.js             # MongoDB connection
│   │   └── emailConfig.js           # Email service configuration
│   ├── controllers/                 # Route handlers
│   │   ├── userController.js        # User operations
│   │   ├── authController.js        # Authentication
│   │   ├── transactionController.js # Transaction operations
│   │   ├── adminController.js       # Admin operations
│   │   └── userInforController.js   # User info operations
│   ├── middleware/                  # Express middleware
│   │   └── userAuth.js              # Authentication middleware
│   ├── models/                      # Mongoose schemas
│   │   ├── userModel.js             # User schema
│   │   ├── transectionModel.js      # Transaction schema
│   │   ├── adminModel.js            # Admin schema
│   │   ├── userOTPModel.js          # OTP storage
│   │   └── [other models]
│   ├── routes/                      # API route definitions
│   │   ├── userRoute.js             # User routes
│   │   ├── transectionRoutes.js     # Transaction routes
│   │   ├── adminRoutes.js           # Admin routes
│   │   └── googleAuthRoutes.js      # Google OAuth routes
│   ├── services/                    # Business logic services
│   │   ├── brevoEmailService.js     # Brevo email service
│   │   └── emailServices.js         # Email service functions
│   ├── utils/                       # Utility functions
│   │   └── emailTemplates/          # HTML email templates
│   ├── package.json
│   └── server.js (or index.js)      # Entry point
│
└── README.md                        # This file
```

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (v6 or higher) - Comes with Node.js
- **MongoDB** - [Download Community Edition](https://www.mongodb.com/try/download/community)
  - Or use **MongoDB Atlas** (cloud-hosted): [Create a free cluster](https://www.mongodb.com/cloud/atlas)

### Required Services (Optional but Recommended)
- **Google OAuth Credentials** - [Setup Guide](https://developers.google.com/identity/protocols/oauth2)
- **Brevo Account** (formerly Sendinblue) - [Sign up](https://www.brevo.com/)
- **Email Service** (Gmail, SendGrid, etc.) - For email notifications

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/Expense-Management-System.git
cd Expense-Management-System
```

### 2. Install Backend Dependencies

```bash
cd server
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../client
npm install
```

---

## Environment Setup

### Backend Environment Variables

Create a `.env` file in the `server` directory:

```env
# MongoDB
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/expense-management

# JWT
JWT_SECRET=your_jwt_secret_key_here

# Email Service (Brevo)
BREVO_API_KEY=your_brevo_api_key_here
BREVO_SENDER_EMAIL=your_email@example.com

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:5000/auth/google/callback

# Application
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:3000

# Email
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password_here
```

### Frontend Environment Variables

Create a `.env` file in the `client` directory:

```env
# API Base URL
REACT_APP_API_URL=http://localhost:5000
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id.apps.googleusercontent.com
```

---

## Running the Application

### Option 1: Running Frontend and Backend Separately

#### Start Backend Server

```bash
cd server
npm start
# or
npm run dev
```

The backend will run on `http://localhost:5000`

#### Start Frontend Server

```bash
cd client
npm start
```

The frontend will open on `http://localhost:3000`

### Option 2: Running with Concurrently (if configured)

From the root directory:

```bash
npm run dev
```

---

## API Documentation

### Authentication Endpoints

#### Register User
```
POST /api/users/register
Body: {
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "password": "string",
  "phone": "string" (optional)
}
```

#### Login
```
POST /api/users/login
Body: {
  "email": "string",
  "password": "string"
}
```

#### Email Verification
```
POST /api/users/verify-email
Body: {
  "email": "string",
  "otp": "string"
}
```

#### Password Reset
```
POST /api/users/forgot-password
Body: {
  "email": "string"
}

POST /api/users/reset-password
Body: {
  "token": "string",
  "newPassword": "string"
}
```

### Transaction Endpoints

#### Get All Transactions
```
GET /api/transactions
Headers: {
  "Authorization": "Bearer <token>"
}
```

#### Add Transaction
```
POST /api/transactions
Headers: {
  "Authorization": "Bearer <token>"
}
Body: {
  "amount": "number",
  "category": "string",
  "description": "string",
  "date": "date"
}
```

#### Update Transaction
```
PUT /api/transactions/:id
Headers: {
  "Authorization": "Bearer <token>"
}
Body: { transaction data }
```

#### Delete Transaction
```
DELETE /api/transactions/:id
Headers: {
  "Authorization": "Bearer <token>"
}
```

### Admin Endpoints

#### Get All Users
```
GET /api/admin/users
Headers: {
  "Authorization": "Bearer <admin_token>"
}
```

#### View Analytics
```
GET /api/admin/analytics
Headers: {
  "Authorization": "Bearer <admin_token>"
}
```

---

## Features Overview

### 1. User Authentication
- Registration with email and password
- Email verification with OTP
- Phone number verification
- Google OAuth integration
- JWT token-based session management

### 2. Transaction Management
- Add new expenses with categories
- View transaction history
- Edit transaction details
- Delete transactions
- Filter and search transactions

### 3. Analytics
- Visual spending patterns
- Category-wise breakdown
- Monthly/weekly analysis
- Export data to Excel/CSV

### 4. Admin Dashboard
- Monitor all users and activities
- View system-wide analytics
- Manage user access and permissions
- Request and approve admin access

### 5. Notifications
- Email confirmations
- OTP-based verification
- Password reset emails
- Transaction alerts

---

## Development

### Available Scripts

#### Backend
```bash
npm start      # Start server with nodemon
npm run server # Alternative start command
npm run dev    # Development mode
```

#### Frontend
```bash
npm start      # Start development server
npm run build  # Create production build
npm test       # Run tests
npm run eject  # Eject from create-react-app (irreversible)
```

### Debugging Tips

1. **Frontend**: Use React Developer Tools browser extension
2. **Backend**: Check console logs and use `console.log()` or debugger
3. **Database**: Use MongoDB Compass for database inspection
4. **API**: Use Postman or Insomnia for API testing

---

## Deployment

### Frontend Deployment (Netlify)

The `client/netlify.toml` is already configured:

```bash
cd client
npm run build
# Deploy the 'build' folder to Netlify
```

### Backend Deployment (Heroku/Railway/Render)

1. Create an account on your chosen platform
2. Connect your GitHub repository
3. Set environment variables
4. Deploy

---

## Troubleshooting

### MongoDB Connection Issues
- Verify MongoDB is running
- Check connection string in `.env`
- Ensure IP whitelist is configured in MongoDB Atlas

### Email Service Not Working
- Verify Brevo/email service credentials
- Check email templates in `server/utils/emailTemplates/`
- Review email service logs

### Google OAuth Not Working
- Verify credentials are correct
- Check redirect URIs in Google Cloud Console
- Ensure frontend and backend URLs match

### Port Already in Use
```bash
# Kill process on port 5000 (backend)
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Kill process on port 3000 (frontend)
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## Author

**Prakash** - Project Creator

---

## Contact & Support

For issues, questions, or suggestions:
- Create an issue on GitHub
- Contact via email
- Check existing documentation

---

## Changelog

### Version 1.0.0
- Initial release
- User authentication system
- Transaction management
- Admin dashboard
- Analytics and reporting
- Email notifications

---

## Future Enhancements

- [ ] Budget tracking and alerts
- [ ] Recurring transactions
- [ ] Multi-currency support
- [ ] Mobile app (React Native)
- [ ] Advanced reporting
- [ ] Data visualization improvements
- [ ] Two-factor authentication (2FA)
- [ ] Role-based access control (RBAC)

---

**Happy Expense Tracking! 🎯**
=======
# Expense-Tracker
Full MERN Stack Project
>>>>>>> d6a5c97de137bbdf784a961c4929151b40f056d6
