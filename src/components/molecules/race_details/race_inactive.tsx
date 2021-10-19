import RacePageBreadcrumbs from '@molecules/breadcrumbs/race_page_breadcrumbs/race_page_breadcrumbs';
import Participant from '@molecules/participant/participant';
import { ContentWrapper } from '@molecules/race_details/shared';

interface IRaceInactiveProps {
  raceName: string;
  participants: number[];
}

const RaceInactive: React.FC<IRaceInactiveProps> = ({ raceName, participants }) => {
  return (
    <ContentWrapper>
      <RacePageBreadcrumbs />
      <h1>{raceName}</h1>
      <h3>{'🔴 Inactive'}</h3>
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

export default RaceInactive;
