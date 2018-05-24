import {shallow} from 'enzyme';
import { sortByHelper, pushFavTop } from '../utils'

const VALUE = [{info: {fact: a a}}, {info: {fact: a z}}, {info: {fact: a c}}, {info: {fact: a b}}]

test('Sort', () => {
  const RESULT = [{info: {fact: a a}}, {info: {fact: a b}}, {info: {fact: a c}}, {info: {fact: a z}}]

  expect(sortByHelper(VALUE, 'asc')).toEqual(RESULT);
});

test('Sort By Reverse', () => {
  const RESULT_REV = [{info: {fact: a z}}, {info: {fact: a c}}, {info: {fact: a b}}, {info: {fact: a a}}]

  expect(sortByHelper(VALUE, 'desc')).toEqual(RESULT_REV);
});