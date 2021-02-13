import React, { FC, ReactNode } from 'react';
import { OwnProps } from './types';
import './pagination.scss';
import PageLinkButton from '../page-link-button';

const Pagination: FC<OwnProps> = (props: OwnProps) => {
  const {
    current,
    total,
    ...otherProps
  } = props;

  function createArrayOfNumbers(n: number): number[] {
    return Array.from(Array(n).keys()).map((index: number) => index + 1);
  }

  function prepareRelevantPageIndexes(currentPageIndex: number, totalPages: number): number[] {
    if (totalPages < 4) {
      return createArrayOfNumbers(totalPages);
    }

    if (currentPageIndex === 1) {
      return createArrayOfNumbers(3);
    }

    if (currentPageIndex === totalPages) {
      return [totalPages - 2, totalPages - 1, totalPages];
    }

    return [currentPageIndex - 1, currentPageIndex, currentPageIndex + 1];
  }

  function createPageLinks(currentPageIndex: number, totalPages: number): ReactNode[] {
    const allLinks = [];

    if (totalPages > 3 && currentPageIndex !== 1) {
      allLinks.push(<PageLinkButton isSelected={false} text="&laquo;" path="/topic/1" />);
      allLinks.push(<PageLinkButton isSelected={false} text="&lsaquo;" path={`/topic/${currentPageIndex - 1}`} />);
    }

    const pageIndexes = prepareRelevantPageIndexes(currentPageIndex, totalPages);
    const pageLinks = pageIndexes.map((pageIndex: number) => (
      <PageLinkButton
        isSelected={currentPageIndex === pageIndex}
        text={pageIndex}
        path={`/topic/${pageIndex}`}
        key={pageIndex}
      />
    ));

    allLinks.push(pageLinks);

    if (totalPages > 3 && currentPageIndex !== totalPages) {
      allLinks.push(<PageLinkButton isSelected={false} text="&rsaquo;" path={`/topic/${currentPageIndex + 1}`} />);
      allLinks.push(<PageLinkButton isSelected={false} text="&raquo;" path={`/topic/${totalPages}`} />);
    }

    return allLinks;
  }

  const className = `pagination ${props.className ? props.className : ''}`;

  return (
    <div {...otherProps} className={className}>
      { createPageLinks(current, total) }
    </div>
  );
};

export default Pagination;
