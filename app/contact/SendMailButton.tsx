"use client";
import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
export default function SendMailButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      //disabled={pending}
      className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 border border-gray-300 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    >
      Send message
    </button>
  );
}
