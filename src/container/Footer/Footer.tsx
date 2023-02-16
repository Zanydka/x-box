import Faacebook from '../../assets/Faacebook.svg'
import Instagram from '../../assets/Instagram.svg'
import Twitter from '../../assets/Twitter.svg'
import './Footer.scss'
type Props = {}
const Footer = (props: Props) => {
    return (
        <div className="contacts">
            <div className="x-box-foot">XBOX</div>
            <div className="developers-foot">Developers</div>
            <div className="folow-us-foot">Folow us</div>
            <div className="sup-foot">Support</div>
            <div className="contac-foot">Contact us</div>
            <div className="p-c-foot">Privacy & cookies</div>
            <div className="t-of-use-foot">Terms of use</div>
            <div className="games-foot">Games</div>
            <div className="windows-foot">Windows 10</div>
            <div className="creat-foot">Creators Program</div>
            <div className="designed-foot">Designed for XBOX</div>
            <div className="line-foot"></div>
            <div className="eng-foot">English (United States)</div>
            <div className="microsoft-foot">© Microsoft 2017</div>
            <div className="face-foot">
                <img src={Faacebook} alt="face" />
            </div>
            <div className="twit-foot">
                <img src={Twitter} alt="twit" />
            </div>
            <div className="inst-foot">
                <img src={Instagram} alt="insta" />
            </div>
        </div>
    )
}
export default Footer
