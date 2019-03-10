import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './components/Modal';

const serviceItems = [
  {
      id: 1,
      title: 'Kirpėjas',
      description: 'Greitas plaukų kirpimas',
      availability: true
  },
  {
      id: 2,
      title: 'Santechnikas',
      description: 'Greitai išvalau vamzdžius',
      availability: true
  },
  {
      id: 3,
      title: 'Mokytoja',
      description: 'Papildomai mokau studentus anglų kalbos',
      availability: false
  },
  {
      id: 4,
      title: 'Masažuotojas',
      description: 'Labai švelnus masažas už prieinamą kainą',
      availability: true
  }
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      viewAvailable: true,
      activeItem: {
        title: " ",
        description: " ",
        availability: true
      },
      servicesList: serviceItems
    };
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal })
  };

  handleSubmit = item => {
    this.toggle();
    alert("save" + JSON.stringify(item));
  };

  handleDelete = item => {
    alert("delete" + JSON.stringify(item));
  };

  createItem = () => {
    const item = { title: " ", description: " ", availability: true };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = item => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  displayCompleted = status => {
    if (status) {
      return this.setState({ viewAvailable: true });
    }
    return this.setState({ viewAvailable: false });
  };

  renderTabList = () => {
    return (
      <div className="my-5 tab-list">
        <span
          onClick={() => this.displayCompleted(true)}
          className={this.state.viewAvailable ? "active" : ""}
        >
          Available
        </span>
        <span
          onClick={() => this.displayCompleted(false)}
          className={this.state.viewAvailable ? "" : "active"}
          >
            Unavailable
          </span>
      </div>
    );
  };

  renderItems = () => {
    const { viewAvailable } = this.state;
    const newItems = this.state.servicesList.filter(
      item => item.availability === viewAvailable
    );
    return newItems.map(item => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`service-title mr-2 ${
            this.state.viewAvailable ? "available-services" : ""
          }`}
          title={item.description}
        >
          {item.title}
        </span>
          <button
            onClick={() => this.editItem(item)}
            className="btn btn-secondary mr-2"
          >
            Edit 
          </button>
          <button
            onClick={() => this.handleDelete(item)}
            className="btn btn-danger"
          > 
            Delete 
          </button>
      </li>
    ));
  };

  render() {
    return (
      <main className="content">
        <h1 className="text-white text-uppercase text-center my-4">Services App</h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <button className="btn btn-primary" onClick={this.createItem}> Add Service </button>
            </div>
            {this.renderTabList()}
            <ul className="list-group list-group-flush">
              {this.renderItems()}
            </ul>
          </div>
        </div>
        <div>
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
            />
        ) : null}
        </div>
      </main>
    );
  }
}