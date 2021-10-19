import { EntityState } from '@reduxjs/toolkit';

export interface IBet {
  raceId: number;
  firstParticipantId: number;
  secondParticipantId: number;
  thirdParticipantId: number;
  betAmount: number;
}

export interface IBettingRacesState {
  bets: EntityState<IBet>;
}
