import sanityClient from "@sanity/client";
import { groq } from '@nuxtjs/sanity'
import imageUrlBuilder from '@sanity/image-url'

const client = sanityClient({
  projectId: "garjbqnq",
  dataset: "live",
  useCdn: true,
  apiVersion: "2021-03-25"
});

const builder = imageUrlBuilder(client)

const SanityService = {
  fetchRecent: () => {
    let oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1)
    oneYearAgo = oneYearAgo.toISOString().substr(0, 10)
    const query = groq`*[_type == "recent" && date >= "${oneYearAgo}"]{
      _id,
      name,
      subtitle,
      slug,
      image,
      body,
      date,
      location,
      photoalbum,
      mapPin,
      otherimages,
    } | order(date desc)`;
    return client.fetch(query)
  },

  fetchUpcoming: () => {
    const today = new Date().toISOString().substr(0, 10);
    const query = groq`*[_type == "upcoming" && date >= "${today}"]{
      _id,
      name,
      slug,
      image,
      body,
      date,
      location,
      mapPin,
    } | order(date asc)`;

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

  fetchFrontPageSections: () => {
    const query = groq`*[_type == "frontPageSection"]{
      _id,
      name,
      slug,
      image,
      imageQuote,
      headingImage,
      heading,
      body,
      components,
    }`;
    return client.fetch(query)


  },

  fetchFrontPageContent: () => {
    const query = groq`*[_type == "frontPage" && status == "final"]{
      sections,
    }`;
    return client.fetch(query)
  },

  fetchKnowlegeCenterPages: () => {
    const query = groq`*[_type == "knowledgeCenterPage" && status == "final"]{
      _id,
      name,
      slug,
      heading,
      body,
      components
    } | order(sortOrder)`;
    return client.fetch(query)
  },

  fetchDocumentLibraryLinks: () => {
    const query = groq`*[_type == "documentLibraryLinks"]{
      _id,
      title,
      url,
    } | order(sortOrder)`;
    return client.fetch(query)
  },

  fetchEaglePageSections: () => {
    const query = groq`*[_type == "eaglePageSection"]{
      _id,
      name,
      slug,
      heading,
      body,
      components,
    }`;
    return client.fetch(query)


  },

  fetchEaglePageContent: () => {
    const query = groq`*[_type == "eaglePage" && status == "draft"]{
      heading,
      badge,
      sections,
    }`;
    return client.fetch(query)
  },

  fetchVerbiage: () => {
    const query = groq`*[_type == "verbiage" && status == "final"]{
      recent_preamble,
      upcoming_preamble,
    }`;
    return client.fetch(query)
  },

  imageUrl(image, width=undefined, height=undefined, auto='format', fit='max') {
    return builder.image(image).size(width, height).auto(auto).fit(fit).url()
  }

}

export default SanityService
