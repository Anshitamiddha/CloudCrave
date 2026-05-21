# React Project (Parcel Powered)

## Project Overview

This is a React-based web application built using Parcel as the bundler.
The project follows a component-based architecture and includes routing, hooks, reusable UI components, and API integration.

The application demonstrates modern React development practices such as:

* Functional components
* State management using Hooks
* Client-side routing
* Conditional rendering
* Component reusability
* Modular folder structure

---

# Tech Stack

* **Frontend:** React JS
* **Bundler:** Parcel
* **Routing:** React Router DOM
* **Styling:** CSS
* **Language:** JavaScript (ES6+)
* **Package Manager:** npm

---

# Parcel Features

Parcel is a fast and zero-config bundler used for modern web development.

* Dev build
* Local development server
* Hot Module Replacement (HMR)
* File watching system for automatic rebuilds
* Caching for faster builds
* Image optimization
* Minification for production builds
* Code splitting
* Tree shaking (removes unused code)
* Consistent hashing for cache management
* HTTPS support
* Diagnostics and error reporting

---

# Installation and Setup

## Clone the Repository

```bash
git clone <repository-url>
```

## Navigate to Project Folder

```bash
cd project-name
```

## Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
npx parcel index.html
```

---

# Build for Production

```bash
npx parcel build index.html
```

---

# Project Structure

```bash
src/
│
├── Components/
│   ├── Header.js
│   ├── Body.js
│   ├── Footer.js
│   ├── Card.js
│   ├── Shimmer.js
│
├── utils/
│   ├── constants.js
│   ├── mockData.js
│
├── App.js
├── index.js
├── style.css
```

---

# Application Layout

## Header

Contains:

* Logo
* Navigation links
* Search functionality
* User options

## Body

Contains:

* Search bar
* Restaurant/Event/Product cards
* Dynamic rendering using API data

## Card Container

Each card contains:

* Image
* Title
* Description
* Ratings
* Additional details

## Footer

Contains:

* Copyright
* Contact details
* Social links

---

# Import and Export in React

## Default Export

Used when exporting a single component from a file.

```js
export default Component;
```

Import syntax:

```js
import Component from "./Component";
```

---

## Named Export

Used when exporting multiple items from a file.

```js
export const Component;
```

Import syntax:

```js
import { Component } from "./Component";
```

---

# React Hooks

React Hooks are special functions that allow functional components to use state and lifecycle features.

---

## useState

* Used to create state variables
* Updating state triggers component re-render

Example:

```js
const [list, setList] = useState([]);
```

---

## useEffect

* Used for side effects
* Runs after component rendering
* Commonly used for API calls

Example:

```js
useEffect(() => {
  fetchData();
}, []);
```

---

# Render Flow

```text
Load → Render → API Call → State Update → Re-render
```

---

# Conditional Rendering

Conditional rendering is used to display different UI based on conditions.

Examples:

* Loading shimmer UI
* Error message
* Empty state handling

Example:

```js
return data.length === 0 ? <Shimmer /> : <Body />;
```

---

# Routing in React

React Router enables navigation between pages without refreshing the browser.

---

## Client-Side Routing

Features:

* No full page reload
* Faster navigation
* Better user experience
* SPA (Single Page Application) behavior

Example:

```js
<Route path="/" element={<Home />} />
```

---

## Server-Side Routing

Features:

* Full page reload
* Traditional website navigation
* Slower compared to SPA routing

---

# React Router Components

## BrowserRouter

Wraps the entire application to enable routing.

```js
<BrowserRouter>
  <App />
</BrowserRouter>
```

---

## Route

Defines path-based rendering.

```js
<Route path="/about" element={<About />} />
```

---

## Link

Used instead of anchor tags (`<a>`) to avoid page reload.

```js
<Link to="/about">About</Link>
```

---

# Class Based Components

Class components are older React components that use ES6 classes.

Example:

```js
class User extends React.Component {
  render() {
    return <h1>Hello User</h1>;
  }
}
```

## Features

* Uses lifecycle methods
* Maintains state using `this.state`
* Access state using `this`

---

# Functional Components vs Class Components

| Functional Components | Class Components       |
| --------------------- | ---------------------- |
| Simpler syntax        | More verbose           |
| Uses Hooks            | Uses lifecycle methods |
| Better readability    | More boilerplate       |
| Modern React approach | Older approach         |

---

# API Handling

Data can be fetched from APIs using `fetch()` inside `useEffect`.

Example:

```js
useEffect(() => {
  fetchData();
}, []);
```

---

# Performance Optimizations

* Lazy loading
* Code splitting
* Reusable components
* Tree shaking with Parcel
* Optimized builds

---

# Common Commands

## Install React Router

```bash
npm install react-router-dom
```

## Install Parcel

```bash
npm install -D parcel
```

## Start Server

```bash
npx parcel index.html
```

## Production Build

```bash
npx parcel build index.html
```

---

# Key Learnings

* React is component-based
* Parcel simplifies bundling
* Hooks manage state and side effects
* Routing improves user experience
* Reusable components improve maintainability
* Proper folder structure improves scalability
* Conditional rendering enhances UI handling

---

