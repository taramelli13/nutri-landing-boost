interface Props {
  name: string;
  monthsFollowed: number;
  description: string;
  beforeImage: string;
  afterImage: string;
  programType: "premium" | "standard";
}

const TransformationCard = ({
  name,
  monthsFollowed,
  description,
  beforeImage,
  afterImage,
  programType,
}: Props) => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="flex space-x-2">
        <img
          src={beforeImage}
          alt={`Foto de ${name} antes da transformação`}
          className="w-1/2 object-cover rounded-md aspect-[3/4]"
          style={{ objectPosition: "center top" }}
          loading="lazy"
        />
        <img
          src={afterImage}
          alt={`Foto de ${name} depois da transformação`}
          className="w-1/2 object-cover rounded-md aspect-[3/4]"
          style={{ objectPosition: "center top" }}
          loading="lazy"
        />
      </div>
      {name && <h4 className="mt-4 font-bold">{name}</h4>}
      <p className="text-sm text-gray-600">
        Acompanhamento: {monthsFollowed} meses
      </p>
      {description && <p className="text-sm mt-2">{description}</p>}
    </div>
  );
};

export default TransformationCard;