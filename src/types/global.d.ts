declare global {
  interface Window {
    renderPortableSearchBar?: () => void;
    renderCalendarWidget?: () => void;
  }
}

export {};
