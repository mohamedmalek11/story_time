import { Carousel } from "@material-tailwind/react";

function CarouselList({
  data,
  itemsPerRow = 4,
  itemsPerRowMobile = 1,
  ItemComponent,
  itemSpacing = "20px",
  ...props
}) {
  const slicedData = (arr, size) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i += size) {
      newArr.push(arr.slice(i, i + size));
    }
    return newArr;
  };
  const isMobile = window.innerWidth <= 768;
  const itemsPerSlide = isMobile ? itemsPerRowMobile : itemsPerRow;
  const slides = slicedData(data, itemsPerSlide);
  console.log(props);
  return (
    <div>
      <Carousel className="carousel-container" {...props}>
        {slides.map((itemsGroup, index) => (
          <div
            key={index}
            className="slider-items"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${itemsGroup.length}, 1fr)`,
              gap: `${itemSpacing}`,
            }}
          >
            {itemsGroup.map((item, idx) => (
              <div key={idx} className="slider-item">
                <ItemComponent {...item} />
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselList;
