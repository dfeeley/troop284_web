import sanityClient from "@sanity/client";
import { groq } from '@nuxtjs/sanity'
import imageUrlBuilder from '@sanity/image-url'

const client = sanityClient({
  projectId: "garjbqnq",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-03-25"
});

const builder = imageUrlBuilder(client)

const SanityService = {
  fetchActivities: () => {
    const query = groq`*[_type == "activity"]{
      _id,
      name,
      slug,
      image,
      body,
      date,
      location,
      otherimages,
    } | order(date desc)`;
    return client.fetch(query)
  },

  fetchActivityShowcases: () => {
    const query = groq`*[_type == "activityShowcase"]{
      _id,
      name,
      slug,
      body,
      images,
    }`;
    return client.fetch(query)
  },

  fetchActivityPageContent: () => {
    const query = groq`*[_type == "activityPage" && status == "final"]{
      _id,
      intro,
      image,
      sections,
    }`;
    return client.fetch(query)
  },

  imageUrl(image, width=undefined, height=undefined, auto='format', fit='max') {
    return builder.image(image).size(width, height).auto(auto).fit(fit).url()
  }

}

export default SanityService
