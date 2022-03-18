import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import Navigationbar from "./Navigationbar";

describe("Given a Navigationbar component", () => {
  describe("When it get's rendered", () => {
    test("Then it should display a navigation with six links", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Navigationbar />
          </BrowserRouter>
        </Provider>
      );

      const firstNavLink = screen.getByRole("link", { name: /All Matches/i });
      const secondNavLink = screen.getByRole("link", { name: /My Matches/i });
      const thirdNavLink = screen.getByRole("link", { name: /New Match/i });
      const forthNavLink = screen.getByRole("link", { name: /My Boardgames/i });
      const fifthNavLink = screen.getByRole("link", { name: /Login/i });
      const sixthNavLink = screen.getByRole("link", { name: /Sign Up/i });

      expect(firstNavLink).toBeInTheDocument();
      expect(secondNavLink).toBeInTheDocument();
      expect(thirdNavLink).toBeInTheDocument();
      expect(forthNavLink).toBeInTheDocument();
      expect(fifthNavLink).toBeInTheDocument();
      expect(sixthNavLink).toBeInTheDocument();
    });
  });
});
