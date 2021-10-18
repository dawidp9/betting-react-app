import { useParams } from 'react-router-dom';
import { IRaceRouteParams } from '@router/router_paths';
import { useFetchRaceQuery } from '@features/betting_api/betting_api_slice';
import { CircularProgress, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { RequestStatuses } from '@utils/request_statuses/request_statuses';
import Participant from '@molecules/participant/participant';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const RacePage: React.FC = () => {
  const { raceId } = useParams<IRaceRouteParams>();
  const {
    data = { name: '', active: false, participants: [] },
    isFetching,
    isError,
    error,
  } = useFetchRaceQuery(raceId);

  const { setValue, watch } = useForm({
    defaultValues: { bettingAmount: '', first: '', second: '', third: '' },
  });

  if (isFetching) return <CircularProgress />;
  if (isError) {
    if (error && 'status' in error && error.status === RequestStatuses.NOT_FOUND)
      return <h1>Sorry, we couldn't find this race</h1>;
    return <h1>Sorry, we couldn't fetch info about this race</h1>;
  }

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue('bettingAmount', event.target.value);
  };

  const { name, active, participants } = data;

  const firstParticipant = +watch('first');
  const secondParticipant = +watch('second');
  const thirdParticipant = +watch('third');

  return (
    <ContentWrapper>
      <h1>{name}</h1>
      <h3>{active ? 'Active' : 'Inactive'}</h3>
      <div>
        <TextField type="number" label="Betting amount" variant="outlined" onChange={handleAmountChange} />
        <h3>Race participants:</h3>
        <Row>
          <div>
            {participants.map((participantId) => (
              <Participant key={participantId} participantId={participantId} />
            ))}
          </div>
          <RadioGroup
            onChange={(event) => {
              setValue('first', (event.target as HTMLInputElement).value);
            }}
          >
            {participants.map((participantId) => (
              <FormControlLabel
                disabled={secondParticipant === participantId || thirdParticipant === participantId}
                key={participantId}
                value={participantId}
                control={<StyledRadio />}
                label="Winner"
              />
            ))}
          </RadioGroup>
          <RadioGroup
            onChange={(event) => {
              setValue('second', (event.target as HTMLInputElement).value);
            }}
          >
            {participants.map((participantId) => (
              <FormControlLabel
                disabled={firstParticipant === participantId || thirdParticipant === participantId}
                key={participantId}
                value={participantId}
                control={<StyledRadio />}
                label="Second"
              />
            ))}
          </RadioGroup>
          <RadioGroup
            onChange={(event) => {
              setValue('third', (event.target as HTMLInputElement).value);
            }}
          >
            {participants.map((participantId) => (
              <FormControlLabel
                disabled={firstParticipant === participantId || secondParticipant === participantId}
                key={participantId}
                value={participantId}
                control={<StyledRadio />}
                label="Third"
              />
            ))}
          </RadioGroup>
        </Row>
      </div>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  margin: 24px 5%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
`;

const StyledRadio = styled(Radio)`
  height: 65px;
`;

export default RacePage;
