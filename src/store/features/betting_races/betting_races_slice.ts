import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBet, IBettingRacesState } from '@features/betting_races/betting_races_types';
import { RootState } from '@store/store';

const betsAdapter = createEntityAdapter<IBet>({
  selectId: (bet) => bet.raceId,
});

export const { selectById } = betsAdapter.getSelectors((state: RootState) => state.bettingRaces.bets);

const initialState: IBettingRacesState = {
  bets: betsAdapter.getInitialState(),
};

const bettingRacesSlice = createSlice({
  name: 'bettingRaces',
  initialState,
  reducers: {
    createRaceBet(state, action: PayloadAction<IBet>) {
      betsAdapter.upsertOne(state.bets, action.payload);
    },
    removeRaceBetById(state, action: PayloadAction<string>) {
      betsAdapter.removeOne(state.bets, action.payload);
    },
  },
});

export const selectBetByRaceId =
  (raceId: string) =>
  (state: RootState): IBet | undefined =>
    selectById(state, raceId);

export const { createRaceBet, removeRaceBetById } = bettingRacesSlice.actions;
export default bettingRacesSlice.reducer;
