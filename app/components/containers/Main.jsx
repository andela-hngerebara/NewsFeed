import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Sources from '../../components/Sources';

/**
 * Container of the news page.
 * @extends React.Component
 * @prop {props} the user details
 * @returns {jsx} all components
 */

const Main = props => (
  <div>
    <Header logout={props.logout} />
    <Sources />
    <Footer />
  </div>);

Main.propTypes = {
  logout: PropTypes.func.isRequired
};

export default Main;
