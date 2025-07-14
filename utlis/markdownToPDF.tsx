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

export function markdownToPdfComponents(markdown: string): JSX.Element[] {
  const tokens = marked.lexer(markdown);
  const output: JSX.Element[] = [];

  tokens.forEach((token, idx) => {
    if (token.type === 'paragraph') {
      output.push(
        <Text key={`p-${idx}`} style={pdfStyles.paragraph}>
          {renderInlineTokens(token.tokens || [], `p-${idx}`)}
        </Text>
      );
    }

    if (token.type === 'list' && !token.ordered) {
      const listItems = token.items.map((item: any, itemIdx: number) => (
        <View key={`ul-${idx}-${itemIdx}`} style={pdfStyles.listItem}>
          <Text style={pdfStyles.bullet}>•</Text>
          <Text style={pdfStyles.listContent}>
            {renderInlineTokens(item.tokens || [], `ul-${idx}-${itemIdx}`)}
          </Text>
        </View>
      ));

      output.push(
        <View key={`list-${idx}`} style={pdfStyles.list}>
          {listItems}
        </View>
      );
    }
  });

  return output;
}
