import ReactDOM from 'react-dom';
import classes from './notification.module.css';

export interface NotificationProps {
  title: string;
  message: string;
  status: 'pending'| 'success' | 'error';
}

const Notification: React.FC<NotificationProps> =({ title, message, status }) => ReactDOM.createPortal(
  <div className={`${classes.notification} ${classes[status]}`}>
    <h2>{title}</h2>
    <p>{message}</p>
  </div>,
  document.getElementById('notifications')
);

export default Notification;
