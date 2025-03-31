import { Button } from "@heroui/react";

export const IconButton = (props) => (
  <Button
    isIconOnly
    variant="ghost"
    {...props}
    css={{
      padding: '4px',
      margin: '0',
      borderRadius: 100,
      transition: '$default',
      '&:hover': {
        opacity: '0.8'
      },
      '&:active': {
        opacity: '0.6'
      }
    }}
  />
);
