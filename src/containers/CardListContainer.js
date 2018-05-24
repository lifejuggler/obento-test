import React, { Component } from 'react'
import { connect } from 'react-redux'
import CardComponent from '../components/CardComponent'
import { toggleFavorite, setCards } from '../actions/card-actions'
import Masonry from 'react-masonry-component';

const masonryOptions = {
    transitionDuration: 0
}

class CardListContainer extends Component {
  componentDidMount() {
    this.props.initialize()
  }

  handleFavoriteAction (cardId) {
    this.props.toggleFavorite(cardId)
  }

  render () {
    const { cards, viewType } = this.props

    return (
      <Masonry
        options={masonryOptions}
      >
        {
          cards && cards.map((card, index) => {
            return (
              <CardComponent key={index} card={card} toggleFavorite={this.handleFavoriteAction.bind(this, card.cardId)} viewType={viewType} />
            )
          })
        }
      </Masonry>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards.cards || [],
    isLoading: state.cards.isLoading,
    viewType: state.cards.viewType
  }
}

const mapDispatchToProps = () => {
  return (dispatch) => ({
    initialize: () => dispatch(setCards()),
    toggleFavorite: id => dispatch(toggleFavorite(id))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(CardListContainer)