"use client";
import React from "react";
import { SendMail } from "../actions";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
export default function SendMailButton() {
  const { pending } = useFormStatus();
  return (
    <form action={SendMail} className="space-y-8">
      <div>
        <input
          type="email"
          id="email"
          name="email"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="Your email"
          required
        />
      </div>
      <div>
        <input
          type="text"
          id="subject"
          name="subject"
          className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="Subject"
          required
        />
      </div>
      <div className="sm:col-span-2">
        <textarea
          id="message"
          name="message"
          rows={6}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Leave a message..."
        ></textarea>
      </div>
      <button
        type="submit"
        //disabled={pending}
        className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 border border-gray-300 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Send message
      </button>
    </form>
  );
}
