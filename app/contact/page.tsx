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
              <span className="text-xl font-bold">Email: </span>
              jackmkimbo@gmail.com
            </div>
            <div className="text-lg mb-3">
              <span className="text-xl font-bold">Phone: </span>
              +254758677651
            </div>
            <div>
              Your trusted advisor for valuable insights, custom-tailored
              solutions, and strategic recommendations to optimize your digital
              initiatives.
            </div>
          </div>
          <div className="sm:flex-1">
            <SendMailButton />
          </div>
        </div>
      </div>
    </div>
  );
}
