import { Button, ButtonProps } from "@chakra-ui/react";
import { FC, MouseEvent } from "react";

interface IconButtonProps extends ButtonProps {
  stopPropagation?: boolean;
}

const IconButton: FC<IconButtonProps> = ({
  stopPropagation = false,
  onClick,
  children,
  ...rest
}) => {
  const handleOnClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    if (stopPropagation) e.stopPropagation();
    if (!!onClick) onClick(e);
  };

  return (
    <Button
      variant="unstyled"
      minW="8"
      minH="8"
      w="8"
      h="8"
      p="1.5"
      mr="1"
      justifyContent="cetner"
      color="gray.900"
      onClick={handleOnClick}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default IconButton;
