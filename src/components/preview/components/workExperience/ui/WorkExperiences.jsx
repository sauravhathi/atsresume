"use client";

import React, {useContext} from 'react';
import dynamic from "next/dynamic";
import {ResumeContext} from "../../../../builder";
import WorkExperience from "../components/WorkExperience";
import { useTranslations } from "../../../../../i18n/I18nProvider";

const Droppable = dynamic(
  () => import("react-beautiful-dnd").then((mod) => mod.Droppable),
  {ssr: false}
);

const WorkExperiences = () => {
  const {resumeData} = useContext(ResumeContext);
  const t = useTranslations();

  return (
    <Droppable droppableId="work-experience" type="WORK_EXPERIENCE">
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          <h2
            className="section-title mb-1 border-b-2 border-gray-300 editable"
            contentEditable
            suppressContentEditableWarning
          >
            {t("preview.workExperience")}
          </h2>
          {resumeData.workExperience.map((item, index) => (
            <WorkExperience
              key={index}
              item={item}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default WorkExperiences;
