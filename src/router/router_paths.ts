export interface IRaceRouteParams {
  raceId: string;
}

const routerPaths = {
  homeRoute: '/',
  raceRoute: ({ raceId }: IRaceRouteParams): string => `/race/${raceId}`,
};

export default routerPaths;
