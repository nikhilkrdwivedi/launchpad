import Container from "@components/containers/Container";
import TopHeaderWrapper from "@components/headers/TopHeaderWrapper";
import { useMemo } from "react";
import { useState } from "react";
import ManageLinkHeader from "@components/manage-links/ManageLinkHeader";
import { useQuery, useMutation } from "@apollo/client";
import {
  CREATE_QUICKLINK__MUTATION,
  DELETE_QUICKLINK_MUTATION,
  QUICKLINKS_QUERY,
  UPDATE_QUICKLINK__MUTATION,
} from "@data/graphql/queries/quickLinks";
import NoDataFound from "@components/manage-links/NoDataFound";
import ManageLinkList from "@components/manage-links/ManageLinkList";
import FullScreenLoader from "@components/loaders/FullScreenLoader";
import { toast } from "react-toastify";
import { useTheme } from "@contexts/ThemeContext";
import Button from "@elements/Button";
import useAuthentication from "@hooks/useAuthentication";
import { ACTIONS } from "@constants/actions";
import ManageLinkModal from "@components/manage-links/ManageLinkModal";
import ShareLinkModal from "@components/manage-links/ShareLinkModal";
import DeleteLinkModal from "@components/manage-links/DeleteLinkModal";

export default function Dashboard() {
  const { userContext } = useAuthentication();

  const { isDarkMode } = useTheme();
  let {
    data,
    loading: quickLinksQueryLoading,
    // error,
    fetchMore,
  } = useQuery(QUICKLINKS_QUERY, {
    variables: { first: 12, authorId: userContext?._id },
  });
  const [createQuickLink] = useMutation(CREATE_QUICKLINK__MUTATION);
  const [updateQuickLink] = useMutation(UPDATE_QUICKLINK__MUTATION);
  const [deleteQuickLink] = useMutation(DELETE_QUICKLINK_MUTATION);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteLinkModal, setShowDeleteLinkModal] = useState(false);
  const [showShareLinkModal, setShowShareLinkModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [quickLinksList, setQuickLinksList] = useState([]);
  const [pageInfo, setPageInfo] = useState({});

  useMemo(() => {
    if (data) {
      const {
        quickLinkSearch: { edges: list, pageInfo },
      } = data;
      setQuickLinksList(list);
      setPageInfo(pageInfo);
    }
  }, [quickLinksQueryLoading, data]);

  const deleteLink = async () => {
    try {
      let id = selectedItem?.id;
      const res = await deleteQuickLink({
        variables: { id },
        refetchQueries: [QUICKLINKS_QUERY],
      });
      setShowDeleteLinkModal(false);
      toast("Great news! Link successfully deleted. 😃", {
        type: "success",
        theme: isDarkMode ? "dark" : "light",
      });
    } catch (error) {
      const errorMsg = error.message;
      toast(errorMsg, {
        type: "error",
        theme: isDarkMode ? "dark" : "light",
      });
    }
  };
  const saveLink = async () => {
    try {
      let payload = { ...selectedItem, authorId: userContext?._id };
      const call = payload.id ? updateQuickLink : createQuickLink;
      setShowModal(false);
      toast("Great news! Your changes have been saved. 😃", {
        type: "success",
        theme: isDarkMode ? "dark" : "light",
      });
    } catch (error) {
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

  const closeModal = () => {
    setShowModal(false);
    setShowDeleteLinkModal(false);
    setShowShareLinkModal(false);
    setSelectedItem({});
  };

  const takeActionOnClick = (item, action) => {
    setSelectedItem(item);
    if (action === ACTIONS.EDIT) setShowModal(true);
    if (action === ACTIONS.DELETE) setShowDeleteLinkModal(true);
    if (action === ACTIONS.SHARE) setShowShareLinkModal(true);
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
            onClick={(item, action) => takeActionOnClick(item, action)}
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
                        quickLinkSearch: {
                          __typename: "quickLinkSearch",
                          edges: [
                            ...fetchMoreResult.quickLinkSearch.edges,
                            ...prevResult.quickLinkSearch.edges,
                          ],
                          pageInfo: fetchMoreResult.quickLinkSearch.pageInfo,
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
          <ManageLinkModal
            openModal={() => setShowModal(true)}
            closeModal={() => closeModal()}
            data={selectedItem}
            title={"Edit Quick Link"}
            isOpen={showModal}
            actionClick={() => saveLink()}
            onChange={(value, key) => {
              setSelectedItem((prev) => ({ ...prev, [key]: value }));
            }}
          />
          <ShareLinkModal
            openModal={() => setShowShareLinkModal(true)}
            closeModal={() => closeModal()}
            data={selectedItem}
            title={"Share Quick Link"}
            isOpen={showShareLinkModal}
            onChange={(value, key) => {
              setSelectedItem((prev) => ({ ...prev, [key]: value }));
            }}
          />
          <DeleteLinkModal
            openModal={() => setShowDeleteLinkModal(true)}
            closeModal={() => closeModal()}
            data={selectedItem}
            title={"Delete Link"}
            isOpen={showDeleteLinkModal}
            actionClick={() => deleteLink()}
            onChange={(value, key) => {
              setSelectedItem((prev) => ({ ...prev, [key]: value }));
            }}
          />
        </ManageLinkHeader>
      </Container>
    </TopHeaderWrapper>
  );
}
