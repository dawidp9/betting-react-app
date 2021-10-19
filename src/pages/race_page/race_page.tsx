import { useParams } from 'react-router-dom';
import { IRaceRouteParams } from '@router/router_paths';
import { useFetchRaceQuery } from '@features/betting_api/betting_api_slice';
import RaceInactive from '@molecules/race_details/race_inactive';
import RaceActive from '@molecules/race_details/race_active';
import RaceFetching from '@molecules/race_details/race_fetching';
import RaceError from '@molecules/race_details/race_error';
import { useAppSelector } from '@hooks/redux_hooks/redux_hooks';
import { selectBetByRaceId } from '@features/betting_races/betting_races_slice';
import RaceWithBet from '@molecules/race_details/race_with_bet';

const RacePage: React.FC = () => {
  const { raceId } = useParams<IRaceRouteParams>();
  const {
    data = { name: '', active: false, participants: [] },
    isFetching,
    isError,
    error,
  } = useFetchRaceQuery(raceId);

  const raceBet = useAppSelector(selectBetByRaceId(raceId));

  if (isFetching) return <RaceFetching />;
  if (isError) return <RaceError error={error} />;

  const { name, active, participants } = data;

  if (raceBet) return <RaceWithBet bet={raceBet} raceName={name} participants={participants} />;
  if (!active) return <RaceInactive raceName={name} participants={participants} />;
  return <RaceActive raceId={raceId} raceName={name} participants={participants} />;
};

export default RacePage;
