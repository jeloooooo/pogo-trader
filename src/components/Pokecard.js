import React,{Component} from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
 
class Pokecard extends Component  {
  
      render(){
        return (
            <div  /*onClick={this.props.onClick}*/ pokemon={this.props.pokemon}>
                <Card outline color="primary">
                  <CardBody className="card-header">
                    <CardTitle>{this.props.pokemon.name}</CardTitle>
                    <CardSubtitle>{this.props.pokemon.url}</CardSubtitle>
                    <CardText>Poke Number:{this.props.id}</CardText>
                    {/*<CardSubtitle>Type:{this.props.pokemon.type.join('/')}</CardSubtitle>
                  </CardBody>                
                  <CardBody>
                    <CardText>Poke Number:{this.props.pokemon.num}</CardText>*/}
                  </CardBody>
                  <CardImg className="pokeimg" height="200" width="100" src={`http://www.serebii.net/pokemongo/pokemon/${("000" + this.props.id).substr(-3,3)}.png`} alt={this.props.pokemon.name} />
                  <Button color="primary">Add to Trade Cart</Button>      
                </Card>       
            </div>
        );
      }
}
 
export default Pokecard;