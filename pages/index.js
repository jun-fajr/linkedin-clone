import { AnimatePresence } from "framer-motion";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
// import { modalState, modalTypeState } from "../atoms/modalAtom";
// import Feed from "../components/Feed";
import Header from "../components/Header";
// import Modal from "../components/Modal";
// import Sidebar from "../components/Sidebar";
// import Widgets from "../components/Widgets";
// import { connectToDatabase } from "../util/mongodb";

export default function Home() {
  return (
    <div className="bg-[#F3F2EF] dark:bg-black dark:text-white h-screen overflow-y-scroll md:space-y-6">
      <Head>
        <title>Feed | LinkedIn</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex justify-center gap-x-5 px-4 sm:px-12">
        <div className="flex flex-col md:flex-row gap-5">
          {/* <Sidebar /> */}
          {/* <Feed posts={posts} /> */}
          test
        </div>
        {/* <Widgets articles={articles} /> */}
        {/* <AnimatePresence>
          {modalOpen && (
            <Modal handleClose={() => setModalOpen(false)} type={modalType} />
          )}
        </AnimatePresence> */}
      </main>
    </div>
  );
}
