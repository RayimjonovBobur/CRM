import Highlighter from "react-highlight-words";

const PaintBackground = ({ text, value }) => {
  return (
    <Highlighter
      highlightClassName={{}}
      searchWords={[`${value}`]}
      autoEscape={true}
      textToHighlight={text}
    />
  );
};

export default PaintBackground;
