// Utility function for combining class names
export function cn(...inputs) {
  return inputs
    .filter(Boolean)
    .map((input) => {
      if (typeof input === 'string') return input;
      if (typeof input === 'object') {
        return Object.keys(input)
          .filter((key) => input[key])
          .join(' ');
      }
      return '';
    })
    .filter(Boolean)
    .join(' ');
}
