import { useFetchParticipantQuery } from '@features/betting_api/betting_api_slice';
import { CircularProgress } from '@mui/material';
import styled from 'styled-components';

interface IParticipantProps {
  participantId: number;
}

const Participant: React.FC<IParticipantProps> = ({ participantId }) => {
  const { data = { body: '' }, isFetching } = useFetchParticipantQuery(participantId);

  if (isFetching)
    return (
      <ParticipantWrapper>
        <CircularProgress />
      </ParticipantWrapper>
    );

  const { body } = data;
  return (
    <ParticipantWrapper>
      <h4>{body}</h4>
    </ParticipantWrapper>
  );
};

const ParticipantWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 260px;
  height: 40px;
`;

export default Participant;
