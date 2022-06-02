import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function WaitingPlaceholder() {
  return (
    <Box sx={{ width: 500, marginLeft: 30, marginTop: 5 }}>
      <Skeleton height={35} sx={{ bgcolor: 'whitesmoke' }} />
      <Skeleton sx={{ bgcolor: 'whitesmoke' }} />
      <Skeleton sx={{ bgcolor: 'whitesmoke' }} />
    </Box>
  );
}