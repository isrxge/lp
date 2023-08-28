import Link from "next/link";

import "../../styles/new.scss";

import { useSelector } from "react-redux";

import { language } from "@/feature/changeLanguage/changeLanguageSlice";

import Data from "@/config/data.json";

import DataEn from "@/config/dataEn.json";
import Image from "next/image";
export default function NewItem({ src, title, id, i }: any) {
  const curlanguage = useSelector((rootState) => language(rootState));

  return (
    <div className="py-4 parent-newitem">
      <div className="shadow-lg group container  rounded-md bg-gray-50 justify-center items-center max-w-sm flex  mx-auto content-div">
        <div className="h-5/5">
          <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat h-3/5 w-full">
            <Image
              src={src}
              className="transition duration-300 ease-in-out group-hover:scale-110 img-newitem h-2/5 w-full"
              alt="Louvre"
            />
          </div>

          <div className="py-8 px-4 bg-gray-50  rounded-b-md fd-cl group-hover:opacity-25 new-title">
            <span className="block text-lg text-gray-800 font-bold tracking-wide">
              {title}
            </span>
          </div>
        </div>

        <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
          <div className="pt-8 text-end">
            <Link
              className="text-end rounded-lg p-4 bg-gray-50  text-gray-700 font-bold text-lg"
              href={`/blog/${id}`}
            >
              {curlanguage.changeLanguage.value == "en"
                ? DataEn["text2"].name
                : Data["text2"].name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
