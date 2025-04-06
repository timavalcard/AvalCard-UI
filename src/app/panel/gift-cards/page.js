import Header from "@/components/ui/panel/inlineMenu/InlineMenu";
import Card from "@/components/ui/globals/card/Card";
import More from "@/components/ui/globals/More";

export const metadata = {
  title: 'گیفت کارت ها'
}

export default function Home() {
  return (
    <>

    <Header />

      <div className={` mt-custom-4 section`}>
        <div className={`flex huge-text-little-bold  justify-between items-center`}>
          <div className={`text-[#2E2E2E]`}>لیست گیفت کارت ها</div>
          
        </div>
        <div className='grid grid-cols-4 items-center justify-center xl:gap-10 gap-5'>
          <Card title={'twitch'} text={'گیفت تویچ ویژه مشترکین'} img="/images/twitchBig.svg" />
          <Card title={'twitch'} text={'گیفت تویچ ویژه مشترکین'} img="/images/spotifyBig.svg" />
          <Card title={'twitch'} text={'گیفت تویچ ویژه مشترکین'} img="/images/steam.svg" />
          <Card title={'twitch'} text={'گیفت تویچ ویژه مشترکین'} img="/images/xBox.svg" />
          <Card title={'twitch'} text={'گیفت تویچ ویژه مشترکین'} img="/images/spotifyBig.svg" />
          <Card title={'twitch'} text={'گیفت تویچ ویژه مشترکین'} img="/images/steam.svg" />
        </div>
      </div>
      <div className={` mt-custom-4 section`}>
        <div className={`flex huge-text-little-bold  justify-between items-center`}>
          <div className={`text-[#2E2E2E]`}> گیفت کارت</div>
          
        </div>
        <div className='grid grid-cols-4 items-center justify-center xl:gap-10 gap-5'>
          <Card title={'twitch'} text={'گیفت تویچ ویژه مشترکین'} img="/images/twitchBig.svg" />
          <Card title={'twitch'} text={'گیفت تویچ ویژه مشترکین'} img="/images/spotifyBig.svg" />
          <Card title={'twitch'} text={'گیفت تویچ ویژه مشترکین'} img="/images/steam.svg" />
          <Card title={'twitch'} text={'گیفت تویچ ویژه مشترکین'} img="/images/xBox.svg" />
          <Card title={'twitch'} text={'گیفت تویچ ویژه مشترکین'} img="/images/twitchBig.svg" />
          <Card title={'twitch'} text={'گیفت تویچ ویژه مشترکین'} img="/images/spotifyBig.svg" />
          <Card title={'twitch'} text={'گیفت تویچ ویژه مشترکین'} img="/images/steam.svg" />
          <Card title={'twitch'} text={'گیفت تویچ ویژه مشترکین'} img="/images/xBox.svg" />
          <Card title={'twitch'} text={'گیفت تویچ ویژه مشترکین'} img="/images/twitchBig.svg" />
          <Card title={'twitch'} text={'گیفت تویچ ویژه مشترکین'} img="/images/spotifyBig.svg" />
          <Card title={'twitch'} text={'گیفت تویچ ویژه مشترکین'} img="/images/steam.svg" />
          <Card title={'twitch'} text={'گیفت تویچ ویژه مشترکین'} img="/images/xBox.svg" />
        </div>
      </div>
      <div className={` mt-custom-4 section`}>
        <div className={`flex huge-text-little-bold  justify-between items-center`}>
          <div className={`text-[#2E2E2E]`}> گیفت کارت</div>
          
        </div>
        <div className='grid grid-cols-4 items-center justify-center xl:gap-10 gap-5'>
          <Card title={'twitch'} text={'گیفت تویچ ویژه مشترکین'} img="/images/twitchBig.svg" />
          <Card title={'twitch'} text={'گیفت تویچ ویژه مشترکین'} img="/images/spotifyBig.svg" />
          <Card title={'twitch'} text={'گیفت تویچ ویژه مشترکین'} img="/images/steam.svg" />
          <Card title={'twitch'} text={'گیفت تویچ ویژه مشترکین'} img="/images/xBox.svg" />
          <Card title={'twitch'} text={'گیفت تویچ ویژه مشترکین'} img="/images/twitchBig.svg" />
          <Card title={'twitch'} text={'گیفت تویچ ویژه مشترکین'} img="/images/spotifyBig.svg" />
          <Card title={'twitch'} text={'گیفت تویچ ویژه مشترکین'} img="/images/steam.svg" />
          <Card title={'twitch'} text={'گیفت تویچ ویژه مشترکین'} img="/images/xBox.svg" />
        </div>
      </div>
    </>
  );
}
