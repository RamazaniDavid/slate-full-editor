import FullEditor from "./components/Editor";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <FullEditor
        config={{
          placeholder: {
            text: "Type Here ..."
          }
        }}
      />
    </div>
  );
}
