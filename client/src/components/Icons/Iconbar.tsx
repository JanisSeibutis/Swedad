import "./Iconbar.css"

export const Iconbar = () => {
  return (
    <>
      <div className="iconbar-wrap">
        <div className="nav-icon-wrap">
          <a href="" className="nav-icon">
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#767473"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.618 23.319c-6.9 0-10.7-3.8-10.7-10.7 0-6.9 3.8-10.701 10.7-10.701 6.9 0 10.7 3.8 10.7 10.7 0 3.458-.923 6.134-2.745 7.955-1.821 1.822-4.497 2.745-7.955 2.745zm17.491 5.725l-7.677-7.678c1.854-2.155 2.804-5.087 2.804-8.748C25.236 4.6 20.636 0 12.618 0S0 4.6 0 12.618c0 8.019 4.6 12.618 12.618 12.618 3.485 0 6.317-.85 8.44-2.531l7.696 7.695 1.355-1.356z"
              />
            </svg>
            <span className="icon-text">Annonser</span>
          </a>
        </div>

        <div className="nav-icon-wrap">
          <a href="" className="nav-icon">
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#767473"
            >
              <path d="M11 16h10v-2H11v2zM21 11H11V9h10v2z" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 12.75C0 4.646 5.831 0 16 0c10.168 0 16 4.647 16 12.75 0 5.301-2.483 9.167-7.183 11.186l-10.38 7.408 1.34-5.847C5.748 25.43 0 20.792 0 12.75zm17.564 13.906l6.373-4.519C27.96 20.444 30 17.285 30 12.75 30 5.817 25.029 2 16 2 6.972 2 2 5.817 2 12.75c0 6.931 4.972 10.748 14 10.748.34 0 .674-.007 1.003-.018l1.297-.043-.736 3.22z"
              />
            </svg>
            <span className="icon-text">Meddelanden</span>
          </a>
        </div>

        <div className="nav-icon-wrap">
          <a href="" className="nav-icon">
            <svg
              viewBox="0 0 32 32"
              fill="none"
              width="20"
              height="20"
              color="#767473"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.869 27c0 1.654-1.346 3-3 3s-3-1.346-3-3c0-.345.08-.678.194-1h5.612c.114.321.194.654.194 1zm-12-7.697V11c0-4.962 4.038-9 9-9s9 4.038 9 9v8.303L27.999 24H3.739l3.13-4.697zM31.738 26l-4.87-7.303V11c0-6.065-4.934-11-11-11-6.064 0-11 4.935-11 11v7.697L0 26h10.98a4.926 4.926 0 00-.111 1c0 2.757 2.243 5 5 5s5-2.243 5-5c0-.338-.044-.672-.112-1h10.98z"
                fill="#767473"
              />
            </svg>
            <span className="icon-text">Bevakningar</span>
          </a>
        </div>

        <div className="nav-icon-wrap">
          <a href="" className="nav-icon">
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#767473"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.906 25.587C7.263 28.473 11.008 30 16 30c4.942 0 8.66-1.5 11.021-4.33-2.032-.759-5.975-1.433-11.169-1.433-4.448 0-8.584.521-10.946 1.35zM30 16c0-9.028-4.972-14-14-14C6.972 2 2 6.972 2 16c0 3.136.613 5.771 1.775 7.89 2.546-1.022 7.07-1.653 12.077-1.653 5.218 0 9.824.661 12.324 1.743C29.37 21.847 30 19.181 30 16zM0 16C0 5.832 5.832 0 16 0s16 5.832 16 16-5.832 16-16 16S0 26.168 0 16zm20.563-3.068A4.568 4.568 0 0016 8.37a4.568 4.568 0 00-4.563 4.563A4.568 4.568 0 0016 17.495a4.568 4.568 0 004.563-4.563zm2 0A6.57 6.57 0 0116 19.495a6.57 6.57 0 01-6.563-6.563A6.57 6.57 0 0116 6.37a6.57 6.57 0 016.563 6.563z"
              />
            </svg>
            <span className="icon-text">bmw</span>
          </a>
        </div>
      </div>
    </>
  )
}
