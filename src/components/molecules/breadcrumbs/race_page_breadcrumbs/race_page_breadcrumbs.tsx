import { Breadcrumbs, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import routerPaths from '@router/router_paths';
import { PrimaryText } from '@atoms/texts/texts';

const RacePageBreadcrumbs: React.FC = () => (
  <Breadcrumbs aria-label="breadcrumb">
    <Link component={RouterLink} underline="hover" color="inherit" to={routerPaths.homeRoute}>
      Home
    </Link>
    <PrimaryText>Race</PrimaryText>
  </Breadcrumbs>
);

export default RacePageBreadcrumbs;
