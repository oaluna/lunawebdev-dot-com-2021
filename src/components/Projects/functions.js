import "../../styles.css";

//Function that rounds up numbers to 100K, 1.0M, 1.0B - "/10" is a trick to get 1 decimal

export function millionRounder(number) {
  if (number !== null) {
    if (number >= 1000) {
      if (number >= 100000000) {
        return (number = Math.round(number / 1000000) / 10 + "B");
      }
      if (number >= 1000000) {
        return (number = Math.round(number / 100000) / 10 + "M");
      } else {
        return (number = Math.round(number / 1000) + "K");
      }
    } else {
      return number;
    }
  } else {
    return null;
  }
}

export function socialIconSelector(social) {
  if (social === "Youtube") {
    return "https://socialflowagency.com/wp-content/uploads/2019/05/150-Youtube-Icon.png";
  }
  if (social === "Instagram") {
    return "https://socialflowagency.com/wp-content/uploads/2019/05/150-Instagram-Icon.png";
  }
  if (social === "TikTok") {
    return "https://socialflowagency.com/wp-content/uploads/2019/05/150-TikTok-Icon.png";
  }
  if (social === "Facebook") {
    return "https://socialflowagency.com/wp-content/uploads/2019/05/150-Facebook-Icon.png";
  }
  if (social === "Twitter") {
    return "https://socialflowagency.com/wp-content/uploads/2019/05/150-Twitter-Icon.png";
  }
  if (social === "Snapchat") {
    return "https://socialflowagency.com/wp-content/uploads/2019/05/150-Youtube-Icon.png";
  }
  return null;
}

export const toggleBackgroundFix = (open) => {
  if (open) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "scroll";
  }
  return null;
}
