import RacePageBreadcrumbs from '@molecules/breadcrumbs/race_page_breadcrumbs/race_page_breadcrumbs';
import { ContentWrapper } from '@molecules/race_details/shared';
import { RequestStatuses } from '@utils/request_statuses/request_statuses';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

interface IRaceErrorProps {
  error?: FetchBaseQueryError | SerializedError;
}

const RaceError: React.FC<IRaceErrorProps> = ({ error }) => {
  const errorMsg =
    error && 'status' in error && error.status === RequestStatuses.NOT_FOUND
      ? "Sorry, we couldn't find this race"
      : "Sorry, we couldn't fetch info about this race";

  return (
    <ContentWrapper>
      <RacePageBreadcrumbs />
      <h1>{errorMsg}</h1>
    </ContentWrapper>
  );
};

export default RaceError;
