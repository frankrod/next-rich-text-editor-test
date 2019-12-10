import RichTextEditor from "react-rte/lib/RichTextEditor";

const Index = () => (
  <div style={{ marginBottom: "4rem" }}>
    <RichTextEditor
      readOnly
      //   rootStyle={rootStyle()}
      editorStyle={{
        fontFamily: "Open Sans",
        // color: `${color("secondaryBrand")}`,
        // color: "#c2c2c2",
        padding: "3rem 6rem"
      }}
      //   blockRenderMap={Draft.DefaultDraftBlockRenderMap.merge(
      //     Map({
      //       "header-one": {
      //         element: "h3",
      //         wrapper: "<span"
      //       },
      //       "header-two": {
      //         element: "h4",
      //         wrapper: <Text size="h4_new" fontWeight="bold" />
      //       },
      //       "header-three": {
      //         element: "h5",
      //         wrapper: <Text size="h5_new" fontWeight="bold" />
      //       },
      //       "unordered-list-item": {
      //         element: "li",
      //         wrapper: <Text size="body1_new" textAs="ul" />
      //       },
      //       "ordered-list-item": {
      //         element: "li",
      //         wrapper: <Text size="body1_new" textAs="ol" />
      //       },
      //       unstyled: {
      //         element: "div",
      //         wrapper: <Text size="body1_new" textAs="div" />
      //       }
      //     })
      //   )}
      toolbarStyle={{
        fontFamily: "Open Sans",
        color: "#424d5d"
      }}
      //   toolbarConfig={{
      //     display: [
      //       "INLINE_STYLE_BUTTONS",
      //       "BLOCK_TYPE_BUTTONS",
      //       "LINK_BUTTONS",
      //       "BLOCK_TYPE_DROPDOWN",
      //       "HISTORY_BUTTONS"
      //     ],
      //     INLINE_STYLE_BUTTONS: [
      //       {
      //         label: "Bold",
      //         style: "BOLD",
      //         className: "custom-css-class"
      //       },
      //       { label: "Italic", style: "ITALIC" },
      //       { label: "Underline", style: "UNDERLINE" }
      //     ],
      //     BLOCK_TYPE_DROPDOWN: [
      //       { label: "Normal", style: "unstyled" },
      //       { label: "Heading Large", style: "header-one" },
      //       { label: "Heading Medium", style: "header-two" },
      //       { label: "Heading Small", style: "header-three" }
      //     ],
      //     BLOCK_TYPE_BUTTONS: [
      //       { label: "UL", style: "unordered-list-item" },
      //       { label: "OL", style: "ordered-list-item" }
      //     ]
      //   }}
      value={RichTextEditor.createValueFromString("- 1st", "markdown")}
    />
  </div>
);

export default Index;
