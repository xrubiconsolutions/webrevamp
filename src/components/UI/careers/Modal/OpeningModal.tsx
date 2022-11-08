import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Modal from "./modal";
// import Button from "../Button";
import { Button } from "../../..";

const ResponsibilityContainer = styled.ul`
  ${tw`text-xs lg:text-sm pl-4`}
  list-style-type: initial;
`;
const RequirementContainer = styled.ul`
  ${tw` text-xs lg:text-sm pl-4`}
  list-style-type: initial;
`;
interface ModalProps {
  showModal?: boolean;
  popupContent?: any;
  setShowModal?: any;
}

interface PopModel {
  JobTitle?: string;
  DepartmentMission?: Array<[]>;
  Responsibility: Array<[]>;
  Requirement: Array<[]>;
}

const OpeningsModal = ({
  showModal = false,
  setShowModal,
  popupContent,
}: ModalProps) => {
  return (
    <div>
      <Modal show={showModal} close={() => setShowModal(false)}>
        <>
          {popupContent.map(
            ({
              JobTitle,
              DepartmentMission,
              Responsibility,
              Requirement,
            }: PopModel) => (
              <>
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-lg lg:text-xl text-primary">
                    {JobTitle}
                  </h3>

                  <button
                    type="reset"
                    onClick={() => setShowModal(false)}
                    className=" text-xs pt-2.5 pb-2.5 pr-5 pl-5 rounded-2xl text-primary hover:bg-primary  border-primary border hover:text-white transition ease-in-out delay-100 "
                  >
                    close
                  </button>
                </div>
                {DepartmentMission && (
                  <>
                    <h5 className="text-primary font-bold text-base lg:text-lg my-3">
                      Department Mission :
                    </h5>
                    <ResponsibilityContainer>
                      {DepartmentMission.map((el) => (
                        <li>{el}</li>
                      ))}
                    </ResponsibilityContainer>
                  </>
                )}
                <h5 className="text-primary font-bold text-base lg:text-lg my-3">
                  Responsibilities
                </h5>
                <ResponsibilityContainer>
                  {Responsibility.map((el) => (
                    <li>{el}</li>
                  ))}
                </ResponsibilityContainer>

                <h5 className="text-secondary font-bold text-base lg:text-lg my-3">
                  Requirements{" "}
                </h5>
                <RequirementContainer>
                  {Requirement.map((el) => (
                    <li>{el}</li>
                  ))}
                </RequirementContainer>
              </>
            )
          )}
        </>
      </Modal>
    </div>
  );
};

export default OpeningsModal;
