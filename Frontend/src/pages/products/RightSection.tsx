type RightSectionProps = {
  imageURL: string;
  productName: string;
  productDescription: string;
  learnMore: string;
};

export default function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}: RightSectionProps) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore}>Learn More</a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURL} alt={productName} />
        </div>
      </div>
    </div>
  );
}
