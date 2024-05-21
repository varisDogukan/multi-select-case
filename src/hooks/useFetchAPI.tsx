import React from "react";
import { Status } from "../types";

/**
 * Bir API uç noktasından (ENDPOINT) arama terimi (searchTerm) kullanarak veri çeker.
 * @param0 {string} ENDPOINT
 * @param1 {string} searchTerm
 * @returns {searchResults, status}
 */
export default function useFetchAPI(ENDPOINT: string, searchTerm: string) {
  const [searchResults, setSearchResults] = React.useState([]);
  const [status, setStatus] = React.useState<Status>("empty");

  React.useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function handleSearch() {
      setStatus("loading");

      const url = `${ENDPOINT}?name=${searchTerm}`;

      try {
        const response = await fetch(url, { signal });
        const json = await response.json();

        setSearchResults(json?.results);
        setStatus(json?.results?.length > 0 ? "success" : "empty");
      } catch (error) {
        if (error instanceof Error) {
          if (error.name === "AbortError") {
            console.log("Fetch aborted");
          } else {
            console.error("An unexpected error occurred:", error);
            setStatus("error");
          }
        }
      }
    }

    handleSearch();

    return () => {
      // Başlatılan bir isteği bileşen unmount olduğunda veya yeni istek gönderildiğinde iptal et.
      controller.abort();
    };
  }, [searchTerm, ENDPOINT]);

  return { searchResults, status };
}
