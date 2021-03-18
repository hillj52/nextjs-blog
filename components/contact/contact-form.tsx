import { useState, useEffect, FormEvent } from 'react';
import axios from 'axios';
import Notification, { NotificationProps } from '../ui/notification';
import classes from './contact-form.module.css';

const ContactForm: React.FC = () => {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [requestStatus, setRequestStatus] = useState<NotificationProps | null>();

  useEffect(() => {
    if (requestStatus && (requestStatus.status === 'success' || requestStatus.status === 'error')) {
      const timer = setTimeout(() => {
        setRequestStatus(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [requestStatus])

  const sendMessageHandler = async (event: FormEvent) => {
    event.preventDefault();
    setRequestStatus({ title: 'Sending...', message: 'Sending message', status: 'pending' });
    try {
      const response = await axios.post('/api/contact', {
        name,
        email,
        message,
      });
      setRequestStatus({ title: 'Success', message: 'Message sent', status: 'success' });
    } catch (error) {
      setRequestStatus({ title: 'Error', message: error.message ||'Error Sending message', status: 'error' });
      console.error(error);
    }
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input 
              type="email" id="email" required value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input 
              type="name" id="name" required value={name}
              onChange ={(e) => setName(e.target.value)} 
            />
          </div>
        </div> 
        <div className={classes.control}>
          <label htmlFor="name">Your Message</label>
          <textarea 
            id="message" rows={5} required value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className={classes.action}>
          <button>Send Message</button>
        </div>
      </form>
      {requestStatus && <Notification {...requestStatus} />}
    </section>
  );
}

export default ContactForm;