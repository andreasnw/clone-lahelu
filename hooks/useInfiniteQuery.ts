import { useState, useEffect, useCallback } from "react";

type QueryResult<T> = {
  data: T[];
  error: Error | null;
  isLoading: boolean;
  hasMore: boolean;
  fetchNextPage: () => void;
};

const useInfiniteQuery = <T>(initialUrl: string): QueryResult<T> => {
  const [data, setData] = useState<T[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchNextPage = useCallback(async () => {
    if (!hasMore || isLoading) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${initialUrl}?page=${page}`);
      const result = await response.json();

      setData((prevData) => [...prevData, ...result.postInfos]);

      setHasMore(result.hasMore);
      if (result.hasMore) {
        setPage((prevPage) => prevPage + 1);
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(new Error(err.message));
      }
    } finally {
      setIsLoading(false);
    }
  }, [page, hasMore, isLoading]);

  useEffect(() => {
    fetchNextPage();
  }, []);

  return {
    data,
    fetchNextPage,
    isLoading,
    hasMore,
    error,
  };
};

export default useInfiniteQuery;
