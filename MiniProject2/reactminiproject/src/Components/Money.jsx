import MediaControlCard from "./MediaControlCard";
import MoneyCards from "./MoneyCards";

function Money({ searchTerm }) {
  return (
    <>
      <div>
        <h1>Welcome to Money ....</h1>

        <MediaControlCard></MediaControlCard>

        <MoneyCards searchTerm={searchTerm}></MoneyCards>
      </div>
    </>
  );
}

export default Money;
