import { SendMail } from "../actions";
import SendMailButton from "./SendMailButton";

export default function Contact() {
  return (
    <div className="flex mt-5 h-full flex-col items-center justify-between overflow-y-auto">
      <div className="w-full flex flex-col h-screen p-5 pb-10 lg:w-3/5 mx-auto ">
        <h2 className="text-5xl mb-5">Contact Me</h2>
        <div className="w-full border-b border-gray-600 lg:w-2/3"></div>
        <div className="w-full flex flex-col mt-12 mb-7 sm:flex-row h-fit ">
          <div className="sm:w-5/12 mb-7 lg:mb-0">
            <div className="text-3xl mb-5">Get in touch</div>
            <div className="text-lg mb-3">
              <span className="text-xl font-bold">Email:</span>
              jackmkimbo@gmail.com
            </div>
            <div className="text-lg mb-3">
              <span className="text-xl font-bold">Phone:</span>
              +254758677651
            </div>
            <div>
              Your trusted advisor for valuable insights, custom-tailored
              solutions, and strategic recommendations to optimize your digital
              initiatives.
            </div>
          </div>
          <div className="sm:flex-1">
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
              <SendMailButton />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
