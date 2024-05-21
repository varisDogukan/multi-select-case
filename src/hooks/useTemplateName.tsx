import React from "react";

/**
 * Name, içerisinde searchTerm içeriyorsa içerdiği değeri bold etiketi ile kapsa ve çıktı olarak dön.
 * @param  searchTerm string
 * @param  name string
 * @returns
 */
export default function useTemplateName(searchTerm: string, name: string) {
  const [nameTemplate, setNameTemplate] = React.useState<React.ReactNode>(null);
  const index = name?.toLowerCase().indexOf(searchTerm.toLowerCase());

  React.useEffect(() => {
    if (searchTerm.length > 0 && index !== -1) {
      const highlightedName = (
        <p>
          {name.slice(0, index)}
          <b>{name.slice(index, index + searchTerm.length)}</b>
          {name.slice(index + searchTerm.length)}
        </p>
      );

      setNameTemplate(highlightedName);
    } else {
      setNameTemplate(name);
    }
  }, [searchTerm, name, index]);

  return nameTemplate;
}
