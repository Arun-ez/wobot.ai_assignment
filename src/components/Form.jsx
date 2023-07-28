import '../styles/form.css';
import { useState } from 'react';
import { WobotIcon } from './WobotIcon';
import { Spinner } from './Spinner';
import { toast } from 'react-hot-toast';

const Form = () => {

    const [loading, set_loading] = useState(false);
    const [selected_location, set_selected_locations] = useState(0);

    const industries = [
        { label: 'Artificial intelligence', value: 'ai' },
        { label: 'Technology', value: 'tech' },
        { label: 'Ecommerce', value: 'ecommerce' },
        { label: 'Education', value: 'education' },
        { label: 'Trade', value: 'trade' },
    ]

    const locations = [
        '1-20',
        '21-50',
        '51-100',
        '201-500',
        '500+'
    ]

    const post_informations = async (data) => {
        set_loading(true);

        setTimeout(() => { /* Hit some API endpoint to store the data */
            console.log(data);
            set_loading(false);
            toast.success('Check console for the result');
        }, 1000)
    }

    const handle_submit = (event) => {
        event.preventDefault();

        if (loading) { return }

        const { name, company, industry } = event.target;

        const data = {
            name: name.value,
            company: company.value,
            industry: industry.value,
            locations: locations[selected_location]
        }

        post_informations(data);
    }

    return (
        <div className='form_container'>
            <div className='form_card'>
                <WobotIcon />
                <span> It's a delight to have </span>
                <span> you onboard </span>

                <b> Help us know you better </b>
                <p> (This is how we optimize Wobot as per your business needs) </p>

                <form className='inputs' onSubmit={handle_submit}>
                    <label> Your Name </label>
                    <input required name='name' type='text' placeholder='e.g John Smith' />

                    <label> Company Name </label>
                    <input required name='company' type='text' placeholder='e.g Alpha Inc' />

                    <label> Industry </label>
                    <select required name='industry'>
                        <option value=""> Select Industry </option>
                        {industries.map(({ label, value }, idx) => {
                            return (
                                <option value={value} key={idx} > {label} </option>
                            )
                        })}
                    </select>

                    <label> Number of locations </label>
                    <div className='locations'>
                        {locations.map((item, idx) => {
                            return (
                                <div
                                    className={selected_location === idx ? 'active' : 'inactive'}
                                    key={idx}
                                    onClick={() => { set_selected_locations(idx) }}
                                >
                                    <span> {item} </span>
                                </div>
                            )
                        })}
                    </div>

                    <button>{loading ? (<Spinner />) : ('Get Started')}</button>

                </form>
            </div>

            <p className='quick_links' >
                <a href="https://wobot.ai/terms-of-use" target="_blank" rel="noopener noreferrer"> Terms of use </a>
                <span> &nbsp;|&nbsp; </span>
                <a href="https://wobot.ai/privacy" target="_blank" rel="noopener noreferrer"> Privacy policy  </a>
            </p>
        </div>
    )
}

export { Form }
