import PropTypes from "prop-types";
import ManageLinkCard from "@components/manage-links/ManageLinkCard";

export default function ManageLinkList({ loading, data = [], onClick }) {
  return (
    !loading && (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {(data || []).map(({ node: item }, index) => (
          <ManageLinkCard data={item} onClick={onClick} key={index} />
        ))}
      </div>
    )
  );
}

ManageLinkList.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.any,
  onClick: PropTypes.func,
};

ManageLinkList.defaultProps = {
  loading: false,
  data: [],
  onClick: null,
};
