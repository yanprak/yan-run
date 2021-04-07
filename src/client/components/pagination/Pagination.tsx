import React, { FC, ReactNode } from 'react';
import { OwnProps } from './types';
import './pagination.scss';
import PaginationButton from './PaginationButton';

function createArrayOfNumbers(n: number): number[] {
  return Array(n).fill(0).map((_, index) => index + 1);
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

const Pagination: FC<OwnProps> = (props: OwnProps) => {
  const {
    current,
    total,
    path,
    ...otherProps
  } = props;

  function createPageLinks(currentPageIndex: number, totalPages: number): ReactNode[] {
    const allLinks = [];

    if (totalPages > 3 && currentPageIndex !== 1) {
      const prev = currentPageIndex - 1;
      allLinks.push(<PaginationButton isSelected={false} key="left_start" text="&laquo;" path={`${path}/1`} />);
      allLinks.push(<PaginationButton
        isSelected={false}
        key={`left_${prev}`}
        text="&lsaquo;"
        path={`${path}/${prev}`}
      />);
    }

    const pageIndexes = prepareRelevantPageIndexes(currentPageIndex, totalPages);
    const pageLinks = pageIndexes.map((pageIndex: number) => (
      <PaginationButton
        isSelected={currentPageIndex === pageIndex}
        text={pageIndex}
        path={`${path}/${pageIndex}`}
        key={pageIndex}
      />
    ));

    allLinks.push(pageLinks);

    if (totalPages > 3 && currentPageIndex !== totalPages) {
      const next = currentPageIndex + 1;
      allLinks.push(<PaginationButton
        isSelected={false}
        key={`right_${next}`}
        text="&rsaquo;"
        path={`${path}/${next}`}
      />);
      allLinks.push(<PaginationButton
        isSelected={false}
        key="right_last"
        text="&raquo;"
        path={`${path}/${totalPages}`}
      />);
    }

    return allLinks;
  }

  const className = `pagination ${props.className || ''}`;

  return (
    <div {...otherProps} className={className}>
      { createPageLinks(current, total) }
    </div>
  );
};

export default Pagination;
