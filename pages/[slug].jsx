import { staticRequest } from "tinacms";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import SlidePage from "../layouts/SlidePage";
import { useTina } from "tinacms/dist/edit-state";

const query = `
  query($relativePath: String!) {
    getSlidesDocument(relativePath: $relativePath) {
      sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
      data {
        body
      }
    }
  }
`;

const components = {
  SlidePage,
};

export default function Home(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode

  const { data } = useTina({
    query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <TinaMarkdown
      components={components}
      content={data.getSlidesDocument.data.body}
    />
  );
}

export const getStaticPaths = async () => {
  const postsResponse = await staticRequest({
    query: `{
      getSlidesList {
        totalCount
        edges {
          node {
            id
            sys {
              filename
              basename
              breadcrumbs
              path
              relativePath
              extension
            }
            data {
              body
            }
          }
        }
      }
    }`,
    variables: {},
  });

  const paths = postsResponse.getSlidesList.edges.map((x) => {
    return { params: { slug: x.node.sys.filename } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};
export const getStaticProps = async (ctx) => {
  const variables = {
    relativePath: (ctx.params.slug || "index") + ".mdx",
  };
  let data = {};
  //try {
  data = await staticRequest({
    query,
    variables,
  });

  // } catch (error) {
  //   // swallow errors related to document creation
  // }

  return {
    props: {
      data,
      variables,
    },
  };
};
