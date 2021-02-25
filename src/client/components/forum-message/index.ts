import { memo } from 'react';

import ForumMessage from './ForumMessage';
import { OwnProps } from './types';

export default memo<OwnProps>(ForumMessage);
