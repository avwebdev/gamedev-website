import Image, { StaticImageData } from "next/image";

interface Props {
  name: string;
  image: string;
  position: string;
  className?: string;
}

const OfficerCard: React.FC<Props> = ({
  name,
  image,
  position,
  className = "",
}) => {
  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden rounded-xl">
        <Image
          width={500}
          height={300}
          className="hover:scale-110 transition-all duration-300 overflow-hidden"
          src={image}
          alt={name}
        />
      </div>

      <div className="text-white font-tomorrow text-center absolute bottom-1 w-full">
        <h3 className="~text-xl/3xl font-medium">{name}</h3>
        <p>{position}</p>
      </div>
    </div>
  );
};

export default OfficerCard;
export type { Props as OfficerCardProps };
