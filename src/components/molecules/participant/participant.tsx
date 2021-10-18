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
      <Row>
        <CircularProgress />
      </Row>
    );

  const { body } = data;
  return (
    <Row>
      <h4>{body}</h4>
    </Row>
  );
};

const Row = styled.div<{ withName?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 300px;
  height: 65px;
`;

export default Participant;
