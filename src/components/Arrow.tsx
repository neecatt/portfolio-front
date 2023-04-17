import { motion } from "framer-motion";

const Arrow = () => {
  return (
    <motion.svg
      fill="#ffffff"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="206px"
      height="206px"
      viewBox="0 0 370.76 370.76"
      xmlSpace="preserve"
      transform="rotate(45)"
      stroke="#ffffff"
      initial="hidden"
      animate="visible"
      className={"m-7 p-0"}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <g>
            {" "}
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                delay: 3,
                duration: 2,
                repeatDelay: 2,
              }}
              cx="3"
              cy="11"
              r="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M348.034,154.646c-1.225-48.348-8.568-102.204-44.677-137.7c-30.6-29.376-77.111-16.524-105.876,7.956 c-38.556,33.048-50.184,82.008-57.528,130.356c-5.508,39.167-9.18,78.335-15.912,117.503c-3.672,20.196-9.18,41.004-20.196,58.752 c-17.136,28.152-53.244,20.808-67.932-5.508c-11.016-19.584-10.404-45.288-13.464-66.708c-3.06-25.704-4.896-51.408-5.508-77.724 C15.718,124.658,19.39,63.458,43.87,10.826c1.836-3.672-3.06-6.12-5.508-3.06C10.21,46.934,5.314,99.566,2.866,146.69 c-2.448,47.736,1.224,97.308,8.568,145.043c6.12,37.332,20.196,70.38,62.424,72.216c31.824,1.225,48.348-33.048,56.916-58.14 c28.764-86.292,0-214.2,82.008-274.788c39.168-28.764,77.111-17.136,100.367,22.644c15.301,26.316,17.137,61.812,18.973,91.8 c3.06,55.691-4.284,111.383-4.896,167.076c0,10.403,15.912,10.403,15.912,0C343.75,259.91,349.258,207.277,348.034,154.646z"
            ></motion.path>{" "}
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                delay: 2,
                duration: 2,
              }}
              cx="3"
              cy="11"
              r="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M365.17,305.81c-2.448-2.448-5.508-1.836-7.956,0c-6.12,4.896-4.896,17.748-6.732,25.092 c-1.836,7.345-3.672,14.076-7.344,20.809c-11.628-10.404-21.42-22.645-30.6-35.496c-4.284-6.12-14.076-1.225-10.404,6.12 c9.18,17.748,22.644,33.66,37.944,46.512c4.283,3.06,9.18,2.448,12.239-1.836c6.732-9.792,10.404-20.809,13.465-32.437 C367.006,327.229,371.901,311.93,365.17,305.81z"
            ></motion.path>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </motion.svg>
  );
};

export default Arrow;
