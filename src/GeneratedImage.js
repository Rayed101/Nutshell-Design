import React, { useRef, useEffect } from "react";
import html2canvas from "html2canvas";
import {
  Container,
  WhiteLayer,
  HeadlineText,
  SourceText,
  RedBackgroundText,
} from "./styles";
import "./index.css"; // Add this line if you are using a separate CSS file
import domToImage from "dom-to-image";
import img from "../src/nt.png"

function GeneratedImage({
  headline,
  source,
  imgLink,
  start,
  end,
  words,
  highlightColor,
}) {
  const imageRef = useRef();

  const [before, highlighted, after] = splitHeadline(
    headline,
    start,
    end,
    words
  );

  useEffect(() => {
    if (headline || source) {
      domToImage
        .toPng(document.querySelector("#capture"))
        .then((dataUrl) => {
          imageRef.current.src = dataUrl;
        });
    }
  }, [headline,
    source,
    imgLink,
    start,
    end,
    words,
    highlightColor,]);

  useEffect(()=>{
    console.log(imgLink);
  },[imgLink])

  return (
    <div>
      <img className="generated-image" ref={imageRef} alt="Generated"/>
      <div style={{position: "absolute", left: "-300000px", display: "block"}}>
        <Container id="capture">
          <WhiteLayer>
            <HeadlineText>
              {before}
              <RedBackgroundText color={highlightColor}>
                {highlighted}
              </RedBackgroundText>
              {after}
            </HeadlineText>
            <div style={{position: "absolute", bottom: "27px"}}><SourceText>{source}</SourceText></div>
            
          </WhiteLayer>
{ imgLink!='' &&          <img src={imgLink} style={{width: "2048px", height: "1351px", position: "absolute", bottom: "0", left: "0", objectFit: "cover"}}></img>
}
          <img src={img} style={{position: "absolute", bottom: "65px", left: "75px", height: "120px"}}></img>
        </Container>
      </div>

      
    </div>
  );
}
function splitHeadline(headline, start, end, words) {
  if (!words) {
    return ["", "", ""];
  }

  const wordIndices = words.reduce((indices, word, index) => {
    const lastIndex =
      indices.length > 0 ? indices[indices.length - 1].end + 1 : 0;
    const start = headline.indexOf(word, lastIndex);
    const end = start + word.length - 1;
    indices.push({ start, end });
    return indices;
  }, []);

  if (!wordIndices[start] || !wordIndices[end]) {
    return ["", "", ""];
  }

  const before = headline.substring(0, wordIndices[start].start);
  const highlighted = headline.substring(
    wordIndices[start].start,
    wordIndices[end].end + 1
  );
  const after = headline.substring(wordIndices[end].end + 1);

  return [before, highlighted, after];
}

export default GeneratedImage;
