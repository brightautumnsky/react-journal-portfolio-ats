import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setList } from "./_actions/settings_action";
import { createGlobalStyle, css } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "./hoc/auth";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import LoginPage from "./components/LoginPage/LoginPage";
import WritePage from "./components/WritePage/WritePage";
import LikePage from "./components/LikePage/LikePage";
import JournalPage from "./components/JournalPage/JournalPage";
import DetailPage from "./components/DetailPage/DetailPage";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import SettingPage from "./components/SettingPage/SettingPage";
import HelpPage from "./components/HelpPage/HelpPage";
import Footer from "./components/Footer/Footer";

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  font-weight: 600;
  width:100%;
  margin: 0;
  padding: 0;
  ${({ background, fontSize }) => css`
    font-size: ${fontSize}rem;
    background: ${background ? background : "#fafafa"};
  `}
}
a {
  color: black;
  text-decoration: none;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
`;

function App() {
  let settings = useSelector((state) => state.set);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setList());
  }, [dispatch]);
  return (
    <Router>
      <GlobalStyle
        background={settings[0] && settings[0].background}
        fontSize={settings[0] && settings[0].fontSize}
      />
      <Header />
      <Switch>
        {/* <Route exact path="/" component={Auth(FirstPage, null)} /> */}
        <Route exact path="/" component={Auth(MainPage, null)} />
        <Route exact path="/register" component={Auth(RegisterPage, false)} />
        <Route exact path="/login" component={Auth(LoginPage, false)} />
        <Route exact path="/journal/write" component={Auth(WritePage, true)} />
        <Route exact path="/journal/list" component={Auth(JournalPage, true)} />
        <Route
          exact
          path="/journal/detail/:id"
          component={Auth(DetailPage, true)}
        />
        <Route exact path="/journal/like" component={Auth(LikePage, true)} />
        <Route exact path="/welcome" component={Auth(WelcomePage, false)} />
        <Route exact path="/setting" component={Auth(SettingPage, true)} />
        <Route exact path="/help" component={Auth(HelpPage, null)} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
