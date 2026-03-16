# GitHub Activity CLI

A simple Command Line Interface (CLI) tool built with Node.js that fetches and displays a GitHub user's recent activity directly in the terminal using the GitHub API.

The application runs from the command line, accepts a GitHub username as an argument, and shows the user's latest public activities such as pushes, pull requests, issues, and stars.

---

## Features

- Fetches recent public activity of any GitHub user
- Displays activity in a clean and readable format
- Handles missing usernames and API errors
- Uses no external libraries or frameworks
- Lightweight CLI tool

---

## Technologies Used

- Node.js
- Built-in `fetch()` API
- GitHub REST API

---

## run command
```bash
node user_activity.js <github-username>
