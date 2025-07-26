function ProductCard({ id, name, image, description }) {
  console.log(name);

  return (
    <div className="product-card">
      <img
        className="b-radius"
        src={image}
        alt="story"
      />
      <p>{name}</p>
      <p>{description}</p>
    </div>
  );
}

export default ProductCard;
