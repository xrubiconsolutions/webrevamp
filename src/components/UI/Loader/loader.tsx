import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const LoaderContainer = styled.div`
  ${tw`  w-full h-full overflow-hidden flex justify-center items-center z-[21]`}
`;

const Spinner = styled.div`
  ${tw`w-16 h-16 border-4 border-blue-400 border-solid rounded-full animate-spin`}
  border-top-color:transparent
`;
export const Loader = () => {
  return (
    <>
      <LoaderContainer>
        <Spinner />
      </LoaderContainer>
    </>
  );
};
