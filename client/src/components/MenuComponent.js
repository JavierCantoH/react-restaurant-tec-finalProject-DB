import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import TutorialDataService from "../services/menu.service";

export default class Menu extends Component {
    constructor(props) {
      super(props);
      this.onChangeIdCategory = this.onChangeIdCategory.bind(this);
      this.onChangeIdProduct = this.onChangeIdProduct.bind(this);
      this.saveProduct = this.saveProduct.bind(this);
      this.newProduct = this.newProduct.bind(this);
  
      this.state = {
        id: null,
        title: "",
        description: "", 
        published: false,
  
        submitted: false
      };
    }
  
    onChangeIdCategory(e) {
      this.setState({
        title: e.target.value
      });
    }
  
    onChangeIdProduct(e) {
      this.setState({
        description: e.target.value
      });
    }
  
    saveProduct() {
      var data = {
        id_category: this.state.id_category,
        id_product: this.state.id_product
      };
      TutorialDataService.create(data)
        .then(response => {
          this.setState({
            id_menu: response.data.id_menu,
            id_category: response.data.id_category,
            id_product: response.data.id_product,
            published: response.data.published,
  
            submitted: true
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    newProduct() {
      this.setState({
        id_menu: null,
        id_category: "",
        id_product: "",
        published: false,
  
        submitted: false
      });
    }
  
    render() {
       return (
        <div className="container">
        <div className="row">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Inicio</Link></BreadcrumbItem>
                <BreadcrumbItem active>Menú</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>Menú</h3>
                <hr />
            </div>                
        </div>
        <div className="submit-form">
          {this.state.submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={this.newProduct}>
                Add
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="id_category">ID Category</label>
                <input
                  type="text"
                  className="form-control"
                  id="id_category"
                  required
                  value={this.state.id_category}
                  onChange={this.onChangeCategory}
                  name="id_category"
                />
              </div>
  
              <div className="form-group">
                <label htmlFor="id_product">ID Product</label>
                <input
                  type="text"
                  className="form-control"
                  id="id_product"
                  required
                  value={this.state.id_product}
                  onChange={this.onChangeDescription}
                  name="description"
                />
              </div>
              <button onClick={this.saveTutorial} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
    </div>
        
      );
    }
  }