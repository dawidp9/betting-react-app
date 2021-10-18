import { IRace } from '@features/betting_api/betting_api_types';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import { FormControl, InputLabel, MenuItem } from '@mui/material';
import RaceBox from '@molecules/race_box/race_box';

interface IAllRacesProps {
  races: IRace[];
}

enum FilterOption {
  ALL = 'all',
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

const RacesList: React.FC<IAllRacesProps> = ({ races }) => {
  const [filter, setFilter] = useState<string>(FilterOption.ALL);

  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value);
  };

  const filteredRaces = races.filter(({ active }) => {
    if (filter === FilterOption.ACTIVE) return active;
    else if (filter === FilterOption.INACTIVE) return !active;
    else if (filter === FilterOption.ALL) return true;
  });

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel>Race Status</InputLabel>
        <Select value={filter} label="Race Status" onChange={handleChange}>
          <MenuItem value={FilterOption.ALL}>All Statuses</MenuItem>
          <MenuItem value={FilterOption.ACTIVE}>Active</MenuItem>
          <MenuItem value={FilterOption.INACTIVE}>Inactive</MenuItem>
        </Select>
      </FormControl>
      {filteredRaces.map(({ id, name, active }) => (
        <RaceBox key={id} raceId={id} name={name} active={active} />
      ))}
    </div>
  );
};

export default RacesList;
