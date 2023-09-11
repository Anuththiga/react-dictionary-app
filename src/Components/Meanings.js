import React from "react";

const Meanings = ({ word, meaning }) => {

  return (
    <div className="meaning">
      <div>
      {meaning[0] && word && (
        <audio
          src={meaning[0].phonetics[0] && meaning[0].phonetics[0].audio}
          style={{ backgroundColor: "#fff", borderRadius: "10px ", width: "100%", marginBottom: "10px"}}
          controls>
          Your Browser doesn't support audio
        </audio>
      )}
      </div>
      
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
