import './index.scss';
import LogoTitle from "../../assets/images/logo-s.png";
import { Link } from "react-router-dom"

const Home = () => {

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Hi, <br /> I'm
                <img src={LogoTitle} alt="Developer" />
                ameron Charlesworth
                <br />
                Web Developer
                </h1>
                <h2>
                    Frontend Developer / Backend Developer
                    <Link to="/contact" className="flat-button">Contact Me</Link>
                </h2>
            </div>

        </div>
    );
}

export default Home