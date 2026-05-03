function wordExistenceChecker(title, toCheckText) {
  return title.toLowerCase().trim().includes(toCheckText.toLowerCase().trim());
}

export default wordExistenceChecker;
