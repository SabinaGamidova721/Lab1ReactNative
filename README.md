# Task Card App (React Native)

## Overview

This project is a simple React Native application that demonstrates an interactive task card.  
It allows users to manage a task by marking it as completed, changing its priority, and tracking user interactions.

The main goal of this project is to showcase:

- state management using React hooks
- conditional rendering
- user interaction handling
- basic UI design in React Native
- component testing with Jest and Testing Library

---

## Features

- Display a task title
- Show task priority (Low / Middle / High)
- Visual priority indicator (color badge)
- Mark task as completed / undo completion
- Dynamic UI updates based on state
- Status indicator (🔴 / ✅)
- Click counter that tracks user interactions
- Priority switching buttons

---

## Technologies Used

- React Native
- Expo
- TypeScript / JavaScript
- Jest (testing framework)
- @testing-library/react-native (UI testing)

---

## Project Structure

```
lab1/
│
├── components/
│   ├── HomeScreen.tsx
│   └── HomeScreen.test.tsx
│
├── App.js
├── package.json
└── README.md
```

---

## Installation & Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd lab1
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install Expo web support (if needed)

```bash
npx expo install react-dom react-native-web
```

### 4. Run the app

```bash
npx expo start --web
```

---

## Running Tests

```bash
npm test
```

---

## Main Component Logic

The application is built around a single component:

### `HomeScreen`

This component:

- stores state using `useState`
- handles user interactions
- updates UI dynamically

### State variables:

- `isDone` — task completion status
- `count` — number of button presses
- `priority` — current task priority

---

## Behavior

- Pressing the main button toggles task completion
- Button text changes dynamically:
  - "Mark as done"
  - "Cancel"
- Title becomes gray and strikethrough when completed
- Status icon changes:
  - 🔴 → not done
  - ✅ → done
- Counter increases on each click
- Priority buttons update task priority and color

---

## UI Details

- Flexbox layout is used for positioning
- Styles are defined using `StyleSheet`
- Conditional styling is applied based on state
- Priority color is dynamically selected

---

## Testing

Tests are implemented using:

- Jest
- @testing-library/react-native

### Covered scenarios:

- Component renders correctly
- Initial state is correct
- Task status toggles on button press
- Task can be toggled back
- Counter increments correctly
- Priority changes on button press

### Testing approach:

The tests focus on **user behavior**, not implementation details.

Examples:

- finding elements by text
- simulating button presses
- verifying UI updates

---

## Key Concepts Demonstrated

- React hooks (`useState`)
- Functional components
- Conditional rendering
- Event handling
- UI-driven testing
- State-based UI updates

---

## Conclusion

This project demonstrates how to build an interactive UI component in React Native with proper state management and testing.

It focuses on simplicity, clarity, and best practices for beginner-level mobile development.
