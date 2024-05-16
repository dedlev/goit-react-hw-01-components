import friends from "../friends.json"
import css from "./FriendList.module.css"
import clsx from 'clsx';

export const FriendListItem = () => {
  return (
      friends.map(({id, isOnline, avatar, name}) => (
        <li className={css.item} key={id}>
          <span className={clsx(css.status, isOnline && css.green, !isOnline && css.red)}></span>
          <img className={css.avatar} src={avatar} alt={name} width="48" />
          <p className={css.name}>{name}</p>
        </li>
      )))}

