import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IParticipant, IRace } from '@features/betting_api/betting_api_types';

const BASE_URL = 'https://my-json-server.typicode.com/hdjfye/bet-api';

export const bettingApiSlice = createApi({
  reducerPath: 'bettingApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints(builder) {
    return {
      fetchAllRaces: builder.query<IRace[], void>({
        query() {
          return '/races';
        },
      }),
      fetchRace: builder.query<IRace, string>({
        query(raceId: string) {
          return `/races/${raceId}`;
        },
      }),
      fetchParticipant: builder.query<IParticipant, number>({
        query(participantId: number) {
          return `/participants/${participantId}`;
        },
      }),
    };
  },
});

export const { useFetchAllRacesQuery, useFetchRaceQuery, useFetchParticipantQuery } = bettingApiSlice;
