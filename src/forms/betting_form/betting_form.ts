import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export enum BettingFormFields {
  BETTING_AMOUNT = 'bettingAmount',
  FIRST_PARTICIPANT = 'firstParticipant',
  SECOND_PARTICIPANT = 'secondParticipant',
  THIRD_PARTICIPANT = 'thirdParticipant',
}

export interface IBettingFormFields {
  [BettingFormFields.BETTING_AMOUNT]: string;
  [BettingFormFields.FIRST_PARTICIPANT]: string;
  [BettingFormFields.SECOND_PARTICIPANT]: string;
  [BettingFormFields.THIRD_PARTICIPANT]: string;
}

export const bettingFormResolver = yupResolver(
  yup.object().shape({
    [BettingFormFields.BETTING_AMOUNT]: yup.string().required(),
    [BettingFormFields.FIRST_PARTICIPANT]: yup.string().required(),
    [BettingFormFields.SECOND_PARTICIPANT]: yup.string().required(),
    [BettingFormFields.THIRD_PARTICIPANT]: yup.string().required(),
  }),
);
