import React from 'react';
import css from './App.module.css'

export const Filter = ({ value, onFiltChange }) => {
    return (<div className={(css.filterWrap)}><label htmlFor="contactFilter" className={(css.formLabel)}>Find contacts by name</label>
        <input
            className={(css.filterInput)}
            onChange={onFiltChange}
            type="text"
            name="number"
            id="contactFilter"
            value={value}
        /></div>)
}

