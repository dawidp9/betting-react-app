import RacePageBreadcrumbs from '@molecules/breadcrumbs/race_page_breadcrumbs/race_page_breadcrumbs';
import Participant from '@molecules/participant/participant';
import { ContentWrapper } from '@molecules/race_details/shared';
import { IBet } from '@features/betting_races/betting_races_types';
import BetBox from '@molecules/bet_box/bet_box';

interface IRaceWithBetProps {
  raceName: string;
  participants: number[];
  bet: IBet;
}

const RaceWithBet: React.FC<IRaceWithBetProps> = ({ raceName, participants, bet }) => {
  return (
    <ContentWrapper>
      <RacePageBreadcrumbs />
      <h1>{raceName}</h1>
      <h3>{'🟠 Active & Bet Placed'}</h3>
      <BetBox bet={bet} />
      <div>
        <h3>Race participants:</h3>
        <div>
          {participants.map((participantId) => (
            <Participant key={participantId} participantId={participantId} />
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};

export default RaceWithBet;
