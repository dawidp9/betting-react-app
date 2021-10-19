import { Control, Controller } from 'react-hook-form';
import { BettingFormFields, IBettingFormFields } from '@forms/betting_form/betting_form';
import { TextField } from '@mui/material';
import { FieldErrors } from 'react-hook-form/dist/types/errors';

interface IBetAmountFiledProps {
  control: Control<IBettingFormFields>;
  errors: FieldErrors<IBettingFormFields>;
}

const BetAmountFiled: React.FC<IBetAmountFiledProps> = ({ control, errors }) => {
  return (
    <Controller
      control={control}
      name={BettingFormFields.BETTING_AMOUNT}
      render={({ field: { onChange, value } }) => (
        <TextField
          value={value}
          onChange={onChange}
          error={errors && !!errors[BettingFormFields.BETTING_AMOUNT]}
          type="number"
          label="Betting amount $"
          variant="outlined"
        />
      )}
    />
  );
};

export default BetAmountFiled;
