import React, { JSX } from 'react';
import { Text, Link, View } from '@react-pdf/renderer';
import { marked } from 'marked';
import { pdfStyles } from '@/app/(pages)/resume/pdfStyles';

// Helper: renders inline markdown (text, strong, em, link)
function renderInlineTokens(tokens: any[], parentKey: string = ''): JSX.Element[] {
  return tokens.map((token, index) => {
    const key = `${parentKey}-${index}`;

    switch (token.type) {
      case 'text':
        return <Text key={key}>{token.text}</Text>;

      case 'strong':
        return (
          <Text key={key} style={pdfStyles.bold}>
            {renderInlineTokens(token.tokens, key)}
          </Text>
        );

      case 'em':
        return (
          <Text key={key} style={pdfStyles.italic}>
            {renderInlineTokens(token.tokens, key)}
          </Text>
        );

      case 'link':
        return (
          <Link key={key} src={token.href} style={pdfStyles.link}>
            {renderInlineTokens(token.tokens, key)}
          </Link>
        );

      default:
        return <Text key={key}>{token.raw || token.text}</Text>;
    }
  });
}

// Full renderer: handles paragraphs + inline markdown
export function markdownToPdfComponents(markdown: string): JSX.Element[] {
  const tokens = marked.lexer(markdown);
  const output: JSX.Element[] = [];

  tokens.forEach((token, idx) => {
    if (token.type === 'paragraph') {
      output.push(
        <Text key={idx} style={pdfStyles.paragraph}>
          {renderInlineTokens(token.tokens || [], `p-${idx}`)}
        </Text>
      );
    }

    // You can add support for headings, lists, etc. here
    // if (token.type === 'heading') { ... }
  });

  return output;
}
