import { useParams } from 'react-router-dom';
import { IRaceRouteParams } from '@router/router_paths';
import { useFetchRaceQuery } from '@features/betting_api/betting_api_slice';
import { CircularProgress } from '@mui/material';
import { RequestStatuses } from '@utils/request_statuses/request_statuses';
import Participant from '@molecules/participant/participant';
import styled from 'styled-components';
import { useState } from 'react';

export const enum RacePositions {
  FIRST = 'first',
  SECOND = 'second',
  THIRD = 'third',
}

interface ISelectedPositions {
  first: undefined | number;
  second: undefined | number;
  third: undefined | number;
}

const RacePage: React.FC = () => {
  const { raceId } = useParams<IRaceRouteParams>();
  const {
    data = { name: '', active: false, participants: [] },
    isFetching,
    isError,
    error,
  } = useFetchRaceQuery(raceId);

  const [selectedPositions, setSelectedPositions] = useState<ISelectedPositions>({
    first: undefined,
    second: undefined,
    third: undefined,
  });

  if (isFetching) return <CircularProgress />;
  if (isError) {
    if (error && 'status' in error && error.status === RequestStatuses.NOT_FOUND)
      return <h1>Sorry, we couldn't find this race</h1>;
    return <h1>Sorry, we couldn't fetch info about this race</h1>;
  }

  const clearFirstPosition = () => setSelectedPositions({ ...selectedPositions, first: undefined });
  const clearSecondPosition = () => setSelectedPositions({ ...selectedPositions, second: undefined });
  const clearThirdPosition = () => setSelectedPositions({ ...selectedPositions, third: undefined });

  const handlePositionChange = (participantId: number, position: string) => {
    switch (position) {
      case RacePositions.FIRST: {
        setSelectedPositions({ ...selectedPositions, first: participantId });
        if (selectedPositions.second === participantId) clearSecondPosition();
        if (selectedPositions.third === participantId) clearThirdPosition();
        break;
      }
      case RacePositions.SECOND: {
        setSelectedPositions({ ...selectedPositions, second: participantId });
        if (selectedPositions.first === participantId) clearFirstPosition();
        if (selectedPositions.third === participantId) clearThirdPosition();
        break;
      }
      case RacePositions.THIRD: {
        setSelectedPositions({ ...selectedPositions, third: participantId });
        if (selectedPositions.first === participantId) clearFirstPosition();
        if (selectedPositions.second === participantId) clearSecondPosition();
        break;
      }
      default:
        break;
    }
  };

  const isFirstPositionSelected = !!selectedPositions.first;
  const isSecondPositionSelected = !!selectedPositions.second;
  const isThirdPositionSelected = !!selectedPositions.third;

  const { name, active, participants } = data;

  return (
    <ContentWrapper>
      <h1>{name}</h1>
      <h3>{active ? 'Active' : 'Inactive'}</h3>
      <div>
        <h3>Race participants:</h3>
        {participants.map((participantId) => (
          <Participant
            key={participantId}
            participantId={participantId}
            firstPositionEnabled={participantId !== selectedPositions.first && isFirstPositionSelected}
            secondPositionEnabled={participantId !== selectedPositions.second && isSecondPositionSelected}
            thirdPositionEnabled={participantId !== selectedPositions.third && isThirdPositionSelected}
            setPosition={handlePositionChange}
          />
        ))}
      </div>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  margin: 24px 5%;
`;

export default RacePage;
