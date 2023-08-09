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
import { QUICKLINKS_QUERY, QUICKLINK__MUTATION } from "../../data/graphql/queries/quickLinks";
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
  let { data, loading:quickLinksQueryLoading, error } = useQuery(QUICKLINKS_QUERY)
  console.log({data , quickLinksQueryLoading, error})
  const [createList] = useMutation(QUICKLINK__MUTATION)
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
  }, [quickLinksQueryLoading]);

  

  const [_data, setData] = useState([]);
  // const fetchDate = async () => {
  //   let data = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   // console.log({ data: await data.json() });
  //   data = await data.json();
  //   setData(data);
  // };
  useEffect(() => {
    // fetchDate();
  }, []);
  const saveLink = async () => {
    try {
        console.log({selectedItem})
        const res = await createList({
          variables: selectedItem,
        })
        console.log('🚀 ~ file: Home.tsx:97 ~ onDidDismiss: ~ res', res)
    } catch (error) {
      console.log({error})
      const errorMsg = error.message
      // showToastSuccess(errorMsg, 'error')
      toast(errorMsg, {
        type:'error',
        theme : isDarkMode ? 'dark' : 'light'
      })
    }
  }
  const openEditLinkModal = (item) => {
    setSelectedItem(item);
    console.log({item})
    setShowModal(true);
  };
  const closeEditLinkModal = () => {
    setShowModal(false);
    setSelectedItem({});
  };
  const notify = () => toast("Wow so easy!");
  return (
    <TopHeaderWrapper>
       {/* <button onClick={notify}>Notify!</button> */}
      <Container className="flex-1 dark:bg-gray-900">
        <ManageLinkHeader onClick={() => openEditLinkModal({quickNote:new Date(), link: Date.now()})}>
        <FullScreenLoader  show={quickLinksQueryLoading} showCloseIcon={false}/>
        <ManageLinkList loading={quickLinksQueryLoading} data={quickLinksList}  />
        <NoDataFound loading={quickLinksQueryLoading} data={quickLinksList}  />
        {console.log({selectedItem})}
        <EditLinkModal
          openModal={() => setShowModal(true)}
          closeModal={() => closeEditLinkModal()}
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
