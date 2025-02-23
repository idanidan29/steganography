import { motion } from "framer-motion";
import { MdOutlinePassword } from "react-icons/md";
import { LuImageUp } from "react-icons/lu";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

interface SliderToggleProps {
  selected: "Encrypt" | "Decrypt";
  setSelected: (value: "Encrypt" | "Decrypt") => void;
}

export const SliderToggle: React.FC<SliderToggleProps> = ({ selected, setSelected }) => {
  return (
    <div id="Encoder" className="flex justify-center w-full">
      <div className="relative flex w-fit items-center rounded-full">
        <button
          className={`${TOGGLE_CLASSES} ${selected === "Encrypt" ? "text-white" : "text-slate-300"}`}
          onClick={() => {
            setSelected("Encrypt");
          }}
        >
          <LuImageUp className="relative z-10 text-lg md:text-sm" />
          <span className="relative z-10">Encrypt</span>
        </button>
        <button
          className={`${TOGGLE_CLASSES} ${selected === "Decrypt" ? "text-white" : "text-slate-800"}`}
          onClick={() => {
            setSelected("Decrypt");
          }}
        >
          <MdOutlinePassword className="relative z-10 text-lg md:text-sm" />
          <span className="relative z-10">Decrypt</span>
        </button>
        <div
          className={`absolute inset-0 z-0 flex ${selected === "Decrypt" ? "justify-end" : "justify-start"}`}
        >
          <motion.span
            layout
            transition={{ type: "spring", damping: 15, stiffness: 250 }}
            className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
          />
        </div>
      </div>
    </div>
  );
};
