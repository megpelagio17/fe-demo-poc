//import './ExpenseDate.css';
import React from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import MyModal from '../components/Modal.js';

const api = axios.create({
 baseURL:'https://tapi.telstra.com/presentation/v1/ecommerce-products/products?segments=accessories_con'
})

export default class DefaultProductView extends React.Component {
  state = {
    devices: []
  }

  constructor(props) {
    super(props);
    this.state = {
        offset: 0,
        devices: [],
        perPage: 20,
        currentPage: 0
    };
    this.handlePageClick = this
        .handlePageClick
        .bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.hideModal = this.hideModal.bind(this);
}

clickHandler(e, index) {
  this.setState({ activeModal: index })
}

hideModal() {
  this.setState({ activeModal: null })
}


receivedData() {

    //var payload = [];
    axios.get("https://35iznmumbg.execute-api.ap-southeast-2.amazonaws.com/Staging?segments=accessories_con")
      .then(res => {
        const devices = res.data.data.productFamilies;
        const slice = devices.slice(this.state.offset, this.state.offset + this.state.perPage)
        const postData = slice.map(device => <React.Fragment>
          <div
                      class="product-cell ng-star-inserted"
                      _ngcontent-bqf-c89=""
                      key={device.id}
                    >
                       
                        <div class="product-item" _ngcontent-bqf-c89="">
                        {(() => {
                                if (device.products[0].outOfStock == false) {
                                  console.log(device.products[0].outOfStock)
                                  return (
                                    <div class="image" _ngcontent-bqf-c89="">
                                    <img
                                      _ngcontent-bqf-c89=""
                                      src={device.imageUrl}
                                      alt={device.name}
                                    />
                                    </div>
                                  )
                                } else if (device.products[0].outOfStock == true){
                                  console.log(device.products[0].outOfStock + device.name)
                                  return (
                                    <div class="image" _ngcontent-bqf-c89="">
                                   <img _ngcontent-bqf-c89="" src={device.imageUrl} alt={device.name} class="translucent"/>
                                    <div _ngcontent-adq-c89="" class="tags oos ng-star-inserted">
                                    <span _ngcontent-adq-c89="" class="availability out-of-stock">Out of stock</span>
                                </div>
                                </div>
                                
                                    
                                

                                  )
                                }
                              })()}
                          <div class="product-name" _ngcontent-lgs-c89="">{device.name}</div>
                          <div class="product-value" _ngcontent-lgs-c88="">
                            <span _ngcontent-lgs-c88="">
                              ${device.products[0].currentPrice
                                    .priceOptions[0].upfrontPrice}
                            </span>
                          </div>
                        </div>
                 
                    </div>

        </React.Fragment>)
        this.setState({
          pageCount: Math.ceil(devices.length / this.state.perPage),
         
          postData
      })
  });
    }
     
    handlePageClick = (e) => {
      const selectedPage = e.selected;
      const offset = selectedPage * this.state.perPage;

      this.setState({
          currentPage: selectedPage,
          offset: offset
      }, () => {
          this.receivedData()
      });

  };

  componentDidMount() {
      this.receivedData()
  }
  

  render() {
    return (
      <div class="body">
       <div _ngcontent-kar-c152="" class="product-header">
          <h1 _ngcontent-kar-c152="" class="heading v1-heading">Accessories</h1>
          </div>
      <div
        class="product-selector"
        _ngcontent-bqf-c89=""
        window-scrollable="">
        <div class="product-selections" _ngcontent-bqf-c89="">
          <div class="product-grid" _ngcontent-bqf-c89="">
            <div class="container" _ngcontent-bqf-c89="">
            {this.state.postData}
            <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}