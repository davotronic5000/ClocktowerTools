import FileUpload from "@/components/file-upload/file-upload";
import SideBar from "@/components/sidebar/sidebar";

const Page = () => {
    return (
        <div className="flex grow overflow-auto">
            <SideBar heading="Script Tool Options">
                <FileUpload />
            </SideBar>
            <article className="overflow-auto h-full grow">
                PDF
                <div className="h-[2000px]">Stuff</div>
            </article>
        </div>
    );
};

export default Page;
