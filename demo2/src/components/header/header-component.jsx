import './header.styles.css';

import Cat from '../cat/cat-component';
import Text from '../text/text-component';

const Header = () => (
  <header className="App-header">
    <Cat />
    <Text />
  </header>
);

export default Header;
