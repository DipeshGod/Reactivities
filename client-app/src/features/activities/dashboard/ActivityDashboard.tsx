import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Grid, List } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../stores/store';
import ActivityList from './ActivityList';

export default observer(function ActivityDashboard() {
  const { activityStore } = useStore();
  const { loadActivities, activitiesRegistry } = activityStore;

  useEffect(() => {
    if (activitiesRegistry.size <= 1) loadActivities();
  }, [activitiesRegistry.size, loadActivities]);

  if (activityStore.loadingInitial)
    return <LoadingComponent content='Loading app' />;

  return (
    <Grid>
      <Grid.Column width='10'>
        <List>
          <ActivityList />
        </List>
      </Grid.Column>
      <Grid.Column width='6'>
        <h2>Activity filters</h2>
      </Grid.Column>
    </Grid>
  );
});
