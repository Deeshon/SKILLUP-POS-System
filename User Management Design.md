# User Authentication Design
SwiftPOS implements a JWT-based authentication system with Role-Based Access Control (RBAC) to ensure secure access

## Authentication Flow
### 1. Company Registration
- Company is registered with a **Company Name**, **Contact Number**, **Email**, **Location** and **Logo**.
### 2. Admin Registration and Login
- Administrator is registered with a **Full Name**, **Email**, **Contact Number**, **Username**  and **Password**.

- Passwords are securely hashed with **bcrypt** before storing in the database.

- After login, the system generates **Access & Refresh Tokens**.
