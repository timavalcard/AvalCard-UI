"use client"

import Header from "@/components/ui/panel/inlineMenu/InlineMenu";
import Card from "@/components/ui/globals/card/Card";
import More from "@/components/ui/globals/More";
import {useDispatch} from "react-redux";
import { useRouter } from "next/navigation";
import {logout} from "../../../helpers/actions/authActions";
import {useEffect} from "react"
export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(()=>{
    dispatch(logout(() => {
      router.push('https://avalcard.com/');
    }));

  },[])
  return (
    <>

    </>
  );
}
