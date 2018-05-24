import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Card = styled.div`
  margin: 10px 10px;
  padding: 10px;
  float: left;
  width: ${props => props.single ? '97%' : '30%'};
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`

const CardImage = styled.img`
  width: 100%;
`
const Star = styled.i`
  color: ${props => props.selected ? '#f3eb14' : '#CED4DA'};
  float: right;
  padding-bottom: 5px;
`

export default class CardComponent extends Component {
  render () {
    const { card, toggleFavorite, viewType } = this.props
    const { image, info, favorite } = card

    return (
      <Card onClick={toggleFavorite} className="grid-item" single={viewType === 'single'}>
        <Star className="fa fa-star" selected={favorite} />
        <CardImage src={image.url} alt={image.id} />
        <span> { info.fact } </span>
      </Card>
    )
  }
}

Card.propTypes = {
  card: PropTypes.object
}
