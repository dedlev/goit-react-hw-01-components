import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import clsx from 'clsx';

export const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <li className={css.item} key={id}>
      <span
        className={clsx(
          css.status,
          isOnline && css.green,
          !isOnline && css.red
        )}
      ></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
