import { IconType } from "react-icons";
import { FaRegFolder } from "react-icons/fa";

interface Props {
  title: string;
  CustomIcon: IconType
}

const ArchiveCard = ({ title, CustomIcon }: Props) => {
  return (
    <div className="w-full h-25 rounded-lg bg-textDark p-7 flex flex-col justify-center gap-6 hover:scale-110 transition-transform duration-300 group">
      <div className="flex justify-center">
        <CustomIcon className="text-4xl text-textLight group-hover:text-bodyColor" />
      </div>
      <div>
        <h2 className="text-xl font-titleFont font-semibold tracking-wide text-center group-hover:text-bodyColor">
          {title}
        </h2>
        {/*<p className="text-sm mt-3">Worked in</p>*/}
      </div>
      {/*<ul className="text-xs mdl:text-sm text-textLight flex items-center gap-5 flex-wrap">
        {listItem.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>*/}
    </div>
  );
};

export default ArchiveCard;
