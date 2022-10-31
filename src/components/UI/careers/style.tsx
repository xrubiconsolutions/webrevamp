import styled from "styled-components";
import tw from "twin.macro";

export const CurrentOpeningsContainer = styled.div`
  ${tw` w-full flex flex-col items-center justify-center py-12 `};
  > h2 {
    ${tw`font-bold text-lg lg:text-[32px] max-w-[428px] leading-[38px] mb-6`}
  }
  @media (min-width: 640px) {
    table {
      display: inline-table !important;
    }
    thead tr:not(:first-child) {
      display: none;
    }
  }
`;
export const Table = styled.table`
  ${tw`w-[100%] flex flex-row flex-nowrap  overflow-hidden sm:shadow-sm my-5   `}
`;
// export const THead = styled.thead`
//   ${tw`text-lg text-black `}
//   border-bottom: 1px solid #EFF0F7;
//   > tr {
//     // ${tw`flex flex-col flex-nowrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0`}
//     > th {
//       ${tw`p-3 text-left`}
//     }
//   }
// `;

// export const THead = styled.thead`
//   ${tw`text-lg border`};
//   border-bottom: 1.4px #eff0f7 solid;
//   > tr {
//     ${tw`flex flex-col flex-nowrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0`}
//     >th {
//       ${tw`p-3 text-left font-medium text-lg md:text-xl`}
//     }
//   }
// `;

export const THead = styled.thead`
  ${tw`text-lg border md:border`}
  border-bottom: 2px solid #EFF0F7;

  @media (min-width: 768px) {
    border-top: 0;
    border-left: 0;
    border-right: 0;
  }

  > tr {
    ${tw`flex flex-col flex-nowrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0 font-extrabold text-body `}
    >th {
      ${tw`p-3 text-left`}
    }
  }
`;

export const TBody = styled.tbody`
  ${tw`flex-1 sm:flex-none`}
`;
export const TRow = styled.tr`
  ${tw`flex flex-col flex-nowrap sm:table-row mb-2 sm:mb-0`};
`;

export const TData = styled.td`
  ${tw`border p-2  `}
  border-bottom: 1.5px solid #EFF0F7;

  @media (min-width: 400px) {
    ${tw`p-3  `}
  }

  @media (min-width: 768px) {
    border-top: 0;
    border-left: 0;
    border-right: 0;
  }

  :first-child {
    ${tw``}
  }
  > button {
    ${tw`rounded-[10px] w-[100px] h-[40px] text-sm font-semibold flex items-center justify-center bg-white`}
    border:1px solid #464f54;
  }
`;
