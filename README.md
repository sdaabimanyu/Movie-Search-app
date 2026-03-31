# 🎬 Movie Search App (React + OMDB API)

## 📌 Project Overview

The Movie Search App is a responsive web application built using React that allows users to search for movies, explore detailed information, and navigate seamlessly between pages.

This application integrates with the OMDB API to fetch real-time movie data including posters, ratings, genres, and cast details.

---

## 🚀 Features

### 🔍 Movie Search

* Search movies by title using a dynamic search bar
* Results update instantly based on user input
* Query parameters are managed using URL (React Router)

---

### 🎞 Search Results Display

* Movies displayed in a responsive grid layout
* Each card shows:

  * Poster
  * Title
  * Release Year

---

### 📄 Pagination

* Handles large result sets efficiently
* Displays limited page buttons (up to 5 pages)
* Updates results based on selected page

---

### 🎯 Filter Functionality

* Filter movies using dropdown:

  * Movie
  * Series
  * Episode
* Uses OMDB API filter (`type` parameter)
* No use of `array.filter()` (as per requirement)

---

### 🎬 Movie Details Page

* Displays full movie information:

  * Poster (responsive, full width on mobile)
  * Title
  * Year
  * Runtime
  * Genre
  * Plot
  * IMDB Rating
  * Director, Writer, Cast
  * Language, Country, Awards, Box Office

---

### 🔄 Navigation (React Router)

* Home Page → Search Page → Movie Details Page
* Back navigation implemented
* Dynamic routing using `:id`

---

### ⚠️ Error Handling

* Displays messages for:

  * No results found
  * API errors
  * Empty search state

---

### 📱 Responsive Design

* Fully responsive using Tailwind CSS
* Mobile-first improvements:

  * Grid adapts to screen size
  * Movie poster takes full width on small devices
  * Layout switches from column → row on larger screens

---

## 🛠 Tech Stack

* **React.js** – UI development
* **React Router DOM** – Routing & navigation
* **JavaScript (ES6+)** – Functionality
* **Tailwind CSS** – Styling & responsiveness
* **OMDB API** – Movie data source

---

## 🌐 API Used

* OMDB API
  https://www.omdbapi.com/

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── HomePage/
│   ├── SearchPage/
│   ├── MovieDetails/
│   └── BannerSlider/
│
├── App.jsx
└── main.jsx
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd movie-search-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the application

```bash
npm run dev
```

---

## 🔑 API Key Setup

Replace the API key in your code if needed:

```js
apikey=your_api_key
```

---

## 💡 Key Implementation Highlights

* Used **URLSearchParams** for managing search, pagination, and filters
* Implemented **conditional rendering** for loading, error, and empty states
* Designed a **responsive layout** using Tailwind breakpoints
* Used **dynamic routing** (`/movie/:id`) for detailed pages
* Avoided `array.filter()` and used API-based filtering

---

## 👨‍💻 Author

**Abimanyu S**

---

## 📜 License

This project is for educational purposes.
