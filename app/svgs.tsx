export const DiscordSVG = () => {  
    return(
        <svg width="36px" height="36px" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M5.5 16C10.5 18.5 13.5 18.5 18.5 16" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15.5 17.5L16.5 19.5C16.5 19.5 20.6713 18.1717 22 16C22 15 22.5301 7.85339 19 5.5C17.5 4.5 15 4 15 4L14 6H12" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8.52832 17.5L7.52832 19.5C7.52832 19.5 3.35699 18.1717 2.02832 16C2.02832 15 1.49823 7.85339 5.02832 5.5C6.52832 4.5 9.02832 4 9.02832 4L10.0283 6H12.0283" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8.5 14C7.67157 14 7 13.1046 7 12C7 10.8954 7.67157 10 8.5 10C9.32843 10 10 10.8954 10 12C10 13.1046 9.32843 14 8.5 14Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15.5 14C14.6716 14 14 13.1046 14 12C14 10.8954 14.6716 10 15.5 10C16.3284 10 17 10.8954 17 12C17 13.1046 16.3284 14 15.5 14Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
    );
};

export const InstagramSVG = () => {
    return(
        <svg
  width="36px"
  height="36px"
  strokeWidth="1.5"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  color="#ffffff"
>
  <path
    d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
    stroke="#ffffff"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z"
    stroke="#ffffff"
    strokeWidth="1.5"
  />
  <path
    d="M17.5 6.51L17.51 6.49889"
    stroke="#ffffff"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
    );
};

export const EmailSVG = () => {
    return(
        <svg
        width="36px"
        height="36px"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="#ffffff"
        >
        <path
            d="M7 9L12 12.5L17 9"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z"
            stroke="#ffffff"
            strokeWidth="1.5"
        />
        </svg>
    );
};

export const MenuSVG = () => {
    return(
        <svg
  width="36px"
  height="36px"
  strokeWidth="1.5"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  color="#cc0000"
>
  <path
    d="M3 5H11"
    stroke="#cc0000"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M3 12H16"
    stroke="#cc0000"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M3 19H21"
    stroke="#cc0000"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
    );
};

export const CloseSVG = () => {
    return(
      <svg
        width="36px"
        height="36px"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="#cc0000">
        <path
          d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426"
          stroke="#cc0000"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
};

export const GoogleSVG = ({ className, color } : { className: string, color?: string }) => {
  return (
    <svg
    className={className}
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color={color !== null ? color : "#1E1E1E"}
  >
    <path
      d="M15.5475 8.30327C14.6407 7.49361 13.4329 7 12.1089 7C9.28696 7 7 9.23899 7 12C7 14.761 9.28696 17 12.1089 17C15.5781 17 16.86 14.4296 17 12.4167H12.841"
      stroke={color !== null ? color : "#1E1E1E"}
      strokeWidth="1.5"
    />
    <path
      d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z"
      stroke={color !== null ? color : "#1E1E1E"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
</svg>
  );
};


export const MicrosoftSVG = ({ className } : { className: string }) => {
  return (
    <svg
      className={className}
      width="24px"
      height="24px"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#1E1E1E"
    >
      <path
        d="M4 16.9865V7.01353C4 6.71792 4.21531 6.46636 4.50737 6.42072L19.3074 4.10822C19.6713 4.05137 20 4.33273 20 4.70103V19.299C20 19.6673 19.6713 19.9486 19.3074 19.8918L4.50737 17.5793C4.21531 17.5336 4 17.2821 4 16.9865Z"
        stroke="#1E1E1E"
        strokeWidth="1.5"
      />
      <path d="M4 12H20" stroke="#1E1E1E" strokeWidth="1.5" />
      <path d="M10.5 5.5V18.5" stroke="#1E1E1E" strokeWidth="1.5" />
    </svg>
  );
};

// linkedin
export const LinkedInSVG = ({ className } : { className: string }) => {
  return (
    <svg
    className={className}
    width="24px"
    height="24px"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color="#1E1E1E"
  >
    <path
      d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z"
      stroke="#1E1E1E"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 17V13.5V10"
      stroke="#1E1E1E"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11 17V13.75M11 10V13.75M11 13.75C11 10 17 10 17 13.75V17"
      stroke="#1E1E1E"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 7.01L7.01 6.99889"
      stroke="#1E1E1E"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  );
};

// // twitter
export const TwitterSVG = ({ className } : { className: string }) => {
  return (
    <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color="#1E1E1E"
    className={className}
  >
    <path
      d="M16.8198 20.7684L3.75317 3.96836C3.44664 3.57425 3.72749 3 4.22678 3H6.70655C6.8917 3 7.06649 3.08548 7.18016 3.23164L20.2468 20.0316C20.5534 20.4258 20.2725 21 19.7732 21H17.2935C17.1083 21 16.9335 20.9145 16.8198 20.7684Z"
      stroke="#1E1E1E"
      strokeWidth="1.5"
    />
    <path
      d="M20 3L4 21"
      stroke="#1E1E1E"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
  );
}; 

export const InstagramSVG2 = ({ className }: { className: string }) => {
  return(
    <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
      stroke="#1E1E1E"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z"
      stroke="#1E1E1E"
      strokeWidth="1.5"
    />
    <path
      d="M17.5 6.51L17.51 6.49889"
      stroke="#1E1E1E"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  );
};

// // github
export const GitHubSVG = ({ className } : { className: string }) => {
  return(
    <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268"
      stroke="#1E1E1E"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267"
      stroke="#1E1E1E"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  );
};

export const PortfolioSVG = ({ className } : { className: string }) => {
  return(
    <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="#1E1E1E"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 12.5L8 14.5L7 18L8 21"
      stroke="#1E1E1E"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 20.5L16.5 18L14 17V13.5L17 12.5L21.5 13"
      stroke="#1E1E1E"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 5.5L18.5 7L15 7.5V10.5L17.5 9.5H19.5L21.5 10.5"
      stroke="#1E1E1E"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 10.5L5 8.5L7.5 8L9.5 5L8.5 3"
      stroke="#1E1E1E"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  );
};


export const ArrowRightSVG = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#CC0000"
      {...props}
    >
      <path
        d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5"
        stroke="#CC0000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};