"use client";

import * as React from "react";
import {
  DateField as AriaDateField,
  type DateFieldProps as AriaDateFieldProps,
  type DateValue,
} from "react-aria-components";
import { type VariantProps } from "tailwind-variants";
import { DateInput, DateSegment } from "./date-input";
import { fieldStyles } from "./field";
import { Field, type FieldProps } from "./field";
import { InputRoot, type inputStyles } from "./input";

interface DateFieldProps<T extends DateValue>
  extends DateFieldRootProps<T>,
    Omit<FieldProps, "children">,
    VariantProps<typeof inputStyles> {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  isLoading?: boolean;
  loaderPosition?: "prefix" | "suffix";
}

const DateField = <T extends DateValue>({
  className,
  size,
  label,
  description,
  errorMessage,
  prefix,
  suffix,
  isLoading,
  loaderPosition = "suffix",
  isRequired,
  isDisabled,
  necessityIndicator,
  contextualHelp,
  ...props
}: DateFieldProps<T>) => {
  return (
    <DateFieldRoot
      className={className}
      isRequired={isRequired}
      isDisabled={isLoading || isDisabled}
      {...props}
    >
      <Field
        label={label}
        description={description}
        errorMessage={errorMessage}
        isRequired={isRequired}
        necessityIndicator={necessityIndicator}
        contextualHelp={contextualHelp}
      >
        <InputRoot
          size={size}
          prefix={prefix}
          suffix={suffix}
          isLoading={isLoading}
          loaderPosition={loaderPosition}
        >
          <DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
        </InputRoot>
      </Field>
    </DateFieldRoot>
  );
};

interface DateFieldRootProps<T extends DateValue> extends Omit<AriaDateFieldProps<T>, "className"> {
  className?: string;
}
const DateFieldRoot = <T extends DateValue>({ className, ...props }: DateFieldRootProps<T>) => {
  const { root } = fieldStyles();
  return <AriaDateField className={root({ className })} {...props} />;
};

export type { DateFieldProps, DateFieldRootProps };
export { DateField, DateFieldRoot };
