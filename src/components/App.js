import { React, Component } from "react";
import PropTypes from 'prop-types'
import nextId from "react-id-generator";
import { ContactList } from './ContactList'
import { Filter } from "./Filter";
import { Report } from 'notiflix/build/notiflix-report-aio';
import { ContactForm } from "./ContactForm";
import css from './App.module.css'

export class App extends Component {
  static defaultPropTypes = {
    contacts: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired
  };

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }],
    name: PropTypes.string.isRequired,
    filter: '',
  }

  //  this.setState({
  //    contacts: JSON.parse(localStorage.getItem('contacts'))
  //  });

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  }


  addContact = (evt) => {
    evt.preventDefault();


    const newContact = {
      name: evt.target.elements.name.value,
      id: nextId(),
      number: evt.target.elements.number.value,
    }

    const findSame = this.state.contacts.find(contact => contact.name === evt.target.elements.name.value)

    if (findSame) {
      return Report.failure('You have already added this contact')
    }

    this.setState({
      contacts: [...this.state.contacts, newContact]
    })
  }
  changeFilter = evt =>
    this.setState({ filter: evt.currentTarget.value });


  removeContact = (id) => {
    this.setState(({ contacts }) => {
      return {
        contacts: this.state.contacts.filter(item => item.id !== id)
      }
    })
  }


  render() {
    const { filter, contacts } = this.state;
    const loweredFilter = filter.toLocaleLowerCase();
    const filteredContacts =
      contacts.filter(contact => contact.name.toLocaleLowerCase().includes(loweredFilter))

    return (
      <div className={(css.appWrap)}>
        <h1>Phonebook</h1>
        <ContactForm onFormSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter onFiltChange={this.changeFilter} value={filter} />
        <ContactList contacts={filteredContacts} removeContact={this.removeContact} />
      </div >
    )
  }
}