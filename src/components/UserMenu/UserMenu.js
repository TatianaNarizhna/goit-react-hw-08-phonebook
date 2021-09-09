import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import defaultAvatar from './default-avatar.png';
import s from "./UserMenu.module.css"


 function UserMenu() {
     const dispatch = useDispatch();
     const name = useSelector(authSelectors.getUserName);
     const avatar = defaultAvatar;

    return (
        <div className={s.container}>
            <img src={avatar} alt="" width="45" className={s.avatar}/>
            <span className={s.name}>Welcome, {name}!</span>
            <Button type="button" variant="contained" color="primary" onClick={() => dispatch(authOperations.logOut())}>
                LogOut
            </Button>
        </div>
    )
}

export default UserMenu;