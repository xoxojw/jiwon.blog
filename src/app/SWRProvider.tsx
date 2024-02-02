"use client";
import { SWRConfig } from "swr";

const SWRProvider = ({ children }: { children: React.ReactNode; }) => {
  return (
    <SWRConfig value={{
      fetcher: (url: string) => fetch(url).then(res => res.json())
    }}>
      {children}
    </SWRConfig>
  )
}

export default SWRProvider