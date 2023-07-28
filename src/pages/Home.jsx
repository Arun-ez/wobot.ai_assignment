import '../styles/home.css';
import { Form } from '../components/Form';

const Home = () => {
    return (
        <div className='login_container' >
            <img className='logo' src="https://wobot.ai/wobot_logo_blue.svg" alt="wobot.ai logo" />

            <div className='strip_box_container' >
                <div className='strip_box_left' >

                </div>

                <div className='strip_box_right' >

                </div>
            </div>

            <Form />
        </div>
    )
}

export { Home }
