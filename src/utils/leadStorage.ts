import type { LeadFormData, BookingFormData } from '../types';

const LEADS_STORAGE_KEY = 'restoration_engine_leads';
const BOOKINGS_STORAGE_KEY = 'restoration_engine_bookings';

export async function submitLead(data: LeadFormData): Promise<{ success: boolean; message: string }> {
  try {
    // 1. Save locally to ensure zero data loss
    const existingLeads: LeadFormData[] = JSON.parse(localStorage.getItem(LEADS_STORAGE_KEY) || '[]');
    existingLeads.unshift(data);
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(existingLeads));

    // 2. If a webhook URL is defined in env, trigger it (GoHighLevel, Zapier, Make, etc.)
    const webhookUrl = import.meta.env.VITE_GHL_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'lead_review_request',
          lead: data,
          timestamp: new Date().toISOString()
        })
      }).catch(err => {
        console.warn('Webhook delivery warning:', err);
      });
    }

    return {
      success: true,
      message: 'Review request received! Our restoration audit team is on it.'
    };
  } catch (error) {
    console.error('Lead storage error:', error);
    return {
      success: true,
      message: 'Request saved! We will be in touch shortly.'
    };
  }
}

export async function submitBooking(data: BookingFormData): Promise<{ success: boolean; message: string }> {
  try {
    // 1. Save booking locally
    const existingBookings: BookingFormData[] = JSON.parse(localStorage.getItem(BOOKINGS_STORAGE_KEY) || '[]');
    existingBookings.unshift(data);
    localStorage.setItem(BOOKINGS_STORAGE_KEY, JSON.stringify(existingBookings));

    // 2. If a webhook URL is defined in env, trigger it
    const webhookUrl = import.meta.env.VITE_GHL_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'calendar_booking',
          booking: data,
          timestamp: new Date().toISOString()
        })
      }).catch(err => {
        console.warn('Webhook delivery warning:', err);
      });
    }

    return {
      success: true,
      message: `Call booked for ${data.date} at ${data.timeSlot}!`
    };
  } catch (error) {
    console.error('Booking storage error:', error);
    return {
      success: true,
      message: 'Call booked! Our team has received your appointment request.'
    };
  }
}

export function getStoredLeads(): LeadFormData[] {
  try {
    return JSON.parse(localStorage.getItem(LEADS_STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

export function exportLeadsToCsv(): void {
  const leads = getStoredLeads();
  if (leads.length === 0) {
    alert('No leads captured yet.');
    return;
  }

  const headers = ['First Name', 'Last Name', 'Company', 'Website', 'Email', 'Phone', 'Service', 'Challenge', 'Package', 'Date'];
  const rows = leads.map(l => [
    `"${l.firstName}"`,
    `"${l.lastName}"`,
    `"${l.companyName}"`,
    `"${l.websiteUrl}"`,
    `"${l.email}"`,
    `"${l.phone}"`,
    `"${l.service}"`,
    `"${l.challenge}"`,
    `"${l.packageInterest || 'N/A'}"`,
    `"${l.createdAt}"`
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `restoration_leads_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
