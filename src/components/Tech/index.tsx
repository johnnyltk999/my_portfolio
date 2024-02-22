interface TechProps {
  isHighLight: boolean;
  data: string[];
}

const Tech: React.FC<TechProps> = ({ isHighLight, data }) => {
  return (
    <>
      <div>
        <div className="flex gap-4 text-sm">
          {data.map((e, i) => (
            <div
              key={`${e}-text-${i}`}
              className={`bg-primaryBase px-2 py-1 rounded-md ${
                isHighLight ? "text-primaryAccent" : ""
              }`}
            >
              {e}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Tech;
