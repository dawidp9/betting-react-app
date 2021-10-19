import Participant from '@molecules/participant/participant';
import { SecondaryButton } from '@atoms/buttons/buttons';
import { IBet } from '@features/betting_races/betting_races_types';
import styled from 'styled-components';
import { Paper } from '@mui/material';
import { PrimaryText } from '@atoms/texts/texts';
import { useAppDispatch } from '@hooks/redux_hooks/redux_hooks';
import { removeRaceBetById } from '@features/betting_races/betting_races_slice';

interface IBetBoxProps {
  bet: IBet;
}

const BetBox: React.FC<IBetBoxProps> = ({ bet }) => {
  const { raceId, firstParticipantId, secondParticipantId, thirdParticipantId, betAmount } = bet;
  const dispatch = useAppDispatch();

  const handleCancelBet = () => dispatch(removeRaceBetById(`${raceId}`));

  return (
    <BetWrapper variant="outlined">
      <BetRow>
        <BetText>Winner:</BetText>
        <Participant participantId={firstParticipantId} />
      </BetRow>
      <BetRow>
        <BetText>Second:</BetText>
        <Participant participantId={secondParticipantId} />
      </BetRow>
      <BetRow>
        <BetText>Third:</BetText>
        <Participant participantId={thirdParticipantId} />
      </BetRow>
      <BetRow>
        <BetText>Bet amount:</BetText>
        <h3>{betAmount}$</h3>
      </BetRow>
      <SecondaryButton onClick={handleCancelBet}>Cancel Bet</SecondaryButton>
    </BetWrapper>
  );
};

const BetWrapper = styled(Paper)`
  margin: 24px 0;
  padding: 8px 24px 24px 24px;
  min-width: 300px;
`;

const BetText = styled(PrimaryText)`
  padding-right: 8px;
`;

const BetRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default BetBox;
