import {FC, HTMLAttributes} from 'react';

export type OwnProps = {
  url: string;
} & HTMLAttributes<HTMLDivElement>;

export type Props = FC<OwnProps>;
