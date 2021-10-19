import RacePageBreadcrumbs from '@molecules/breadcrumbs/race_page_breadcrumbs/race_page_breadcrumbs';
import { ContentWrapper } from '@molecules/race_details/shared';
import styled from 'styled-components';
import { CircularProgress } from '@mui/material';

const RaceFetching: React.FC = () => (
  <ContentWrapper>
    <RacePageBreadcrumbs />
    <FetchingCircularProgress />
  </ContentWrapper>
);

const FetchingCircularProgress = styled(CircularProgress)`
  margin: 24px 0;
`;

export default RaceFetching;
