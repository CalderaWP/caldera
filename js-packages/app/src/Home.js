import React, { Component } from 'react';
import './Home.css';
import {StandardPage} from './components/StandardPage';
import {NavLink} from "react-router-dom";
class Home extends Component {
  static async getInitialProps({ req, res, match, history, location, ...ctx }) {
    return { hi: 'Roy' };
  }

  render() {
    return (
      <StandardPage className={'caldera-pro-home'} pageKey={'home'} onChangeActive={() => {}}>
		  <NavLink to="/about">About</NavLink>
		  <NavLink to="/admin">Admin</NavLink>
		  <NavLink to="/caldera-forms">Caldera Forms</NavLink>
      </StandardPage>
    );
  }
}

export default Home;
