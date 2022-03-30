import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJournals } from "../../_actions/journal_action";
import PageContainer from "../utils/PageContainer";
import Like from "./Sections/Like";
import Emotion from "./Sections/Emotion";
import Information from "./Sections/Information";
import Tip from "./Sections/Tip";
import Logout from "./Sections/Logout";

function MainPage(props) {
  const dispatch = useDispatch();
  let { userData } = useSelector((state) => state.userStore);
  let { journalInfo } = useSelector((state) => state.journal);

  useEffect(() => {
    let body = {
      limit: 6,
      filters: {
        name: userData && userData.name,
      },
    };
    dispatch(getJournals(body));
  }, [dispatch, userData]);

  if (userData && !userData.isAuth) return <Logout props={props} />;

  return (
    <PageContainer>
      <Emotion info={journalInfo} />
      <Like info={journalInfo} />
      <Information />
      <Tip />
    </PageContainer>
  );
}

export default MainPage;
