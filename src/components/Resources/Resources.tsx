import { useState, useEffect } from 'react';
import axios from 'axios';
import ClickableChips from '../CommonComponents/Chip';
import Loader from '../CommonComponents/Loader';

const Resources = () => {
    const [resourcesData, setResourceData] = useState([]);

    useEffect(() => {
        getResourceData();
    }, []);

    const getResourceData = async () => {
        const res = await axios.get('https://engineering-task.elancoapps.com/api/resources');
        if (res.status === 200)
            setResourceData(res.data);
    }

    return (
        <div className='container'>
            <div className='heading'>Resource Data</div>
            {resourcesData.length === 0 ? <Loader /> :
                <ClickableChips data={resourcesData} dataType='resources' />
            }
        </div>
    );
}

export default Resources;
