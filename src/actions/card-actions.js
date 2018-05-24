import { fetchInfo, fetchImages } from './api-actions'

export function toggleFavorite (cardId) {
  return (dispatch) => {
    dispatch({
      type: 'card/toggleFavorite',
      payload: cardId
    })
  }
}

export function sortBy (sortType) {
  return (dispatch) => {
    dispatch({
      type: 'card/updateSort',
      payload: sortType
    })
  }
}

export function changeView (viewType) {
  return (dispatch) => {
    dispatch({
      type: 'card/updateView',
      payload: viewType
    })
  }
}

export function setCards () {
  return async (dispatch) => {
    const cards = await getAllCards()
    dispatch({
      type: 'cards/update',
      payload: cards
    })
  }
}

export function getAllCards () {
  const images = fetchImages()
  const info = fetchInfo()

  return Promise.all([images, info]).then((result) => {
    return buildCards(result[0], result[1])
  })
}

function buildCards (images, info) {
  return images.reduce((cards, image, index) => {
    cards.push({
      image: image,
      info: info[index],
      favorite: false,
      cardId: index
    })
    return cards
  },[])
}