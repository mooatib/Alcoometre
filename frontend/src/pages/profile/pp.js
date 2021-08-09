import './pp.css'
import UserInfo from '../../components/profile/userinfo'
import UserDrinks from '../../components/profile/userdrinks'

export default function Profil() {
    return (
        <div className="profile-page">
            <UserInfo/>
            <UserDrinks/>
        </div>
    )
}