import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation state
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //   Handling form submit

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
    }
    console.log(fullname, email, subject, message);
  };

  return (
    <>
      <div className="relative flex flex-col min-h-screen text-lg text-sflPrimary">
        {/* overflow-hidden */}

        <nav className="container relative z-10 grid items-center justify-between grid-cols-12 px-4 py-3 mx-auto sm:py-16 sm:px-0 ">
          <div className="col-span-6">
            <Link href="/">
              <a>
                <div className="w-40 sm:w-48">
                  <img
                    src="https://res.cloudinary.com/duqjf9tj1/image/upload/v1639701540/Assets/sfl_bxbwqe.svg"
                    alt="SFL Logo"
                    className="w-full"
                  />
                </div>
              </a>
            </Link>
          </div>
          <div className="w-full col-span-6 ">
            <div className="float-right ">
              <div className="flex items-center space-x-4 ">
                <p>Already have an account?</p>

                <Link href="#">
                  <a>
                    <span className="pb-1 font-semibold border-b-2 text-sflPrimary ">
                      Sign In
                    </span>{" "}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="container grid grid-cols-1 gap-4 p-8 pt-10 mx-auto md:grid-cols-2 lg:px-40 bg-blue-50 dark:bg-blue-900 md:h-96">
          <div className="mx-auto mb-10 md:mt-20">
            <div className="inline-block bg-green-primary badge rounded-xl">
              <p className="px-4 py-1 text-base font-light text-gray-50 ">
                Claim your spot
              </p>
            </div>
            <h1 className="mt-4 text-4xl font-bold text-gray-700 dark:text-gray-50">
              Join our early access list{" "}
            </h1>
            <p className="mt-4 text-sm font-light text-gray-700 dark:text-gray-200">
              Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut
              libero malesuada feugiat. Vestibulum ac diam sit amet quam
              vehicula elementum sed sit amet dui.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col px-8 py-8 bg-white rounded-lg shadow-xl dark:bg-blue-500"
          >
            <h1 className="text-2xl font-bold dark:text-gray-50"></h1>

            <label
              htmlFor="fullname"
              className="mt-8 font-light text-gray-500 dark:text-gray-50"
            >
              Full name<span className="text-red-500 dark:text-gray-50">*</span>
            </label>
            <input
              type="text"
              value={fullname}
              onChange={(e) => {
                setFullname(e.target.value);
              }}
              name="fullname"
              className="py-2 pl-4 font-light text-gray-500 bg-transparent border-b focus:outline-none focus:rounded-md focus:ring-1 ring-green-500"
            />
            {errors?.fullname && (
              <p className="text-red-500">Fullname cannot be empty.</p>
            )}

            <label
              htmlFor="email"
              className="mt-4 font-light text-gray-500 dark:text-gray-50"
            >
              E-mail<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="py-2 pl-4 font-light text-gray-500 bg-transparent border-b focus:outline-none focus:rounded-md focus:ring-1 ring-green-500"
            />
            {errors?.email && (
              <p className="text-red-500">Email cannot be empty.</p>
            )}

            <label
              htmlFor="subject"
              className="mt-4 font-light text-gray-500 dark:text-gray-50"
            >
              Subject<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subject"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              className="py-2 pl-4 font-light text-gray-500 bg-transparent border-b focus:outline-none focus:rounded-md focus:ring-1 ring-green-500"
            />
            {errors?.subject && (
              <p className="text-red-500">Subject cannot be empty.</p>
            )}
            <label
              htmlFor="message"
              className="mt-4 font-light text-gray-500 dark:text-gray-50"
            >
              Message<span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className="py-2 pl-4 font-light text-gray-500 bg-transparent border-b focus:outline-none focus:rounded-md focus:ring-1 ring-green-500"
            ></textarea>
            {errors?.message && (
              <p className="text-red-500">Message body cannot be empty.</p>
            )}
            <div className="flex flex-row items-center justify-start">
              <button
                type="submit"
                className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
              >
                {buttonText}
              </button>
            </div>
            <div className="text-left">
              {showSuccessMessage && (
                <p className="my-2 text-sm font-semibold text-green-500">
                  Thankyou! Your Message has been delivered.
                </p>
              )}
              {showFailureMessage && (
                <p className="text-red-500">
                  Oops! Something went wrong, please try again.
                </p>
              )}
            </div>
          </form>
        </div>

        {/* <footer className="container mx-auto">
          <div>
            <div className="px-4 py-6 overflow-hidden sm:mx-auto sm:max-w-7xl sm:px-6 lg:px-8">
              <nav
                className="flex flex-wrap justify-center -mx-5 -my-2"
                aria-label="Footer"
              >
                <div className="flex space-x-6 text-base text-gray-500 hover:text-gray-900">
                  <Link href="#">
                    <a>
                      <div className="">
                        <span className="">About Us</span>
                      </div>
                    </a>
                  </Link>

                  <Link href="#">
                    <a>
                      <div className="">
                        <span className=""> Legal</span>
                      </div>
                    </a>
                  </Link>

                  <Link href="#">
                    <a>
                      <div className="">
                        <span className="">About Us</span>
                      </div>
                    </a>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </footer> */}
        <div className="absolute right-0 h-screen -z-10">
          <svg
            style={{ width: "inherit", height: "inherit" }}
            viewBox="0 0 496 900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="495.5"
              cy="453.5"
              r="495.5"
              fill="#431646"
              fillOpacity="0.03"
            ></circle>
          </svg>
        </div>
      </div>
    </>
  );
}
