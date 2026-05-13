# React Project (Parcel Powered)

## Project Overview
This is a React-based web application built using Parcel as the bundler.  
The project follows a component-based architecture and includes routing, hooks, and reusable UI components.

---

## Parcel Features

Parcel is a fast and zero-config bundler used for modern web development.

- Dev build
- Local development server
- Hot Module Replacement (HMR)
- File watching system for automatic rebuilds
- Caching for faster builds
- Image optimization
- Minification for production builds
- Code splitting
- Tree shaking (removes unused code)
- Consistent hashing for cache management
- HTTPS support
- Diagnostics and error reporting

---

## Project Structure

Header
- Logo
- Navigation links

Body
- Search bar
- Card container
  - Image
  - Name / Title
  - Description
  - Ratings

Footer

---

## Import and Export in React

### Default Export
Used when exporting a single component from a file.

export default Component
import Component from "path"

### Named Export
Used when exporting multiple items from a file.

export const Component
import { Component } from "path"

---

## React Hooks

React Hooks are special functions that allow functional components to use state and lifecycle features.

### useState
- Used to create state variables
- Updating state triggers re-render of the component

### useEffect
- Used for side effects
- Runs after component renders
- Common use case: API calls

### Render Flow
Load → Render → API Call → Re-render (if state updates)

---

## Conditional Rendering

Conditional rendering is used to show different UI based on conditions.

Example:
- Shimmer UI is shown while data is loading
- Actual UI is shown after data is fetched

---

## Routing in React

React Router is used for navigation without reloading the page.

### Client-Side Routing
- No full page reload
- Faster navigation
- Better user experience

### Server-Side Routing
- Full page reload occurs
- Traditional website navigation

---

## Important Concept

Instead of anchor tags (`<a>`), React uses `Link` from react-router-dom to avoid page reload and enable smooth navigation.

---

## Key Learnings

- React is a component-based library
- Parcel handles fast builds and optimization
- Hooks manage state and lifecycle
- React Router enables smooth navigation
- Proper structure improves scalability and maintainability