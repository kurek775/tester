import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Header from "../../components/Header";
import { TextContent } from "../../lang/TextContent";
import {
  getGuideAreas,
  getTotalQuestionCount,
} from "../../components/utils/Guide.utils";
import "../Guide/guide.css";

const GuideIndex: React.FC = () => {
  const navigate = useNavigate();
  const areas = getGuideAreas();
  const total = getTotalQuestionCount();

  return (
    <div>
      <Header pageHeading={TextContent.studyGuide}>
        <Button variant="light" onClick={() => navigate("/")}>
          {TextContent.back}
        </Button>
      </Header>
      <p className="guide-intro">{TextContent.guideIntro}</p>
      <div className="guide-grid">
        {areas.map((area, i) => (
          <button
            key={area.slug}
            className="guide-area-card"
            onClick={() => navigate(`/guide/${area.slug}`)}
          >
            <div className="guide-area-rank">#{i + 1}</div>
            <div className="guide-area-body">
              <h3>
                {area.name}
                {i === 0 && <span className="guide-star">★</span>}
              </h3>
              <div className="guide-area-meta">
                <span className="guide-badge">
                  {area.total} {TextContent.questionsWord}
                </span>
                <span className="guide-share">
                  {Math.round((area.total / total) * 100)} %
                </span>
              </div>
              <div className="guide-area-tease">
                {area.subtopics
                  .slice(0, 3)
                  .map((s) => s.name)
                  .join(" · ")}
                {area.subtopics.length > 3 ? " …" : ""}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default GuideIndex;
