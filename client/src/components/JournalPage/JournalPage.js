import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJournals } from "../../_actions/journal_action";
import PageContainer from "../utils/PageContainer";
import JournalContainer from "./Sections/JournalContainer";
import Journal from "./Sections/Journal";
import Loading from "./Sections/Loading";
import MoreButton from "./Sections/MoreButton";

function JournalPage() {
  const [limit, setLimit] = useState(6);
  let journal = useSelector((state) => state.journal);
  let { userData } = useSelector((state) => state.userStore);
  let { journalInfo, loading, count } = useSelector((state) => state.journal);
  const dispatch = useDispatch();

  useEffect(() => {
    let body = {
      limit,
      filters: {
        name: userData && userData.name,
      },
    };

    dispatch(getJournals(body));
  }, [dispatch, limit, userData]);

  const onMoreHandler = () => {
    // 더보기 버튼을 위한 다음 limit 설정
    let nextLimit = limit + 6;
    let body = {
      limit: nextLimit,
    };
    dispatch(getJournals(body));
    setLimit(nextLimit);
  };

  return (
    <PageContainer>
      {loading ? (
        <Loading>로딩중...</Loading>
      ) : (
        <JournalContainer>
          <Journal journal={journal} info={journalInfo} />
        </JournalContainer>
      )}
      <MoreButton foo={onMoreHandler} count={count} limit={limit} />
    </PageContainer>
  );
}

export default JournalPage;
