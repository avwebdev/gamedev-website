import Image from "next/image";

export interface OfficerCardProps {
  name: string;
  image: string;
  position: string;
  className?: string;
}

export default function OfficerCard({ name, image, position, className = "" }: OfficerCardProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden rounded-xl">
        <Image
          width={400}
          height={300}
          className="sepia-[0.25] hover:sepia-0 hover:scale-110 transition-all ease-in-out duration-300 overflow-hidden"
          src={image}
          alt={name}
        />
      </div>

      <div className="text-white font-tomorrow text-center pt-1 w-full">
        <h3 className="~text-xl/2xl font-medium drop-shadow-2xl">{name}</h3>
        <p className="~text-md/lg">{position}</p>
      </div>
    </div>
  );
}
