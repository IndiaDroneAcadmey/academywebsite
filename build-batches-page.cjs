const fs = require('fs');

const html = fs.readFileSync('C:/Users/madhi/Downloads/100-batches-landing_1.html', 'utf-8');

const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
let style = styleMatch ? styleMatch[1] : '';

// Replace :root with .batches-100-page
style = style.replace(/:root\s*\{/, '.batches-100-page {');

// Replace colors to light/orange theme
style = style.replace(/--ink:\s*#[0-9A-Fa-f]+;/g, '--ink: #FFFFFF;');
style = style.replace(/--ink-2:\s*#[0-9A-Fa-f]+;/g, '--ink-2: #F9FAFB;');
style = style.replace(/--ink-3:\s*#[0-9A-Fa-f]+;/g, '--ink-3: #F3F4F6;');
style = style.replace(/--line:\s*#[0-9A-Fa-f]+;/g, '--line: #E5E7EB;');
style = style.replace(/--bone:\s*#[0-9A-Fa-f]+;/g, '--bone: #111827;');
style = style.replace(/--bone-2:\s*#[0-9A-Fa-f]+;/g, '--bone-2: #4B5563;');
style = style.replace(/--mute:\s*#[0-9A-Fa-f]+;/g, '--mute: #6B7280;');
style = style.replace(/--accent:\s*#[0-9A-Fa-f]+;/g, '--accent: #F15A24;');
style = style.replace(/--accent-warm:\s*#[0-9A-Fa-f]+;/g, '--accent-warm: #D64A1A;');
style = style.replace(/--accent-deep:\s*#[0-9A-Fa-f]+;/g, '--accent-deep: #B03A12;');

// Replace body with .batches-100-page
style = style.replace(/body\s*\{/g, '.batches-100-page {');
style = style.replace(/body::before/g, '.batches-100-page::before');
style = style.replace(/body::after/g, '.batches-100-page::after');

style += '\n.batches-100-page nav { display: none !important; }\n';
style += '\n.batches-100-page .hero { padding-top: 100px; }\n';

const bodyMatch = html.match(/<body>([\s\S]*?)<\/body>/);
let body = bodyMatch ? bodyMatch[1] : '';

// Remove the <script> block from body
const scriptMatch = body.match(/<script>([\s\S]*?)<\/script>/);
const scriptContent = scriptMatch ? scriptMatch[1] : '';
body = body.replace(/<script>[\s\S]*?<\/script>/, '');

// Convert to a string that can be used in dangerouslySetInnerHTML
// Escape backticks and dollar signs for template literal
const escapedBody = body.replace(/`/g, '\\`').replace(/\$/g, '\\$');

const reactCode = `import React, { useEffect } from 'react';
import './Batches100Page.css';

export default function Batches100Page() {
  useEffect(() => {
    // Add Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    // Run the inline script logic
    const runLogic = () => {
      ${scriptContent.replace(/`/g, '\\`').replace(/\$/g, '\\$')}
    };

    // Wait a bit for DOM to render from dangerouslySetInnerHTML
    setTimeout(runLogic, 100);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="batches-100-page" dangerouslySetInnerHTML={{ __html: \`${escapedBody}\` }} />
  );
}
`;

fs.writeFileSync('src/pages/Batches100Page.tsx', reactCode);
fs.writeFileSync('src/pages/Batches100Page.css', style);
console.log('Component created successfully!');
