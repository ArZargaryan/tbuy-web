import { useEffect } from "react";
import { useRouter } from "next/router";

const useRouterPrefetch = () => {
  const router = useRouter();

  useEffect(() => {
    router.prefetch = async () => {};
  }, [router]);

  return router;
};

export default useRouterPrefetch;
