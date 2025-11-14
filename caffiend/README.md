# ☕ Coffee Tracker App

*A simple and intuitive React application styled with FantaCSS that helps users track their daily coffee consumption.*

## 🚀 Overview

Coffee Tracker is a lightweight web app that allows users to select different coffee types, log their choices, and view their daily coffee activity. It is built with **React**, styled with **FantaCSS**, and supports **Firebase Authentication** for secure user access.



## ✨ Features

* **Select and log coffee types** (espresso, latte, cappuccino, etc.)
* **Firebase Authentication (Email/Password)**
* **Modal-based interactions** for clean UI/UX
* **Responsive UI** with FantaCSS
* **React Hooks for state management**
* **Authentication-protected actions**
* **Easily extendable** for tracking daily consumptions, money spent etc.


## 🔐 Authentication (Firebase)

The app integrates Firebase Authentication to manage user login/logout and protect the Coffee Form component.

### What Firebase Auth Handles:

* User sign-up
* User login
* Persistent user sessions
* `onAuthStateChanged` listener for real-time auth tracking

### How It Works in the App:

* The app initializes Firebase using your Firebase config keys.
* The `Authentication` component manages login/signup UI.
* After successful login, the user is marked as `isAuthenticated`.
* Protected components like **History** and **Stats**only render when the user is authenticated.

### Example Authentication Flow:

1. User opens the app → click on the login/signup button.
2. After authentication → the Coffee Tracker dashboard becomes available.
3. User selects coffee → selection saved in state.
4. User can log out at any time using Firebase's `signOut()` method.

---

## 🎨 Styling With FantaCSS

FantaCSS is used for:

* Layout structure
* Button styling
* Typography
* Spacing utilities
* Modal styling
* Responsive design

You can adjust global styles or extend FantaCSS with custom classes if needed.

---

## 🔮 Future Improvements

* Store coffee selections in Firebase Firestore
* Add daily/weekly analytics
* Push notifications for reminder tracking
* Add dark/light theme toggle
* Add animations
* User profile settings

---

## 🤝 Contributing

Contributions are welcome!
To contribute, simply open a pull request with your suggested changes or improvements.

---

## 📜 License

This project is licensed under the **MIT License**. Feel free to use it, modify it, or build on top of it.

