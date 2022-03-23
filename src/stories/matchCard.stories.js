import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import MatchCard from "../components/matchCard/MatchCard";
import store from "../redux/store";
import theme from "../themes/theme";

export default {
  title: "Match Card",
  component: MatchCard,
  argTypes: {
    onClick: { action: true },
  },
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Provider store={store}>
        <MatchCard {...args} />
      </Provider>
    </BrowserRouter>
  </ThemeProvider>
);

export const MatchCardComponent = Template.bind({});
MatchCardComponent.args = {
  gameTitle: "Dune",
  image:
    "https://cf.geekdo-images.com/PhjygpWSo-0labGrPBMyyg__imagepage/img/BjM3LyahJ4IQ2ov5MkzkHatbmUc=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5666597.jpg",
  date: "10-03-2022",
  maxPlayers: 4,
  players: ["", "", ""],
  location: "Madrid",
};
