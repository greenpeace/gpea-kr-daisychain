import TagManager from 'react-gtm-module';

import {
  TagManagerArgs,
  DevTagManagerArgs
} from '../constants/tagManagerArgs';

// Determine and initialize GTM by environment and market name
const initTagManager = (marketName) => {
  if (process.env.NODE_ENV === 'production') {
        TagManager.initialize(TagManagerArgs);
  }
   else { 
        TagManager.initialize(DevTagManagerArgs); 
  }
};


// General dataLayer event
const pushToDataLayer = ({
  event = 'petition_load',
  petition_name
}) => {
  let dataToPush = {};
  if (event) {
    dataToPush.event = event;
  }
  if (petition_name) {
    dataToPush.petition_name = petition_name;
  } 

  TagManager.dataLayer({
    dataLayer: {
      ...dataToPush
    },
  });
};

// GA4 dataLayer.push
const pushToDataLayerGA4 = ({
  event = 'custom_event',
  event_name = 'petition_load',
  event_category = 'petitions',
  event_action = 'load', 
  event_label,
  custom_metric = 'petition_load',
}) => {
  let dataToPush = {}; 
  dataToPush = {
    event,
    event_name,
    event_category,
    event_action,
    event_label, 
    custom_metric
  }
  console.log('pushToDataLayerGA4', {dataLayer: {
    ...dataToPush,
  }});
  TagManager.dataLayer({
    dataLayer: {
      ...dataToPush,
    },
  });
};
   
const TrackingUtils = {
  initTagManager,
  pushToDataLayer,
  pushToDataLayerGA4,
};

export {
  initTagManager,
  pushToDataLayer,
  pushToDataLayerGA4,
};

export default TrackingUtils;
