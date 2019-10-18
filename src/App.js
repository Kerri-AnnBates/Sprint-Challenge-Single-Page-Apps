import React from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import { Route } from "react-router-dom";
import WelcomePage from './components/WelcomePage';
import EpisodeList from './components/EpisodeList'
import LocationList from './components/LocationsList'

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path='/' component={WelcomePage} />
      <Route path='/characters' component={CharacterList} />
      <Route path='/episodes' component={EpisodeList} />
      <Route path='/locations' component={LocationList} />
    </main>
  );
}
