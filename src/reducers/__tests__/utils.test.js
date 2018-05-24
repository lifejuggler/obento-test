import { sortByHelper, pushFavTop } from '../utils'

const VALUE = [{info: {fact: 'a a'}}, {info: {fact: 'a z'}}, {info: {fact: 'a c'}}, {info: {fact: 'a b'}}]
const FAV_NOFAV = [{favorite: false}, {favorite: false}, {favorite: true}, {favorite: false}]
test('Sort', () => {
  const RESULT = [{"cardId": 0, info: {fact: 'a a'}}, {"cardId": 1, info: {fact: 'a b'}}, {"cardId": 2, info: {fact: 'a c'}}, {"cardId": 3, info: {fact: 'a z'}}]

  expect(sortByHelper(VALUE, 'asc')).toEqual(RESULT);
});

test('Sort By Reverse', () => {
  const RESULT_REV = [{"cardId": 0, info: {fact: 'a z'}}, {"cardId": 1, info: {fact: 'a c'}}, {"cardId": 2, info: {fact: 'a b'}}, {"cardId": 3, info: {fact: 'a a'}}]

  expect(sortByHelper(VALUE, 'desc')).toEqual(RESULT_REV);
});

test('Have Fav Top', () => {
  const FAV_NOFAV_RESULT = [{favorite: true}, {favorite: false}, {favorite: false}, {favorite: false}]

  expect(pushFavTop(FAV_NOFAV)).toEqual(FAV_NOFAV_RESULT);
});