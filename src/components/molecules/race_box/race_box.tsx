import styled from 'styled-components';
import { Paper } from '@mui/material';
import { PrimaryLinkButton } from '@atoms/buttons/buttons';
import routerPaths from '@router/router_paths';
import { useAppSelector } from '@hooks/redux_hooks/redux_hooks';
import { selectBetByRaceId } from '@features/betting_races/betting_races_slice';

interface IRaceBoxProps {
  raceId: number;
  name: string;
  active: boolean;
}

const RaceBox: React.FC<IRaceBoxProps> = ({ raceId, name, active }) => {
  const raceBet = useAppSelector(selectBetByRaceId(`${raceId}`));

  const labelText = raceBet ? '🟠 Active & Bet Placed' : active ? '🟢 Active' : '🔴 Inactive';
  const buttonText = raceBet ? 'menage bet' : active ? 'place bet' : 'see details';

  return (
    <RaceWrapper variant="outlined">
      <h3>{name}</h3>
      <div>
        <p>{labelText}</p>
        <PrimaryLinkButton to={routerPaths.raceRoute({ raceId: `${raceId}` })}>{buttonText}</PrimaryLinkButton>
      </div>
    </RaceWrapper>
  );
};

const RaceWrapper = styled(Paper)`
  margin: 24px 0;
  padding: 8px 24px 24px 24px;
  min-width: 300px;
`;

export default RaceBox;
