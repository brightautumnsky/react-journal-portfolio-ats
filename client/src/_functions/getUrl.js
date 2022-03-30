const getUrl = (value) => {
  switch (value) {
    case "Happy":
      return "/images/emotions/happy.png";
    case "Joyful":
      return "/images/emotions/joyful.png";
    case "Fine":
      return "/images/emotions/fine.png";
    case "Sad":
      return "/images/emotions/sad.png";
    case "Angry":
      return "/images/emotions/angry.png";
    default:
      return "/images/emotions/fine.png";
  }
};

export default getUrl;
