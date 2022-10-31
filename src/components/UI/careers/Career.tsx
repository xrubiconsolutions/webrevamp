import React, { useState, useEffect } from "react";
import {
  Table,
  THead,
  TBody,
  TData,
  TRow,
  CurrentOpeningsContainer,
} from "./style";
import { Openings } from "./data";
import { Button } from "../..";
import Perks from "./Perks/Perks";
import Contact from "./contact/Contact";
import OpeningsModal from "./Modal/OpeningModal";
import Paginator from "react-hooks-paginator";

const Career = () => {
  const [currentData, setCurrentData] = useState<Array<any>>([]);
  const [offset, setOffset] = useState(0);
  const pageLimit = 3;
  const [popupContent, setPopupContent] = useState<Array<any>>([]);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentData(Openings.slice(offset, offset + pageLimit));
  }, [offset, pageLimit]);

  const changeContent = (openings: any) => {
    setShowModal(true);
    setPopupContent([openings]);
  };

  return (
    <>
      <CurrentOpeningsContainer id="currentopening">
        <Table>
          <THead>
            <tr>
              <th>Job Title</th>
              <th>Duration</th>
              <th>Work-type</th>
              <th>Details</th>
            </tr>
            <tr>
              <th>Job Title</th>
              <th>Duration</th>
              <th>Work-type</th>
              <th>Details</th>
            </tr>
            <tr>
              <th>Job Title</th>
              <th>Duration</th>
              <th>Work-type</th>
              <th>Details</th>
            </tr>
          </THead>

          <TBody>
            {currentData.map((el) => {
              return (
                <TRow>
                  <TData>{el.JobTitle}</TData>
                  <TData>{el.Duration}</TData>
                  <TData>{el.Worktype}</TData>

                  <TData>
                    <Button
                      children="See Details"
                      white={false}
                      onClick={() => changeContent(el)}
                    />
                  </TData>
                </TRow>
              );
            })}
          </TBody>
        </Table>

        <Paginator
          totalRecords={Openings.length}
          pageLimit={3}
          pageNeighbours={1}
          setOffset={setOffset}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </CurrentOpeningsContainer>

      {showModal && (
        <OpeningsModal
          setShowModal={setShowModal}
          showModal={showModal}
          popupContent={popupContent}
        />
      )}

      <Perks />
      <Contact />
    </>
  );
};

export default Career;
