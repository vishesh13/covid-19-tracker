import React, { Component } from 'react';
import CardsView from './components/Cards/CardsView';
import ChartView from './components/Charts/ChartView';
import CountrySelectionContainer from './components/Country/CountrySelectionContainer';
import { getData, getCountryDetails } from './components/services/service';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      country: '',
    }
  }

  async componentDidMount() {
    const data = await getData();
    this.setState({ data });
  }

  handleOnCountryChange = async (country) => {
    const data = await getCountryDetails(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className="container">
        <CardsView data={data} />
        <CountrySelectionContainer handleOnCountryChange={this.handleOnCountryChange}/>
        <ChartView data={data} country={country} />
      </div>
    );
  }
}

export default App;
