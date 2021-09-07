import React from 'react';
import axios from 'axios';
import SVG from 'axios-react-inlinesvg';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import DefaultWW from "../components/DefaultWW";
import DefaultGaming from "../components/DefaultGaming";
import DefaultHOI from "../components/DefaultHOI";
import DefaultCP from "../components/DefaultCP";
import DefaultTIoT from "../components/DefaultTIoT";
import DefaultHS from "../components/DefaultHS";
import DefaultProductView from '../components/DefaultProductView';

export default class Category extends React.Component {
  state = {
    category: []
  }

  componentDidMount() {
    //axios.get("https://tapi.telstra.com/presentation/v1/ecommerce-products/products/accessories_con")
    axios.get("https://tapi.telstra.com/presentation/v1/ecommerce-products/products?segments=accessories_con")
      .then(res => {
        const category = res.data.data.productCategories;
        this.setState({ category });
        //console.log(res.data.data.productCategories[1].imageSvg);
      })

  }

  getproductCategories(selectedproductCategories) {
    axios.get("https://tapi.telstra.com/presentation/v1/ecommerce-products/products?segments=accessories_con")
      .then(res => {
        const productFamily = res.data.data.productFamilies;
        this.setState({ productFamily });
        //console.log(res.data.data.productFamilies);
      })
  }

  render() {
    return (
      <div>
        <BrowserRouter>

          {this.state.category.filter(category => category.sortOrder > 1).map(fcategory =>
            <td class="catTd" key={fcategory.id}>
              <div _ngcontent-axc-c95="" class="cssClass"><SVG src={fcategory.imageSvg} /></div>
              <Link to={fcategory.code}>{fcategory.name}</Link> </td>

          )}
          <Switch>

            <Route path="/watches-wearables">
              <DefaultWW />
            </Route>
            <Route path="/gaming">
              <DefaultGaming />
            </Route>
            <Route path="/home-internet">
              <DefaultHOI />
            </Route>
            <Route path="/cases-protection">
              <DefaultCP />
            </Route>
            <Route path="/technology-iot">
              <DefaultTIoT />
            </Route>
            <Route path="/headphones-speakers">
              <DefaultHS />
            </Route>
            <Route path="/">
              <DefaultProductView />
            </Route>
          </Switch>

        </BrowserRouter>
        <div>{this.state.selectedproductCategories}</div>

      </div>
    )
  }
}