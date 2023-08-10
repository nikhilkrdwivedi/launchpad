import Container from "@components/containers/Container";
import TopHeaderWrapper from "@components/headers/TopHeaderWrapper";
// import Button from "@elements/Button";
import Link from "@elements/Link";
import { useEffect, useMemo } from "react";
import { useState } from "react";
import { FiExternalLink, FiEdit } from "react-icons/fi";
import { FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import LinkedInShareButton from "@components/share/LinkedInShareButton";
import TwitterShareButton from "@components/share/TwitterShareButton";
import FaceBookShareButton from "@components/share/FaceBookShareButton";
import Input from "@elements/Input";
import Button from "@elements/Button";
import Modal from "@elements/Modal";
import EditLinkModal from "@components/manage-links/ManageLinkModal";
import ManageLinkHeader from "@components/manage-links/ManageLinkHeader";
import { useQuery, gql, useMutation } from '@apollo/client'
import { CREATE_QUICKLINK__MUTATION, QUICKLINKS_QUERY, UPDATE_QUICKLINK__MUTATION,  } from "../../data/graphql/queries/quickLinks";
import ManageLinkCard from "@components/manage-links/ManageLinkCard";
import NoDataFound from "@components/manage-links/NoDataFound";
import ManageLinkList from "@components/manage-links/ManageLinkList";
import FullScreenLoader from "@components/loaders/FullScreenLoader";
import { ToastContainer, toast } from 'react-toastify';
// import { showToastSuccess,  } from "../../helpers/toast";
import { useTheme } from "@contexts/ThemeContext";

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
  // {userCollection: { edges: { node } }}
  // :{quickLinkCollection:{edges:quickLinksList}}
  const { isDarkMode, toggleTheme } = useTheme();
  let { data, loading:quickLinksQueryLoading, error } = useQuery(QUICKLINKS_QUERY,{
    variables: { first:2 },
  })
  console.log({data , quickLinksQueryLoading, error})
  const [createList] = useMutation(CREATE_QUICKLINK__MUTATION);
  const [updateList] = useMutation(UPDATE_QUICKLINK__MUTATION);
  const [showModal, setShowModal] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [quickLinksList, setQuickLinksList] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  useMemo(() =>{
    console.log("!")
    if(data){
      const {quickLinkCollection:{edges:list, pageInfo}} = data;
      console.log({list,pageInfo})
      setQuickLinksList(list);
      setPageInfo(pageInfo);
    }
  }, [quickLinksQueryLoading,data]);

  

  const saveLink = async () => {
    try {
      console.log({selectedItem})
      const call = selectedItem.id ? updateList : createList;
        const res = await call({
          variables: selectedItem,
          refetchQueries: [QUICKLINKS_QUERY]
        })
        setShowModal(false)
        toast('Great news! Your changes have been saved. 😃', {
          type:'success',
          theme : isDarkMode ? 'dark' : 'light'
        })
    } catch (error) {
      console.log({error})
      const errorMsg = error.message
      toast(errorMsg, {
        type:'error',
        theme : isDarkMode ? 'dark' : 'light'
      })
    }
  }
  const openManageLinkModal = (item) => {
    setSelectedItem(item);
    console.log({item})
    setShowModal(true);
  };
  const closeManageLinkModal = () => {
    setShowModal(false);
    setSelectedItem({});
  };
  return (
    <TopHeaderWrapper>
      <Container className="flex-1 dark:bg-gray-900 px-4 md:px-20 md:py-4">
        <ManageLinkHeader onClick={() => openManageLinkModal({quickNote:'', link: ''})}>
        <FullScreenLoader  show={quickLinksQueryLoading} showCloseIcon={false}/>
        <ManageLinkList loading={quickLinksQueryLoading} data={quickLinksList} onClick={(item) => openManageLinkModal(item)}  />
        <NoDataFound loading={quickLinksQueryLoading} data={quickLinksList}  />
        {console.log({selectedItem})}
        <EditLinkModal
          openModal={() => setShowModal(true)}
          closeModal={() => closeManageLinkModal()}
          data={selectedItem}
          title={"Edit Quick Link"}
          isOpen={showModal}
          actionClick={()=>saveLink()}
          onChange={(value, key) => { console.log({value, key}); setSelectedItem((prev)=>({...prev, [key]:value}))}}
        />
      </ManageLinkHeader>
      </Container>

    </TopHeaderWrapper>
  );
}
