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
import myImg from '@assets/myImg.jpg'
import Input from "@elements/Input";
import UpdatePasswordCard from "@components/profiles/UpdatePasswordCard";
import ProfileCard from "@components/profiles/ProfileCard";
import LogoutCard from "@components/profiles/LogoutCard";
// import Button from "@elements/Button";

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

export default function Profile() {
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
        quickLinkSearch: { edges: list, pageInfo },
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
      <Container className="flex-1 p-4 md:px-20 md:py-4">
        <div className="w-full lg:w-3/5 m-auto grid grid-cols-1 md:grid-cols-2 md:h-full content-center gap-4">
            <div className="flex flex-col gap-2">
               <ProfileCard />
            </div>
            <div className="flex flex-col justify-between gap-2">
               <UpdatePasswordCard /> 
               <LogoutCard /> 
            </div>
        </div>
      </Container>
    </TopHeaderWrapper>
  );
}
