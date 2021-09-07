import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1></h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      {/* <div className={classes['main-image']}>
        <img src={tryImage} alt='martin' />
      </div> */}
    </Fragment>
  );
};

export default Header;
