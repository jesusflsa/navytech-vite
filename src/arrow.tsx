function Arrow() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
      <g clip-path="url(#a)">
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m6 3 5 5-5 5"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Arrow;
