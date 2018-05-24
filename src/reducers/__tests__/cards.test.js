import {shallow} from 'enzyme';

const INITIAL = {}
test('Update state', () => {
  expect(checkbox.text()).toEqual('Off');

  checkbox.find('input').simulate('change');

  expect(checkbox.text()).toEqual('On');
});