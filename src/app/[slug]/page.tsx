import type { ProductDocument } from '@/models/Product';

import Add from '@/components/Add';
import ProductImages from '@/components/ProductImages';
import ProductRepository from '@/repositories/ProductRepository';

const SinglePage = async ({ params }: { params: { slug: string } }) => {
  const product: ProductDocument | null =
    await ProductRepository.getProductBySlug(params.slug);

  if (product === null) {
    return (
      <div>
        <h1>Oops :(</h1>
      </div>
    );
  }
  return (
    <div className="relative flex flex-col gap-16 px-4 md:px-8 lg:flex-row lg:px-16 xl:px-32 2xl:px-64">
      {/* IMG */}
      <div className="top-20 h-max w-full lg:sticky lg:w-1/2">
        <ProductImages media={JSON.stringify(product.media)} />
      </div>
      {/* TEXTS */}
      <div className="flex w-full flex-col gap-6 lg:w-1/2">
        <h1 className="text-4xl font-medium">
          {product.slug.replaceAll('-', ' ')}
        </h1>
        <p className="text-gray-500">{product.desc}</p>
        <div className="h-[2px] bg-gray-100" />
        {product.discount === 0 ? (
          <h2 className="text-2xl font-medium">${product.price}</h2>
        ) : (
          <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through">
              ${product.price}
            </h3>
            <h2 className="text-2xl font-medium">
              $
              {(
                product.price -
                product.price / (product.discount ?? 1 * 100)
              ).toFixed(2)}
            </h2>
          </div>
        )}
        <div className="h-[2px] bg-gray-100" />
        <Add productId={product._id} stockNumber={product.stock || 0} />
        <div className="flex flex-col gap-1">
          {product.additionalInfoSections.map((section: any) => (
            <div className="inline-flex gap-2 text-sm" key={section.title}>
              <h4 className="mb-4 font-medium">{section.title} :</h4>
              <p>{section.description}</p>
            </div>
          ))}
        </div>
        <div className="h-[2px] bg-gray-100" />
        {/* REVIEWS */}
        {/* <h1 className="text-2xl">User Reviews</h1>
        <Suspense fallback="Loading...">
          <Reviews productId={product._id} />
        </Suspense> */}
      </div>
    </div>
  );
};

export default SinglePage;
