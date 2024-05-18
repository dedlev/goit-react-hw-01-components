import user from "../user.json"
import css from "./Profile.module.css"

export const Profile = () => {
    const {avatar, username, tag, location, stats:{followers, views, likes}} = user
    return (
        <div className={css.profile}>
            <div className={css.description}>
            <img
                    src={avatar}
                    alt={username}
                    className={css.avatar}
            />
                <p className={css.name}>{username}</p>
                <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
        </div>
            <ul className={css.stats}>              
                <li className={css.item}>
                    <span className={css.label}>Followers</span>
                    <span className={css.quantity}>{followers}</span>
                </li>
                <li className={css.item}>
                    <span className={css.label}>Views</span>
                    <span className={css.quantity}>{views}</span>
                </li>
                <li className={css.item}>
                    <span className={css.label}>Likes</span>
                    <span className={css.quantity}>{likes}</span>
                </li> 
           
            </ul>
        </div>
    )
} 


            // {user.map((user) => (
            //     <li className={css.item}>
            //         <span className={css.label}>{user.stats}</span>
            //         <span className={css.quantity}>{followers}</span>
            //     </li>
            // ))}