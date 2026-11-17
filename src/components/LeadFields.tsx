import { CheckCircle2, Loader2, XCircle } from 'lucide-react';
import { useLeadForm, type LeadSource } from '../lib/leadForm';

const inputBase =
  'w-full rounded-xl border bg-white px-4 py-3 text-sm text-navy-900 placeholder-navy-300 transition-colors focus:border-brand-500 focus:outline-none';

export default function LeadFields({
  source,
  requireName = true,
  compact = false,
  dark = false,
  successMessage = 'Thank you! Our strategist will call you shortly.',
}: {
  source: LeadSource;
  requireName?: boolean;
  compact?: boolean;
  dark?: boolean;
  successMessage?: string;
}) {
  const { values, errors, status, setField, submit } = useLeadForm(source, requireName);

  if (status === 'success') {
    return (
      <div
        role="status"
        className="flex items-start gap-3 rounded-xl bg-emerald-50 px-4 py-4 text-sm font-medium text-emerald-800"
      >
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden="true" />
        <span>{successMessage}</span>
      </div>
    );
  }

  return (
    <form
      className="space-y-4"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        void submit();
      }}
    >
      {requireName && (
        <Field label="Name" error={errors.name} dark={dark}>
          <input
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Your full name"
            value={values.name}
            onChange={(e) => setField('name')(e.target.value)}
            aria-invalid={!!errors.name}
            className={`${inputBase} ${errors.name ? 'border-brand-500' : 'border-navy-100'}`}
          />
        </Field>
      )}

      <Field label="E-mail" error={errors.email} dark={dark}>
        <input
          type="email"
          name="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={values.email}
          onChange={(e) => setField('email')(e.target.value)}
          aria-invalid={!!errors.email}
          className={`${inputBase} ${errors.email ? 'border-brand-500' : 'border-navy-100'}`}
        />
      </Field>

      <Field
        label={compact ? 'Mobile Number' : 'Phone'}
        error={errors.phone}
        dark={dark}
      >
        <input
          type="tel"
          name="phone"
          autoComplete="tel"
          placeholder="+91 98765 43210"
          value={values.phone}
          onChange={(e) => setField('phone')(e.target.value)}
          aria-invalid={!!errors.phone}
          className={`${inputBase} ${errors.phone ? 'border-brand-500' : 'border-navy-100'}`}
        />
      </Field>

      {status === 'error' && (
        <p role="alert" className="flex items-center gap-2 text-sm text-brand-600">
          <XCircle className="h-4 w-4" aria-hidden="true" />
          Something went wrong. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 px-6 py-3.5 font-heading text-sm font-bold uppercase tracking-wide text-white shadow-card transition hover:-translate-y-0.5 hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-70 min-h-[44px]"
      >
        {status === 'submitting' && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        Submit
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  dark,
  children,
}: {
  label: string;
  error?: string;
  dark?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        className={`mb-1.5 block text-xs font-semibold uppercase tracking-wide ${
          dark ? 'text-navy-100' : 'text-navy-700'
        }`}
      >
        {label} <span className="text-brand-500" aria-hidden="true">*</span>
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-xs font-medium text-brand-600">
          {error}
        </p>
      )}
    </div>
  );
}
