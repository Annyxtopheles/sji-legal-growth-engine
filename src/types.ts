export interface LeadFormData {
  firstName: string;
  lastName: string;
  companyName: string;
  websiteUrl: string;
  email: string;
  phone: string;
  service: string;
  challenge: string;
  packageInterest?: string;
  createdAt: string;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  date: string;
  timeSlot: string;
  timezone: string;
  notes?: string;
  createdAt: string;
}

export type ModalType = 'reviewModal' | 'bookingModal' | 'demoModal' | null;

export interface ToastState {
  show: boolean;
  message: string;
  type?: 'success' | 'info' | 'warning';
}
