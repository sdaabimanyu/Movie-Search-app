import { Route, Routes } from "react-router";
import HomePage from "./components/HomePage/HomePage";
import SearchPage from "./components/SearchPage/SearchPage";
import MovieDetails from "./components/MovieDetails/MovieDetails";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}>
        </Route>

        <Route 
        path="/SearchPage"
        element={<SearchPage />}>
        </Route>

        <Route path="/movie/:id" element={<MovieDetails />}>
        </Route>
      </Routes>
    </>
  );
}
