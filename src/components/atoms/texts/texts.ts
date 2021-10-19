import styled from 'styled-components';
import { Typography } from '@mui/material';

const PrimaryText = styled(Typography).attrs(({ theme }) => ({
  color: theme.colors.black,
}))``;

export { PrimaryText };
