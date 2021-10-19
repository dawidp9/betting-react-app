import { Control, Controller } from 'react-hook-form';
import { BettingFormFields, IBettingFormFields } from '@forms/betting_form/betting_form';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import styled from 'styled-components';

interface IParticipantsBettingFieldsProps {
  control: Control<IBettingFormFields>;
  participants: number[];
  firstParticipant: number;
  secondParticipant: number;
  thirdParticipant: number;
}

const ParticipantsPositionsFields: React.FC<IParticipantsBettingFieldsProps> = ({
  control,
  participants,
  firstParticipant,
  secondParticipant,
  thirdParticipant,
}) => {
  return (
    <>
      <Controller
        control={control}
        name={BettingFormFields.FIRST_PARTICIPANT}
        render={({ field: { onChange, value } }) => (
          <RadioGroup value={value} onChange={onChange}>
            {participants.map((participantId) => (
              <FormControlLabel
                disabled={secondParticipant === participantId || thirdParticipant === participantId}
                key={participantId}
                value={participantId}
                control={<StyledRadio />}
                label="Winner"
              />
            ))}
          </RadioGroup>
        )}
      />
      <Controller
        control={control}
        name={BettingFormFields.SECOND_PARTICIPANT}
        render={({ field: { onChange, value } }) => (
          <RadioGroup value={value} onChange={onChange}>
            {participants.map((participantId) => (
              <FormControlLabel
                disabled={firstParticipant === participantId || thirdParticipant === participantId}
                key={participantId}
                value={participantId}
                control={<StyledRadio />}
                label="Second"
              />
            ))}
          </RadioGroup>
        )}
      />
      <Controller
        control={control}
        name={BettingFormFields.THIRD_PARTICIPANT}
        render={({ field: { onChange, value } }) => (
          <RadioGroup value={value} onChange={onChange}>
            {participants.map((participantId) => (
              <FormControlLabel
                disabled={firstParticipant === participantId || secondParticipant === participantId}
                key={participantId}
                value={participantId}
                control={<StyledRadio />}
                label="Third"
              />
            ))}
          </RadioGroup>
        )}
      />
    </>
  );
};

const StyledRadio = styled(Radio)`
  height: 40px;
`;

export default ParticipantsPositionsFields;
