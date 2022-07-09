import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/phonebook/phonebook-actions.js';
import * as selectors from 'redux/phonebook/phonebook-selectors';
import * as operation from 'redux/phonebook/phonebook-operation';
import { ContactForm } from 'components/Phonebook/ContactForm';
import { ContactList } from 'components/Phonebook/ContactList';
import { Filter } from 'components/Phonebook/Filter';

export default function Phonebook() {
  const contacts = useSelector(selectors.getContacts);
  const filter = useSelector(selectors.getFilter);
  const visibleContacts = useSelector(selectors.getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operation.fetchContacts());
  }, []);

  const checkDuplicateName = name =>
    contacts.find(contact => contact.name === name);

  const formSubmitHandler = async (name, number) => {
    if (checkDuplicateName(name))
      return alert(
        'This contact already exists, please enter a different name',
      );

    dispatch(operation.postContact({ name, number }));
  };

  const onDelete = id => {
    dispatch(operation.deleteContact(id));
  };

  return (
    <main>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />

      <h2>Contacts</h2>
      <Filter
        handlerFilter={e => dispatch(changeFilter(e.currentTarget.value))}
        filter={filter}
      />
      {contacts.length > 0 ? (
        <ContactList contacts={visibleContacts} onDelete={onDelete} />
      ) : (
        <h1>not found contacs</h1>
      )}
    </main>
  );
}
