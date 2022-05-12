import { SimpleGrid } from '@chakra-ui/react'
import Card from '../Cards/Card'

export default function Grid() {

return (
<SimpleGrid minChildWidth='120px' spacing='40px'>
  <Card/>
</SimpleGrid>
)
}