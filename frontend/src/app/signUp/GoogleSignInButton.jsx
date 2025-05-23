export const GoogleSignInButton = () => {
  return (
    <button className="flex gap-2 justify-center items-center w-full bg-white rounded-lg shadow h-[40px]">
      <div className="w-[20px] h-[20px]">
        <svg
          width="20"
          height="20"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="24"
            height="24"
            transform="translate(0.5)"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.54 12.2613C23.54 11.4459 23.4668 10.6618 23.3309 9.90906H12.5V14.3575H18.6891C18.4225 15.795 17.6123 17.0129 16.3943 17.8284V20.7138H20.1109C22.2855 18.7118 23.54 15.7636 23.54 12.2613Z"
            fill="#4285F4"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.5 23.4998C15.605 23.4998 18.2081 22.47 20.1109 20.7137L16.3943 17.8282C15.3645 18.5182 14.0472 18.9259 12.5 18.9259C9.50474 18.9259 6.96951 16.903 6.06519 14.1848H2.22314V17.1644C4.11542 20.9228 8.00451 23.4998 12.5 23.4998Z"
            fill="#34A853"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.06523 14.1851C5.83523 13.4951 5.70455 12.7581 5.70455 12.0001C5.70455 11.2422 5.83523 10.5051 6.06523 9.81512V6.83557H2.22318C1.44432 8.38807 1 10.1444 1 12.0001C1 13.8558 1.44432 15.6122 2.22318 17.1647L6.06523 14.1851Z"
            fill="#FBBC05"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.5 5.07386C14.1884 5.07386 15.7043 5.65409 16.8961 6.79364L20.1945 3.49523C18.2029 1.63955 15.5997 0.5 12.5 0.5C8.00451 0.5 4.11542 3.07705 2.22314 6.83545L6.06519 9.815C6.96951 7.09682 9.50474 5.07386 12.5 5.07386Z"
            fill="#EA4335"
          />
        </svg>
      </div>
      <span className="text-sm text-black text-opacity-50">
        Sign In with Google
      </span>
    </button>
  );
};
