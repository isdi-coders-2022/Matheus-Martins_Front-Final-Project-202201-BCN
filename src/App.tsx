import "@fontsource/work-sans";
import { ThemeProvider } from "styled-components";
import theme from "./themes/theme";
import Navigationbar from "./components/navigationbar/Navigationbar";
import { Navigate, Route, Routes } from "react-router-dom";
import AllMatchesPage from "./pages/all-matches/AllMatchesPage";
import NewMatchPage from "./pages/new-match/NewMatchPage";
import AllBoardgamesPage from "./pages/all-boardgames/AllBoardgamesPage";
import MyMatchesPage from "./pages/my-matches/MyMatchesPage";
import MyBoardgamesPage from "./pages/my-boardgames/MyBoardgamesPage";
import LoginPage from "./pages/login/LoginPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div>
        <Toaster
          toastOptions={{
            className: "toster",
            style: {
              border: "1px solid #00F8FF",
              padding: "10px",
              color: "#120D26",
              fontFamily: "inherit",
            },
          }}
        />
      </div>
      <ThemeProvider theme={theme}>
        <Navigationbar />
        <Routes>
          <Route path="/" element={<Navigate to="/matches" />} />
          <Route path="/matches" element={<AllMatchesPage />} />
          <Route path="/my-matches/new-match" element={<NewMatchPage />} />
          <Route path="/my-matches" element={<MyMatchesPage />} />
          <Route path="/my-boardgames" element={<MyBoardgamesPage />} />
          <Route path="/all-boardgames" element={<AllBoardgamesPage />} />
          <Route path="/users/login" element={<LoginPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
