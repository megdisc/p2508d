'use client';

import React, { Children, cloneElement, ReactElement, ReactNode, useId } from 'react';
import styles from './style.module.css';

interface FormFieldProps {
  label: string;
  error?: string;
  children: ReactNode;
}

export const FormField = ({ label, error, children }: FormFieldProps) => {
  const autoId = useId();
  // We expect a single React element as a child (e.g., <Input />, <Textarea />)
  const child = Children.only(children) as ReactElement<any>;
  
  // Use the child's id if it exists, otherwise use the auto-generated one
  const id = child.props.id || autoId;

  // Clone the child element to add necessary accessibility props
  const childWithProps = cloneElement(child, {
    id: id,
    'aria-invalid': !!error,
    'aria-describedby': error ? `${id}-error` : undefined,
  });

  return (
    <div className={styles.formField}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      {childWithProps}
      {error && (
        <p id={`${id}-error`} className={styles.errorMessage} role="alert">
          {error}
        </p>
      )}
    </div>
  );
};
