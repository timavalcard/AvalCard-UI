import Banner from "@/components/ui/main/contactUs/Banner";
import Form from "@/components/ui/main/contactUs/Form";
import Info from "@/components/ui/main/contactUs/Info";
import SocialMedia from "@/components/ui/main/contactUs/SocialMedia";

export const metadata = {
    title: 'تماس با ما'
}

export default function Page() {
    return (
        <>

            <Banner />

            <div className="container ">
                <div className="grid mt-6 grid-cols-12 gap-6">
                    <div className="col-span-7">
                        <Info />

                        <SocialMedia />

                    </div>
                    <div className="col-span-5 -mt-32 relative z-10">
                        <Form />
                    </div>
                </div>
                
            </div>


        </>
    );
}