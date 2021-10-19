import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routerPaths from '@router/router_paths';
import * as Pages from '@pages/index';
import ScrollToTop from '@router/scroll_to_top/scroll_to_top';

const Router: React.FC = () => (
  <ScrollToTop>
    <Switch>
      <Route exact path={routerPaths.homeRoute} component={Pages.HomePage} />
      <Route exact path={routerPaths.raceRoute({ raceId: ':raceId' })} component={Pages.RacePage} />
      <Route component={Pages.NotFoundPage} />
    </Switch>
  </ScrollToTop>
);

export default Router;
