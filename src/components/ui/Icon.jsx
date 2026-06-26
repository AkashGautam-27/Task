import React from 'react';
import { ICONS } from '../../assets/icons';

export function Icon({ name, className = 'w-5 h-5 text-current', ...props }) {
  // Strip suffix (.svg) if present
  const key = name.endsWith('.svg') ? name.slice(0, -4) : name;
  const svgContent = ICONS[key];

  if (!svgContent) {
    console.warn(`SVG Icon "${name}" (key: "${key}") not found in assets index.`);
    return <span className={`${className} inline-block bg-brand-nocturnal/20 rounded`} {...props} />;
  }

  // Strip hardcoded sizing/classes from raw SVG string and inject our className
  const processedSvg = svgContent.replace(/<svg([^>]*)/, (match, attributes) => {
    const cleanedAttributes = attributes
      .replace(/width="[^"]*"/g, '')
      .replace(/height="[^"]*"/g, '')
      .replace(/class="[^"]*"/g, '');
    return `<svg class="${className}" ${cleanedAttributes}`;
  });

  return (
    <span 
      className="inline-flex items-center justify-center"
      dangerouslySetInnerHTML={{ __html: processedSvg }} 
      {...props} 
    />
  );
}
