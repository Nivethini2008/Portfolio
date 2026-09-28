# Personal Portfolio Website

A responsive full-stack portfolio built with HTML, CSS, JavaScript, Node.js, Express and MySQL.

## 1. Requirements

Install:
- Node.js
- MySQL Server / MySQL Workbench
- VS Code (recommended)

## 2. Create the database

Open MySQL Workbench and run everything in `schema.sql`.

## 3. Install Node packages

Open a terminal inside this project folder:

```bash
npm install
```

## 4. Configure database

The default settings expect:

- Host: localhost
- User: root
- Password: empty
- Database: portfolio_db

If your MySQL password is different, set environment variables before running:

Windows Command Prompt:
```bat
set DB_HOST=localhost
set DB_USER=root
set DB_PASSWORD=YOUR_PASSWORD
set DB_NAME=portfolio_db
npm start
```

PowerShell:
```powershell
$env:DB_HOST="localhost"
$env:DB_USER="root"
$env:DB_PASSWORD="YOUR_PASSWORD"
$env:DB_NAME="portfolio_db"
npm start
```

## 5. Run the website

```bash
npm start
```

Open:

http://localhost:3000

## 6. Customize

Edit `index.html`:
- Your Name
- college and school
- email
- GitHub
- LinkedIn
- project names and links
- skills
- education

Edit `style.css` if you want different colors.

## Features included

- Responsive design
- Mobile navigation
- Dark/light mode
- About section
- Skills section
- Project showcase
- Education timeline
- Contact form
- Node.js + Express backend
- MySQL contact-message storage
- Basic API health endpoint

## Suggested GitHub structure

Upload all files except `node_modules`.
