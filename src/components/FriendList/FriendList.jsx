import { FriendListItem } from "./FriendListItem"
import css from "./FriendList.module.css"

export const FriendList = () => {
    return (
    <ul className={css.friend_list}> 
<FriendListItem/>
    </ul>
  )
}
