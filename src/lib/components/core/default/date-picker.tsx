"use client";

import * as React from "react";
import {
  DatePicker as AriaDatePicker,
  Dialog as AriaDialog,
  type DatePickerProps as AriaDatePickerProps,
  type DateValue,
} from "react-aria-components";
import { type VariantProps } from "tailwind-variants";
import { CalendarIcon } from "@/lib/icons";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { DateInput, DateSegment } from "./date-input";
import { fieldStyles } from "./field";
import { Field, type FieldProps } from "./field";
import { InputRoot, type inputStyles } from "./input";
import { Overlay } from "./overlay";

interface DatePickerProps<T extends DateValue>
  extends DatePickerRootProps<T>,
    Omit<FieldProps, "children">,
    VariantProps<typeof inputStyles> {
  prefix?: React.ReactNode;
  isLoading?: boolean;
}

const DatePicker = <T extends DateValue>({
  className,
  size,
  label,
  description,
  errorMessage,
  prefix,
  isLoading,
  isRequired,
  isDisabled,
  necessityIndicator,
  contextualHelp,
  ...props
}: DatePickerProps<T>) => {
  return (
    <DatePickerRoot
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
        <InputRoot size={size} prefix={prefix} isLoading={isLoading} loaderPosition="prefix">
          <DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
          <Button size="sm" shape="square" className="h-full rounded-none">
            <CalendarIcon />
          </Button>
        </InputRoot>
      </Field>
      <Overlay type="popover">
        <AriaDialog className="outline-none">
          <Calendar className="mx-auto border-none" />
        </AriaDialog>
      </Overlay>
    </DatePickerRoot>
  );
};

interface DatePickerRootProps<T extends DateValue>
  extends Omit<AriaDatePickerProps<T>, "className"> {
  className?: string;
}
const DatePickerRoot = <T extends DateValue>({ className, ...props }: DatePickerRootProps<T>) => {
  const { root } = fieldStyles();
  return <AriaDatePicker className={root({ className })} {...props} />;
};

export type { DatePickerProps, DatePickerRootProps };
export { DatePicker, DatePickerRoot };
