import { useEffect } from "react";

type Props = {
  ref: React.RefObject<HTMLElement>;
  callback: () => void;
};

/**
 * Referansı alınan elementin dışında bir yer tıklanırsa callback fonksiyonunu çalıştır
 * @param {ref, callback}
 */
export default function useOutsideClick({ ref, callback }: Props) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }

    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}
