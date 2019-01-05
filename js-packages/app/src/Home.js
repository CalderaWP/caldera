import React, { Component } from 'react';
import './Home.css';
import {StandardPage} from './components/StandardPage';
class Home extends Component {
  static async getInitialProps({ req, res, match, history, location, ...ctx }) {
    return { hi: 'Roy' };
  }

  render() {
    return (
      <StandardPage className={'caldera-pro-home'} pageKey={'home'} onChangeActive={() => {}}>
          <div>Hi Roy</div>
      </StandardPage>
    );
  }
}

export default Home;
