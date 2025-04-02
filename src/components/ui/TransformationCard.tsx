interface TransformationCardProps {
    name: string;
    monthsFollowed: number;
    description: string;
    beforeImage: string;
    afterImage: string;
    programType: 'premium' | 'standard' | 'basic';
  }
  
  const TransformationCard = ({
    name,
    monthsFollowed,
    description,
    beforeImage,
    afterImage,
    programType
  }: TransformationCardProps) => {
    return (
      <div className="transformation-card group rounded-lg bg-white shadow hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100">
        <div className="grid grid-cols-2">
          <div className="relative overflow-hidden">
            <img
              src={beforeImage}
              alt={`Antes - ${name}`}
              className="object-cover h-72 w-full object-[center_bottom] transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-2 left-2 bg-gray-900/80 text-white text-xs py-1 px-2 rounded">
              ANTES
            </div>
          </div>
          <div className="relative overflow-hidden">
            <img
              src={afterImage}
              alt={`Depois - ${name}`}
              className="object-cover h-72 w-full object-[center_bottom] transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-2 right-2 bg-primary-600/90 text-white text-xs py-1 px-2 rounded">
              DEPOIS
            </div>
          </div>
        </div>
        <div className="p-5 text-left">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
            <span className={`text-xs px-2 py-1 rounded ${
              programType === 'premium' 
                ? 'bg-yellow-100 text-yellow-800' 
                : programType === 'standard'
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-green-100 text-green-800'
            }`}>
              {programType.charAt(0).toUpperCase() + programType.slice(1)}
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-1">
            {monthsFollowed} {monthsFollowed === 1 ? 'mês' : 'meses'} de acompanhamento
          </p>
          <p className="text-sm text-gray-700">
            {description}
          </p>
        </div>
      </div>
    );
  };
  
  export default TransformationCard;
  