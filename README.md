# Password Generator

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/yourusername/password-generator/CI-CD?label=CI%2FCD)

This is a simple Password Generator application built with React and integrated with GitHub Actions for Continuous Integration and Continuous Deployment (CI/CD).

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [CI/CD with GitHub Actions](#cicd-with-github-actions)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Generate secure and random passwords.
- Customize password length and complexity.
- Copy generated passwords to your clipboard.
- Built with React for a responsive and interactive user interface.

## Demo

You can try the live demo of the Password Generator app here: [Live Demo](https://password-gen-app-black.vercel.app/)

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/password-generator.git

2. Navigate to the project directory:
   
   ```bash
   cd password-generator

3. Install the dependencies and Start the development server:
   
   ```bash
   npm install
   npm start

4. Open your web browser and visit http://localhost:3000 to use the Password Generator app locally.

## CI/CD with GitHub Actions

This project is integrated with GitHub Actions for automated CI/CD. Every time you push changes to the main branch, GitHub Actions will:

- Build and test the application.
- Deploy the application to the production environment(vercel).

## Usage
- Click the "Generate Password" button to create a random password.
- Adjust the length and complexity settings to customize the generated password.
- You also have options for including numbers and characters 
- Click the "Copy to Clipboard" button to copy the generated password to your clipboard.