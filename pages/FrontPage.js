import Link from "next/link";

export default function FrontPage() {
  return (
    <>
      <div className="relative flex flex-col min-h-screen text-lg text-sflPrimary">
        {/* overflow-hidden */}

        <nav className="container relative z-10 grid items-center justify-between px-4 py-3 mx-auto sm:grid-cols-12 sm:py-16 sm:px-0 ">
          <div className="col-span-6">
            <div className="w-40 sm:w-48">
              <img
                src="https://res.cloudinary.com/duqjf9tj1/image/upload/v1639701540/Assets/sfl_bxbwqe.svg"
                alt="SFL Logo"
                className="w-full"
              />
            </div>
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

        <main className="container flex flex-1 px-4 mx-auto sm:px-0 md:px-4">
          <div className="px-2 py-16 text-center sm:px-16">
            <p className="py-4 mx-auto text-base sm:max-w-md sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
              We have made it easy for you to setup and manage your business.
            </p>
            <h1 className="mb-8 text-5xl font-bold tracking-tighter sm:text-5xl md:text-8xl">
              Manage your Kenyan business from anywhere,{" "}
              <span className="block text-green-primary xl:inline">
                anytime.
              </span>
            </h1>

            <Link href="#">
              <a>
                <div className="inline-flex items-center py-2 text-base font-medium text-white rounded bg-sflPrimary hover:bg-green-primary md:py-4 md:text-lg md:px-7">
                  <span className="px-3">Join the waiting list</span>
                </div>
              </a>
            </Link>
          </div>
        </main>

        <footer className="container mx-auto">
          <div>
            <div className="px-4 py-6 overflow-hidden sm:mx-auto sm:max-w-7xl sm:px-6 lg:px-8">
              {/* <nav
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
              </nav> */}
            </div>
          </div>
        </footer>
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
