import React, {Component} from 'react';
import './Card.css';
import Star from '../../../assets/favorites-star.svg';
import PropTypes from 'prop-types';

export default class Card extends Component {
  constructor() {
    super();
      this.favoriteCard = this.favoriteCard.bind(this)
      this.state = {
        favorite: false,
      }
  }

  favoriteCard(e) {
    if (this.state.favorite === false) {

      this.setState({ favorite: true } )
    } else {
      this.setState({ favorite: false } )

    }
    this.props.setFavoriteState(this)
  };



//   componentWillUpdate(nextProps, nextState) {
//   if(nextState.favorite === true) {
//     this.section.style = 'background: #A60000'
//   } else {
//     this.section.style ='background: #f5f5f5'
//
//   }
// }

  render() {
    const { subject } = this.props
    let cardKeys = Object.keys(subject)
    cardKeys.pop()

    let cardArray = cardKeys.map((key, i) => {
      return (
        <div >
          <p className='category-data'> { key }: { subject[key] } </p>
        </div>
      )
    })


    return(
      <div >
        <section className='card' ref={ element => this.section = element }>
          <button className='favorite-btn' onClick={ this.favoriteCard.bind(this) }><img src={ Star } alt='star icon to favorite a card'/></button>
          { cardArray }
        </section>
      </div>
    )
  }

}

Card.propTypes = {
   subject: PropTypes.object.isRequired
 }
