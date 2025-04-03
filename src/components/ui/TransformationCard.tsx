import { useState } from "react";

interface TransformationCardProps {
  name: string;
  monthsFollowed: number;
  description: string;
  image: string;
}

const TransformationCard = ({ name, monthsFollowed, description, image }: TransformationCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={image}
          alt={`Transformação de ${name}`}
          className="object-cover w-full h-72 cursor-zoom-in transition-transform duration-300 hover:scale-105"
          onClick={() => setIsOpen(true)}
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">{monthsFollowed} meses de acompanhamento</p>
          <p className="text-sm text-gray-700 mt-2">{description}</p>
        </div>
      </div>

      {/* Modal de Zoom */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={image}
            alt={`Zoom de ${name}`}
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg border-4 border-white"
          />
        </div>
      )}
    </>
  );
};

export default TransformationCard;
