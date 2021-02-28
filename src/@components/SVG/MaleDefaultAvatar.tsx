import * as React from 'react';

function MaleDefaultAvatar(props: any) {
  return (
    <svg
      width={34}
      height={34}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity={0.2}>
        <circle cx={17} cy={17} r={16} fill="#fff" />
        <mask
          id="prefix__a"
          maskUnits="userSpaceOnUse"
          x={1}
          y={1}
          width={32}
          height={32}
        >
          <circle cx={17} cy={17} r={16} fill="#fff" />
        </mask>
        <g mask="url(#prefix__a)" stroke="#59595A" strokeWidth={1.6}>
          <path
            clipRule="evenodd"
            d="M23.882 14.784c.005-2.269-.576-4.027-1.73-5.229-1.15-1.198-2.81-1.805-4.937-1.805-2.037 0-3.645.58-4.778 1.725-1.23 1.242-1.86 3.115-1.874 5.57-.228.142-.533.408-.612.947-.235 1.611.45 3.207.564 3.457.075.2.338.79.872 1.004.814 3.16 3.588 5.247 5.828 5.247 2.765 0 5.048-2.071 5.824-5.213.598-.178.886-.827.966-1.037.113-.25.799-1.848.563-3.458-.074-.5-.346-.951-.686-1.208z"
          />
          <path d="M14.197 23.322s0 3.185-4.218 4.247c-3.375.85-3.373 3.739-3.238 4.86.034.28.239.496.511.574C8.852 33.46 14.457 35 17.36 35c3.065 0 8.498-1.522 10.092-1.989a.702.702 0 00.517-.6c.126-1.296.074-4.843-4.283-4.843-3.163 0-3.163-4.246-3.163-4.246" />
        </g>
        <circle cx={17} cy={17} r={16} stroke="#59595A" />
        <mask
          id="prefix__b"
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={34}
          height={34}
        >
          <circle cx={17} cy={17} r={16} fill="#fff" stroke="#fff" />
        </mask>
      </g>
    </svg>
  );
}

export default MaleDefaultAvatar;
