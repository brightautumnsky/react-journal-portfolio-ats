import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getJournal } from "../../_actions/journal_action";
import PageContainer from "../utils/PageContainer";
import Detail from "./sections/Detail";

function DetailPage(props) {
  const { journalInfo } = useSelector((state) => state.journal);
  const dispatch = useDispatch();
  const id = props.match.params.id;

  useEffect(() => {
    let dataToSubmit = `?id=${id}&type=single`;
    dispatch(getJournal(dataToSubmit));
  }, [dispatch, id]);

  return (
    <PageContainer>
      <Detail info={journalInfo} id={id} props={props} />
    </PageContainer>
  );
}

export default DetailPage;
