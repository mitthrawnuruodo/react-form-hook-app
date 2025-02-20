# Form handling with Hooks

## Install
```sh
npm install
```

## Run

```sh
npm run dev
```

## File structure

```md
react-form-hook-app/
├── package.json            // Use the provided package.json
├── vite.config.js          // Vite configuration file
├── .gitignore              // Exclude node_modules/ etc.
├── index.html              // HTML entry point
└── src/
    ├── main.jsx            // App entry point
    ├── App.jsx             // Main layout and navigation with nested routes
    ├── pages/
    │   ├── Home.jsx        // Home page (static)
    │   ├── About.jsx       // About page (static)
    │   └── Contact.jsx     // Contact page containing the form
    ├── components/
    │   └── ContactForm.jsx // The form component (used inside Contact.jsx)
    └── hooks/
        └── useForm.js      // Custom hook for managing form state and error handling
```
