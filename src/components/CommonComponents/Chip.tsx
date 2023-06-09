import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

interface ChipProps {
    data: any[];
    dataType: string;
}

const ClickableChips: React.FC<ChipProps> = ({ data, dataType }) => {
    const navigate = useNavigate();
    const handleClick = (name: string) => {
        if (dataType === 'resources')
            navigate(`/resources/${name}`)
        // navigate(`https://engineering-task.elancoapps.com/api/resources/${name}`);
        else
            navigate(`/applications/${name}`)
    };

    return (
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
            {data.map((name, idx) =>
                <Chip key={idx} label={name} variant="outlined" onClick={() => handleClick(name)} />
            )}
        </Stack>
    );
}
export default ClickableChips;