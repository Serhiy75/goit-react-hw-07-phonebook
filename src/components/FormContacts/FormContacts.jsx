import React from 'react';
import css from './FormContact.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
// import { nanoid } from 'nanoid';

// import { useEffect } from 'react';
// import { fetchContact } from 'redux/operations';

export const FormContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  // useEffect(() => {
  //   dispatch(fetchContact());
  // }, [dispatch]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    addContacts({ number, name });
    form.reset();
  };
  const addContacts = contact => {
    const existingContact = contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (existingContact) {
      alert(`${contact.name} name is already in contacts`);
    } else {
      dispatch(addContact(contact));
    }
  };
  console.log(contacts);
  return (
    <form onSubmit={handleSubmit} className={css.forma}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label>Number</label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit" className={css.formbtn}>
        Add Contacts
      </button>
    </form>
  );
};
