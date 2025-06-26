# Rubik's Cube Solver 

A simple yet functional **Rubik's Cube Solver Web App**, built using **Vanilla JavaScript, HTML, and CSS**. It demonstrates **Object-Oriented Programming (OOP)**, logical problem-solving, and interactive UI with step-by-step cube visualization.

> **Note**: The purpose of this project is to demonstrate programming skills and problem-solving logic. Design and visual polish were considered secondary.

---

## Project Structure

```
rubiks-cube/
├── index.html          # Main HTML page with buttons and container
├── index.css           # Styles for cube layout and controls
├── cube.js             # Core cube logic (OOP class for Cube)
├── svgRenderer.js      # Generates colored HTML representation of the cube
└── README.md           # Project documentation
```

---

## How I Used OOP

- A `Cube` class was created in `cube.js` to encapsulate all cube-related data and behavior.
- **State Representation**: The cube has six faces (`U, D, F, B, L, R`), each represented as an array of 9 stickers (3x3 grid).
- **Encapsulation**: All logic like rotating, scrambling, solving, and displaying the cube is handled inside the Cube class.
- **Extensibility**: Using OOP allowed me to easily add new features like `rotateFace`, `scramble()`, and `solve()`.

---

## Core Functionality

### 1. `rotateFace(face, direction)`

- Rotates a face (e.g., `F`, `U`, etc.) either `clockwise` or `counter-clockwise`.
- Updates both:
  - The 3x3 grid of the rotated face.
  - The affected adjacent edges on surrounding faces.
- Adjacent relationships were mapped using a `faceMap` for all 6 faces.

### 2. `scramble()`

- Performs a random sequence of face rotations (15 moves).
- Stores each move in a history array.
- Shows step-by-step changes using `getCubeSvg()`.

### 3. `solve()`

- Simply reverses the scramble history.
- Each rotation is undone by applying the inverse rotation (e.g., `F` clockwise becomes `F` counter-clockwise).
- Again, each step is visualized in the UI.

---

## Visualization

### 1. `getCubeSvg()`

- A function that renders each face using `<div>` blocks or styled characters.
- Each face is color-coded (`w, y, g, b, o, r`) and laid out as 3x3 block.
- Cube states are grouped by step (e.g., "Scramble Move 1: F clockwise").

### 2. UI Interactions

- Users can:
  - Scramble the cube
  - Solve it (via reversing scramble)
  - Manually rotate any face via UI button prompts and see for yourself :)

---

## Enhancements (not really, can be improved even more)

- Cube stickers were displayed using colored boxes instead of just letters.
- Scramble and solve moves are visualized step by step.
- Clean button UX: users choose face and direction via buttons (no typing).
- Face layouts grouped in two rows (3 faces per row) to reduce vertical scroll.

---

## Concepts Demonstrated

- **Object-Oriented Programming**: class, encapsulation, method abstraction
- **DOM Manipulation**: dynamically adding cube views per move
- **Array Logic**: face rotation, adjacency mapping, 2D grid logic
- **Event Handling**: rotate, scramble, solve button actions
- **Data Structures**: deep cloning with `JSON.stringify`, arrays as stacks

---

## Time-Conscious Trade-offs

- I have avoided solving the cube using real cube algorithms (e.g., CFOP).
- Instead, I focused on correctly modeling cube behavior and reverse-solving based on history.
- Which shows my stack (DSA) like thinking, quick solution finding traits.

---

## 📆 Final Notes

> This project was built under **tight time pressure** and focuses on demonstrating logic, code structure, and problem solving — not UI polish.

---

## How to Run

1. Clone or download the project folder

```bash
git clone https://github.com/oldstone7/rubiks-cube-solver.git
```

2. Navigate to the folder

```bash
cd rubiks-cube-solver
```

3. Open `index.html` in your browser (double-click or use Live Server)
Use http-server for running locally (recommended) 👍

---
