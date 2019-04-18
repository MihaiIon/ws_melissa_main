// ======================================================
// Helpers / Create Slide Helper
// ======================================================

/**
 *
 */
export default (
  id = "MISSING_ID",
  title = [],
  description = "MISSING_DESCRIPTION",
  url = "MISSING_URL"
) => {
  // Format title array
  let formatedTitle = ["MISSING_TITLE"];
  if (typeof title === "string" || title instanceof String) {
    formatedTitle = [title];
  } else if (title instanceof Array && title.length > 0) {
    formatedTitle = title;
  }

  return {
    id,
    title: formatedTitle.map(t => t.toUpperCase()),
    description,
    url
  };
};
