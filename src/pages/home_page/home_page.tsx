import styled from 'styled-components';
import { useFetchAllRacesQuery } from '@features/betting_api/betting_api_slice';
import RacesList from '@molecules/races_list/races_list';
import { CircularProgress } from '@mui/material';

const HomePage: React.FC = () => {
  const { data = [], isFetching } = useFetchAllRacesQuery();

  return (
    <ContentWrapper>
      <h1>🏇 Races:</h1>
      {isFetching ? <CircularProgress /> : <RacesList races={data} />}
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  margin: 24px 5%;
`;

export default HomePage;
