import React from "react";
import { CheckCircledIcon } from "@radix-ui/react-icons";

interface Props {
  children?: React.ReactNode;
}

export function AlertSuccess({ children }: Props) {
  if (!children) {
    return null;
  }
  return (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 test-sm text-emerald-500">
      <CheckCircledIcon className="h-4 w-4"></CheckCircledIcon>
      <p>{children}</p>
    </div>
  );
}

export default AlertSuccess;
