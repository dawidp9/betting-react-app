import { useFetchParticipantQuery } from '@features/betting_api/betting_api_slice';
import { CircularProgress, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { RacePositions } from '@pages/race_page/race_page';

interface IParticipantProps {
  participantId: number;
  firstPositionEnabled: boolean;
  secondPositionEnabled: boolean;
  thirdPositionEnabled: boolean;
  setPosition: (participantId: number, position: string) => void;
}

const Participant: React.FC<IParticipantProps> = ({
  participantId,
  firstPositionEnabled,
  secondPositionEnabled,
  thirdPositionEnabled,
  setPosition,
}) => {
  const { data = { body: '' }, isFetching } = useFetchParticipantQuery(participantId);

  if (isFetching)
    return (
      <div>
        <CircularProgress />
      </div>
    );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setPosition(participantId, value);
  };

  const { body } = data;
  return (
    <div>
      <h4>{body}</h4>
      <FormControl component="fieldset">
        <FormLabel component="legend">Position</FormLabel>
        <RadioGroup row onChange={handleChange}>
          <FormControlLabel
            disabled={firstPositionEnabled}
            value={RacePositions.FIRST}
            control={<Radio />}
            label="First"
          />
          <FormControlLabel
            disabled={secondPositionEnabled}
            value={RacePositions.SECOND}
            control={<Radio />}
            label="Second"
          />
          <FormControlLabel
            disabled={thirdPositionEnabled}
            value={RacePositions.THIRD}
            control={<Radio />}
            label="Third"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Participant;
