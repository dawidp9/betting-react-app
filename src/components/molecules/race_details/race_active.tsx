import RacePageBreadcrumbs from '@molecules/breadcrumbs/race_page_breadcrumbs/race_page_breadcrumbs';
import Participant from '@molecules/participant/participant';
import ParticipantsPositionsFields from '@molecules/participants_betting_fields/participants_positions_fields';
import BetAmountFiled from '@molecules/participants_betting_fields/bet_ammount_field';
import { PrimaryButton } from '@atoms/buttons/buttons';
import styled from 'styled-components';
import { BettingFormFields, bettingFormResolver, IBettingFormFields } from '@forms/betting_form/betting_form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ContentWrapper } from '@molecules/race_details/shared';
import { useAppDispatch } from '@hooks/redux_hooks/redux_hooks';
import { createRaceBet } from '@features/betting_races/betting_races_slice';

interface IRaceActiveProps {
  raceId: string;
  raceName: string;
  participants: number[];
}

const RaceActive: React.FC<IRaceActiveProps> = ({ raceId, raceName, participants }) => {
  const dispatch = useAppDispatch();

  const initialFormState = {
    [BettingFormFields.BETTING_AMOUNT]: '',
    [BettingFormFields.FIRST_PARTICIPANT]: '',
    [BettingFormFields.SECOND_PARTICIPANT]: '',
    [BettingFormFields.THIRD_PARTICIPANT]: '',
  };

  const {
    formState: { isDirty, isValid, errors },
    control,
    watch,
    handleSubmit,
  } = useForm<IBettingFormFields>({
    mode: 'onChange',
    defaultValues: initialFormState,
    resolver: bettingFormResolver,
  });

  const firstParticipant = +watch(BettingFormFields.FIRST_PARTICIPANT);
  const secondParticipant = +watch(BettingFormFields.SECOND_PARTICIPANT);
  const thirdParticipant = +watch(BettingFormFields.THIRD_PARTICIPANT);

  const onBetSubmit: SubmitHandler<IBettingFormFields> = (formData) =>
    dispatch(
      createRaceBet({
        raceId: +raceId,
        firstParticipantId: +formData.firstParticipant,
        secondParticipantId: +formData.secondParticipant,
        thirdParticipantId: +formData.thirdParticipant,
        betAmount: +formData.bettingAmount,
      }),
    );

  return (
    <ContentWrapper>
      <RacePageBreadcrumbs />
      <h1>{raceName}</h1>
      <h3>{'🟢 Active'}</h3>
      <div>
        <h3>Race participants:</h3>
        <ParticipantsPositionsWrapper>
          <div>
            {participants.map((participantId) => (
              <Participant key={participantId} participantId={participantId} />
            ))}
          </div>
          <ParticipantsPositionsFields
            control={control}
            participants={participants}
            firstParticipant={firstParticipant}
            secondParticipant={secondParticipant}
            thirdParticipant={thirdParticipant}
          />
        </ParticipantsPositionsWrapper>
        <BettingAmountWrapper>
          <BetAmountFiled control={control} errors={errors} />
          <SubmitButtonWrapper>
            <PrimaryButton disabled={!(isDirty && isValid)} onClick={handleSubmit(onBetSubmit)}>
              Place a bet
            </PrimaryButton>
          </SubmitButtonWrapper>
        </BettingAmountWrapper>
      </div>
    </ContentWrapper>
  );
};

const ParticipantsPositionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
`;

const SubmitButtonWrapper = styled.div`
  margin-top: 16px;
  margin-bottom: 38px;
`;

const BettingAmountWrapper = styled.div`
  margin: 18px 0;
`;

export default RaceActive;
