interface DescriptionProps {
  Description: string;
}
const Description: React.FC<DescriptionProps> = ({ Description }) => {
  return (
    <>
      <div className="text-sm">{Description}</div>
    </>
  );
};
export default Description;
