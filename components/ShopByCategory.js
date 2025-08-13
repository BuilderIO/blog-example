import Link from './Link'
import PropTypes from 'prop-types'

export default function ShopByCategory({
  title = 'SHOP BY CATEGORY',
  categories = [],
  buttonText = 'SHOP ALL',
  buttonLink = '/shop',
}) {
  return (
    <div className="mx-auto mt-20 flex max-w-7xl flex-col items-center justify-center text-sm font-semibold text-black">
      <div className="text-center text-2xl tracking-widest">{title}</div>

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

      {buttonText && (
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

ShopByCategory.propTypes = {
  title: PropTypes.string,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
}
