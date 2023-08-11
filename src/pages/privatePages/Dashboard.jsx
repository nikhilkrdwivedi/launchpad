/* eslint-disable no-unused-vars */
import Container from "@components/containers/Container";
import TopHeaderWrapper from "@components/headers/TopHeaderWrapper";
// import Button from "@elements/Button";
import { useMemo } from "react";
import { useState } from "react";
import EditLinkModal from "@components/manage-links/ManageLinkModal";
import ManageLinkHeader from "@components/manage-links/ManageLinkHeader";
import { useQuery, useMutation } from "@apollo/client";
import {
  CREATE_QUICKLINK__MUTATION,
  QUICKLINKS_QUERY,
  UPDATE_QUICKLINK__MUTATION,
} from "../../data/graphql/queries/quickLinks";
import NoDataFound from "@components/manage-links/NoDataFound";
import ManageLinkList from "@components/manage-links/ManageLinkList";
import FullScreenLoader from "@components/loaders/FullScreenLoader";
import { toast } from "react-toastify";
// import { showToastSuccess,  } from "../../helpers/toast";
import { useTheme } from "@contexts/ThemeContext";
import Button from "@elements/Button";
import useAuthentication from "../../hooks/useAuthentication";
// import 'react-toastify/dist/ReactToastify.css';
// export const TODOLIST_QUERY = gql`
//   query @live {
//     userCollection(first: 10) {
//       edges {
//         node {
//           name
//           email
//         }
//       }
//     }
//   }
// `

export default function Dashboard() {
  const {
    userContext,
    setUserContext,
    isAuthenticated,
    setIsAuthenticatedAndUserContext,
  } = useAuthentication();
  console.log({userContext,
    setUserContext,
    isAuthenticated,
    setIsAuthenticatedAndUserContext,})
  // {userCollection: { edges: { node } }}
  // :{quickLinkCollection:{edges:quickLinksList}}
  const { isDarkMode } = useTheme();
  let {
    data,
    loading: quickLinksQueryLoading,
    error,
    fetchMore,
  } = useQuery(QUICKLINKS_QUERY,
    {
      variables: { first: 1, authorId: userContext?._id },
    }
  );
  console.log({ data, quickLinksQueryLoading, error });
  const [createList] = useMutation(CREATE_QUICKLINK__MUTATION);
  const [updateList] = useMutation(UPDATE_QUICKLINK__MUTATION);
  const [showModal, setShowModal] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [quickLinksList, setQuickLinksList] = useState([]);
  const [pageInfo, setPageInfo] = useState({});

  useMemo(() => {
    console.log("__________!_________");
    if (data) {
      const {
        quickLinkCollection: { edges: list, pageInfo },
      } = data;
      setQuickLinksList(list);
      setPageInfo(pageInfo);
    }
  }, [quickLinksQueryLoading, data]);

  const saveLink = async () => {
    try {
      let payload = {...selectedItem, authorId: userContext?._id };
      const call = payload.id ? updateList : createList;
      const res = await call({
        variables: payload,
        refetchQueries: [QUICKLINKS_QUERY],
      });
      setShowModal(false);
      toast("Great news! Your changes have been saved. 😃", {
        type: "success",
        theme: isDarkMode ? "dark" : "light",
      });
    } catch (error) {
      console.log({ error });
      const errorMsg = error.message;
      toast(errorMsg, {
        type: "error",
        theme: isDarkMode ? "dark" : "light",
      });
    }
  };
  const openManageLinkModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };
  const closeManageLinkModal = () => {
    setShowModal(false);
    setSelectedItem({});
  };
  return (
    <TopHeaderWrapper>
      <Container className="flex-1 dark:bg-gray-900 px-4 md:px-20 md:py-4">
        <ManageLinkHeader
          onClick={() => openManageLinkModal({ quickNote: "", link: "" })}
        >
          <FullScreenLoader
            show={quickLinksQueryLoading}
            showCloseIcon={false}
          />
          <ManageLinkList
            loading={quickLinksQueryLoading}
            data={quickLinksList}
            onClick={(item) => openManageLinkModal(item)}
          />
          {pageInfo.hasNextPage && (
            <div className="flex items-center justify-center m-2 p-8 rounded-full">
              <Button
                btnClass="bg-green-400 p-2 w-auto"
                title="Load More"
                onClick={() =>
                  fetchMore({
                    variables: { after: pageInfo.endCursor },
                    updateQuery: (prevResult, { fetchMoreResult }) => {
                      if (!fetchMoreResult) return prevResult;
                      return {
                        quickLinkCollection: {
                          __typename: 'quickLinkCollection',
                          edges: [
                            ...prevResult.quickLinkCollection.edges,
                            ...fetchMoreResult.quickLinkCollection.edges,
                          ],
                          pageInfo: fetchMoreResult.quickLinkCollection.pageInfo,
                        },
                      };
                    },
                  })
                }
              >
                Load More
              </Button>
            </div>

          )}
          <NoDataFound loading={quickLinksQueryLoading} data={quickLinksList} />
          <EditLinkModal
            openModal={() => setShowModal(true)}
            closeModal={() => closeManageLinkModal()}
            data={selectedItem}
            title={"Edit Quick Link"}
            isOpen={showModal}
            actionClick={() => saveLink()}
            onChange={(value, key) => {
              setSelectedItem((prev) => ({ ...prev, [key]: value }));
            }}
          />
        </ManageLinkHeader>
      </Container>
    </TopHeaderWrapper>
  );
}
