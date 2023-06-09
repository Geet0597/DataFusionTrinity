import { DataGrid, GridColDef, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarFilterButton } from '@mui/x-data-grid';

interface DataTableProps {
    columns: GridColDef[];
    rows: any[];
    onPageChange: (model: any) => void;
}
const DataTable: React.FC<DataTableProps> = ({ columns, rows, onPageChange }) => {

    const CustomToolbar = () => (
        <div>
            <GridToolbarContainer>
                <GridToolbarColumnsButton />
                <GridToolbarDensitySelector />
                <GridToolbarFilterButton />
            </GridToolbarContainer>
        </div>
    );

    const handlePageChange = (model: any) => {
        onPageChange(model);
    }

    return (
        <div style={{ height: 500, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                paginationMode='client'
                onPaginationModelChange={(model) => handlePageChange(model)}
                components={{ Toolbar: CustomToolbar }}
            />
        </div>
    );
}

export default DataTable;