import { styled } from '@nextui-org/react';

export const IconButton = styled('button', {
  dflex: 'center',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  borderRadius: 100,
  padding: '4px',
  margin: '0',
  bg: 'transparent',
  transition: '$default',
  '&:hover': {
    opacity: '0.8'
  },
  '&:active': {
    opacity: '0.6'
  }
});
