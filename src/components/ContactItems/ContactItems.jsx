import PropTypes from 'prop-types';
import s from './ContactItems.module.css';

function ContactItems({ contacts, onDeleteContact }) {
  return contacts.map(({ name, number, id }) => (
    <li key={id} className={s.item}>
      {name} : <span className={s.number}>{number}</span>
      <button
        type="button"
        className={s.button}
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        Delete
      </button>
    </li>
  ));
}

ContactItems.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItems;
