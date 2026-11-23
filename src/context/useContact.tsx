import { useCallback, useEffect, useState } from 'react';

export interface Contact {
  id: number;
  name: string;
  company: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  source: string;
  status: string;
  created_at: string;
}

export const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:5000';

export function useContacts() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const load = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${API_URL}/api/contact`);
      if (!res.ok) throw new Error(`Server returned ${res.status}`);
      const json = await res.json();
      if (!json.success) throw new Error('The API reported a failure');
      setContacts(json.data);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not load contacts');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return { contacts, loading, error, reload: load };
}

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' });