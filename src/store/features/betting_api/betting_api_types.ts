export interface IRace {
  id: number;
  name: string;
  active: boolean;
  participants: number[];
}

export interface IParticipant {
  id: number;
  body: string;
}
