import { useState, useEffect } from 'react';
import axios from 'axios';
import ClickableChips from '../CommonComponents/Chip';
import Loader from '../CommonComponents/Loader';

const Applications = () => {
    const [applicationData, setApplicationData] = useState([]);

    useEffect(() => {
        getApplicationData();
    }, []);

    const getApplicationData = async () => {
        const res = await axios.get('https://engineering-task.elancoapps.com/api/applications');
        if (res.status === 200)
            setApplicationData(res.data);
    }
    return (
        <div className='container'>
            <div className='heading'>Applications Data</div>
            {applicationData.length === 0 ? <Loader /> :
                <ClickableChips data={applicationData} dataType='applications' />
            }
        </div>
    );
}

export default Applications;
