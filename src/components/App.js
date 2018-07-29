import React, { Component } from 'react';
import logo from '../pogo.gif';
import './styles/App.css';
import offlinePoke from '../pokemon.json'
import Pokecard from './Pokecard';
import { Container, Row, Col, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
 
    this.filterList = this.filterList.bind(this);
 
    // set the initial state
    this.state = {
      initPokemons: offlinePoke.results,
      pokemons: []
    };
  }
 
  componentWillMount(){
    this.setState({pokemons: this.state.initPokemons});
  }
 
  /*componentDidMount(){
    this.loadPokemon();
    this.setState({pokemons: this.state.initPokemons});
  }
 
  loadPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
      .then(response => response.json())
      .then(data => this.setState({ initPokemons: data.results }));
  }
 
  loadInitPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
      .then(response => response.json())
      .then(data => { return data.results } );
  }*/
 
  filterList(e){
    var updatedList = this.state.initPokemons;
    updatedList = updatedList.filter((item) => {
      return item.name.toLowerCase().search(
        e.target.value.toLowerCase()) !== -1;
    });
    this.setState({pokemons: updatedList});
  }
  
  render() {
    const { pokemons } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">POGO Marketplace</h1>
        </header>
        <br />
        <div>
          <InputGroup>
            <Input type="text" placeholder="Pokesearch" onChange={this.filterList} />
          </InputGroup>
        </div>
        <br />
        <div >
          <Row> 
              {pokemons.map(pokemon =>          
                  <Col xs="12" sm="2">
                  <Pokecard 
                    key={pokemon.url.substring(pokemon.url.lastIndexOf('n/') + 2).replace('/','')}
                    pokemon={pokemon}
                    id={pokemon.url.substring(pokemon.url.lastIndexOf('n/') + 2).replace('/','')} />
                    </Col>            
              )}
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
