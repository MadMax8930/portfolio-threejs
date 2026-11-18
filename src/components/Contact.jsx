import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const submitLockRef = useRef(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
    setSubmissionStatus({ type: '', message: '' });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitLockRef.current) return;

    const emailInput = e.currentTarget.elements.namedItem('email');
    if (!form.name.trim() || !form.email.trim() || !form.message.trim() || !emailInput.validity.valid) {
      setSubmissionStatus({ type: 'error', message: 'Enter your name, a valid email address, and a message.' });
      return;
    }

    submitLockRef.current = true;
    setLoading(true);
    setSubmissionStatus({ type: 'sending', message: 'Sending your message…' });
    let configurationMissing = false;

    try {
      const {
        VITE_APP_EMAILJS_SERVICE_ID: serviceId,
        VITE_APP_EMAILJS_TEMPLATE_ID: templateId,
        VITE_APP_EMAILJS_PUBLIC_KEY: publicKey,
      } = import.meta.env;

      if (!serviceId || !templateId || !publicKey) {
        configurationMissing = true;
        throw new Error('Contact form configuration is missing.');
      }

      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name.trim(),
          to_name: 'Max',
          from_email: form.email.trim(),
          to_email: 'maxsurnin3@gmail.com',
          message: form.message.trim(),
        },
        publicKey
      );

      if (response.status !== 200 && response.text !== 'OK') {
        throw new Error('EmailJS did not confirm delivery.');
      }

      setSubmissionStatus({
        type: 'success',
        message: 'Thank you. Your message was sent successfully.',
      });
      setForm({
        name: '',
        email: '',
        message: '',
      })
    } catch {
      setSubmissionStatus({
        type: 'error',
        message: configurationMissing
          ? 'The contact form is not configured right now. Please try again later.'
          : 'Your message could not be sent. Please try again later.',
      });
    } finally {
      submitLockRef.current = false;
      setLoading(false);
    }
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden sm:pb-4 pb-16'>
      <motion.div 
        variants={slideIn('left','tween', 0,2, 1)} 
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
         onSubmit={handleSubmit}
         className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input 
              type="text"
              name="name"
              autoComplete="name"
              value={form.name} 
              onChange={handleChange} 
              placeholder="What's your name?"
              required
              disabled={loading}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary 
              text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input 
              type="email"
              name="email" 
              autoComplete="email"
              value={form.email} 
              onChange={handleChange} 
              placeholder="What's your email?"
              required
              disabled={loading}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary 
              text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea 
              rows="7"
              name="message" 
              value={form.message} 
              onChange={handleChange} 
              placeholder="What do you want to say?"
              required
              disabled={loading}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary 
              text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold 
            shadow-md shadow-primary rounded-xl disabled:cursor-not-allowed disabled:opacity-60'
          >
            {loading ? "Sending..." : "Send"}
          </button>
          <p
            role='status'
            aria-live='polite'
            aria-atomic='true'
            className={`min-h-5 text-sm ${submissionStatus.type === 'error' ? 'text-red-300' : 'text-secondary'}`}
          >
            {submissionStatus.message}
          </p>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right','tween', 0,2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
