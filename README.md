# Firebase Private Router Project

This project demonstrates how to build a React application with Firebase authentication and private routing using `react-router`. It also integrates Tailwind CSS and DaisyUI for styling, providing a modern and responsive UI.

---

## Key Features

### 1. **React + Vite**
- Utilizes [Vite](https://vitejs.dev/) for fast development and optimized builds.
- Includes React with HMR (Hot Module Replacement) for a seamless development experience.

### 2. **Firebase Authentication**
- Implements Firebase for user authentication.
- Features include:
  - Email/password registration and login.
  - Google login using Firebase's `signInWithPopup`.
  - User session management with `onAuthStateChanged`.

### 3. **Private Routing**
- Protects routes using a `PrivateRouter` component.
- Redirects unauthenticated users to the login page while preserving the intended destination.

### 4. **Tailwind CSS + DaisyUI**
- Tailwind CSS is used for utility-first styling.
- DaisyUI provides pre-designed components for a consistent and modern UI.

### 5. **React Context API**
- Manages authentication state using the Context API.
- Provides a `PrivateContext` for sharing user data and authentication methods across components.

---

## Project Structure

The project is organized into the following directories:
