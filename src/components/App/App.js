import React from 'react';
import style from './App.module.css';
import Header from "../Header/Header";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
// import style from "../Header/Header.module.css";


export default class App extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
  }

  render() {
    return (
        <div>
          <Header />
          <Content />
          <Footer />
        </div>
    );
  }
}

