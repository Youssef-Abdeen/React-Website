import {
  Box,
  Center,
  Heading,
  Image,
  Link,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';

export default function ArticleList() {

  const [articles, setArticles] = React.useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/article/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
          });
        const all = await response.json();
        console.log(response.text());
        setArticles(all);
      } catch (error) {
        console.log(error.stack);
      }
    };
    fetchArticles();
  }, []);

  return articles.length > 0 ? (
    <Wrap spacing="30px" marginTop="5" justify="center">
      {articles.map((article) => (
        <WrapItem
          key={article.id}
          width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}
        >
          <Image src={article.image} alt={article.title} />
          <Center>
            <Box w="100%">
              <Box borderRadius="lg" overflow="hidden">
                <Link
                  textDecoration="none"
                  _hover={{ textDecoration: 'none' }}
                  href={article.url}
                ></Link>
              </Box>
              <Heading fontSize="xl" marginTop="2">
                <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                  Some blog title
                </Link>
              </Heading>
              <Text as="p" fontSize="md" marginTop="2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Text>
            </Box>
          </Center>
        </WrapItem>
      ))}
    </Wrap>
  ) : (
    <Box>
      <Heading as="h2" size="lg">
        No articles yet
      </Heading>
      <Text>There are no articles yet.</Text>
    </Box>
  );
}
