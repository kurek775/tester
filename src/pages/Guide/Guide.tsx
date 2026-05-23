import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import Header from "../../components/Header";
import { TextContent } from "../../lang/TextContent";
import {
  getGuideArea,
  getTotalQuestionCount,
} from "../../components/utils/Guide.utils";
import "./guide.css";

const GuidePage: React.FC = () => {
  const { area } = useParams<{ area: string }>();
  const navigate = useNavigate();
  const guide = area ? getGuideArea(area) : undefined;
  // First (highest-ROI) subtopic expanded by default; others toggle freely.
  const [open, setOpen] = useState<Set<number>>(new Set([0]));

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  if (!guide) {
    return (
      <Header pageHeading={TextContent.areaNotFound}>
        <Button variant="light" onClick={() => navigate("/guide")}>
          {TextContent.back}
        </Button>
      </Header>
    );
  }

  const total = getTotalQuestionCount();

  return (
    <div>
      <Header pageHeading={guide.name}>
        <Button variant="light" onClick={() => navigate("/guide")}>
          {TextContent.back}
        </Button>
      </Header>
      <p className="guide-intro">
        {guide.total} {TextContent.questionsWord} (
        {Math.round((guide.total / total) * 100)} %) — {TextContent.byRoi}
      </p>
      <div className="guide-subtopics">
        {guide.subtopics.map((sub, i) => {
          const isOpen = open.has(i);
          return (
            <div className="guide-subtopic" key={sub.name + i}>
              <button
                className="guide-subtopic-head"
                onClick={() => toggle(i)}
              >
                <span className="guide-caret">{isOpen ? "▼" : "▶"}</span>
                <span className="guide-subtopic-name">{sub.name}</span>
                <span className="guide-badge">
                  {sub.count} {TextContent.questionsWord}
                </span>
              </button>
              {isOpen && (
                <div className="guide-notes">
                  {sub.notes.map((note, j) => (
                    <div className="guide-note" key={note.questionCode + j}>
                      <div className="guide-q">{note.content}</div>
                      {note.codeContent && (
                        <pre className="guide-code">
                          <code>{note.codeContent}</code>
                        </pre>
                      )}
                      {note.correct.length > 0 && (
                        <div className="guide-answer">
                          <strong>{TextContent.correctAnswer}:</strong>{" "}
                          {note.correct.join("  •  ")}
                        </div>
                      )}
                      {note.explanation && (
                        <div className="guide-expl">{note.explanation}</div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GuidePage;
