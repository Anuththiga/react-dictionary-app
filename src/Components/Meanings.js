import React from "react";

const Meanings = ({ word, meaning }) => {

  return (
    <div className="meaning">
      {word === "" ? (
        <span className="sub-title">Start by searching a word</span>
      ) : (
        meaning.map((mean) =>
          mean.meanings.map((m) =>
            m.definitions.map((def) => (
              <div className="single-meaning" style={{ backgroundColor: "white", color: "black" }}>
                <b>{def.definition}</b>
                {def.example && (
                  <span>
                    <hr style={{ backgroundColor: "black", width: "100%" }} />
                    <b>Example :</b> {def.example}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Meanings;
