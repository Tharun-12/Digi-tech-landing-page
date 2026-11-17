// import { useState } from 'react';
// import { supabase } from './supabase';

// export type LeadSource = 'modal' | 'mid_cta' | 'footer';

// export type LeadValues = {
//   name: string;
//   email: string;
//   phone: string;
// };

// export type LeadErrors = Partial<Record<keyof LeadValues, string>>;

// const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// const PHONE_RE = /^[+]?[\d][\d\s-]{7,14}$/;

// export function validateLead(
//   values: LeadValues,
//   requireName: boolean
// ): LeadErrors {
//   const errors: LeadErrors = {};
//   if (requireName && values.name.trim().length < 2) {
//     errors.name = 'Please enter your name.';
//   }
//   if (!EMAIL_RE.test(values.email.trim())) {
//     errors.email = 'Please enter a valid e-mail address.';
//   }
//   if (!PHONE_RE.test(values.phone.trim())) {
//     errors.phone = 'Please enter a valid phone number.';
//   }
//   return errors;
// }

// export function useLeadForm(source: LeadSource, requireName: boolean) {
//   const [values, setValues] = useState<LeadValues>({ name: '', email: '', phone: '' });
//   const [errors, setErrors] = useState<LeadErrors>({});
//   const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

//   const setField = (field: keyof LeadValues) => (value: string) => {
//     setValues((v) => ({ ...v, [field]: value }));
//     setErrors((e) => ({ ...e, [field]: undefined }));
//   };

//   const submit = async (): Promise<boolean> => {
//     const nextErrors = validateLead(values, requireName);
//     setErrors(nextErrors);
//     if (Object.keys(nextErrors).length > 0) return false;

//     setStatus('submitting');
//     const { error } = await supabase.from('leads').insert({
//       name: values.name.trim(),
//       email: values.email.trim(),
//       phone: values.phone.trim(),
//       source,
//     });

//     if (error) {
//       setStatus('error');
//       return false;
//     }

//     setStatus('success');
//     setValues({ name: '', email: '', phone: '' });
//     return true;
//   };

//   return { values, errors, status, setField, submit, reset: () => setStatus('idle') };
// }


import { useState } from 'react';

export type LeadSource = 'modal' | 'mid_cta' | 'footer';

export type LeadValues = {
  name: string;
  email: string;
  phone: string;
};

export type LeadErrors = Partial<Record<keyof LeadValues, string>>;

export type LeadPayload = LeadValues & { source: LeadSource };

/** Implement this to send the lead wherever you need (API route, fetch, etc). */
export type SubmitLead = (payload: LeadPayload) => Promise<void>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+]?[\d][\d\s-]{7,14}$/;

export function validateLead(
  values: LeadValues,
  requireName: boolean
): LeadErrors {
  const errors: LeadErrors = {};
  if (requireName && values.name.trim().length < 2) {
    errors.name = 'Please enter your name.';
  }
  if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = 'Please enter a valid e-mail address.';
  }
  if (!PHONE_RE.test(values.phone.trim())) {
    errors.phone = 'Please enter a valid phone number.';
  }
  return errors;
}

export function useLeadForm(
  source: LeadSource,
  requireName: boolean,
  submitLead: SubmitLead
) {
  const [values, setValues] = useState<LeadValues>({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState<LeadErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const setField = (field: keyof LeadValues) => (value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const submit = async (): Promise<boolean> => {
    const nextErrors = validateLead(values, requireName);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return false;

    setStatus('submitting');
    try {
      await submitLead({
        name: values.name.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        source,
      });
    } catch {
      setStatus('error');
      return false;
    }

    setStatus('success');
    setValues({ name: '', email: '', phone: '' });
    return true;
  };

  return { values, errors, status, setField, submit, reset: () => setStatus('idle') };
}