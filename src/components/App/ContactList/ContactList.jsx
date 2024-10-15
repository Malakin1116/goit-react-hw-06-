import css from "./ContactList.module.css";
import Contact from "./Contact/Contact";
import { useSelector } from "react-redux";

export default function ContactList({ onDelete }) {
  const contacts = useSelector((state) => state.contacts.items);
  const filters = useSelector((state) => state.filters.name);

  const allUsersWithFiltred =
    contacts &&
    contacts.filter((value) =>
      value.name
        ?.toLocaleLowerCase()
        .includes(filters?.toLocaleLowerCase() || "")
    );

  return (
    <ul className={css.ul}>
      {allUsersWithFiltred.map((user) => (
        <li key={user.id}>
          <Contact
            id={user.id}
            name={user.name}
            number={user.number}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  );
}
