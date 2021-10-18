import { useLocation } from 'react-router-dom';
import routerPaths from '@router/router_paths';
import styled from 'styled-components';
import { PrimaryLinkButton } from '@atoms/buttons/buttons';

const NotFoundPage: React.FC = () => {
  const location = useLocation();

  return (
    <ContentWrapper>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <h3>No match for {location.pathname}</h3>
      <PrimaryLinkButton to={routerPaths.homeRoute}>Go back to Home Page</PrimaryLinkButton>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export default NotFoundPage;
