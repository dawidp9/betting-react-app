import styled from 'styled-components';
import { Paper } from '@mui/material';
import { PrimaryLinkButton } from '@atoms/buttons/buttons';
import routerPaths from '@router/router_paths';

interface IRaceBoxProps {
  raceId: number;
  name: string;
  active: boolean;
}

const RaceBox: React.FC<IRaceBoxProps> = ({ raceId, name, active }) => {
  const labelText = active ? '🟢 Active' : '🔴 Inactive';
  const buttonText = active ? 'place bets' : 'see details';

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
