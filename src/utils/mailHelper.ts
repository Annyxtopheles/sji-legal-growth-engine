export const CONTACT_EMAIL = 'siddiqur.rahman@sjinnovation.com';

export const buildMailtoUrl = (subject: string, body?: string): string => {
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  return `mailto:${CONTACT_EMAIL}?${params.toString().replace(/\+/g, '%20')}`;
};

export const copyEmailToClipboard = async (): Promise<boolean> => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      return true;
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = CONTACT_EMAIL;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      return successful;
    }
  } catch (err) {
    console.error('Failed to copy email:', err);
    return false;
  }
};
