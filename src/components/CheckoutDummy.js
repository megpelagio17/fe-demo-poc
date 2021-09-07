import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "./CheckoutDummy.css";


export default class CheckoutDummy extends React.Component {

  constructor(props) {
    super();
    this.state = {
      activeModal: null,
      category: [],
    };
    // this.clickHandler = this.clickHandler.bind(this);
    // this.hideModal = this.hideModal.bind(this);

    console.log(props, "cart info inside CartModal here");
    
    

  }

  render() {
    const dlink = "confirmation#top";
    return (
      <div>
        <br />
        {/* <div _ngcontent-vpl-c92="" role="complementary" class="hero-banner"> */}

        <div class="ui centered stackable padded relaxed grid">
          <div class="five wide column left-column"></div>
          <div class="nine wide column"></div>
        </div>

        <div className="ui centered padded two column grid">
          <div className="row checkout-row">
            <div className="eight wide column">
              {/* cart desc here */}
              <div className="ui padded segment">
                <div className="ui huge center aligned header"><a name="top"></a>
                  Current Cart
                </div>
                <div className="ui center aligned header">
                  <a href="/">Back to Main Page</a>
                </div>
                <div className="ui container item-data-container">
                  <div className="item-group-name-size">
                    <h3>Apple Watch Series 6</h3>Red &nbsp;x1
                  </div>
                  <h4>$649.00</h4>
                </div>
        <div><hr/></div>
                <div className="ui container item-data-container">
                  <div className="item-group-name-size">
                    <h3>Xbox Elite Wireless Controller Series 2</h3> &nbsp;x1
                  </div>
                  <h4>$249.00</h4>
                </div>

                
                <div className="ui horizontal divider">Shipping Options</div>
                <div
                  role="listbox"
                  aria-expanded="false"
                  className="ui fluid selection dropdown"
                  tabIndex={0}
                >
                  <div
                    className="default text"
                    role="alert"
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    Select Shipping Method
                  </div>
                  <i aria-hidden="true" className="dropdown icon" />
                  <div className="menu transition" />
                </div>
                <p>Select Country for Shipping Options</p>
                {/* <div className="ui horizontal divider">Discount Code</div>
        <form className="discount-code">
          <div className="ui input">
            <input type="text" />
          </div>
          <button className="ui black button">Apply</button>
        </form> */}
                <div className="ui horizontal divider">Cart Totals</div>
                <div className="ui large center aligned header">$898.00</div>
              </div>

              <form className="ui form checkout-form">
                <h1>Customer Info</h1>
                <div className="equal width fields">
                  <div className="field">
                    <label htmlFor="customer">First Name</label>
                    <div className="ui fluid input">
                      <input
                        name="firstname"
                        placeholder="John"
                        id="customer"
                        type="text"
                        defaultValue=" "
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label>Last name</label>
                    <div className="ui fluid input">
                      <input
                        name="lastname"
                        placeholder="Smith"
                        type="text"
                        defaultValue=" "
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label>Email</label>
                    <div className="ui fluid input">
                      <input
                        name="email"
                        placeholder="xyz@example.com"
                        type="email"
                        defaultValue=" "
                      />
                    </div>
                  </div>
                </div>
                <div className="fields">
                  <div className="ten wide field">
                    <label>Address</label>
                    <div className="ui input">
                      <input
                        name="street"
                        placeholder="122 Example St"
                        type="text"
                        defaultValue=" "
                      />
                    </div>
                  </div>
                  <div className="six wide field">
                    <label>Select Country</label>
                    <div
                      name="country"
                      role="listbox"
                      aria-expanded="false"
                      className="ui selection dropdown"
                      tabIndex={0}
                    >
                      <div
                        className="text"
                        role="alert"
                        aria-live="polite"
                        aria-atomic="true"
                      />
                      <i aria-hidden="true" className="dropdown icon" />
                      <div className="menu transition">
                        <div
                          style={{ pointerEvents: "all" }}
                          role="option"
                          aria-checked="false"
                          aria-selected="true"
                          className="selected item"
                        >
                          <span className="text">Canada</span>
                        </div>
                        <div
                          style={{ pointerEvents: "all" }}
                          role="option"
                          aria-checked="false"
                          aria-selected="false"
                          className="item"
                        >
                          <span className="text">Mexico</span>
                        </div>
                        <div
                          style={{ pointerEvents: "all" }}
                          role="option"
                          aria-checked="false"
                          aria-selected="false"
                          className="item"
                        >
                          <span className="text">United States</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fields">
                  <div className="six wide field">
                    <label>Town/City</label>
                    <div className="ui input">
                      <input
                        name="town_city"
                        placeholder="Las Vegas"
                        type="text"
                        defaultValue=" "
                      />
                    </div>
                  </div>
                  <div className="six wide field">
                    <label>County/State/Province/Territory</label>
                    <div
                      name="county_state"
                      role="combobox"
                      aria-expanded="false"
                      className="ui fluid search selection dropdown"
                    >
                      <input
                        aria-autocomplete="list"
                        autoComplete="off"
                        className="search"
                        tabIndex={0}
                        type="text"
                        defaultValue=" "
                      />
                      <div
                        className="default text"
                        role="alert"
                        aria-live="polite"
                        aria-atomic="true"
                      >
                        Search ...
                      </div>
                      <i aria-hidden="true" className="dropdown icon" />
                      <div role="listbox" className="menu transition">
                        <div className="message">No results found.</div>
                      </div>
                    </div>
                  </div>
                  <div className="four wide field">
                    <label>Zip/Postal</label>
                    <div className="ui input">
                      <input
                        name="postal_zip_code"
                        placeholder="00000"
                        max={99999}
                        type="text"
                        defaultValue=" "
                      />
                    </div>
                  </div>
                </div>
                <h1>Payment Info</h1>
                <div className="fields payment-radio">
                  <input
                    name="gateway"
                    type="radio"
                    defaultValue="test_gateway"
                  />
                  <label htmlFor="test_gateway">Test Gateway</label>
                  <input name="gateway" type="radio" defaultValue="stripe" />
                  <label htmlFor="stripe">Credit Card</label>
                </div>
                <div className="fields">
                  <div className="field">
                    <label>Credit Card Number</label>
                    <div className="ui input">
                      <input
                        name="number"
                        placeholder="0000111100001111"
                        type="number"
                        defaultValue=" "
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label>Billing Zip</label>
                    <div className="ui input">
                      <input
                        name="postal_billing_zip_code"
                        max={99999}
                        placeholder="Enter Billing Zip Code"
                        type="text"
                        defaultValue=" "
                      />
                    </div>
                  </div>
                </div>
                <div className="fields">
                  <div className="three wide field">
                    <label>Month</label>
                    <div
                      name="expiry_month"
                      role="listbox"
                      aria-expanded="false"
                      className="ui fluid selection dropdown"
                      tabIndex={0}
                    >
                      <div
                        className="text"
                        role="alert"
                        aria-live="polite"
                        aria-atomic="true"
                      />
                      <i aria-hidden="true" className="dropdown icon" />
                      <div className="menu transition">
                        <div
                          style={{ pointerEvents: "all" }}
                          role="option"
                          aria-checked="false"
                          aria-selected="true"
                          className="selected item"
                        >
                          <span className="text">01</span>
                        </div>
                        <div
                          style={{ pointerEvents: "all" }}
                          role="option"
                          aria-checked="false"
                          aria-selected="false"
                          className="item"
                        >
                          <span className="text">02</span>
                        </div>
                        <div
                          style={{ pointerEvents: "all" }}
                          role="option"
                          aria-checked="false"
                          aria-selected="false"
                          className="item"
                        >
                          <span className="text">03</span>
                        </div>
                        <div
                          style={{ pointerEvents: "all" }}
                          role="option"
                          aria-checked="false"
                          aria-selected="false"
                          className="item"
                        >
                          <span className="text">04</span>
                        </div>
                        <div
                          style={{ pointerEvents: "all" }}
                          role="option"
                          aria-checked="false"
                          aria-selected="false"
                          className="item"
                        >
                          <span className="text">05</span>
                        </div>
                        <div
                          style={{ pointerEvents: "all" }}
                          role="option"
                          aria-checked="false"
                          aria-selected="false"
                          className="item"
                        >
                          <span className="text">06</span>
                        </div>
                        <div
                          style={{ pointerEvents: "all" }}
                          role="option"
                          aria-checked="false"
                          aria-selected="false"
                          className="item"
                        >
                          <span className="text">07</span>
                        </div>
                        <div
                          style={{ pointerEvents: "all" }}
                          role="option"
                          aria-checked="false"
                          aria-selected="false"
                          className="item"
                        >
                          <span className="text">08</span>
                        </div>
                        <div
                          style={{ pointerEvents: "all" }}
                          role="option"
                          aria-checked="false"
                          aria-selected="false"
                          className="item"
                        >
                          <span className="text">09</span>
                        </div>
                        <div
                          style={{ pointerEvents: "all" }}
                          role="option"
                          aria-checked="false"
                          aria-selected="false"
                          className="item"
                        >
                          <span className="text">10</span>
                        </div>
                        <div
                          style={{ pointerEvents: "all" }}
                          role="option"
                          aria-checked="false"
                          aria-selected="false"
                          className="item"
                        >
                          <span className="text">11</span>
                        </div>
                        <div
                          style={{ pointerEvents: "all" }}
                          role="option"
                          aria-checked="false"
                          aria-selected="false"
                          className="item"
                        >
                          <span className="text">12</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="three wide field">
                    <label>Year</label>
                    <div
                      name="expiry_year"
                      role="listbox"
                      aria-expanded="false"
                      className="ui fluid selection dropdown"
                      tabIndex={0}
                    >
                      <div
                        className="text"
                        role="alert"
                        aria-live="polite"
                        aria-atomic="true"
                      />
                      <i aria-hidden="true" className="dropdown icon" />
                      <div className="menu transition">
                        <div
                          style={{ pointerEvents: "all" }}
                          role="option"
                          aria-checked="false"
                          aria-selected="true"
                          className="selected item"
                        >
                          <span className="text">20</span>
                        </div>
                        <div
                          style={{ pointerEvents: "all" }}
                          role="option"
                          aria-checked="false"
                          aria-selected="false"
                          className="item"
                        >
                          <span className="text">21</span>
                        </div>
                        <div
                          style={{ pointerEvents: "all" }}
                          role="option"
                          aria-checked="false"
                          aria-selected="false"
                          className="item"
                        >
                          <span className="text">22</span>
                        </div>
                        <div
                          style={{ pointerEvents: "all" }}
                          role="option"
                          aria-checked="false"
                          aria-selected="false"
                          className="item"
                        >
                          <span className="text">23</span>
                        </div>
                        <div
                          style={{ pointerEvents: "all" }}
                          role="option"
                          aria-checked="false"
                          aria-selected="false"
                          className="item"
                        >
                          <span className="text">24</span>
                        </div>
                        <div
                          style={{ pointerEvents: "all" }}
                          role="option"
                          aria-checked="false"
                          aria-selected="false"
                          className="item"
                        >
                          <span className="text">25</span>
                        </div>
                        <div
                          style={{ pointerEvents: "all" }}
                          role="option"
                          aria-checked="false"
                          aria-selected="false"
                          className="item"
                        >
                          <span className="text">26</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="three wide field">
                    <label>CVC</label>
                    <div className="ui input">
                      <input
                        name="cvc"
                        placeholder={123}
                        type="text"
                        defaultValue=" "
                      />
                    </div>
                  </div>
                </div>
                <h1>Billing Address</h1>
                <div className="field">
                  <div className="ui checkbox">
                    <input
                      className="hidden"
                      readOnly
                      tabIndex={0}
                      type="checkbox"
                      defaultValue=" "
                    />
                    <label>Billing Address Same as Shipping ...</label>
                  </div>
                </div>
                <div className="equal width fields">
                  <div className="ten wide field">
                    <label>Billing Name</label>
                    <div className="ui input">
                      <input
                        name="billing_name"
                        placeholder="John Smith"
                        type="text"
                        defaultValue=" "
                      />
                    </div>
                  </div>
                  <div className="six wide field">
                    <label>Select Country</label>
                    <div
                      name="billing_country"
                      role="listbox"
                      aria-expanded="false"
                      className="ui selection dropdown"
                      tabIndex={0}
                    >
                      <div
                        className="text"
                        role="alert"
                        aria-live="polite"
                        aria-atomic="true"
                      />
                      <i aria-hidden="true" className="dropdown icon" />
                      <div className="menu transition">
                        <div
                          style={{ pointerEvents: "all" }}
                          role="option"
                          aria-checked="false"
                          aria-selected="true"
                          className="selected item"
                        >
                          <span className="text">Canada</span>
                        </div>
                        <div
                          style={{ pointerEvents: "all" }}
                          role="option"
                          aria-checked="false"
                          aria-selected="false"
                          className="item"
                        >
                          <span className="text">Mexico</span>
                        </div>
                        <div
                          style={{ pointerEvents: "all" }}
                          role="option"
                          aria-checked="false"
                          aria-selected="false"
                          className="item"
                        >
                          <span className="text">United States</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fields">
                  <div className="four wide field">
                    <label>Address</label>
                    <div className="ui input">
                      <input
                        name="billing_street"
                        placeholder="122 Example St"
                        type="text"
                        defaultValue=" "
                      />
                    </div>
                  </div>
                  <div className="three wide field">
                    <label>City</label>
                    <div className="ui input">
                      <input
                        name="billing_town_city"
                        placeholder="Las Vegas"
                        type="text"
                        defaultValue=" "
                      />
                    </div>
                  </div>
                  <div className="six wide field">
                    <label>County/State/Province/Territory</label>
                    <div
                      name="billing_county_state"
                      role="combobox"
                      aria-expanded="false"
                      className="ui fluid search selection dropdown"
                    >
                      <input
                        aria-autocomplete="list"
                        autoComplete="off"
                        className="search"
                        tabIndex={0}
                        type="text"
                        defaultValue=" "
                      />
                      <div
                        className="default text"
                        role="alert"
                        aria-live="polite"
                        aria-atomic="true"
                      >
                        Search State
                      </div>
                      <i aria-hidden="true" className="dropdown icon" />
                      <div role="listbox" className="menu transition">
                        <div className="message">No results found.</div>
                      </div>
                    </div>
                  </div>
                  <div className="three wide field">
                    <label>Zip</label>
                    <div className="ui input">
                      <input
                        name="billing_postal_zip_code"
                        placeholder="00000"
                        type="text"
                        defaultValue=" "
                      />
                    </div>
                  </div>
                </div>
                <div className="field">
                  
                  <Link to={dlink} >
                  <button className="ui green huge button">
                    Complete Checkout and Pay
                  </button>
          </Link>
                </div>
              </form>
            </div>
            {/* <div className="six wide column"></div> */}
          </div>
        </div>

        
        {/* </div> */}
      </div>
    );
  }
}
