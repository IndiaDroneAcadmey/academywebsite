const fs = require('fs');
const html = fs.readFileSync('C:/Users/madhi/Downloads/100-batches-landing_1.html', 'utf8');

const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
if (styleMatch) {
  let css = styleMatch[1];
  css = css.replace(/:root/g, '.batches-100-page');
  css = css.replace(/body\s*{/g, '.batches-100-page {');
  fs.writeFileSync('c:/Users/madhi/Desktop/drone academy/academywebsite/src/pages/Batches100Page.css', css);
  console.log('CSS updated.');
}

const bodyMatch = html.match(/<body>([\s\S]*?)<script>/);
let bodyHtml = '';
if (bodyMatch) {
    bodyHtml = bodyMatch[1];
}

const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>\s*<\/body>/);
let scriptContent = '';
if (scriptMatch) {
    scriptContent = scriptMatch[1];
}

const tsxContent = `import React, { useEffect } from 'react';
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
      ${scriptContent}
    };

    // Wait a bit for DOM to render from dangerouslySetInnerHTML
    setTimeout(runLogic, 100);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="batches-100-page" dangerouslySetInnerHTML={{
      __html: \`
      ${bodyHtml.replace(/`/g, '\\`')}
      \`
    }} />
  );
}
`;

fs.writeFileSync('c:/Users/madhi/Desktop/drone academy/academywebsite/src/pages/Batches100Page.tsx', tsxContent);
console.log('TSX updated.');
