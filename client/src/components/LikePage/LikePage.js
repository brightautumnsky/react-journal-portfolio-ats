import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getJournals } from "../../_actions/journal_action";
import PageContainer from "../utils/PageContainer";
import Like from "./sections/Like";
import LikeContainer from "./sections/LikeContainer";

function LikePage() {
  const dispatch = useDispatch();
  let { journalInfo } = useSelector((state) => state.journal);
  let { userData } = useSelector((state) => state.userStore);

  useEffect(() => {
    let body = {
      filters: { like: true, name: userData && userData.name },
    };
    dispatch(getJournals(body));
  }, [dispatch, userData]);

  return (
    <PageContainer>
      <LikeContainer>
        <Like info={journalInfo} />
      </LikeContainer>
    </PageContainer>
  );
}

export default LikePage;
