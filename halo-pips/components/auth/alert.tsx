import React from "react";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface Props {
  children?: React.ReactNode;
}

export function AlertDestructive({ children }: Props) {
  if (!children) {
    return null;
  }
  return (
    <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 test-sm text-destructive">
      <ExclamationTriangleIcon className="h-4 w-4"></ExclamationTriangleIcon>
      <p>{children}</p>
    </div>
  );
}

export default AlertDestructive;
