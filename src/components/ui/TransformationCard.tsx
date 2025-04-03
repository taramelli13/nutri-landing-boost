import { useState } from "react";

interface TransformationCardProps {
  name: string;
  monthsFollowed: number;
  image: string;
}

const TransformationCard = ({ name, monthsFollowed, image }: TransformationCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-green-600 rounded-xl shadow-md overflow-hidden border border-green-700">
        <img
          src={image}
          alt={`Transformação de ${name}`}
          className="w-full h-72 object-cover object-[center_80%] rounded-lg border-2 border-primary-500 shadow-sm cursor-zoom-in transition-transform duration-300 hover:scale-105"
          onClick={() => setIsOpen(true)}
        />
        <div className="p-5 text-center">
          <h3 className="text-xl font-bold text-white font-montserrat">{name}</h3>
          <p className="text-sm text-white font-inter tracking-wide mt-1">
            {monthsFollowed} meses de acompanhamento
          </p>
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
