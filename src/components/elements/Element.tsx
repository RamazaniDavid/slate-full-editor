import { ImageElement } from ".";

export const Element = (props: any) => {
  const { attributes, children, element } = props;

  switch (element.type) {
    case "image":
      return <ImageElement {...props} />;
    case "headingOne":
      return <h1 {...attributes}>{children}</h1>;
    case "headingTwo":
      return <h2 {...attributes}>{children}</h2>;
    case "headingThree":
      return <h3 {...attributes}>{children}</h3>;
    case "headingFour":
      return <h4 {...attributes}>{children}</h4>;
    case "headingFive":
      return <h5 {...attributes}>{children}</h5>;
    case "blockquote":
      return <blockquote {...attributes}>{children}</blockquote>;
    case "code":
      return (
        <code {...attributes}>
          <p>{children}</p>
        </code>
      );
    case "alignLeft":
      return (
        <p
          style={{ textAlign: "left", listStylePosition: "inside" }}
          {...attributes}
        >
          {children}
        </p>
      );
    case "alignCenter":
      return (
        <p
          style={{ textAlign: "center", listStylePosition: "inside" }}
          {...attributes}
        >
          {children}
        </p>
      );
    case "alignRight":
      return (
        <p
          style={{ textAlign: "right", listStylePosition: "inside" }}
          {...attributes}
        >
          {children}
        </p>
      );
    case "list-item":
      return <li {...attributes}>{children}</li>;
    case "orderedList":
      return (
        <ol type="1" {...attributes}>
          {children}
        </ol>
      );
    case "unorderedList":
      return <ul {...attributes}>{children}</ul>;
    case "link":
      return <a {...props} />;
    case "table":
      return (
        <table>
          <tbody {...attributes}>{children}</tbody>
        </table>
      );
    case "table-row":
      return <tr {...attributes}>{children}</tr>;
    case "table-cell":
      return <td {...attributes}>{children}</td>;
    default:
      return <p {...attributes}>{children}</p>;
  }
};
