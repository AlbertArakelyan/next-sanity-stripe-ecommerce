import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient({
  projectId: '7xdlahml',
  dataset: 'production',
  apiVersion: '2023-04-11',
  useCdn: true,
  token: 'skc9xeDAfOmbnK4f7P0znshC7GvmeBaYqR4eZgY2i5Tggby5BemQuiVF3QALpkIzcqvFFbKUw6Zrp0uXVnQqbNsMBPhjsdmHoxW5gbCXUKYAtvzEEWLvTRJdsOVjoK0Nx3DNbbGONvOJiCRuxzB0UPEm4SwfzWx2cOZbMbxlB2kkgnyyMOQ0',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);