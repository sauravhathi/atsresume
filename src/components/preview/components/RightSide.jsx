import Link from "next/link";
import DateRange from "../../utility/DateRange";
import dynamic from "next/dynamic";

const Droppable = dynamic(
  () => import("react-beautiful-dnd").then((mod) => mod.Droppable),
  { ssr: false }
);
const Draggable = dynamic(
  () => import("react-beautiful-dnd").then((mod) => mod.Draggable),
  { ssr: false }
);

const RightSide = ({ resumeData }) => {
  return (
    <div className="col-span-2 space-y-2">
      {resumeData.workExperience.length > 0 && (
        <Droppable droppableId="work-experience" type="WORK_EXPERIENCE">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <h2
                className="section-title mb-1 border-b-2 border-gray-300 editable"
                contentEditable
                suppressContentEditableWarning
              >
                Work Experience
              </h2>
              {resumeData.workExperience.map((item, index) => (
                <Draggable
                  key={`${item.company}-${index}`}
                  draggableId={`WORK_EXPERIENCE-${index}`}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`mb-1 ${
                        snapshot.isDragging &&
                        "outline-dashed outline-2 outline-gray-400 bg-white"
                      }`}
                    >
                      <div className="flex flex-row justify-between space-y-1">
                        <p className="content i-bold">{item.company}</p>
                        <DateRange
                          startYear={item.startYear}
                          endYear={item.endYear}
                          id={`work-experience-start-end-date`}
                        />
                      </div>
                      <p className="content">{item.position}</p>
                      <p className="content hyphens-auto">{item.description}</p>

                      <Droppable
                        droppableId={`WORK_EXPERIENCE_KEY_ACHIEVEMENT-${index}`}
                        type="WORK_EXPERIENCE_KEY_ACHIEVEMENT"
                      >
                        {(provided) => (
                          <ul
                            className="list-disc ul-padding content"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                          >
                            {typeof item.keyAchievements === "string" &&
                              item.keyAchievements
                                .split("\n")
                                .map((achievement, subIndex) => (
                                  <Draggable
                                    key={`${item.company}-${index}-${subIndex}`}
                                    draggableId={`WORK_EXPERIENCE_KEY_ACHIEVEMENT-${index}-${subIndex}`}
                                    index={subIndex}
                                  >
                                    {(provided, snapshot) => (
                                      <li
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className={`
                                          hover:outline-dashed hover:outline-2 hover:outline-gray-400
                                          ${
                                          snapshot.isDragging &&
                                          "outline-dashed outline-2 outline-gray-400 bg-white"
                                        }`}
                                      >
                                        <div
                                          dangerouslySetInnerHTML={{
                                            __html: achievement,
                                          }}
                                          contentEditable
                                        />
                                      </li>
                                    )}
                                  </Draggable>
                                ))}
                            {provided.placeholder}
                          </ul>
                        )}
                      </Droppable>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      )}

      {resumeData.projects.length > 0 && (
        <Droppable droppableId="projects" type="PROJECTS">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <h2
                className="section-title mb-1 border-b-2 border-gray-300 editable"
                contentEditable
                suppressContentEditableWarning
              >
                Projects
              </h2>
              {resumeData.projects.map((item, index) => (
                <Draggable
                  key={`${item.name}-${index}`}
                  draggableId={`PROJECTS-${index}`}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`mb-1 ${
                        snapshot.isDragging &&
                        "outline-dashed outline-2 outline-gray-400 bg-white"
                      }`}
                    >
                      <div className="flex flex-row justify-between space-y-1">
                        <p className="content i-bold">{item.name}</p>
                        <DateRange
                          startYear={item.startYear}
                          endYear={item.endYear}
                          id={`projects-start-end-date`}
                        />
                      </div>

                      <Link
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="content"
                      >
                        {item.link}
                      </Link>
                      <p className="content">{item.description}</p>

                      <Droppable
                        droppableId={`PROJECTS_KEY_ACHIEVEMENT-${index}`}
                        type="PROJECTS_KEY_ACHIEVEMENT"
                      >
                        {(provided) => (
                          <ul
                            className="list-disc ul-padding content"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                          >
                            {typeof item.keyAchievements === "string" &&
                              item.keyAchievements
                                .split("\n")
                                .map((achievement, subIndex) => (
                                  <Draggable
                                    key={`${item.name}-${index}-${subIndex}`}
                                    draggableId={`PROJECTS_KEY_ACHIEVEMENT-${index}-${subIndex}`}
                                    index={subIndex}
                                  >
                                    {(provided, snapshot) => (
                                      <li
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className={`
                                          hover:outline-dashed hover:outline-2 hover:outline-gray-400
                                          ${
                                          snapshot.isDragging &&
                                          "outline-dashed outline-2 outline-gray-400 bg-white"
                                        }`}
                                      >
                                        <div
                                          dangerouslySetInnerHTML={{
                                            __html: achievement,
                                          }}
                                          contentEditable
                                        />
                                      </li>
                                    )}
                                  </Draggable>
                                ))}
                            {provided.placeholder}
                          </ul>
                        )}
                      </Droppable>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      )}
    </div>
  );
};

export default RightSide;
