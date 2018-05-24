import { sortByHelper, pushFavTop } from './utils'

const DEFAULT_STATE = {
  cards: [],
  isLoading: false,
  viewType: 'multi',
  sortType: 'desc'
}

const cards = (state = DEFAULT_STATE, action) => {
  let newCards
  switch (action.type) {
    case 'cards/update':
      newCards = pushFavTop(action.payload)
      return Object.assign({}, state, {
        isLoading: false,
        cards: newCards
      })
    case 'loading':
      return Object.assign({}, state, { isLoading: true })
    case 'card/toggleFavorite':
      state = Object.assign({}, state)
      newCards = state.cards.reduce((cards, card) => {
        if (card.cardId === action.payload) {
          card.favorite = !card.favorite
        }
        cards.push(card)

        return cards
      }, [])
      state.cards = pushFavTop(newCards)
      return state
    case 'card/updateSort':
      newCards = sortByHelper(state.cards, action.payload)
      return Object.assign({}, state, {
        cards: newCards,
        sortType: action.payload
      })
    case 'card/updateView':
      return Object.assign({}, state, {
        viewType: action.payload
      })
    default:
      return state
  }
}

export default cards