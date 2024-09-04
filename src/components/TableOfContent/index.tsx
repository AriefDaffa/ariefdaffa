// components/TableOfContents.tsx
import React, { useEffect } from 'react';

interface Heading {
  depth: number;
  slug: string;
  text: string;
}

interface Props {
  headings: Heading[];
}

const TableOfContents: React.FC<Props> = ({ headings }) => {
  const generateToc = (
    headings: Heading[],
    currentDepth = 1
  ): JSX.Element[] => {
    const tocItems: JSX.Element[] = [];
    let index = 0;

    while (index < headings.length) {
      const heading = headings[index];
      if (heading.depth > currentDepth) {
        const nestedItems = generateToc(headings.slice(index), heading.depth);
        tocItems.push(
          <ul key={`ul-${heading.slug}`} className="list-disc pl-4">
            {nestedItems}
          </ul>
        );
        index += nestedItems.length;
      } else if (heading.depth === currentDepth) {
        tocItems.push(
          <li
            key={heading.slug}
            className={`ml-${heading.depth * 2} hover:text-primary`}
            id={`toc-${heading.slug}`}
          >
            <a href={`#${heading.slug}`} className="toc-link">
              {heading.text}
            </a>
          </li>
        );
        index++;
      } else {
        break;
      }
    }

    return tocItems;
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const tocLink = document.querySelector(
          `#toc-${entry.target.id} .toc-link`
        );
        if (entry.isIntersecting) {
          tocLink?.classList.add('font-bold');
        } else {
          tocLink?.classList.remove('font-bold');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll(
      'main .prose h1, main .prose h2, main .prose h3'
    );
    sections.forEach((section) => {
      section.id && observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        section.id && observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="w-1/3 h-min p-4 sticky top-16 border-[1px] rounded-md hidden dark:border-gray-text md:block">
      <div className="text-xl font-semibold">Table of Contents</div>
      <ul className="list-disc pl-4">{generateToc(headings)}</ul>
    </div>
  );
};

export default TableOfContents;
