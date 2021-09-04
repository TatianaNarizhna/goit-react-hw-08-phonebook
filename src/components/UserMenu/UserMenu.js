import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import defaultAvatar from './default-avatar.png'


 function UserMenu() {
     const dispatch = useDispatch();
     const name = useSelector(authSelectors.getUserName);
     const avatar = defaultAvatar;

    return (
        <div>
            <img src={avatar} alt="" width="35" />
            <span>Welcome, {name}!</span>
            <button type="button" onClick={() => dispatch(authOperations.logOut())}>
                LogOut
            </button>
        </div>
    )
}

export default UserMenu;