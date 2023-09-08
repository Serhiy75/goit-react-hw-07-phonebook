import { FormContacts } from './FormContacts/FormContacts';
import { FilterContact } from './FilterContact/FilterContact';
import { ContactList } from './ContactList/ContactList';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <h1 className="">Phonebook</h1>
      <FormContacts />
      <h2>Contacts</h2>
      <FilterContact />
      <ContactList />
    </div>
  );
};
