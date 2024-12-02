# Startup Portfolio Website

This project is a portfolio website showcasing various startups, implemented using React and Vite. It features role-based authentication with Admin and Guest roles. The website allows Admins to manage the portfolio content with full CRUD (Create, Read, Update, Delete) functionalities, while Guests can only view the startup information.

## Features

1. **Role-Based Authentication**:
   - Admin login with credentials (`username: admin`, `password: adminpass`).
   - Guest login with restricted access.

2. **Startup Portfolio**:
   - Showcases a list of projects with their details.
   - Guest users can browse the portfolio.
   - Admin users can add, edit, and delete startup entries.

3. **CRUD Operations**:
   - **Create**: Add new project entries.(Admin only)
   - **Read**: View existing project entries.
   - **Update**: Edit project details (Admin only).
   - **Delete**: Remove project from the portfolio (Admin only).

4. **Responsive Design**:
   - Built with Tailwind CSS for a modern and adaptive user interface.

---

## Getting Started

### Prerequisites

Ensure the following are installed:
- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [JSON Server](https://github.com/typicode/json-server)

---

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
2. Install dependencies:
   ```bash
   npm install

### File Structure 
  ```bash
src/
├── components/
│   ├── Login.jsx         # Handles user authentication
│   ├── Navbar.jsx        # Dynamic navigation bar
│   ├── Dashboard.jsx     # Displays the startup portfolio and CRUD options
├── App.jsx               # Main application entry point
├── index.css             # Tailwind CSS styles
└── main.jsx              # React entry point



