// import { useState, useEffect } from "react";

// import ContactForm from "./ContactForm/ContactForm";
// import ContactList from "./ContactList/ContactList";
// import SearchBox from "./SearchBox/SearchBox";

// export default function App() {
//   const [contacts, setContacts] = useState(() => {
//     const initialContacts = localStorage.getItem("contacts");

//     return initialContacts
//       ? JSON.parse(initialContacts)
//       : [
//           { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//           { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//           { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//           { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//         ];
//   });

//   useEffect(() => {
//     localStorage.setItem("contacts", JSON.stringify(contacts));
//   });

//   const [filter, setFilter] = useState("");

//   const deleteContact = (contactId) => {
//     setContacts((prevContacts) => {
//       return prevContacts.filter((contact) => contactId !== contact.id);
//     });
//   };

//   const visibleContacts = contacts.filter(
//     (contact) =>
//       contact.name.toLowerCase().includes(filter.toLowerCase()) ||
//       contact.number.includes(filter)
//   );

//   const addContact = (newContact) => {
//     setContacts((prevContacts) => {
//       return [...prevContacts, newContact];
//     });
//   };

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm onAdd={addContact} />
//       <SearchBox value={filter} onFilter={setFilter} />
//       <ContactList contacts={visibleContacts} onDelete={deleteContact} />
//     </div>
//   );
// }

// import { useState, useEffect } from "react";

// import ContactForm from "./ContactForm/ContactForm";
// import ContactList from "./ContactList/ContactList";
// import SearchBox from "./SearchBox/SearchBox";

// export default function App() {
//   const [contacts, setContacts] = useState(() => {
//     const initialContacts = localStorage.getItem("contacts");

//     return initialContacts
//       ? JSON.parse(initialContacts)
//       : [
//           { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//           { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//           { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//           { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//         ];
//   });

//   useEffect(() => {
//     localStorage.setItem("contacts", JSON.stringify(contacts));
//   });

//   const [filter, setFilter] = useState("");

//   const deleteContact = (contactId) => {
//     setContacts((prevContacts) => {
//       return prevContacts.filter((contact) => contactId !== contact.id);
//     });
//   };

//   const visibleContacts = contacts.filter(
//     (contact) =>
//       contact.name.toLowerCase().includes(filter.toLowerCase()) ||
//       contact.number.includes(filter)
//   );

//   const addContact = (newContact) => {
//     setContacts((prevContacts) => {
//       return [...prevContacts, newContact];
//     });
//   };

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm onAdd={addContact} />
//       <SearchBox value={filter} onFilter={setFilter} />
//       <ContactList contacts={visibleContacts} onDelete={deleteContact} />
//     </div>
//   );
// }

import { useSelector } from "react-redux";
import LangSwitcher from "../HM6/LangSwitcher";
import Balance from "../HM6/Balance";

import { selectLang } from "../../redux/localeSlice";

export default function App() {
  const lang = useSelector(selectLang);

  return (
    <div>
      <h1>State management with Redux</h1>
      <Balance />
      <hr />
      <LangSwitcher />
      <p>Selected lang: {lang}</p>
    </div>
  );
}
