interface ShoeCardProps {
  imgUrl: {
    bigShoe: string;
    thumbnail: string;
  };
  changeBigShoeImage: (shoe: string) => void;
  bigShoeImage: string;
}

const ShoeCard = ({
  imgUrl,
  changeBigShoeImage,
  bigShoeImage,
}: ShoeCardProps) => {
  const handleClick = () => {
    if (bigShoeImage !== imgUrl.bigShoe) {
      changeBigShoeImage(imgUrl.bigShoe);
    }
  };
  return (
    <div
      onClick={handleClick}
      className={`border-2 rounded-xl ${
        bigShoeImage === imgUrl.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
    >
      <div className=" flex items-center justify-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgUrl.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
        />
      </div>
    </div>
  );
};

export default ShoeCard;
