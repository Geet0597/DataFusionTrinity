import { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from '../CommonComponents/DataTable';
import { GridValueGetterParams } from '@mui/x-data-grid';
import LineGraph from '../CommonComponents/LineGraph';
import Loader from '../CommonComponents/Loader';

const Dashboard = () => {
    const [rawData, setRawData] = useState<{ [key: string]: string }[]>([]);
    const [currentPageData, setCurrentPageData] = useState<{ [key: string]: string }[]>([]);

    useEffect(() => {
        getRawData();
    }, []);

    const getRawData = async () => {
        const res = await axios.get('https://engineering-task.elancoapps.com/api/raw');
        if (res.status === 200) {
            setRawData(res.data);
            setCurrentPageData(res.data.slice(0, 10)); // Set initial page data (assuming 10 rows per page)
        }
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 20 },
        { field: 'InstanceId', headerName: 'Instance Id', width: 100 },
        { field: 'ServiceName', headerName: 'Service Name', width: 100 },
        { field: 'MeterCategory', headerName: 'Meter Category', width: 100 },
        { field: 'ResourceGroup', headerName: 'Resource Group', width: 100 },
        { field: 'ResourceLocation', headerName: 'Resource Location', width: 100 },
        { field: 'UnitOfMeasure', headerName: 'Unit Of Measure', width: 100 },
        { field: 'ConsumedQuantity', headerName: 'Consumed Quantity', width: 100 },
        {
            field: 'Cost', headerName: 'Cost', width: 100, valueGetter: (params: GridValueGetterParams) =>
                `$ ${params.row.Cost}`
        },
        { field: 'Date', headerName: 'Date', width: 100 },
        { field: 'Location', headerName: 'Location', width: 100 },
    ];

    const handlePageChange = (model: any) => {
        const { page, pageSize } = model;
        const startIndex = page * pageSize;
        const endIndex = startIndex + pageSize;
        setCurrentPageData(rawData.slice(startIndex, endIndex));
    };

    const generateRowId = (() => {
        let id = 0;
        return () => {
            id += 1;
            return id;
        };
    })();

    const rowsWithIds = rawData.map((row) => {
        const id = generateRowId();
        return { id, ...row };
    });

    return (
        <div className='container'>
            <div className='heading'>Raw Data</div>
            {rawData.length === 0 ? <Loader /> :
                <>
                    <DataTable columns={columns} rows={rowsWithIds} onPageChange={handlePageChange} />
                    <div className='heading'>Data Visualization</div>
                    <LineGraph data={currentPageData} />
                </>
            }
        </div>
    );
}

export default Dashboard;
