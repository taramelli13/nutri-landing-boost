interface TransformationCardProps {
    name: string;
    monthsFollowed: number;
    description: string;
    image: string;
  }
  
  const TransformationCard = ({ name, monthsFollowed, description, image }: TransformationCardProps) => {
    return (
      <div className="min-w-[300px] md:min-w-[350px] bg-white rounded-lg shadow-md p-4 flex-shrink-0 snap-start border border-gray-200">
        <img 
          src={image} 
          alt={`Transformação de ${name}`} 
          className="w-full h-80 object-cover object-top rounded-md mb-4"
        />
        <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
        <p className="text-sm text-gray-600">{monthsFollowed} meses de acompanhamento</p>
        <p className="text-sm text-gray-700 mt-2">{description}</p>
      </div>
    );
  };
  
  export default TransformationCard;
  