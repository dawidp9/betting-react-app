import styled from 'styled-components';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const PrimaryLinkButton = styled(Button).attrs({
  variant: 'outlined',
  component: Link,
})<{ to: string }>`
  && {
    text-transform: capitalize;
  }
`;

const PrimaryButton = styled(Button).attrs({
  variant: 'contained',
})`
  && {
    text-transform: capitalize;
  }
`;

export { PrimaryLinkButton, PrimaryButton };
