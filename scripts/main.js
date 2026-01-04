/**
 * Main script for Linktree-lite
 * Handles email copy functionality
 */

(function() {
  'use strict';

  // Get email link configuration
  const emailLink = config.links.find(link => link.type === 'email');
  if (!emailLink) {
    console.warn('No email link found in config');
    return;
  }

  const buttonId = emailLink.buttonId;
  const emailAddress = emailLink.email;

  /**
   * Initialize email copy button
   */
  function initEmailCopyButton() {
    const button = document.getElementById(buttonId);
    if (!button) {
      console.warn(`Email button with id "${buttonId}" not found`);
      return;
    }

    button.addEventListener('click', handleEmailCopy);
  }

  /**
   * Handle email copy to clipboard
   */
  async function handleEmailCopy() {
    if (!emailAddress) return;

    try {
      await navigator.clipboard.writeText(emailAddress);
      showCopyFeedback();
    } catch (err) {
      console.error('Failed to copy email:', err);
      // Fallback: show email in alert
      alert('Email: ' + emailAddress);
    }
  }

  /**
   * Show visual feedback when email is copied
   */
  function showCopyFeedback() {
    const button = document.getElementById(buttonId);
    if (!button) return;

    const emailText = button.querySelector('.email-text');
    const emailHoverText = button.querySelector('.email-hover-text');

    if (emailText && emailHoverText) {
      const originalText = emailText.textContent;
      const originalHoverText = emailHoverText.textContent;

      // Update text to show "Copied!"
      emailText.textContent = 'Copied!';
      emailHoverText.textContent = 'Copied!';
      button.style.transform = 'scale(0.98)';

      // Reset after 1.5 seconds
      setTimeout(() => {
        emailText.textContent = originalText;
        emailHoverText.textContent = originalHoverText;
        button.style.transform = 'scale(1)';
      }, 1500);
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEmailCopyButton);
  } else {
    initEmailCopyButton();
  }
})();

