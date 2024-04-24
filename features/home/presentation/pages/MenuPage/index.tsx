import DefaultLayout from "@layouts/default";
import MenuSidebar from "@layouts/menu-layout/components/MenuSidebar";

function MyMenuPage() {
  return (
    <DefaultLayout withoutFooter padding="0">
      <MenuSidebar extraType={"mobile_sidebar"} />
    </DefaultLayout>
  );
}

export default MyMenuPage;
