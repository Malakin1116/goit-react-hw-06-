// import css from "./ContactList.module.css";
// import Contact from "../ContactList/Contact/Contact";

// export default function ContactList({ contacts, onDelete }) {
//   return (
//     <ul className={css.ul}>
//       {contacts.map((contact) => (
//         <li key={contact.id}>
//           <Contact data={contact} onDelete={onDelete} />
//         </li>
//       ))}
//     </ul>
//   );
// }

import css from "./ContactList.module.css";
import Contact from "../ContactList/Contact/Contact";

import { userData } from "../../../redux/contactsSlice";
import { useSelector } from "react-redux";

export default function ContactList({ onDelete }) {
  const userdata = useSelector(userData);

  return (
    <ul className={css.ul}>
      {userdata.map((user) => (
        <li key={user.id}>
          <Contact data={user} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
