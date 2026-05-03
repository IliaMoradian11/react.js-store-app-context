function wordExistenceChecker(title, toCheckText) {
  return title.toLowerCase().trim().includes(toCheckText.toLowerCase().trim());
}

function categoryChecker(productCategory, category) {
  if (category === "all") return true;
  return productCategory === category;
}

export { wordExistenceChecker, categoryChecker };
