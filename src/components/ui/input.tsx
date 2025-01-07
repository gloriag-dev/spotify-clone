import * as React from "react";

import { cn } from "@/lib/utils";
import { ChangeEvent } from "react";

export interface ITextInputProps
  extends Omit<React.ComponentProps<"input">, "onChange"> {
  maxLength?: number;
  minLength?: number;
  value?: string;
  label?: string;
  placeholder?: string;
  format?: (value: string) => string;
  onChange?: (value: string, e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onBlur?: (e: ChangeEvent) => void;
}
const Input = React.forwardRef<HTMLInputElement, ITextInputProps>(
  ({ className, type, format, onChange, ...props }, ref) => {
    const onChangeInt = (event: ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      const value = format?.(event.target.value) ?? event.target.value;
      onChange?.(value, event);
    };
    return (
      <input
        type={type}
        onChange={onChangeInt}
        className={cn(
          "flex h-11  rounded-md border border-secondary/50 hover:border-secondary bg-transparent px-3 py-1 text-secondary shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-slate-950 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-slate-800 dark:file:text-slate-50 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
