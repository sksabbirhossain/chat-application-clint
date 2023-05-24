import { useSelector } from "react-redux";
import { selectUserInfo } from "../../features/auth/authSelectors";
import { useGetConversationsQuery } from "../../features/conversations/conversationsApi";
import ChatItem from "./ChatItem";

export default function ChatItems() {
  const user = useSelector(selectUserInfo);
  const {
    data: conversations,
    isLoading,
    isError,
  } = useGetConversationsQuery(user?._id);

  let content;
  console.log(conversations);

  if (isLoading) content = <li>Loading...</li>;
  if (!isLoading && isError) content = <li>Sorry Something went wrong!</li>;
  if (!isLoading && !isError && conversations?.conversations?.length === 0)
    content = <li>No Conversations Found!</li>;
  if (!isLoading && !isError && conversations?.conversations?.length > 0)
    content = conversations?.map((conversation) => (
      <ChatItem
        avatar="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg"
        name="Saad Hasan"
        lastMessage="bye"
        lastTime="25 minutes"
      />
    ));

  return (
    <ul>
      <li>{content}</li>
    </ul>
  );
}
