import React from "react";
import { ThemeProvider } from 'styled-components';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from '../components/card';
import { til } from '../constants/cardData';
import theme from '../styles/theme';

const TIL = () => {
  const data = [
    {
      id: 1,
      title: 'Today I learned about HTTP Desync Attacks',
      content: 'A collegue of mine teached us about her insights from the '
    },
    {
      id: 2,
      title: 'second',
    }
  ];

  const reversedData = [...data].reverse();

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Today I learned" />
        <Card
          h1={til.h1}
          textContent={til.textContent}
        />
        {reversedData.map(item => (
          <section key={item.id}>
            <aside>
              #TIL {item.id}
            </aside>
            <main>
              <h3>
                {item.title}
              </h3>
              <p>
                {item.content}
              </p>
            </main>
          </section>
        ))}
      </Layout>
    </ThemeProvider>
  )
};

export default TIL;