import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListContacts from './ListContacts';
import CreateContact from './CreateContact';
import * as ContactsApi from './utils/ContactsAPI'

class App extends Component {
  state = {
    contacts: []
  }

  componentDidMount() {
    ContactsApi.getAll().then(contacts => this.setState({
      contacts: contacts
    }));
  }

  removeContact = (contact) => {
    ContactsApi.remove(contact).then(removedContact => this.setState((state) => ({
      contacts: state.contacts.filter(c => c.id !== removedContact.id)
    })));
  }

  createContact = (contact) => {
    ContactsApi.create(contact).then(addedContact => {
      this.setState(state => ({
        contacts: state.contacts.concat([addedContact])
      }))
    });
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <ListContacts
            contacts={this.state.contacts}
            onDeleteContact={this.removeContact} />
        )} />
        <Route path='/create' render={({ history }) => (
          <CreateContact onCreateContact={(contact) => {
            this.createContact(contact);
            history.push('/');
          }} />
        )} />
      </div>
    );
  }
}

export default App;
