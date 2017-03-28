import AV from 'leancloud-storage';
import { APP_ID, APP_KEY, REGION } from '../../../test/configs';

import './file-message-and-subclasses';
import './location-message';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY,
  region: REGION,
});
