const Reviews = async () => {
  // return reviews.data.map((review: any) => (
  //   <div className="flex flex-col gap-4" key={review.id}>
  //     {/* USER */}
  //     <div className="flex items-center gap-4 font-medium">
  //       <Image
  //         height={32}
  //         width={32}
  //         alt=""
  //         className="rounded-full"
  //         src={review.customer.avatar_url}
  //       />
  //       <span>{review.customer.display_name}</span>
  //     </div>
  //     {/* STARS */}
  //     <div className="flex gap-2">
  //       {Array.from({ length: review.rating }).map((_, index) => (
  //         <Image height={16} width={16} alt="" key={index} src="/star.png" />
  //       ))}
  //     </div>
  //     {/* DESC */}
  //     {review.heading && <p>{review.heading}</p>}
  //     {review.body && <p>{review.body}</p>}
  //     <div className="">
  //       {review.media.map((media: any) => (
  //         <Image
  //           height={50}
  //           width={100}
  //           alt=""
  //           className="object-cover"
  //           key={media.id}
  //           src={media.url}
  //         />
  //       ))}
  //     </div>
  //   </div>
  // ));
};

export default Reviews;
