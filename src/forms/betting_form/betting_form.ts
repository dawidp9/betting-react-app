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

const { requiredMsg, invalidBetAmountMsg } = {
  requiredMsg: 'This field is required',
  invalidBetAmountMsg: 'Bet amount must be greater than 0',
};

export const bettingFormResolver = yupResolver(
  yup.object().shape({
    [BettingFormFields.BETTING_AMOUNT]: yup
      .string()
      .required(requiredMsg)
      .test('invalidBetAmount', invalidBetAmountMsg, (val) => {
        if (!val) return true;
        return parseFloat(val) > 0;
      }),
    [BettingFormFields.FIRST_PARTICIPANT]: yup.string().required(requiredMsg),
    [BettingFormFields.SECOND_PARTICIPANT]: yup.string().required(requiredMsg),
    [BettingFormFields.THIRD_PARTICIPANT]: yup.string().required(requiredMsg),
  }),
);
