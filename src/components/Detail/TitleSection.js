import React from 'react';
import Typography from '../Global/Typography';

export default function TitleSection({ data }) {
  return (
    <Typography size="xlarge" weight="title">
      {data.name}
    </Typography>
  );
}
