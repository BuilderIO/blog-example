import Link from './Link'

export default function ShopByCategory({
  title = 'SHOP BY CATEGORY',
  categories = [
    {
      name: 'Women',
      image:
        'https://cdn.builder.io/api/v1/image/assets/77864f6bd1864e1f80adffa8c03ae9d0/a38c5259adc22ec1ed5e60e564e554708e5bbc8f',
    },
    {
      name: 'Men',
      image:
        'https://cdn.builder.io/api/v1/image/assets/77864f6bd1864e1f80adffa8c03ae9d0/a38c5259adc22ec1ed5e60e564e554708e5bbc8f',
    },
    {
      name: 'Accessories',
      image:
        'https://cdn.builder.io/api/v1/image/assets/77864f6bd1864e1f80adffa8c03ae9d0/a38c5259adc22ec1ed5e60e564e554708e5bbc8f',
    },
    {
      name: 'Sale',
      image:
        'https://cdn.builder.io/api/v1/image/assets/77864f6bd1864e1f80adffa8c03ae9d0/a38c5259adc22ec1ed5e60e564e554708e5bbc8f',
    },
  ],
  buttonText = 'SHOP ALL',
  buttonLink = '/shop',
  className = '',
}) {
  return (
    <div
      className={`mx-auto mt-20 flex max-w-7xl flex-col items-center justify-center text-sm font-semibold text-black ${className}`}
    >
      {title && <div className="text-center text-2xl tracking-widest">{title}</div>}

      <div className="mt-16 flex flex-wrap items-start justify-start gap-8">
        {categories.map((category, index) => (
          <div key={index} className="flex w-[278px] min-w-[240px] flex-col items-center">
            <img
              src={category.image}
              alt={category.name}
              loading="lazy"
              className="aspect-square w-[278px] rounded-md object-contain"
              srcSet={`${category.image}?placeholderIfAbsent=true&width=100 100w, 
                       ${category.image}?placeholderIfAbsent=true&width=200 200w, 
                       ${category.image}?placeholderIfAbsent=true&width=400 400w, 
                       ${category.image}?placeholderIfAbsent=true&width=800 800w, 
                       ${category.image}?placeholderIfAbsent=true&width=1200 1200w, 
                       ${category.image}?placeholderIfAbsent=true&width=1600 1600w, 
                       ${category.image}?placeholderIfAbsent=true&width=2000 2000w, 
                       ${category.image}?placeholderIfAbsent=true`}
            />
            <div className="mt-8">{category.name}</div>
          </div>
        ))}
      </div>

      {buttonText && buttonLink && (
        <div className="mt-16">
          <Link href={buttonLink}>
            <button className="bg-black px-5 py-2.5 tracking-widest text-white">
              {buttonText}
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}
