export function sortByHelper (cards, sortType) {
  let sorted = cards.sort((a, b) => {
    let aLine = a.info.fact.split(' ')
    let bLine = b.info.fact.split(' ')

    if (sortType === 'asc') {
      if (aLine[aLine.length - 1] < bLine[bLine.length - 1]) return -1
      if (aLine[aLine.length - 1] > bLine[bLine.length - 1]) return 1
    } else {
      if (aLine[aLine.length - 1] > bLine[bLine.length - 1]) return -1
      if (aLine[aLine.length - 1] < bLine[bLine.length - 1]) return 1
    }

    return 0
  })
  sorted = sorted.map((card, index) => {
    card.cardId = index

    return card
  })
  return sorted
}

export function pushFavTop (cards) {
  const favList = cards.filter(card => card.favorite)
  const unFavList = cards.filter(card => !card.favorite)

  return favList.concat(unFavList)
}