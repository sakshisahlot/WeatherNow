import React from "react";

// Define weather icons
const weatherIcons = {
  clear: (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="36" cy="36" r="30" fill="url(#sun_gradient)" />
      <defs>
        <linearGradient
          id="sun_gradient"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
          gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FF8C00" />
        </linearGradient>
      </defs>
    </svg>
  ),
  rain: (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 54H34.5H36H55.5C64.6127 54 72 46.6127 72 37.5C72 28.3873 64.6127 21 55.5 21C55.1382 21 54.7791 21.0116 54.4231 21.0346C50.6566 13.879 43.1481 9 34.5 9C23.6003 9 14.5107 16.7504 12.4418 27.0409C5.48057 27.5806 0 33.4003 0 40.5C0 47.9558 6.04416 54 13.5 54Z"
        fill="#E7F1FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 54H34.5H36H55.5C64.6127 54 72 46.6127 72 37.5C72 28.3873 64.6127 21 55.5 21C55.1382 21 54.7791 21.0116 54.4231 21.0346C50.6566 13.879 43.1481 9 34.5 9C23.6003 9 14.5107 16.7504 12.4418 27.0409C5.48057 27.5806 0 33.4003 0 40.5C0 47.9558 6.04416 54 13.5 54Z"
        fill="url(#paint0_linear_537_36557)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 54H34.5H36H55.5C64.6127 54 72 46.6127 72 37.5C72 28.3873 64.6127 21 55.5 21C55.1382 21 54.7791 21.0116 54.4231 21.0346C50.6566 13.879 43.1481 9 34.5 9C23.6003 9 14.5107 16.7504 12.4418 27.0409C5.48057 27.5806 0 33.4003 0 40.5C0 47.9558 6.04416 54 13.5 54Z"
        fill="url(#paint1_linear_537_36557)"
      />
      <path
        d="M0 40.5C0 33.0442 6.04416 27 13.5 27H18C27.9411 27 36 35.0589 36 45V54H13.5C6.04416 54 0 47.9558 0 40.5Z"
        fill="url(#paint2_radial_537_36557)"
      />
      <path
        d="M12 31.5C12 19.0736 22.0736 9 34.5 9C46.9264 9 57 19.0736 57 31.5C57 43.9264 46.9264 54 34.5 54C22.0736 54 12 43.9264 12 31.5Z"
        fill="url(#paint3_radial_537_36557)"
      />
      <circle
        cx="55.5"
        cy="37.5"
        r="16.5"
        fill="url(#paint4_radial_537_36557)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M45 61.5002V41.1006C45 39.2254 47.2709 38.2904 48.5912 39.6219L62.8413 53.9931C64.7903 55.8994 66 58.5585 66 61.5002C66 67.2992 61.299 72.0002 55.5 72.0002C49.701 72.0002 45 67.2992 45 61.5002Z"
        fill="#C4C4C4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M45 61.5002V41.1006C45 39.2254 47.2709 38.2904 48.5912 39.6219L62.8413 53.9931C64.7903 55.8994 66 58.5585 66 61.5002C66 67.2992 61.299 72.0002 55.5 72.0002C49.701 72.0002 45 67.2992 45 61.5002Z"
        fill="url(#paint5_linear_537_36557)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 59.4411V43.3308C18 41.4556 20.2709 40.5206 21.5912 41.8522L32.5983 52.9529C34.6711 54.6017 36 57.1458 36 60.0002C36 64.9708 31.9706 69.0002 27 69.0002C22.0294 69.0002 18 64.9708 18 60.0002C18 59.81 18.0059 59.6212 18.0175 59.4339L18 59.4411Z"
        fill="#C4C4C4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 59.4411V43.3308C18 41.4556 20.2709 40.5206 21.5912 41.8522L32.5983 52.9529C34.6711 54.6017 36 57.1458 36 60.0002C36 64.9708 31.9706 69.0002 27 69.0002C22.0294 69.0002 18 64.9708 18 60.0002C18 59.81 18.0059 59.6212 18.0175 59.4339L18 59.4411Z"
        fill="url(#paint6_linear_537_36557)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 37.4998V24.4358C27 22.5606 29.2709 21.6256 30.5912 22.9571L39.282 31.7218C40.9423 33.0975 42 35.1751 42 37.4998C42 41.642 38.6421 44.9998 34.5 44.9998C30.4968 44.9998 27.2262 41.8635 27.0112 37.9139L27 37.9186V37.4998Z"
        fill="#C4C4C4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 37.4998V24.4358C27 22.5606 29.2709 21.6256 30.5912 22.9571L39.282 31.7218C40.9423 33.0975 42 35.1751 42 37.4998C42 41.642 38.6421 44.9998 34.5 44.9998C30.4968 44.9998 27.2262 41.8635 27.0112 37.9139L27 37.9186V37.4998Z"
        fill="url(#paint7_linear_537_36557)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_537_36557"
          x1="22.5"
          y1="19.5"
          x2="36"
          y2="54"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#C6D8F5" />
          <stop offset="1" stopColor="#89AFD1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_537_36557"
          x1="32.0998"
          y1="55.5925"
          x2="31.1538"
          y2="9"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#547DDA" />
          <stop offset="0.257422" stopColor="#93C2FF" stopOpacity="0" />
        </linearGradient>
        <radialGradient
          id="paint2_radial_537_36557"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(19.5 54) rotate(-127.875) scale(28.5044 32.9871)">
          <stop offset="0.683784" stopColor="#8FABDD" stopOpacity="0" />
          <stop offset="1" stopColor="#5582D3" />
        </radialGradient>
        <radialGradient
          id="paint3_radial_537_36557"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(34.5 49.5) rotate(-90) scale(40.5)">
          <stop offset="0.598765" stopColor="#C7DFFF" stopOpacity="0" />
          <stop offset="1" stopColor="#6B97E6" />
        </radialGradient>
        <radialGradient
          id="paint4_radial_537_36557"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(46.7 49.6) rotate(-56.3099) scale(31.7288)">
          <stop offset="0.47771" stopColor="#8FABDD" stopOpacity="0" />
          <stop offset="1" stopColor="#5582D3" />
        </radialGradient>
        <linearGradient
          id="paint5_linear_537_36557"
          x1="60.7509"
          y1="69.8232"
          x2="41.7826"
          y2="48.9185"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#0066FF" />
          <stop offset="1" stopColor="#65ACFF" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_537_36557"
          x1="31.5008"
          y1="67.1682"
          x2="15.5695"
          y2="49.2848"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#0066FF" />
          <stop offset="1" stopColor="#65ACFF" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_537_36557"
          x1="38.2506"
          y1="43.5046"
          x2="25.2817"
          y2="28.6405"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#0066FF" />
          <stop offset="1" stopColor="#65ACFF" />
        </linearGradient>
      </defs>
    </svg>
  ),
  haze: (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="36" cy="36" r="30" fill="url(#paint0_linear_59_26715)" />
      <circle cx="36" cy="36" r="30" fill="url(#paint1_linear_59_26715)" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M69 15C70.6569 15 72 16.3431 72 18C72 19.6569 70.6569 21 69 21H36C34.3431 21 33 19.6569 33 18C33 16.3431 34.3431 15 36 15H69ZM3 39C1.34315 39 0 40.3431 0 42C0 43.6569 1.34315 45 3 45H36C37.6569 45 39 43.6569 39 42C39 40.3431 37.6569 39 36 39H3ZM45 42C45 40.3431 46.3431 39 48 39H57C58.6569 39 60 40.3431 60 42C60 43.6569 58.6569 45 57 45H48C46.3431 45 45 43.6569 45 42ZM24 15C25.6569 15 27 16.3431 27 18C27 19.6569 25.6569 21 24 21H15C13.3431 21 12 19.6569 12 18C12 16.3431 13.3431 15 15 15H24ZM0 54C0 52.3431 1.34315 51 3 51H57C58.6569 51 60 52.3431 60 54C60 55.6569 58.6569 57 57 57H3C1.34315 57 0 55.6569 0 54ZM15 27C13.3431 27 12 28.3431 12 30C12 31.6569 13.3431 33 15 33H69C70.6569 33 72 31.6569 72 30C72 28.3431 70.6569 27 69 27H15Z"
        fill="url(#paint2_linear_59_26715)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_59_26715"
          x1="14.4375"
          y1="14.4375"
          x2="65.9965"
          y2="60.9334"
          gradientUnits="userSpaceOnUse">
          <stop offset="0.162966" stopColor="#FFE975" />
          <stop offset="0.53915" stopColor="#FFB729" />
          <stop offset="0.742056" stopColor="#FF9900" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_59_26715"
          x1="51.0026"
          y1="62.0423"
          x2="20.9976"
          y2="10.072"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#E25A01" />
          <stop offset="1" stopColor="#FFD400" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_59_26715"
          x1="43.0435"
          y1="57"
          x2="50.6004"
          y2="17.4094"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#DAC48C" />
          <stop offset="1" stopColor="#F8F3E2" />
        </linearGradient>
      </defs>
    </svg>
  ),
  clouds: (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.23591 26.8351C18.6619 26.8351 27.1138 18.3528 27.1138 7.88937C27.1138 6.39548 26.9415 4.94198 26.6158 3.54778C26.2214 1.85943 27.7278 0.167238 29.2618 0.975319C35.9033 4.47393 40.4335 11.4621 40.4335 19.5122C40.4335 31.067 31.1 40.434 19.5865 40.434C11.4139 40.434 4.33961 35.7143 0.922322 28.8425C0.149838 27.2892 1.87839 25.8192 3.55912 26.2492C5.0547 26.6317 6.62164 26.8351 8.23591 26.8351Z"
        fill="url(#paint0_linear_59_27066)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 69H34.5H36H55.5C64.6127 69 72 61.6127 72 52.5C72 43.3873 64.6127 36 55.5 36C55.1382 36 54.7791 36.0116 54.4231 36.0346C50.6566 28.879 43.1481 24 34.5 24C23.6003 24 14.5107 31.7504 12.4418 42.0409C5.48057 42.5806 0 48.4003 0 55.5C0 62.9558 6.04416 69 13.5 69Z"
        fill="#E7F1FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 69H34.5H36H55.5C64.6127 69 72 61.6127 72 52.5C72 43.3873 64.6127 36 55.5 36C55.1382 36 54.7791 36.0116 54.4231 36.0346C50.6566 28.879 43.1481 24 34.5 24C23.6003 24 14.5107 31.7504 12.4418 42.0409C5.48057 42.5806 0 48.4003 0 55.5C0 62.9558 6.04416 69 13.5 69Z"
        fill="url(#paint1_linear_59_27066)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 69H34.5H36H55.5C64.6127 69 72 61.6127 72 52.5C72 43.3873 64.6127 36 55.5 36C55.1382 36 54.7791 36.0116 54.4231 36.0346C50.6566 28.879 43.1481 24 34.5 24C23.6003 24 14.5107 31.7504 12.4418 42.0409C5.48057 42.5806 0 48.4003 0 55.5C0 62.9558 6.04416 69 13.5 69Z"
        fill="url(#paint2_linear_59_27066)"
      />
      <path
        d="M0 55.5C0 48.0442 6.04416 42 13.5 42H18C27.9411 42 36 50.0589 36 60V69H13.5C6.04416 69 0 62.9558 0 55.5Z"
        fill="url(#paint3_radial_59_27066)"
      />
      <path
        d="M12 46.5C12 34.0736 22.0736 24 34.5 24C46.9264 24 57 34.0736 57 46.5C57 58.9264 46.9264 69 34.5 69C22.0736 69 12 58.9264 12 46.5Z"
        fill="url(#paint4_radial_59_27066)"
      />
      <circle
        cx="55.5"
        cy="52.5"
        r="16.5"
        fill="url(#paint5_radial_59_27066)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_59_27066"
          x1="37.3518"
          y1="38.7644"
          x2="39.0293"
          y2="-0.616951"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#EE7F18" />
          <stop offset="0.56298" stopColor="#EEB82E" />
          <stop offset="1" stopColor="#FEB649" stopOpacity="0.78" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_59_27066"
          x1="22.5"
          y1="34.5"
          x2="36"
          y2="69"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#C6D8F5" />
          <stop offset="1" stopColor="#89AFD1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_59_27066"
          x1="32.0998"
          y1="70.5925"
          x2="31.1538"
          y2="24"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#547DDA" />
          <stop offset="0.257422" stopColor="#93C2FF" stopOpacity="0" />
        </linearGradient>
        <radialGradient
          id="paint3_radial_59_27066"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(19.5 69) rotate(-127.875) scale(28.5044 32.9871)">
          <stop offset="0.683784" stopColor="#8FABDD" stopOpacity="0" />
          <stop offset="1" stopColor="#5582D3" />
        </radialGradient>
        <radialGradient
          id="paint4_radial_59_27066"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(34.5 64.5) rotate(-90) scale(40.5)">
          <stop offset="0.598765" stopColor="#C7DFFF" stopOpacity="0" />
          <stop offset="1" stopColor="#6B97E6" />
        </radialGradient>
        <radialGradient
          id="paint5_radial_59_27066"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(46.7 64.6) rotate(-56.3099) scale(31.7288)">
          <stop offset="0.47771" stopColor="#8FABDD" stopOpacity="0" />
          <stop offset="1" stopColor="#5582D3" />
        </radialGradient>
      </defs>
    </svg>
  ),
  snow: (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 54H34.5H36H55.5C64.6127 54 72 46.6127 72 37.5C72 28.3873 64.6127 21 55.5 21C55.1382 21 54.7791 21.0116 54.4231 21.0346C50.6566 13.879 43.1481 9 34.5 9C23.6003 9 14.5107 16.7504 12.4418 27.0409C5.48057 27.5806 0 33.4003 0 40.5C0 47.9558 6.04416 54 13.5 54Z"
        fill="#E7F1FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 54H34.5H36H55.5C64.6127 54 72 46.6127 72 37.5C72 28.3873 64.6127 21 55.5 21C55.1382 21 54.7791 21.0116 54.4231 21.0346C50.6566 13.879 43.1481 9 34.5 9C23.6003 9 14.5107 16.7504 12.4418 27.0409C5.48057 27.5806 0 33.4003 0 40.5C0 47.9558 6.04416 54 13.5 54Z"
        fill="url(#paint0_linear_537_36598)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 54H34.5H36H55.5C64.6127 54 72 46.6127 72 37.5C72 28.3873 64.6127 21 55.5 21C55.1382 21 54.7791 21.0116 54.4231 21.0346C50.6566 13.879 43.1481 9 34.5 9C23.6003 9 14.5107 16.7504 12.4418 27.0409C5.48057 27.5806 0 33.4003 0 40.5C0 47.9558 6.04416 54 13.5 54Z"
        fill="url(#paint1_linear_537_36598)"
      />
      <path
        d="M0 40.5C0 33.0442 6.04416 27 13.5 27H18C27.9411 27 36 35.0589 36 45V54H13.5C6.04416 54 0 47.9558 0 40.5Z"
        fill="url(#paint2_radial_537_36598)"
      />
      <path
        d="M12 31.5C12 19.0736 22.0736 9 34.5 9C46.9264 9 57 19.0736 57 31.5C57 43.9264 46.9264 54 34.5 54C22.0736 54 12 43.9264 12 31.5Z"
        fill="url(#paint3_radial_537_36598)"
      />
      <circle
        cx="55.5"
        cy="37.5"
        r="16.5"
        fill="url(#paint4_radial_537_36598)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M55.5 36C56.3284 36 57 36.6716 57 37.5V39.8787L57.4393 39.4393C58.0251 38.8536 58.9749 38.8536 59.5607 39.4393C60.1465 40.0251 60.1465 40.9749 59.5607 41.5607L57 44.1213V48.4021L60.7077 46.2615L61.6449 42.7639C61.8593 41.9637 62.6818 41.4888 63.482 41.7032C64.2822 41.9176 64.7571 42.7401 64.5426 43.5403L64.3819 44.1402L66.4417 42.951C67.1591 42.5367 68.0765 42.7826 68.4907 43.5C68.9049 44.2174 68.6591 45.1348 67.9417 45.549L65.8815 46.7385L66.482 46.8994C67.2822 47.1138 67.7571 47.9363 67.5426 48.7365C67.3282 49.5367 66.5057 50.0116 65.7055 49.7971L62.2073 48.8598L58.5 51.0002L62.2067 53.1402L65.705 52.2029C66.5052 51.9884 67.3277 52.4633 67.5421 53.2635C67.7565 54.0637 67.2816 54.8862 66.4814 55.1006L65.8809 55.2615L67.941 56.451C68.6585 56.8652 68.9043 57.7826 68.4901 58.5C68.0759 59.2174 67.1585 59.4633 66.441 59.049L64.3814 57.8599L64.5421 58.4597C64.7565 59.2599 64.2816 60.0824 63.4814 60.2968C62.6812 60.5112 61.8587 60.0363 61.6443 59.2361L60.7071 55.7386L57 53.5983V57.8787L59.5607 60.4393C60.1465 61.0251 60.1465 61.9749 59.5607 62.5607C58.9749 63.1464 58.0251 63.1464 57.4393 62.5607L57 62.1213V64.5C57 65.3284 56.3284 66 55.5 66C54.6716 66 54 65.3284 54 64.5V62.1213L53.5607 62.5607C52.9749 63.1464 52.0251 63.1464 51.4393 62.5607C50.8536 61.9749 50.8536 61.0251 51.4393 60.4393L54 57.8787V53.5983L50.293 55.7385L49.3557 59.2365C49.1413 60.0367 48.3188 60.5116 47.5186 60.2971C46.7184 60.0827 46.2435 59.2602 46.4579 58.46L46.6187 57.8598L44.559 59.049C43.8415 59.4633 42.9241 59.2174 42.5099 58.5C42.0957 57.7826 42.3415 56.8652 43.059 56.451L45.1187 55.2618L44.5186 55.101C43.7184 54.8866 43.2435 54.0641 43.4579 53.2639C43.6723 52.4637 44.4948 51.9888 45.295 52.2032L48.7929 53.1405L52.5 51.0002L48.7923 48.8595L45.2945 49.7968C44.4943 50.0112 43.6718 49.5363 43.4574 48.7361C43.243 47.9359 43.7178 47.1134 44.518 46.899L45.1181 46.7382L43.0584 45.549C42.3409 45.1348 42.0951 44.2174 42.5093 43.5C42.9235 42.7826 43.8409 42.5367 44.5584 42.951L46.6182 44.1402L46.4574 43.54C46.243 42.7398 46.7178 41.9173 47.518 41.7029C48.3182 41.4884 49.1407 41.9633 49.3551 42.7635L50.2924 46.2615L54 48.4021V44.1213L51.4393 41.5607C50.8536 40.9749 50.8536 40.0251 51.4393 39.4393C52.0251 38.8536 52.9749 38.8536 53.5607 39.4393L54 39.8787V37.5C54 36.6716 54.6716 36 55.5 36Z"
        fill="url(#paint5_linear_537_36598)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5 42C20.3284 42 21 42.6716 21 43.5V45.8787L21.4393 45.4393C22.0251 44.8536 22.9749 44.8536 23.5607 45.4393C24.1465 46.0251 24.1465 46.9749 23.5607 47.5607L21 50.1213V54.4021L24.7077 52.2615L25.6449 48.7639C25.8593 47.9637 26.6818 47.4888 27.482 47.7032C28.2822 47.9176 28.7571 48.7401 28.5426 49.5403L28.3819 50.1402L30.4417 48.951C31.1591 48.5367 32.0765 48.7826 32.4907 49.5C32.9049 50.2174 32.6591 51.1348 31.9417 51.549L29.8815 52.7385L30.482 52.8994C31.2822 53.1138 31.7571 53.9363 31.5426 54.7365C31.3282 55.5367 30.5057 56.0116 29.7055 55.7971L26.2073 54.8598L22.5 57.0002L26.2067 59.1402L29.705 58.2029C30.5052 57.9884 31.3277 58.4633 31.5421 59.2635C31.7565 60.0637 31.2816 60.8862 30.4814 61.1006L29.8809 61.2615L31.941 62.451C32.6585 62.8652 32.9043 63.7826 32.4901 64.5C32.0759 65.2174 31.1585 65.4633 30.441 65.049L28.3814 63.8599L28.5421 64.4597C28.7565 65.2599 28.2816 66.0824 27.4814 66.2968C26.6812 66.5112 25.8587 66.0363 25.6443 65.2361L24.7071 61.7386L21 59.5983V63.8787L23.5607 66.4393C24.1465 67.0251 24.1465 67.9749 23.5607 68.5607C22.9749 69.1464 22.0251 69.1464 21.4393 68.5607L21 68.1213V70.5C21 71.3284 20.3284 72 19.5 72C18.6716 72 18 71.3284 18 70.5V68.1213L17.5607 68.5607C16.9749 69.1464 16.0251 69.1464 15.4393 68.5607C14.8536 67.9749 14.8536 67.0251 15.4393 66.4393L18 63.8787V59.5983L14.293 61.7385L13.3557 65.2365C13.1413 66.0367 12.3188 66.5116 11.5186 66.2971C10.7184 66.0827 10.2435 65.2602 10.4579 64.46L10.6187 63.8598L8.55897 65.049C7.84153 65.4633 6.92415 65.2174 6.50993 64.5C6.09572 63.7826 6.34153 62.8652 7.05897 62.451L9.11869 61.2618L8.51858 61.101C7.71839 60.8866 7.24351 60.0641 7.45792 59.2639C7.67234 58.4637 8.49484 57.9888 9.29504 58.2032L12.7929 59.1405L16.5 57.0002L12.7923 54.8595L9.29448 55.7968C8.49429 56.0112 7.67178 55.5363 7.45737 54.7361C7.24295 53.9359 7.71783 53.1134 8.51803 52.899L9.11809 52.7382L7.05836 51.549C6.34092 51.1348 6.0951 50.2174 6.50932 49.5C6.92353 48.7826 7.84092 48.5367 8.55836 48.951L10.6182 50.1402L10.4574 49.54C10.243 48.7398 10.7178 47.9173 11.518 47.7029C12.3182 47.4884 13.1407 47.9633 13.3551 48.7635L14.2924 52.2615L18 54.4021V50.1213L15.4393 47.5607C14.8536 46.9749 14.8536 46.0251 15.4393 45.4393C16.0251 44.8536 16.9749 44.8536 17.5607 45.4393L18 45.8787V43.5C18 42.6716 18.6716 42 19.5 42Z"
        fill="url(#paint6_linear_537_36598)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_537_36598"
          x1="22.5"
          y1="19.5"
          x2="36"
          y2="54"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#C6D8F5" />
          <stop offset="1" stopColor="#89AFD1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_537_36598"
          x1="32.0998"
          y1="55.5925"
          x2="31.1538"
          y2="9"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#547DDA" />
          <stop offset="0.257422" stopColor="#93C2FF" stopOpacity="0" />
        </linearGradient>
        <radialGradient
          id="paint2_radial_537_36598"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(19.5 54) rotate(-127.875) scale(28.5044 32.9871)">
          <stop offset="0.683784" stopColor="#8FABDD" stopOpacity="0" />
          <stop offset="1" stopColor="#5582D3" />
        </radialGradient>
        <radialGradient
          id="paint3_radial_537_36598"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(34.5 49.5) rotate(-90) scale(40.5)">
          <stop offset="0.598765" stopColor="#C7DFFF" stopOpacity="0" />
          <stop offset="1" stopColor="#6B97E6" />
        </radialGradient>
        <radialGradient
          id="paint4_radial_537_36598"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(46.7 49.6) rotate(-56.3099) scale(31.7288)">
          <stop offset="0.47771" stopColor="#8FABDD" stopOpacity="0" />
          <stop offset="1" stopColor="#5582D3" />
        </radialGradient>
        <linearGradient
          id="paint5_linear_537_36598"
          x1="55.5"
          y1="36"
          x2="55.5"
          y2="66"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#1A70F0" />
          <stop offset="1" stopColor="#2D94DE" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_537_36598"
          x1="19.5"
          y1="42"
          x2="19.5"
          y2="72"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#1A70F0" />
          <stop offset="1" stopColor="#2D94DE" />
        </linearGradient>
      </defs>
    </svg>
  ),
  mist: (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="36" cy="36" r="30" fill="url(#paint0_linear_281_51023)" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.875 63H50.125H51H62.375C67.6907 63 72 58.6907 72 53.375C72 48.0593 67.6907 43.75 62.375 43.75C62.1639 43.75 61.9545 43.7568 61.7468 43.7702C59.5497 39.5961 55.1697 36.75 50.125 36.75C43.7668 36.75 38.4646 41.2711 37.2577 47.2738C33.197 47.5887 30 50.9835 30 55.125C30 59.4742 33.5258 63 37.875 63Z"
        fill="#E7F1FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.875 63H50.125H51H62.375C67.6907 63 72 58.6907 72 53.375C72 48.0593 67.6907 43.75 62.375 43.75C62.1639 43.75 61.9545 43.7568 61.7468 43.7702C59.5497 39.5961 55.1697 36.75 50.125 36.75C43.7668 36.75 38.4646 41.2711 37.2577 47.2738C33.197 47.5887 30 50.9835 30 55.125C30 59.4742 33.5258 63 37.875 63Z"
        fill="url(#paint1_linear_281_51023)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.875 63H50.125H51H62.375C67.6907 63 72 58.6907 72 53.375C72 48.0593 67.6907 43.75 62.375 43.75C62.1639 43.75 61.9545 43.7568 61.7468 43.7702C59.5497 39.5961 55.1697 36.75 50.125 36.75C43.7668 36.75 38.4646 41.2711 37.2577 47.2738C33.197 47.5887 30 50.9835 30 55.125C30 59.4742 33.5258 63 37.875 63Z"
        fill="url(#paint2_linear_281_51023)"
      />
      <path
        d="M30 55.125C30 50.7758 33.5258 47.25 37.875 47.25H40.5C46.299 47.25 51 51.951 51 57.75V63H37.875C33.5258 63 30 59.4742 30 55.125Z"
        fill="url(#paint3_radial_281_51023)"
      />
      <path
        d="M37 49.875C37 42.6263 42.8763 36.75 50.125 36.75C57.3737 36.75 63.25 42.6263 63.25 49.875C63.25 57.1237 57.3737 63 50.125 63C42.8763 63 37 57.1237 37 49.875Z"
        fill="url(#paint4_radial_281_51023)"
      />
      <circle
        cx="62.375"
        cy="53.375"
        r="9.625"
        fill="url(#paint5_radial_281_51023)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.875 27H20.125H21H32.375C37.6907 27 42 22.6907 42 17.375C42 12.0593 37.6907 7.75 32.375 7.75C32.1639 7.75 31.9545 7.7568 31.7468 7.77017C29.5497 3.59609 25.1697 0.75 20.125 0.75C13.7668 0.75 8.46459 5.27108 7.25773 11.2738C3.197 11.5887 0 14.9835 0 19.125C0 23.4742 3.52576 27 7.875 27Z"
        fill="#E7F1FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.875 27H20.125H21H32.375C37.6907 27 42 22.6907 42 17.375C42 12.0593 37.6907 7.75 32.375 7.75C32.1639 7.75 31.9545 7.7568 31.7468 7.77017C29.5497 3.59609 25.1697 0.75 20.125 0.75C13.7668 0.75 8.46459 5.27108 7.25773 11.2738C3.197 11.5887 0 14.9835 0 19.125C0 23.4742 3.52576 27 7.875 27Z"
        fill="url(#paint6_linear_281_51023)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.875 27H20.125H21H32.375C37.6907 27 42 22.6907 42 17.375C42 12.0593 37.6907 7.75 32.375 7.75C32.1639 7.75 31.9545 7.7568 31.7468 7.77017C29.5497 3.59609 25.1697 0.75 20.125 0.75C13.7668 0.75 8.46459 5.27108 7.25773 11.2738C3.197 11.5887 0 14.9835 0 19.125C0 23.4742 3.52576 27 7.875 27Z"
        fill="url(#paint7_linear_281_51023)"
      />
      <path
        d="M0 19.125C0 14.7758 3.52576 11.25 7.875 11.25H10.5C16.299 11.25 21 15.951 21 21.75V27H7.875C3.52576 27 0 23.4742 0 19.125Z"
        fill="url(#paint8_radial_281_51023)"
      />
      <path
        d="M7 13.875C7 6.62626 12.8763 0.75 20.125 0.75C27.3737 0.75 33.25 6.62626 33.25 13.875C33.25 21.1237 27.3737 27 20.125 27C12.8763 27 7 21.1237 7 13.875Z"
        fill="url(#paint9_radial_281_51023)"
      />
      <circle
        cx="32.375"
        cy="17.375"
        r="9.625"
        fill="url(#paint10_radial_281_51023)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_281_51023"
          x1="49.5"
          y1="49"
          x2="0.579727"
          y2="-10.7074"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#EF6D0F" />
          <stop offset="0.56298" stopColor="#EEB82E" />
          <stop offset="1" stopColor="#FEB649" stopOpacity="0.78" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_281_51023"
          x1="43.125"
          y1="42.875"
          x2="51"
          y2="63"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#C6D8F5" />
          <stop offset="1" stopColor="#89AFD1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_281_51023"
          x1="48.7249"
          y1="63.929"
          x2="48.1731"
          y2="36.75"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#547DDA" />
          <stop offset="0.257422" stopColor="#93C2FF" stopOpacity="0" />
        </linearGradient>
        <radialGradient
          id="paint3_radial_281_51023"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(41.375 63) rotate(-127.875) scale(16.6276 19.2425)">
          <stop offset="0.683784" stopColor="#8FABDD" stopOpacity="0" />
          <stop offset="1" stopColor="#5582D3" />
        </radialGradient>
        <radialGradient
          id="paint4_radial_281_51023"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(51.2187 63) rotate(-120.256) scale(25.3248 26.3211)">
          <stop offset="0.683784" stopColor="#8FABDD" stopOpacity="0" />
          <stop offset="1" stopColor="#5582D3" />
        </radialGradient>
        <radialGradient
          id="paint5_radial_281_51023"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(57.2417 60.4333) rotate(-56.3099) scale(18.5085)">
          <stop offset="0.47771" stopColor="#8FABDD" stopOpacity="0" />
          <stop offset="1" stopColor="#5582D3" />
        </radialGradient>
        <linearGradient
          id="paint6_linear_281_51023"
          x1="13.125"
          y1="6.875"
          x2="21"
          y2="27"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#C6D8F5" />
          <stop offset="1" stopColor="#89AFD1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_281_51023"
          x1="18.7249"
          y1="27.929"
          x2="18.1731"
          y2="0.749999"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#547DDA" />
          <stop offset="0.257422" stopColor="#93C2FF" stopOpacity="0" />
        </linearGradient>
        <radialGradient
          id="paint8_radial_281_51023"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(11.375 27) rotate(-127.875) scale(16.6276 19.2425)">
          <stop offset="0.683784" stopColor="#8FABDD" stopOpacity="0" />
          <stop offset="1" stopColor="#5582D3" />
        </radialGradient>
        <radialGradient
          id="paint9_radial_281_51023"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(21.2187 27) rotate(-120.256) scale(25.3248 26.3211)">
          <stop offset="0.683784" stopColor="#8FABDD" stopOpacity="0" />
          <stop offset="1" stopColor="#5582D3" />
        </radialGradient>
        <radialGradient
          id="paint10_radial_281_51023"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(27.2417 24.4333) rotate(-56.3099) scale(18.5085)">
          <stop offset="0.47771" stopColor="#8FABDD" stopOpacity="0" />
          <stop offset="1" stopColor="#5582D3" />
        </radialGradient>
      </defs>
    </svg>
  ),
  // Default icon for unknown weather
  default: (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="36" cy="36" r="30" fill="#888" />
    </svg>
  ),
};

export default weatherIcons;
