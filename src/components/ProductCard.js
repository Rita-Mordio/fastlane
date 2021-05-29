import { Card } from 'semantic-ui-react'

const ProductCard = ({header, meta, description}) => {
  return (
    <Card
      header={header}
      meta={`${meta.toLocaleString('ko-KR')}원`}
      description={description}
    />
  )
}

export default ProductCard