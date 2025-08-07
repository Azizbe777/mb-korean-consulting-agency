// Enhanced error handler to suppress all development indicators and debug overlays
if (typeof window !== 'undefined') {
  // Suppress all console errors and warnings in production
  if (process.env.NODE_ENV === 'production') {
    const originalError = console.error;
    const originalWarn = console.warn;
    const originalLog = console.log;
    const originalInfo = console.info;
    
    console.error = (...args: any[]) => {
      // Suppress all hydration and development related errors
      const message = args[0]?.toString() || '';
      if (message.includes('Hydration') || 
          message.includes('hydration') || 
          message.includes('Warning') ||
          message.includes('React') ||
          message.includes('Next.js') ||
          message.includes('development')) {
        return;
      }
      originalError.apply(console, args);
    };
    
    console.warn = (...args: any[]) => {
      // Suppress all development warnings
      const message = args[0]?.toString() || '';
      if (message.includes('Hydration') || 
          message.includes('hydration') || 
          message.includes('Warning') ||
          message.includes('React') ||
          message.includes('Next.js') ||
          message.includes('development')) {
        return;
      }
      originalWarn.apply(console, args);
    };

    console.log = (...args: any[]) => {
      // Suppress development logs
      const message = args[0]?.toString() || '';
      if (message.includes('development') || 
          message.includes('debug') ||
          message.includes('DevTools')) {
        return;
      }
      originalLog.apply(console, args);
    };

    console.info = (...args: any[]) => {
      // Suppress development info
      const message = args[0]?.toString() || '';
      if (message.includes('development') || 
          message.includes('debug') ||
          message.includes('DevTools')) {
        return;
      }
      originalInfo.apply(console, args);
    };
  }

  // Remove any existing development overlays
  const removeDevOverlays = () => {
    const overlays = document.querySelectorAll('[data-nextjs-dev-overlay], [data-nextjs-error-overlay], .nextjs-dev-overlay, .nextjs-error-overlay');
    overlays.forEach(overlay => {
      if (overlay.parentNode) {
        overlay.parentNode.removeChild(overlay);
      }
    });

    // Remove any React DevTools elements
    const reactDevTools = document.querySelectorAll('[data-reactroot], [data-reactid], .react-devtools');
    reactDevTools.forEach(element => {
      if (element.parentNode && element.classList.contains('react-devtools')) {
        element.parentNode.removeChild(element);
      }
    });
  };

  // Run immediately and on DOM changes
  removeDevOverlays();
  
  // Observe DOM changes to remove any new overlays
  const observer = new MutationObserver(removeDevOverlays);
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    if (process.env.NODE_ENV === 'production') {
      event.preventDefault();
    }
  });

  // Handle global errors
  window.addEventListener('error', (event) => {
    if (process.env.NODE_ENV === 'production') {
      event.preventDefault();
    }
  });

  // Override window.console methods to prevent any debug output
  if (process.env.NODE_ENV === 'production') {
    window.console = {
      ...window.console,
      error: console.error,
      warn: console.warn,
      log: console.log,
      info: console.info
    };
  }
} 