import React from "react";
import axios from "axios";

import "./DefaultWW.css";
import ProductItem from "./ProductItemTest";
import MyModal from '../components/Modal.js';
export default class DefaultCP extends React.Component {
  constructor(props) {
    super();
    this.state = {
      activeModal: null,
      category: [],

    };
    this.clickHandler = this.clickHandler.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  

  clickHandler(e, index) {
    this.setState({ activeModal: index })
}

hideModal() {
    this.setState({ activeModal: null })
}

  componentDidMount() {
    //axios.get("https://tapi.telstra.com/presentation/v1/ecommerce-products/products/accessories_con")
    axios
      .get(
        "https://35iznmumbg.execute-api.ap-southeast-2.amazonaws.com/Staging?segments=accessories_con"
      )
      .then((res) => {
        const category = res.data.data.productFamilies;
        this.setState({ category });
        console.log(res.data.dataproductFamilies);
      });
  }

  render() {
    return (
      <div class="body">
          <div _ngcontent-kar-c152="" class="product-header">
          <h1 _ngcontent-kar-c152="" class="heading v1-heading">Home Office &amp; Internet</h1>
          </div>
        <div
          class="product-selector"
          _ngcontent-bqf-c89=""
          window-scrollable=""
        >
          <div class="product-selections" _ngcontent-bqf-c89="">
            <div class="product-grid" _ngcontent-bqf-c89="">
              <div class="container" _ngcontent-bqf-c89="">
                {this.state.category
                  .filter((category) => category.categoryId == "104")
                  .map((fcategory, index) => {
                    return index <= 20? (
                      <div
                        class="product-cell ng-star-inserted"
                        _ngcontent-bqf-c89=""
                        key={fcategory.id}
                      >
                        <MyModal id={fcategory.id} title={fcategory.name} img= {fcategory.imageUrl} price= {fcategory.products[0].currentPrice
                                  .priceOptions[0].upfrontPrice} otherImg={fcategory.products[0].images}
        show={this.state.activeModal === index}
        onHide={this.hideModal} />
                        <a  onClick={e => this.clickHandler(e, index)}>
                          <div class="product-item" _ngcontent-bqf-c89="">
                          {(() => {
                                if (fcategory.products[0].outOfStock == false) {
                                  console.log(fcategory.products[0].outOfStock)
                                  return (
                                    <div class="image" _ngcontent-bqf-c89="">
                                    <img
                                      _ngcontent-bqf-c89=""
                                      src={fcategory.imageUrl}
                                      alt={fcategory.name}
                                    />
                                    </div>
                                  )
                                } else if (fcategory.products[0].outOfStock == true){
                                  console.log(fcategory.products[0].outOfStock + fcategory.name)
                                  return (
                                    <div class="image" _ngcontent-bqf-c89="">
                                   <img _ngcontent-bqf-c89="" src={fcategory.imageUrl} alt={fcategory.name} class="translucent"/>
                                    <div _ngcontent-adq-c89="" class="tags oos ng-star-inserted">
                                    <span _ngcontent-adq-c89="" class="availability out-of-stock">Out of stock</span>
                                </div>
                                </div>
                                
                                    
                                

                                  )
                                }
                              })()}
                            <div class="product-name" _ngcontent-lgs-c89="">{fcategory.name}</div>
                            <div class="product-value" _ngcontent-lgs-c88="">
                              <span _ngcontent-lgs-c88="">
                              ${fcategory.products[0].currentPrice
                                    .priceOptions[0].upfrontPrice}
                              </span>
                            </div>
                          </div>
                        </a>
                        {(() => {
                          if (fcategory.products[0].outOfStock == false) {
                            return (
                              <ProductItem
                                key={fcategory.id}
                                id={fcategory.id}
                                name={fcategory.name}
                                price={fcategory.minPay}
                              />
                            );
                          } return(
                            <button disabled class="buttonSoldOut">Sold out</button>
                          );
                        })()}
                      </div>
                    ) : undefined;
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
