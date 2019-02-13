import React from 'react';
import renderer from 'react-test-renderer';
import Contacts from './Contacts';

describe('Contacts', () => {
  const props = {
    contacts: {
      email: 'hallgeir@vecora.no',
      twitter: 'hallgeirg',
      vkontakte: 'hallgeirg',
      github: 'hallgeirg',
      rss: 'hallgeirg',
      telegram: 'hallgeirg'
    }
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Contacts {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
