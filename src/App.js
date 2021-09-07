//import logo from './logo.svg';
import "./App.css";
import Category from "./components/Category";

// import CategoryOG from "./components/CategoryMain";

import { useState } from "react";
import Header from "./cartComponents/Layout/Header";
import Cart from "./cartComponents/Cart/Cart";
import CartProvider from "./store/CartProvider";

import { Route } from "react-router-dom";
import CheckDummy from "./components/CheckoutDummy";
import ConfirmationPageDummy from "./components/ConfirmationPageDummy";

//test
// import Parent from "./testComponents/Parent";
// import { propTypes } from "react-bootstrap/esm/Image";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const [cart, setCart] = useState();

  return (
    <div>
      <Route path="/checkout">
        <div _ngcontent-vpl-c92="" role="complementary" class="hero-banner">
          <div _ngcontent-vpl-c92="" class="container">
            <div></div>
          </div>
        </div>
        <CheckDummy />
      </Route>

      <Route path="/confirmation">
        <div _ngcontent-vpl-c92="" role="complementary" class="hero-banner">
          <div _ngcontent-vpl-c92="" class="container">
            <div></div>
          </div>
        </div>
        <ConfirmationPageDummy />
      </Route>
      <Route exact path="/">
        <CartProvider>
          {cartIsShown && <Cart onClose={hideCartHandler} />}
          <Header onShowCart={showCartHandler} />

          <div _ngcontent-vpl-c92="" role="complementary" class="hero-banner">
            <div _ngcontent-vpl-c92="" class="container">
              <div
                _ngcontent-vpl-c92=""
                class="content-container default desktop"
              >
                <div _ngcontent-vpl-c92="" class="logo-title">
                  <div _ngcontent-vpl-c92="" class="title">
                    Telstra accessories
                  </div>
                </div>
                <div _ngcontent-vpl-c92="" class="heading v1-heading">
                  Add a little magic,
                  <br />
                  outright or on a plan.
                </div>
                <div _ngcontent-vpl-c92="" class="content">
                  Buy the latest accessories outright, or you can pay off
                  selected items on a plan if you have an existing internet or
                  post-paid mobile service with us.
                </div>
                <div _ngcontent-vpl-c92="" class="disclaimer"></div>
                <div _ngcontent-vpl-c92="" class="btn-group">
                  <div _ngcontent-vpl-c92="" class="tec-cta"></div>
                  <div _ngcontent-vpl-c92="" class="tec-cta"></div>
                </div>
                <div _ngcontent-vpl-c92="" class="btn-group">
                  <div _ngcontent-vpl-c92="" class="tec-cta"></div>
                  <div _ngcontent-vpl-c92="" class="tec-cta"></div>
                </div>
              </div>
              <div
                _ngcontent-vpl-c92=""
                class="background desktop"
                style={{
                  backgroundImage:
                    "url(https://checkout.telstra.com.au/assets/images/accessory_banner_desktop.png)",
                }}
              ></div>
            </div>
          </div>

          <center>
            <h2>Browse by category </h2>
            {/* add components here */}
            {/* <div><CategoryOG/></div> */}
            <div>
              <Category />
            </div>
            <div>{/* <DefaultTest /> */}</div>
          </center>
        </CartProvider>
      </Route>

      
    </div>
  );
}

export default App;
