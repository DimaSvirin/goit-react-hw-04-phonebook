import { Component, useState, useEffect} from 'react';
import { nanoid } from 'nanoid';

import { savedData } from 'data';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export const App = () => {
  const [contacts, setContacts] = useState(() =>
    localStorage.getItem('contacts')
      ? JSON.parse(localStorage.getItem('contacts'))
      : savedData
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = delId => {
    setContacts(contacts.filter(({ id }) => id !== delId));
  };

  const handleForm = row => {
    if (contacts.find(({ name }) => name === row.name)) {
      alert(`${row.name} is already in contacts`);
      return;
    }
    setContacts(prev => [{ id: nanoid(), ...row }, ...prev]);
  };

  const handleChangeFilter = e => setFilter(e.target.value);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Phonebook</h1>
      <ContactForm onForm={handleForm} />

      <h2 style={{ textAlign: "center" }}>Contacts</h2>
      <Filter value={filter} handlerChangeFilter={handleChangeFilter} />
      <ContactList
        filter={filter}
        contacts={contacts}
        onDelete={deleteContact}
      />
    </div>
  );
};

export class oldApp extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const locStorageContacts = localStorage.getItem('contacts');
    this.setState({
      contacts: locStorageContacts
        ? JSON.parse(locStorageContacts)
        : savedData,
    });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts)
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  deleteContact = delId => {
    const newList = this.state.contacts.filter(({ id }) => id !== delId);
    this.setState({ contacts: newList });
  };

  existRow = existName => alert(`${existName} is already in contacts`);

  handleForm = row => {
    if (this.state.contacts.find(({ name }) => name === row.name)) {
      this.existRow(row.name);
      return;
    }
    this.setState(prev => {
      return {
        contacts: [{ id: nanoid(), ...row }, ...prev.contacts],
      };
    });
  };

  handlerChangeFilter = e => this.setState({ filter: e.target.value });

  render() {
    const { filter, contacts } = this.state;
    return (
      <div>
        <h1 style={{textAlign:"center"}}>Phonebook</h1>
        <ContactForm onForm={this.handleForm} />

        <h2 style={{ textAlign: "center" }}>Contacts</h2>
        <Filter value={filter} handlerChangeFilter={this.handlerChangeFilter} />
        <ContactList
          filter={filter}
          contacts={contacts}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}

