import Image from "next/image";
import styles from "../styles";

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex-1 flex flex-row sm:max-w-[250px] min-w-[210px]">
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}
    >
      <Image src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div>
    <div className="flex-1 ml-[20px]">
      <h1 className="font-bold text-[24px] leading-[30px] text-white">
        {title}
      </h1>
      <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#b0b0b0] leading-[32px]">
        {subtitle}
      </p>
    </div>
  </div>
);

export default NewFeatures;
