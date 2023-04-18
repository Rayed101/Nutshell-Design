import React, { useState, useEffect } from "react";
import GeneratedImage from "./GeneratedImage";
import "../src/App.css"

const formatDate = (date) => {
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

function Form() {
  const [headline, setHeadline] = useState("");
  const [sourceFirst, setSourceFirst] = useState('');
  const [sourceSecond, setSourceSecond] = useState('');
  const [sourceThird, setSourceThird] = useState(formatDate(new Date()));
  const [sourceFourth, setSourceFourth] = useState('');
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [words, setWords] = useState([]);
  const [imgLink, setImgLink] = useState('');
  const [highlightColor, setHighlightColor] = useState("#ED1E20");

  useEffect(() => {
    setWords(headline.split(/\s+/));
  }, [headline]);

  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImgLink(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const source = `${sourceFirst} | Source: ${sourceSecond} | ${sourceThird} | Picture: ${sourceFourth}`;

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <label htmlFor="headline">Headline:</label>
        <textarea
          type="text"
          id="headline"
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
        />
        <label htmlFor="source">Source:</label>
          <input
            type="text"
            value={sourceFirst}
            className="source-first"
            onChange={(e) => setSourceFirst(e.target.value)}
            placeholder="Category"
          />
          <input
            type="text"
            value={sourceSecond}
            className="source-second"
            onChange={(e) => setSourceSecond(e.target.value)}
            placeholder="Source"
          />
          <input
            type="text"
            value={sourceThird}
            className="source-third"
            onChange={(e) => setSourceThird(e.target.value)}
            placeholder="Date"
          />
          <input
            type="text"
            value={sourceFourth}
            className="source-fourth"
            onChange={(e) => setSourceFourth(e.target.value)}
            placeholder="Image Source"
          />
        <label htmlFor="start">Start:</label>
        <select
          id="start"
          value={start}
          onChange={(e) => setStart(parseInt(e.target.value))}
        >
          {words.map((word, index) => (
            <option key={index} value={index}>
              {word}
            </option>
          ))}
        </select>
        <label htmlFor="end">End:</label>
        <select
          id="end"
          value={end}
          onChange={(e) => setEnd(parseInt(e.target.value))}
        >
          {words.map((word, index) => (
            <option key={index} value={index}>
              {word}
            </option>
          ))}
        </select>
        <label htmlFor="highlightColor">Highlight Color:</label>
        <select
          id="highlightColor"
          value={highlightColor}
          onChange={(e) => setHighlightColor(e.target.value)}
        >
          <option value="#ED1E20">Red</option>
          <option value="#1244FE">Blue</option>
        </select>
        <input
  type="file"
  placeholder="img link"
  onChange={onFileChange}
/>
        {/* <button type="submit">Generate Image</button> */}
      </form>
      <GeneratedImage
        imgLink={imgLink}
        headline={headline}
        source={source}
        start={start}
        end={end}
        words={words}
        highlightColor={highlightColor}
      />
      </div>
  );
}

export default Form;
