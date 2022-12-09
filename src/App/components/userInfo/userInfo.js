import { useNavigate } from 'react-router-dom';

//Assets
import styles from './userInfo.module.scss'
import avatar from "../../../imgs/icons/avatar.svg"
import { useCookies } from 'react-cookie';


const UserInfo = ({section, handleLogout, setOpen}) => {
  const navigate = useNavigate();
  const [cookie] = useCookies();

  const handleMyBookingsNavigation = () => {
    navigate(`/user/${cookie.user.id}/bookings`)
    setOpen(false)
  }

  if (cookie.user !== undefined) {
    return (
      <div className={section === "drawer" ? styles.userLoggedDrawer : styles.userLoggedHeader}>
          <div className={styles.avatar}>
          <img src={avatar} alt = "Avatar usuario"></img>
          </div>
          <div className={styles.userInfo}>
            <div className={styles.greetingsSpan}>
              <span style={{color: '#00000080', alignSelf: 'end'}}>Hola, </span>
              <button onClick={handleLogout} className={section === "drawer" ? styles.logoutBtnDrawer : styles.logoutBtn}>X</button>
            </div>
            <span className={styles.userName} onClick={handleMyBookingsNavigation}>{cookie.user.nombre} {cookie.user.apellido}</span>
          </div>
      </div>
    )
  }
}

export default UserInfo