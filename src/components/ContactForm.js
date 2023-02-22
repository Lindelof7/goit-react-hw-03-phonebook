import { Component } from "react";
import PropTypes from 'prop-types'
import css from './App.module.css'

export class ContactForm extends Component {
    static defaultPropTypes = {
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }
    state = {
        name: '',
        number: ''
    }

    handleNameChange = evt => {
        this.setState({ name: evt.target.value });
    };
    handleNumChange = evt => {
        this.setState({ number: evt.target.value });
    }

    handleOnSubmit = (e) => {
        this.props.onFormSubmit(e)
        this.setState({ name: '', number: '' })
    }

    render() {
        const { name, number } = this.state;
        return (
            <form onSubmit={this.handleOnSubmit} >
                <fieldset className={(css.formEl)}>
                    <label htmlFor="contactName" className={(css.formLabel)}>Name</label>
                    <input
                        className={(css.formInput)}
                        type="text"
                        name="name"
                        id="contactName"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange={this.handleNameChange}
                    />
                    <label htmlFor="contactNumber" className={(css.formLabel)}>Number</label>
                    <input
                        className={(css.formInput)}
                        type="tel"
                        name="number"
                        id="contactNumber"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={number}
                        onChange={this.handleNumChange}
                    />
                    <button type="submit" className={(css.formSubmit)}>Add Contact</button>
                </fieldset>
            </ form >

        )
    }
}

