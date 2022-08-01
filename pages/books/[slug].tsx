import { NextPage } from "next/types";
import { useRouter } from "next/router";
const Book: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className="w-full text-xl text-center mt-10">Book with id: {slug}</div>
  );
};

export default Book;
