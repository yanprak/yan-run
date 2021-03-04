import cogoToast from 'cogo-toast';
import { Notification } from './types';

export default function showNotification(type: Notification, message: string): Promise<void> {
  return cogoToast[type](message);
}
