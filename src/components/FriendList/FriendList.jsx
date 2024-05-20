import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ children }) => {
  return <ul className={css.friend_list}>{children}</ul>;
};

FriendList.propTypes = {
  children: PropTypes.node,
};
