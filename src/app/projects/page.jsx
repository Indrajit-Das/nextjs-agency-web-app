import AllProject from "@/components/AllProject";
import Breadcrumb from "@/components/Breadcrumb";
import SubscribeSection from "@/components/SubscribeSection";

const Page = () => {
  return <div>
    <Breadcrumb title={'List of All Projects'}/>
    <AllProject/>
    <SubscribeSection/>
  </div>;
};
export default Page;